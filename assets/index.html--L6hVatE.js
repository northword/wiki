import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as r,a as e,b as n,e as a,d as i}from"./app-1ZTmwhuN.js";const c={},d=i(`<h1 id="准备-vasp-的输入文件" tabindex="-1"><a class="header-anchor" href="#准备-vasp-的输入文件" aria-hidden="true">#</a> 准备 VASP 的输入文件</h1><p>输入文件包括 POSCAR、INCAR、KPOINTS、POTCAR。注意大小写，因为 linux 是严格区分大小写的系统。</p><p>该页以对 <code>O2</code> 分子进行结构优化为例，说明 VASP 输入文件的生成步骤。</p><hr><h2 id="vaspkit-生成输入文件的选项" tabindex="-1"><a class="header-anchor" href="#vaspkit-生成输入文件的选项" aria-hidden="true">#</a> VASPKIT 生成输入文件的选项</h2><p>VASPKIT 可以帮助我们简化准备输入文件的步骤，可以先看下 VASPKIT 提供了哪些可以生成输入文件的工具：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op O2_opt<span class="token punctuation">]</span>$ vaspkit
 
            <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>///         
           / _  _ <span class="token punctuation">\\</span>       Hey, you must know what you are doing.  
         <span class="token punctuation">(</span><span class="token operator">|</span> <span class="token punctuation">(</span>.<span class="token punctuation">)</span><span class="token punctuation">(</span>.<span class="token punctuation">)</span> <span class="token operator">|</span><span class="token punctuation">)</span>     Otherwise you might get wrong results<span class="token operator">!</span>  
 +-----.OOOo--<span class="token punctuation">(</span><span class="token punctuation">)</span>--oOOO.------------------------------------------+
 <span class="token operator">|</span>             VASPKIT Version: <span class="token number">1.12</span> <span class="token punctuation">(</span>01 Mar. <span class="token number">2020</span><span class="token punctuation">)</span>              <span class="token operator">|</span>
 <span class="token operator">|</span>        Core Developer: Vei WANG <span class="token punctuation">(</span>wangvei@icloud.com<span class="token punctuation">)</span>          <span class="token operator">|</span>
 <span class="token operator">|</span>     Main Contributors: Nan XU, Jin-Cheng LIU <span class="token operator">&amp;</span> Gang TANG      <span class="token operator">|</span>
 <span class="token operator">|</span>    Please send Bugs and Suggestions to vaspkit@gmail.com      <span class="token operator">|</span>
 +-----.oooO-----------------------------------------------------+
        <span class="token punctuation">(</span>   <span class="token punctuation">)</span>   Oooo.     
         <span class="token punctuation">\\</span> <span class="token punctuation">(</span>    <span class="token punctuation">(</span>   <span class="token punctuation">)</span>     
          <span class="token punctuation">\\</span>_<span class="token punctuation">)</span>    <span class="token punctuation">)</span> /      
                <span class="token punctuation">(</span>_/       
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Structural Options <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
 <span class="token number">1</span><span class="token punctuation">)</span>  VASP Input Files Generator    <span class="token number">2</span><span class="token punctuation">)</span>  Elastic-Properties         
 <span class="token number">3</span><span class="token punctuation">)</span>  K-Path Generator              <span class="token number">4</span><span class="token punctuation">)</span>  Structure Editor           
 <span class="token number">5</span><span class="token punctuation">)</span>  Catalysis-ElectroChem Kit     <span class="token number">6</span><span class="token punctuation">)</span>  Symmetry Search            
 
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Electronic Options <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
 <span class="token number">11</span><span class="token punctuation">)</span> Density-of-States             <span class="token number">21</span><span class="token punctuation">)</span> DFT Band-Structure         
 <span class="token number">23</span><span class="token punctuation">)</span> 3D Band-Structure             <span class="token number">25</span><span class="token punctuation">)</span> Hybrid-DFT Band-Structure  
 <span class="token number">26</span><span class="token punctuation">)</span> Fermi-Surface                 <span class="token number">28</span><span class="token punctuation">)</span> Band-Structure Unfolding   
 
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Charge <span class="token operator">&amp;</span> Potential <span class="token operator">&amp;</span> Wavefunction Options <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
 <span class="token number">31</span><span class="token punctuation">)</span> Charge <span class="token operator">&amp;</span> Spin Density         <span class="token number">42</span><span class="token punctuation">)</span> Potential-Related          
 <span class="token number">51</span><span class="token punctuation">)</span> Wave-Function Analysis  
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> Misc Utilities <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
 <span class="token number">71</span><span class="token punctuation">)</span> Optical-Properties            <span class="token number">72</span><span class="token punctuation">)</span> Molecular-Dynamics Kit 
 <span class="token number">73</span><span class="token punctuation">)</span> VASP2other Interface          <span class="token number">74</span><span class="token punctuation">)</span> <span class="token environment constant">USER</span> interface
 <span class="token number">91</span><span class="token punctuation">)</span> Semiconductor Calculator      <span class="token number">92</span><span class="token punctuation">)</span> 2D-Materials Kit       
                                                                  
 <span class="token number">0</span><span class="token punctuation">)</span>  Quit                                                         
 ------------<span class="token operator">&gt;&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选择 <code>1) VASP Input Files Generator</code></p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>------------&gt;&gt;
1
 ==================== VASP Input Files Options ===================
 101) Customize INCAR File                                        
 102) Generate KPOINTS File for SCF Calculation                   
 103) Generate POTCAR File with Default Setting                   
 104) Generate POTCAR File with User Specified Potential          
 105) Generate POSCAR File from cif (no fractional occupations)   
 106) Generate POSCAR File from Material Studio xsd (retain fixes)
 107) Reformat POSCAR File in Specified Order of Elements         
 108) Successive Procedure to Generate VASP Files and Check       
 109) Check All VASP Files                                        
                                                                  
 0)   Quit                                                        
 9)   Back                                                        
 ------------&gt;&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面 <code>101-106</code> 都可以生成输入文件，然后就可以根据需求去选择了。</p><hr><h2 id="poscar" tabindex="-1"><a class="header-anchor" href="#poscar" aria-hidden="true">#</a> POSCAR</h2><p>POSCAR 文件可以自己写入，也可以通过 Materials Studio 建模后转换格式，还可以从一些结构网站获取结构。</p><h3 id="方法-1-通过新建-poscar-文件并手动写入内容" tabindex="-1"><a class="header-anchor" href="#方法-1-通过新建-poscar-文件并手动写入内容" aria-hidden="true">#</a> 方法 1：通过新建 POSCAR 文件并手动写入内容</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> POSCAR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方法-2-通过-materials-studio-建模以生成-poscar" tabindex="-1"><a class="header-anchor" href="#方法-2-通过-materials-studio-建模以生成-poscar" aria-hidden="true">#</a> 方法 2：通过 Materials Studio 建模以生成 POSCAR</h3><p>在 MS 中建模完成后，有如下几种方式将其转换为 <code>POSCAR</code>：</p><h4 id="_2-1-使用-vaspkit-的-cif2pos-py" tabindex="-1"><a class="header-anchor" href="#_2-1-使用-vaspkit-的-cif2pos-py" aria-hidden="true">#</a> 2.1. 使用 VASPKIT 的 cif2pos.py</h4><p>从 MS 建模完成后导出为 cif 文件：<code>file-export</code>，<code>save as type : .cif</code>，上传到集群上，使用 <code>vaspkit</code>-<code>1</code>-<code>105) Generate POSCAR File from cif (no fractional occupations)</code>，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  ------------&gt;&gt;
 105
  Please type in the filename of cif-&gt;
 NaCl_import.cif           # 在这里输入了.cif文件的文件名
 Pleas input the order of element, \`ENTER\` for default!
 Example: &#39;NA CL&#39; in this CIF
                           #在这里需要输入元素的顺序，通常可以按回车使用默认值
   --&gt;&gt; (01) POSCAR has been generated...
  +---------------------------------------------------------------+
  |                       * ACKNOWLEDGMENTS *                     |
  | Other Contributors: Xue-Fei LIU, Peng-Fei LIU, Dao-Xiong WU,  |
  | Zhao-Fu ZHANG, Tian WANG, Ya-Chao LIU, Qiang LI, iGo and You! |
  +---------------------------------------------------------------+
  |                          * CITATIONS *                        |
  | We Would Appreciate if You Cite in Your Research with VASPKIT.|
  | [1] V. Wang, N. Xu, J.C. LIU, G. Tang, et al, VASPKIT: A Pre- |
  | and Post-Processing Program for VASP Code, arXiv:1908.08269.  |
  +---------------------------------------------------------------+
 [zjb@op NaCl]$ 
 
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在第 4 行，会要求你输入 <code>.cif</code> 文件的文件名。在第 7 行，会要求你输入 <code>元素的种类</code>，如果第 6 行提示的正确，可以回车使用默认。</p><h4 id="_2-2-使用-vesta-转换" tabindex="-1"><a class="header-anchor" href="#_2-2-使用-vesta-转换" aria-hidden="true">#</a> 2.2. 使用 VESTA 转换</h4><p>从 MS 建模完成后导出为 cif 文件：<code>file-export-.cif</code>，用 <code>VESTA</code> 打开该 cif 文件，选择 <code>file-export data</code>，<code>save as : xxx.vasp</code>。将 <code>xxx.vasp</code> 文件上传到服务器，将其重命名为 <code>POSCAR</code>，<code>cp xxx.vasp POSCAR</code>。</p><h4 id="_2-3-使用-vaspkit-的-xsd2pos-py" tabindex="-1"><a class="header-anchor" href="#_2-3-使用-vaspkit-的-xsd2pos-py" aria-hidden="true">#</a> 2.3. 使用 vaspkit 的 xsd2pos.py</h4><p>从 MS 建模完成后导出为 xsd 文件，上传，使用 <code>vaspkit</code>-<code>1）VASP Input Files Generator</code>-<code>106) Generate POSCAR File from Material Studio xsd (retain fixes)</code>.</p><p>另外值得一提的是，通过 <code>xsd2pos</code> 可以保留原子的位置限制信息，而上面两种导出为 <code>.cif</code> 的方式会丢失原子固定。</p>`,26),p=e("code",null,"POSCAR",-1),u=e("code",null,"cif",-1),v=e("code",null,"105",-1),m=e("code",null,"vesta",-1),b=e("code",null,"POSCAR",-1),h={href:"https://mp.weixin.qq.com/s/F82Hzh4saiOpp4xLFU_HGg",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"perl",-1),g=e("code",null,"POSCAR",-1),S=e("code",null,"vaspkit",-1),A=e("code",null,"xsd",-1),P=e("code",null,"POSCAR",-1),C=e("code",null,"vaspkit",-1),f=e("code",null,"106",-1),I=e("code",null,"xsd",-1),x=e("code",null,"Fix Fractional Position",-1),R=e("code",null,"Fix Cartesian Position",-1),T={href:"https://tamaswells.github.io/VASPKIT_manual/manual0.73/vaspkit-manual-0.73.html#header-n67",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"方法-3-从结构网站获取",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方法-3-从结构网站获取","aria-hidden":"true"},"#"),n(" 方法 3：从结构网站获取")],-1),O={href:"https://materialsproject.org/",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,".vasp",-1),F=e("code",null,"POSCAR",-1),G=i(`<p>值得一提的是 VASPKIT 官方文档提到，有时候下载到的 <code>.vasp</code> 文件，里面会有制表符与空格的问题，最好通过 <code>109) Check All VASP Files</code> 检查一下，以免计算失败。</p><h2 id="incar" tabindex="-1"><a class="header-anchor" href="#incar" aria-hidden="true">#</a> INCAR</h2><p><code>VASPKIT</code> 选择 <code>101</code>，然后选择 <code>INCAR 选项</code>，就生成了 INCAR 文件</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code> ------------&gt;&gt;
101
 +-------------------------- Warm Tips --------------------------+
                You MUST Know What You Are Doing
  Some Parameters in INCAR File Neet To Be Set/Adjusted Manually      
 +---------------------------------------------------------------+
 ======================== INCAR Options ==========================
 ST) Static-Calculation            SR) Standard Relaxation        
 MG) Magnetic Properties           SO) Spin-Orbit Coupling         
 D3) DFT-D3 no-damping Correction  H6) HSE06 Calculation         
 PU) DFT+U Calculation             MD) Molecular Dynamics        
 GW) GW0 Calculation               BS) BSE Calculation  
 DC) Elastic Constant              EL) ELF Calculation       
 BD) Bader Charge Analysis         OP) Optical Properties        
 EC) Static Dielectric Constant    PC) Decomposed Charge Density   
 FD) Phonon-Finite-Displacement    DT) Phonon-DFPT            
 NE) Nudged Elastic Band (NEB)     DM) The Dimer Method             
 FQ) Frequence Calculations        LR) Lattice Relaxation          
 
 0)   Quit                                                       
 9)   Back      
 ------------&gt;&gt;
 Input Key-Parameters (STH6D3 means HSE06-D3 Static-Calcualtion)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据计算需要，选择相应类型的选项，如结构优化标准弛豫：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>SR
 INCAR parameters are from user-specified Global.
 INCAR parameters are from user-specified SR.
  --&gt;&gt; (01) Written INCAR file!
 +---------------------------------------------------------------+
 |                       * ACKNOWLEDGMENTS *                     |
 | Other Contributors: Xue-Fei LIU, Peng-Fei LIU, Dao-Xiong WU,  |
 | Zhao-Fu ZHANG, Tian WANG, Ya-Chao LIU, Qiang LI, iGo and You! |
 +---------------------------------------------------------------+
 |                          * CITATIONS *                        |
 | We Would Appreciate if You Cite in Your Research with VASPKIT.|
 | [1] V. Wang, N. Xu, J.C. LIU, G. Tang, et al, VASPKIT: A Pre- |
 | and Post-Processing Program for VASP Code, arXiv:1908.08269.  |
 +---------------------------------------------------------------+
[zjb@op O2_opt]$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上前 4 行提示可以知道 <code>INCAR</code> 已经生成，由于生成的 INCAR 与我们实际需要的 INCAR 仍有一些差别，所以之后我们打开 <code>INCAR</code> 进行进一步修改，</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Global Parameters
ISTART =  1            (Read existing wavefunction; if there)
# ISPIN =  2           (Spin polarised DFT)
# ICHARG =  11         (Non-self-consistent: GGA/LDA band structures)
LREAL  = Auto          (Projection operators: automatic)
# ENCUT  =  400        (Cut-off energy for plane wave basis set, in eV)
PREC   =  Normal       (Precision level)
LWAVE  = .TRUE.        (Write WAVECAR or not；是否写入波函数)
LCHARG = .TRUE.        (Write CHGCAR or not)
ADDGRID= .TRUE.        (Increase grid; helps GGA convergence)
# LVTOT  = .TRUE.      (Write total electrostatic potential into LOCPOT or not)
# LVHAR  = .TRUE.      (Write ionic + Hartree electrostatic potential into LOCPOT or not)
# NELECT =             (No. of electrons: charged cells; be careful)
# LPLANE = .TRUE.      (Real space distribution; supercells)
# NPAR   = 4           (Max is no. nodes; don&#39;t set for hybrids)
# NWRITE = 2           (Medium-level output)
# KPAR   = 2           (Divides k-grid into separate groups)
# NGX    = 500         (FFT grid mesh density for nice charge/potential plots)
# NGY    = 500         (FFT grid mesh density for nice charge/potential plots)
# NGZ    = 500         (FFT grid mesh density for nice charge/potential plots)

ISIF   =  2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
Electronic Relaxation
ISMEAR =  0            (Gaussian smearing; metals:1)
SIGMA  =  0.05         (Smearing value in eV; metals:0.2)
NELM   =  60           (Max electronic SCF steps)
NELMIN =  6            (Min electronic SCF steps)
EDIFF  =  1E-08        (SCF energy convergence; in eV)
# GGA  =  PS           (PBEsol exchange-correlation)

Ionic Relaxation
NSW    =  100          (Max electronic SCF steps)
IBRION =  2            (Algorithm: 0-MD; 1-Quasi-New; 2-CG)
#ISIF   =  2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
EDIFFG = -2E-02        (Ionic convergence; eV/AA)
# ISM =  2            (Symmetry: 0=none; 2=GGA; 3=hybrids)

~ 
~
~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标签和值如何选择可以查 <code>VASP 手册</code> 呢。</p><h2 id="kpoints" tabindex="-1"><a class="header-anchor" href="#kpoints" aria-hidden="true">#</a> KPOINTS</h2><p><code>vaspkit</code>-<code>1</code>，然后，<code>102) Generate KPOINTS File for SCF Calculation</code>，然后选择需要的撒点方法和精度，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>------------&gt;&gt;
102
 ======================= K-Mesh Scheme ==========================
 1) Monkhorst-Pack Scheme                            
 2) Gamma Scheme                                     
                                                     
 0)   Quit                                             
 9)   Back                                             
 -------------&gt;&gt;
1                # 在这里选择方法
  --&gt;&gt; (01) Reading Structural Parameters from POSCAR File...
 +---------------------------------------------------------------+
 |               Selective Dynamics is Activated!                |
 +---------------------------------------------------------------+
 +-------------------------- Warm Tips --------------------------+
   * Accuracy Levels: Gamma-Only: 0;              
                      Low: 0.06~0.04;             
                      Medium: 0.04~0.03;          
                      Fine: 0.02-0.01.            
   * 0.03-0.04 is Generally Precise Enough!                
 +---------------------------------------------------------------+
 Input Kmesh-Resolved Value (in unit of 2*PI/Angstrom): 
 ------------&gt;&gt;
0.04            # 在这里输入精度
 +-------------------------- Summary ----------------------------+
 Reciprocal Lattice Vectors (in unit of 1/angstrom):
       0.6283185307       0.0000000000       0.0000000000
       0.0000000000       0.5235987756       0.0000000000
       0.0000000000       0.0000000000       0.4188790205
 Reciprocal Lattice Constants:   0.6283   0.5236   0.4189
 Real-Space Lattice Constants:  10.0000  12.0000  15.0000
 Size of K-Mesh:    1    1    1
 +---------------------------------------------------------------+
  --&gt;&gt; (02) Written KPOINTS File!
  --&gt;&gt; (03) Written POTCAR File with the Recommended Potential!
 +---------------------------------------------------------------+
 |                       * ACKNOWLEDGMENTS *                     |
 | Other Contributors: Xue-Fei LIU, Peng-Fei LIU, Dao-Xiong WU,  |
 | Zhao-Fu ZHANG, Tian WANG, Ya-Chao LIU, Qiang LI, iGo and You! |
 +---------------------------------------------------------------+
 |                          * CITATIONS *                        |
 | We Would Appreciate if You Cite in Your Research with VASPKIT.|
 | [1] V. Wang, N. Xu, J.C. LIU, G. Tang, et al, VASPKIT: A Pre- |
 | and Post-Processing Program for VASP Code, arXiv:1908.08269.  |
 +---------------------------------------------------------------+
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常情况下，生成 <code>KPOINTS</code> 的同时，会根据推荐赝势生成 <code>POTCAR</code>。如果你的没有生成，则进入下一步。</p><h2 id="potcar" tabindex="-1"><a class="header-anchor" href="#potcar" aria-hidden="true">#</a> POTCAR</h2><p><code>vaspkit</code>-<code>1</code>-<code>103) Generate POTCAR File with Default Setting</code></p><p>当然也可以选择 <code>104) Generate POTCAR File with User Specified Potential</code> 选择自己想要的赝势类型。</p><p>如果没有 VASPKIT，就可以 <code>cat &lt;元素 1 的赝势文件&gt; &lt;元素 2 的赝势文件&gt; &gt;&gt; POTCAR</code>。</p><hr><p>到此为止 VASP 运行所需要的四个输入文件就全都准备好了，我们就可以提交这个作业了。</p><p>将 <code>PBS 脚本</code> 复制到当前目录，然后使用 <code>qsub</code> 命令提交作业。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>qsub <span class="token parameter variable">-N</span> JobName vasp.pbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21);function E(V,D){const s=t("ExternalLinkIcon");return l(),r("div",null,[d,e("blockquote",null,[e("p",null,[n("Material Studio 是常用的构建模型和可视化结构的软件，MS 中的结构亦可借助其它工具转换成 "),p,n("。目前常用的做法是在 MS 中导出 "),u,n(" 文件，再通过功能 "),v,n(" 或者 "),m,n(" 转换成 "),b,n("。但是转换颇为麻烦并且会丢失原子的位置限制信息。因此赵焱老师开发了固定原子坐标 perl 小脚本 "),e("a",h,[n("xsd2pos.pl"),a(s)]),n(" ，可以在MS中运行"),k,n("脚本将结构生成"),g,n(",链接里有详细的操作流程，这里不再赘述。"),S,n("开发者也开发了一款类似的后处理脚本，能够将含有位置固定信息的"),A,n("批量转换成·"),P,n("，并将此脚本集成到了"),C,n("的"),f,n("功能中。"),I,n("中可以包含"),x,n("或者"),R,n("两种限制方式。")]),e("p",null,[n("引自 "),e("a",T,[n("VASPKIT 中文手册"),a(s)]),n(" 。")])]),_,e("p",null,[n("从诸如 "),e("a",O,[n("Materials Project"),a(s)]),n(" 等网站获取结构，通常获取到的是"),N,n("文件，将其上传，重命名为"),F,n("即可。")]),G])}const y=o(c,[["render",E],["__file","index.html.vue"]]);export{y as default};
