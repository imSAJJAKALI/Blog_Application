import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const { blogs } = useSelector((store) => store);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate the index range of blogs to show based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination Buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Blogs</h2>
        <button
          onClick={() => navigate('/create-blog')}
          className="bg-blue-400 p-2 rounded-lg hover:bg-slate-600 hover:text-cyan-50"
        >
          Create new Blog
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {currentBlogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} editBtn={true} deleteBtn={true} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-400 rounded-l-lg hover:bg-blue-500 disabled:bg-gray-300"
        >
          Prev
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 mx-1 rounded-lg ${
              number === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-blue-400'
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          className="px-4 py-2 bg-blue-400 rounded-r-lg hover:bg-blue-500 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
