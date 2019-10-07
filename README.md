# 项目介绍
>一个待办事项的项目

# 技术栈
>vue+vue-Router+vuex

>iconfont

# 小结：
>在swiper配置项的事件函数内，获取vue实例
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