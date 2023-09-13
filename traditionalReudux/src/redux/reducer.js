import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS } from "./actionType";

const intitState = []


function reducer(state=intitState,action){
    const {type,payload} = action;
    switch(type){
        case ADD_TODO : return [...state,payload]
        case TOGGLE_STATUS : let newTodo = state.map((item)=>{
           return item.id==payload ? {...item,status:!item.status} : item
        })
        return newTodo;
        case DELETE_TODO: 
        let updatedTodo = state.filter((item)=>{
            return item.id!=payload
        })
        return updatedTodo;

        default: return state;
    }
}

export default reducer