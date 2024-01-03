import { useEffect, useState } from "react";
import Item from "./Item";
import { useNavigate, useParams } from "react-router-dom";

export default function ItemList({ category }) {
  const [items, setItems] = useState([]);
  let {categoryName} = useParams()
  let nav = useNavigate()

  useEffect(() => {
    fetch(
      "https://jbh-mockserver.onrender.com/categories/" + categoryName
    )
      .then((j) => j.json())
      .then((data) => setItems(data)).catch(()=>nav('/404'))
  }, []);

  return (
    <div>
      <div id="itemList">
        {items.map((product) => (
          <Item
            onClick={() => (location.href = "/items/" + product.id)}
            key={product.id}
            item={product}
          />
        ))}
      </div>
    </div>
  );
}
