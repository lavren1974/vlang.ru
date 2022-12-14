---
sidebar_position: 5
---

# Функции

```v
fn main() {
	println(add(77, 33))
	println(sub(100, 50))
}

fn add(x int, y int) int {
	return x + y
}

fn sub(x int, y int) int {
	return x - y
}
```

Опять же, тип идет после имени аргумента.

Как и в Go и C, функции нельзя перегружать. Это упрощает код и повышает удобство сопровождения и удобочитаемость.

## Подъемы

Функции можно использовать до их объявления: `add` и `sub` объявляются после `main`, но все равно могут быть вызваны из `main`. Это верно для всех объявлений в V и устраняет необходимость в файлах заголовков или размышлениях о порядке файлов и объявлений.

## Возврат нескольких значений

```v
fn foo() (int, int) {
	return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // игнорировать значения, используя `_`
```