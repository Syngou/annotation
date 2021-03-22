# 医疗文本标注和处理系统
## 简介
医疗文本标注，包含标注，后台管理，错误分析等功能，可自定义标注分类及标签颜色
> 本项目目前处于开发阶段  
> 为避免频繁打包，在开发阶段采用前后端分离，到部署时再合并   
> 所写接口仅为前后端交互的示例，可以按实际情况进行修改  
## 拟开发的功能
* 机器学习自动化标注
* 实体标注  
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
* 新建终端，进入到 manage.py 文件所在目录
* 先安装一下这个包
```
pip install django-cors-headers
```
* 然后执行以下命令运行后端服务器
```
python manage.py runserver
```
## License  
MIT
