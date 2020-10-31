输入文件包括POSCAR、INCAR、KPOINTS、POTCAR。注意大小写，因为linux时严格区分大小写的系统。



## POSCAR

首先准备好POSCAR文件：

```
O2 molecule   #注释行
10            #
1.0 0.0 0.0   #
0.0 1.0 0.0
0.0 0.0 1.0
O             #元素类别
2             #原子数量
Direct        #坐标类别：直角/笛卡尔
0.5 0.5 0.5   #
0.5 0.5 0.623
```

## INCAR

之后由VASPKIT生成其余三个文件，在工作目录键入命令`vaspkit`以启动，下为启动面板：

![image-20201022140535378](assets/image-20201022140535378.png)

选择`1`，以生成Input Files。

![image-20201022140626483](assets/image-20201022140626483.png)

选择`101`以生成INCAR文件

![image-20201022140743419](assets/image-20201022140743419.png)

ST：静态计算；