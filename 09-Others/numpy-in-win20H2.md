

# 在Windows 20H2上运行ASE报错

```
 ase --version
 ** On entry to DGEBAL parameter number  3 had an illegal value
 ** On entry to DGEHRD  parameter number  2 had an illegal value
 ** On entry to DORGHR DORGQR parameter number  2 had an illegal value
 ** On entry to DHSEQR parameter number  4 had an illegal value
Traceback (most recent call last):
  File "c:\users\northword\appdata\local\programs\python\python39\lib\runpy.py", line 197, in _run_module_as_main
    return _run_code(code, main_globals, None,
  File "c:\users\northword\appdata\local\programs\python\python39\lib\runpy.py", line 87, in _run_code
    exec(code, run_globals)
  File "C:\Users\Northword\AppData\Roaming\Python\Python39\Scripts\ase.exe\__main__.py", line 4, in <module>
  File "C:\Users\Northword\AppData\Roaming\Python\Python39\site-packages\ase\__init__.py", line 8, in <module>
    import numpy as np
  File "C:\Users\Northword\AppData\Roaming\Python\Python39\site-packages\numpy\__init__.py", line 305, in <module>
    _win_os_check()
  File "C:\Users\Northword\AppData\Roaming\Python\Python39\site-packages\numpy\__init__.py", line 302, in _win_os_check
    raise RuntimeError(msg.format(__file__)) from None
RuntimeError: The current Numpy installation ('C:\\Users\\Northword\\AppData\\Roaming\\Python\\Python39\\site-packages\\numpy\\__init__.py') fails to pass a sanity check due to a bug in the windows runtime. See this issue for more information: https://tinyurl.com/y3dm3h86
```

搜索到一个类似问题的，是因为`numpy`与`windows 20H2`的关系（反正总是Windows 的锅）。

使用如下将`numpy`降级即可。

```
pip install numpy==1.19.3
```



引用地址：https://blog.csdn.net/yangtzech/article/details/109494653

下为镜像。

---

# numpy sanity check in Windows 2004/20H2

实验室的新电脑到了，所以要重新配置python环境，安装完Python后就开始跑程序了。其中需要用到numpy，安装的最新版本1.19.4，然后运行的时候就出问题了。报错如下：

```
 ** On entry to DGEBAL parameter number  3 had an illegal value
 ** On entry to DGEHRD  parameter number  2 had an illegal value
 ** On entry to DORGHR DORGQR parameter number  2 had an illegal value
 ** On entry to DHSEQR parameter number  4 had an illegal value
  File "c:\Users\Public\OneDrive\桌面\LateralControl\path-following-control\examples\pure_pursuit_control.py", line 5, in <module>
    from model import particle
  File "c:/Users/Public/OneDrive/桌面/LateralControl/path-following-control/examples/..\model\particle.py", line 1, in <module>
    import numpy as np
  File "D:\ProgramData\Python\Python39\lib\site-packages\numpy\__init__.py", line 305, in <module>
    _win_os_check()
    raise RuntimeError(msg.format(__file__)) from None
RuntimeError: The current Numpy installation ('D:\\ProgramData\\Python\\Python39\\lib\\site-packages\\numpy\\__init__.py') fails to pass a sanity check due to a bug in the windows runtime. See this issue for more information: https://tinyurl.com/y3dm3h86
```

Python版本如下：

```
Python 3.9.0 (tags/v3.9.0:9cf6752, Oct  5 2020, 15:34:40) [MSC v.1927 64 bit (AMD64)] on win32
```

Windows版本如下：

```
版本         Windows 10 家庭中文版
版本号        20H2
安装日期      2020/11/2
操作系统版本   19042.610
序列号        S101APL1
体验 Windows Feature Experience Pack 120.2212.31.0
```

早上打不开报错里面的链接https://tinyurl.com/y3dm3h86，下午又打开了，跳转到https://developercommunity.visualstudio.com/content/problem/1207405/fmod-after-an-update-to-windows-2004-is-causing-a.html，按照里面的回答https://developercommunity.visualstudio.com/users/290300/3616d928-e552-6c3c-a305-d773da8af52d.html，使用`pip install numpy==1.19.3`将numpy降到1.9.3版本即可解决问题。

按照回答，可能是因为更新了Windows 2004/20H2，所以出了问题。

QAQ：为了这个问题，我装了Anaconda，又是Visual Studio Code、Visual Studio 2019，又是卸载Python3.9，再装上Python3.8，一天的时间就这样过去了…。所有这些原因都是https://tinyurl.com/y3dm3h86的链接打不开。然后搜了半天教程，但是没有这样的错误。本来是要用google搜了，当时也刚好上不去。呜呜呜

同步发布于：语雀：https://www.yuque.com/yangtzech/blog/omkav0