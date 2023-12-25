import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as p,a as n,b as s,e as c,d as a}from"./app-1ZTmwhuN.js";const o={},r=a(`<h1 id="_19-linux-bashrc-vs-bash-profile" tabindex="-1"><a class="header-anchor" href="#_19-linux-bashrc-vs-bash-profile" aria-hidden="true">#</a> 19.linux-bashrc-VS-bash_profile</h1><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><h3 id="自定义命令提示符" tabindex="-1"><a class="header-anchor" href="#自定义命令提示符" aria-hidden="true">#</a> 自定义命令提示符</h3><p>通过修改 <code>PS1</code> 变量实现：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">\\</span>u 显示当前用户账号
 <span class="token punctuation">\\</span>v <span class="token environment constant">BASH</span>的版本信息
 
 <span class="token punctuation">\\</span>H 完整的主机名称。例如：hostname为aliyun.alibaba.clound，则这个名称就是aliyun.alibaba.clound
 <span class="token punctuation">\\</span>h 仅取主机的第一个名字，例如：hostname为aliyun.alibaba.clound，则这个名称就是aliyun
 
 <span class="token punctuation">\\</span>W 只显示当前路径最后一个目录
 <span class="token punctuation">\\</span>w 显示当前绝对路径（当前用户目录会以 ~代替）
 
 <span class="token punctuation">\\</span>t 显示时间为24小时格式,如：14:19:34
 <span class="token punctuation">\\</span>T 显示时间为12小时格式,如：02:19:34
 <span class="token punctuation">\\</span>A 显示时间为24小时格式但是不带秒,如：14:19
 <span class="token punctuation">\\</span>d 代表日期，格式为weekday month date，例如：<span class="token string">&quot;Mon Aug1&quot;</span>
 
 <span class="token environment constant">$PWD</span> 显示当前全路径
 <span class="token comment"># 显示命令行提示符号，一般使用&#39;$&#39;或者&#39;#&#39;</span>
 <span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PS1=&#39;[\\u@\\h \\w]# &#39;&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
 <span class="token comment"># 如果想要在用户家目录的时候显示为~则可以将$PWD换为\\w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;[\\u@\\h \\w]\\$ &#39;</span>

<span class="token comment"># 效果</span>
<span class="token punctuation">[</span>scujh_zjb@scu ~/311<span class="token punctuation">]</span>$ <span class="token builtin class-name">pwd</span>
/home/scujh_zjb/311
<span class="token punctuation">[</span>scujh_zjb@scu ~/311<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自用备份：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .bashrc</span>

<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>

<span class="token comment"># Uncomment the following line if you don&#39;t like systemctl&#39;s auto-paging feature:</span>
<span class="token comment"># export SYSTEMD_PAGER=</span>

<span class="token comment"># User specific aliases and functions</span>

<span class="token comment">## PATH</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/opt/apps/vasptool/bin:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/opt/apps/vasptool/vtstscripts-978:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/opt/apps/anaconda3/bin:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/home/scujh_zjb/apps/bin:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/home/scujh_zjb/apps/scripts:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token comment">## TimeZone</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span><span class="token string">&#39;Asia/Shanghai&#39;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">TIME_STYLE</span><span class="token operator">=</span><span class="token string">&#39;+%Y-%m-%d %H:%M:%S&#39;</span>   <span class="token comment"># 时区与时间显示格式本地化</span>

<span class="token comment">## alisa</span>
<span class="token builtin class-name">alias</span> <span class="token punctuation">..</span><span class="token operator">=</span><span class="token string">&#39;cd ..&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token punctuation">..</span>.<span class="token operator">=</span><span class="token string">&#39;cd ../..&#39;</span>
<span class="token builtin class-name">alias</span> cd<span class="token punctuation">..</span><span class="token operator">=</span><span class="token string">&#39;cd ..&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">cppbs</span><span class="token operator">=</span><span class="token string">&#39;cp ~/vasp_cpu.pbs . &amp;&amp; ls --color&#39;</span> 
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">qq</span><span class="token operator">=</span><span class="token string">&#39;qstat -a&#39;</span>

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rm</span><span class="token operator">=</span><span class="token string">&#39;rm -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token string">&#39;cp -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">mv</span><span class="token operator">=</span><span class="token string">&#39;mv -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -lh&#39;</span>  <span class="token comment"># ll 列出的文件大小使用合适的单位表示，默认为 kb</span>
<span class="token function-name function">cdpwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable">\${1}</span>&quot;</span><span class="token punctuation">;</span>
  <span class="token comment"># pwd;</span>
  <span class="token comment"># echo -e &quot;\\033[36m\`pwd\` \\033[0m&quot;;</span>
  <span class="token comment"># echo -e &quot;\\033[47;30m \`pwd\` \\033[0m&quot;;</span>
  <span class="token function">ls</span> --color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">cd</span><span class="token operator">=</span><span class="token string">&#39;cdpwd&#39;</span>

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ls</span><span class="token operator">=</span><span class="token string">&#39;echo -e &quot;\\033[36m\`pwd\` \\033[0m&quot; &amp;&amp; ls --color&#39;</span>
<span class="token comment">#alias vi=&#39;vim&#39;</span>

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">viewmail</span><span class="token operator">=</span><span class="token string">&#39;vi /var/spool/mail/scujh_zjb&#39;</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;[\\u@\\h \\w]\\$ &#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-中-bashrc-与-bash-profile-的区别" tabindex="-1"><a class="header-anchor" href="#linux-中-bashrc-与-bash-profile-的区别" aria-hidden="true">#</a> linux 中 . bashrc 与 . bash_profile 的区别</h2>`,9),d={href:"https://blog.csdn.net/sch0120/article/details/70256318",target:"_blank",rel:"noopener noreferrer"},u=a("<blockquote><p>由此可见，“profile”系列文件的主要目的在于为“登录 shell”设置环境变量和启动程序；而“rc”系列文件的主要目的在于设置功能和别名。</p><p>顺便提一句，Linux 中“rc”是英文“run command”的缩写，表示文件中存放需要执行的命令。其实这也非常符合逻辑，设置功能就要执行 <code>shopt</code> 命令，而设置别名要执行 <code>alias</code> 命令。与“rc”系列互补，“profile”系列用来设置环境变量，它不会去调用这两个命令，但却经常需要使用 <code>export</code> 语句。不信你可以看一看这两个文件。</p><p>如果你想对 bash 的功能进行设置或者是定义一些别名，推荐你修改 <code>~/.bashrc</code> 文件，这样无论你以何种方式打开 shell，你的配置都会生效。而如果你要更改一些环境变量，推荐你修改 <code>~/.bash_profile</code> 文件，因为考虑到 shell 的继承特性，这些更改确实只应该被执行一次（而不是多次）。针对所有用户进行全局设置，推荐你在 <code>/etc/profile.d</code> 目录下添加以 <code>.sh</code> 结尾的文件，而不是去修改全局 startup 文件。</p></blockquote>",1);function v(m,b){const e=i("ExternalLinkIcon");return t(),p("div",null,[r,n("p",null,[s("具体参考 "),n("a",d,[s("关于“.bash_profile”和“.bashrc”区别的总结 | CSDN"),c(e)]),s("。")]),u])}const g=l(o,[["render",v],["__file","index.html.vue"]]);export{g as default};
