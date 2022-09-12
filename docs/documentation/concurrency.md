---
sidebar_position: 21
---

# Concurrency
## Spawning Concurrent Tasks
V's model of concurrency is going to be very similar to Go's.
For now, `go foo()` runs `foo()` concurrently in a different thread:

```v
import math

fn p(a f64, b f64) { // ordinary function without return value
	c := math.sqrt(a * a + b * b)
	println(c)
}

fn main() {
	go p(3, 4)
	// p will be run in parallel thread
	// It can also be written as follows
	// go fn (a f64, b f64) {
	//	c := math.sqrt(a * a + b * b)
	//	println(c)
	// }(3, 4)
}
```

> In V 0.4 `go foo()` will be automatically renamed via vfmt to `spawn foo()`,
and there will be a way to launch a coroutine (a lightweight thread managed by the runtime).

Sometimes it is necessary to wait until a parallel thread has finished. This can
be done by assigning a *handle* to the started thread and calling the `wait()` method
to this handle later:

```v
import math

fn p(a f64, b f64) { // ordinary function without return value
	c := math.sqrt(a * a + b * b)
	println(c) // prints `5`
}

fn main() {
	h := go p(3, 4)
	// p() runs in parallel thread
	h.wait()
	// p() has definitely finished
}
```

This approach can also be used to get a return value from a function that is run in a
parallel thread. There is no need to modify the function itself to be able to call it
concurrently.

```v
import math { sqrt }

fn get_hypot(a f64, b f64) f64 { //       ordinary function returning a value
	c := sqrt(a * a + b * b)
	return c
}

fn main() {
	g := go get_hypot(54.06, 2.08) // spawn thread and get handle to it
	h1 := get_hypot(2.32, 16.74) //   do some other calculation here
	h2 := g.wait() //                 get result from spawned thread
	println('Results: $h1, $h2') //   prints `Results: 16.9, 54.1`
}
```

If there is a large number of tasks, it might be easier to manage them
using an array of threads.

```v
import time

fn task(id int, duration int) {
	println('task $id begin')
	time.sleep(duration * time.millisecond)
	println('task $id end')
}

fn main() {
	mut threads := []thread{}
	threads << go task(1, 500)
	threads << go task(2, 900)
	threads << go task(3, 100)
	threads.wait()
	println('done')
}

// Output:
// task 1 begin
// task 2 begin
// task 3 begin
// task 3 end
// task 1 end
// task 2 end
// done
```

Additionally for threads that return the same type, calling `wait()`
on the thread array will return all computed values.

```v
fn expensive_computing(i int) int {
	return i * i
}

fn main() {
	mut threads := []thread int{}
	for i in 1 .. 10 {
		threads << go expensive_computing(i)
	}
	// Join all tasks
	r := threads.wait()
	println('All jobs finished: $r')
}

// Output: All jobs finished: [1, 4, 9, 16, 25, 36, 49, 64, 81]
```

## Channels
Channels are the preferred way to communicate between threads. V's channels work basically like
those in Go. You can push objects into a channel on one end and pop objects from the other end.
Channels can be buffered or unbuffered and it is possible to `select` from multiple channels.

### Syntax and Usage
Channels have the type `chan objtype`. An optional buffer length can specified as the `cap` field
in the declaration:

```v
ch := chan int{} // unbuffered - "synchronous"
ch2 := chan f64{cap: 100} // buffer length 100
```

Channels do not have to be declared as `mut`. The buffer length is not part of the type but
a field of the individual channel object. Channels can be passed to threads like normal
variables:

```v
fn f(ch chan int) {
	// ...
}

fn main() {
	ch := chan int{}
	go f(ch)
	// ...
}
```

Objects can be pushed to channels using the arrow operator. The same operator can be used to
pop objects from the other end:

```v
// make buffered channels so pushing does not block (if there is room in the buffer)
ch := chan int{cap: 1}
ch2 := chan f64{cap: 1}
n := 5
// push
ch <- n
ch2 <- 7.3
mut y := f64(0.0)
m := <-ch // pop creating new variable
y = <-ch2 // pop into existing variable
```

A channel can be closed to indicate that no further objects can be pushed. Any attempt
to do so will then result in a runtime panic (with the exception of `select` and
`try_push()` - see below). Attempts to pop will return immediately if the
associated channel has been closed and the buffer is empty. This situation can be
handled using an or branch (see [Handling Optionals](./type-declarations.md#handling-optionals)).

```v wip
ch := chan int{}
ch2 := chan f64{}
// ...
ch.close()
// ...
m := <-ch or {
    println('channel has been closed')
}

// propagate error
y := <-ch2 ?
```
### Channel Select

The `select` command allows monitoring several channels at the same time
without noticeable CPU load.  It consists of a list of possible transfers and associated branches
of statements - similar to the [match](./statements-expressions.md#match) command:
```v
import time

fn main() {
	ch := chan f64{}
	ch2 := chan f64{}
	ch3 := chan f64{}
	mut b := 0.0
	c := 1.0
	// ... setup go threads that will send on ch/ch2
	go fn (the_channel chan f64) {
		time.sleep(5 * time.millisecond)
		the_channel <- 1.0
	}(ch)
	go fn (the_channel chan f64) {
		time.sleep(1 * time.millisecond)
		the_channel <- 1.0
	}(ch2)
	go fn (the_channel chan f64) {
		_ := <-the_channel
	}(ch3)

	select {
		a := <-ch {
			// do something with `a`
			eprintln('> a: $a')
		}
		b = <-ch2 {
			// do something with predeclared variable `b`
			eprintln('> b: $b')
		}
		ch3 <- c {
			// do something if `c` was sent
			time.sleep(5 * time.millisecond)
			eprintln('> c: $c was send on channel ch3')
		}
		500 * time.millisecond {
			// do something if no channel has become ready within 0.5s
			eprintln('> more than 0.5s passed without a channel being ready')
		}
	}
	eprintln('> done')
}
```

The timeout branch is optional. If it is absent `select` waits for an unlimited amount of time.
It is also possible to proceed immediately if no channel is ready in the moment `select` is called
by adding an `else { ... }` branch. `else` and `<timeout>` are mutually exclusive.

The `select` command can be used as an *expression* of type `bool`
that becomes `false` if all channels are closed:
```v wip
if select {
    ch <- a {
        // ...
    }
} {
    // channel was open
} else {
    // channel is closed
}
```

### Special Channel Features

For special purposes there are some builtin fields and methods:
```v
struct Abc {
	x int
}

a := 2.13
ch := chan f64{}
res := ch.try_push(a) // try to perform `ch <- a`
println(res)
l := ch.len // number of elements in queue
c := ch.cap // maximum queue length
is_closed := ch.closed // bool flag - has `ch` been closed
println(l)
println(c)
mut b := Abc{}
ch2 := chan Abc{}
res2 := ch2.try_pop(mut b) // try to perform `b = <-ch2`
```

The `try_push/pop()` methods will return immediately with one of the results
`.success`, `.not_ready` or `.closed` - dependent on whether the object has been transferred or
the reason why not.
Usage of these methods and fields in production is not recommended -
algorithms based on them are often subject to race conditions. Especially `.len` and
`.closed` should not be used to make decisions.
Use `or` branches, error propagation or `select` instead (see [Syntax and Usage](#syntax-and-usage)
and [Channel Select](#channel-select) above).

## Shared Objects

Data can be exchanged between a thread and the calling thread via a shared variable.
Such variables should be created as `shared` and passed to the thread as such, too.
The underlying `struct` contains a hidden *mutex* that allows locking concurrent access
using `rlock` for read-only and `lock` for read/write access.

```v
struct St {
mut:
	x int // data to be shared
}

fn (shared b St) g() {
	lock b {
		// read/modify/write b.x
	}
}

fn main() {
	shared a := St{
		x: 10
	}
	go a.g()
	// ...
	rlock a {
		// read a.x
	}
}
```
Shared variables must be structs, arrays or maps.
