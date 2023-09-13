import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS } from "./actionType";

export function addAction(payload) {
  return { type: ADD_TODO, payload };
}


export function toggleAction(payload){
    return {type: TOGGLE_STATUS,payload}
}

export function deleteAction(payload){
    return {type: DELETE_TODO,payload}
}

// CREATE
export const addTodo = (payload) => (dispatch) => {
  dispatch(addAction(payload));
};

// UPDATE
export const toggleTodo = (payload)=> (dispatch)=>{
    dispatch(toggleAction(payload))
}

// DELETE

export const deleteTodo = (payload)=>(dispatch)=>{
    dispatch(deleteAction(payload))
}