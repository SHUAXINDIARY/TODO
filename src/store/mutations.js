import Vue from 'vue'
let vm = new Vue();
export default {
    addItem(state, payload) {
        // 添加新项目
        let item = {
            status: false,
            note: payload.item
        };
        vm.$set(state[payload.data].items, state[payload.data].items.length, item);
        // 添加完毕后执行回调
        payload.succ();
    }
}