import { Link } from "react-router-dom";

function Cards({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border">
      <h2 className="text-red-600 font-bold text-2xl mb-2">{post.title}</h2>
      <p className="text-gray-600 text-sm mb-2">
        By <span className="font-semibold">{post.author}</span> •{" "}
        <Link to={`/categories/${post.category}`}>
              <span className="text-blue-600">{post.category}</span>
        </Link>
        
      </p>
      <p className="text-gray-500 text-xs mb-4">Posted On: {post.date}</p>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags && post.tags.length > 0 ? (
          post.tags.map((tag, index) => (
            <Link
              key={index}
              to={`/tags/${tag}`}
              className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full hover:bg-gray-300 transition"
            >
              #{tag}
            </Link>
          ))
        ) : (
          <span className="text-gray-500 text-sm">No tags available</span>
        )}
      </div>
    </div>
  );
}

export default Cards;
