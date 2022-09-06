---
sidebar_position: 25
---

# ORM

(This is still in an alpha state)

V has a built-in ORM (object-relational mapping) which supports SQLite, MySQL and Postgres,
but soon it will support MS SQL and Oracle.

V's ORM provides a number of benefits:

- One syntax for all SQL dialects. (Migrating between databases becomes much easier.)
- Queries are constructed using V's syntax. (There's no need to learn another syntax.)
- Safety. (All queries are automatically sanitised to prevent SQL injection.)
- Compile time checks. (This prevents typos which can only be caught during runtime.)
- Readability and simplicity. (You don't need to manually parse the results of a query and
    then manually construct objects from the parsed results.)

```v
import sqlite

// sets a custom table name. Default is struct name (case-sensitive)
[table: 'customers']
struct Customer {
	id        int    [primary; sql: serial] // a field named `id` of integer type must be the first field
	name      string [nonull]
	nr_orders int
	country   string [nonull]
}

db := sqlite.connect('customers.db')?

// you can create tables:
// CREATE TABLE IF NOT EXISTS `Customer` (
//      `id` INTEGER PRIMARY KEY,
//      `name` TEXT NOT NULL,
//      `nr_orders` INTEGER,
//      `country` TEXT NOT NULL
// )
sql db {
	create table Customer
}

// select count(*) from customers
nr_customers := sql db {
	select count from Customer
}
println('number of all customers: $nr_customers')
// V syntax can be used to build queries
uk_customers := sql db {
	select from Customer where country == 'uk' && nr_orders > 0
}
println(uk_customers.len)
for customer in uk_customers {
	println('$customer.id - $customer.name')
}
// by adding `limit 1` we tell V that there will be only one object
customer := sql db {
	select from Customer where id == 1 limit 1
}
println('$customer.id - $customer.name')
// insert a new customer
new_customer := Customer{
	name: 'Bob'
	nr_orders: 10
}
sql db {
	insert new_customer into Customer
}
```

For more examples and the docs, see [vlib/orm](https://github.com/vlang/v/tree/master/vlib/orm).