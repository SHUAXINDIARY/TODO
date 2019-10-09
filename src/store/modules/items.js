
let Today = [{
    status: false,
    note: "today学习"
},
{
    status: false,
    note: "today吃饭"
}];
let Overdue = [{
    status: false,
    note: "plan学习"
},
{
    status: false,
    note: "plan吃饭"
}];
export default {
    state: {
        // items: {
        Today,
        Overdue,
        All:[]
        // }
    },
    getters:{
        getAll(state) {
            for(let i in state){
                if(i!='All'){
                    for(let j=0;j<state[i].length;j++){
                        state.All.push(state[i][j]);
                    }
                }
            }
            return state.All;
        }
    }
}