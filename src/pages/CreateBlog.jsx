import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../features/blogSlice';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();


    if (title && description && image) {
      const newBlog = {
        id: Date.now(), 
        title,
        description,
        image
      };

 
      dispatch(addBlog(newBlog));

      setTitle('');
      setDescription('');
      setImage('');
      toast.success('Blog created successfully');
      setTimeout(()=>{

          navigate("/blogs");
      },1000)
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-14 bg-white rounded-lg shadow-md">
        <ToastContainer position='top-center' />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Blog</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Enter blog title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Enter blog description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            id="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Enter blog image URL"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
