windows
1、打开当前目录文件夹  start .
2、新建目录 mkdir(md) file 
3、删除文件 rd(rmdir) /s（subdirectory） /q（quit）
4、文件夹显示隐藏文件 查看-选项-查看
5、删除文件进程  	任务管理器-资源监视器-关联的句柄-文件夹名
6、软件安装位置 	程序和功能-（名称行右键）其他-（选择）位置
7、netstat -a 	查询开启端口
8、path=%path%;C:\Python 	//新增环境变量
9、打开网页 		//explorer url
10、新建文件		
		echo [fileContent] > *.*		//有内容
		type nul > *.*		//空
11、c盘文件权限修改
		文件右键-属性-安全-编辑
12、查询系统变量	set varName
13、查看版本		//webpack --version
14、在此处打开PowerShell的选项	- 摁住shift+鼠标右键

linux
1、新建文件/目录	//touch


git 
	克隆代码
	a、git clone git@github:server-name/repository.git（或复制）
	b、git push -u origin master  首次提交（关联远程分支）
	   git push origin 提交
	   
	配置
	git config --global(or system or local) --list
	
	暂存区改动提交本地版本库
	git commit -m “message”

npm
1. npm list mysql		//查询模块版本
2. npm config list     	//查看配置(淘宝镜像)
3. npm config delete registry	//删除registry
4. npm install -g moduleName		//全局安装	uninstall
5. npm i <moduleName>			//本地安装


webpack
1. webpack --mode development/production		//运行

