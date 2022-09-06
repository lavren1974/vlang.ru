---
sidebar_position: 6
---

# Atomics

V has no special support for atomics, yet, nevertheless it's possible to treat variables as atomics
by calling C functions from V. The standard C11 atomic functions like `atomic_store()` are usually
defined with the help of macros and C compiler magic to provide a kind of *overloaded C functions*.
Since V does not support overloading functions by intention there are wrapper functions defined in
C headers named `atomic.h` that are part of the V compiler infrastructure.

There are dedicated wrappers for all unsigned integer types and for pointers.
(`byte` is not fully supported on Windows) &ndash; the function names include the type name
as suffix. e.g. `C.atomic_load_ptr()` or `C.atomic_fetch_add_u64()`.

To use these functions the C header for the used OS has to be included and the functions
that are intended to be used have to be declared. Example:

```v globals
$if windows {
	#include "@VEXEROOT/thirdparty/stdatomic/win/atomic.h"
} $else {
	#include "@VEXEROOT/thirdparty/stdatomic/nix/atomic.h"
}

// declare functions we want to use - V does not parse the C header
fn C.atomic_store_u32(&u32, u32)
fn C.atomic_load_u32(&u32) u32
fn C.atomic_compare_exchange_weak_u32(&u32, &u32, u32) bool
fn C.atomic_compare_exchange_strong_u32(&u32, &u32, u32) bool

const num_iterations = 10000000

// see section "Global Variables" below
__global (
	atom u32 // ordinary variable but used as atomic
)

fn change() int {
	mut races_won_by_change := 0
	for {
		mut cmp := u32(17) // addressable value to compare with and to store the found value
		// atomic version of `if atom == 17 { atom = 23 races_won_by_change++ } else { cmp = atom }`
		if C.atomic_compare_exchange_strong_u32(&atom, &cmp, 23) {
			races_won_by_change++
		} else {
			if cmp == 31 {
				break
			}
			cmp = 17 // re-assign because overwritten with value of atom
		}
	}
	return races_won_by_change
}

fn main() {
	C.atomic_store_u32(&atom, 17)
	t := go change()
	mut races_won_by_main := 0
	mut cmp17 := u32(17)
	mut cmp23 := u32(23)
	for i in 0 .. num_iterations {
		// atomic version of `if atom == 17 { atom = 23 races_won_by_main++ }`
		if C.atomic_compare_exchange_strong_u32(&atom, &cmp17, 23) {
			races_won_by_main++
		} else {
			cmp17 = 17
		}
		desir := if i == num_iterations - 1 { u32(31) } else { u32(17) }
		// atomic version of `for atom != 23 {} atom = desir`
		for !C.atomic_compare_exchange_weak_u32(&atom, &cmp23, desir) {
			cmp23 = 23
		}
	}
	races_won_by_change := t.wait()
	atom_new := C.atomic_load_u32(&atom)
	println('atom: $atom_new, #exchanges: ${races_won_by_main + races_won_by_change}')
	// prints `atom: 31, #exchanges: 10000000`)
	println('races won by\n- `main()`: $races_won_by_main\n- `change()`: $races_won_by_change')
}
```

In this example both `main()` and the spawned thread `change()` try to replace a value of `17`
in the global `atom` with a value of `23`. The replacement in the opposite direction is
done exactly 10000000 times. The last replacement will be with `31` which makes the spawned
thread finish.

It is not predictable how many replacements occur in which thread, but the sum will always
be 10000000. (With the non-atomic commands from the comments the value will be higher or the program
will hang &ndash; dependent on the compiler optimization used.)