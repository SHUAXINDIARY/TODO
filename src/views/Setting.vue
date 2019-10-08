<template>
  <transition
    name="setting"
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeOutLeft"
  >
    <div class="con">
      <div class="nav">
        <span class="iconfont icon-icon-test" @click="goHome"></span>
      </div>
      <div class="tittle">
        <p>Settings</p>
      </div>
      <ul class="list">
        <li v-for="(item,index) in options" :key="index" @click="show=!show">
          <span>{{item.note}}</span>
          <i class="iconfont icon-icon-test2"></i>
        </li>
      </ul>
      <transition
        name="update"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
      >
        <div class="update" v-if="show">
          <p>
            <input type="text" placeholder="修改用户名" :value="user.name" ref="name" />
          </p>
          <p>
            <input type="text" placeholder="修改个性签名" :value="user.about" ref="about" />
          </p>
          <p>
            <button @click="ok">确定</button>
          </p>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: "setting",
  data() {
    return {
      show: false,
      user: {},
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
    },
    ok() {
      let vm = this;
      let user = {
        name: this.$refs.name.value,
        about: this.$refs.about.value
      };
      var reg = /^\s*|\s*$/g;
      if (user.name.replace(reg, "") == "") {
        alert("请输入用户名");
        return false;
      } else {
        this.$store.commit({
          type: "updateUser",
          user: user,
          succ() {
            alert("修改成功");
            vm.show = false;
          }
        });
      }
    }
  },
  mounted() {
    this.user = this.$store.state.user;
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
  .update {
    p {
      width: 100%;
      height: 5vh;
      line-height: 5vh;
      text-align: center;
      input {
        border: 1px solid gray;
        border-radius: 30px;
        height: 5vh;
        outline: none;
        text-align: center;
        &::-webkit-input-placeholder {
          text-align: center;
        }
      }
      button {
        border: none;
        width: 100px;
        height: 50px;
        font-size: 1rem;
        font-weight: bolder;
      }
    }
  }
}
</style>