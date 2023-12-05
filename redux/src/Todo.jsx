import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, remove, update } from "./Todoslice";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [inpval, setInpval] = useState([]);
  const value = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  function handleInput(e) {
    setInpval(e.target.value);
  }
  function handleTodo() {
    dispatch(addtodo({ name: inpval, id: uuidv4() }));
    setInpval("");
  }
  function handleRemove(x) {
    dispatch(remove(x));
  }

  return (
    <>
      <form action="#" onSubmit={handleTodo}>
        <input type="text" value={inpval} onChange={(e) => handleInput(e)} />
        <input type="submit" />
      </form>
      <ul>
        {value &&
          value.map((x) => (
            <li key={uuidv4()}>
              {" "}
              {x.name}{" "}
              <button onClick={() => handleRemove(x)}>remove</button>{" "}
              <button onClick={(e) => update(x)}>edit</button>{" "}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Todo;
