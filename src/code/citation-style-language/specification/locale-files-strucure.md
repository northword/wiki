---
title: 本地化文件的结构
date: 2022-08-01 16:55:26
updated: 2022-08-03 10:25:19
---

# 本地化文件的结构

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

尽管本地化数据可以包括在 csl 文件中 (见 [Locale](#Locale))，但是本地化文件可以方便的提供本地化数据的设置，包括术语，日期格式以及语法选项。

每个本地化文件包括了一种语言方言的本地化数据。本地化文件中根元素为 `cs:locale`（样式/style 中则为 `cs:style` 元素）。在 `cs:locale` 根元素中，属性 `xml:lang` 用来设置方言。同时这一设置选项也用来对本地化文件命名（`"xx-XX"` 文件名为 `locales-xx-XX.xml`）。此外，根元素必须携带 `version` 属性，表明本地化文件的 CSL 版本（对 CSL 1.0 兼容的 locale file 必须设置为 `"1.0"`）。本地化文件有和样式同样的命名空间。`cs:locale` 元素可能包含 `cs:info` 作为第一个子元素，同时，必须含有 `cs:terms`、`cs:date`、`cs:style-options` 子元素。下面是一个 本地化文件的部分示例：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<locale xml:lang="en-US" version="1.0" xmlns="http://purl.org/net/xbiblio/csl">
  <style-options punctuation-in-quote="true"/>
  <date form="text">
    <date-part name="month" suffix=" "/>
    <date-part name="day" suffix=", "/>
    <date-part name="year"/>
  </date>
  <date form="numeric">
    <date-part name="year"/>
    <date-part name="month" form="numeric" prefix="-" range-delimiter="/"/>
    <date-part name="day" prefix="-" range-delimiter="/"/>
  </date>
  <terms>
    <term name="no date">n.d.</term>
    <term name="et-al">et al.</term>
    <term name="page">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="page" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
  </terms>
</locale>
```

## Info

`cs:info` 元素用来给出本地化文件的元数据。它含有以下子元素：

`cs:translator`(可选)

​ `cs:translator` 用来致谢翻译者，并且能使用多次。在这个元素中。子元素 `cs:name` 必须出现一次，`cs:uri` 则是可选的。这些子元素应该分别包括翻译者的名字，地址和 URI。（与样式中类似）

`cs:rights`(可选)

​ 可能出现一次。`cs:rights` 的内容用来指定本地化文件发布版本的 license。该元素可能会携带 `license` 属性来指定 `license` 的 URI，`xml:lang` 属性则用来指定元素内容的语言（值必须是 [xsd:language locale code](http://books.xmlschemata.org/relaxng/ch19-77191.html)）。

`cs:updates`(可选)

​ `cs:updated` 元素的内容必须是一个 [时间戳](#时间戳) 来指定本地化文件最后一次更新的时间。

## Terms(术语)

术语是本地化的字符串，比如通过使用 `"and"` 术语，`"Doe and Smith"` 在语言环境从英语到德语的转换中会自动变为 `"Doe und Smith"`。术语用 `cs:term` 元素定义，是 `cs:terms` 元素的子元素。每个 `cs:term` 元素必须携带一个 `name` 属性，其属性值可以设置为 [附录II 术语](#附录II 术语) 列表中的值。

术语可以直接在 `cs:term` 的内容中定义，或者，在某些情况下，比如在需要单数和复数的情况下可以分别在子元素 `cs:single` 和 `cs:multiple` 中定义， (例如:`"page"` 和 `"pages"`)。

术语必须使用 `cs:term` 元素来定义，并在其中使用 `form` 属性来设置特定格式，`form` 可以设置的值为：

- `"long"` - （默认值）, e.g. "editor" and "editors" for the "editor" term

- `"short"` - e.g. "ed." and "eds." for the term "editor"
- `"verb"` - e.g. "edited by" for the term "editor"
- `"verb-short"` - e.g. "ed." for the term "editor"
- `"symbol"` - e.g. "§" and "§§" for the term "section"

如果一个样式使用了一个没有定义的格式，则会会退到其他形式，比如 `"werb-short"` 会回退到 `"verb"`，`"symbol"` 会回退到 `"short"`，`"verb"` 和 `"short"` 都会回退到 `"long"`。如果没有可以用的语言环境或者 form 格式，改术语的渲染结果就会显示为空字符串。

`cs:term` 元素可以使用 `match`，`gender` 和 `gender-form` 属性来设置数字变量渲染为序数（比如，`first`，`2nd`）。具体见下面的 [序数后缀](#序数后缀) 和 [特定序数](#特定序数)。

术语内容不应该包括 Latex 以及 HTML 等标记。上标可以使用 Unicode 上标字符。

### 序数后缀

数字变量可以使用 `cs:number` 元素以 `"ordinal"` 格式（即序数格式）渲染，比如：`2nd`。序数的后缀则是使用术语来定义的。

`"ordinal"` 术语定义了默认的序数后缀格式，但这些默认的后缀可以被下面的术语对某些数字进行覆盖：

- `"ordinal-00"` 到 `"ordinal-09"` - 默认地，当术语名称的最后一位数字与要渲染的数字的最后一个数字相同时，将使用在这个范围内的对应的术语。比如：`"ordinal-00"` 能够匹配数字 0 、10、20 等等。通过设置属性 `match` 为 `"last-two-difits"`（默认值为 `"last-digit"`），匹配范围将为变为两位，例如：0、100、200 等。当 `match` 术语设置为 `"whole-number"` 时，只有术语与要渲染的数字相同时，才会实现匹配。
- `"ordinal-10"` 到 `"ordinal-99"`- 默认地，当要渲染的数字的最后两位和术语中相同时，使用这个范围的术语。当 `match` 属性设置为 `"whole-number"` 时（默认为 `"last-two-digits"`），只有术语与要渲染的数字相同时，才会实现匹配。

当渲染的数据对上面的两组都匹配时（比如：13 可以同时匹配 `"ordinal-03"` 和 `"ordinal-13"`），则使用 `"ordinal-10"` 到 `"ordinal-99"`。

序数术语在 CSL 1.0.1 和 CSL 1.0 中表现时不同的。当样式和本地化文件中都没有定义 `"ordinal"` 术语，但是定义了 `"ordinal-00"` 到 `"ordinal-04"`，原始的 CSL 1.0 的方案被使用，`"ordinal-01"` 用于以 1 结尾的数字（以 11 结尾的数字除外），`" ordinal-02"` 用于以 2 结尾的数字（以 12 结尾的数字除外），`"ordinal -03"` 表示以 3 结尾（那些以 13 结尾的除外），`"ordinal-04"` 表示所有其他数字。

### 性别特定序数

一些语言使用特定的有别于性别的序数。例如，如果目标名词是男性，英语中的 "1st" 和 "first" 在法语中就翻译为 "1er" 和 "premier"，如果目标名词是女性，就翻译为 "1re" 和 "première"。

女性和男性在术语使用上的不同可以使用性别格式 `gender-form` 的属性来设置（分别设置为 `feminine` 和 `masculine`），详情见 [Ordinals序数](#Ordinals/序数)（没有性别的术语表示中性）。这里涉及到两类目标名词：a) [数字变量](#数字变量) 附带的术语，b) 月份术语（见 [Months/月](#Months/月)）。在术语设置为 `"long"`（默认），并且在 `gender` 属性被设置时（设置为 `"feminine"` 和 `"masculine"`），这些名词即使用相应的性别变体。当数字变量以序数 `"ordinal"` 或者 `long-ordinal` 形式时，将使用相同性别的序数词，如果没定义女性或男性变体，则使用中性变体。当 `"day"` 日期部分以序数 `"ordinal"` 形式呈现时，序数性别和月的术语匹配。

下面给出 `1re éd.`（`"1st ed."`）、`"1er janvier"`（`"January 1st"`）和 `"3e édition"`（`"3rd edition"`）的示例：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<locale xml:lang="fr-FR">
  <terms>
    <term name="edition" gender="feminine">
      <single>édition</single>
      <multiple>éditions</multiple>
    </term>
    <term name="edition" form="short">éd.</term>
    <term name="month-01" gender="masculine">janvier</term>
    <term name="ordinal">e</term>
    <term name="ordinal-01" gender-form="feminine" match="whole-number">re</term>
    <term name="ordinal-01" gender-form="masculine" match="whole-number">er</term>
  </terms>
</locale>
```

## 本地化日期格式

在 `cs:date` 元素中，本地化数据格式有两种格式：一种是 `"numeric"`（例：`12-15-2005`），另外一种是 `"text"`（例：`December 15,2005`）。格式在 `cs:date` 元素中，使用 `form` 属性来设置。

日期格式使用 `cs:date-part` 子元素来构建（见 [Date-part](https://docs.citationstyles.org/en/stable/specification.html#date-part)）。当 `cs:date-part` 的 `name` 属性设置为 `"day"`、`"month"`、或 `"year"` 时，反应了日期显示的顺序为日、月河年。日期可以使用 `cs:date` 和 `cs:date-part` 元素中的 [formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting) 和 [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 属性设置。`cs:date` 元素中的 `delimiter` 属性用来设置 `cs:date-part` 中不同部分的间隔，并且词缀也可以应用于 `cs:date-part` 元素。（译注：这里的词缀指的是前后的括号等等。）

**注**：定义本地化日期格式时，不允许在 `cs:date` 上使用词缀。此限制适用于将特定于语言环境的词缀（在 cs：date-part 元素上设置）与任何特定于样式的词缀（在调用 cs：date 元素上设置）分开，例如括号：

```xml
<macro name="issued">
 <date variable="issued" form="numeric" prefix="(" suffix=")"/>
</macro>
```

## 本地化选项

本地化选项有两个，`limit-day-ordinals-to-day-1` 和 `punctuation-in-quote` （见 [Locale Options](https://docs.citationstyles.org/en/stable/specification.html#locale-options)）。这些全局选项（同时影响引文和参考文献条目）在 `cs:style-options` 中被设置为可选属性。
