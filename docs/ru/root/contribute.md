## contribute # Внести свою лепту

Если хотите помочь, то даже если располагаете ограниченным временем, не стесняйтесь!
Проекту пригодится любая помощь. 

### this-doc # Эта документация

Мы очень хотим свести количество недокументированного кода к минимуму, но нам не хватает рук.
Даже написав абзац текста, потратив десять минут, вы уже сделаете большое дело.


#### commiting # Внесение изменений

> Старайтесь вносить изменения в на том языке, которым владеете лучше всего.
> Если набрались смелости добавить новый язык, возьмите за основу наиболее близкий из присутствующих.

Чтобы внести изменения в эту документацию, необходимо:

 1. Сделать Fork репозитория {tpl-outlink https://github.com/kakserpom/daemon.io kakserpom/daemon.io}
 2. Внести изменения в Markdown (.md) файлыв папке `./docs/<язык>/`
 3. Скомпилировать index.html, выполнив команду `./docs/build`
 4. Посмотреть как выглядят внесенные изменения в браузере
 5. Послать Pull Request

> Хотите видеть изменения в браузере, не запуская каждый раз команду?
> Запустите `watch -n1 ./docs/build` — она будет выполняться раз в секунду

#### markdown # Формат документации
Мы используем {tpl-outlink http://ru.wikipedia.org/wiki/Markdown Markdown} ({tpl-outlink http://rukeba.com/by-the-way/markdown-sintaksis-po-russki/ о синтаксисе по-русски}) с некоторыми дополнениями.

##### nesting # Вложенность

Для удобства работы документация разбита на множество мелких файлов.
Подключение файла осуществляется строкой иморта: `&lt;!-- import filepath.md --&gt;`.
Путь к подключаемому файлу указывается относительно текущего.

##### const # Константы

Константы используются для языковых настроек и короткой записи часто используемых шаблонов.
Записываются в виде `&lt;!-- pvar **название** строка значения --&gt;`

Обязательные языковые константы `lang`, `title`, `menu-*` должны быть переведены для каждой языковой версии документации.

Константы могут быть использованы как шаблоны. Применение шаблона: `{**название** переменная1 переменная2...}`. Переменные будут подставлены в шаблон вместо `%s`.

Пример шаблона:  
`&lt;!-- pvar tpl-outlink &lt;a target="_blank" href="%s"&gt;%s&lt;i class="fa fa-external-link"&gt;&lt;/i&gt;&lt;/a&gt; --&gt;`

Пример использования:
`&#123;tpl-outlink http://ru.wikipedia.org/wiki/Markdown Markdown&#125;`

##### headers # Заголовки
Заголовки могут быть описаны следующими способами:

 - `## якорь # Заголовок`
 - `## якорь # Заголовок #> Форматированный заголовок`

`якорь` - идентификатор заголовка для навигации. Разрешенные символы `[a-zA-Z0-9_-]`. Должен быть уникальным по отношению к идентификаторам заголовков текущего уровня в пределах родительского заголовка.

`Форматированный заголовок` используется в тех случаях, когда заголовок в контенте должен отличаться от заголовка в навигационной панели.

Примеры:

 - Заголовок первого уровня: `## contribute # Внести свою лепту`
 - Заголовок второго уровня: `### this-doc # Эта документация`
 - Заголовок третьего уровня: `#### markdown # Формат документации`
 - Заголовок четвертого уровня: `#### markdown # Заголовки`
 - Форматированный заголовок: `### mysql # MySQL #> Клиенты \ MySQL`

> При добавлении нового заголовка учтите, что якорь должен быть строго на английском языке и быть простым и информативным. При переводе якори не изменяются

##### lists # Списки

Для списков добавлена возможность указать CSS-класс элемента:

```
 -.n Элемент без символа списка
 -.n.ti Элемент без символа списка и с отступом от предыдущего
```

На данный момент используются CSS-классы:

 - `.n` - без иконки элемента списка
 - `.ti` - отступ от предыдущего элемента
 - `.method` - специальный CSS-класс для записи методов библиотек

##### italic_bold # Курсив и жирный

Выделение курсивом и жирным работает только с помощью звездочки `*`, знак подчеркивания `_` отключен для совместимости с программным кодом.

##### code # Код

Простое выделение кода апострофами `&#96;...&#96;` дополнено возможностью применять модификаторы и CSS-классы.  
Модификаторы - опции, включающие дополнительную обработку текста.

Модификаторы и классы пишутся после открывающего апострофа и должны быть закрыты дополнительным перед началом текста. Перед указанием модификаторов ставится символ двоеточия `:`. Каждый модификатор указывается одним латинским символом. Классы указываются с помощью ведущей точки.

> При указании одновременно и модификаторов, и классов, сначала должны быть записаны модификаторы.

Список модификаторов:

 - `:e` - кодировать символы (по-умолчаниб кодирование символов выключено)
 - `:p` - парсинг ссылок
 - `:h` - php подсветка кода
 - `:c` - стилевое оформление без фона и обводки

Из классов на данный момент может применять только `.clear`, но лучше указывайте модификатор `:c`.

Примеры использования:

 - `&#96;:hc&#96;$url&#96;`
 - `&#96;:p&#96;max-requests (&#91;Number&#93;(#config/types/number) = '10k')&#96;`
 - `&#96;:ph.clear&#96;callback ( &#91;Connection&#93;(#clients/http/connection) $conn, boolean $success )&#96;`

### php-doc # PHPDoc

Аналогично, чтобы восполнить пробелы в PHPDoc-комментариях в коде, сделайте Fork [основного репозитория](https://github.com/kakserpom/phpdaemon), внесите изменения и пошлите Pull Request.

> Учтите, что все PHPDoc-комментарии пишутся строго на английском языке

### code # Программный код

Улучшения программного кода всегда приветствуется. Если у вас есть модуль для публикации, и вы считаете, что он заслуживает включения в основной репозиторий, пришлите Pull Request. Аналогично поступайте с улучшениями существующего кода.