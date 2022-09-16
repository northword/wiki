---
title: 渲染元素
date: 2022-08-01 13:25:44
updated: 2022-08-03 10:18:21
---

# 渲染元素

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

渲染元素指定了在引文或参考文献条目中需要包含哪些条目元数据，以及以何种方式排序，并对其格式进行控制。

## Layout

`cs:layout` 渲染元素是 `cs:citation` 元素和 `cs:bibliography` 元素的的必要子元素。`cs:layout` 必须包含一个或者多个渲染元素，并且可能携带 [`affixes`](#词缀) 和 [`formattig`](#格式化) 属性。在 `cs:citation` 元素中，[`delimiter`](#分隔符\delimiter) 属性用来指定一个引文中的不同引用的间隔符。例如：一个 `"(1,2)"` 类型的引文可以使用下面的代码实现：

```xml
<citation>
  <layout prefix="(" suffix=")" delimiter=", ">
    <text variable="citation-number"/>
  </layout>
</citation>
```

## Text

`cs:text` 渲染元素用来输出文字。其必须携带下面的属性来确定什么部分需要渲染：

- `variable`- 渲染一个变量的文本内容。属性值必须是 [标准变量](#标准变量)。可以与 `form` 属性一起选择变量的 `"long"`（默认）或 `"short"` 形式（例如：设置题目，完整题目或者简写）。如果选择了 `"short"` 形式，但是却没法获得，就使用 `"long"` 形式来渲染。
- `macro` - 渲染宏的文字输出。属性值必须和 `cs:macro` 元素的 `name` 属性的值相匹配。
- `term` - 渲染术语。属性必须是 [附录II 术语](#附录II 术语) 中的术语列表中的一个。通过设置复数属性 `plura l` 来这只其使用单数还是复数形式，其中 `"true"` 为默认，表示使用复数形式，设置为 `"false"` 表示使用单数形式。 使用 `form` 属性可以设置术语的形式，其值可以为 `"long"` （默认）、`"short"`、`"verb"`、`"verb-short"` 或者 `"symbol"` （见 [术语](#术语)）.
- `value` - 渲染属性值自己。

一个 `cs:text` 的渲染 `title` 变量的例子：

```xml
<text variable="title"/>
```

`cs:text` 可能会携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes)，[display](https://docs.citationstyles.org/en/stable/specification.html#display)，[formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting)，[quotes](https://docs.citationstyles.org/en/stable/specification.html#quotes)，[strip-periods](https://docs.citationstyles.org/en/stable/specification.html#strip-periods) 和 [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 属性。

## Date

`cs:date` 渲染元素输出必须从 [日期变量](#日期变量) 列表中的选择。日期可以以本地化或者非本地化格式呈现。

[本地化的日期格式](#本地化日期格式) 通过可选的 `form` 属性来选择，其值必须设置为 `"numeric"`（完全的数字格式 ，例如：12-15-2005）或者 `"text"`（非数字的月份格式，例如： December 15, 2005）。本地化日期格式可以通过两种方式进行自定义。第一种：`date-parts` 属性可以用来设置不同的日期组成部分。其值可以设置为：

- `"year-month-day"` - 默认值，渲染年，月，日
- `"year-month"` - 渲染年月
- `"year"` - 只渲染年

第二种，`cs:date` 可以含有一个或者多个 `cs:date-part` 子元素（见 [Date-part](#Date-part)）。在这些子元素中可以设置属性来覆盖之前的本地化设置（例如：要获得所有语言环境的缩写月份，可以将月份的 `cs:date-part` 元素的 `form` 属性设置为 `"short"`）。这些 `cs:date-part` 子元素不影响各个日期部分渲染的顺序和以及其是否渲染。`cs:date-part` 元素中不能使用词缀 [Affixes](#词缀).

没有属性 `form` 的情况下，`cs:date` 则描述了一个自带的非本地化的日期格式。其日期格式使用 `cs:date-part` 子元素来构建。在使用 `name` 属性并设置为 `day`，`month` 或 `year` 时，这些元素的顺序反应了其显示顺序。日期可以在 `cs:date-part` 元素中使用 [`formatting`](格式化) 属性以及多个 `cs:date-part` 的属性来格式化（见 [Date-part](#Date-part)）。`cs:date` 中的 `delimiter` 属性可以用来设置 `cs:date-part` 元素不同日期部分的分隔符，此外，[词缀](#词缀) 可以用在 `cs:date-part` elements。

本地化的日期或者是非本地化的日期，, `cs:date` 都可能携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes)，[display](https://docs.citationstyles.org/en/stable/specification.html#display)，[formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting) 和 [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 属性。

### Date-part

`cs:date-part` 元素用来控制日期的各个部分怎么渲染。除了其父元素 `cs:date` 调用了本地化日期格式，这些子元素同样可以决定哪些部分出现以及各部分的渲染顺序。`cs:date-part` 元素描述了 `name` 属性选择的日期部分，其 `name` 值可以是：

**"day"**

​ 对于 `"day"` 来说，`cs:date-part` 可能会携带 `form` 属性，值可以设置为：

- "numeric" - （默认），例如，每个月第一天显示为 `1`

- "numeric-leading-zeros" - 不够的位数用 0 补齐，例如，`01`

- "ordinal" - 使用序数形式，例如，`1st`

  有的语言种，比如法语，只在月份的第一天使用 `"oridinal"` 也就是序数形式（"1er janvier"，"2 janvier"，"3 janvier" 等)。这种输出可以通过 `"oridinal"` 以及 `limit-day-oridinals-to-day-1` 属性来设置 (see [本地化选项](#本地化选项))。

**"month"**

​ 对于 `"month"` 来说，`cs:date-part` 可能会携带 [`strip-periods`](#strip-periods) 和 `form` 属性。在 locale files 中，月份缩写应该后面要加点（例如： "Jan.", "Feb."）。点可以设置 `strip-periods` 为 `"true"` 去掉。`form` 属性可以设置为：

- "long" - 默认，例如：`January`
- "short" - 例如：`Jan.`
- "numeric" - 例如：`1`
- "numeric-leading-zeros" - 例如：`01`

**"year"**

​ 对 `"year"` 来说，`cs:date-part` 可能会携带 `form` 属性，值可以设置为：

- "long" - 默认，例如：`2020`
- "short" - 例如：`20`

`cs:date-part` 也可能携带 [formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting)，[text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 和 `range-delimiter` 属性。除在 `cs:date` 元素中使用，其他情况下，`cs:date-part` 是可以使用词缀的。

### Date Ranges

默认的日期范围中的分隔符是短线（en-dash），比如：`May–July 2008`。可以在 `cs:date-part` 元素中通过 `range-delimiter` 属性来设置常用的分隔符。当日期范围被渲染的时候，范围分隔符从 `cs:date-part` 元素中提取，并且匹配两个日期差别中最大的部分（"year"，"month"，或 "day"）。如下面的例子，将会渲染出类似 `"1-4 May 2008", "May–July 2008"` 和 `"May 2008/June 2009"` 的日期范围。

```xml
<style>
  <citation>
    <layout>
      <date variable="issued">
        <date-part name="day" suffix=" " range-delimiter="-"/>
        <date-part name="month" suffix=" "/>
        <date-part name="year" range-delimiter="/"/>
      </date>
    </layout>
  </citation>
</style>
```

### AD and BC

`"ad"` 一词（Anno Domini）自动附加到小于四位数的正年份（例如，`"79"` 变为 `"79AD"`）。`"bc"` 一词（Before Christ）自动附加到负年份（例如，`"-2500"` 变为 `"2500BC"`）。

### Seasons

如果日期中包含了季节而不是月份，日期术语 (`"season-01"` 到 `"season-04"`, 分别代表春夏秋冬) 将取代月份术语。比如，下面将会被渲染为 `"May 2008"` 和 `"Winter 2009"`。

```xml
<style>
  <citation>
    <layout>
      <date variable="issued">
        <date-part name="month" suffix=" "/>
        <date-part name="year"/>
      </date>
    </layout>
  </citation>
</style>
```

### Approximate Dates

近似日期，在 `is-uncertain-date` 属性设置为 `"true"` 时即渲染（见 [choose](#choose)）。例如：下面的例子讲渲染出 `2005`（正常日期）和 `ca.2003`（近似日期）的结果。

```xml
<style>
  <citation>
    <layout>
      <choose>
        <if is-uncertain-date="issued">
          <text term="circa" form="short" suffix=" "/> # circa 是大约的意思
        </if>
      </choose>
      <date variable="issued">
        <date-part name="year"/>
      </date>
    </layout>
  </citation>
</style>
```

## Number

`cs:number` 渲染元素输出 `variable` 属性选择的数字变量。[数字变量](#数字变量) 是 [标准变量](#标准变量) 的子集。

使用 `cs:number` 元素来渲染数字变量时，如果只包含数字内容 (使用 `is-numeric` 属性设置，见 [Choose](https://docs.citationstyles.org/en/stable/specification.html#choose))，数字就被提取出来并渲染。变量内容包含非数字内容时，变量内容将呈现为原样。

在提取的过程中，用连字符分隔的数字将去掉中间的空格（"2 - 4" 变为 "2-4"）。用逗号分隔的数字在逗号后会添加一个空格，并删掉其余的空格 ("2,3" 和 "2 , 3" 变为 "2, 3")。当数字使用 `&` 分隔时，在前后各添加一个空格 ("2&3" 变为 "2 & 3")。

提取的数字可以通过 `form` 属性行进格式化，其值可以设置为：

- "numeric" - 默认，例如： "1", "2", "3"
- "ordinal" - 序数数字，例如： "1st", "2nd", "3rd"。序数后缀可以使用术语定义 (见 [序数后缀](#序数后缀).
- "long-ordinal" - 长序数，例如： "first", "second", "third"。畅序数使用术语 "long-ordinal-01" 到 "long-ordinal-10" 定义, 用来在数字 1 到 10 使用。对于其他的数字，长序数渲染的结果讲和序数相同.
- "roman" - 罗马数字，例如："i", "ii", "iii"

带有前缀或者后缀的数字不能使用罗马数字进行排序或者渲染（例如："2E" 仍然时 "2E"）。没有词缀的数字可以被分别转换（"2, 3" 可以转换为 "2nd, 3rd", "second, third" 或者 "ii, iii"）。

`cs:number` 元素可能会携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes)，[display](https://docs.citationstyles.org/en/stable/specification.html#display)，[formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting) 和 [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 属性。

## Names

`cs:names` 元素用来输出一个或多个 [名字变量](#名称变量)（或名称变量）的内容（通过必选属性 `variable` 来选择），每个 `names` 元素可以包含一个或者多个名称变量（例如：`"author"` 名称变量会携带引用项中所有的作者名称）。如果选择了多个变量，每个变量将会按顺序单独渲染，但当选择中包括编辑和翻译（`"editor"` 和 `"translator"`）不适用。当包含的内容中有两个名字变量相同时，则只渲染一个。另外，如果 `cs:names` 元素中包含 `cs:label` 元素，`"editortranslator"` 将用来代替 `"editor"` 和 `"translator"`（例如：Doe(editor & tranlator)）。`cs:names` 元素中的 [`delimiter`](#分隔符) 属性可以用来分割不同的名字变量（例如：`Doe, Smith (editors); Johnson (translator)` 中间使用了分号隔开）。

```xml
<names variable="editor translator" delimiter="; ">
  <label prefix=" (" suffix=")"/>
</names>
```

`cs:names` 有四个子元素:`cs:name`，`cs:et-al`，`cs:substitute` 和 `cs:label`。 `cs:names` 元素可能会携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes), [display](https://docs.citationstyles.org/en/stable/specification.html#display) 和 [formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting) 属性。

### Name

`cs:name` 元素的一个可选的子元素 `cs:names` 可以用来描述单个 `names` 的格式，以及名称变量中不同 `names` 的分隔。`cs:name` 可能携带下面的属性：

`and`

​ 在名称变量中用来设置倒数第二个名字和倒数第一个名字的分隔符。可选的值为 `"text"`("Doe, Johnson and Smith") 或者 `"symbol"`(eg: "Doe, Johnson & Smith")。

`delimiter`

​ 在名称变量中设置字符串来分隔名称。默认的是 `","`(e.g. "Doe, Smith")。

`delimiter-precedes-et-al`

​ 确定在使用 `et-al` 缩写的情况下，在截断的姓名列表和 `et-al` 术语之间何时使用分隔符或者空格。该属性可选的值有：

- "contextual" - (default), 在作者列表中有 2 个及以上的人时使用
  - 1 name: "J. Doe et al."
  - 2 names: "J. Doe, S. Smith, et al." 两个人，则在最后一个人名和 `et-al` 间使用 `,` 分隔
- "after-inverted-name" - 在 `name-as-sort-order` 属性使当前的名字发生了颠倒时使用。例如：当 `name-as-sort-order` 属性设置为 `"first"` 时，第一个名字的前后部分 Doe 和 J 发生了反转，因此在第一个名字后面使用了分隔符 `,`
  - "Doe, J., et al."
  - "Doe, J., S. Smith et al."
- "always" - 不论几个名字或者怎样的设置，总是使用
  - 1 name: "J. Doe, et al."
  - 2 names: "J. Doe, S. Smith, et al."
- "never" - 禁止使用分隔符，不论几个名字。
  - 1 name: "J. Doe et al."
  - 2 names: "J. Doe, S. Smith et al."

`delimiter-precedes-last`

 在名字列表中确定何时使用分隔符来分割最后一个作者和倒数第二个作者。如果 `and` 没有被设置，则不论 `delimiter-precedes-last` 属性的值，名字分隔符总是使用。

- "contextual" - 默认，当名字列表中的名字有 3 个或以上时使用。下面在使用 3 个名字时，在 `and` 前使用了分隔符 `,`
  - 2 个名字: "J. Doe and T. Williams"
  - 3 个名字: "J. Doe, S. Smith, and T. Williams"
- "after-inverted-name" - 在 `name-as-sort-order` 属性使当前的名字发生了颠倒时使用。例如：当 `name-as-sort-order` 属性设置为 `"first"` 时，仅在第一个名字后使用了分隔符 `,`
  - "Doe, J., and T. Williams"
  - "Doe, J., S. Smith and T. Williams"
- "always" - 分隔符一直使用。
  - 2 names: "J. Doe, and T. Williams"
  - 3 names: "J. Doe, S. Smith, and T. Williams"
- "never" - 禁用分隔符
  - 2 names: "J. Doe and T. Williams"
  - 3 names: "J. Doe, S. Smith and T. Williams"

`et-al-min`/`et-al-use-first`

通过设置这两个属性，可是使用 `et-al` 对名字列表进行缩写。如果名字变量中的名字的数目超过了 `et-al-min` 属性设置的值，则达到 `et-al-use-first` 设置的名称数量后，渲染的名字列表将被截断。`"et-al"`（或者 `"and others"`）术语用来添加到截断列表的后面（见 [et-al](#et-al)）。默认地，当名字列表被截断到单个名字，则名字和 `"et-al"` 术语之间使用空格进行隔开（例如：Doe et al.）。当一个名字列表被截断到两个或者三个名字，则使用分隔符（例如：Doe, Smith, et al.）。这些行为可以使用 `delimiter-precedes-et-al` 属性来设置。

`et-al-subsequent-min`/`st-al-subsequent-use-first`

如果使用了这两个属性，则属性的值分别替换 `et-al-min` 和 `et-al-use-first` 的值以便后续引用。

`et-al-use-last`

当该属性设置为 `"true"` 时，（默认为 `"false"`），则使用下面的格式：截断的名称列表，分隔符，省略号，名称列表最后一个名字。这个属性只能在名称列表有多余两个的名称时使用。例：

```
A. Goffeau, B. G. Barrell, H. Bussey, R. W. Davis, B. Dujon, H.
Feldmann, … S. G. Oliver
```

***

下面讨论的属性将只会影响单个人的名字，这里先给出名字的组成部分。单个人的名字必须含有 "family" 部分，还可以含有 "given"，"suffix"，"non-dropping-particle"，和 "dropping particle" 等部分。下面对这些部分分别进行解释：

- "family" - 姓氏，必须去掉 particle（译注：暂译为粒子）和后缀
- "given" - 全名 "John Edward" 或者 J. E.
- "suffix" - 名字后缀，比如：外国人常用的 Jr 或者罗马数字（经常翻译为 xx 世，比如伊丽莎白二世） "Jr." in "John Smith Jr." 或者 "III" in "Bill Gates III"
- "non-dropping-particle" - 不可删除（省略）的粒子。当只显示姓氏的时候，不能省略 ("de" in the Dutch surname "de Koning") ，但是可能会在姓氏中分别对待，比如在排序的时候
- "dropping-particle" - 可删除的粒子。当只显示姓氏的是欧，可以省略 ("van" in "Ludwig van Beethoven", which becomes "Beethoven")

下面的属性将会影响单个人的名称的渲染：

`form`

指定是否显示名字的所有部分（默认为 `"long"`），或者只显示姓氏和不可省略粒子（值为 `"short"`）。除这两种情况外，还可以设置为 `"count"`，返回使用 `cs:names` 元素渲染的部分的总数（考虑 `et-al` 缩写和编辑/翻译等折叠的影响）。

`initialize`

当该属性设置为 `"false` 时（默认的结果为 `"true"`），并且 `"initialize-with"` 属性被设置时，全名将不使用缩写。但是，如果在全名中有单独的大写字母的时候，仍然会添加 ``"initialize-with"` 的值。例如：当 `initialize` 设置为 `"false"`，并且 `initialize-with` 设置为 `"."` 时，James T kirk 将会变为 James T. Kirk。

`initialize-with`

当该实行被设置时，全名将会使用缩写。该属性将会在每个首字母后添加属性值，比如：上述的名字会变为 J.J. Doe。对于合成的全名，例如：Jean-luc，可以使用全局的带有连字符的 `initialize-with-hyphen` 属性来设置其缩写形式（见 [人名中的连字符](#人名中的连字符)）。

`name-as-sort-order`

指定名字的显示顺序为：姓，然后是名，例如：John Doe 变为 Doe,John。该属性值可以设置为：

- "first" - 属性只影响名字变量中的第一个名字
- "all" - 属性将会影响所有的名字

注意：即使 `name-as-sort-order` 改变了名字内部的顺序，最终显示的顺序不一定与包含粒子和后缀的名字的相同（见 [名字内部顺序](#名字内部顺序)）。`name-as-sort-order` 只影响以拉丁字母或者西里尔字母书写的名字。其他字母书写的名字（比如，亚洲的大部分名字）总是将全名中的姓显示在前面。

`sort-separator`

设置名字的不同部分由于 `name-as-sort-order` 属性导致的内部位置变换后的分隔符。默认值为 `","`（Doe, John）。和 `name-as-sort-order` 属性相同，该属性只适用于拉丁字母和西里尔字母的名字。

`cs:name` 元素也可以携带 [词缀](#词缀) 和 [格式化](#格式化属性)。

### 名字内部顺序

名字内部各部分的顺序取决于 `cs:name` 元素中 `form` 和 `name-as-sort-order` 属性和 `cs:style` 元素中的 `demote-non-droping-particle` 属性的设置。名称各部分的显示和排序的属性通常是不同的。下面将对名字顺序进行简单的介绍：

**拉丁/西里尔名字的显示顺序**

---

条件：`form` 属性设置为 `"long"`

顺序：1. 名 2. 可省略粒子 3. 不可省略粒子 4. 姓 5. 后缀

示例：Jean de La Fontaine III

---

条件：`form` 属性设置为 `"long"`，`name-as-sort-order` 属性激活，`demote-non-dropping-particle` 属性设置为 `"never"` 或者 `"sort-only"`

顺序：1. 不可省略粒子 2. 姓 3. 名 4. 可省略粒子 5. 后缀

示例：La Fontaine, Jean de, III

---

条件：`form` 属性设置为 `"long"`，`name-as-sort-order` 属性激活，`demote-non-dropping-particle` 属性设置为 `"display-and-sort"`

顺序：1. 姓 2. 名 3. 可省略粒子 4. 不可省略粒子 5. 后缀

示例：Fontaine, Jean de La III

---

条件：`form` 属性设置为 `"short"`

顺序：1. 不可省略粒子 2. 姓  

示例：La Fontaine

---

**拉丁/西里尔名字的排序顺序**

---

条件：`demote-non-dropping-particle` 属性设置为 `"never"`

顺序：1. 不可省略粒子 + 姓 2. 可省略粒子 3. 名 4. 后缀

示例：La Fontaine de Jean III

---

条件：`demote-non-dropping-particle` 属性设置为 `"sort-only"` 或者 `"display-and-sort"`

顺序：1. 姓 2. 可省略粒子 + 不可省略粒子 3. 名 4. 后缀

示例：Fontaine de La Jean III

---

**非拉丁和非西里尔名字的显示和排序顺序**

---

条件：`form` 属性设置为 `"long"`

顺序：1. 姓 2. 名

示例：张三   或者 Zhang San

---

条件：`form` 属性设置为 `"short"`

顺序：1. 姓  

示例：张   或者 Zhang

---

### 名字格式化

`cs:name` 元素可能会携带一个或者两个 `cs:name-part` 子元素来对名字的小部分进行特定的格式化。`cs:name-part` 必须携带 `name` 属性，设置为 `"given"` 或者 `"family"`。

如果设置为 `"given"`，`cs:name-part` 元素的 [格式化](#格式化) 和 [文字大小写](#文字大小写) 属性会影响 `"given"` 和 `"dropping-particle"` 部分。[词缀](#词缀) 出现在 `"given"` 左右，将该部分扩起来。

如果设置为 `"family"`，`cs:name-part` 元素的 [格式化](#格式化) 和 [文字大小写](#文字大小写) 属性会影响 `"given"` 和 `"non-dropping-particle"` 部分。[词缀](#词缀) 出现在 `"family"` 左右，将该部分扩起来。

`"suffix"` 部分不受 name-part 部分格式限制。`cs:name-part` 元素不影响 name-part 渲染的顺序。下面的代码，将产生类似 Jane DOE 的效果：

```xml
<names variable="author">
  <name>
    <name-part name="family" text-case="uppercase"/>
  </name>
</names>
```

### Et-al

Et-al 缩写通过 `et-al-...` 属性来控制（见 [Name](#Name)），同时也可以使用可选的 `cs:et-al` 元素设置，`cs:et-al` 元素必须放在 `cs:name` 元素后。`term` 属性可以被设置为 `"et-al"`（默认）或者 `"and others"`。[格式化](#格式化) 属性可以用来设置 et-al 的格式，下面是 `"et-al"` 术语的一个例子：

```xml
<names variable="author">
  <et-al term="and others" font-style="italic"/>
</names>
```

### Substitute

可选的 `cs:substitute` 元素，是 `cs:names` 的子元素，且必须是最后一个子元素，在父元素 `cs:names` 中指定的 [名称变量](#名称变量) 为空时添加替换。替换必须放在 `cs:substitute` 元素中，并且必须包含一个或者多个渲染元素（除 `cs:layout`）。`cs:names` 的简洁版本没有子元素，继承了 `cs:names` 元素中在 `cs:name` 和 `cs:et-al` 子元素的属性值。如果 `cs:substitute` 元素包含了多个子元素，第一个非空的元素用于替换。替换变量在输出的其余部分被抑制，以防止重复。下面的例子中：`"author"` 名称变量为空时，就被 `"editor"` 名称变量替换，在没有 editor 时，则使用 `"title"` 宏替换。

```xml
<macro name="author">
  <names variable="author">
    <substitute>
      <names variable="editor"/>
      <text macro="title"/>
    </substitute>
  </names>
</macro>
```

### Label in `cs:names`

`cs:label` 元素是可选的（见 [Label](#Label)），而且必须位于 `cs:name` 和 `cs:et-al` 元素后，在 `cs:substitute` 元素前。当 `cs:label` 作为 `cs:names` 元素的子元素时，`cs:label` 不能携带 `variable` 属性，而是使用父元素 `cs:names` 中的变量。第二个区别是：`form` 属性可以设置为 `"verb"` 或者 `"verb-short"`，其所有允许的值为：

- "long" - （默认）, 例如， "editor" 术语渲染为 "editor" 和 "editors"
- "short" - 例如，"editor" 术语渲染为 "ed." 和 "eds"
- "verb" - 例如，"editor" 术语渲染为 "edited by"
- "verb-short" - 例如，"editor" 术语渲染为 "ed."
- "symbol" - 例如，"section" 术语渲染为 "§" 和 "§§"

## Label

`cs:label` 渲染元素输出与所选变量匹配的术语，该属性必须设置为 "locator"、"page" 或数字变量之一。只有当选择的变量是非空的时候，术语才会渲染。例如：

```xml
<group delimiter=" ">
  <label variable="page"/>
  <text variable="page"/>
</group>
```

可以生成 `"page 3"` 或者 `"pages 5-7"`。`cs:label` 可能会携带下面的属性:

`form`

​ 选择术语的形式，可以设置为下面的值：

- "long" - （默认）， 例如：  "page" 术语渲染为 "page"/"pages"
- "short" - 例如：  "page" 术语渲染为 "p."/"pp."
- "symbol" - 例如：  "section" 术语渲染为 "§"/"§§"

`plural`

​ 设置术语的复数形式，可以使用下面的值：

- "contextual" - （默认），复数形式的渲染和具体的内容相匹配。当内容中包含多个数字时，使用复数形式。如下面的渲染结果："page 1"，"pages 1-3"，"volume 2"，"volumes 2 & 4"。或者在使用 `number-of-pages` 和 `number-of-volumes` 时，数字大于 1，例如： ("1 volume" 和 "3 volumes"。
- "always" - 总是使用复数形式，不管具体的内容如何。例如："pages 1" 和 "pages 1-3"
- "never" - 禁止使用复数形式，不管具体内容： "page 1" 和 "page 1-3"

`cs:label` 也可能会携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes), [formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting), [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 和 [strip-periods](https://docs.citationstyles.org/en/stable/specification.html#strip-periods) 属性。

## Group

`cs:group` 元素必须包含一个或者多个渲染元素（除了 `cs:layout`）。`cs:group` 可以携带 `delimiter` 属性来分隔子元素以及 `affixes`、`display` 和 `formatting` 属性。`cs:group` 隐含的条件，当以下情况出现时，`cs:group` 和它的子元素将会被抑制：a) 在 `cs:group` 中至少一个渲染元素调用了变量（直接地或者通过宏调用），b) 所有被调用得变量都为空。

```xml
<layout>
  <group delimiter=" ">
    <text term="retrieved"/>
    <text term="from"/>
    <text variable="URL"/>
  </group>
</layout>
```

上述代码可以生成 `"retrieved from http://dx.doi.org/10.1128/AEM.02591-07"` 类似得结果，但是当 URL 为空的时候，不生成结果。

## Choose

`cs:choose` 元素允许有条件的渲染元素。下面的例子的意思为：在 `"issud"` 日期变量存在的情况下，就实施渲染，如果不存在，就给出 `"no date"` 术语：

```xml
<choose>
  <if variable="issued">
    <date variable="issued" form="numeric"/>
  </if>
  <else>
    <text term="no date"/>
  </else>
</choose>
```

`cs:choose` 元素中必须还有 `cs:if` 子元素，后面还可以有一个或者多个 `cs:else-if` 子元素以及一个可选的用来结尾的 `cs:else` 元素。`cs:if` 和 `cs:else-if` 元素可能回包含任意个除 `cs:layout` 的渲染元素。由于空的 `cs:else` 元素是多余的，所以 `cs:else` 元素必须至少包含一个渲染元素。`cs:if` 和 `cs:else-if` 元素必须含有一个或多个判断条件，这些条件可以使用下买的属性设置：

`disambiguate`

​ 当改属性设置为 `"true"`(唯一允许的值) 的时候，在元素内容消除了两个相同的引用时渲染。当所有其他消除歧义的方法都不能识别唯一的目标时，才进行消除歧义的尝试。

`is-numeric`

​ 测试给定的变量（[附录 IV 变量](#附录IV 变量)）是不是包含数字部分。如果内容仅由数字构成，则识别为数字。数字可以带有前缀、后缀（"D2"，"2b"，"L2d"）、并且可能被逗号，连字符或 `&` 分隔（"2, 3"，"2-4"，"2 & 4"）。 例如， "2nd" 被识别为 "true" ，但 "second" 和 "2nd edition" 被识别为 "false".

`is-uncertain-date`

​ 判断给定的 [日期变量](#日期变量) 是不是包含 [近似日期](#Approximate Dates)。

`locator`

​ 判断位置是不是和给定的位置符合。这里的位置主要是在一个文档中的位置，比如，题目，第几段。使用 "sub-verbo" 判断是不是 "sub-verbo" 类型

`position`

​ 判断引用的位置湿否和给定的位置匹配。当在 `cs:bibliography` 中调用时，`position` 的结果为 "false"。位置可以使用下面的选项测试：

- "first": 第一个引用项的位置

- "ibid"/"ibid-with-locator"/"subsequent": 引用先前引用的项目的引用，Such cites may also have the "ibid" or "ibid-with-locator" position when:

  1. the current cite immediately follows on another cite, within the same citation, that references the same item

  or

  1. the current cite is the first cite in the citation, and the previous citation consists of a single cite referencing the same item

  If either requirement is met, the presence of locators determines which position is assigned:

  - **Preceding cite does not have a locator**: if the current cite has a locator, the position of the current cite is "ibid-with-locator". Otherwise the position is "ibid".
  - **Preceding cite does have a locator**: if the current cite has the same locator, the position of the current cite is "ibid". If the locator differs the position is "ibid-with-locator". If the current cite lacks a locator its only position is "subsequent".

- "near-note": position of a cite following another cite referencing the same item. Both cites have to be located in foot or endnotes, and the distance between both cites may not exceed the maximum distance (measured in number of foot or endnotes) set with the `near-note-distance` option (see [Note Distance](https://docs.citationstyles.org/en/stable/specification.html#note-distance)).

Whenever position="ibid-with-locator" tests true, position="ibid" also tests true. And whenever position="ibid" or position="near-note" test true, position="subsequent" also tests true.

`type`

​ 测试项目是不是和给定的类型匹配（[附录 III 类型](#附录 III 类型)）。这里的类型指条目的类型，例如，书，期刊文献，学位论文。

`variable`

​ 测试给定变量（[附录 IV 变量](#附录IV 变量)）的默认的形式 (long) 是不是为空。

---

除了 `disambiguate` 外，所有的条件都允许有多个测试值，多个测试值使用空格分隔（"book thesis"）。

`cs:if` 元素和 `cs:else-if` 元素可能会携带 `match` 属性用来控制判断的逻辑，`match` 可设置的值为：

- "all" - 默认，仅当所有给定测试值都为 true 的时候结果才为 true
- "any" - 当任意一个值为 true 的时候，结果就为 true
- "none" - 当没有值测试为 true 的时候，结果为 true
