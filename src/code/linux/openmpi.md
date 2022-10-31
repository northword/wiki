---
title: Openmpi
date: 2022-10-31 17:39:36
permalink: /code/linux/openmpi/
updated: 2022-10-31 18:22:29
---

# Openmpi

## 各种乱七八糟的报错

```
libi40iw-i40iw_ucreate_qp: failed to create QP, unsupported QP type: 0x4
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

You job will continue, but Open MPI will ignore the "ud" oob component
in this run.

Hostname: compute-0-9
--------------------------------------------------------------------------
```

解决：

```
Put “oob=tcp” in your default MCA param file
```

新建 `~/.openmpi/mca-params.conf`，写入 `oob=tcp` 即可。

MCA param file：

- `$HOME/.openmpi/mca-params.conf`: This is the user-supplied set of values, which has the highest precedence.
- `$prefix/etc/openmpi-mca-params.conf`: This is the system-supplied set of values, which has a lower precedence.

参考：

- [ORCA集群上运行BSUB脚本求助 - 量子化学 (Quantum Chemistry) - 计算化学公社 (keinsci.com)](http://bbs.keinsci.com/thread-9036-1-1.html)
- [[OMPI users] Failed to register memory (openmpi 2.0.2) (narkive.com)](https://users.open-mpi.narkive.com/HK7mhAoT/ompi-failed-to-register-memory-openmpi-2-0-2#post2)
- [Setting MCA parameters - IBM Documentation](https://www.ibm.com/docs/en/smpi/10.2?topic=environment-setting-mca-parameters)
