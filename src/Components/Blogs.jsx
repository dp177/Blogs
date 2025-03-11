import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import { useContext } from "react";
import Cards from "./Cards";

function Blogs() {
  const { loading, posts } = useContext(AppContext);
  
  return (
    <div className="h-[80vh] overflow-scroll">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center">
          <p>Post not available</p>
        </div>
      ) : (
        posts.map((post) => <Cards key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Blogs;
