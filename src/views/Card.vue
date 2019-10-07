<template>
  <div class="card animated zoomIn">
    <div class="nav">
      <span class="iconfont icon-icon-test" @click="goHome"></span>
    </div>
    <div class="tittle">
      <p>Today</p>
      <p>Two Tasks</p>
    </div>
    <ul class="list">
      <li v-for="(item,index) in items" :key="index">
        <p @click="mark(index)" :class="{ok:item.status}">
          <i></i>
          <span>{{item.note}}</span>
        </p>
      </li>
    </ul>
    <div class="addItem">
      <span>+</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  data() {
    return {
      items: [
        {
          status: false,
          note: "学习"
        },
        {
          status: false,
          note: "吃饭"
        }
      ]
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    mark(index) {
      console.log(index);
      this.items[index].status = !this.items[index].status;
    }
  }
};
</script>
<style lang="less" scoped>
.card {
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
  .addItem {
    text-align: right;
    span {
      font-size: 5rem;
    }
  }
}
</style>
