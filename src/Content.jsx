import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Categories from "./Categories";
import ItemPage from "./ItemPage";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

export default function Content() {
  const [url, setUrl] = useState();

  // useEffect(() => {
  //   if (location.pathname !== "/categories") setUrl(location.pathname);
  // }, []);

  return (
    <div className="content">
      <Link to = {'/categories/'}>
        <button>Categories</button>
        </Link>

      <Routes>
        <Route path="/" element = {<Categories/>}/>
        <Route path="/categories" element = {<Categories/>}/>
        <Route path="/categories/:categoryName" element = {<ItemList/>}/>
        <Route path="/items/:itemId" element = {<ItemPage/>}/>
        <Route path="*" element = {<NotFound/>}/>
        


      </Routes>

      
      {/* {url ? url.includes("/categories") ? (
        <ItemList category={url} />
      ) : (
        <ItemPage url={url} />
      ):<Categories setCategory={setUrl} />} */}
    </div>
  );
}
