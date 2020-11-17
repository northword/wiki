# 安装ASE

## Requirements

- [Python](https://www.python.org/) 3.6 or newer
- [NumPy](https://docs.scipy.org/doc/numpy/reference/) 1.11 or newer (base N-dimensional array package)
- [SciPy](https://docs.scipy.org/doc/scipy/reference/) 0.18 or newer (library for scientific computing)

Optional but strongly recommended:

- [Matplotlib](https://matplotlib.org/) 2.0.0 or newer for plotting
- [`tkinter`](https://docs.python.org/3.7/library/tkinter.html#module-tkinter) for [`ase.gui`](https://wiki.fysik.dtu.dk/ase/ase/gui/gui.html#module-ase.gui)

Optional:

- [Flask](https://palletsprojects.com/p/flask/) for [`ase.db`](https://wiki.fysik.dtu.dk/ase/ase/db/db.html#module-ase.db) web-interface
- [pytest](https://pypi.org/project/pytest/) 3.6.1 or newer for running tests
- [pytest-xdist](https://pypi.org/project/pytest-xdist/) 1.22.1 or newer for running tests in parallel
- [spglib](https://pypi.org/project/spglib/) for certain symmetry-related features

---

## 1.安装并配置Python环境

## 2. 安装ASE

```
pip install --upgrade --user ase
```

## 3. 添加环境变量

```
将以下添加到PATH
%AppData%\Roaming\Python\Python38\Scripts
```
该变量可能不一样，需要自行确定

---

## 参考文献

- https://wiki.fysik.dtu.dk/ase/install.html#installation-using-pip
---

在Windows 10 20H2 版本上，ASE可能报错，可能是由于numpy与Windows 20H2不兼容导致，参考 [numpy-in-win20H2.md](..\09-Others\numpy-in-win20H2.md) 。