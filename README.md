# 1. 项目介绍
>一个待办事项的项目(类似iphone的提醒事项)

>已有功能
- 添加删除事项
- 对添加事项的分类
- 修改用户信息(昵称/个签)

>后期想扩展的功能
- 接后台，实现账号登陆
- 做成PWA版本，并添加时间提醒，和按时间分类


# 2. 技术/资源
>项目构建:vue+vue-Router+vuex

>图标:iconfont

>过渡动画:animate.css

>正则表达式:判断用户名是否为空

>版本控制:git

# 3.目录说明

## 3.1项目目录

```
|-src
    |---assets  //存放图标和全局css(虽然并没有)和animate.css
    |---store   //vuex目录 见下
    |---view    //页面
        |---Home.vue        //首页
        |---Card.vue        //分类页组件---根据首页跳转时传递的参数渲染不同的数据
        |---Setting.vue     //设置页
    |---App.vue 
    |---main.js
    |---router   //路由文件
```

## 3.2vuex目录
```
|-store
    |---store.js      //vuex主文件  存放全局的数据
    |---mutations.js  //vuexroot模块的mutations  存放对数据的操作
    |---actons.js     //vuexroot模块的actions(暂时没用)
    |———modules       //state模块文件夹(存储事项分类,单独管理各自分类的内容)
        |---items.js  //存放用户添加的事项数据模块
```


# 4. 小结：
>在swiper配置项的事件函数内，获取vue实例
- 1
```javascript
...
data(){
    let vm=this;
    return{
        name:'swiper',
        swiperOption: {
            on: {
            // swiper 当切换到下一页时 执行该函数
                slideChangeTransitionEnd:function () {
                    console.log(this);// swiper对象
                    cosnole.log(vm); //当前组件对象
                },
            }
      }
    }
}
...
```
- 2
```javascript
...
data(){
    return{
        name:'swiper',
        swiperOption: {
            on: {
                slideChangeTransitionEnd:() =>{
                    console.log(this);// 当前组件对象
                },
            }
      }
    }
}
...
```

>判断用户名是否为空
```javascript
// html
...
<input type="text" ref="name">
<button @click='ok'>ok</button>
...

// js
...
methods:{
    ok() {
        let vm = this;
        // 1.获取输入的值
        let name=this.$refs.name.value;
        // 2.定义正则表达式
        var reg = /^\s*|\s*$/g;
        // 3.进行判断
        if (name.replace(reg, "") == "") {
            alert("请输入用户名");
            return false;
        } else {
            // 提交表单或者等等操作
        }
    }
}
...

```