import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addbasket, increase, decrease, remove } from "./BasketSlice";
import { addWishlist } from "../Wishlist/WishlistSlice";

function Basket() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((products) => setData(products));
  }, []);

  const basketArr = useSelector((state) => state.basket.value);
  const wishlistArr = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('basketArr',JSON.stringify(basketArr))
  }, [basketArr])
  

  return (
    <>
      <div
        style={{ backgroundColor: "gray", color: "white" }}
        className="basket"
      >
        <h1>BASKET</h1>
        {basketArr &&
          basketArr.map((x) => (
            <div key={x.id}>
              <ul>
                <li>{x.name}</li>
                <li>{x.description}</li>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(increase(x))}
                >
                  +
                </button>
                <span style={{ padding: "0 10px" }}>{x.count}</span>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(decrease(x))}
                >
                  -
                </button>
                <i
                  style={{ cursor: "pointer", padding: "0 10px" }}
                  className="fa-solid fa-trash-can"
                  onClick={() => dispatch(remove(x))}
                ></i>
              <hr />
              </ul>
            </div>
          ))}
      </div>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1>SHOPPING</h1>
        {data &&
          data.map((x) => (
            <>
              <ul
                key={x.id}
              >
                <li>{x.name}</li>
                <li>{x.description}</li>
                <i
                  className="fa-solid fa-bag-shopping"
                  style={{ cursor: "pointer",fontSize:'25px' }}
                  onClick={() => dispatch(addbasket({ ...x, count: 1 }))}
                >
                  
                </i>
                <i
                  onClick={() => dispatch(addWishlist(x))}
                  style={{ cursor: "pointer", padding: "0 10px",fontSize:'25px'  }}
                  className={`${
                    wishlistArr.find((item) => item.id === x.id)
                      ? "fa-solid"
                      : "fa-regular"
                  } fa-heart`}
                ></i>
                <hr />
              </ul>
            </>
          ))}
      </div>
    </>
  );
}

export default Basket;
