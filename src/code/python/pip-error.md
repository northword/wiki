---
title: pip 报错
date: 2022-09-16 20:24:53
updated: 2022-09-16 21:10:06
permalink: /code/python/pip-error/
---

# pip 报错

## 找不到指定文件

安装软件时的“找不到指定文件”，由 python 版本、pip 获得的包版本与当前 python 版本、系统不一致导致的。

课题组一个同学安装 ase 时遇到以下报错，

```powershell
C:\Users\admin>pip install ase -i https://pypi.tuna.tsinghua.edu.cn/simple
Defaulting to user installation because normal site-packages is not writeable
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
Collecting ase
  Using cached https://pypi.tuna.tsinghua.edu.cn/packages/38/b0/3c0a7afaf66274588216c251376ac2bea0269eb7a5e1da77521811060553/ase-3.22.1-py3-none-any.whl (2.2 MB)
Collecting matplotlib>=3.1.0
  Using cached https://pypi.tuna.tsinghua.edu.cn/packages/ec/ae/82960a8135b2f5e7102e9538bed8a791525bb19cbee65326467f43af5d0c/matplotlib-3.6.0-cp311-cp311-win_amd64.whl (7.2 MB)
Collecting numpy>=1.15.0
  Using cached https://pypi.tuna.tsinghua.edu.cn/packages/2e/bd/286dacf2655c4db1a5076390337c746452a08def20daa53b4903722545d2/numpy-1.23.3-cp311-cp311-win_amd64.whl (14.6 MB)
Collecting scipy>=1.1.0
  Using cached https://pypi.tuna.tsinghua.edu.cn/packages/db/af/16906139f52bc6866c43401869ce247662739ad71afa11c6f18505eb0546/scipy-1.9.1.tar.gz (42.0 MB)
  Installing build dependencies ... done
  Getting requirements to build wheel ... error
  error: subprocess-exited-with-error

  × Getting requirements to build wheel did not run successfully.
  │ exit code: 1
  ╰─> [55 lines of output]
      The Meson build system
      Version: 0.62.2
      Source dir: C:\Users\admin\AppData\Local\Temp\pip-install-hnc68765\scipy_9107fc1b1e9e4610afdf71a4f31e69fd
      Build dir: C:\Users\admin\AppData\Local\Temp\pip-install-hnc68765\scipy_9107fc1b1e9e4610afdf71a4f31e69fd\.mesonpy-iocfb37s\build
      Build type: native build
      Project name: SciPy
      Project version: 1.9.1
      WARNING: Failed to activate VS environment: Could not find C:\Program Files (x86)\Microsoft Visual Studio\Installer\vswhere.exe

      ..\..\meson.build:1:0: ERROR: Unknown compiler(s): [['icl'], ['cl'], ['cc'], ['gcc'], ['clang'], ['clang-cl'], ['pgcc']]
      The following exception(s) were encountered:
      Running "icl " gave "[WinError 2] 系统找不到指定的文件。"
      Running "cl /?" gave "[WinError 2] 系统找不到指定的文件。"
      Running "cc --version" gave "[WinError 2] 系统找不到指定的文件。"
      Running "gcc --version" gave "[WinError 2] 系统找不到指定的文件。"
      Running "clang --version" gave "[WinError 2] 系统找不到指定的文件。"
      Running "clang-cl /?" gave "[WinError 2] 系统找不到指定的文件。"
      Running "pgcc --version" gave "[WinError 2] 系统找不到指定的文件。"

      A full log can be found at C:\Users\admin\AppData\Local\Temp\pip-install-hnc68765\scipy_9107fc1b1e9e4610afdf71a4f31e69fd\.mesonpy-iocfb37s\build\meson-logs\meson-log.txt
      + meson setup --native-file=C:\Users\admin\AppData\Local\Temp\pip-install-hnc68765\scipy_9107fc1b1e9e4610afdf71a4f31e69fd\.mesonpy-native-file.ini -Ddebug=false -Doptimization=2 --prefix=C:\Program Files\Python311 C:\Users\admin\AppData\Local\Temp\pip-install-hnc68765\scipy_9107fc1b1e9e4610afdf71a4f31e69fd C:\Users\admin\AppData\Local\Temp\pip-install-hnc68765\scipy_9107fc1b1e9e4610afdf71a4f31e69fd\.mesonpy-iocfb37s\build
      Traceback (most recent call last):
        File "C:\Program Files\Python311\Lib\site-packages\pip\_vendor\pep517\in_process\_in_process.py", line 363, in <module>
          main()
        File "C:\Program Files\Python311\Lib\site-packages\pip\_vendor\pep517\in_process\_in_process.py", line 345, in main
          json_out['return_val'] = hook(**hook_input['kwargs'])
                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        File "C:\Program Files\Python311\Lib\site-packages\pip\_vendor\pep517\in_process\_in_process.py", line 130, in get_requires_for_build_wheel
          return hook(config_settings)
                 ^^^^^^^^^^^^^^^^^^^^^
        File "C:\Users\admin\AppData\Local\Temp\pip-build-env-s4svfkf_\overlay\Lib\site-packages\mesonpy\__init__.py", line 923, in get_requires_for_build_wheel
          with _project(config_settings) as project:
        File "C:\Program Files\Python311\Lib\contextlib.py", line 137, in __enter__
          return next(self.gen)
                 ^^^^^^^^^^^^^^
        File "C:\Users\admin\AppData\Local\Temp\pip-build-env-s4svfkf_\overlay\Lib\site-packages\mesonpy\__init__.py", line 902, in _project
          with Project.with_temp_working_dir(
        File "C:\Program Files\Python311\Lib\contextlib.py", line 137, in __enter__
          return next(self.gen)
                 ^^^^^^^^^^^^^^
        File "C:\Users\admin\AppData\Local\Temp\pip-build-env-s4svfkf_\overlay\Lib\site-packages\mesonpy\__init__.py", line 547, in with_temp_working_dir
          yield cls(source_dir, tmpdir, build_dir)
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        File "C:\Users\admin\AppData\Local\Temp\pip-build-env-s4svfkf_\overlay\Lib\site-packages\mesonpy\__init__.py", line 463, in __init__
          self._configure(reconfigure=bool(build_dir) and not native_file_mismatch)
        File "C:\Users\admin\AppData\Local\Temp\pip-build-env-s4svfkf_\overlay\Lib\site-packages\mesonpy\__init__.py", line 494, in _configure
          self._meson(
        File "C:\Users\admin\AppData\Local\Temp\pip-build-env-s4svfkf_\overlay\Lib\site-packages\mesonpy\__init__.py", line 477, in _meson
          return self._proc('meson', *args)
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^
        File "C:\Users\admin\AppData\Local\Temp\pip-build-env-s4svfkf_\overlay\Lib\site-packages\mesonpy\__init__.py", line 472, in _proc
          subprocess.check_call(list(args))
        File "C:\Program Files\Python311\Lib\subprocess.py", line 413, in check_call
          raise CalledProcessError(retcode, cmd)
      subprocess.CalledProcessError: Command '['meson', 'setup', '--native-file=C:\\Users\\admin\\AppData\\Local\\Temp\\pip-install-hnc68765\\scipy_9107fc1b1e9e4610afdf71a4f31e69fd\\.mesonpy-native-file.ini', '-Ddebug=false', '-Doptimization=2', '--prefix=C:\\Program Files\\Python311', 'C:\\Users\\admin\\AppData\\Local\\Temp\\pip-install-hnc68765\\scipy_9107fc1b1e9e4610afdf71a4f31e69fd', 'C:\\Users\\admin\\AppData\\Local\\Temp\\pip-install-hnc68765\\scipy_9107fc1b1e9e4610afdf71a4f31e69fd\\.mesonpy-iocfb37s\\build']' returned non-zero exit status 1.
      [end of output]

  note: This error originates from a subprocess, and is likely not a problem with pip.
error: subprocess-exited-with-error

× Getting requirements to build wheel did not run successfully.
│ exit code: 1
╰─> See above for output.

note: This error originates from a subprocess, and is likely not a problem with pip.

```

注意 10 行，发现是安装 SciPy 时报了错，26、28 行指明是编译的问题，查了资料初步判断是平台不对，下错包了。

该人环境：Windows 10 x64，Python 3.11 rc2

结合网上资料，提出以下解决方法。

在 python 交互命令行中通过以下查询当前机器支持的编译器/平台：

```python
>>> import pip._internal
>>> print(pip._internal.pep425tags.get_supported())
```

正常应该可以输出当前机器支持的平台，但如果报错如下，则在终端使用

```powershell
python -m pip debug --verbose
```

```powershell
PS C:\WINDOWS\system32> python
Python 3.11.0rc2 (main, Sep 11 2022, 20:22:52) [MSC v.1933 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> import pip._internal
>>> print(pip._internal.pep425tags.get_supported())
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: module 'pip._internal' has no attribute 'pep425tags'
>>> print(pip._internal)
<module 'pip._internal' from 'C:\\Program Files\\Python311\\Lib\\site-packages\\pip\\_internal\\__init__.py'>
>>> exit()

PS C:\WINDOWS\system32> python -m pip debug --verbose
WARNING: This command is only meant for debugging. Do not use this with automation for parsing and getting these details, since the output and options of this command may change without notice.
pip version: pip 22.2.2 from C:\Program Files\Python311\Lib\site-packages\pip (python 3.11)
sys.version: 3.11.0rc2 (main, Sep 11 2022, 20:22:52) [MSC v.1933 64 bit (AMD64)]
sys.executable: C:\Program Files\Python311\python.exe
sys.getdefaultencoding: utf-8
sys.getfilesystemencoding: utf-8
locale.getpreferredencoding: cp936
sys.platform: win32
sys.implementation:
  name: cpython
'cert' config value: Not specified
REQUESTS_CA_BUNDLE: None
CURL_CA_BUNDLE: None
pip._vendor.certifi.where(): C:\Program Files\Python311\Lib\site-packages\pip\_vendor\certifi\cacert.pem
pip._vendor.DEBUNDLED: False
vendored library versions:
  CacheControl==0.12.11
  colorama==0.4.5
  distlib==0.3.5
  distro==1.7.0
  msgpack==1.0.4
  packaging==21.3
  pep517==0.12.0
  platformdirs==2.5.2
  pyparsing==3.0.9
  requests==2.28.1
  certifi==2022.06.15
  chardet==5.0.0
  idna==3.3
  urllib3==1.26.10
  rich==12.5.1 (Unable to locate actual module version, using vendor.txt specified version)
  pygments==2.12.0
  typing_extensions==4.3.0 (Unable to locate actual module version, using vendor.txt specified version)
  resolvelib==0.8.1
  setuptools==44.0.0 (Unable to locate actual module version, using vendor.txt specified version)
  six==1.16.0
  tenacity==8.0.1 (Unable to locate actual module version, using vendor.txt specified version)
  tomli==2.0.1
  webencodings==0.5.1 (Unable to locate actual module version, using vendor.txt specified version)
Compatible tags: 39
  cp311-cp311-win_amd64
  cp311-abi3-win_amd64
  cp311-none-win_amd64
  cp310-abi3-win_amd64
  cp39-abi3-win_amd64
  cp38-abi3-win_amd64
  cp37-abi3-win_amd64
  cp36-abi3-win_amd64
  cp35-abi3-win_amd64
  cp34-abi3-win_amd64
  cp33-abi3-win_amd64
  cp32-abi3-win_amd64
  py311-none-win_amd64
  py3-none-win_amd64
  py310-none-win_amd64
  py39-none-win_amd64
  py38-none-win_amd64
  py37-none-win_amd64
  py36-none-win_amd64
  py35-none-win_amd64
  py34-none-win_amd64
  py33-none-win_amd64
  py32-none-win_amd64
  py31-none-win_amd64
  py30-none-win_amd64
  cp311-none-any
  py311-none-any
  py3-none-any
  py310-none-any
  py39-none-any
  py38-none-any
  py37-none-any
  py36-none-any
  py35-none-any
  py34-none-any
  py33-none-any
  py32-none-any
  py31-none-any
  py30-none-any
PS C:\WINDOWS\system32>
```

后面列出的是允许使用的版本，去 pypi 源站找个可用的下载，然后 `pip install <path/to/pkg>`，如果可以，就结束。如果报不支持当前平台，或没有找到一样的，则可能是 python 版本太新？

```text
scipy-1.9.1-cp310-cp310-macosx_10_9_x86_64.whl
scipy-1.9.1-cp310-cp310-macosx_12_0_arm64.whl
scipy-1.9.1-cp310-cp310-macosx_12_0_universal2.macosx_10_9_x86_64.whl
scipy-1.9.1-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl
scipy-1.9.1-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
scipy-1.9.1-cp310-cp310-win_amd64.whl
scipy-1.9.1-cp38-cp38-macosx_10_9_x86_64.whl
scipy-1.9.1-cp38-cp38-macosx_12_0_arm64.whl
scipy-1.9.1-cp38-cp38-macosx_12_0_universal2.macosx_10_9_x86_64.whl
scipy-1.9.1-cp38-cp38-manylinux_2_12_i686.manylinux2010_i686.whl
scipy-1.9.1-cp38-cp38-manylinux_2_17_aarch64.manylinux2014_aarch64.whl
scipy-1.9.1-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
scipy-1.9.1-cp38-cp38-win32.whl
scipy-1.9.1-cp38-cp38-win_amd64.whl
scipy-1.9.1-cp39-cp39-macosx_10_9_x86_64.whl
scipy-1.9.1-cp39-cp39-macosx_12_0_arm64.whl
scipy-1.9.1-cp39-cp39-macosx_12_0_universal2.macosx_10_9_x86_64.whl
scipy-1.9.1-cp39-cp39-manylinux_2_12_i686.manylinux2010_i686.whl
scipy-1.9.1-cp39-cp39-manylinux_2_17_aarch64.manylinux2014_aarch64.whl
scipy-1.9.1-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
scipy-1.9.1-cp39-cp39-win32.whl
scipy-1.9.1-cp39-cp39-win_amd64.whl
scipy-1.9.1.tar.gz
```

例如本例，Python 3.11 rc2，scipy 没有对应的包，本例中里应当是 `scipy-1.9.1-cp311-cp311-win_amd64.whl` 的，但没有，下载 `scipy-1.9.1-cp310-cp310-win_amd64.whl` 则报

```powershell
PS C:\users\admin\Downloads> pip install .\scipy-1.9.1-cp310-cp310-win_amd64.whl
ERROR: scipy-1.9.1-cp310-cp310-win_amd64.whl is not a supported wheel on this platform.
PS C:\users\admin\Downloads>
```

然后，试着卸载了 python 3.11 rc2，安装最新的稳定版 3.10.7，结果果然解决...

```powershell
PS C:\WINDOWS\system32> pip install ase -i https://pypi.tuna.tsinghua.edu.cn/simple
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
Collecting ase
  Using cached https://pypi.tuna.tsinghua.edu.cn/packages/38/b0/3c0a7afaf66274588216c251376ac2bea0269eb7a5e1da77521811060553/ase-3.22.1-py3-none-any.whl (2.2 MB)
Collecting scipy>=1.1.0
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/a9/17/67861cb65190a28e726e5f99f8938756385e8b2257cbae2b13e58594ae27/scipy-1.9.1-cp310-cp310-win_amd64.whl (38.6 MB)
     ---------------------------------------- 38.6/38.6 MB 2.0 MB/s eta 0:00:00
Collecting matplotlib>=3.1.0
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/1d/ca/226bf297851690781ac79d8d1cb1af550f5d4926c56ee5035bf3d2027093/matplotlib-3.6.0-cp310-cp310-win_amd64.whl (7.2 MB)
     ---------------------------------------- 7.2/7.2 MB 2.1 MB/s eta 0:00:00
Collecting numpy>=1.15.0
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/51/b6/861f5e9d59c1bb6c05467f5ddcba965cb2c4b1fd62f6bf7b4c4632492625/numpy-1.23.3-cp310-cp310-win_amd64.whl (14.6 MB)
     ---------------------------------------- 14.6/14.6 MB 2.7 MB/s eta 0:00:00
Collecting fonttools>=4.22.0
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/c3/f2/8e1f94318021b162000a8c48f2c460d5efba78fe0e46ef5d236ff3fe8147/fonttools-4.37.2-py3-none-any.whl (959 kB)
     ---------------------------------------- 959.8/959.8 kB 1.1 MB/s eta 0:00:00
Collecting python-dateutil>=2.7
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/36/7a/87837f39d0296e723bb9b62bbb257d0355c7f6128853c78955f57342a56d/python_dateutil-2.8.2-py2.py3-none-any.whl (247 kB)
     ---------------------------------------- 247.7/247.7 kB 447.2 kB/s eta 0:00:00
Collecting pillow>=6.2.0
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/02/55/67a3c17b9e7d972ed8c246f104da99ca4f3ea42fba566697e479011b84b6/Pillow-9.2.0-cp310-cp310-win_amd64.whl (3.3 MB)
     ---------------------------------------- 3.3/3.3 MB 1.6 MB/s eta 0:00:00
Collecting pyparsing>=2.2.1
  Using cached https://pypi.tuna.tsinghua.edu.cn/packages/6c/10/a7d0fa5baea8fe7b50f448ab742f26f52b80bfca85ac2be9d35cdd9a3246/pyparsing-3.0.9-py3-none-any.whl (98 kB)
Collecting contourpy>=1.0.1
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/e2/a1/60afbcfe6bbd801165e3234281dfd515305d40bce4534738ea33b22ef3d4/contourpy-1.0.5-cp310-cp310-win_amd64.whl (164 kB)
     ---------------------------------------- 164.1/164.1 kB 5.0 MB/s eta 0:00:00
Collecting cycler>=0.10
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/5c/f9/695d6bedebd747e5eb0fe8fad57b72fdf25411273a39791cde838d5a8f51/cycler-0.11.0-py3-none-any.whl (6.4 kB)
Collecting packaging>=20.0
  Using cached https://pypi.tuna.tsinghua.edu.cn/packages/05/8e/8de486cbd03baba4deef4142bd643a3e7bbe954a784dc1bb17142572d127/packaging-21.3-py3-none-any.whl (40 kB)
Collecting kiwisolver>=1.0.1
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/68/20/2ce1186ef4edf47281faf58f6dd72a1fcd2be1fc66514bd2d220097bdcd1/kiwisolver-1.4.4-cp310-cp310-win_amd64.whl (55 kB)
     ---------------------------------------- 55.3/55.3 kB 726.2 kB/s eta 0:00:00
Collecting six>=1.5
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/d9/5a/e7c31adbe875f2abbb91bd84cf2dc52d792b5a01506781dbcf25c91daf11/six-1.16.0-py2.py3-none-any.whl (11 kB)
Installing collected packages: six, pyparsing, pillow, numpy, kiwisolver, fonttools, cycler, scipy, python-dateutil, packaging, contourpy, matplotlib, ase
Successfully installed ase-3.22.1 contourpy-1.0.5 cycler-0.11.0 fonttools-4.37.2 kiwisolver-1.4.4 matplotlib-3.6.0 numpy-1.23.3 packaging-21.3 pillow-9.2.0 pyparsing-3.0.9 python-dateutil-2.8.2 scipy-1.9.1 six-1.16.0
PS C:\WINDOWS\system32>
```

该条报错可参考：

- [Python学习笔记: pip install 常见错误汇总 - yahoon - 博客园 (cnblogs.com)](https://www.cnblogs.com/yahoon/p/16172517.html)
