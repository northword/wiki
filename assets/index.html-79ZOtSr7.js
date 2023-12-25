import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as r,a as n,b as e,e as s,w as o,d as i}from"./app-1ZTmwhuN.js";const p="/assets/3d1bc1797140403edfb7f0011ab71de5-yaXlBe1s.png",u="/assets/ae7712b9ff5bec6c851b0f553e6cca53-4piaT0Op.png",b="/assets/a46d406ebbefc57ea1e957c0a9da12c0-mb93aXEl.png",v="/assets/bc322911f81cb347efa95db579d1c12d-0pH5Tj37.gif",m="/assets/3bba5a4242f7c15534225c20a4c1e35c-T42ENHdB.jpg",h={},g=i('<h1 id="使用-neb-方法计算反应路径" tabindex="-1"><a class="header-anchor" href="#使用-neb-方法计算反应路径" aria-hidden="true">#</a> 使用 NEB 方法计算反应路径</h1><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2><ol><li>分别对初态和末态进行结构优化</li><li>使用脚本生成中间过程图像 (结构)</li><li>NEB 计算</li><li>处理结果</li></ol><h2 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h2>',4),k={class:"hint-container details"},f=n("summary",null,"详情",-1),T=n("figure",null,[n("img",{src:p,alt:"neb 计算的文件结构示意",tabindex:"0",loading:"lazy"}),n("figcaption",null,"neb 计算的文件结构示意")],-1),x=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[zjb@op neb]$ tree
.
├── ini                ***初态常规结构优化***
│   ├── CONTCAR            -初态优化后的结构——新的初态
│   ├── INCAR              -初态结构优化的输入文件1
│   ├── ini2.vasp          -
│   ├── KPOINTS            -初态结构优化的输入文件2
│   ├── OSZICAR
│   ├── OUTCAR
│   ├── out.log
│   ├── POSCAR             -初态结构优化的输入文件3
│   ├── POTCAR             -初态结构优化的输入文件4
│   ├── stdout
│   ├── vasp.pbs
├── fin                ***末态常规结构优化***
│   ├── CONTCAR            -末态优化后的结构——新的末态
│   ├── fin2.vasp
│   ├── INCAR
│   ├── KPOINTS
│   ├── OSZICAR
│   ├── OUTCAR
│   ├── out.log
│   ├── POSCAR
│   ├── POTCAR
│   ├── stdout
│   └── vasp.pbs
├── 00                 ***↓↓↓*****中间态*****↓↓↓***
│   ├── OUTCAR            -初态结构优化后的OUTCAR   ../ini/OUTCAR
│   ├── POSCAR            -初态结构优化后的CONTCAR  ../ini/CONTCAR
│   └── POSCAR.xyz
├── 01
│   ├── CONTCAR
│   ├── OUTCAR
│   ├── POSCAR
│   └── POSCAR.xyz
│   └── stdout
├── 02
│   ├── CONTCAR
│   ├── OUTCAR
│   ├── POSCAR
│   ├── POSCAR.xyz
│   └── stdout
├── 03
│   ├── CONTCAR
│   ├── OUTCAR
│   ├── POSCAR
│   ├── POSCAR.xyz
│   └── stdout
├── 04
│   ├── OUTCAR            *末态结构优化后的OUTCAR  ../fin/OUTCAR
│   ├── POSCAR            *末态结构优化后的CONTCAR ../fin/CONTCAR
│   └── POSCAR.xyz     ***↑↑↑*****中间态*****↑↑↑***

├── INCAR              ***neb计算的输入文件等***
├── KPOINTS
├── movie
├── movie.xyz
├── neb.dat
├── out.log
├── POTCAR
├── stdout
├── vasp.pbs
└── vasprun.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O=i(`<h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><h3 id="step1-分别对初态和末态进行常规的结构优化" tabindex="-1"><a class="header-anchor" href="#step1-分别对初态和末态进行常规的结构优化" aria-hidden="true">#</a> Step1. 分别对初态和末态进行常规的结构优化</h3><p>上课时的例子是 <code>O 在 N 掺杂的石墨烯上的吸附</code>，其中 <code>INCAR</code> 为</p><details class="hint-container details"><summary>详情</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Global Parameters
ISTART =  0            (Read existing wavefunction; if there)
LREAL  = .FALSE.          (Projection operators: automatic)
ENCUT  =  400        (Cut-off energy for plane wave basis set, in eV)
PREC   =  Normal       (Precision level)
LWAVE  = .FALSE.        (Write WAVECAR or not)
LCHARG = .FALSE.        (Write CHGCAR or not)
ALGO = Fast

Electronic Relaxation
ISMEAR =  0            (Gaussian smearing; metals:1)
SIGMA  =  0.1         (Smearing value in eV; metals:0.2)
NELM   =  60           (Max electronic SCF steps)
NELMIN =  4            (Min electronic SCF steps)
EDIFF  =  1E-04        (SCF energy convergence; in eV)

Ionic Relaxation
NSW    =  100          (Max electronic SCF steps)
IBRION =  2            (Algorithm: 0-MD; 1-Quasi-New; 2-CG)
ISIF   =  0          (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
EDIFFG = -1E-01        (Ionic convergence; eV/AA)
POTIM = 0.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><blockquote><p>[!warning] 两个 <code>POSCAR</code> 中，<strong>元素顺序必须对应</strong>，要不然后面测相似度会出问题，会变得很大。（通过 cif2pos 和 xsd2pos 的默认排的顺序不一样哦，已踩坑）</p></blockquote><figure><img src="`+u+'" alt="初态结构优化后 fin/CONTCAR" tabindex="0" loading="lazy"><figcaption>初态结构优化后 fin/CONTCAR</figcaption></figure><p>上图：初态结构优化后的</p><p>下图：末态结构优化后的</p><figure><img src="'+b+`" alt="末态结构优化后后 ini/CONTCAR" tabindex="0" loading="lazy"><figcaption>末态结构优化后后 ini/CONTCAR</figcaption></figure><p>初末态看起来不一样是因为周期性导致的，只是显示的不同而已。</p><h3 id="step2-使用脚本处理中间过程" tabindex="-1"><a class="header-anchor" href="#step2-使用脚本处理中间过程" aria-hidden="true">#</a> Step2. 使用脚本处理中间过程</h3><p>结构优化后，原初末态的 <code>CONTCAR</code> 就成为了新的初态和末态</p><h4 id="对初末态测相似度以确定插点数量" tabindex="-1"><a class="header-anchor" href="#对初末态测相似度以确定插点数量" aria-hidden="true">#</a> 对初末态测相似度以确定插点数量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Usage</span>
$ dist.pl <span class="token operator">&lt;</span>初态结构<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>末态结构<span class="token operator">&gt;</span>

<span class="token comment"># This example</span>
<span class="token punctuation">[</span>zjb@op <span class="token number">3</span>-NEB_O_graphene<span class="token punctuation">]</span>$ dist.pl ini/CONTCAR fin/CONTCAR 
<span class="token number">1.55500097020471</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>[!tip] 若返回值&lt;5，通常可以下一步</p><p>插点数量通常是 <code>相似度/0.8</code>.</p></blockquote><h4 id="插入中间图像" tabindex="-1"><a class="header-anchor" href="#插入中间图像" aria-hidden="true">#</a> 插入中间图像</h4><p><code>nebmake.pl</code> 以线性进行插点。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Usage</span>
$ nebmake.pl <span class="token operator">&lt;</span>初态结构<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>末态结构<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>插点数量<span class="token operator">&gt;</span>

<span class="token comment"># This example</span>
<span class="token punctuation">[</span>zjb@op <span class="token number">3</span>-NEB_O_graphene<span class="token punctuation">]</span>$ nebmake.pl ini/CONTCAR fin/CONTCAR <span class="token number">3</span>   <span class="token comment"># 3为插点数量，咱这儿把它记为N</span>
filetype1: vasp5
filetype2: vasp5

OK, ALL SETUP HERE
FOR LATER ANALYSIS, PUT OUTCARs IN FOLDERS 00 and 04 <span class="token operator">!</span><span class="token operator">!</span><span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>[!warning] 提交任务时，CPU 需要是插点数量 N 的整数倍</p></blockquote><p>这一步执行后，会生成 N+1 个文件夹，其中 00 是初态，N+1 是末态。同时会把 <code>ini/CONTCAR</code> 复制到 <code>00/POSCAR</code>，把 <code>fin/CONTCAR</code> 复制到 <code>N+1/POSCAR</code>。</p><p>根据这一步返回的提示，分别将初末态的 <code>OUTCAR</code> 复制到 <code>00</code> 和 <code>N+1</code> 文件夹，以便于后续分析。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> ini/OUTCAR 00/
<span class="token function">cp</span> fin/OUTCAR 04/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-nebmovie-查看生成的路线是否合理" tabindex="-1"><a class="header-anchor" href="#使用-nebmovie-查看生成的路线是否合理" aria-hidden="true">#</a> 使用 nebmovie 查看生成的路线是否合理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nebmovie.pl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行后会生成 <code>movie.xyz</code> 文件，<code>ase-gui 文件路径</code> 查看。</p><figure><img src="`+v+`" alt="neb-movie-N_grapene_O_0" tabindex="0" loading="lazy"><figcaption>neb-movie-N_grapene_O_0</figcaption></figure><h3 id="step3-neb-计算" tabindex="-1"><a class="header-anchor" href="#step3-neb-计算" aria-hidden="true">#</a> Step3. NEB 计算</h3><h4 id="准备-neb-计算的输入文件" tabindex="-1"><a class="header-anchor" href="#准备-neb-计算的输入文件" aria-hidden="true">#</a> 准备 NEB 计算的输入文件</h4><p><code>POTCAR</code> 和 <code>KPOINTS</code> 不用改直接复制过来就好，不用准备 POSCAR，他已经在上一步被放进 <code>00/</code> 和 <code>04/</code> 中了,</p><p><code>INCAR</code> 要修改不少东西：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Global Parameters
 NPAR   =  6           插点个数N的整数倍
 
Electronic Relaxation
 EDIFF  =  1E-05
  
Ionic Relaxation
 NSW    =  100         (Max ionic steps)
 IBRION =  3           (Algorithm: 0-MD; 1-Quasi-New; 2-CG)
 POTIM  =  0            IBRION = 3, POTIM = 0，是VTST识别并启动VTST优化算法的标致
 ISIF   =  0           (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
 EDIFFG =  -0.2        (Ionic convergence; eV/AA)

NEB
 LCLIMB   =  .FALSE.     爬坡（CI-NEB），由于要用neb而不是cineb，所以关闭。
 ICHAIN   =  0           开启NEB方法
 IMAGES   =  3           插点个数
 IOPT     =  7           VTST的优化算法。1-2适合精收敛，7适合粗收敛
 MAXMOVE  =  0.1
 TIMESTEP =  0.05 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>[!note] 发现 MAXMOVE=0.2，TIMESTEP=0.1，EDIFF=1E-04，收敛的更快一些。精度的问题罢辽，可以分两次进行，先粗后细呢。</p></blockquote>`,32),S=n("a",{href:"#nudged-elastic-band-options"},"Nudged Elastic Band Options | VTST Tools",-1),A={href:"http://theory.cm.utexas.edu/vtsttools/optimizers.html",target:"_blank",rel:"noopener noreferrer"},C=i(`<h4 id="提交计算" tabindex="-1"><a class="header-anchor" href="#提交计算" aria-hidden="true">#</a> 提交计算</h4><p>修改 PBS 脚本文件的核数。数量是插点数量 N 的整数倍。（第 4 行）</p><p>注意 walltime，适当长一些。（第 5 行）</p><p>修改 PBS 脚本，使其调用 VTST 编译的 VASP 进行计算（第 13，27 行）</p><blockquote><p>[!warning] 需要注意 VTST 编译的时候是使用哪种 mpi（intel mpi OR open mpi）进行并行运行的，如下高亮行 12-13。如果 mpi 选择有误，会出现只算一个点，而其他点不动的情况（反映在 stdout 里是用 6 个核分别把第一个点算了 1 遍，等于把第一个点算了 6 遍），这个问题直到我尝试自己编译 vasp 的时候才发现原因。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op test-vtst-neb<span class="token punctuation">]</span>$ <span class="token function">cat</span> vasp-vtst.pbs 
<span class="token comment">#!/bin/sh</span>
<span class="token comment">#PBS -N Untitled</span>
<span class="token comment">#PBS -l nodes=1:ppn=6</span>
<span class="token comment">#PBS -l walltime=05:30:00</span>
<span class="token comment">#PBS -j oe</span>
<span class="token comment">#PBS -o ./out.log</span>
<span class="token comment">#PBS -q energy</span>

<span class="token builtin class-name">cd</span> <span class="token variable">\${PBS_O_WORKDIR}</span>
<span class="token builtin class-name">source</span> /public/software/profile.d/compiler_intel-composer_xe_2015.2.164.sh
<span class="token comment"># source /public/software/profile.d/mpi_intelmpi-5.0.2.044.sh</span>
<span class="token builtin class-name">source</span> /public/software/profile.d/mpi_openmpi-2.0.0-intel.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=============================================&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Starting VASP at&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span> 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------------------------------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;VTST VASP&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The PBS_O_WORKDIR is&quot;</span> <span class="token variable">$PBS_O_WORKDIR</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The PBS_JOBID     is&quot;</span> <span class="token variable">$PBS_JOBID</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The PBS_JOBNAME   is&quot;</span> <span class="token variable">$PBS_JOBNAME</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The PBS_O_QUEUE   is&quot;</span> <span class="token variable">$PBS_O_QUEUE</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The PBS_O_HOST    is&quot;</span> <span class="token variable">$PBS_O_HOST</span>
<span class="token assign-left variable">NP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> $PBS_NODEFILE <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The num of PBS_NODEFILE is&quot;</span> <span class="token variable">$NP</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The PBS_NODEFILE IS:&quot;</span> 
<span class="token function">cat</span> <span class="token variable">$PBS_NODEFILE</span>
mpirun <span class="token parameter variable">-np</span> <span class="token variable">$NP</span> <span class="token parameter variable">-machinefile</span> <span class="token variable">$PBS_NODEFILE</span> /public/software/apps/vasp/5.4.1/vtst-ompi/vasp_std <span class="token operator">&gt;&amp;</span> stdout
<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------------------------------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;End task at &quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span> 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=============================================&quot;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本因机器实际环境不同而需要更改，但大同小异。</p><p>如何确定调用的是 VTST&amp;VASP？</p><p>在 <code>01~N+1/</code> 下，<code>grep VTST OUTCAR</code> 应有 VTST 版本号返回。</p><blockquote><p>[!note] NOTE: NEB 接着算 如果算了一半被 kill 了，要接着算，只需要把 00、01、02 下的 <code>CONTCAR</code> 覆盖 <code>POSCAR</code>，然后再次提交就可。</p></blockquote><h4 id="检查是否收敛" tabindex="-1"><a class="header-anchor" href="#检查是否收敛" aria-hidden="true">#</a> 检查是否收敛</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Usage</span>
$ nebef.pl

<span class="token comment"># This example</span>
<span class="token punctuation">[</span>zjb@op test-vtst-neb<span class="token punctuation">]</span>$ nebef.pl 
   <span class="token number">0</span>         <span class="token number">0.000000</span>      <span class="token parameter variable">-224.399900</span>         <span class="token number">0.000000</span> 
   <span class="token number">1</span>         <span class="token number">0.148350</span>      <span class="token parameter variable">-224.208300</span>         <span class="token number">0.191600</span> 
   <span class="token number">2</span>         <span class="token number">0.132181</span>      <span class="token parameter variable">-223.262900</span>         <span class="token number">1.137000</span> 
   <span class="token number">3</span>         <span class="token number">0.096709</span>      <span class="token parameter variable">-222.345700</span>         <span class="token number">2.054200</span> 
   <span class="token number">4</span>         <span class="token number">0.000000</span>      <span class="token parameter variable">-222.517000</span>         <span class="token number">1.882900</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果为 <code>序号</code>—<code>最大原子受力</code>—<code>能量</code>—<code>相对初态的能量</code>.</p><p>当所有插点的最大原子受力都 &lt; |EDIFFG| 时，计算收敛。</p><blockquote><p>[!tip] 如果发现这一步受力那一列全是 0，可以考虑检查一下是否调用了 VTST 编译的 VASP 进行计算。</p></blockquote><h4 id="检查切向力" tabindex="-1"><a class="header-anchor" href="#检查切向力" aria-hidden="true">#</a> 检查切向力</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Usage</span>
$ nebbarrier.pl <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> neb.dat

<span class="token comment"># This example</span>
<span class="token punctuation">[</span>zjb@op test-vtst-neb<span class="token punctuation">]</span>$ nebbarrier.pl <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> neb.dat
  <span class="token number">0</span>     <span class="token number">0.000000</span>     <span class="token number">0.000000</span>     <span class="token number">0.000000</span>   <span class="token number">0</span>
  <span class="token number">1</span>     <span class="token number">0.389947</span>     <span class="token number">0.191613</span>    <span class="token parameter variable">-1.474390</span>   <span class="token number">1</span>
  <span class="token number">2</span>     <span class="token number">0.789822</span>     <span class="token number">1.137031</span>    <span class="token parameter variable">-3.591041</span>   <span class="token number">2</span>
  <span class="token number">3</span>     <span class="token number">1.212818</span>     <span class="token number">2.054245</span>     <span class="token number">0.086021</span>   <span class="token number">3</span>
  <span class="token number">4</span>     <span class="token number">1.701348</span>     <span class="token number">1.882893</span>     <span class="token number">0.000000</span>   <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果为 <code>序号</code>——<code>距离</code>——<code>能量</code>——<code>切向力</code>。</p><ul><li>该命令没有输出到屏幕的内容，而是生成 neb.dat 文件。</li><li>第二列表示距离 (即临近两结构的 dist.pl 的计算结果)，</li><li>第三列表示能量 (以初态能量为参考值)，</li><li>第四列为切向力 (forces along the neb) 过渡态附近切向力会正负变号，而且接近 0。（例如 3）</li></ul><h4 id="频率计算" tabindex="-1"><a class="header-anchor" href="#频率计算" aria-hidden="true">#</a> <s>频率计算</s></h4><p>Todo...</p><h4 id="打包结果" tabindex="-1"><a class="header-anchor" href="#打包结果" aria-hidden="true">#</a> 打包结果</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Usage</span>
$ nebresult.pl

<span class="token comment"># This example</span>
<span class="token punctuation">[</span>zjb@op test-vtst-neb<span class="token punctuation">]</span>$ nebresults.pl 

Unziping the OUTCARs <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Do nebbarrier.pl <span class="token punctuation">;</span> nebspline.pl
Do nebef.pl
Do nebmovie.pl
Do nebjmovie.pl
Do nebconverge.pl

Forces and Energy:
   <span class="token number">0</span>         <span class="token number">0.000000</span>      <span class="token parameter variable">-224.399900</span>         <span class="token number">0.000000</span> 
   <span class="token number">1</span>         <span class="token number">0.148350</span>      <span class="token parameter variable">-224.208300</span>         <span class="token number">0.191600</span> 
   <span class="token number">2</span>         <span class="token number">0.132181</span>      <span class="token parameter variable">-223.262900</span>         <span class="token number">1.137000</span> 
   <span class="token number">3</span>         <span class="token number">0.096709</span>      <span class="token parameter variable">-222.345700</span>         <span class="token number">2.054200</span> 
   <span class="token number">4</span>         <span class="token number">0.000000</span>      <span class="token parameter variable">-222.517000</span>         <span class="token number">1.882900</span> 

Extremum <span class="token number">1</span> found at image  <span class="token number">0.000000</span> with energy:  <span class="token number">0.000000</span>
Extremum <span class="token number">2</span> found at image  <span class="token number">0.000330</span> with energy: <span class="token parameter variable">-0.000000</span>
Extremum <span class="token number">3</span> found at image  <span class="token number">2.985984</span> with energy:  <span class="token number">2.054500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出和源码可以了解到，<code>nebresult.pl</code> 做的事情如下：</p><ol start="0"><li><p><s>解压缩 OUTCAR.tg</s></p></li><li><p>执行 <code>nebbarrier.pl</code>，该脚本生成 <code>neb.dat</code>，将收敛情况，NEB 方向力，能量，写入</p></li><li><p>执行 <code>nebspline.pl</code>，该脚本对 <code>neb.dat</code> 里 能量和距离 的关系进行插值，插值结果写入 <code>spline.dat</code> 文件，所有极值的位置和能量写入 <code>exts.dat</code>，把 MEP 画成 <code>mep.eps</code>。 <code>mep.eps</code> 是以 <code>dist.pl</code> 距离为横坐标，能量为纵坐标画出的能势垒图，可用矢量图编辑软件打开，我们也可以使用 <code>neb.dat</code> 的数据用 Origin 画图。</p></li><li><p>执行 <code>nebef.pl</code>，并将其结果（力和能量）写入 <code>nebef.dat</code>。</p></li><li><p>执行 <code>nebmovie.pl</code>，该脚本生成结构变化</p></li><li><p>执行 <code>nebjmovie.pl</code>，</p></li><li><p>执行 <code>nebconverge.pl</code></p></li><li><p><s>还有对各文件夹中的 OUTCAR 打包压缩。</s> 我在源码里注释掉了这一部分。</p></li><li><p>屏显 <code>nebef.dat</code> 和 <code>exts.dat</code>。</p><p>生成的 vaspgr 文件夹内是各个插点结构的收敛图。</p></li></ol><p>具体见 <a href="#nudged-elastic-band-scripts">Nudged Elastic Band Scripts | VTST Tools</a></p><p>其中 mep.eps 就是这样子：</p><figure><img src="`+m+'" alt="neb-N_graphene_O-mep-eps" tabindex="0" loading="lazy"><figcaption>neb-N_graphene_O-mep-eps</figcaption></figure><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="nudged-elastic-band-scripts" tabindex="-1"><a class="header-anchor" href="#nudged-elastic-band-scripts" aria-hidden="true">#</a> [Nudged Elastic Band] Scripts</h3>',30),N={href:"http://theory.cm.utexas.edu/vtsttools/scripts.html#nudged-elastic-band-scripts",target:"_blank",rel:"noopener noreferrer"},_=n("h3",{id:"nudged-elastic-band-options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nudged-elastic-band-options","aria-hidden":"true"},"#"),e(" [Nudged Elastic Band] Options")],-1),E={href:"http://theory.cm.utexas.edu/vtsttools/neb.html#nudged-elastic-band-options",target:"_blank",rel:"noopener noreferrer"},R=i('<table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Default Value</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">ICHAIN</td><td style="text-align:left;">0 | int</td><td style="text-align:left;"></td><td style="text-align:left;">Indicates which method to run. NEB (ICHAIN=0) is the default</td></tr><tr><td style="text-align:left;">IMAGES</td><td style="text-align:left;">none</td><td style="text-align:left;">int</td><td style="text-align:left;">Number of NEB images between the fixed endpoints</td></tr><tr><td style="text-align:left;">SPRING</td><td style="text-align:left;">-5.0</td><td style="text-align:left;">float</td><td style="text-align:left;">The spring constant, in eV/Ang^2 between the images; negative value turns on nudging</td></tr><tr><td style="text-align:left;">LCLIMB</td><td style="text-align:left;">.TRUE.</td><td style="text-align:left;">boolean</td><td style="text-align:left;">Flag to turn on the climbing image algorithm</td></tr><tr><td style="text-align:left;">LTANGENTOLD</td><td style="text-align:left;">.FALSE.</td><td style="text-align:left;">boolean</td><td style="text-align:left;">Flag to turn on the old central difference tangent</td></tr><tr><td style="text-align:left;">LDNEB</td><td style="text-align:left;">.FALSE.</td><td style="text-align:left;">boolean</td><td style="text-align:left;">Flag to turn on modified double nudging</td></tr><tr><td style="text-align:left;">LNEBCELL</td><td style="text-align:left;">.FALSE.</td><td style="text-align:left;">boolean</td><td style="text-align:left;">Flag to turn on SS-NEB. Used with ISIF=3 and IOPT=3.</td></tr><tr><td style="text-align:left;">JACOBIAN</td><td style="text-align:left;">(Ω/N)<sup>{1/3}N</sup>{1/2}</td><td style="text-align:left;">real</td><td style="text-align:left;">Controls weight of lattice to atomic motion. Ω is volume and N is the number of atoms.</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',2),I={href:"https://cndaqiang.github.io/2018/12/07/NEB/",target:"_blank",rel:"noopener noreferrer"},P={href:"http://blog.wangruixing.cn/2019/08/19/cineb/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://theory.cm.utexas.edu/vtsttools/scripts.html#nudged-elastic-band-scripts",target:"_blank",rel:"noopener noreferrer"},B={href:"http://theory.cm.utexas.edu/vtsttools/neb.html#nudged-elastic-band-options",target:"_blank",rel:"noopener noreferrer"},q={href:"http://theory.cm.utexas.edu/vtsttools/optimizers.html",target:"_blank",rel:"noopener noreferrer"};function V(F,L){const t=l("RouterLink"),a=l("ExternalLinkIcon");return c(),r("div",null,[g,n("details",k,[f,T,n("blockquote",null,[n("p",null,[e("这张图整挺好，直接拿过来了，"),s(t,{to:"/dft-learning/05.VASP/04.%E5%8F%8D%E5%BA%94%E8%B7%AF%E5%BE%84/cndaqiang.github.io/2018/12/07/NEB/"},{default:o(()=>[e("这是原地址")]),_:1}),e("。")])]),x]),O,n("p",null,[e("详见 "),S,e(" 和 "),n("a",A,[e("Optimizer input parameters(IOPT) | VTST Tools"),s(a)]),e("。")]),C,n("p",null,[n("a",N,[e("Nudged Elastic Band Scripts | VTST Tools"),s(a)])]),_,n("p",null,[n("a",E,[e("Nudged Elastic Band Options | VTST Tools"),s(a)])]),R,n("ul",null,[n("li",null,[n("a",I,[e("vasp+VTST 进行 NEB 过渡态计算 | cndaqiang"),s(a)])]),n("li",null,[n("a",P,[e("vasp-vtst 计算过渡态--NEB 方法 | 刘锦程"),s(a)])]),n("li",null,[n("a",y,[e("Nudged Elastic Band Scripts | VTST Tools"),s(a)])]),n("li",null,[n("a",B,[e("Nudged Elastic Band Options | VTST Tools"),s(a)])]),n("li",null,[n("a",q,[e("FORCE BASED OPTIMIZERS (IOPT) | VTST Tools"),s(a)])])])])}const M=d(h,[["render",V],["__file","index.html.vue"]]);export{M as default};
