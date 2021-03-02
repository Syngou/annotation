# 医疗文本标注和处理系统

>  本项目处于开发阶段，目前还用不了  
> 考虑到静态资源，路由等因素，本项目采用前后端分离   
> 所写接口仅为前后端交互的示例，可以按实际情况进行修改  
> 界面UI后期再美化  
## 拟开发的功能
* 机器学习自动化标注
* 实体标注  
* 属性标注
* 关系标注
* 翻译功能

## 开发环境一览:

| 项目 | 版本号 |
| ----| ----|
|python |3.9|
|django|3.1.3|
|node|14.15.3|


> 开发环境不一定要一模一样，版本相近即可  
> 如果想使用yarn的话，可以将package-lock.json文件删除后再运行yarn  

## 使用方法
* 下载或克隆源码
* 在命令行中进入到frontend文件夹中
* 在命令行中输入以下命令，会打开前端页面
```
npm install
npm run serve
```
* 接下来就是整合数据库了，这里使用django自带的sqlite
* 想使用其他数据库的可以自行修改
* 弄好数据库后，在命令行运行一下命令（有manage.py的文件夹路径下）
```
python manage.py runserver
```
* 接着用前端页面试着标注几个词，然后发送给后台看看效果
## License  
MIT
