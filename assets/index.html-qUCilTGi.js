import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as t,c,a as n,b as a,e,d as i}from"./app-1ZTmwhuN.js";const r={},o=i(`<h1 id="编译-vasp-with-vtst" tabindex="-1"><a class="header-anchor" href="#编译-vasp-with-vtst" aria-hidden="true">#</a> 编译 VASP with VTST</h1><h2 id="准备源码" tabindex="-1"><a class="header-anchor" href="#准备源码" aria-hidden="true">#</a> 准备源码</h2><h3 id="vasp-源码目录结构" tabindex="-1"><a class="header-anchor" href="#vasp-源码目录结构" aria-hidden="true">#</a> VASP 源码目录结构</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">more</span> README
           vasp.X.X.X <span class="token punctuation">(</span>root directory<span class="token punctuation">)</span>
                      <span class="token operator">|</span>
   ---------------------------------------
  <span class="token operator">|</span>              <span class="token operator">|</span>          <span class="token operator">|</span>             <span class="token operator">|</span>
 arch           bin       build          src
                                          <span class="token operator">|</span>
                                     ----------
                                    <span class="token operator">|</span>          <span class="token operator">|</span>
                                   lib       CUDA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ul><li>vasp.X.X.X：解压缩后的根目录</li><li>arch：针对不同架构的 Makefile 模板，如里面含有 makefile.include.linux_intel</li><li>bin：编译后的可执行程序文件</li><li>build：编译时自动复制 src 目录内源码后执行编译的目录</li><li>src：源码目录</li><li>lib：库目录，对应以前的 vasp.lib 目录</li><li>CUDA：GPU CUDA 代码目录</li></ul><h3 id="vtstcode" tabindex="-1"><a class="header-anchor" href="#vtstcode" aria-hidden="true">#</a> VTSTCode</h3><h4 id="下载并解压缩-vtstcode" tabindex="-1"><a class="header-anchor" href="#下载并解压缩-vtstcode" aria-hidden="true">#</a> 下载并解压缩 VTSTCode</h4>`,8),p={href:"http://theory.cm.utexas.edu/vtsttools/download.html",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>目录结构：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>scujh_zjb@scu vtstcode-184<span class="token punctuation">]</span>$ tree
<span class="token builtin class-name">.</span>
├── bbm.F
├── bfgs.F
├── cg.F
├── chain.F
├── dimer.F
├── dynamic.F
├── dynmat.F
├── fire.F
├── instanton.F
├── lanczos.F
├── lbfgs.F
├── neb.F
├── opt.F
├── qm.F
├── sd.F
├── vtstcode5
│   ├── bbm.F
│   ├── bdr_changes
│   ├── bfgs.F
│   ├── cg.F
│   ├── chain.F
│   ├── dimer.F
│   ├── dynamic.F
│   ├── dynmat.F
│   ├── fire.F
│   ├── instanton.F
│   ├── lanczos.F
│   ├── lbfgs.F
│   ├── neb.F
│   ├── opt.F
│   ├── qm.F
│   ├── sd.F
│   ├── vasp-5.3.2-main.patch
│   ├── vasp-5.3.2-mpmd.patch
│   ├── vasp-5.4.1-mpmd.patch
│   └── vasp-5.4.4-mpmd.patch
└── vtstcode6.1
├── bbm.F
├── bfgs.F
├── cg.F
├── chain.F
├── dimer.F
├── dynamic.F
├── dynmat.F
├── fire.F
├── instanton.F
├── lanczos.F
├── lbfgs.F
├── neb.F
├── opt.F
├── qm.F
└── sd.F

<span class="token number">2</span> directories, <span class="token number">50</span> files

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复制-vtstcode-到-vasp-src" tabindex="-1"><a class="header-anchor" href="#复制-vtstcode-到-vasp-src" aria-hidden="true">#</a> 复制 VTSTCode 到 VASP/src</h4><p>需要注意的是，应把对应于 VASP 版本的 VTSTCode 复制到 <code>scr</code> 目录，例如 vasp 5.4.4，则应复制 vtstcode5 子文件夹中的内容。</p><blockquote><p>For vasp.6.2.1 you will need vtstcode 4.1 (revision 182). A version of the vtstcode that will work with vasp.6.1.x - vasp.6.2.0 has been saved in the vtstcode6.1 directory.</p></blockquote><h4 id="修改-src-main-f" tabindex="-1"><a class="header-anchor" href="#修改-src-main-f" aria-hidden="true">#</a> 修改 src/main.F</h4><p>将（第 3233 行）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CALL CHAIN_FORCE<span class="token punctuation">(</span>T_INFO%NIONS,DYN%POSION,TOTEN,TIFOR, <span class="token operator">&amp;</span>
     LATT_CUR%A,LATT_CUR%B,IO%IU6<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CALL CHAIN_FORCE<span class="token punctuation">(</span>T_INFO%NIONS,DYN%POSION,TOTEN,TIFOR, <span class="token operator">&amp;</span>
      TSIF,LATT_CUR%A,LATT_CUR%B,IO%IU6<span class="token punctuation">)</span>
<span class="token operator">!</span>     LATT_CUR%A,LATT_CUR%B,IO%IU6<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是 vasp 6.2 及以上，额外修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IF <span class="token punctuation">(</span>LCHAIN<span class="token punctuation">)</span> CALL chain_init<span class="token punctuation">(</span> T_INFO, IO<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CALL chain_init<span class="token punctuation">(</span> T_INFO, IO<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),u={href:"http://theory.cm.utexas.edu/vtsttools/installation.html",target:"_blank",rel:"noopener noreferrer"},m=i(`<h4 id="修改编译配置" tabindex="-1"><a class="header-anchor" href="#修改编译配置" aria-hidden="true">#</a> 修改编译配置</h4><p>修改 <code>src/.objects</code>，在 <code>chain.o</code> 前（第 67 行）添加如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    bfgs.o dynmat.o instanton.o lbfgs.o sd.o cg.o dimer.o bbm.o <span class="token punctuation">\\</span>
    fire.o lanczos.o neb.o qm.o opt.o <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>\\</code> 后不得有空格</p><h2 id="准备编译环境" tabindex="-1"><a class="header-anchor" href="#准备编译环境" aria-hidden="true">#</a> 准备编译环境</h2><h3 id="检查编译环境" tabindex="-1"><a class="header-anchor" href="#检查编译环境" aria-hidden="true">#</a> 检查编译环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> icc ifort icpc mpiifort mpirun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果正常输出 5 个路径，则编译环境已配置好，可以跳过下一步。如果没有，进入下一步。</p><h3 id="配置编译环境" tabindex="-1"><a class="header-anchor" href="#配置编译环境" aria-hidden="true">#</a> 配置编译环境</h3><p>一般的，编译 vasp+vtst 的，通常都已经编译了 vasp，那意味着编译环境本身是已经安装好的，可以通过如下重新应用编译环境的变量，具体的路径可以自行在机器上查找，或参考 vasp 的 pbs 文件中提供的路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># source &lt;intel_compiler_dir&gt;/bin/compilervars.sh intel64</span>
<span class="token comment"># source &lt;intel_mkl_dir&gt;/bin/mklvars.sh intel64</span>
<span class="token comment"># source &lt;intel_mpi_dir&gt;/intel64/bin/mpivars.sh intel64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部分机器使用 <code>module</code> 管理环境变量的，可以通过 <code>module avail</code> 查看所有可用包，找到 <code>intel/xxx</code> 相关的并 <code>module load &lt;name&gt;</code>。 配置完成后，返回上一步检查是否成功。 这里顺便检查一下有无已编译的 fftw 文件：<code>libfftw3_mpi.a</code></p><h3 id="修改-makefile-include-文件" tabindex="-1"><a class="header-anchor" href="#修改-makefile-include-文件" aria-hidden="true">#</a> 修改 makefile.include 文件</h3><p>用 <code>arch/makefile.include.linux_intel</code> 做模板进行修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> arch/makefile.include.linux_intel makefile.include
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对 <code>makefile.include</code> 文件进行如下修改，14 行开始编译器配置改为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># line 14 编译器配置</span>
FC         <span class="token operator">=</span> mpiifort
FCL        <span class="token operator">=</span> mpiifort <span class="token parameter variable">-mkl</span>

<span class="token comment"># line 23 数学库配置</span>
<span class="token assign-left variable">MKLROOT</span><span class="token operator">=</span>/opt/intel/compilers_and_libraries_2018.3.222/linux/mkl
MKL_PATH   <span class="token operator">=</span> <span class="token variable"><span class="token variable">$(</span>MKLROOT<span class="token variable">)</span></span>/lib/intel64
BLAS       <span class="token operator">=</span>
LAPACK     <span class="token operator">=</span>
BLACS      <span class="token operator">=</span>-L<span class="token variable"><span class="token variable">$(</span>MKL_PATH<span class="token variable">)</span></span> <span class="token parameter variable">-lmkl_blacs_intelmpi_lp64</span>
SCALAPACK  <span class="token operator">=</span> <span class="token variable"><span class="token variable">$(</span>MKL_PATH<span class="token variable">)</span></span>/libmkl_scalapack_lp64.a <span class="token variable"><span class="token variable">$(</span>BLACS<span class="token variable">)</span></span>

<span class="token comment"># line 30 fftw 配置 (其中/opt/fftw 是我编译后安装的目录)</span>
OBJECTS    <span class="token operator">=</span> fftmpiw.o fftmpi_map.o fftw3d.o fft3dlib.o <span class="token punctuation">\\</span>
           /opt/fftw/lib/libfftw3_mpi.a
INCS       <span class="token operator">=</span>-I/opt/fftw/include
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加环境变量" tabindex="-1"><a class="header-anchor" href="#添加环境变量" aria-hidden="true">#</a> 添加环境变量</h3><p>略。</p><h2 id="错误解决" tabindex="-1"><a class="header-anchor" href="#错误解决" aria-hidden="true">#</a> 错误解决</h2><p>如下报错系 vtstcode 版本与 vasp 不一致导致：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mpiifort <span class="token parameter variable">-free</span> <span class="token parameter variable">-names</span> lowercase <span class="token parameter variable">-assume</span> byterecl <span class="token parameter variable">-w</span> <span class="token parameter variable">-O2</span> <span class="token parameter variable">-xHOST</span> -I/opt/intel/compilers_and_libraries_2019.1.144/linux/mkl/include/fftw <span class="token parameter variable">-c</span> instanton.f90  
instanton.F<span class="token punctuation">(</span><span class="token number">57</span><span class="token punctuation">)</span>: error <span class="token comment">#6580: Name in only-list does not exist or is not accessible. [RANE]  </span>
USE random_seeded, ONLY: RANE  
-------------------------------^  
instanton.F<span class="token punctuation">(</span><span class="token number">208</span><span class="token punctuation">)</span>: error <span class="token comment">#6580: Name in only-list does not exist or is not accessible. [RANE]  </span>
USE random_seeded, ONLY: RANE  
-------------------------------^  
instanton.F<span class="token punctuation">(</span><span class="token number">433</span><span class="token punctuation">)</span>: error <span class="token comment">#6404: This name does not have a type, and must have an explicit type. [RANE]  </span>
w<span class="token punctuation">(</span>i,j,im<span class="token punctuation">)</span><span class="token operator">=</span>rane<span class="token punctuation">(</span><span class="token punctuation">)</span>-0.5_q  
----------------------------^  
compilation aborted <span class="token keyword">for</span> instanton.f90 <span class="token punctuation">(</span>code <span class="token number">1</span><span class="token punctuation">)</span>  
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>instanton.o<span class="token punctuation">]</span> Error <span class="token number">1</span>  
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: Leaving directory <span class="token variable"><span class="token variable">\`</span>/root/chem/vasp.5.4.4/build/std&#39;  
cp: cannot <span class="token function">stat</span> ‘vasp’: No such <span class="token function">file</span> or directory  
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>all<span class="token punctuation">]</span> Error <span class="token number">1</span>  
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Leaving directory <span class="token variable">\`</span></span>/root/chem/vasp.5.4.4/build/std&#39;  
make: *** <span class="token punctuation">[</span>std<span class="token punctuation">]</span> Error <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),b={href:"https://theory.cm.utexas.edu/forum/viewtopic.php?p=20806",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"参考文献",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考文献","aria-hidden":"true"},"#"),a(" 参考文献")],-1),k={href:"http://hmli.ustc.edu.cn/doc/app/vasp.5.4.1-vtst.htm",target:"_blank",rel:"noopener noreferrer"};function f(_,g){const s=d("ExternalLinkIcon");return t(),c("div",null,[o,n("p",null,[a("VTSTCode 下载： "),n("a",p,[a("Download — Transition State Tools for VASP (utexas.edu)"),e(s)])]),v,n("p",null,[a("参考： "),n("a",u,[a("Installation — Transition State Tools for VASP (utexas.edu)"),e(s)])]),m,n("p",null,[a("解决方案：假设使用的 vasp 5.4.4，则复制 vtstcode 时，应使用 vtst-xxx/vtstcode5 下的。参见： "),n("a",b,[a("Problem compiling instanton.F - UT theoretical chemistry code forum (utexas.edu)"),e(s)])]),h,n("p",null,[a("安装过程： "),n("a",k,[a("VASP 5.4.1+VTST 编译安装 (ustc.edu.cn)"),e(s)])])])}const T=l(r,[["render",f],["__file","index.html.vue"]]);export{T as default};
