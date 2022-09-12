---
title: PBS
date: 2020-10-31 18:00:00
permalink: /dft-learning/pages/832cb5/
category:
  - Linux

updated: 2022-09-12 20:13:59
---

# PBS

作业一般会提交到超算集群上进行计算。在集群上，一般不能随意地直接以 mpirun 运行我们的并行计算程序，而必须通过其上提供的作业管理系统来提交计算任务。集群作业管理系统可以根据用户的需求，统一管理和调度集群的软硬件资源，保证用户作业公平合理地共享集群资源，提高系统利用率和吞吐率。

PBS 就是其中一种解决方案，作业通过 PBS 命令提交到 PBS 队列中，然后经由 PBS 分配资源运行。

## PBS 命令

### 提交作业

用以下命令提交作业：

```bash
qsub [options] <control script>
```

命令执行后会返回一个作业 ID。如：

```bash
[zjb@op back]$ qsub -N thisIsName vasp.pbs
201848.inode202
```

作业提交后一般会先排队等待，PBS 系统会根据作业的优先级和可用的计算资源来调度和执行作业。

其中 `-N thisIsName` 为选项，它指定了作业的名称。`vasp.pbs` 为 PBS 脚本，它设定了作业的属性和作业的内容。`options` 与 `control script` 详见 PBS 脚本 。

> 文档中，命令带有 `` 符号的，表示是在 shell 终端输入的命令，实际输入的时候不需要带有这个符号。

### 查看任务

```bash
qstat [option] <jobid>
```

如：

```bash
[zjb@op back]$ qstat
Job ID                    Name             User            Time Use S Queue
------------------------- ---------------- --------------- -------- - -----
201848.inode202            thisIsName       zjb             00:00:00 C energy         
```

其中，`S` 表示任务的状态，有如下几种状态：

| 状态 (S) | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| B       | 只用于任务向量，表示任务向量已经开始执行                     |
| E       | 任务在运行后退出                                             |
| H       | 任务被服务器或用户或者管理员阻塞                             |
| **Q**   | **任务正在排队中，等待被调度运行**                           |
| **R**   | **任务正在运行**                                             |
| **C**   | **任务完成**                                                 |
| S       | 任务被服务器挂起，由于一个更高优先级的任务需要当前任务的资源 |
| T       | 任务被转移到其它执行节点了                                   |
| U       | 由于服务器繁忙，任务被挂起                                   |
| W       | 任务在等待它所请求的执行时间的到来 (qsub -a)                  |
| X       | 只用于子任务，表示子任务完成                                 |

### qstat 的选项

| 命令             | 说明                   |
| ---------------- | ---------------------- |
| qstat -q         | 列出所有队列           |
| qstat -a         | 列出所有作业           |
| qstat -u user_id | 列出 user_id 的所有作业  |
| qstat -r         | 列出所有正在运行的作业 |
| qstat -f job_id  | 列出作业 job_id 的信息   |
| qstat -fQ queue  | 列出队列 queue 的信息    |
| qstat -B         | 列出所有作业状态的汇总 |
| pbsnodes         | 列出所有节点的详细信息 |
| pestat           | 列出所有节点的状态     |

### 取消任务

```bash
qdel <jobid>
```

### 停止正在运行的任务

```bash
qsig -s KILL <job ID>
```

### checkjob

```bash
checkjob <job id>
```

注意这儿的 `job id` 不包括 `.inodexxx`，比如上述的 `201848.inode202` 作业，如果使用 `checkjob` 查询，命令应为 `checkjob 201848`。

```bash
[zjb@op testEnergy]$ checkjob 201848

checking job 201848

State: Running
Creds:  user:zjb  group:energy  account:SugonClus  class:energy  qos:preemptee
WallTime: 00:02:03 of 00:30:00
SubmitTime: Sat Oct 31 19:45:48
  (Time Queued  Total: 00:00:01  Eligible: 00:00:01)

StartTime: Sat Oct 31 19:45:49
Total Tasks: 4

Req[0]  TaskCount: 4  Partition: DEFAULT
Network: [NONE]  Memory >= 0  Disk >= 0  Swap >= 0
Opsys: [NONE]  Arch: [NONE]  Features: [NONE]
Allocated Nodes:
[inode53:4]

IWD: [NONE]  Executable:  [NONE]
Bypass: 0  StartCount: 1
PartitionMask: [ALL]
Flags:       BACKFILL RESTARTABLE PREEMPTEE
Attr:        PREEMPTEE

Reservation '201868' (-00:02:04 -> 00:27:56  Duration: 00:30:00)
PE:  4.00  StartPriority:  6000
```

如果任务无法运行，可以这样查询原因。

### pbsnodes

查看节点的空闲情况。有 `free`、`busy`、`down` 等状态。

## PBS 脚本

PBS 脚本实际上是一个 linux shell 脚本，在 PBS 脚本中可以用一种特殊形式的注释（#PBS）作为 PBS 指令以设定作业属性。下面是一个 PBS 脚本示例：

```bash
#!/bin/sh
#PBS -N Untitled
#PBS -l nodes=1:ppn=4
#PBS -l walltime=00:10:00
#PBS -j oe
#PBS -o ./out.log

cd ${PBS_O_WORKDIR}
source /public/software/profile.d/compiler_intel-composer_xe_2015.2.164.sh
source /public/software/profile.d/mpi_intelmpi-5.0.2.044.sh
echo "============================================="
echo "Starting VASP run at" `date` 
echo "============================================="
echo "# SYSTEM INFO"
echo 'The hostname is ' `hostname`  
grep 'Linux' /etc/issue 
grep 'model name' /proc/cpuinfo |cut -d: -f2 |uniq -c
grep 'cpu M' /proc/cpuinfo 
grep 'MemTotal' /proc/meminfo
echo "============================================="
echo "# PBS INFO"
echo "The PBS_O_WORKDIR is" $PBS_O_WORKDIR
echo "The PBS_JOBID is" $PBS_JOBID
echo "The PBS_O_QUEUE is" $PBS_O_QUEUE
echo "The PBS_O_HOST is" $PBS_O_HOST
NP=`cat $PBS_NODEFILE | wc -l`
echo "The num of PBS_NODEFILE is" $NP
echo "The PBS_NODEFILE IS:" 
cat $PBS_NODEFILE
mpirun -np $NP -machinefile $PBS_NODEFILE /public/software//apps/vasp/5.4.1/intelmpi/vasp_std >& stdout
echo "============================================="
echo "End task at " `date`  
echo "============================================="
```

### PBS 作业属性

| 属性 | 取值                      | 说明                                                         |
| ---- | ------------------------- | ------------------------------------------------------------ |
| -l   | 资源列表                  | 设定作业所需资源，以逗号分隔                                 |
| -N   | 作业名称                  | 设定作业的默认名称                                           |
| -o   | 文件路径                  | 设定作业的标准输出文件路径                                   |
| -e   | 文件路径                  | 设定作业的标准错误文件路径                                   |
| -j   | oe 或 eo                    | oe: 将标准错误文件与标准输出文件合并成标准输出文件。eo: 将标准错误文件和标准输出文件合并成标准错误文件 |
| -p   | -1024 到 +1023 之间的整数 | 设定作业优先级，越大优先级越高                               |
| -q   | 队列名称                  | 设定作业队列名称                                             |

### 资源列表

| 资源     | 取值                           | 说明                                                         |
| -------- | ------------------------------ | ------------------------------------------------------------ |
| nodes    | 节点资源构型                   | 设定作业所需计算节点资源                                     |
| walltime | hh: mm: ss                       | 设定作业所需的最大 wallclock 时间                            |
| cput     | hh: mm: ss                       | 设定作业所需的最大 CPU 时间                                  |
| mem      | 正整数，后面可跟 b，kb，mb，gb | 设定作业所需的最大内存 ncpus 正整数 设定作业所需的 CPU 数目 |

### PBS 常用环境变量

| 环境变量        | 说明                                                 |
| --------------- | ---------------------------------------------------- |
| PBS_ENVIRONMENT | 批处理作业为 PBS_BATCH，交互式作业为 PBS_INTERACTIVE |
| PBS_JOBID PBS   | 系统给作业分配的标识号                               |
| PBS_JOBNAME     | 用户指定的作业名称                                   |
| PBS_NODEFILE    | 包含作业所用计算节点的文件名                         |
| PBS_QUEUE       | 作业所执行的队列名称                                 |
| PBS_O_HOME      | 执行 qsub 命令的 HOME 环境变量值                     |
| PBS_O_PATH      | 执行 qsub 命令的 PATH 环境变量值                     |
| PBS_O_SHELL     | 执行 qsub 命令的 SHELL 环境变量值                    |
| PBS_O_HOST      | 执行 qsub 命令节点名称                               |
| PBS_O_QUEUE     | 提交的作业的最初队列名称                             |
| PBS_O_WORKDIR   | 执行 qsub 命令所在的绝对路径                         |
