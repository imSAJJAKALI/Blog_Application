import { createSlice } from '@reduxjs/toolkit';

const blogs = [
    {
      id: 1,
      title: 'Exploring React Best Practices',
      description: 'Learn about the best practices in React development for scalable and maintainable code.',
      image: 'https://img.freepik.com/free-photo/online-blog_53876-123696.jpg',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      description: 'A comprehensive guide to mastering Tailwind CSS for modern web development.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSqXhi28x5BbE898u8Wo4O-bM_TYaQ9KoXtJiYAujDrVE1QhydqEKB1BQSLM4vpRfAAU&usqp=CAU',
    },
    {
      id: 3,
      title: 'Understanding JavaScript Closures',
      description: 'Dive into the concept of closures and how they work in JavaScript.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIVgbxFMHmrBd96q7a7bGoDDr30Jakkk_VaBXipcysiYkLu023esocuZB2W1jvkn-rxQ&usqp=CAU',
    },
    {
      id: 4,
      title: 'Exploring React Best Practices',
      description: 'Learn about the best practices in React development for scalable and maintainable code.',
      image: 'https://img.freepik.com/free-photo/online-blog_53876-123696.jpg',
    },
    {
      id: 5,
      title: 'Mastering Tailwind CSS',
      description: 'A comprehensive guide to mastering Tailwind CSS for modern web development.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSqXhi28x5BbE898u8Wo4O-bM_TYaQ9KoXtJiYAujDrVE1QhydqEKB1BQSLM4vpRfAAU&usqp=CAU',
    },
    {
      id: 6,
      title: 'Understanding JavaScript Closures',
      description: 'Dive into the concept of closures and how they work in JavaScript.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIVgbxFMHmrBd96q7a7bGoDDr30Jakkk_VaBXipcysiYkLu023esocuZB2W1jvkn-rxQ&usqp=CAU',
    },
  ];

const blogSlice = createSlice({
    name: 'blogs',
    initialState: [...blogs],
    reducers: {
        addBlog(state, action) {
            state.push(action.payload);
        },
        updateBlog(state, action) {
            const index = state.findIndex(blog => blog.id === action.payload.id);
            if (index >= 0) state[index] = action.payload;
        },
        deleteBlog(state, action) {
            return state.filter(blog => blog.id !== action.payload);
        },
    },
});

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
