import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-1ZTmwhuN.js";const i={},l=e(`<h1 id="为学校的-linux-安装-python3" tabindex="-1"><a class="header-anchor" href="#为学校的-linux-安装-python3" aria-hidden="true">#</a> 为学校的 linux 安装 python3</h1><p>由于 <code>ASE</code> 依赖 <code>Python3.5</code> 或更高版本，而学习的机器上只有 <code>python2</code>，所以要装一下 py3。</p><h2 id="步骤放在最前面" tabindex="-1"><a class="header-anchor" href="#步骤放在最前面" aria-hidden="true">#</a> 步骤放在最前面</h2><h3 id="升级-openssl" tabindex="-1"><a class="header-anchor" href="#升级-openssl" aria-hidden="true">#</a> 升级 OPENSSL</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /tmp
<span class="token function">wget</span> <span class="token parameter variable">-c</span> https://www.openssl.org/source/openssl-1.1.1d.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> openssl-1.1.1d.tar.gz
<span class="token builtin class-name">cd</span> openssl-1.1.1d
./config <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/public/home/zjb/openssl-1.1.1d no-zlib  <span class="token comment">#注意添加no-zlib</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后添加环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vi</span> ~/.bashrc
<span class="token comment"># 加入以下内容</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/public/home/zjb/app/openssl-1.1.1d/bin&quot;</span><span class="token builtin class-name">:</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/public/home/zjb/app/openssl-1.1.1d/lib&quot;</span><span class="token builtin class-name">:</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token string">&quot;/public/home/zjb/app/openssl-1.1.1d/lib&quot;</span><span class="token builtin class-name">:</span><span class="token variable">\${LD_LIBRARY_PATH}</span>

$ <span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时运行 <code>openssl</code>--<code>version</code> 应当显示 1.1.1 版本，如果是，进行下一步。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ openssl
OpenSSL<span class="token operator">&gt;</span> version
OpenSSL <span class="token number">1.1</span>.1d  <span class="token number">10</span> Sep <span class="token number">2019</span>
OpenSSL<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译-python3" tabindex="-1"><a class="header-anchor" href="#编译-python3" aria-hidden="true">#</a> 编译 Python3</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /tmp
<span class="token function">wget</span> <span class="token parameter variable">-c</span> https://www.python.org/ftp/python/3.8.1/Python-3.8.1.tgz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> Python-3.8.1.tgz
<span class="token builtin class-name">cd</span> Python-3.8.1
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/public/home/zjb/app/python38/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这儿截住，去 <code>Python-3.8.1/Moudles</code> 下编辑 <code>Setup</code> 以修改 OPENSSL 的路径：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> Moudles/Setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找 <code>SSL</code>，把如下几行取消注释</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">SSL</span><span class="token operator">=</span>/public/home/zjb/app/openssl-1.1.1d     <span class="token comment">#改为刚安装的ssl路径</span>
_ssl _ssl.c <span class="token punctuation">\\</span>
       <span class="token parameter variable">-DUSE_SSL</span> -I<span class="token variable"><span class="token variable">$(</span>SSL<span class="token variable">)</span></span>/include -I<span class="token variable"><span class="token variable">$(</span>SSL<span class="token variable">)</span></span>/include/openssl <span class="token punctuation">\\</span>
       -L<span class="token variable"><span class="token variable">$(</span>SSL<span class="token variable">)</span></span>/lib <span class="token parameter variable">-lssl</span> <span class="token parameter variable">-lcrypto</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中第一行替换为自己的 OPENSSL 安装路径，修改后编译：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># 如果之前有编译过，用make clean清理已编译的文件后再编译</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译完成后，试一下</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">[</span>zjb@op Python<span class="token operator">-</span><span class="token number">3.8</span><span class="token number">.5</span><span class="token punctuation">]</span>$ python3
Python <span class="token number">3.8</span><span class="token number">.5</span> <span class="token punctuation">(</span>default<span class="token punctuation">,</span> Nov <span class="token number">20</span> <span class="token number">2020</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">:</span><span class="token number">23</span><span class="token punctuation">:</span><span class="token number">42</span><span class="token punctuation">)</span> 
<span class="token punctuation">[</span>GCC <span class="token number">4.4</span><span class="token number">.7</span> <span class="token number">20120313</span> <span class="token punctuation">(</span>Red Hat <span class="token number">4.4</span><span class="token number">.7</span><span class="token operator">-</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on linux
Type <span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;copyright&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;credits&quot;</span> <span class="token keyword">or</span> <span class="token string">&quot;license&quot;</span> <span class="token keyword">for</span> more information<span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> ssl
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，完成！</p><p>此时 SSL 模块应当是可用的，尝试安装一个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> ase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[zjb@op Python-3.8.5]$ pip3 install ase
Collecting ase
  Downloading ase-3.20.1-py3-none-any.whl (2.2 MB)
     |████████████████████████████████| 2.2 MB 1.4 MB/s 
Collecting matplotlib&gt;=2.0.0
  Downloading matplotlib-3.3.3-cp38-cp38-manylinux1_x86_64.whl (11.6 MB)
     |████████████████████████████████| 11.6 MB 2.3 MB/s 
Collecting numpy&gt;=1.11.3
  Downloading numpy-1.19.4-cp38-cp38-manylinux2010_x86_64.whl (14.5 MB)
     |████████████████████████████████| 14.5 MB 153 kB/s 
Collecting scipy&gt;=0.18.1
  Downloading scipy-1.5.4-cp38-cp38-manylinux1_x86_64.whl (25.8 MB)
     |████████████████████████████████| 25.8 MB 1.5 MB/s 
Collecting pyparsing!=2.0.4,!=2.1.2,!=2.1.6,&gt;=2.0.3
  Downloading pyparsing-2.4.7-py2.py3-none-any.whl (67 kB)
     |████████████████████████████████| 67 kB 1.3 MB/s 
Collecting pillow&gt;=6.2.0
  Downloading Pillow-8.0.1-cp38-cp38-manylinux1_x86_64.whl (2.2 MB)
     |████████████████████████████████| 2.2 MB 1.9 MB/s 
Collecting cycler&gt;=0.10
  Downloading cycler-0.10.0-py2.py3-none-any.whl (6.5 kB)
Collecting kiwisolver&gt;=1.0.1
  Downloading kiwisolver-1.3.1-cp38-cp38-manylinux1_x86_64.whl (1.2 MB)
     |████████████████████████████████| 1.2 MB 1.9 MB/s 
Collecting python-dateutil&gt;=2.1
  Downloading python_dateutil-2.8.1-py2.py3-none-any.whl (227 kB)
     |████████████████████████████████| 227 kB 2.0 MB/s 
Collecting six
  Downloading six-1.15.0-py2.py3-none-any.whl (10 kB)
Installing collected packages: pyparsing, pillow, six, cycler, numpy, kiwisolver, python-dateutil, matplotlib, scipy, ase
Successfully installed ase-3.20.1 cycler-0.10.0 kiwisolver-1.3.1 matplotlib-3.3.3 numpy-1.19.4 pillow-8.0.1 pyparsing-2.4.7 python-dateutil-2.8.1 scipy-1.5.4 six-1.15.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正常！</p><hr><h2 id="经历" tabindex="-1"><a class="header-anchor" href="#经历" aria-hidden="true">#</a> 经历</h2><p>最开始按照正常的编译过程去编译安装 Python3，但是过程中发现 SSL 模块无法被编译，刚开始没当回事，结果都好了发现 pip3 没法使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 ssl 模块不可用，又折回去折腾，发现提示中，是因为机器本身安装的 openssl 版本过低（1.0.1）导致的，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Python build finished successfully!
The necessary bits to build these optional modules were not found:
_sqlite3              _ssl                                     
To find the necessary bits, look in setup.py in detect_modules() for the module&#39;s name.

Could not build the ssl module!
Python requires an OpenSSL 1.0.2 or 1.1 compatible libssl with X509_VERIFY_PARAM_set1_host().
LibreSSL 2.6.4 and earlier do not provide the necessary APIs, https://github.com/libressl-portable/portable/issues/381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考虑升级 openssl 解决一下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span> <span class="token parameter variable">-c</span> https://www.openssl.org/source/openssl-1.1.1d.tar.gz
$ <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> openssl-1.1.1d.tar.gz
$ <span class="token builtin class-name">cd</span> openssl-1.1.1d
$ ./config <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/public/home/zjb/app/penssl-1.1.1d no-zlib  <span class="token comment">#注意添加no-zlib</span>
$ <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

$ <span class="token function">vi</span> ~/.bashrc
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/public/home/zjb/app/openssl-1.1.1d/bin&quot;</span><span class="token builtin class-name">:</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>openssl</code> 发现报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>error while loading shared libraries: libssl.so.1.1: cannot open shared object file: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>搜了一些资料，发现解决方法多是 <code>sudo</code> 的，mmp 我要是有 root 还费这劲去编译呢？？？还好在一篇资料里看到一个方案：发现 <code>libssl.so.1.1</code> 存在于 <code>openssl.1.1.d/lib</code> 目录下，于是考虑把这个目录加入环境变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/public/home/zjb/app/openssl-1.1/lib:<span class="token variable">$LD_LIBRARY_PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这下正常了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ openssl
OpenSSL<span class="token operator">&gt;</span> version
OpenSSL <span class="token number">1.1</span>.1d  <span class="token number">10</span> Sep <span class="token number">2019</span>
OpenSSL<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来就继续编译 Python3：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /tmp
<span class="token function">wget</span> <span class="token parameter variable">-c</span> https://www.python.org/ftp/python/3.8.1/Python-3.8.1.tgz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> Python-3.8.1.tgz
<span class="token builtin class-name">cd</span> Python-3.8.1
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/public/home/zjb/app/python38/
<span class="token function">make</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时编译的仍然提示 <code>Could not build the ssl module! Python requires an OpenSSL 1.0.2 or 1.1 compatible libssl with X509_VERIFY_PARAM_set1_host().</code>，但是 <code>make install</code> 后是可以用的，也不知道为什么。</p><p>接下来添加环境变量，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export PATH=/public/home/zjb/app/python38/bin:\${PATH}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后...正常了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">[</span>zjb@op Python<span class="token operator">-</span><span class="token number">3.8</span><span class="token number">.5</span><span class="token punctuation">]</span>$ python3
Python <span class="token number">3.8</span><span class="token number">.5</span> <span class="token punctuation">(</span>default<span class="token punctuation">,</span> Nov <span class="token number">20</span> <span class="token number">2020</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">:</span><span class="token number">23</span><span class="token punctuation">:</span><span class="token number">42</span><span class="token punctuation">)</span> 
<span class="token punctuation">[</span>GCC <span class="token number">4.4</span><span class="token number">.7</span> <span class="token number">20120313</span> <span class="token punctuation">(</span>Red Hat <span class="token number">4.4</span><span class="token number">.7</span><span class="token operator">-</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on linux
Type <span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;copyright&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;credits&quot;</span> <span class="token keyword">or</span> <span class="token string">&quot;license&quot;</span> <span class="token keyword">for</span> more information<span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> ssl
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>几分钟后发现 <code>ase</code> 虽然安装了，但是不能运行，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[zjb@op python38]$ ase
Traceback (most recent call last):
  File &quot;/public/home/zjb/app/ase/bin/ase&quot;, line 2, in &lt;module&gt;
    from ase.cli.main import main
  File &quot;/public/home/zjb/app/ase/ase/__init__.py&quot;, line 25, in &lt;module&gt;
    from ase.atoms import Atoms
  File &quot;/public/home/zjb/app/ase/ase/atoms.py&quot;, line 19, in &lt;module&gt;
    from ase.constraints import (FixConstraint, FixBondLengths, FixLinearTriatomic,
  File &quot;/public/home/zjb/app/ase/ase/constraints.py&quot;, line 10, in &lt;module&gt;
    from scipy.linalg import expm, logm
  File &quot;/public/home/zjb/app/python38/lib/python3.8/site-packages/scipy/__init__.py&quot;, line 151, in &lt;module&gt;
    from scipy._lib._ccallback import LowLevelCallable
  File &quot;/public/home/zjb/app/python38/lib/python3.8/site-packages/scipy/_lib/_ccallback.py&quot;, line 1, in &lt;module&gt;
    from . import _ccallback_c
  File &quot;_ccallback_c.pyx&quot;, line 210, in init scipy._lib._ccallback_c
  File &quot;/public/home/zjb/app/python38/lib/python3.8/ctypes/__init__.py&quot;, line 7, in &lt;module&gt;
    from _ctypes import Union, Structure, Array
ModuleNotFoundError: No module named &#39;_ctypes&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 python 缺少依赖库 <code>libffi-devel</code>，查资料没发现这玩意怎么自己搞，似乎只能管理员去装，反正网上给出的方法都不行...</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op python38<span class="token punctuation">]</span>$ yum <span class="token function">install</span> <span class="token parameter variable">-y</span> libffi-devel
Loaded plugins: aliases, changelog, kabi, ovl, presto, refresh-packagekit, security, tmprepo, verify, versionlock
Loading support <span class="token keyword">for</span> Red Hat kernel ABI
ovl: Error <span class="token keyword">while</span> doing RPMdb copy-up:
<span class="token punctuation">[</span>Errno <span class="token number">13</span><span class="token punctuation">]</span> Permission denied: <span class="token string">&#39;/var/lib/rpm/Sigmd5&#39;</span>
You need to be root to perform this command.
<span class="token punctuation">[</span>zjb@op python38<span class="token punctuation">]</span>$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此贴终结，失败告终，over！</p>`,51),p=[l];function t(o,c){return s(),a("div",null,p)}const u=n(i,[["render",t],["__file","index.html.vue"]]);export{u as default};
