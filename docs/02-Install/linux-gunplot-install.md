# 使用默认GCC编译gunplot

```shell
cd /tmp
wget https://jaist.dl.sourceforge.net/project/gnuplot/gnuplot/5.2.5/gnuplot-5.2.5.tar.gz
tar xzvf gnuplot-5.2.5.tar.gz 
cd gnuplot-5.2.5/
./configure --prefix=/public/home/zjb/app/gunplot/
make & make install
```

第五行等号后面是你的目标安装路径