# 1. 项目介绍
>一个待办事项的项目(类似iphone的提醒事项)

>用来学习vuex

# 2. 技术/资源
>项目构建:vue+vue-Router+vuex

>图标:iconfont

>过渡动画:animate.css

>正则表达式:判断用户名是否为空

# 3. vuex目录说明

<!-- TOC -->autoauto- [1. 项目介绍](#1-项目介绍)auto- [2. 技术/资源](#2-技术资源)auto- [3. vuex目录说明](#3-vuex目录说明)auto- [4. 小结：](#4-小结)autoauto<!-- /TOC -->

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