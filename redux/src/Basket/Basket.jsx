import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addbasket, increase, decrease, remove } from "./BasketSlice";

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
      <div style={{ backgroundColor: 'gray', color: 'white' }} className="basket">
        <h1>BASKET</h1>
        {basketArr &&
          basketArr.map((x) => (
            <div key={x.id}>
              <hr />
              <ul>
                <li>{x.name}</li>
                <li>{x.description}</li>
                <button onClick={() => dispatch(increase(x))}>+</button>
                <span>{x.count}</span>
                <button onClick={() => dispatch(decrease(x))}>-</button>
                <button onClick={() => dispatch(remove(x))}>delete</button>
              </ul>
              <hr />
            </div>
          ))}
      </div>
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <h1>SHOP</h1>
        {data &&
          data.map((x) => (
            <>
              <ul style={{ backgroundColor: 'black', color: 'white' }} key={x.id}>
                <li>{x.name}</li>
                <li>{x.description}</li>
                <button onClick={() => dispatch(addbasket({ ...x, count: 1 }))}>add</button>
                <hr />
              </ul>
            </>
          ))}

      </div>
    </>
  );
}

export default Basket;
