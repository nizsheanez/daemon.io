### http # HTTP #> HTTP {tpl-git PHPDaemon/Clients/HTTP}

```php
namespace PHPDaemon\Clients\HTTP;
```

Предназначен для выполнения GET и POST запросов на удаленные хосты.

Клиент использует пространство имен {tpl-inlink httprequest HTTPRequest}.

#### examples # Примеры

Получение файла {tpl-outlink http://www.google.com/robots.txt google.com/robots.txt} GET запросом:

```php
$httpclient = \PHPDaemon\Clients\HTTP\Pool::getInstance();

$httpclient->get('http://www.google.com/robots.txt',
	function ($conn, $success) {
		// обработка данных ответа
	}
);
```

Рабочий пример клиента представлен в {tpl-git PHPDaemon/Clients/HTTP/Examples/Simple.php Clients/HTTP/Examples/Simple.php}

#### pool # Класс Pool {tpl-git PHPDaemon/Clients/HTTP/Pool.php}

```php
namespace PHPDaemon\Clients\HTTP;
class Pool extends \PHPDaemon\Network\Client;
```

##### options # Опции по-умолчанию

 - `port (integer = 80)`
 - `ssl-port (integer = 443)`
 - `expose (boolean = true)`

##### methods # Методы

 -.method ```php.inline
 void public get ( url $url, array $params )
 void public get ( url $url, callable $resultcb )
 ```
   -.n Осуществляет GET запрос
   -.n.ti `:hc`$url` — запрашиваемый URL
   -.n `:hc`$params` — ассоциативный массив параметров запроса
   -.n `:hc`$resultcb` — `:phc`callback ( [Connection](#../../connection) $conn, boolean $success )` — Вызывается когда на запрос пришел ответ, либо произошла ошибка

 -.method ```php.inline
 void public post ( url $url, array $data, array $params )
 void public post ( url $url, array $data, callable $resultcb )
 ```
   -.n Осуществляет POST запрос
   -.n.ti `:hc`$url` — запрашиваемый URL
   -.n `:hc`$data` — ассоциативный массив POST-параметров
   -.n `:hc`$params` — ассоциативный массив параметров запроса
   -.n `:hc`$resultcb` — `:phc`callback ( [Connection](#../../connection) $conn, boolean $success )` — Вызывается когда на запрос пришел ответ, либо произошла ошибка

 -.method  ```php.inline
 string public static buildUrl ( string $str )
 string public static buildUrl ( array $mixed )
 ```
   -.n Генерирует URL-кодированную строку запроса из предоставленного ассоциативного (или индексного) массива `:hc`$mixed` или возвращает строку `:hc`$str`. В случае ошибки возвращает `:hc`false`
   -.n.ti `:hc`$mixed` — массив параметров URL

 -.method ```php.inline
 string public static parseUrl ( string $str )
 string public static parseUrl ( array $mixed )
 ```
   -.n Разбирает массив `:hc`$mixed` или строку `:hc`$str` и возвращает ассоциативный массив, содержащий необходимые компоненты URL: `:hc`[$scheme, $host, $uri, $port]`. В случае ошибки возвращает `:hc`false`.  
   См. {tpl-outlink http://php.net/parse_url php.net/parse_url}
   -.n.ti `:hc`$mixed` — массив параметров URL

#### connection # Класс Connection {tpl-git PHPDaemon/Clients/HTTP/Connection.php}

```php
namespace PHPDaemon\Clients\HTTP;
class Connection extends \PHPDaemon\Network\ClientConnection;
```

##### properties # Свойства

 -.method `:h`array public $headers;`  
 Заголовки ответа

 -.method `:h`string public $body;`  
 Тело ответа

 -.method `:h`integer public $contentLength;`  
 Длина тела ответа

 -.method `:h`string public $cookie;`  
 Ассоциативный массив Cookies пришедших в ответе

 -.method `:h`boolean public $chunked;`  
 Если true, то в заголовках был получен `Transfer-Encoding: chunked`

 -.method `:h`integer public $protocolError;`  
 Если не `:hc`null`, то произошла серьезная ошибка при обработке ответа на запрос. Содержит номер строки в файле {tpl-git PHPDaemon/Clients/HTTP/Connection.php Connection.php}, по которому можно определить характер ошибки

 -.method `:h`integer public $responseCode;`  
 Код ответа. См. {tpl-outlink http://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP Список кодов состояния HTTP}</a>

 -.method `:h`string public $lastURL;`  
 Последний запрошенный url

 -.method `:h`string public $rawHeaders;`  
 Заголовки ответа в сыром виде

##### methods # Методы

 -.method ```php.inline
 string public getBody ( void )
 ```
   -.n Возвращает тело ответа

 -.method ```php.inline
 string public getHeaders ( void )
 ```
   -.n Возвращает ассоциативный массив заголовков ответа

 -.method ```php.inline
 string public getHeader ( string $name )
 ```
   -.n Возвращает заголовок ответа по имени или `:hc`null`
   -.n.ti `:hc`$name` — имя заголовка
