export function reducer(state,action) {
    const {payload,type} = action;
    switch(type){
        case 'input': return {...state,task:payload}
        case "empty": return {task:'',status:false}
        default: return state;
    }
}