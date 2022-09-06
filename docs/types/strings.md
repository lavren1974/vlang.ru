---
sidebar_position: 2
---

# Строки

```v
name := 'Bob'
assert name.len == 3       // напечатает 3
assert name[0] == u8(66) // индексация дает byte, u8(66) == `B`
assert name[1..3] == 'ob'  // slicing дает строку 'ob'

// escape codes
windows_newline := '\r\n'      // экранировать специальные символы, как в C
assert windows_newline.len == 2

// arbitrary bytes can be directly specified using `\x##` notation where `#` is
// a hex digit aardvark_str := '\x61ardvark' assert aardvark_str == 'aardvark'
assert '\xc0'[0] == u8(0xc0)

// or using octal escape `\###` notation where `#` is an octal digit
aardvark_str2 := '\141ardvark'
assert aardvark_str2 == 'aardvark'

// Unicode can be specified directly as `\u####` where # is a hex digit
// and will be converted internally to its UTF-8 representation
star_str := '\u2605' // ★
assert star_str == '★'
assert star_str == '\xe2\x98\x85' // Таким же образом можно указать UTF-8
```

В V строка представляет собой массив байтов, доступный только для чтения. Все символы Unicode кодируются с использованием UTF-8:

```v
s := 'hello 🌎' // эмодзи занимает 4 байта
assert s.len == 10

arr := s.bytes() // преобразовать `string` в `[]u8`
assert arr.len == 10

s2 := arr.bytestr() // преобразовать `[]byte` в `string`
assert s2 == s
```

Строковые значения неизменяемы. Вы не можете изменять элементы:

```v failcompile
mut s := 'hello 🌎'
s[0] = `H` // не допускается
```

> ошибка: невозможно назначить, s[i]поскольку строки V неизменяемы

Обратите внимание, что при индексировании строки будет получен `byte`, а не `rune` либо другой`string`. Индексы соответствуют байтам в строке, а не кодовым точкам Unicode. Если вы хотите преобразовать `byte` в `string`, используйте `.ascii_str()` метод:

```v
country := 'Netherlands'
println(country[0]) // Вывод: 78
println(country[0].ascii_str()) // Вывод: N
```

Для обозначения строк можно использовать как одинарные, так и двойные кавычки. Для согласованности `vfmt` преобразует двойные кавычки в одинарные, если только строка не содержит символ одинарной кавычки.

Для необработанных строк добавьте `r`. Обработка экранирования не выполняется для необработанных строк:

```v
s := r'hello\nworld' // `\n` будет сохранен как два символа
println(s) // "hello\nworld"
```

Строки можно легко преобразовать в целые числа:

```v
s := '42'
n := s.int() // 42

// все литералы int поддерживаются
assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1111_0000_1010'.int() == 3850
assert '-0b1111_0000_1010'.int() == -3850
```

Для более сложной `string` обработки и преобразования обратитесь к модулю
[vlib/strconv](https://modules.vlang.io/strconv.html).

## Интерполяция строк

Basic interpolation syntax is pretty simple - use `$` before a variable name. The variable will be
converted to a string and embedded into the literal:

```v
name := 'Bob'
println('Hello, $name!') // Hello, Bob!
```

It also works with fields: `'age = $user.age'`. If you need more complex expressions, use `${}`:
`'can register = ${user.age > 13}'`.

Format specifiers similar to those in C's `printf()` are also supported. `f`, `g`, `x`, `o`, `b`,
etc. are optional and specify the output format. The compiler takes care of the storage size, so
there is no `hd` or `llu`.

To use a format specifier, follow this pattern:

`${varname:[flags][width][.precision][type]}`

- flags: may be zero or more of the following: `-` to left-align output within the field, `0` to use
  `0` as the padding character instead of the default `space` character. (Note: V does not currently
  support the use of `'` or `#` as format flags, and V supports but doesn't need `+` to right-align
  since that's the default.)
- width: may be an integer value describing the minimum width of total field to output.
- precision: an integer value preceded by a `.` will guarantee that many digits after the decimal
  point, if the input variable is a float. Ignored if variable is an integer.
- type: `f` and `F` specify the input is a float and should be rendered as such, `e` and `E` specify
  the input is a float and should be rendered as an exponent (partially broken), `g` and `G` specify
  the input is a float--the renderer will use floating point notation for small values and exponent
  notation for large values, `d` specifies the input is an integer and should be rendered in base-10
  digits, `x` and `X` require an integer and will render it as hexadecimal digits, `o` requires an
  integer and will render it as octal digits, `b` requires an integer and will render it as binary
  digits, `s` requires a string (almost never used).

Note: when a numeric type can render alphabetic characters, such as hex strings or special values
like `infinity`, the lowercase version of the type forces lowercase alphabetics and the uppercase
version forces uppercase alphabetics.

Also note: in most cases, it's best to leave the format type empty. Floats will be rendered by
default as `g`, integers will be rendered by default as `d`, and `s` is almost always redundant.
There are only three cases where specifying a type is recommended:

- format strings are parsed at compile time, so specifying a type can help detect errors then
- format strings default to using lowercase letters for hex digits and the `e` in exponents. Use a
  uppercase type to force the use of uppercase hex digits and an uppercase `E` in exponents.
- format strings are the most convenient way to get hex, binary or octal strings from an integer.

See
[Format Placeholder Specification](https://en.wikipedia.org/wiki/Printf_format_string#Format_placeholder_specification)
for more information.

```v
x := 123.4567
println('[${x:.2}]') // round to two decimal places => [123.46]
println('[${x:10}]') // right-align with spaces on the left => [   123.457]
println('[${int(x):-10}]') // left-align with spaces on the right => [123       ]
println('[${int(x):010}]') // pad with zeros on the left => [0000000123]
println('[${int(x):b}]') // output as binary => [1111011]
println('[${int(x):o}]') // output as octal => [173]
println('[${int(x):X}]') // output as uppercase hex => [7B]

println('[${10.0000:.2}]') // remove insignificant 0s at the end => [10]
println('[${10.0000:.2f}]') // do show the 0s at the end, even though they do not change the number => [10.00]
```
## String operators

```v
name := 'Bob'
bobby := name + 'by' // + is used to concatenate strings
println(bobby) // "Bobby"
mut s := 'hello '
s += 'world' // `+=` is used to append to a string
println(s) // "hello world"
```

All operators in V must have values of the same type on both sides. You cannot concatenate an
integer to a string:

```v failcompile
age := 10
println('age = ' + age) // not allowed
```

> error: infix expr: cannot use `int` (right expression) as `string`

We have to either convert `age` to a `string`:

```v
age := 11
println('age = ' + age.str())
```

or use string interpolation (preferred):

```v
age := 12
println('age = $age')
```