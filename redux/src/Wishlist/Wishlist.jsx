import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./WishlistSlice";

function Wishlist() {
  const wishlistArr = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: "red", color: "white" }}>
      <h1>WISHLIST</h1>
      <>
        {wishlistArr &&
          wishlistArr.map((x) => (
            <ul key={x.id}>
              <li>{x.name}</li>
              <li>{x.description}</li>
              <i
                style={{ cursor: "pointer", padding: "0 10px" }}
                className="fa-solid fa-trash-can"
                onClick={() => dispatch(remove(x))}
              ></i>

              <hr />
            </ul>
          ))}
      </>
    </div>
  );
}

export default Wishlist;
