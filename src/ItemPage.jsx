import React, { useContext, useEffect, useState } from "react";
import DataContext from "./context/DataContext";
import { useNavigate, useParams } from "react-router-dom";

export default function ItemPage({ url }) {
  const [item, setItem] = useState();
  const { cart, setCart } = useContext(DataContext);

  let {itemId} = useParams()

  const handlePlus = () => {
    let newCart = { ...cart };
    // let cart4 = { "ab12": {...item,qty:1}  , "dsak":{...item,qty:7} }

    // אם קיים המוצר
    if (newCart[item.id]) {
      newCart[item.id].qty += 1;
    } else {
      newCart[item.id] = { ...item, qty: 1 };
    }
    setCart(newCart);
  };

  const handleMinus = () => {
    if (cart[item.id]) {
      let newCart = { ...cart };
      if (newCart[item.id].qty > 1) {
        newCart[item.id].qty -= 1;
      } else {
        delete newCart[item.id];
      }
      setCart(newCart);
    }
  };
  const nav = useNavigate()
 useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/items/'+itemId)
      .then(reponse => reponse.json())
      .then(res => setItem(res)).catch(()=>nav('/404'))
  }, [])

  return (
    <div>
      {item ? (
        <div className="item">
          <div>{item.name}</div>
          <div>{<img className="imgitem" src={item.image}/>}</div>
          <div>{item.price}</div>
          
          <div
            className="buttons"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
