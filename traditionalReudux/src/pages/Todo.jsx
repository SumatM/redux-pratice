// I'have to use to useReducer as hook to store the user data,

import { useReducer } from "react";
import { reducer } from "../utils/reducer";
import { useDispatch, useSelector } from "react-redux";
import { addAction, addTodo, deleteTodo, toggleTodo } from "../redux/action";

export const Todo = () => {
  const initState = {
    id:null,
    task: "",
    status: false,
  };

  const [form, dispatch] = useReducer(reducer, initState);
  const todo = useSelector((store) => store.todo);
  const reduxDispatch = useDispatch();

  function getId(){
    let length = todo.length;
    return length ? todo[length-1].id+1  : 1;
  }


  function handleInput(e) {
    dispatch({ type: "input", payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    reduxDispatch(addTodo({...form,id:getId()}));
    dispatch({ type: "empty" });
  }

  function handleToggle(id){
    reduxDispatch(toggleTodo(id))
  }


  function handleRemove(e){

    reduxDispatch(deleteTodo(e.target['dataset'].id))
  }

  return (
    <div>
      <h1>Todo App</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          placeholder="Enter your task here"
          value={form.task}
        />
        <button type="submit">Add Task</button>
      </form>
      <br />
      <div style={{ width: "30vw" }}>
        {todo
          ?.slice()
          .reverse()
          .map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "limegreen",
                  marginTop: "1rem",
                  padding: "1rem",
                }}
              >
                <li>
                  {item.task}{" "}
                  <button
                    style={{ marginLeft: "1rem", backgroundColor: "limegreen" }}
                    onClick={()=>handleToggle(item.id)}
                  >
                    {!item?.status ? "Completed" : "Pending"}
                  </button>
                </li>
                <span style={item.status==false ? {color:'red'} : {color:'white'}} >{item?.status ? "Completed" : "Pending"} <button data-id={item.id} onClick={handleRemove}>Remove</button></span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
