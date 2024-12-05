# Blog Application

Welcome to the Blog Application! This is a modern, full-featured blog app built with **React** and **Vite**, including user authentication, private routes, and the ability for users to create, edit, and delete their own blogs.

## Features

- **Login/Signup**: Secure user authentication with Firebase. Users can register, log in, and access their personal dashboard.
- **Private Route**: Only authenticated users can access the pages to create, edit, or delete blogs.
- **Create Blog**: Users can create new blog posts with a title, description, and image.
- **Edit Blog**: Users can edit existing blog posts, including changing the title, description, and image.
- **Delete Blog**: Users have the ability to delete blogs they've created.
- **Responsive UI**: Fully responsive and mobile-friendly design for a smooth user experience across all devices.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web applications.
- **Firebase Authentication**: Secure authentication for users.
- **React Router**: Navigation between different pages in the app.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Toastify**: Display notifications and alerts for a better user experience.

## Features in Detail

### 1. **Authentication (Login/Signup)**
   - Users can sign up using their email and password, and log in to access the blog dashboard.
   - On successful login, users are redirected to the home page with access to their own private blog section.

### 2. **Private Route**
   - Only authenticated users can create, edit, or delete blogs.
   - If a user is not logged in and tries to access a protected route, they will be redirected to the login page.

### 3. **Create Blog**
   - Users can create new blogs with a title, description, and an optional image.
   - After submitting, the blog is added to the user's personal dashboard and can be viewed or edited later.

### 4. **Edit Blog**
   - Users can update their blog title, description, and image.
   - The changes are immediately reflected on the user's blog dashboard.

### 5. **Delete Blog**
   - Users can delete blogs they’ve created, with a confirmation modal to prevent accidental deletion.

### 6. **User Dashboard**
   - After logging in, users can access their personal dashboard where all their blogs are listed.
   - Each blog has options to edit or delete, as well as view its details.




