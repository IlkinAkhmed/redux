import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addbasket,increase,decrease,remove } from "./BasketSlice";

function Basket() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((products) => setData(products));
  }, []);

  const basketArr = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{backgroundColor:'red',color:'white'}} className="basket">
        {basketArr &&
          basketArr.map((x) => (
            <>
              <hr />
              <ul key={x.id}>
                <li>{x.name}</li>
                <li>{x.description}</li>
                <button onClick={()=>dispatch(increase(x))}>+</button>
                <span>{x.count}</span>
                <button onClick={()=>dispatch(decrease(x))}>-</button>
                <button onClick={()=>dispatch(remove(x))}>delete</button>
              </ul>
              <hr />
            </>
          ))}
      </div>
      {data &&
        data.map((x) => (
          <ul style={{backgroundColor:'aqua',color:'black'}} key={x.id}>
            <li>{x.name}</li>
            <li>{x.description}</li>
            <button onClick={() => dispatch(addbasket({...x,count:1}))}>add</button>
            <hr />
          </ul>
        ))}
    </>
  );
}

export default Basket;
