import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as r,c as d,a as e,b as i,e as s,d as o}from"./app-1ZTmwhuN.js";const l={},c=o(`<h1 id="openmpi" tabindex="-1"><a class="header-anchor" href="#openmpi" aria-hidden="true">#</a> Openmpi</h1><h2 id="各种乱七八糟的报错" tabindex="-1"><a class="header-anchor" href="#各种乱七八糟的报错" aria-hidden="true">#</a> 各种乱七八糟的报错</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>libi40iw-i40iw_ucreate_qp: failed to create QP, unsupported QP type: 0x4
--------------------------------------------------------------------------
Failed to create a queue pair (QP):

Hostname: compute-0-9
Requested max number of outstanding WRs in the SQ:                1
Requested max number of outstanding WRs in the RQ:                2
Requested max number of SGEs in a WR in the SQ:                   511
Requested max number of SGEs in a WR in the RQ:                   511
Requested max number of data that can be posted inline to the SQ: 0
Error:    File exists

Check requested attributes.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
Open MPI has detected that there are UD-capable Verbs devices on your
system, but none of them were able to be setup properly.  This may
indicate a problem on this system.

You job will continue, but Open MPI will ignore the &quot;ud&quot; oob component
in this run.

Hostname: compute-0-9
--------------------------------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Put “oob=tcp” in your default MCA param file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建 <code>~/.openmpi/mca-params.conf</code>，写入 <code>oob=tcp</code> 即可。</p><p>MCA param file：</p><ul><li><code>$HOME/.openmpi/mca-params.conf</code>: This is the user-supplied set of values, which has the highest precedence.</li><li><code>$prefix/etc/openmpi-mca-params.conf</code>: This is the system-supplied set of values, which has a lower precedence.</li></ul><p>参考：</p>`,9),m={href:"http://bbs.keinsci.com/thread-9036-1-1.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://users.open-mpi.narkive.com/HK7mhAoT/ompi-failed-to-register-memory-openmpi-2-0-2#post2",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.ibm.com/docs/en/smpi/10.2?topic=environment-setting-mca-parameters",target:"_blank",rel:"noopener noreferrer"};function v(h,b){const n=t("ExternalLinkIcon");return r(),d("div",null,[c,e("ul",null,[e("li",null,[e("a",m,[i("ORCA集群上运行BSUB脚本求助 - 量子化学 (Quantum Chemistry) - 计算化学公社 (keinsci.com)"),s(n)])]),e("li",null,[e("a",u,[i("[OMPI users] Failed to register memory (openmpi 2.0.2) (narkive.com)"),s(n)])]),e("li",null,[e("a",p,[i("Setting MCA parameters - IBM Documentation"),s(n)])])])])}const x=a(l,[["render",v],["__file","index.html.vue"]]);export{x as default};
