<template>
  <transition
    name="card"
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown"
  >
    <div class="card">
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
          <button @click="addItem($refs.in.value)">确定</button>
        </p>
      </div>
      <div class="btn">
        <span @click="showAdd">+</span>
      </div>
    </div>
  </transition>
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
    // 改变待办事项状态  并判断是否删除
    mark(index) {
      // status时true  完成 删除
      this.items[index].status = !this.items[index].status;
      this.delItem(index);

      // status 是false 未完成 添加回来
      if (this.items[index].status == false) {
        this.addItem(this.items[index].note);
      }
    },
    // 切换添加任务模块显示
    showAdd() {
      this.input = !this.input;
    },
    delItem(index) {
      // 添加到全局状态中
      let vm = this;
      this.$store.commit({
        type: "delItem",
        data: vm.tittle,
        index: index
      });
    },
    // 添加新任务
    addItem(val) {
      console.log(val);
      // 添加到全局状态中
      let vm = this;
      this.$store.commit({
        type: "addItem",
        data: vm.tittle,
        item: val,
        succ() {
          // 成功后重新渲染数据
          vm.initData();
          console.log('成功');
        }
      });
      this.input = false;
    },
    // 初始化页面数据
    initData() {
      // 接受路由传递的参数
      let cardIndex = this.$route.params.id;
      // 获取组件名
      this.tittle = this.$store.state.cards[cardIndex].name;
      let name = this.tittle;
      // 获取待办事项  
      if (name == "All") {
        // 进入的是all组件 获取所有事项
        this.items = [...this.$store.getters.getAll];
      } else {
        // 进入的是其他模块 获取对应的事项
        this.items = [...this.$store.state.Items[name]];
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
