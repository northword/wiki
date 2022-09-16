---
title: 样式的结构
date: 2022-08-01 16:55:26
updated: 2022-08-05 18:03:05
---

# 样式的结构

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

## 根元素 `cs:style`

样式的根元素是 `cs:style`。在 [独立样式](file-types.md#独立样式) 中，根元素有以下几种属性：

`class`

:    🏳️ Default: _none_  —  决定样式的 [引文格式](../primer/citation-formats.md#引文格式) 是 in-text 类型（值 `in-text`） 或者 note 类型（值 `note`）。

	!!! NOTE "译者注"
		in-text 表示引文在文字中，note 表示引文不在文字中，可能是脚注等。

`default-locale`

:    🏳️ Default: _none_  · Optional —  为本地化设值默认的 locale。值必须是 [locale code](http://books.xmlschemata.org/relaxng/ch19-77191.html)。

	!!! TIP "译者注：常用 local_code"

		zh-CN：中文（中国）

		zh-hk：中文（台湾）

		zh：中文

		en-US：

		可以参阅 [Language Strings | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/win32/wmformat/language-strings)

`version`

:    🏳️ Default: _none_ ·  ⚠ Required — 	样式的 CSL 版本。对于 CSL 1.0 兼容样式，必须是 `1.0`。

此外，`cs:style` 可能携带任意的 [全局选项](style-behavior.md#全局选项) 和 [可继承的名称选项](style-behavior.md#可继承的名称选项) 。

在这些属性中，[从属样式](file-types.md#从属样式) 中，只有 `version` 是必须的， `default-locale` 属性可以设置用来代替的默认的本地化文件 。其他的属性是可以忽略的。

下面是一个 [独立样式](file-types.md#独立样式) 的 `cs:style` 示例，第一行是 XML 声明：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" class="in-text" default-locale="fr-FR"/>
```

## `cs:style` 的子元素

在 [独立样式](file-types.md#独立样式) 中，`cs:style` 有以下子元素：

`cs:info`

:    🏳️ Default: _none_  ·  ⚠ Required ·  ⚠ 必须为第一个子元素 — 描述样式的元数据 ：样式名称（style name）、样式 ID（ID）、样式作者（authors）。

`cs:citation`

:    🏳️ Default: _none_ ·  ⚠ Required — 用来描述 in-text 引文或者 notes 引文的具体格式。

`cs:bibliography` 

:    🏳️ Default: _none_ ·   Optional — 可能会出现一次。描述参考文献列表的格式。

`cs:macro`

:    🏳️ Default: _none_ ·   Optional — 可能出现多次。宏可以将格式指示重复使用，使样式更加的紧凑和易维护。

`cs:locale`

:    🏳️ Default: _none_ ·   Optional — 可能出现多次。用于指定或者覆盖当前的本地化数据。

在 [从属样式](file-types.md#从属样式) 中，`cs:style` 只有 `cs:info` 一个子元素。

### Info

`cs:info` 包含了样式的元数据。其结构基于 [Atom Syndication Format](http://tools.ietf.org/html/rfc4287)。在独立样式中，`cs:info` 有下面的几个子元素：

#### `cs:author` 和 `cs:contributor` 

:    🏳️ Default: _none_ ·   Optional — `cs:author` 和 `cs:contributor` 分别用来致谢样式的作者和贡献者，可能被使用多次。

     `cs:name`
    
     :    🏳️ Default: _none_ ·  ⚠ Required — 作者或贡献者的姓名。
    
     `cs:email` 和 `cs:uri` 
    
     :    🏳️ Default: _none_ ·  Optional — 作者或者贡献者邮箱和 URI。

#### `cs:category`

:    🏳️ Default: _none_ ·   Optional — 样式可能被分类到一个或者多个类别，`cs:category` 可能被使用一次，用来描述 in-text 引文怎么渲染。使用 `citation-format` 属性设置其为以下几种情形：

	- "author-date" - 例如 "… (Doe, 1999)"
	
	- "author" - 例如 "… (Doe)"
	
	- "numeric" - 例如 "… [1]"
	
	- "label" - 例如 "… [doe99]"
	
	- "note" - 因为在边注或者脚注出现。

  `cs:categroy` 也可能在携带 `field` 属性时多次使用，用来对学科进行分类（见 [附录I 学科分类](附录I 学科分类)）。

#### `cs:id`

:    🏳️ Default: _none_ · ⚠ Required — 必须出现一次。该元素应该包含一个 URI 以建立样式的 `ID`，对于公开可用的样式，需要一个稳定、唯一的并可以引用的 URI。

#### `cs:issn/cs:essn/cs:issnl`

:    🏳️ Default: _none_ ·   Optional — `cs:issn` 元素可以多次使用，用来表示该 CSL 对应的期刊的 ISSN 。 `cs:eissn` 和 `cs:issnl` 可以分别用来表示 eISSN 和 [ISSN-L](http://www.issn.org/2-22637-What-is-an-ISSN-L.php) 。

#### `cs:link` 

:    🏳️ Default: _none_ ·   Optional — 可以使用多次。`cs:link` 必须携带两个属性 `href` 和 `rel`。

    `href`
    :    ⚠ Required — 用来设置 URI （通常情况下为 URL）
    
    `rel`
    :    ⚠ Required — 表明 URI 与当前样式的关系，它的值有：

        - `self` - 该 URI 值为样式本身的 URI
        - `template` - 该 URI 是用来编写该样式的模板的 URI
        - `documentation` - 该 URI 是该样式的文档

#### `cs:published`

:    🏳️ Default: _none_ ·   Optional — `cs:published` 必须是一个 [时间戳](http://books.xmlschemata.org/relaxng/ch19-77049.html)，用来表明样式创建的时间或者可获得的时间。

#### `cs:rights` 

:    🏳️ Default: _none_ ·   Optional — `cs:rights` 表明了该 CSL 的 license，可能会携带 `license` 属性。

#### `cs:summary` 

:    🏳️ Default: _none_ ·   Optional — 给出该 CSL 的简单描述。

#### `cs:title`

:    🏳️ Default: _none_ · ⚠ Required — 其内容应该是该 CSL 展示给使用者的名字。

#### `cs:title-short`

:    🏳️ Default: _none_ ·   Optional — 是上述名字的缩写，比如 `APA`

#### `cs:updated`

:    🏳️ Default: _none_ ·    — 内容是一个 [时间戳](http://books.xmlschemata.org/relaxng/ch19-77049.html)，用来表示该 CSL 的最后更新时间。

`cs:link`，`cs:rights`，`cs:summary`， `cs:title` 和 `cs:title-short` 元素可以携带 `xml:lang` 属性用来表示元素内容的语言（值必须是 [xsd:language locale code](http://books.xmlschemata.org/relaxng/ch19-77191.html) 中的一个）。对于 `cs:link`，该属性可以用来表示链接目标的语言。

在从属格式中，当 `cs:link` 中的 `href` 为其父格式的 URI 时，`rel` 属性必须设置为 `"independent-parent"`。此外，从属格式的 `ref` 不能设置为 `template`，这在独立格式中才能使用。

下面是一个独立样式 `cs:info` 的例子：

```xml
<info>
  <title>Style Title</title>
  <id>http://www.zotero.org/styles/style-title</id>
  <link href="http://www.zotero.org/styles/style-title" rel="self"/>
  <author>
    <name>Author Name</name>
    <email>name@domain.com</email>
    <uri>http://www.domain.com/name</uri>
  </author>
  <category citation-format="author-date"/>
  <category field="zoology"/>
  <updated>2008-10-29T21:01:24+00:00</updated>
  <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work
  is licensed under a Creative Commons Attribution-Share Alike 3.0 Unported
  License</rights>
</info>
```

### Citation

`cs:citation` 元素描述了引文的格式，其中引文可以是一条或者多条。引文的格式可能是 in-text citations（即文字中的引文）和 notes（注记）。in-text citations 包括 (`"author"，例: [Doe]`，`"author-date"，例: [Doe 1999]`，`"label"，例: [doe99]`，`"author"，例: [Doe]` 或者 `"number"，例:[1]` ) 。这要求 `cs:layout` 子元素来描述什么样的数据，以及怎么被引用（见 [Layout](rendering-elements.md#Layout) ）。在 `cs:layout` 之前可能会有 `cs:sort` 元素，用来描述引文的排序（见 [排序](排序)）。此外，`cs:style` 可能携带任意的 [引文选项](style-behavior.md#引文选项) 和 [可继承的名称选项](style-behavior.md#可继承的名称选项) 中的属性。下面是一个 `cs:citation` 的例子：

```xml
<citation>
  <sort>
    <key variable="citation-number"/>
  </sort>
  <layout>
    <text variable="citation-number"/>
  </layout>
</citation>
```

**对 CSL 处理器开发者的一个建议**

在 note 格式中，引文通常是一个句子。因此，当注释前面没有内容时，引文的首字母最好大写。在其他情况，引文应该是用原样打印。

### Bioliography

`cs:bioliography` 元素描述了参考文献条目的格式。同 `cs:citation` 相同，其子元素 `cs:layout` 用来描述每个条目的格式，`cs:sort` 元素用来描述条目的排序。此外，`cs:bibliography` 可能携带任意的 [参考文献目录选项](#参考文献目录选项) 和 [可继承名称选项](#可继承的名称选项) 中的属性。下面是一个 `cs:bioliography` 的例子：

```xml
<bibliography>
  <sort>
    <key macro="author"/>
  </sort>
  <layout>
    <group delimiter=". ">
      <text macro="author"/>
      <text variable="title"/>
    </group>
  </layout>
</bibliography>
```

### Macro

宏，使用 `cs:macro` 元素定义，包含了格式的指令。宏可以在其他宏，`cs:layout` 元素 (`cs:citation` 和 `cs:bioliography` 中)，`cs:key` 元素 (`cs:sort` 元素) 中通过 `cs:text` 调用。宏在文件中位置的通常建议是：放在 `cs:locale` 元素后以及 `cs:citation` 元素前。

宏通过 `cs:macro` 元素的属性 `name` 的值来调用。`cs:macro` 必须包含一个或者多个 [渲染元素](#渲染元素)。

使用宏可以提高样式的可读性，紧凑性以及可维护性。通过过宏调用来保持 `cs:citation` 元素和 `cs:bioliography` 元素的内容紧凑通常是推荐的做法。为了在其他样式中方便的重复使用，宏名字建议使用通用的名字。

下面是一个实例：引文中包括项目题目，并当条目为 `"book"` 时，设置字体为 `italic`。

```xml
<style>
  <macro name="title">
    <choose>
      <if type="book">
        <text variable="title" font-style="italic"/>
      </if>
      <else>
        <text variable="title"/>
      </else>
    </choose>
  </macro>
  <citation>
    <layout>
      <text macro="title"/>
    </layout>
  </citation>
</style>
```

### Locale

来自 `"locales-xx-XX.xml"`locale file 的本地化数据可以通过 `cs:locale` 元素来重定义或者补充定义。`cs:locale` 元素应该放在 `cs:info` 元素后。

`cs:locale` 元素的 `xml:lang` 属性是可选的，必须设置为 [xsd:language locale code](http://books.xmlschemata.org/relaxng/ch19-77191.html) 中的一种，用来确定使用的语言环境（或方言，见 [locale fallback](locale fallback)）。

对于 `cs:locale` 元素的详细使用，另见 [术语](Terms(术语))、[本地化日期格式](本地化日期格式) 和 [本地化选项](b本地化选项)。

下面是一个 `cs:locale` 元素的例子：

```xml
<style>
  <locale xml:lang="en">
    <terms>
      <term name="editortranslator" form="short">
        <single>ed. &amp; trans.</single>
        <multiple>eds. &amp; trans.</multiple>
      </term>
    </terms>
  </locale>
</style>
```

**Locale Fallback**

本地化文件为语言方言提供了本地化数据；可选的 `cs:locale` 元素的 `xml:lang` 属性设置为一种语言 (例如， `"en"` 代表英语 ) 或者方言 (例如， `"en-US"` 代表美式英语 ) ，`xml:lang` 属性也可能缺失。Localr fallback 是一种在上述的属性设置中检索来确定本地化单元的机制。这些本地化单元包括日期格式，本地化选项或者术语的特定形式。

对于同一种语言的方言，一种被称为初级方言，其他都是二级方言。下面展示了部分语言的初级方言和二级方言：

| 初级方言 | 二级方言     |
| -------- | ------------ |
| de-DE    | de-AT, de-CH |
| en-US    | en-GB        |
| pt-PT    | pt-BR        |
| zh-CN    | zh-TW        |

这里用一个例子来描述 Locale fallback。如果要选择 `"de-AT"`(Austrian German) 作为使用环境，本地化单元可以来自下面的源（优先级逐渐降低）：

A. 样式文件中的 `cs:locale` 元素

- `xml:lang` 设置为方言 `"de-AT"`
- `xml:lang` 设置为 `"de"`
- `xml:lang` 不设置

B. Locale files/本地化文件

- `xml:lang` 设置为方言 `"de-AT"`
- `xml:lang` 设置为对应的初级方言 `"de-DE"` (standard german)
- `xml:lang` 设置为 `"en-US"`

也就是说，如果要使用 `"de-AT"` 语言，首先在 Locale files 中寻找 `"de"` 对应的 `locales-de-XX.xml` 文件，即 `"locales-de-AT.xml"` 和 `"locales-de-DE.xml"`，由于要设置的语言环境是方言 `"de-AT"`，所以选择 `de-AT` 对应的 locale file `locales-de-AT.xml`。接下来，如果 csl 文件中包含 `cs:locale` 元素，将会覆盖 `locales-de-AT.xml` 文件的设置。
