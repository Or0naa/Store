import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Categories from "./Categories";
import ItemPage from "./ItemPage";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

export default function Content() {
  const [url, setUrl] = useState();
const myNav = useNavigate()

  return (
    <div className="content">
      
        <button onClick={()=>myNav('/')}>🏠</button>

      <Routes>
        <Route path="/" element = {<Categories/>}/>
        <Route path="/categories" element = {<Categories/>}/>
        <Route path="/categories/:categoryName" element = {<ItemList/>}/>
        <Route path="/items/:itemId" element = {<ItemPage/>}/>
        <Route path="/404" element = {<NotFound/>}/>
        


      </Routes>


    </div>
  );
}
