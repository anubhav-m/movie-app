# 🎬 Movie App

A simple and responsive movie listing frontend built using **React.js**. The application displays a list of popular movies and includes a search functionality to find movies by title.

## 🚀 Features

- 📺 Explore trending and popular movies
- 🔍 Search functionality
- 🧭 Page navigation using **React Router DOM**
- ⚙️ Dynamic rendering using **React Hooks** (`useState`, `useEffect`, `useContext`)
- 💡 Clean and responsive UI using **CSS Flexbox/Grid**
- 🧱 Reusable, modular component structure

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Routing**: React Router DOM
- **State Management**: React Hooks + Context API
- **API**: Uses public movie api from The Movie Database (TMDB)

## 📦 Getting Started

1. **Clone the repository**
  
  ```bash
  git clone https://github.com/anubhav-m/movie-app.git
  cd movie-app
  ```

2. **Environment variable**

  ```env
  VITE_API_KEY = your_tmdb_api_key+here
  ```
  
3. **Install dependencies**
  
  ```bash
  npm install
  ```
  
4. **Run the development server**
  
  ```bash
  npm run dev
  ```

  ## 🖼 Preview

  ![Home](./src/assets/home.png)
  ![Favorites](./src/assets/favorites.png)