import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";
import Blogs from "../Components/Blogs";

function TagPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = decodeURIComponent(location.pathname.split("/").at(-1));

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-3xl mx-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Back
          </button>
          <h2 className="text-2xl font-bold text-gray-800">
            Blogs Tagged <span className="text-blue-600">#{tag}</span>
          </h2>
        </div>
        <Blogs />
        <div className="flex justify-end mt-6">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default TagPage;
