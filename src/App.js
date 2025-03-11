
import { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext"
import { useLocation, useSearchParams } from "react-router-dom"
import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import BlogPage from "./Pages/BlogPage"
import CategoryPage from "./Pages/CategoryPage"
import TagPage from "./Pages/TagPage"
function App(){
  const {fetchBlogPosts}=useContext(AppContext);
  const [searchParams,setSearchParams] =useSearchParams();
  const location = useLocation();
  useEffect(()=>{
  
    const page=searchParams.get("page");
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const categories=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),categories);
    }
    else{
      fetchBlogPosts(Number(page));
    }
   
  },[location.pathname,location.search]);

  return(
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/blogs/:blogID" element={<BlogPage></BlogPage>}></Route>
    <Route path="/tags/:tag" element={<TagPage></TagPage>}></Route>
    <Route path="/categories/:category" element={<CategoryPage></CategoryPage>}></Route>
    
   </Routes>
  )
}
export default App;

