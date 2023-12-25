import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,d as a}from"./app-1ZTmwhuN.js";const s={},d=a(`<h1 id="分子动力学入门" tabindex="-1"><a class="header-anchor" href="#分子动力学入门" aria-hidden="true">#</a> 分子动力学入门</h1><p>课上：八个水分子为例的分子动力学。</p><h2 id="分子动力学" tabindex="-1"><a class="header-anchor" href="#分子动力学" aria-hidden="true">#</a> 分子动力学</h2><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><h3 id="建模" tabindex="-1"><a class="header-anchor" href="#建模" aria-hidden="true">#</a> 建模</h3><p>在 MS 中建立模型，上传，vaspkit-106。</p><h3 id="结构优化" tabindex="-1"><a class="header-anchor" href="#结构优化" aria-hidden="true">#</a> 结构优化</h3><p>INCAR 为：</p><details class="hint-container details"><summary>详情</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[zjb@op geo2]$ cat INCAR 
Global Parameters
 ISTART =  0            (Read existing wavefunction; if there)
# ISPIN =  2           (Spin polarised DFT)
 ICHARG =  2         (Non-self-consistent: GGA/LDA band structures)
 LREAL  = .FALSE.          (Projection operators: automatic)
 ENCUT  =  400        (Cut-off energy for plane wave basis set, in eV)
 PREC   =  Normal       (Precision level)
 LWAVE  = .FALSE.        (Write WAVECAR or not)
 LCHARG = .FALSE.        (Write CHGCAR or not)
 NPAR   = 4           (Max is no. nodes; don&#39;t set for hybrids)
 ALGO   = Fast

Electronic Relaxation
ISMEAR =  0            (Gaussian smearing; metals:1)
SIGMA  =  0.05         (Smearing value in eV; metals:0.2)
EDIFF  =  1E-04        (SCF energy convergence; in eV)

Ionic Relaxation
NSW    =  100          (Max electronic SCF steps)
IBRION =  2            (Algorithm: 0-MD; 1-Quasi-New; 2-CG)
POTIM  =  0.3
#ISIF   =  2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
EDIFFG = -1E-02        (Ionic convergence; eV/AA)
# ISM =  2            (Symmetry: 0=none; 2=GGA; 3=hybrids)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>需要把 walltime 加长，课上演示失败的原因就是到了 walltime。我加到了 01:30:00。</p><p>疑惑：怎样迅速达到收敛？这个硬生生跑完了 100 步...</p><h3 id="分子动力学-1" tabindex="-1"><a class="header-anchor" href="#分子动力学-1" aria-hidden="true">#</a> 分子动力学</h3><p>在结构优化基础上，对 INCAR 做如下修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Ionic Relaxation
 NSW    =  100          (Max electronic SCF steps)
 IBRION =  0            (Algorithm: 0-MD; 1-Quasi-New; 2-CG)
 POTIM  =  1
 SMASS  =  0
 TEBEG  =  350
 TEEND  =  350
# ISIF   =  2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
# EDIFFG = -1E-02        (Ionic convergence; eV/AA)
# ISM =  2            (Symmetry: 0=none; 2=GGA; 3=hybrids)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果分析" tabindex="-1"><a class="header-anchor" href="#结果分析" aria-hidden="true">#</a> 结果分析</h3><p>使用 <code>grep T= stdout</code> 查看数据。使用 <code>grep T= stdout &gt; md-data.txt</code> 将数据保存到 <code>md-data.txt</code> 文件，下载，导入 Origin。</p>`,16),r=[d];function l(t,c){return n(),i("div",null,r)}const m=e(s,[["render",l],["__file","index.html.vue"]]);export{m as default};
