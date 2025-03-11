import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
      {page > 1 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          Previous
        </button>
      )}
      <p className="text-lg font-medium">
        Page {page} of {totalPages}
      </p>
      {page < totalPages && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
