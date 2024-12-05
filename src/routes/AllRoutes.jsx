import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blogs from '../pages/Blogs'
import BlogDetails from '../pages/BlogDetails'
import PrivateRoute from '../components/PrivateRoute'
import CreateBlog from '../pages/CreateBlog'
import EditBlogPage from '../pages/EditPage'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/blogs" element={
          <PrivateRoute>
          <Blogs/>
          </PrivateRoute>
          } />
        <Route path="/blog/:id" element={
          <PrivateRoute>
          <BlogDetails/>
          </PrivateRoute>
          } />
        <Route path="/create-blog" element={
          <PrivateRoute>
          <CreateBlog/>
          </PrivateRoute>
          } />
        <Route path="/blog/edit/:id" element={
          <PrivateRoute>
          <EditBlogPage/>
          </PrivateRoute>
          } />
     </Routes>
     <Footer/> 
    </>
  )
}

export default AllRoutes