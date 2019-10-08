<template>
  <div class="home" ref="target">
    <ul class="nav">
      <li>
        <span class="iconfont icon-icon-test1" @click="goSetting"></span>
      </li>
      <li class="tittle">TODO</li>
      <li>
        <span class="iconfont icon-search"></span>
      </li>
    </ul>
    <!-- 渲染用户信息 -->
    <ul class="user">
      <li v-for="(item,index) in $store.state.user" :key="index">{{item}}</li>
    </ul>
    <!-- 轮播 -->
    <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
      <swiper-slide ref="slide" class="swiper-slide" v-for="(item,index) in cards" :key="index">
        <p>
          <span :class="item.icon"></span>
        </p>
        <p>{{item.name}}</p>
        <p>{{item.des}}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "home",
  data() {
    let vm = this;
    return {
      backColor: [],
      cards: [],
      swiperOption: {
        on: {
          // swiper 当切换到下一页时 执行该函数
          slideChangeTransitionEnd: function() {
            // 改变背景色
            vm.$refs.target.style.backgroundColor =
              vm.backColor[this.activeIndex];
          },
          // 点击每一页 进行编程路由跳转
          click(e) {
            // params传递参数时 使用字符串拼接
            vm.$router.push({ path: `Card/${this.activeIndex}` });
          }
        }
      }
    };
  },
  components: {
    // 使用swiper组件
    swiper,
    swiperSlide
  },
  methods: {
    goSetting() {
      this.$router.push({ path: "/setting" });
    }
  },
  mounted() {
    // 获取store的数据 渲染到该页
    this.backColor = this.$store.state.backColor;
    this.cards = this.$store.state.cards;
  }
};
</script>
<style  lang='less' scoped>
.home li {
  list-style: none;
}

.home {
  background-color: lightsalmon;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  transition: all 1s;
}

.home .nav {
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
}
.home .nav .tittle {
  font-weight: bolder;
}
.home .nav li {
  display: inline-block;
  color: #ffffff;
  line-height: 10px;
}

.home .user {
  margin-left: 12%;
  color: #ffffff;
}

.home .user li {
  margin: 5%;
  &:first-child {
    font-size: 2rem;
  }
}

.home .swiper-container {
  overflow: initial;
  width: 70vw;
  height: 60vh;
}

.home .swiper-slide {
  background-color: #ffffff;
  box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.3);
  border-radius: 30px;
  margin-right: 5%;
}

.home span {
  font-size: 2em;
}

.home .swiper-slide:nth-child(even) p > span {
  color: lightskyblue;
}

.home .swiper-slide:nth-child(odd) p > span {
  color: lightsalmon;
}

.home .swiper-slide {
  text-align: center;
  line-height: 15vh;
}
</style>
