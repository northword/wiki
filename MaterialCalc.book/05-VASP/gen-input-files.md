# 准备VASP的输入文件

输入文件包括POSCAR、INCAR、KPOINTS、POTCAR。注意大小写，因为linux是严格区分大小写的系统。

该页以对`O2`分子进行结构优化为例，说明VASP输入文件的生成步骤。

## 生成输入文件选项的菜单（大体的步骤）

在工作目录键入命令`vaspkit`以启动vaspkit：

```
[zjb@op O2_opt]$ vaspkit
 
            \\\///         
           / _  _ \       Hey, you must know what you are doing.  
         (| (.)(.) |)     Otherwise you might get wrong results!  
 +-----.OOOo--()--oOOO.------------------------------------------+
 |             VASPKIT Version: 1.12 (01 Mar. 2020)              |
 |        Core Developer: Vei WANG (wangvei@icloud.com)          |
 |     Main Contributors: Nan XU, Jin-Cheng LIU & Gang TANG      |
 |    Please send Bugs and Suggestions to vaspkit@gmail.com      |
 +-----.oooO-----------------------------------------------------+
        (   )   Oooo.     
         \ (    (   )     
          \_)    ) /      
                (_/       
 ===================== Structural Options ========================
 1)  VASP Input Files Generator    2)  Elastic-Properties         
 3)  K-Path Generator              4)  Structure Editor           
 5)  Catalysis-ElectroChem Kit     6)  Symmetry Search            
 
 ===================== Electronic Options ========================
 11) Density-of-States             21) DFT Band-Structure         
 23) 3D Band-Structure             25) Hybrid-DFT Band-Structure  
 26) Fermi-Surface                 28) Band-Structure Unfolding   
 
 =========== Charge & Potential & Wavefunction Options ===========
 31) Charge & Spin Density         42) Potential-Related          
 51) Wave-Function Analysis  
 ====================== Misc Utilities ===========================
 71) Optical-Properties            72) Molecular-Dynamics Kit 
 73) VASP2other Interface          74) USER interface
 91) Semiconductor Calculator      92) 2D-Materials Kit       
                                                                  
 0)  Quit                                                         
 ------------>>

```

键入`1`并`enter`以选择`1)  VASP Input Files Generator`。

```
------------>>
1
 ==================== VASP Input Files Options ===================
 101) Customize INCAR File                                        
 102) Generate KPOINTS File for SCF Calculation                   
 103) Generate POTCAR File with Default Setting                   
 104) Generate POTCAR File with User Specified Potential          
 105) Generate POSCAR File from cif (no fractional occupations)   
 106) Generate POSCAR File from Material Studio xsd (retain fixes)
 107) Reformat POSCAR File in Specified Order of Elements         
 108) Successive Procedure to Generate VASP Files and Check       
 109) Check All VASP Files                                        
                                                                  
 0)   Quit                                                        
 9)   Back                                                        
 ------------>>

```
然后就可以根据你的需求去选择要生成的文件了。我们先选择`0`退出`VASPKIT`。

## POSCAR

POSCAR文件可以自己写入，也可以通过Materials Studio建模后导出`.cif`，再转换格式。这是一个POSCAR文件的内容：

```
O2 molecule           # 注释行
10                    # 比例，提供了通用缩放因子（晶格常数）
1.0 0.0 0.0           # 下三行 格矢
0.0 1.0 0.0
0.0 0.0 1.0
O                     # 元素类别（按照它们在POTCAR文件中的显示顺序）
2                     # 原子数量
Selective Dynamic     # 
Direct                # 坐标类别：直角/笛卡尔
0.5 0.5 0.5           # 每个原子的三个(X Y Z)坐标。
0.5 0.5 0.623
```

第8行：该模式允许为每个原子提供额外的标志，以指示在离子弛豫期间是否将允许更改此原子的相应坐标。如果仅缺陷周围的某些壳或表面附近的层应松弛，则此设置很有用。**选择性动力学输入标签是可选的，如果省略了选择性动力学标签，则第八行将在笛卡尔和直角坐标之间进行切换。**

第9行：（如果不启用选择性动力学，则为第8行）指定原子位置是在笛卡尔坐标系中还是在直角坐标（分别为分数坐标）中提供。仅一行上的第一个字符是有效的，并且VASP识别的唯一关键字符是`C`or`c` for `cartesian mode`，`D`or`d`for `direct mode`。

### 通过新建POSCAR文件并手动写入内容来准备

```
vi POSCAR
# 之后手动键入上面POSCAR示例的内容（不包含#后的注释）
```

### 通过Materials Studio建模以生成POSCAR

> 这一小部分用的例子是`NaCl`。已经在Materials Studio中建好了`NaCl`的模型。

#### 方法1：使用VASPKIT转换.cif

从MS建模完成后导出为cif文件：`file-export`，`save as type : .cif`，上传到服务器上，使用`vaspkit`-`1`-`105`，

 ```
   ------------>>
  105
   Please type in the filename of cif->
  NaCl_import.cif                         # 在这里输入了.cif文件的文件名
  Pleas input the order of element, `ENTER` for default!
  Example: 'NA CL' in this CIF
                                          #在这里需要输入元素的符号，通常可以按回车使用默认值
    -->> (01) POSCAR has been generated...
   +---------------------------------------------------------------+
   |                       * ACKNOWLEDGMENTS *                     |
   | Other Contributors: Xue-Fei LIU, Peng-Fei LIU, Dao-Xiong WU,  |
   | Zhao-Fu ZHANG, Tian WANG, Ya-Chao LIU, Qiang LI, iGo and You! |
   +---------------------------------------------------------------+
   |                          * CITATIONS *                        |
   | We Would Appreciate if You Cite in Your Research with VASPKIT.|
   | [1] V. Wang, N. Xu, J.C. LIU, G. Tang, et al, VASPKIT: A Pre- |
   | and Post-Processing Program for VASP Code, arXiv:1908.08269.  |
   +---------------------------------------------------------------+
  [zjb@op NaCl]$ 
  
 ```

在第4行，会要求你输入`.cif`文件的文件名。在第7行，会要求你输入`元素的种类`，如果第6行提示的正确，可以回车使用默认。

#### 方法2：使用VESTA转换

从MS建模完成后导出为cif文件：`file-export-.cif`，用`VESTA`打开该cif文件，选择`file-export data`，`save as type : .vasp`。将这个`.vasp`文件上传到服务器，将其重命名为`POSCAR`，然后打开`vaspkit`，依次进入`3`，`303`。

```shell
[zjb@op NaCl]$ cp NaCl.vasp POSCAR
[zjb@op NaCl]$ vaspkit
 
            \\\///         
           / _  _ \       Hey, you must know what you are doing.  
         (| (.)(.) |)     Otherwise you might get wrong results!  
 +-----.OOOo--()--oOOO.------------------------------------------+
 |             VASPKIT Version: 1.12 (01 Mar. 2020)              |
 |        Core Developer: Vei WANG (wangvei@icloud.com)          |
 |     Main Contributors: Nan XU, Jin-Cheng LIU & Gang TANG      |
 |    Please send Bugs and Suggestions to vaspkit@gmail.com      |
 +-----.oooO-----------------------------------------------------+
        (   )   Oooo.     
         \ (    (   )     
          \_)    ) /      
                (_/       
 ===================== Structural Options ========================
 1)  VASP Input Files Generator    2)  Elastic-Properties         
 3)  K-Path Generator              4)  Structure Editor           
 5)  Catalysis-ElectroChem Kit     6)  Symmetry Search            
 
 ===================== Electronic Options ========================
 11) Density-of-States             21) DFT Band-Structure         
 23) 3D Band-Structure             25) Hybrid-DFT Band-Structure  
 26) Fermi-Surface                 28) Band-Structure Unfolding   
 
 =========== Charge & Potential & Wavefunction Options ===========
 31) Charge & Spin Density         42) Potential-Related          
 51) Wave-Function Analysis  
 ====================== Misc Utilities ===========================
 71) Optical-Properties            72) Molecular-Dynamics Kit 
 73) VASP2other Interface          74) USER interface
 91) Semiconductor Calculator      92) 2D-Materials Kit       
                                                                  
 0)  Quit                                                         
 ------------>>
3
 ===================== K-Path Options ============================
 301) 1D Nano Structure
 302) 2D Nano Structure (Experimental)
 303) 3D bulk structure (Experimental)
 304) Phonopy K-Path for 2D Nano Structure (Experimental)
 
 0) Quit                                              
 9) Back                                              
 ------------>>
303
 +-------------------------- Warm Tips --------------------------+
   The suggested K-Path is only for standardized primtive cell.
   It is for reference only and you can manually modify K-Path.
 +---------------------------------------------------------------+
 +-------------------------- Warm Tips --------------------------+
     See An Example in vaspkit/examples/seek_kpath/GaAs_bulk.        
   The suggested K-Path is only for standardized primtive cell.
 This Feature is Experimental & Check Your System using SeeK-Path.       
 For More details See [www.materialscloud.org/work/tools/seekpath].
 +---------------------------------------------------------------+
  -->> (01) Reading Structural Parameters from POSCAR File...
 +-------------------------- Summary ----------------------------+
                           Prototype: AB
           Total Atoms in Input Cell:   8
     Lattice Constants in Input Cell:   5.620   5.620   5.620
        Lattice Angles in Input Cell:  90.000  90.000  90.000
       Total Atoms in Primitive Cell:   2
 Lattice Constants in Primitive Cell:   3.974   3.974   3.974
    Lattice Angles in Primitive Cell:  60.000  60.000  60.000
                      Crystal System: Cubic
                       Crystal Class: m-3m
                     Bravais Lattice: cF
            Extended Bravais Lattice: cF2
                         Space Group: 225
                         Point Group: 32 [ Oh ]
                       International: Fm-3m
                 Symmetry Operations: 192
                    Suggested K-Path: (shown in the next line)
 [ Gamma-X-U|K-Gamma-L-W-X ]
 +---------------------------------------------------------------+
  -->> (02) Written PRIMCELL.vasp file.
  -->> (03) Written HIGH_SYMMETRY_POINTS File for Reference.
  -->> (04) Written POTCAR File with the Recommended Potential!
  -->> (05) Written KPATH.in File for Band-Structure Calculation.
 +----------------------------WARNING----------------------------+
 | Do NOT forget to copy PRIMCELL.vasp to POSCAR unless you know |
 |   what you are doing. Otherwise you might get wrong results!  |
 +---------------------------------------------------------------+
 +---------------------------------------------------------------+
 |                       * ACKNOWLEDGMENTS *                     |
 | Other Contributors: Xue-Fei LIU, Peng-Fei LIU, Dao-Xiong WU,  |
 | Zhao-Fu ZHANG, Tian WANG, Ya-Chao LIU, Qiang LI, iGo and You! |
 +---------------------------------------------------------------+
 |                          * CITATIONS *                        |
 | We Would Appreciate if You Cite in Your Research with VASPKIT.|
 | [1] V. Wang, N. Xu, J.C. LIU, G. Tang, et al, VASPKIT: A Pre- |
 | and Post-Processing Program for VASP Code, arXiv:1908.08269.  |
 +---------------------------------------------------------------+
[zjb@op NaCl]$ 

```

之后这个目录会有如下文件：

```
[zjb@op NaCl]$ ll
total 400
-rw-r--r-- 1 zjb energy    957 Oct 31 21:02 HIGH_SYMMETRY_POINTS
-rw-r--r-- 1 zjb energy    860 Oct 31 21:03 KPATH.in
-rw-r--r-- 1 zjb energy   4008 Oct 30 16:14 NaCl_import.cif
-rw-r--r-- 1 zjb energy    706 Oct 30 16:19 NaCl.vasp
-rw-r--r-- 1 zjb energy    706 Oct 31 21:02 POSCAR
-rw-r--r-- 1 zjb energy 404221 Oct 31 21:03 POTCAR
-rw-r--r-- 1 zjb energy    382 Oct 31 21:02 PRIMCELL.vasp
```

这样就生成了`POACAR`和`POTCAR`。

```shell 
[zjb@op NaCl]$ cat POSCAR 
NaCl_import
1.0
        5.6199998856         0.0000000000         0.0000000000
        0.0000000000         5.6199998856         0.0000000000
        0.0000000000         0.0000000000         5.6199998856
   Na   Cl
    4    4
Direct
     0.000000000         0.000000000         0.000000000
     0.000000000         0.500000000         0.500000000
     0.500000000         0.000000000         0.500000000
     0.500000000         0.500000000         0.000000000
     0.500000000         0.500000000         0.500000000
     0.500000000         0.000000000         0.000000000
     0.000000000         0.500000000         0.000000000
     0.000000000         0.000000000         0.500000000
```

> 值得一提的是，这两种方法生成的`POSCAR`有细小的差别，似乎是四舍五入导致的，老师更推荐第二种（VESTA）。

## INCAR

接着最开始的`O2分子`，依次执行`VASPKIT`选择`101`，然后选择`INCAR选项`，就生成了INCAR文件

```
 ------------>>
101
 +-------------------------- Warm Tips --------------------------+
                You MUST Know What You Are Doing
  Some Parameters in INCAR File Neet To Be Set/Adjusted Manually      
 +---------------------------------------------------------------+
 ======================== INCAR Options ==========================
 ST) Static-Calculation            SR) Standard Relaxation        
 MG) Magnetic Properties           SO) Spin-Orbit Coupling         
 D3) DFT-D3 no-damping Correction  H6) HSE06 Calculation         
 PU) DFT+U Calculation             MD) Molecular Dynamics        
 GW) GW0 Calculation               BS) BSE Calculation  
 DC) Elastic Constant              EL) ELF Calculation       
 BD) Bader Charge Analysis         OP) Optical Properties        
 EC) Static Dielectric Constant    PC) Decomposed Charge Density   
 FD) Phonon-Finite-Displacement    DT) Phonon-DFPT            
 NE) Nudged Elastic Band (NEB)     DM) The Dimer Method             
 FQ) Frequence Calculations        LR) Lattice Relaxation          
 
 0)   Quit                                                       
 9)   Back      
 ------------>>
 Input Key-Parameters (STH6D3 means HSE06-D3 Static-Calcualtion)
SR
 INCAR parameters are from user-specified Global.
 INCAR parameters are from user-specified SR.
  -->> (01) Written INCAR file!
 +---------------------------------------------------------------+
 |                       * ACKNOWLEDGMENTS *                     |
 | Other Contributors: Xue-Fei LIU, Peng-Fei LIU, Dao-Xiong WU,  |
 | Zhao-Fu ZHANG, Tian WANG, Ya-Chao LIU, Qiang LI, iGo and You! |
 +---------------------------------------------------------------+
 |                          * CITATIONS *                        |
 | We Would Appreciate if You Cite in Your Research with VASPKIT.|
 | [1] V. Wang, N. Xu, J.C. LIU, G. Tang, et al, VASPKIT: A Pre- |
 | and Post-Processing Program for VASP Code, arXiv:1908.08269.  |
 +---------------------------------------------------------------+
[zjb@op O2_opt]$ 

```

之后我们打开`INCAR`进行进一步修改，

```
Global Parameters
ISTART =  1            (Read existing wavefunction; if there)
# ISPIN =  2           (Spin polarised DFT)
# ICHARG =  11         (Non-self-consistent: GGA/LDA band structures)
LREAL  = Auto          (Projection operators: automatic)
# ENCUT  =  400        (Cut-off energy for plane wave basis set, in eV)
PREC   =  Normal       (Precision level)
LWAVE  = .TRUE.        (Write WAVECAR or not；是否写入波函数)
LCHARG = .TRUE.        (Write CHGCAR or not)
ADDGRID= .TRUE.        (Increase grid; helps GGA convergence)
# LVTOT  = .TRUE.      (Write total electrostatic potential into LOCPOT or not)
# LVHAR  = .TRUE.      (Write ionic + Hartree electrostatic potential into LOCPOT or not)
# NELECT =             (No. of electrons: charged cells; be careful)
# LPLANE = .TRUE.      (Real space distribution; supercells)
# NPAR   = 4           (Max is no. nodes; don't set for hybrids)
# NWRITE = 2           (Medium-level output)
# KPAR   = 2           (Divides k-grid into separate groups)
# NGX    = 500         (FFT grid mesh density for nice charge/potential plots)
# NGY    = 500         (FFT grid mesh density for nice charge/potential plots)
# NGZ    = 500         (FFT grid mesh density for nice charge/potential plots)


ISIF   =  2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
Electronic Relaxation
ISMEAR =  0            (Gaussian smearing; metals:1)
SIGMA  =  0.05         (Smearing value in eV; metals:0.2)
NELM   =  60           (Max electronic SCF steps)
NELMIN =  6            (Min electronic SCF steps)
EDIFF  =  1E-08        (SCF energy convergence; in eV)
# GGA  =  PS           (PBEsol exchange-correlation)

Ionic Relaxation
NSW    =  100          (Max electronic SCF steps)
IBRION =  2            (Algorithm: 0-MD; 1-Quasi-New; 2-CG)
#ISIF   =  2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)
EDIFFG = -2E-02        (Ionic convergence; eV/AA)
# ISM =  2            (Symmetry: 0=none; 2=GGA; 3=hybrids)

~ 
~
~
```

这些具体的意义记不清了，查`VASP手册`吧...

## KPOINTS

`vaspkit`-`1`，然后，`102) Generate KPOINTS File for SCF Calculation  `

```
------------>>
102
 ======================= K-Mesh Scheme ==========================
 1) Monkhorst-Pack Scheme                            
 2) Gamma Scheme                                     
                                                     
 0)   Quit                                             
 9)   Back                                             
 ------------->>
1                # 在这里选择方法
  -->> (01) Reading Structural Parameters from POSCAR File...
 +---------------------------------------------------------------+
 |               Selective Dynamics is Activated!                |
 +---------------------------------------------------------------+
 +-------------------------- Warm Tips --------------------------+
   * Accuracy Levels: Gamma-Only: 0;              
                      Low: 0.06~0.04;             
                      Medium: 0.04~0.03;          
                      Fine: 0.02-0.01.            
   * 0.03-0.04 is Generally Precise Enough!                
 +---------------------------------------------------------------+
 Input Kmesh-Resolved Value (in unit of 2*PI/Angstrom): 
 ------------>>
0.04            # 在这里输入精度
 +-------------------------- Summary ----------------------------+
 Reciprocal Lattice Vectors (in unit of 1/angstrom):
       0.6283185307       0.0000000000       0.0000000000
       0.0000000000       0.5235987756       0.0000000000
       0.0000000000       0.0000000000       0.4188790205
 Reciprocal Lattice Constants:   0.6283   0.5236   0.4189
 Real-Space Lattice Constants:  10.0000  12.0000  15.0000
 Size of K-Mesh:    1    1    1
 +---------------------------------------------------------------+
  -->> (02) Written KPOINTS File!
  -->> (03) Written POTCAR File with the Recommended Potential!
 +---------------------------------------------------------------+
 |                       * ACKNOWLEDGMENTS *                     |
 | Other Contributors: Xue-Fei LIU, Peng-Fei LIU, Dao-Xiong WU,  |
 | Zhao-Fu ZHANG, Tian WANG, Ya-Chao LIU, Qiang LI, iGo and You! |
 +---------------------------------------------------------------+
 |                          * CITATIONS *                        |
 | We Would Appreciate if You Cite in Your Research with VASPKIT.|
 | [1] V. Wang, N. Xu, J.C. LIU, G. Tang, et al, VASPKIT: A Pre- |
 | and Post-Processing Program for VASP Code, arXiv:1908.08269.  |
 +---------------------------------------------------------------+
```

通常情况下，生成`KPOINTS`的同时，会根据推荐赝势生成`POTCAR`。如果你的没有生成，则进入下一步。

## POTCAR

`vaspkit`-`1`-`103`。`103) Generate POTCAR File with Default Setting`

## 很简单了

到此为止VASP运行所需要的四个输入文件就全都准备好了，我们就可以提交这个作业了。

将`PBS脚本`复制到当前目录，然后使用`qsub`命令提交作业。

```
qsub -N O2_opt vasp.pbs
```

