<template>
  <div class="card animated zoomIn">
    <div class="nav">
      <span class="iconfont icon-icon-test" @click="goHome"></span>
    </div>
    <div class="tittle">
      <p>{{tittle}}</p>
      <p>{{items.length}} Tasks</p>
    </div>
    <ul class="list">
      <li v-for="(item,index) in items" :key="index">
        <p @click="mark(index)" :class="{ok:item.status}">
          <i></i>
          <span>{{item.note}}</span>
        </p>
      </li>
    </ul>
    <div class="input animated rollIn" v-if="input">
      <p>
        <input type="text" placeholder="这里输入" ref="in" />
      </p>
      <p>
        <button @click="ok">确定</button>
      </p>
    </div>
    <div class="btn">
      <span @click="addItem">+</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  data() {
    return {
      input: false,
      items: [],
      tittle: ""
    };
  },
  methods: {
    // 返回主页
    goHome() {
      this.$router.push("/");
    },
    // 改变待办事项状态
    mark(index) {
      this.items[index].status = !this.items[index].status;
    },
    // 切换添加任务模块显示
    addItem() {
      this.input = !this.input;
    },
    // 添加新任务
    ok() {
      // 添加到全局状态中
      let vm = this;
      this.$store.commit({
        type: "addItem",
        data: vm.tittle,
        item: vm.$refs.in.value,
        succ() {
          // 成功后重新渲染数据
          vm.initData();
        }
      });
      this.input = false;
      console.log(this.$store.state[this.tittle].items);
    },
    // 初始化页面数据
    initData() {
      // 接受路由传递的参数
      let cardIndex = this.$route.params.id;
      // 获取组件名
      this.tittle = this.$store.state.cards[cardIndex].name;
      let name = this.tittle;
      // 获取待办事项
      if (this.$store.state[name] != undefined) {
        this.items = [...this.$store.state[name].items];
      }
    }
  },
  // 获取store中数据
  mounted() {
    this.initData();
  }
};
</script>
<style lang="less" scoped>
.card {
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
    margin-left: 20%;
    list-style: none;
    li {
      i {
        display: inline-block;
        width: 10px;
        height: 10px;
        border: 1px solid gray;
        margin-right: 5%;
        transition: all 2s;
      }
      span {
        display: inline-block;
        font-weight: bold;
        transition: all 2s;
      }
    }
    .ok {
      i {
        background-color: gray;
        transition: all 2s;
      }
      span {
        text-decoration: line-through;
        transition: all 2s;
      }
    }
  }
  .input {
    text-align: center;
    input {
      outline: none;
      height: 5vh;
      border: 3px solid gray;
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
  .btn {
    text-align: right;
    position: relative;
    top: 0;
    span {
      font-size: 5rem;
    }
  }
}
</style>
