---
title: 样式的行为
date: 2022-08-01 16:55:26
updated: 2022-08-05 18:06:47
---

# 样式的行为

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

## 选项

样式可以使用不同的元素来进行特定的配置。在 `cs:citation` 元素中设置元素可以配置特定的 [引文选项](#引文选项)；在 `cs:bibliography` 元素和 [全局选项](#全局选项)（同时影响引文和参考文献条目）中，可以配置特定的参考文献条目。继承的名字选项可以在 `cs:style`,`cs:style` 和 `cs:bibliography` 中设置。最后，[本地化选项](#本地化选项) 可以在 `cs:locale` 元素中设置。

### 引文选项

#### 消除歧义

当一个引用对应多个参考文献条目的时候会产生歧义。下面有四种方法用来消除歧义：

1. 显示更多作者姓名
2. 扩展姓名（添加缩写或者完整的名）
3. 添加年份后缀
4. 在 `cs:choose` 的 `disambiguate` 属性为 true 的时候，实行渲染

方法 2 也可以在全局名称歧义消除异己整个文档中有歧义的地方。

消除歧义的方法在下面属性被设置的时候，将会被激活，并且按上述列表中的方法进行尝试：

`disambiguate-add-names` 步骤 1

​ 如果设置为 `"true"`（默认为 `false`），使用 et-al 缩写锁代替的名字列表会逐个的加入到渲染列表中，知道添加的名字可以消除引用歧义为止。

`disambiguate-add-givenname` 步骤 2

​ 如果设置为 `"true"`（默认为 `false`），产生歧义的名字将被扩展。名字扩展可以使用 `givenname-disambiguation-rule` 设置。下面是一个例子。

| 含有歧义的引用               | 消除歧义的引用                     |
| ---------------------------- | ---------------------------------- |
| (Simpson 2005; Simpson 2005) | (H. Simpson 2005; B. Simpson 2005) |
| (Doe 1950; Doe 1950)         | (John Doe 1950; Jane Doe 1950)     |

如果不能通过扩展名字来实现消除歧义，当 `disambiguate-add-names` 属性设置为 `"true"`， the names still hidden as a result of et-al abbreviation after the disambiguation attempt of `disambiguate-add-names` are added one by one to all members of a set of ambiguous cites, until no more cites in the set can be disambiguated by adding expanded names.

`givenname-disambiguation-rule`

用来指定 a) 名字扩展的目的是不是仅限于消除歧义，还是对消除歧义的名字有其他的目的 (只有在后面的情况中，有歧义的名字才会在明确的引用中扩展，例如：从 (Doe 1950; Doe 2000) 扩展到 (Jane Doe 1950; John Doe 2000))   b) 名称扩展是针对全部还是针对每个引用的名字 c) 扩展名字的方法。

**扩展单个名字**

​ 扩展单个名字的步骤是：

1. 如果 `initialize-with` 被设置并且 `initialize` 的值为默认的 true：
   (a) 可以通过 `"long"` 而不是 `"short"` 的形式来渲染首字母 (e.g. Doe 变为 J. Doe)
   (b) 如果 `initialize` 设置为 `"flase"`，完整的姓名被渲染，而不是首字母（J. Doe 变为 John Doe）
2. 如果 `initialize-with` 没有被设置，使用 `"long"` 格式渲染完整的姓名（Doe 变为 John Doe）

**消除歧义法则**

​ `givenname-disambiguation-rule` 属性可设置的值为：

​ "all-name"

​  名字扩展具有消除名字歧义和消除引用歧义的双重目的。在渲染的有歧义的名称中，所有的有歧义的或者没有歧义的名字都将被消除歧义。

​ "all-names-with-initials"

​  和 "all-name" 一样，但是名称的扩展仅限于缩写。当 `initialize-with` 没被设置或者 `initialize` 被设置为 `"false"` 时，不会进行消除歧义的尝试。

​ "primary-name"

​  和 "all-name" 一样，但是消除歧义仅限于每个引用的第一个名字。

​ "primary-name-with-initials"

​  和 "all-names-with-initials" 一样，但是消除歧义仅限于每个引用的第一个名字。

​ "by-cite"

​  默认，和 "all-name" 一样，但是名称扩展的目的仅限于消除引用的歧义，只有有歧义的名字在有歧义的引用中才会被影响，并且在引用的第一个名字消除歧义后就停止消除歧义。

`disambiguate-add-year-suffix` 步骤 3

如果设置为 `"true"`（默认为 `"false"`），字母序的年后缀将会被添加到有歧义的名字上（"Doe 2007, Doe 2007" 变为 "Doe 2007a, Doe 2007b"）。当字母序到达 `"z"`，后，就会启用两个字母（"z", "aa", "ab", …, "az", "ba" 等等）。

---

如果应用上述的歧义消除方法后仍然存在歧义，则尝试通过 `disambiguate` 条件来渲染不同的引用 [步骤 4] (见 [choose](#choose))。

#### 引用分组

通过引用分组，可以将相同名称的文本引用放在一起，比如：(Doe 1999; Smith 2002; Doe 2006; Doe et al. 2007) 将会变为 (Doe 1999; Doe 2006; Smith 2002; Doe et al. 2007)。引用分组在引用排序和消除歧义后执行。分组后的引用保持其相对顺序，并移到第一个改组中引用出现的第一个位置。

引用分组可以在 `cs:citation` 元素中通过设置 `cite-group-delimiter` 属性或者 `collapse` 属性（见 [cite collapsing](#cite collapsing)）激活。

`cite-group-delimiter`

激活引用分组并为引用组中的引用指定分隔符，默认为 `","`。例如，当 `cs:citation` 元素中的 `cs:layout` 中的 `delimiter` 设置为 `";"` 时，`collapse` 设置为 `"year"`，`cite-group-delimiter` 设置为 `","`，将生成类似 "(Doe 1999,2001; Jones 2000)" 的引用。

#### cite collapsing/引用折叠

author 或者 author-date 类型的引用格式中的引用分组和数字格式中的引用范围可以通过 `collapse` 属性来折叠。折叠引用组中分隔符可以是使用 `year-suffix-delimiter` 和 `after-collapse-delimiter` 属性来设置：

`collapse`

激活引用分组和折叠。允许的值为：

- "citation-number" - 当使用数字样式的时候，折叠引用数字的范围（通过 `"citation-number"` 变量来渲染） ，例如："[1, 2, 3, 5]" 变为 "[1–3, 5]"。只有升序的引用才可以折叠，比如：  "[3, 2, 1]" 将不会折叠。
- "year" - 通过压缩相同的名字来折叠引用分组，例如： "(Doe 2000, Doe 2001)" 变为 "(Doe 2000, 2001)"。
- "year-suffix" - 对名字相同的折叠项，折叠相同的年份，例如：  "(Doe 2000a, 2000b)" 变为 "(Doe 2000a, b)"。
- "year-suffix-ranged" - 对名字相同的折叠项，折叠年份范围，例如： "(Doe 2000a, b, c, e)" 变为 "(Doe 2000a–c,e)"。

当 `disambiguate-add-year-suffix` 设置为 `"false"` 时，或者引用中包含位置（例如：“(Doe 2000a-c, 2000d, p. 5, 2000e,f)”，"Doe 2000d" 有一个页码位置），"year-suffix" 和 "year-suffix-ranged" 回退到 "year"。

`year-suffix-delimiter`

​ 设置年份后缀的分隔符。默认在 `cs:citation` 元素的 `cs:layout` 中设置。例如：当 `collapse` 设置为 `"year-suffix"`，`cs:citation` 中的 `cs:layout` 的 `delimiter` 元素设置为 `";"`，并且 `year-suffix-delimiter` 设置为 `","` 时，渲染结果将类似于 "(Doe 1999a,b; Jones 2000)"。

`after-collapse-delimiter`

​ 设置折叠后的引用组要使用的分隔符。默认在 `cs:citation` 元素的 `cs:layout` 中设置。例如：当 `collapse` 设置为 `"year"`，`cs:citation` 中的 `cs:layout` 的 `delimiter` 元素设置为 `","`，并且 `after-collapse-delimiter` 设置为 `";"` 时，渲染结果将类似于 "(Doe 1999, 2001; Jones 2000, Brown 2001)"。

#### 标注距离

`near-note-distance`

当有一个预先的标注时，`"near-note"` 位置是我引用被判断为真，这种预先的标注可以为 a) 指向同一个项目 b) 当前注视以前的脚注或尾注。（译注：不知道讲了什么）

### 参考文献目录选项

#### 空白

`hanging-indent`

​ 如果设置为 `"true"`（默认为 `"false"`），参考文献列表将采用悬挂缩进渲染。

`second-field-align`

​ 如果该属性被设置，则书目条目的后续行沿第二字段对齐。 使用 "flush" 时，第一个字段与边距齐平。 对于 "margin"，第一个字段放在 margin 中，随后的行与 margin 对齐。例如，当第一个字段设置为 `<text variable="citation-number" suffix=". "/>`

```
9.  Adams, D. (2002). The Ultimate Hitchhiker's Guide to the
    Galaxy (1st ed.).
10. Asimov, I. (1951). Foundation.
```

`line-spacing`

​ 指定垂直方向的行距。默认值为 `"1"`，即单倍行距。可以被设置为任意正整数，用来表示对应倍数的行距。 

`entry-spacing`

​ 指定不同条目垂直方向的距离，默认值为 `"1"`，即一倍距离，可以被设置为任意正整数，用来表示对应倍数的距离。 

#### 参考文献分组

`subsequent-author-substitute`

​ 如果该属性被设置，则此属性将用上一条条目中的名称替换参考文献条目中的名字。具体的代替方案取决于 `subsequent-author-substitute-rule` 属性的值。替换仅限于 `cs:names` 元素中渲染的第一个名字。

`subsequent-author-substitute-rule`

​ 用来指定 `subsequent-author-substitute` 的结果怎么替换。允许的值为：

- "complete-all" - 默认值，当名字变量中的所有渲染的名字和上一个参考文献条目相同时，`subsequent-author-substitute` 属性的值将代替整个名字列表（包括标点和术语，比如 et-al 和 and 等术语），但 `cs:names` 元素中设置的后缀将不会被代替。
- "complete-each" - 和 "complete-all" 一样，需要完整的匹配，但是 `subsequent-author-substitute` 属性的值将会代替所有被渲染的名字。
- "partial-each" - 当有一个或者多个名字变量中的渲染名字和上一个条目中相同时，使用 `subsequent-author-substitute` 属性代替对应的值。匹配从第一个名字开始，直到不匹配的名字为止。
- "partial-first" - 和 "partial-each" 相同，但是替换仅限于第一个名字。

对下面的例子：

```xml
Doe. 1999.
Doe. 2000.
Doe, Johnson & Williams. 2001.
Doe & Smith. 2002.
Doe, Stevens & Miller. 2003.
Doe, Stevens & Miller. 2004.
Doe, Williams et al. 2005.
Doe, Williams et al. 2006.
```

当 `subsequent-author-substitute` 设置为 `"-"`，并且 `subsequent-author-substitute-rule` 设置为 `"complete-all"`，渲染结果将变为：

```xml
Doe. 1999.
---. 2000.
Doe, Johnson & Williams. 2001.
Doe & Smith. 2002.
Doe, Stevens & Miller. 2003.
---. 2004.
Doe, Williams et al. 2005.
---. 2005.
```

当 `subsequent-author-substitute-rule` 设置为 `"complete-each"` 时，渲染的结果为：

```xml
Doe. 1999.
---. 2000.
Doe, Johnson & Williams. 2001.
Doe & Smith. 2002.
Doe, Stevens & Miller. 2003.
---, --- & ---. 2004.
Doe, Williams et al. 2005.
---, --- et al. 2006.
```

当 `subsequent-author-substitute-rule` 设置为 `"partial-each"` 时，渲染的结果为：

```xml
Doe. 1999.
---. 2000.
Doe, Johnson & Williams. 2001.
--- & Smith. 2002.
Doe, Stevens & Miller. 2003.
---, --- & ---. 2004.
Doe, Williams et al. 2005.
---, --- et al. 2005.
```

当 `subsequent-author-substitute-rule` 设置为 `"partial-first"` 时，渲染的结果为：

```xml
Doe. 1999.
---. 2000.
Doe, Johnson & Williams. 2001.
--- & Smith. 2002.
Doe, Stevens & Miller. 2003.
---, Stevens & Miller. 2004.
Doe, Williams et al. 2005.
---, Williams et al. 2005.
```

### 全局选项

**人名中的连字符**

`initialize-with-hyphen`

​ 该属性用来制定合成名字中间是不是使用连字符。例如，`"Jean-Luc"` 是一个合成名字，如果该属性设置为 `"true"`（默认），渲染结果为 `"J.-L."`，如果设置为 `"false"`，渲染结果为 `"J.L."`。

**页码范围**

`page-range-format`

​ 用来设置页码范围的格式，是不是使用简写来压缩。其可选的值有：`"chicago"` ("321–28")， `"expanded"` ( "321–328")， `"minimal"` ("321–8")， 或者 `" minimal-two"` ("321–28")。每一组值前面表示可选的属性值，后面是渲染结果的例子。也可见 [附录V 页码范围格式](#附录V 页码范围格式)。使用 `page-range-delimiter` 属性可以用来设置页面范围分割的符号，该属性在 CSL 1.0.1 中引入，默认是一个破折号。如果改属性没有设置，就默认使用破折号。

**Name Particles**

​ 西方人的名字中经常包括一个或者多个小部分，例如,`"de"` 在荷兰人的名字中 `"W. de Koning"`。在仅显示姓氏时，这些小部分可以分为必须保留和可删除（或译为不可省略和可省略）两种类型：这两种类型分别称为 `non-dropping` 部分和 `dropping` 部分。一个单个的名字可以同时包括这两种类型（不能删除的类型始终位于可删除类型的后面）。例如，`"W. de Koning"` 和法国名字 `"Jean de la Fontaine"` 可以被解构为：

```json
{
    "author": [
        {
            "given": "W.",
            "non-dropping-particle": "de",
            "family": "Koning"
        },
        {
            "given": "Jean",
            "dropping-particle": "de",
            "non-dropping-particle": "La",
            "family": "Fontaine"
        }
    ]
}
```

在仅显示姓氏的时候，只保留不能删除的部分，`"De koning"` 和 `"La Fontaine"`。

在名字倒写的情况下，即姓氏在名字之前，在姓氏后面始终添加 `dropping particle`，但是 `non-dropping` 部分可以前置（例如，`"de Koning, W."`）或者后置（`Koning, W. de`）。在名字倒写，不可省略粒子前置时，可以使用下面的方式对名字进行排序：排序 A：将不可省略粒子和姓一起保留作为主排序键值的一部分；排序 B：通过将不可省略粒子和姓分开，并使其成为二级排序键值，并加入可省略粒子（如果有):

**Sort order A: 不可省略粒子不降级**

- 主排序键值 "La Fontaine"
- 次排序键值 "de"
- 第三排序键值: "Jean"

**Sort order B: 不可省略粒子降级**

- 主排序键值 "Fontaine"
- 次排序键值 "de La"
- 第三排序键值 "Jean"

对不可省略粒子的设置可以使用 `demote-non-dropping-particle` 选项：

`demote-non-dropping-particle`

​ 用来设置在倒写的名字中不可省略粒子的显示和排序方式（例如 Koning W. de）。可设置的值为：

- "never": 不可省略粒子被作为姓中的一部分对待，并附加可省略粒子（"de Koning, W."  "La Fontaine, Jean de"）。不可省略粒子作为主排序键值的一部分 (排序 A，例如. "de Koning, W." 将出现在首字母 "D" 的区域).
- "sort-only": 显示的方式和 "never" 相同，但是不可省略粒子降级作为二级排序键值。（排序 B, "de Koning, W." 出现在首字母 "K" 的区域).
- "display-and-sort" （默认），可省略粒子和不可省略粒子在最后（ "Koning, W. de" 和 "Fontaine, Jean de La"）。对名字排序，所有的粒子都是二级排序键值的一部分。（排序 B，"Koning, W. de" 出现在首字母 "K" 的区域).

某些名字中包含的粒子禁止被降级。在这些情况中，粒子将和姓合并到一起，比如，对于法国名字 Charles de Gaulle

```json
{
    "author": [
        {
            "family": "de Gaulle",
            "given": "Charles"
        }
    ]
}
```

### 可继承的名称选项

​ `cs:names` 和 `cs:name` 元素的属性也可以在 `cs:style`、`cs:citation` 和 `cs:bibliography` 元素中设置。这样就不需要每次在 `cs:names` 和 `cs:name` 出现的时候赋值。

​ 可以在 `cs:name` 元素中继承的属性有 `and`, `delimiter-precedes-et-al`, `delimiter-precedes-last`, `et-al-min`, `et-al-use-first`, `et-al-use-last`, `et-al-subsequent-min`, `et-al-subsequent-use-first`, `initialize`, `initialize-with`, `name-as-sort-order` 和 `sort-separator`。`name-form` 属性和 `name-delimiter` 属性对英语 `cs:name` 元素中的 `form` 和 `delimiter` 属性。同样地，`names-delimiter` 属性对应 `cs:names` 元素中的 `delimiter` 属性。

​ 当一个可继承的名称属性在 `cs:style`，`cs:citation` 和 `cs:bibliography` 中设置时，其值将作用于改元素包含的所有的 `cs:names` 元素。如果一个属性在多个可继承的层次设置，最底层的值发挥作用。

### 局部选项

`limit-day-ordinals-to-day-1`

​ 日期格式在 `cs:date` 和 `cs:date-part` 元素中定义。默认地，当 `cs:date-part` 元素中的 `name` 设置为 `"day"`，`form` 属性设置为 `"ordinal"` 时，所有的天（1 到 31）将会以序数形式渲染，例如："January 1st"，"January 2nd" 等等。通过将 `limit-day-ordinals-to-day-1` 属性设置为 `"true"`（默认值为 `"false"`），序数格式将仅限于每个月的第一天，其他的天将不使用序数格式。这在某些语言中出现，比如法语，"1er janvier"，"2 janvier"，"3 janvier"。

`punctuation-in-quote`

​ 当 `cs:text` 元素渲染时，如果 `quotes` 属性设置为 `"true"`（见 [格式化](#格式化)），并且在输出后有逗号或者句号，`punctuation-in-quote` 属性可以控制标点放在括号的内还是外，`"false"` 为外（默认），`"true"` 为内。

## 排序 ***

​ `cs:citation` 和 `cs:bibliography` 元素可以在 `cs:layout` 元素之前携带一个 `cs:sort` 子元素，来实现对引文或者参考文献条目的排序。在缺失 `cs:sort` 元素时，引文和文献条目将会使用他们在文章中出现的顺序来排序。

​ `cs:sort` 元素必须包含一个或者多个 `cs:key` 子元素，可以在该元素中设置变量（[附录 IV 变量](#附录 IV 变量)）或者宏名来实现排序。对于每个 `cs:key` 元素，排序的顺序可以通过设置 `sort` 属性来设置为升序（`"ascending"`，默认）或者降序（`"descending"`）。属性 `names-min`,`names-use-first`,`names-use-last` 可以用来覆盖 `et-al-min`/`et-al-subsequent-min`, `et-al-use-first`/`et-al-subsequent-use-first` 和 `et-al-use-last` 属性的值，并且可以通过 `cs:key` 影响所有的名字.

​ 排序的键值是按顺序求值的，也就是说：首先，使用第一个排序键值对所有的项目进行排序。然后使用第二个键值对第一个键值排序后的结果进行排序，直到所有的键值都完成排序为止。如果键值为空，就放到最后。

​ 这里给出一个例子：其中首先引用 `"author"` 宏进行排序，并且使用 `et al.` 来对较长的作者序列进行代替。然后，使用 `"issued"` 变量来进行第二次排序，使用降序：

```xml
<citation>
  <sort>
    <key macro="author" names-min="3" names-use-first="3"/>
    <key variable="issued" sort="descending"/>
  </sort>
  <layout>
    <!-- rendering elements -->
  </layout>
</citation>
```

​ 变量或者宏的排序键值可以与 `"normal"` 渲染的输出不同，具体要依赖下面的细节：

### 排序变量

​ `cs:key` 元素通过 `variable` 变量属性调用变量的排序键值。名称变量、日期变量和数字变量除外：

**名称**: [名字变量](#名字变量) 通过变量属性被调用，例如 `<key variable="author"/>`，当 `form` 属性设置为 `"long"`，`name-as-sort-order` 属性设置为 `"all"`，返回名字列表字符串。

**日期**：[日期变量](#日期变量) 通过 `variable` 属性被调用，返回 `YYYYMMDD` 格式。使用 0 代替缺失的日期部分，例如：`December 2000` 渲染为 `20001200`。因此，简略的日期在升序排列的时候更加靠前，例如：2000, May 2000, May 1st 2000。负数的年份（即公元前）将被反向排序，比如：100BC, 50BC, 50AD, 100AD。排序过程中，季节将被忽略，因为南北半球的季节顺序不同。在日期范围中，开始的日期用于主要排序，结束日期用于次要排序，例如：2000–2001, 2000–2005, 2002–2003, 2002–2009。在具有相同的开始日期时，日期范围将放在单独的日期后，例如：2000, 2000–2002。

**数字**：[数字变量](#数字变量) 通过 `variable` 属性来调用，返回整数（`form` 设置为 `"numeric"`）如果原始的变量值仅由非数字文本组成，则将该值作为文本字符串返回。

### 排序宏

​ 变量排序的键值是由字符串值组成，没有富文本标记。通过宏属性中的键值 `cs:key` 来调用。下面为一些特殊情况。

​ 对于名字排序，使用相同的宏而不是直接使用名字变量来渲染和排序有 4 个好处。第一，可以使用替换，例如：可以使用 `"editor"` 变量代替空的 `"author"` 变量。第二，可以使用 et-al 缩写，在宏里使用 `et-al-min`/`et-al-subsequent-min`, `et-al-use-first`/`et-al-subsequent-use-first` 和 `et-al-use-last` 可选属性，或者覆盖 `cs:key` 元素中的 `names-min`, `names-use-first` 和 `names-use-last` 。当 et-al 缩写出现的时候，`"et-al"` 和 `"and others"` 术语不会包括在排序键值中。第三，名字可以只使用姓来排序，即使用宏，其中的 `cs:name` 扽 `form` 属性设置为 `"short"`。最后，通过调用宏，将 `cs:name` 中的 `form` 属性设置为 `"count"`，可以按姓名列表中姓名的数目进行排序。至于使用 `variable` 属性对姓名进行排序，将 `cs:name` 中的 `name-as-sort-order` 属性设置为 `"all"`，返回值为排序后的名称列表。

​ 在宏中带有 `cs:number` 的 [数字变量](#数字变量) 的和日期变量的渲染方法和通过变量的调用相同。唯一的区别是：如果通过 `variable` 属性调用日期变量，将返回完整的日期。相反地，宏调用则只返回原本要渲染的日期部分。例如：

## 范围分隔符

​ "citation-number" 和 "year-suffix" 变量的折叠范围以短划线分隔，例如 "（1-3，5）" 和 "（Doe 2000a-c，e）"。

​ "locator" 变量总是使用一个短划线代替任意的连字符。 对 "page" 变量来说，只有 `cs:style` 中的 `page-ran ge-format` 属性被设置时，替换才会执行（见 [页码范围](#页码范围)）。

## 格式化

​ 下面的属性可以在 `cs:date`, `cs:date-part`, `cs:et-al`, `cs:group`, `cs:label`, `cs:layout`, `cs:name`, `cs:name-part`, `cs:names`, `cs:number` 和 `cs:text` 中设置：

`font-style`

用来设置字体，可能的值为：

- "normal" 默认
- "italic" 设置文字的斜体
- "oblique" 设置没有斜体的文字倾斜

`font-variant`

Allows for the use of small capitals, 值可以设置为:

- "normal" 默认
- "small-caps"

`font-weight`

设置字宽，值可以为：

- "normal" 默认
- "bold"
- "light"

`text-decoration`

设置下划线，值可以为：

- "none" 默认
- "underline"

`vertical-align`

设置垂直对齐，值可以为：

- "baseline" 默认
- "sup" 上标
- "sub" 下标

## 词缀

​ 前缀属性 `prefix` 和后缀属性 `suffix` 可以在 `cs:date`（使用 `cs:date` 定义本地化格式除外），`cs:date-part`（`cs:date` 调用本地化格式除外）、`cs:group`、`cs:label`、`cs:layout`、`cs:name`、`cs:names`、`cs:number` 以及 `cs:text` 中设置。属性值用来在输出的前面或者后面添加东西，但是只有输出的时候才会渲染。除在 `cs:layout` 中设置外，词缀将出现在同一个元素的 [格式化](#格式化)、[引用](#引用)、[strip-periods](#strip-periods) 和 [text-case](#text-case) 的影响范围的外面，也就是这些属性的设置对前缀和后缀没有影响。作为一种解决方法，在父元素 `cs:group` 中设置上述属性，会产生影响。

## 分隔符\delimiter

​ `delimiter` 属性可以在 `cs:date`（用来分隔日期的各部分，如年和月；在 `cs:date` 调用本地化格日期格式时，分隔符将被禁用）、`cs:name`（分隔名字变量中不同的名字列表）、`cs:name`（分隔名字列表中的名字）、`cs:group` 以及 `cs;layout`（分隔子元素的输出）中设置分隔符。

## 显示\display

`display` 属性可用于将各个参考文献条目构成一个或者多个文本块。如果使用该属性，所有的渲染元素都在该属性的控制下。（译注：是用来设置对齐效果的）属性可能的值为：

- "block" - 两边对其
- "left-margin" - 左对齐。
- "right-inline" - 右对齐
- "indent" - 缩进。

**例**

A. 除使用 `second-field-align` 外，使用 `"left-margin"` 和 `"roght-inline"` 可以实现相同的渲染效果。这种操作方式潜在的好处是，可以在最终的输出中进一步控制块的格式，例如，在 HTML 的 CSS 或者 word 的样式中。

```xml
<bibliography>
  <layout>
    <text display="left-margin" variable="citation-number"
        prefix="[" suffix="]"/>
    <group display="right-inline">
      <!-- rendering elements -->
    </group>
  </layout>
</bibliography>
```

B. 每个作者的出版物列表。当 `subsequent-author-substitute` 设置为空字符串时，具有相同作者的条目的作者名字只渲染一次。

```xml
<bibliography subsequent-author-substitute="">
  <sort>
    <key variable="author"/>
    <key variable="issued"/>
  </sort>
  <layout>
    <group display="block">
      <names variable="author"/>
    </group>
    <group display="left-margin">
      <date variable="issued">
        <date-part name="year" />
      </date>
    </group>
    <group display="right-inline">
      <text variable="title"/>
    </group>
  </layout>
</bibliography>
```

渲染结果将类似下面：

| Author1           |                    |
| ----------------- | ------------------ |
| year-publication1 | title-publication1 |
| year-publication2 | title-publication2 |
| Author2           |                    |
| year-publication3 | title-publication3 |
| year-publication4 | title-publication4 |

C. 带有注释的条目，注释显示在参下方的缩进块中。

```xml
<bibliography>
  <layout>
    <group display="block">
      <!-- rendering elements -->
    </group>
    <text display="indent" variable="abstract" />
  </layout>
</bibliography>
```

## 引用\quotes

​ `quotes` 属性可以在 `cs:text` 中设置。当设置为 `"true"` 时（默认为 `"false"`），渲染文本将会被包含在引用中。本地化的 `punctuation-in-quote` 选项控制用来连接的逗号或者句号是出现在引号的内部还是外部（默认外部），见 [Locale options](#Locale options)。

## Strip-periods

​ `strip-periods` 属性可以在 `cs:label` 或者 `cd:text` 中设置，此外，当 `name` 被设置为 `"month"` 时，也可以在 `cs:date-part` 中设置。当该属性被设置为 `true` 的时候（默认的是 `"false"`），所有文本中的句号（英文中为点）将会被删除。

## 文字大小写

​ `text-case` 属性可以在 `cs:date`,`cs:date-part`,`cs:label`,`cs:name-part`,`cs:number` 和 `cs:text` 中设置，可设置的值为：

- "lowercase": 使用小写字母渲染文本
- "uppercase": 使用大写字母渲染文本
- "capitalize-first": 如果第一个词是小写的，将首字母设置为大写
- "capitalize-all": 将每个小写词的首字母设置为大写
- "sentence": renders text in sentence case(以句子的格式设置？)
- "title": renders text in title case(以标题的格式来设置？)

### 句子大小写转换

句子大小写转换 (在 "Text-case" 中设置为 "sentence"),

1. 对于大写字符串，字符串的第一个字符保持为大写。其它字母表示为小写
2. 对于大小写混合的字符串，如果单词是小写，第一个单词的首字符大写，其它所有单词的大小写保持不变。

CSL 处理器不能识别专有名词。因此，可以将句子大小写的字符转缺的转换为标题大小写，反之亦然。因此，通常最好在句子大小写的情况下存储注入标题之类的字符串，并且仅在样式需要其它大小写的情况下菜使用文本大小写。

### 标题大小写转换

标题大小写转换 (在 "Text-case" 中设置为 "title") 对英语来说：

1. 对大写的字符串，每个单词的第一个字母保持大写，其它的字母保持小写。
2. 对于小写或者是混合的字符串，每个小写字符串的首字母大写。大写的字符串或者是混合的字符串保持原样。

两种情况下，`stop words` 必须是小写的，除非他们是第一个或者对后一个单词，或者跟在冒号后面。`stop words` 包括：`"a", "an", "and", "as", "at", "but", "by", "down", "for", "from", "in", "into", "nor", "of", "on", "onto", "or", "over", "so", "the", "till", "to", "up", "via", "with",  "yet"`.

**非英语项目**

​ 由于许多语言不使用标题大小写，标题大小写转换 (在 "Text-case" 中设置为 "title") 仅影响英语项目。

​ 如果 `cs:style` 中的 `default-locale` 属性没有设置，或者设置为 `en` 开头的单词，则假定为英语环境。如果某项的元数据包含一个语言字段，而且该字段不是以 `"en"` 开头的，才被视为是非英语环境。

​ 同样的，`default-locale` 被这是为除 `en` 开头的字段，就假定为非英语。如果项目是以 `en` 开头的字段，就被视为是英语。
