import React from 'react';
import BlogCard from '../components/BlogCard';
import { useSelector } from 'react-redux';

const Home = () => {
 const {blogs} = useSelector((store)=>store)


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
        <p className="mt-4 text-lg">
          Stay updated with the latest articles and tutorials on web development and design.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
           <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
