import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams(); // Get the ID from the URL params
  const { blogs } = useSelector((store) => store);

  useEffect(() => {
    // Find the blog with the matching ID
    const foundBlog = blogs.find((blog) => blog.id === parseInt(id)); // parseInt if ID is a number in URL
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id, blogs]); // Run effect when id or blogs changes

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {blog ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Blog Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover object-center"
          />

          {/* Blog Content */}
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h2>
            <p className="text-lg text-gray-600 mb-6">{blog.description}</p>

            {/* Blog Body (Content or More Details) */}
            <div className="space-y-4 text-gray-700">
              <p>
                {/* Here you can add the full blog content if it's available */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt congue, urna nisl
                placerat eros, eu consequat elit lorem non sapien. Sed ultricies bibendum risus, sed hendrerit purus suscipit a.
              </p>
              {/* Add more content or other relevant sections here */}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetail;
