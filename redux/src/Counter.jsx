import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInput, addtodo } from "./counterSlice";

function Todo() {
  const todo = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <>
      <form action="#" onSubmit={addtodo}>
        <input type="text" onChange={(e)=>handleInput(e.target.value)} />
        <input value={todo} type="submit" />
      </form>
      <ul>
        {todo.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
