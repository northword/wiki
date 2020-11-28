# INCAR 中的常用标签

整理一些常用的碰到的tags，没有的依然是返回VASP手册咯；整理了的都是最简单的信息，更多信息也是查手册咯。

标签名似乎也有一些规律，如以 L 开头的几乎都是逻辑（Logic）标签，取值都是布尔；

与常规编程不同，INCAR中所有标签的取值，字符串类型无需加引号，如`SYSTEM = O2_geo`；布尔类型应在两端加上`.`，如`LWAVE = .FALSE.`；

介绍几种必要的数据类型（仅是为了方便我理解，这个并不用会）：

| 类型 | 中文名   | 值域           | 备注                                  |
| ---- | -------- | -------------- | ------------------------------------- |
| INT  | 16位整型 | -32768～+32767 | VASP的int类型通常指定了仅有的几种取值 |
| REAL | 实型     | -2^128 ~ 2^128 |                                       |
| BOOL | 布尔     | 0或1           | VASP中用`.TURE.`和`.FALSE.`           |
|      |          |                |                                       |

---



## SYSTEM

取值：字符串

缺省值：` unknown system `

描述：用来备注计算的体系，其值会被写入`OUTCAR`中。

## ISIF

取值：ISIF = `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7`

缺省值：`0` (当IBRION=0，分子动力学时；否则为`2`)

描述：1 有哪些需要算，2 有哪些自由度可以优化。

决定是否计算应力张量，以及允许哪些主要自由度改变弛豫和分子动力学。

| ISIF | calculate |               | degrees-of-freedom |            |             |
| ---- | --------- | ------------- | ------------------ | ---------- | ----------- |
|      | forces    | Stress tensor | positions          | cell shape | cell volume |
| 0    | yes       | no            | yes                | no         | no          |
| 1    | yes       | trace only    | yes                | no         | no          |
| 2    | yes       | yes           | yes                | no         | no          |
| 3    | yes       | yes           | yes                | yes        | yes         |
| 4    | yes       | yes           | yes                | yes        | no          |
| 5    | yes       | yes           | no                 | yes        | no          |
| 6    | yes       | yes           | no                 | yes        | yes         |
| 7    | yes       | yes           | no                 | no         | yes         |

## ISTART

取值：0 | 1 | 2 | 3

缺省值：如果`WAVECAR`存在，则为`1`，否则为`0`

描述：是否读取`WAVECAR`

| ISTART | function          |
| ------ | ----------------- |
| 0      | 从头开始          |
| 1      | 从WAVECAR读取轨道 |
| 2      |                   |
| 3      |                   |



## ISPIN

取值：1 | 2

缺省：1

描述：自旋极化

ISPIN = 1 ：不自旋

ISPIN = 2 ：自旋

与`MAGMOM`结合，可以研究共线磁性

## ICAHARG

取值：0 | 1 | 2 | 4

缺省：ICHARG=2 if ISTART=0，=0 else

描述：决定VASP如何构造初始电荷密度

### ICHARG=0

从初始波函数计算电荷密度。如果因为无效WAVECAR导致ISTART重置，则ICHARG会被设置为2。

### ICHARG=1

从CHGCAR读取电荷密度，使用原子电荷密度的线性组合从旧位置（在CHGCAR上）外推到新位置。

### ICHARG=2

原子电荷密度叠加

### +10：非自洽计算







## LWAVE

取值：布尔

缺省值：`.TRUE.`

描述：是否将波函数写入`WAVECAR`

## LCHARG

取值：布尔

缺省值：`.TRUE.`

描述：是否将电荷密度写入`CHGCAR`和`CHG`

## EDIFF



## EDIFFG

取值：real

缺省值：`EDIFF`x10

描述：离子弛豫的收敛标准

如果为正，表示两个离子步骤之间的总（自由）能变化小于`EDIFFG`时停止弛豫。

如果为负，则原子所受最大力小于`|EDIFFG|`时停止弛豫。

## NSW

取值：int

缺省值：`0`

描述：离子步的最大步数

IBRION = 0时，NSW给出了所有从头开始的Molecular Dynamics运行的步骤数，因此必须提供它，否则VASP在启动后立即崩溃。

IBRION != 0时，在所有最小化算法（准牛顿，共轭梯度和阻尼分子动力学）中，NSW定义了最大离子步数。

## IBRION

取值：