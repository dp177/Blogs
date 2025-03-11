import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";

function BlogPage() {
  const { blogID } = useParams();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Blog Post: <span className="text-blue-600">{blogID}</span>
        </h2>
        <Blogs blogID={blogID} />
      </div>
    </div>
  );
}

export default BlogPage;
