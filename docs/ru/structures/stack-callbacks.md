### stack-callbacks # StackCallbacks #> StackCallbacks {tpl-git PHPDaemon/Structures/StackCallbacks.php}

```php:p
namespace PHPDaemon\Structures;
class StackCallbacks extends \[SplStack](http://php.net/manual/class.splstack.php);
```

Данный класс предоставляет стек функций обратного вызова с несколькими дополнительными методами

> Используется в {tpl-inlink network/client Network/Client} для хранения стека функций обратного вызова запросов

#### methods # Методы
<md:method>
void public push ( callable $cb )

Добавляет функцию обратного вызова в конец стека

$cb
функция
</md:method>

<md:method>
void public unshift ( callable $cb )

Добавляет функцию обратного вызова в начало стека

$cb
функция
</md:method>

<md:method>
boolean public executeOne ( mixed $arg, ... )

Извлекает первую функцию обратного вызова из начала стека и выполняет её с переданными аргументами. Возвращает `false` если стек пуст

$arg
аргументы
</md:method>

<md:method>
boolean public executeAndKeepOne ( mixed $arg, ... )

Выполяет первую функцию обратного вызова из начала стека с переданными аргументами без извлечения её из стека. Возвращает `false` если стек пуст

$arg, ...
аргументы
</md:method>

<md:method>
integer public executeAll ( mixed $arg, ... )

Извлекает все функции обратного вызова и выполняет с заданными аргументами. Возвращает количество выполненных функций.

$arg1, ...
аргументы
</md:method>

<md:method>
array public toArray ( )

Возвращает индексный массив стека
</md:method>

<md:method>
void public reset ( )

Удаляет все элементы из стека
</md:method>