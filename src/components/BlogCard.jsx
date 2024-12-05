import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from '../features/blogSlice';
import { useDispatch } from 'react-redux';

const BlogCard = ({ blog, editBtn, deleteBtn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleDelete = (id)=>{
    dispatch(deleteBlog(id))
  }

  return (
    <div
      key={blog.id}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
    >
      <div onClick={() => navigate(`/blog/${blog.id}`)}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
            {blog.title}
          </h3>
          <p className="mt-3 text-sm text-gray-600 line-clamp-3">
            {blog.description}
          </p>
        </div>
      </div>
      <div className="px-5 py-3 flex items-center justify-between space-x-4">
        {editBtn && (
          <button onClick={()=>navigate(`/blog/edit/${blog.id}`)} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300">
            Edit
          </button>
        )}
        {deleteBtn && (
          <button onClick={()=>handleDelete(blog.id)} className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
