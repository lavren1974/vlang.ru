---
sidebar_position: 13
---

# Inline assembly
<!-- ignore because it doesn't pass fmt test (why?) -->
```v ignore
a := 100
b := 20
mut c := 0
asm amd64 {
    mov eax, a
    add eax, b
    mov c, eax
    ; =r (c) as c // output
    ; r (a) as a // input
      r (b) as b
}
println('a: $a') // 100
println('b: $b') // 20
println('c: $c') // 120
```

For more examples, see [github.com/vlang/v/tree/master/vlib/v/tests/assembly/asm_test.amd64.v](https://github.com/vlang/v/tree/master/vlib/v/tests/assembly/asm_test.amd64.v)
