<template>
  <transition
    name="setting"
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutLeft"
  >
    <div class="con">
      <div class="nav">
        <span class="iconfont icon-icon-test" @click="goHome"></span>
      </div>
      <div class="tittle">
        <p>Settings</p>
      </div>
      <ul class="list">
        <li v-for="(item,index) in options" :key="index">
          <span>{{item.note}}</span>
          <i class="iconfont icon-icon-test2"></i>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
export default {
  name: "setting",
  data() {
    return {
      options: [
        {
          index: 1,
          note: "个人信息"
        }
      ]
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less" scoped>
.con {
  height: 100vh;
  .nav {
    width: 100vw;
    height: 10vh;
    line-height: 10vh;
    span {
      font-size: 2rem;
    }
  }
  .tittle {
    margin-bottom: 10%;
    font-weight: bolder;
    text-align: center;
    p {
      &:first-child {
        font-size: 2rem;
      }
    }
  }
  .list {
    margin-top: 15%;
    margin-bottom: 15%;
    list-style: none;
    li {
      background-color: #eeeeee;
      height: 8vh;
      line-height: 8vh;
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
        font-weight: bold;
        transition: all 2s;
        margin-left: 10%;
      }
      i {
        margin-right: 10%;
      }
    }
  }
}
</style>