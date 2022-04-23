初学者：
1、	安装nodejs
2、	安装cnpm: npm install -g cnpm --registry=https://registry.npmmirror.com
3、	安装yarn：npm install -g yarn
4、	安装vue-cli脚手架: npm install -g @vue/cli
5、	创建项目：(项目名称不能有大写字母)vue create vue-manage
6、	启动项目：项目下npm run serve
7、	全局安装element ：npm i element-ui -S
8、	打包：npm run build
9、	按需引入,辅助插件：npm install babel-plugin-component -D


1、	引入路由：npm i vue-router@3.2.0

修改了三个地方
1，把登录方法中传递router的参数给删除了，直接在tab.js通过import的方式来引用
2，把permission.js中的菜单数据的url做了修改，使其符合路径的方式，动态添加路由肯定需要知道其路径，比如../../views/user/index，
因为views目录不在src目录里，不可以使用@/views/user/index的方式，如果router目录在src目录下，在tab.js中引用router对象，可以直接写import router from '@/router';
3，在tab.js中，先把菜单数据转换为route数据，主要是属性，比如name，meta，path，component等；再从route数据中挑选出真正的路由数据，因为父节点是没有path数据的，不能进行路由跳转；
最后再往router对象中添加路由：dynamicRoutes.forEach(route => router.addRoute("Main", route));