# VASP计算电荷密度差

以计算O2电荷密度差为例

## 流程

以A-B型为例

- 对A-B进行结构优化
- 分别对A-B、A、B分别静电自洽 （不能结构优化）
- chgsun.pl CHGCAR_A CHGCAR_B
- chgdiff.pl CHGCAR_AB CHGCAR_sum

## 目录

```
[zjb@op O2_chg_diff]$ tree
O2_chg_diff
├── A
│   ├── CHG
│   ├── CHGCAR
│   ├── CONTCAR
│   ├── INCAR
│   ├── KPOINTS
│   ├── OSZICAR
│   ├── OUTCAR
│   ├── out.log
│   ├── POSCAR
│   ├── POTCAR
│   ├── stdout
│   └── vasp.pbs


├── B
│   ├── CHG
│   ├── CHGCAR
│   ├── CONTCAR
│   ├── INCAR
│   ├── KPOINTS
│   ├── OSZICAR
│   ├── OUTCAR
│   ├── POSCAR
│   ├── POTCAR
│   ├── REPORT
│   ├── stdout
│   └── vasp.pbs

├── CHGCAR_diff
├── CHGCAR_sum

└── O2
    ├── CHG
    ├── CHGCAR
    ├── CONTCAR
    ├── INCAR
    ├── KPOINTS
    ├── OSZICAR
    ├── OUTCAR
    ├── POSCAR
    ├── POTCAR
    └── stdout

3 directories, 62 files
```

---



## 对AB进行结构优化 geo

在`O2`目录中对O2进行结构优化

` [zjb@op O2]$ cat POSCAR`：

```
O2
1
10 0 0
0 10 0
0 0 12
O
2
S
D
0.5 0.5 0.5   F F F
0.5 0.5 0.62  F F T
```

` [zjb@op O2]$ cat INCAR`：

```
Global Parameters
 ISTART =  1            (Read existing wavefunction; if there)
 ISPIN =  2           (Spin polarised DFT)
 ICHARG =  2         (Non-self-consistent: GGA/LDA band structures)
 LREAL  = .FALSE.          (Projection operators: automatic)
 ENCUT  =  400        (Cut-off energy for plane wave basis set, in eV)
 PREC   =  Normal       (Precision level)
 LWAVE  = .TRUE.        (Write WAVECAR or not)
 LCHARG = .TRUE.        (Write CHGCAR or not)
 ADDGRID= .TRUE.        (Increase grid; helps GGA convergence)
 NGXF    = 150         (FFT grid mesh density for nice charge/potential plots)
 NGYF    = 150         (FFT grid mesh density for nice charge/potential plots)
 NGZF    = 180         (FFT grid mesh density for nice charge/potential plots)

Electronic Relaxation
ISMEAR =  0            (Gaussian smearing; metals:1)
SIGMA  =  0.05         (Smearing value in eV; metals:0.2)
NELM   =  60           (Max electronic SCF steps)
NELMIN =  4            (Min electronic SCF steps)
EDIFF  =  1E-06        (SCF energy convergence; in eV)

Ionic Relaxation
NSW    =  0          (Max electronic SCF steps)
IBRION =  2            (Algorithm: 0-MD; 1-Quasi-New; 2-CG)
ISIF   =  2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
EDIFFG = -2E-02        (Ionic convergence; eV/AA)
```

提交作业，结构优化完成之后将`CONTCAR`作为新的`POSCAR`进行后续运算。 

```bash
 [zjb@op O2]$ cp COUTCAR POSCAR
```

结构优化后的新POSCAR

```
 [zjb@op O2]$ cat POSCAR
O2                                      
   1.00000000000000     
    10.0000000000000000    0.0000000000000000    0.0000000000000000
     0.0000000000000000   10.0000000000000000    0.0000000000000000
     0.0000000000000000    0.0000000000000000   12.0000000000000000
   O 
     2
Selective dynamics
Direct
  0.5000000000000000  0.5000000000000000  0.5000000000000000   F   F   F
  0.5000000000000000  0.5000000000000000  0.6028640220057100   F   F   T
 
  0.00000000E+00  0.00000000E+00  0.00000000E+00
  0.00000000E+00  0.00000000E+00  0.00000000E+00
```



## 静电自洽

三次静电自洽需要注意INCAR需要一样：

- FFT mesh需要一致
- LCHARG需要打开

### 对A-B进行静电自洽 scf

将上一步的`INCAR`中`ISBRION`值修改为`-1`，提交作业进行静电自洽。

### 对A、B分别静电自洽

将A-B静电自洽用的INCAR、POSCAR、POTCAR、KPOINTS复制出来，分别放在A和B目录中。

```bash
[zjb@op O2]$ cp INCAR POSCAR POTCAR KPOINTS ../A/
[zjb@op O2]$ cp INCAR POSCAR POTCAR KPOINTS ../B/
```

在A目录的POSCAR中删除B部分对应的点，元素数量改一下，得到A部分的POSCAR，提交作业静电自洽。

在B目录的POSCAR中删除A部分对应的点，元素数量改一下，得到B部分的POSCAR，提交作业静电自洽。

```bash
[zjb@op O2_chg_diff]$ cat A/POSCAR 
O2                                      
   1.00000000000000     
    10.0000000000000000    0.0000000000000000    0.0000000000000000
     0.0000000000000000   10.0000000000000000    0.0000000000000000
     0.0000000000000000    0.0000000000000000   12.0000000000000000
   O 
     1
Selective dynamics
Direct
  0.5000000000000000  0.5000000000000000  0.5000000000000000   F   F   F
 
  0.00000000E+00  0.00000000E+00  0.00000000E+00
  0.00000000E+00  0.00000000E+00  0.00000000E+00



[zjb@op O2_chg_diff]$ cat B/POSCAR 
O2                                      
   1.00000000000000     
    10.0000000000000000    0.0000000000000000    0.0000000000000000
     0.0000000000000000   10.0000000000000000    0.0000000000000000
     0.0000000000000000    0.0000000000000000   12.0000000000000000
   O 
     1
Selective dynamics
Direct
  0.5000000000000000  0.5000000000000000  0.6028640220057100   F   F   T
 
  0.00000000E+00  0.00000000E+00  0.00000000E+00
  0.00000000E+00  0.00000000E+00  0.00000000E+00

```

## chgsum.pl

语法：

```bash
chgsum.pl <CHGCAR_A> <CHGCAR_B>
```

比如这个例子的：

```bash
 [zjb@op O2_chg_diff]$ chgsum.pl A/CHGCAR B/CHGCAR
```

运行后在`O2_chg_diff/`下生成了一个`CHGCAR_sum`文件。

## chgdiff.pl

语法：

```bash
chgdiff.pl <CHGCAR_AB> <CHGCAR_sum>
```

是后面的减前面的。

本例：

```
 [zjb@op O2_chg_diff]$ chgdiff.pl O2/CHGCAR CHGCAR_sum
```

运行后在`O2_chg_diff/`下生成了一个`CHGCAR_diff`文件，下载，使用`VESTA`显示：

![O2_chg_diff_VESTA](vasp-chg-diff.assets/image-20201128155815668.png)

