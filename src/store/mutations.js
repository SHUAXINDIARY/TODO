import Vue from 'vue'
let vm = new Vue();
export default {
    addItem(state, payload) {
        // 获取传递过来的数据
        let item = {
            status: false,
            note: payload.item
        };
        // 添加新项目
        vm.$set(state.Items[payload.data], state.Items[payload.data].length, item);
        console.log(state);
        // 添加完毕后执行回调
        payload.succ();
    },
    delItem(state, payload) {
        // 获取传递过来的数据
        let index = payload.index;
        // 添加新项目
        vm.$delete(state.Items[payload.data], index);
    },
    updateUser(state, payload) {
        console.log(payload.user);
        state.user = payload.user;
        payload.succ();
    }
}