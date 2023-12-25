import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as d,a as n,b as s,e,d as l}from"./app-1ZTmwhuN.js";const p="/assets/image-02.vasp-opt-20221119172335103-EzAcl7Hu.png",r={},o=n("h1",{id:"结构优化、自洽、非自洽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#结构优化、自洽、非自洽","aria-hidden":"true"},"#"),s(" 结构优化、自洽、非自洽")],-1),u=n("p",null,"结构优化计算是指将输入结构进行弛豫，得到一个稳定的结构（通常以能量变化或力作为收敛标准）。",-1),v=n("p",null,"静态自洽计算，顾名思义就是不对原子或离子的坐标进行改变，只是调整体系电子的运动，以达到该结构的最低能量。",-1),m=n("p",null,"非自洽计算，是在自洽基础上改变 k 点等等参数，根据不同需要选取能量或势函数或电子密度作为初始值，进行迭代计算，可用于求解 DOS，能带或者光学等其他性质。",-1),b=n("p",null,[s("本页对"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"O"),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"O_2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3011em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])])])])]),s("进行结构优化、静电自洽、非静电自洽。")],-1),k=l(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── 1-geo
│   ├── CONTCAR
│   ├── INCAR
│   ├── KPOINTS
│   ├── POSCAR
│   ├── POTCAR
│   └── vasp.pbs
├── 2-scf
│   ├── CHGCAR
│   ├── EIGENVAL
│   ├── INCAR
│   ├── KPOINTS -&gt; ../1-geo/KPOINTS
│   ├── POSCAR -&gt; ../1-geo/CONTCAR
│   ├── POTCAR -&gt; ../1-geo/POTCAR
│   └── vasp.pbs
└── 3-nscf
    ├── CHGCAR    复制自../2-scf/CHGCAR
    ├── INCAR
    ├── KPOINTS
    ├── POSCAR -&gt; ../2-scf/POSCAR
    ├── POTCAR -&gt; ../2-scf/POTCAR
    └── vasp.pbs
    
只列出了输入文件和必要的输出文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><h3 id="结构优化" tabindex="-1"><a class="header-anchor" href="#结构优化" aria-hidden="true">#</a> 结构优化</h3><p>在 <code>1-geo</code> 文件夹中对结构进行结构优化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>O2                                      
1     
10   0    0
0   10    0
0    0   12
O 
2
Selective dynamics
Direct
0.50  0.50  0.50   F   F   F
0.50  0.50  0.62   F   F   T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>Global Parameters
 <span class="token key attr-name">ISTART</span> <span class="token punctuation">=</span>  <span class="token value attr-value">0            (Read existing wavefunction; if there)</span>
 <span class="token key attr-name">ISPIN</span>  <span class="token punctuation">=</span>  <span class="token value attr-value">2           (Spin polarised DFT)</span>
 <span class="token key attr-name">ICHARG</span> <span class="token punctuation">=</span>  <span class="token value attr-value">2         (Non-self-consistent: GGA/LDA band structures)</span>
 <span class="token key attr-name">LREAL</span>  <span class="token punctuation">=</span> <span class="token value attr-value">.FALSE.          (Projection operators: automatic)</span>
 <span class="token key attr-name">ENCUT</span>  <span class="token punctuation">=</span>  <span class="token value attr-value">400        (Cut-off energy for plane wave basis set, in eV)</span>
 <span class="token key attr-name">PREC</span>   <span class="token punctuation">=</span>  <span class="token value attr-value">Normal       (Precision level)</span>
 <span class="token key attr-name">LWAVE</span>  <span class="token punctuation">=</span> <span class="token value attr-value">.FALSE.        (Write WAVECAR or not)</span>
 <span class="token key attr-name">LCHARG</span> <span class="token punctuation">=</span> <span class="token value attr-value">.FALSE.        (Write CHGCAR or not)</span>
 <span class="token key attr-name">ADDGRID</span><span class="token punctuation">=</span> <span class="token value attr-value">.TRUE.        (Increase grid; helps GGA convergence)</span>
 <span class="token key attr-name">NPAR</span>   <span class="token punctuation">=</span> <span class="token value attr-value">4           (Max is no. nodes; don&#39;t set for hybrids)</span>

Electronic Relaxation
 <span class="token key attr-name">ISMEAR</span> <span class="token punctuation">=</span>  <span class="token value attr-value">0            (Gaussian smearing; metals:1)</span>
 <span class="token key attr-name">SIGMA</span>  <span class="token punctuation">=</span>  <span class="token value attr-value">0.05         (Smearing value in eV; metals:0.2)</span>
 <span class="token key attr-name">NELM</span>   <span class="token punctuation">=</span>  <span class="token value attr-value">60           (Max electronic SCF steps)</span>
 <span class="token key attr-name">NELMIN</span> <span class="token punctuation">=</span>  <span class="token value attr-value">4            (Min electronic SCF steps)</span>
 <span class="token key attr-name">EDIFF</span>  <span class="token punctuation">=</span>  <span class="token value attr-value">1E-06        (SCF energy convergence; in eV)</span>

Ionic Relaxation
 <span class="token key attr-name">NSW</span>    <span class="token punctuation">=</span>  <span class="token value attr-value">30          (Max electronic SCF steps)</span>
 <span class="token key attr-name">IBRION</span> <span class="token punctuation">=</span>  <span class="token value attr-value">2            (Algorithm: 0-MD; 1-Quasi-New; 2-CG)</span>
 <span class="token key attr-name">ISIF</span>   <span class="token punctuation">=</span>  <span class="token value attr-value">2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)</span>
 <span class="token key attr-name">EDIFFG</span> <span class="token punctuation">=</span> <span class="token value attr-value">-2E-02        (Ionic convergence; eV/AA)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KPT-Resolved Value to Generate K-Mesh: 0.000
0
Gamma
   1   1   1
0.0  0.0  0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>KPOINTS 和 POTCAR 使用 <code>vaspkit-103</code> 生成</p><p>提交计算，在 <code>stdout</code> 里看到 <code>reached required accuracy - stopping structural energy minimisation</code> 即为收敛。</p><p>得到的 <code>CONTCAR</code>（优化后的结构）见下，CONTCAR 写入的默认是分数坐标，将其转换为笛卡尔坐标后见 CONTCAR_Caresian。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>O2                                      
   1.00000000000000     
    10.0000000000000000    0.0000000000000000    0.0000000000000000
     0.0000000000000000   10.0000000000000000    0.0000000000000000
     0.0000000000000000    0.0000000000000000   12.0000000000000000
   O 
     2
Selective dynamics
Direct
  0.5000000000000000  0.5000000000000000  0.5000000000000000   F   F   F
  0.5000000000000000  0.5000000000000000  0.6028684362988320   F   F   T
 
  0.00000000E+00  0.00000000E+00  0.00000000E+00
  0.00000000E+00  0.00000000E+00  0.00000000E+00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> O2
   1.000
   10.0000000000000000    0.0000000000000000    0.0000000000000000
    0.0000000000000000   10.0000000000000000    0.0000000000000000
    0.0000000000000000    0.0000000000000000   12.0000000000000000
   O 
    2
Selective Dynamics
Cartesian
    5.0000000000000000    5.0000000000000000    6.0000000000000000    F  F  F
    5.0000000000000000    5.0000000000000000    7.2344212355859838    F  F  T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),h=n("p",null,[s("计算得到的键长为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"1.234421235585984 "),n("mover",{accent:"true"},[n("mtext",null,"A"),n("mo",null,"˚")])]),n("annotation",{encoding:"application/x-tex"},"\\text{1.234421235585984 \\AA}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.9468em"}}),n("span",{class:"mord text"},[n("span",{class:"mord"},"1.234421235585984 "),n("span",{class:"mord accent"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.9468em"}},[n("span",{style:{top:"-3em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},"A")]),n("span",{style:{top:"-3.2523em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"accent-body",style:{left:"-0.375em"}},[n("span",{class:"mord"},"˚")])])])])])])])])])]),s("，与实验值"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"1.2075"),n("mover",{accent:"true"},[n("mtext",null,"A"),n("mo",null,"˚")])]),n("annotation",{encoding:"application/x-tex"},"\\text{1.2075\\AA}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.9468em"}}),n("span",{class:"mord text"},[n("span",{class:"mord"},"1.2075"),n("span",{class:"mord accent"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.9468em"}},[n("span",{style:{top:"-3em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},"A")]),n("span",{style:{top:"-3.2523em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"accent-body",style:{left:"-0.375em"}},[n("span",{class:"mord"},"˚")])])])])])])])])])]),s("相近（误差 2.2%）。")],-1),g=n("p",null,[s("也可以将 CONTCAR 使用 VESTA 查看，键长为 1.23442 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mover",{accent:"true"},[n("mtext",null,"A"),n("mo",null,"˚")])]),n("annotation",{encoding:"application/x-tex"},"\\text{\\AA}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.9468em"}}),n("span",{class:"mord text"},[n("span",{class:"mord accent"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.9468em"}},[n("span",{style:{top:"-3em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},"A")]),n("span",{style:{top:"-3.2523em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"accent-body",style:{left:"-0.375em"}},[n("span",{class:"mord"},"˚")])])])])])])])])])]),s("。")],-1),A=l('<figure><img src="'+p+`" alt="O2-geo-CONTCAR" tabindex="0" loading="lazy"><figcaption>O2-geo-CONTCAR</figcaption></figure><h3 id="自洽计算" tabindex="-1"><a class="header-anchor" href="#自洽计算" aria-hidden="true">#</a> 自洽计算</h3><p>在 <code>2-scf</code> 文件夹中对已优化的结构进行静电自洽。</p><ol><li>将结构优化得到的结果复制过来（CONTCAR 变为 POSCAR、改 INCAR，POTCAR 和 KPOINTS 不改）</li><li>修改 INCAR 使其符合自洽计算的要求</li><li>提交作业</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op <span class="token number">2</span>-scf<span class="token punctuation">]</span>$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token punctuation">..</span>/1-geo/CONTCAR POSCAR
<span class="token punctuation">[</span>zjb@op <span class="token number">2</span>-scf<span class="token punctuation">]</span>$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token punctuation">..</span>/1-geo/POTCAR <span class="token builtin class-name">.</span>
<span class="token punctuation">[</span>zjb@op <span class="token number">2</span>-scf<span class="token punctuation">]</span>$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token punctuation">..</span>/1-geo/KPOINTS <span class="token builtin class-name">.</span>
<span class="token punctuation">[</span>zjb@op <span class="token number">2</span>-scf<span class="token punctuation">]</span>$ <span class="token function">cp</span> <span class="token punctuation">..</span>/1-geo/INCAR <span class="token builtin class-name">.</span>
<span class="token punctuation">[</span>zjb@op <span class="token number">2</span>-scf<span class="token punctuation">]</span>$ <span class="token function">cp</span> <span class="token punctuation">..</span>/1-geo/vasp.pbs <span class="token builtin class-name">.</span>

<span class="token comment"># 修改INCAR</span>
 NSW    <span class="token operator">=</span>  <span class="token number">0</span>
 IBRION <span class="token operator">=</span>  <span class="token parameter variable">-1</span>
 LWAVE  <span class="token operator">=</span> .TRUE.
 LCHARG <span class="token operator">=</span> .TRUE.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交计算。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[zjb@op 2-scf]$ cat EIGENVAL 
    2    2    1    2
  0.6000000E+03  0.1000000E-08  0.1000000E-08  0.1200000E-08  0.5000000E-15
  1.000000000000000E-004
  CAR 
 unknown system                          
     12      1     12
 
  0.0000000E+00  0.0000000E+00  0.0000000E+00  0.1000000E+01
    1      -32.479163    -31.253398   1.000000   1.000000
    2      -20.620813    -18.824373   1.000000   1.000000
    3      -13.381535    -12.454501   1.000000   1.000000
    4      -13.228318    -11.385151   1.000000   1.000000
    5      -13.228318    -11.385151   1.000000   1.000000
    6       -6.915025     -4.642110   1.000000   0.000000
    7       -6.915024     -4.642110   1.000000   0.000000
    8       -0.315761     -0.201192   0.000000   0.000000
    9        0.533238      0.741194   0.000000   0.000000
   10        0.791404      0.862512   0.000000   0.000000
   11        1.120056      1.246772   0.000000   0.000000
   12        1.120056      1.246772   0.000000   0.000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非自洽计算" tabindex="-1"><a class="header-anchor" href="#非自洽计算" aria-hidden="true">#</a> 非自洽计算</h3><p>在 <code>3-nscf</code> 文件夹中进行非自洽计算。</p><ol><li>将自洽计算的 POSCAR（CONTCAR 也行，因为 scf 不改变结构）、POTCAR、INCAR、KPOINTS、CHGCAR 复制过来。</li><li>修改 INCAR 和 KPOINTS。</li><li>提交计算。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op <span class="token number">3</span>-nscf<span class="token punctuation">]</span>$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token punctuation">..</span>/2-scf/POSCAR <span class="token punctuation">..</span>/2-scf/POTCAR <span class="token builtin class-name">.</span>
<span class="token punctuation">[</span>zjb@op <span class="token number">3</span>-nscf<span class="token punctuation">]</span>$ <span class="token function">cp</span> <span class="token punctuation">..</span>/2-scf/INCAR <span class="token punctuation">..</span>/2-scf/KPOINTS <span class="token punctuation">..</span>/2-scf/CHGCAR <span class="token punctuation">..</span>/2-scf/vasp.pbs <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>INCAR 中修改以下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>改：
 ISTART =  1            (Read existing wavefunction; if there)
 ICHARG =  11           (Non-self-consistent: GGA/LDA band structures)
 ISMEAR =  0            (Gaussian smearing; metals:1)
 SIGMA  =  0.05         (Smearing value in eV; metals:0.2)

删：
# EDIFFG = -2E-02       (Ionic convergence; eV/AA)

增：
DOS
 NEDOS  = 6000
 LORBIT = 11 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>KPOINTS 重新生成，但是这次我没动 K 点（主要是不知道应该改成啥）。</p><p>提交计算。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,16),x={href:"https://blog.csdn.net/kyang_823/article/details/59110848",target:"_blank",rel:"noopener noreferrer"},C={href:"https://cndaqiang.github.io/2018/01/23/vasp-step1/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://blog.csdn.net/flowingsand/article/details/103656692",target:"_blank",rel:"noopener noreferrer"};function f(y,O){const a=t("ExternalLinkIcon");return c(),d("div",null,[o,u,v,m,b,k,h,g,A,n("p",null,[n("a",x,[s("VASP 结构优化、静态自洽、非自洽计算"),e(a)])]),n("p",null,[n("a",C,[s("vasp 计算流程-结构优化"),e(a)])]),n("p",null,[n("a",R,[s("【vasp 笔记】结构优化（结构弛豫）"),e(a)])])])}const S=i(r,[["render",f],["__file","index.html.vue"]]);export{S as default};
