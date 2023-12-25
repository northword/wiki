import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as i,a,b as p,e as c,d as s}from"./app-1ZTmwhuN.js";const o="/assets/--iemq2ucq.png",r="/assets/64206bdbbad90a9ab4ba1aa3889a2e05-Zmmhpxdl.png",d={},u=s('<h1 id="内网穿透折腾记录" tabindex="-1"><a class="header-anchor" href="#内网穿透折腾记录" aria-hidden="true">#</a> 内网穿透折腾记录</h1><h2 id="通过-frp" tabindex="-1"><a class="header-anchor" href="#通过-frp" aria-hidden="true">#</a> 通过 frp</h2><h3 id="配置参考" tabindex="-1"><a class="header-anchor" href="#配置参考" aria-hidden="true">#</a> 配置参考</h3>',3),v={href:"https://gofrp.org/docs/reference/",target:"_blank",rel:"noopener noreferrer"},m=s(`<p><code>frps.ini</code></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
<span class="token key attr-name">token</span> <span class="token punctuation">=</span> <span class="token value attr-value">通讯密码</span>
<span class="token key attr-name">subdomin_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">frp.northword.cn</span>
<span class="token key attr-name">log_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">./frps.log</span>
<span class="token key attr-name">log_level      </span> <span class="token punctuation">=</span> <span class="token value attr-value">info</span>
<span class="token key attr-name">log_max_days   </span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>frpc.ini</code></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">frp.northword.cn</span>
<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
<span class="token key attr-name">log_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/home/scujh_zjb/apps/frp/frpc.log</span>
<span class="token key attr-name">log_level</span> <span class="token punctuation">=</span> <span class="token value attr-value">info</span>
<span class="token key attr-name">log_max_days</span> <span class="token punctuation">=</span> <span class="token value attr-value">3</span>
<span class="token key attr-name">token</span> <span class="token punctuation">=</span> <span class="token value attr-value">通讯密码</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">HPC-Inelt</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">22</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux-端-systemctl-配置" tabindex="-1"><a class="header-anchor" href="#linux-端-systemctl-配置" aria-hidden="true">#</a> linux 端 systemctl 配置</h3><p>frp 包中提供了 systemctl 的配置文件模板，服务端和客户端各两个，带 <code>@</code> 的可以传参以启动多个实例。将模板复制到 systemctl 服务配置路径：<code>/lib/systemd/system/</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Frp Client Service
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>5s
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/scujh_zjb/apps/frp/frpc <span class="token parameter variable">-c</span> /home/scujh_zjb/apps/frp/frpc.ini
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/home/scujh_zjb/apps/frp/frpc reload <span class="token parameter variable">-c</span> /home/scujh_zjb/apps/frp/frpc.ini
<span class="token assign-left variable">LimitNOFILE</span><span class="token operator">=</span><span class="token number">1048576</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初次配置后需要重载服务，之后启动无须此步：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后启动服务：：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启动 </span>
<span class="token function">sudo</span> systemctl start frpc 
<span class="token comment">#关闭 </span>
<span class="token function">sudo</span> systemctl stop frpc 
<span class="token comment">#重启 </span>
<span class="token function">sudo</span> systemctl restart frpc 
<span class="token comment">#查看状态 </span>
<span class="token function">sudo</span> systemctl status frpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用开机自启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> frpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动成功示意：</p><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',16);function k(b,f){const n=t("ExternalLinkIcon");return l(),i("div",null,[u,a("p",null,[a("a",v,[p("参考 | frp (gofrp.org)"),c(n)])]),m])}const _=e(d,[["render",k],["__file","内网穿透折腾记录.html.vue"]]);export{_ as default};
