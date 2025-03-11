import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import { useContext } from "react";
import Cards from "./Cards";
function Blogs() {
  const { loading,posts } = useContext(AppContext);
console.log(posts);
  return (
    <div className="h-[80vh] overflow-scroll">
      {
      loading ? ("waaiting") : (posts.length===0 ? (<div><p>post not available</p></div>):(posts.map( (post) =><Cards key={post.id} post={post}></Cards>)))
      }
  
      
    </div>
  );
}
export default Blogs;
