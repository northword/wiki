import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-1ZTmwhuN.js";const p={},o=e(`<p>然后打开 <code>vaspkit</code>，依次进入 <code>3</code>，<code>303</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op NaCl<span class="token punctuation">]</span>$ <span class="token function">cp</span> NaCl.vasp POSCAR
<span class="token punctuation">[</span>zjb@op NaCl<span class="token punctuation">]</span>$ vaspkit
 
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
<span class="token number">3</span>
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> K-Path Options <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
 <span class="token number">301</span><span class="token punctuation">)</span> 1D Nano Structure
 <span class="token number">302</span><span class="token punctuation">)</span> 2D Nano Structure <span class="token punctuation">(</span>Experimental<span class="token punctuation">)</span>
 <span class="token number">303</span><span class="token punctuation">)</span> 3D bulk structure <span class="token punctuation">(</span>Experimental<span class="token punctuation">)</span>
 <span class="token number">304</span><span class="token punctuation">)</span> Phonopy K-Path <span class="token keyword">for</span> 2D Nano Structure <span class="token punctuation">(</span>Experimental<span class="token punctuation">)</span>
 
 <span class="token number">0</span><span class="token punctuation">)</span> Quit                                              
 <span class="token number">9</span><span class="token punctuation">)</span> Back                                              
 ------------<span class="token operator">&gt;&gt;</span>
<span class="token number">303</span>
 +-------------------------- Warm Tips --------------------------+
   The suggested K-Path is only <span class="token keyword">for</span> standardized primtive cell.
   It is <span class="token keyword">for</span> reference only and you can manually modify K-Path.
 +---------------------------------------------------------------+
 +-------------------------- Warm Tips --------------------------+
     See An Example <span class="token keyword">in</span> vaspkit/examples/seek_kpath/GaAs_bulk.        
   The suggested K-Path is only <span class="token keyword">for</span> standardized primtive cell.
 This Feature is Experimental <span class="token operator">&amp;</span> Check Your System using SeeK-Path.       
 For More details See <span class="token punctuation">[</span>www.materialscloud.org/work/tools/seekpath<span class="token punctuation">]</span>.
 +---------------------------------------------------------------+
  --<span class="token operator">&gt;&gt;</span> <span class="token punctuation">(</span>01<span class="token punctuation">)</span> Reading Structural Parameters from POSCAR File<span class="token punctuation">..</span>.
 +-------------------------- Summary ----------------------------+
                           Prototype: AB
           Total Atoms <span class="token keyword">in</span> Input Cell:   <span class="token number">8</span>
     Lattice Constants <span class="token keyword">in</span> Input Cell:   <span class="token number">5.620</span>   <span class="token number">5.620</span>   <span class="token number">5.620</span>
        Lattice Angles <span class="token keyword">in</span> Input Cell:  <span class="token number">90.000</span>  <span class="token number">90.000</span>  <span class="token number">90.000</span>
       Total Atoms <span class="token keyword">in</span> Primitive Cell:   <span class="token number">2</span>
 Lattice Constants <span class="token keyword">in</span> Primitive Cell:   <span class="token number">3.974</span>   <span class="token number">3.974</span>   <span class="token number">3.974</span>
    Lattice Angles <span class="token keyword">in</span> Primitive Cell:  <span class="token number">60.000</span>  <span class="token number">60.000</span>  <span class="token number">60.000</span>
                      Crystal System: Cubic
                       Crystal Class: m-3m
                     Bravais Lattice: cF
            Extended Bravais Lattice: cF2
                         Space Group: <span class="token number">225</span>
                         Point Group: <span class="token number">32</span> <span class="token punctuation">[</span> Oh <span class="token punctuation">]</span>
                       International: Fm-3m
                 Symmetry Operations: <span class="token number">192</span>
                    Suggested K-Path: <span class="token punctuation">(</span>shown <span class="token keyword">in</span> the next line<span class="token punctuation">)</span>
 <span class="token punctuation">[</span> Gamma-X-U<span class="token operator">|</span>K-Gamma-L-W-X <span class="token punctuation">]</span>
 +---------------------------------------------------------------+
  --<span class="token operator">&gt;&gt;</span> <span class="token punctuation">(</span>02<span class="token punctuation">)</span> Written PRIMCELL.vasp file.
  --<span class="token operator">&gt;&gt;</span> <span class="token punctuation">(</span>03<span class="token punctuation">)</span> Written HIGH_SYMMETRY_POINTS File <span class="token keyword">for</span> Reference.
  --<span class="token operator">&gt;&gt;</span> <span class="token punctuation">(</span>04<span class="token punctuation">)</span> Written POTCAR File with the Recommended Potential<span class="token operator">!</span>
  --<span class="token operator">&gt;&gt;</span> <span class="token punctuation">(</span>05<span class="token punctuation">)</span> Written KPATH.in File <span class="token keyword">for</span> Band-Structure Calculation.
 +----------------------------WARNING----------------------------+
 <span class="token operator">|</span> Do NOT forget to copy PRIMCELL.vasp to POSCAR unless you know <span class="token operator">|</span>
 <span class="token operator">|</span>   what you are doing. Otherwise you might get wrong results<span class="token operator">!</span>  <span class="token operator">|</span>
 +---------------------------------------------------------------+
 +---------------------------------------------------------------+
 <span class="token operator">|</span>                       * ACKNOWLEDGMENTS *                     <span class="token operator">|</span>
 <span class="token operator">|</span> Other Contributors: Xue-Fei LIU, Peng-Fei LIU, Dao-Xiong WU,  <span class="token operator">|</span>
 <span class="token operator">|</span> Zhao-Fu ZHANG, Tian WANG, Ya-Chao LIU, Qiang LI, iGo and You<span class="token operator">!</span> <span class="token operator">|</span>
 +---------------------------------------------------------------+
 <span class="token operator">|</span>                          * CITATIONS *                        <span class="token operator">|</span>
 <span class="token operator">|</span> We Would Appreciate <span class="token keyword">if</span> You Cite <span class="token keyword">in</span> Your Research with VASPKIT.<span class="token operator">|</span>
 <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> V. Wang, N. Xu, J.C. LIU, G. Tang, et al, VASPKIT: A Pre- <span class="token operator">|</span>
 <span class="token operator">|</span> and Post-Processing Program <span class="token keyword">for</span> VASP Code, arXiv:1908.08269.  <span class="token operator">|</span>
 +---------------------------------------------------------------+
<span class="token punctuation">[</span>zjb@op NaCl<span class="token punctuation">]</span>$ 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后这个目录会有如下文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op NaCl<span class="token punctuation">]</span>$ ll
total <span class="token number">400</span>
-rw-r--r-- <span class="token number">1</span> zjb energy    <span class="token number">957</span> Oct <span class="token number">31</span> <span class="token number">21</span>:02 HIGH_SYMMETRY_POINTS
-rw-r--r-- <span class="token number">1</span> zjb energy    <span class="token number">860</span> Oct <span class="token number">31</span> <span class="token number">21</span>:03 KPATH.in
-rw-r--r-- <span class="token number">1</span> zjb energy   <span class="token number">4008</span> Oct <span class="token number">30</span> <span class="token number">16</span>:14 NaCl_import.cif
-rw-r--r-- <span class="token number">1</span> zjb energy    <span class="token number">706</span> Oct <span class="token number">30</span> <span class="token number">16</span>:19 NaCl.vasp
-rw-r--r-- <span class="token number">1</span> zjb energy    <span class="token number">706</span> Oct <span class="token number">31</span> <span class="token number">21</span>:02 POSCAR
-rw-r--r-- <span class="token number">1</span> zjb energy <span class="token number">404221</span> Oct <span class="token number">31</span> <span class="token number">21</span>:03 POTCAR
-rw-r--r-- <span class="token number">1</span> zjb energy    <span class="token number">382</span> Oct <span class="token number">31</span> <span class="token number">21</span>:02 PRIMCELL.vasp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就生成了 <code>POACAR</code> 和 <code>POTCAR</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op NaCl<span class="token punctuation">]</span>$ <span class="token function">cat</span> POSCAR 
NaCl_import
<span class="token number">1.0</span>
        <span class="token number">5.6199998856</span>         <span class="token number">0.0000000000</span>         <span class="token number">0.0000000000</span>
        <span class="token number">0.0000000000</span>         <span class="token number">5.6199998856</span>         <span class="token number">0.0000000000</span>
        <span class="token number">0.0000000000</span>         <span class="token number">0.0000000000</span>         <span class="token number">5.6199998856</span>
   Na   Cl
    <span class="token number">4</span>    <span class="token number">4</span>
Direct
     <span class="token number">0.000000000</span>         <span class="token number">0.000000000</span>         <span class="token number">0.000000000</span>
     <span class="token number">0.000000000</span>         <span class="token number">0.500000000</span>         <span class="token number">0.500000000</span>
     <span class="token number">0.500000000</span>         <span class="token number">0.000000000</span>         <span class="token number">0.500000000</span>
     <span class="token number">0.500000000</span>         <span class="token number">0.500000000</span>         <span class="token number">0.000000000</span>
     <span class="token number">0.500000000</span>         <span class="token number">0.500000000</span>         <span class="token number">0.500000000</span>
     <span class="token number">0.500000000</span>         <span class="token number">0.000000000</span>         <span class="token number">0.000000000</span>
     <span class="token number">0.000000000</span>         <span class="token number">0.500000000</span>         <span class="token number">0.000000000</span>
     <span class="token number">0.000000000</span>         <span class="token number">0.000000000</span>         <span class="token number">0.500000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote>`,7),t=[o];function l(r,c){return s(),a("div",null,t)}const k=n(p,[["render",l],["__file","index.html.vue"]]);export{k as default};
