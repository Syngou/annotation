# 医疗文本标注和处理系统
## 拟开发的功能
* 机器学习自动化标注
* 实体标注  
* 属性标注
* 关系标注
* 翻译功能


>  本项目处于开发阶段，目前还用不了  
> 界面UI后期会美化,现在先搞好功能  
> 为了适配django，修改了一些webpack配置，改变了vue打包静态文件的位置  
> 给后台发送数据时所用的url地址，需要修改的可以去frontend->src->network->request.js中修改
> 所有与网络请求相关的功能都封装在这里了


## 开发环境一览:

| 项目 | 版本号 |
| ----| ----|
|python |3.9|
|django|3.1.3|
| npm|6.14.8|
| vue/cli| 4.5.9|  



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
* 如果要搞后端，还要再输入以下命令
```
npm run build
cd ..
python manage.py runserver
```
* 在浏览器地址栏输入127.0.0.1:8000（注意输入的所有标点都必须是英文的！）


## License  
MIT