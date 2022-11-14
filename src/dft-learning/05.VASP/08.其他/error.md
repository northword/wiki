---
title: VASP 运行中的错误
date: 2022-11-10 18:50:47
permalink: /dft-learning/vasp/error/
updated: 2022-11-10 18:59:48
---

# VASP 运行中的错误

## Error EDDDAV: Call to ZHEGV failed. Returncode = xx

这是对角化例程的错误。您可以尝试切换到不同的方法（即 ALGO）或使用倒数第二步的位置而不是最后一步。查看结构（例如在 VESTA 中）以确保它仍然看起来像您期望的那样也很有帮助。偶尔会发生两个原子在弛豫过程中彼此靠近的情况。特别要检查离子循环内的所有电子迭代是否收敛。

参考：[Re: on solving "Error EDDDAV: Call to ZHEGV failed. Returncode = xx" (vasp.at)](https://www.vasp.at/forum/viewtopic.php?t=10409#p19031)

## forrtl: severe (174): SIGSEGV, segmentation fault occurred

分段错误，疑似是系统堆栈限制过小导致，使用 `ulimit -s unlimited` 解决，但这只能解决当前 shell 的 mpirun，不能解决下次登录 shell 运行 mpirun 以及 PBS 调度计算节点的堆栈大小。

参考 [PBS 解除堆栈大小限制](../../03.Linux/PBS#解除堆栈大小限制) 解决。
