---
sidebar_position: 2
---

# Привет мир


```v
fn main() {
	println('Привет мир')
}
```
Сохраните этот фрагмент в файл с именем `hello.v`. Теперь сделайте: `v run hello.v`.

> Это предполагает, что вы сделали символическую ссылку на V с помощью `v symlink`, как описано
[здесь](https://github.com/vlang/v/blob/master/README.md#symlinking).
Если вы еще этого не сделали, вам нужно ввести путь к V вручную.

Поздравляем — вы только что написали и выполнили свою первую программу на V!

Вы можете скомпилировать программу без выполнения с помощью `v hello.v`.
Смотри `v help` все поддерживаемые команды.

Из приведенного выше примера видно, что функции объявляются с помощью `fn` ключевого слова.
Тип возвращаемого значения указывается после имени функции. В этом случае `main` ничего не возвращает, поэтому возвращаемый тип отсутствует.

Как и во многих других языках (таких как C, Go и Rust), `main` это точка входа в вашу программу.

[`println`](./builtin-functions#println) одна из немногих [встроенных функций](./builtin-functions).
Он печатает переданное ему значение на стандартный вывод.

`fn main()` объявление можно пропустить в одном файле программы. Это полезно при написании небольших программ, «скриптов» или просто при изучении языка. Для краткости, `fn main()` в этом уроке они будут пропущены.

Это означает, что программа «hello world» в V так же проста, как

```v
println('hello world')
```

Note: if you do not use explicitly `fn main() {}`, you need to make sure, that all your
declarations, come before any variable assignment statements, or top level function calls,
since V will consider everything after the first assignment/function call as part of your
implicit main function.