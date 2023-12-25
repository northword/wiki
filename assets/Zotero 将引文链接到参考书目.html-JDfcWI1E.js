import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,a as n,b as s,e as l,d as c}from"./app-1ZTmwhuN.js";const i="/assets/712b4026fdc29fc75f8a1b2002119422-kuCBX5J0.png",r={},u=c('<h1 id="zotero-将引文链接到参考书目" tabindex="-1"><a class="header-anchor" href="#zotero-将引文链接到参考书目" aria-hidden="true">#</a> Zotero 将引文链接到参考书目</h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>建立引用（citation）与参考书目（bibliography）之间的单向超链接（引用 -&gt; 参考书目），类似于 endnotes 的“Link in-text citations to references in the bibliography”：</p><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Zotero 官方不提供该功能，这是因为 Zotero 使用的 CSL 处理器将 citation 渲染为一个 filed，无法添加超链接 <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p><p>从 Zotero 论坛发现了通过 word 宏实现的功能 <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>，虽有一些缺陷，但基本可以达成需求。</p><h2 id="配置及使用" tabindex="-1"><a class="header-anchor" href="#配置及使用" aria-hidden="true">#</a> 配置及使用</h2><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Sub</span> ZoteroLinkCitation<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token comment">&#39; get selected area (if applicable)</span>
    <span class="token keyword">Dim</span> nStart<span class="token operator">&amp;</span><span class="token punctuation">,</span> nEnd<span class="token operator">&amp;</span>
    nStart <span class="token operator">=</span> Selection<span class="token punctuation">.</span>Start
    nEnd <span class="token operator">=</span> Selection<span class="token punctuation">.</span><span class="token keyword">End</span>
    
<span class="token comment">&#39; toggle screen updating</span>
    Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">False</span>
    
<span class="token comment">&#39; define variables</span>
    <span class="token keyword">Dim</span> title <span class="token keyword">As</span> <span class="token keyword">String</span>
    <span class="token keyword">Dim</span> titleAnchor <span class="token keyword">As</span> <span class="token keyword">String</span>
    <span class="token keyword">Dim</span> style <span class="token keyword">As</span> <span class="token keyword">String</span>
    <span class="token keyword">Dim</span> fieldCode <span class="token keyword">As</span> <span class="token keyword">String</span>
    <span class="token keyword">Dim</span> numOrYear <span class="token keyword">As</span> <span class="token keyword">String</span>
    <span class="token keyword">Dim</span> pos<span class="token operator">&amp;</span><span class="token punctuation">,</span> n1<span class="token operator">&amp;</span><span class="token punctuation">,</span> n2<span class="token operator">&amp;</span><span class="token punctuation">,</span> n3<span class="token operator">&amp;</span>

    ActiveWindow<span class="token punctuation">.</span>View<span class="token punctuation">.</span>ShowFieldCodes <span class="token operator">=</span> <span class="token boolean">True</span>
    Selection<span class="token punctuation">.</span>Find<span class="token punctuation">.</span>ClearFormatting
 
<span class="token comment">&#39; find the Zotero bibliography</span>
    <span class="token keyword">With</span> Selection<span class="token punctuation">.</span>Find
        <span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">&quot;^d ADDIN ZOTERO_BIBL&quot;</span>
        <span class="token punctuation">.</span>Replacement<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">.</span>Forward <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token punctuation">.</span>Wrap <span class="token operator">=</span> wdFindContinue
        <span class="token punctuation">.</span>Format <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token punctuation">.</span>MatchCase <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token punctuation">.</span>MatchWholeWord <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token punctuation">.</span>MatchWildcards <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token punctuation">.</span>MatchSoundsLike <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token punctuation">.</span>MatchAllWordForms <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">End</span> <span class="token keyword">With</span>
    Selection<span class="token punctuation">.</span>Find<span class="token punctuation">.</span>Execute
    
    <span class="token comment">&#39; add bookmark for the Zotero bibliography</span>
    <span class="token keyword">With</span> ActiveDocument<span class="token punctuation">.</span>Bookmarks
        <span class="token punctuation">.</span>Add Range<span class="token punctuation">:</span><span class="token operator">=</span>Selection<span class="token punctuation">.</span>Range<span class="token punctuation">,</span> Name<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">&quot;Zotero_Bibliography&quot;</span>
        <span class="token punctuation">.</span>DefaultSorting <span class="token operator">=</span> wdSortByName
        <span class="token punctuation">.</span>ShowHidden <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">End</span> <span class="token keyword">With</span>
    
    <span class="token comment">&#39; loop through each field in the document</span>
    <span class="token keyword">For</span> <span class="token keyword">Each</span> aField <span class="token keyword">In</span> ActiveDocument<span class="token punctuation">.</span>Fields
        <span class="token comment">&#39; check if the field is a Zotero in-text reference</span>
        <span class="token comment">&#39;##################################################</span>
        <span class="token keyword">If</span> InStr<span class="token punctuation">(</span>aField<span class="token punctuation">.</span>Code<span class="token punctuation">,</span> <span class="token string">&quot;ADDIN ZOTERO_ITEM&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">Then</span>
            fieldCode <span class="token operator">=</span> aField<span class="token punctuation">.</span>Code
            <span class="token comment">&#39;#############</span>
            <span class="token comment">&#39; Prepare</span>
            <span class="token comment">&#39; Plain citation== Format of Textfield shown</span>
            <span class="token comment">&#39; must be in Brackets</span>
            <span class="token keyword">Dim</span> plain_Cit <span class="token keyword">As</span> <span class="token keyword">String</span>
            plCitStrBeg <span class="token operator">=</span> <span class="token string">&quot;&quot;&quot;plainCitation&quot;&quot;:&quot;&quot;[&quot;</span>
            plCitStrEnd <span class="token operator">=</span> <span class="token string">&quot;]&quot;&quot;&quot;</span>
            n1 <span class="token operator">=</span> InStr<span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> plCitStrBeg<span class="token punctuation">)</span>
            n1 <span class="token operator">=</span> n1 <span class="token operator">+</span> Len<span class="token punctuation">(</span>plCitStrBeg<span class="token punctuation">)</span>
            n2 <span class="token operator">=</span> InStr<span class="token punctuation">(</span>Mid<span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> n1<span class="token punctuation">,</span> Len<span class="token punctuation">(</span>fieldCode<span class="token punctuation">)</span> <span class="token operator">-</span> n1<span class="token punctuation">)</span><span class="token punctuation">,</span> plCitStrEnd<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n1
            plain_Cit <span class="token operator">=</span> Mid<span class="token operator">$</span><span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> n1 <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> n2 <span class="token operator">-</span> n1 <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token comment">&#39;Reference &#39;as shown&#39; in word as a string</span>
            
            <span class="token comment">&#39;Title array in fieldCode (all referenced Titles within this field)</span>
            <span class="token keyword">Dim</span> array_RefTitle<span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
            i <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">Do</span> <span class="token keyword">While</span> InStr<span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> <span class="token string">&quot;&quot;&quot;title&quot;&quot;:&quot;&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
                n1 <span class="token operator">=</span> InStr<span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> <span class="token string">&quot;&quot;&quot;title&quot;&quot;:&quot;&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> Len<span class="token punctuation">(</span><span class="token string">&quot;&quot;&quot;title&quot;&quot;:&quot;&quot;&quot;</span><span class="token punctuation">)</span>
                n2 <span class="token operator">=</span> InStr<span class="token punctuation">(</span>Mid<span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> n1<span class="token punctuation">,</span> Len<span class="token punctuation">(</span>fieldCode<span class="token punctuation">)</span> <span class="token operator">-</span> n1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;&quot;,&quot;&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n1
                <span class="token keyword">If</span> n2 <span class="token operator">&lt;</span> n1 <span class="token keyword">Then</span> <span class="token comment">&#39;Exception the type &#39;Article&#39;</span>
                    n2 <span class="token operator">=</span> InStr<span class="token punctuation">(</span>Mid<span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> n1<span class="token punctuation">,</span> Len<span class="token punctuation">(</span>fieldCode<span class="token punctuation">)</span> <span class="token operator">-</span> n1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n1 <span class="token operator">-</span> <span class="token number">1</span>
                <span class="token keyword">End</span> <span class="token keyword">If</span>
                array_RefTitle<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=</span> Mid<span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> n1<span class="token punctuation">,</span> n2 <span class="token operator">-</span> n1<span class="token punctuation">)</span>
                fieldCode <span class="token operator">=</span> Mid<span class="token punctuation">(</span>fieldCode<span class="token punctuation">,</span> n2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Len<span class="token punctuation">(</span>fieldCode<span class="token punctuation">)</span> <span class="token operator">-</span> n2 <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
                i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token keyword">Loop</span>
            Titles_in_Cit <span class="token operator">=</span> i
            
            <span class="token comment">&#39;Number array with References shown in PlainCit</span>
            <span class="token comment">&#39;Numer is equal or less than Titels, depending on the type</span>
            <span class="token comment">&#39;[3], [8]-[10]; [2]-[4]; [2], [4], [5]</span>
            <span class="token comment">&#39; All citations have to be in Brackets each! [3], [8] not [3, 8]</span>
            <span class="token comment">&#39; This doesnt work otherwise!</span>
            <span class="token comment">&#39; --&gt; treatment of other delimiters could be implemented here</span>
            <span class="token keyword">Dim</span> RefNumber<span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
            i <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">Do</span> <span class="token keyword">While</span> <span class="token punctuation">(</span>InStr<span class="token punctuation">(</span>plain_Cit<span class="token punctuation">,</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span> <span class="token keyword">Or</span> InStr<span class="token punctuation">(</span>plain_Cit<span class="token punctuation">,</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
                n1 <span class="token operator">=</span> InStr<span class="token punctuation">(</span>plain_Cit<span class="token punctuation">,</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span>
                n2 <span class="token operator">=</span> InStr<span class="token punctuation">(</span>plain_Cit<span class="token punctuation">,</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span>
                RefNumber<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=</span> Mid<span class="token punctuation">(</span>plain_Cit<span class="token punctuation">,</span> n1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n2 <span class="token operator">-</span> <span class="token punctuation">(</span>n1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                plain_Cit <span class="token operator">=</span> Mid<span class="token punctuation">(</span>plain_Cit<span class="token punctuation">,</span> n2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Len<span class="token punctuation">(</span>plain_Cit<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>n2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token keyword">Loop</span>
            Refs_in_Cit <span class="token operator">=</span> i
                 <span class="token comment">&#39;treat only the shown references (skip the rest)</span>
            <span class="token comment">&#39;[3], [8]-[10] --&gt; skip [9]</span>
            <span class="token comment">&#39;Order of titles given from fieldcode, not checked!</span>
            <span class="token keyword">If</span> Titles_in_Cit <span class="token operator">&gt;</span> Refs_in_Cit <span class="token keyword">Then</span>
                array_RefTitle<span class="token punctuation">(</span>Refs_in_Cit <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> array_RefTitle<span class="token punctuation">(</span>Titles_in_Cit <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
                i <span class="token operator">=</span> <span class="token number">1</span>
                <span class="token keyword">Do</span> <span class="token keyword">While</span> Refs_in_Cit <span class="token operator">+</span> i <span class="token operator">&lt;</span><span class="token operator">=</span> Titles_in_Cit
                    array_RefTitle<span class="token punctuation">(</span>Refs_in_Cit <span class="token operator">+</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
                <span class="token keyword">Loop</span>
            <span class="token keyword">End</span> <span class="token keyword">If</span>
            
            <span class="token comment">&#39;#############</span>
            <span class="token comment">&#39;Make the links</span>
            <span class="token keyword">For</span> Refs <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> Refs_in_Cit <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">Step</span> <span class="token number">1</span>
                title <span class="token operator">=</span> array_RefTitle<span class="token punctuation">(</span>Refs<span class="token punctuation">)</span>
                array_RefTitle<span class="token punctuation">(</span>Refs<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                <span class="token comment">&#39; make title a valid bookmark name</span>
                titleAnchor <span class="token operator">=</span> title
                titleAnchor <span class="token operator">=</span> MakeValidBMName<span class="token punctuation">(</span>titleAnchor<span class="token punctuation">)</span>
                
                ActiveWindow<span class="token punctuation">.</span>View<span class="token punctuation">.</span>ShowFieldCodes <span class="token operator">=</span> <span class="token boolean">False</span>
                Selection<span class="token punctuation">.</span><span class="token keyword">GoTo</span> What<span class="token punctuation">:</span><span class="token operator">=</span>wdGoToBookmark<span class="token punctuation">,</span> Name<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">&quot;Zotero_Bibliography&quot;</span>
                
                <span class="token comment">&#39;&#39; locate the corresponding reference in the bibliography</span>
                <span class="token comment">&#39;&#39; by searching for its title</span>
                Selection<span class="token punctuation">.</span>Find<span class="token punctuation">.</span>ClearFormatting
                <span class="token keyword">With</span> Selection<span class="token punctuation">.</span>Find
                    <span class="token punctuation">.</span>Text <span class="token operator">=</span> Left<span class="token punctuation">(</span>title<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span>Replacement<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                    <span class="token punctuation">.</span>Forward <span class="token operator">=</span> <span class="token boolean">True</span>
                    <span class="token punctuation">.</span>Wrap <span class="token operator">=</span> wdFindContinue
                    <span class="token punctuation">.</span>Format <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchCase <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchWholeWord <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchWildcards <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchSoundsLike <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchAllWordForms <span class="token operator">=</span> <span class="token boolean">False</span>
                <span class="token keyword">End</span> <span class="token keyword">With</span>
                Selection<span class="token punctuation">.</span>Find<span class="token punctuation">.</span>Execute
                               
                <span class="token comment">&#39; select the whole caption (for mouseover tooltip)</span>
                Selection<span class="token punctuation">.</span>MoveStartUntil <span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Count<span class="token punctuation">:</span><span class="token operator">=</span>wdBackward
                Selection<span class="token punctuation">.</span>MoveEndUntil <span class="token punctuation">(</span>vbBack<span class="token punctuation">)</span>
                lnkcap <span class="token operator">=</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">&amp;</span> Selection<span class="token punctuation">.</span>Text
                lnkcap <span class="token operator">=</span> Left<span class="token punctuation">(</span>lnkcap<span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span>
                
                <span class="token comment">&#39; add bookmark for the reference within the bibliography</span>
                Selection<span class="token punctuation">.</span>Shrink
                <span class="token keyword">With</span> ActiveDocument<span class="token punctuation">.</span>Bookmarks
                    <span class="token punctuation">.</span>Add Range<span class="token punctuation">:</span><span class="token operator">=</span>Selection<span class="token punctuation">.</span>Range<span class="token punctuation">,</span> Name<span class="token punctuation">:</span><span class="token operator">=</span>titleAnchor
                    <span class="token punctuation">.</span>DefaultSorting <span class="token operator">=</span> wdSortByName
                    <span class="token punctuation">.</span>ShowHidden <span class="token operator">=</span> <span class="token boolean">True</span>
                <span class="token keyword">End</span> <span class="token keyword">With</span>
                
                <span class="token comment">&#39; jump back to the field</span>
                aField<span class="token punctuation">.</span><span class="token keyword">Select</span>
                <span class="token comment">&#39; find and select the numeric part of the field which will become the hyperlink</span>
                Selection<span class="token punctuation">.</span>Find<span class="token punctuation">.</span>ClearFormatting
                <span class="token keyword">With</span> Selection<span class="token punctuation">.</span>Find
                    <span class="token punctuation">.</span>Text <span class="token operator">=</span> RefNumber<span class="token punctuation">(</span>Refs<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span>Replacement<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                    <span class="token punctuation">.</span>Forward <span class="token operator">=</span> <span class="token boolean">True</span>
                    <span class="token punctuation">.</span>Wrap <span class="token operator">=</span> wdFindContinue
                    <span class="token punctuation">.</span>Format <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchCase <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchWholeWord <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchWildcards <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchSoundsLike <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token punctuation">.</span>MatchAllWordForms <span class="token operator">=</span> <span class="token boolean">False</span>
                <span class="token keyword">End</span> <span class="token keyword">With</span>
                Selection<span class="token punctuation">.</span>Find<span class="token punctuation">.</span>Execute
                        
                numOrYear <span class="token operator">=</span> Selection<span class="token punctuation">.</span>Range<span class="token punctuation">.</span>Text <span class="token operator">&amp;</span> <span class="token string">&quot;&quot;</span>
                                    
                <span class="token comment">&#39; store current style</span>
                style <span class="token operator">=</span> Selection<span class="token punctuation">.</span>style
                <span class="token comment">&#39; Generate the Hyperlink --&gt;Forward!</span>
                ActiveDocument<span class="token punctuation">.</span>Hyperlinks<span class="token punctuation">.</span>Add Anchor<span class="token punctuation">:</span><span class="token operator">=</span>Selection<span class="token punctuation">.</span>Range<span class="token punctuation">,</span> Address<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> SubAddress<span class="token punctuation">:</span><span class="token operator">=</span>titleAnchor<span class="token punctuation">,</span> ScreenTip<span class="token punctuation">:</span><span class="token operator">=</span>lnkcap<span class="token punctuation">,</span> TextToDisplay<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span> <span class="token operator">&amp;</span> numOrYear
                <span class="token comment">&#39; reset the style</span>
                Selection<span class="token punctuation">.</span>style <span class="token operator">=</span> style

                <span class="token comment">&#39; comment if you want standard link style</span>
                aField<span class="token punctuation">.</span><span class="token keyword">Select</span>
                <span class="token keyword">With</span> Selection<span class="token punctuation">.</span>Font
                     <span class="token punctuation">.</span>Underline <span class="token operator">=</span> wdUnderlineNone
                     <span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> wdBlack
                <span class="token keyword">End</span> <span class="token keyword">With</span>
                    
            <span class="token keyword">Next</span> Refs <span class="token comment">&#39;References in Cit</span>

        <span class="token keyword">End</span> <span class="token keyword">If</span>  <span class="token comment">&#39;If Zotero-Field</span>
        <span class="token comment">&#39;#########################</span>

        <span class="token keyword">Next</span> aField <span class="token comment">&#39; next field</span>

        <span class="token comment">&#39; go back to original range selected</span>
        ActiveWindow<span class="token punctuation">.</span>View<span class="token punctuation">.</span>ShowFieldCodes <span class="token operator">=</span> <span class="token boolean">False</span>
        ActiveDocument<span class="token punctuation">.</span>Range<span class="token punctuation">(</span>nStart<span class="token punctuation">,</span> nEnd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">Select</span>
        
    <span class="token keyword">End</span> <span class="token keyword">Sub</span>
    <span class="token keyword">Function</span> MakeValidBMName<span class="token punctuation">(</span>strIn <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span>
        <span class="token keyword">Dim</span> pFirstChr <span class="token keyword">As</span> <span class="token keyword">String</span>
        <span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Long</span>
        <span class="token keyword">Dim</span> tempStr <span class="token keyword">As</span> <span class="token keyword">String</span>
        strIn <span class="token operator">=</span> Trim<span class="token punctuation">(</span>strIn<span class="token punctuation">)</span>
        pFirstChr <span class="token operator">=</span> Left<span class="token punctuation">(</span>strIn<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">If</span> <span class="token keyword">Not</span> pFirstChr <span class="token keyword">Like</span> <span class="token string">&quot;[A-Za-z]&quot;</span> <span class="token keyword">Then</span>
            strIn <span class="token operator">=</span> <span class="token string">&quot;A_&quot;</span> <span class="token operator">&amp;</span> strIn
        <span class="token keyword">End</span> <span class="token keyword">If</span>
        <span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Len<span class="token punctuation">(</span>strIn<span class="token punctuation">)</span>
            <span class="token keyword">Select</span> <span class="token keyword">Case</span> Asc<span class="token punctuation">(</span>Mid<span class="token operator">$</span><span class="token punctuation">(</span>strIn<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">Case</span> <span class="token number">49</span> <span class="token keyword">To</span> <span class="token number">57</span><span class="token punctuation">,</span> <span class="token number">65</span> <span class="token keyword">To</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">97</span> <span class="token keyword">To</span> <span class="token number">122</span>
                tempStr <span class="token operator">=</span> tempStr <span class="token operator">&amp;</span> Mid<span class="token operator">$</span><span class="token punctuation">(</span>strIn<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">Case</span> <span class="token keyword">Else</span>
                tempStr <span class="token operator">=</span> tempStr <span class="token operator">&amp;</span> <span class="token string">&quot;_&quot;</span>
            <span class="token keyword">End</span> <span class="token keyword">Select</span>
            <span class="token keyword">Next</span> i
            tempStr <span class="token operator">=</span> Replace<span class="token punctuation">(</span>tempStr<span class="token punctuation">,</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
            MakeValidBMName <span class="token operator">=</span> Left<span class="token punctuation">(</span>tempStr<span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
        <span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缺陷和注意事项" tabindex="-1"><a class="header-anchor" href="#缺陷和注意事项" aria-hidden="true">#</a> 缺陷和注意事项</h2><hr class="footnotes-sep">`,10),k={class:"footnotes"},d={class:"footnotes-list"},m=n("li",{id:"footnote1",class:"footnote-item"},[n("p",null,[s("来源添加 "),n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎")])],-1),v={id:"footnote2",class:"footnote-item"},b={href:"https://forums.zotero.org/discussion/comment/324312/#Comment_324312",target:"_blank",rel:"noopener noreferrer"},w=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function y(h,f){const a=t("ExternalLinkIcon");return o(),p("div",null,[u,n("section",k,[n("ol",d,[m,n("li",v,[n("p",null,[n("a",b,[s("Word: Possibility to link references and bibliography in a document? - Zotero Forums"),l(a)]),s(),w])])])])])}const S=e(r,[["render",y],["__file","Zotero 将引文链接到参考书目.html.vue"]]);export{S as default};
