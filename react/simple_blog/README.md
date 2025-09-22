# Dojo Blog 📝

A simple React blog application for creating, reading, and managing blog posts with a clean and intuitive interface.

## 📋 Overview

This is a full-featured blog application built with React that demonstrates core concepts like routing, state management, custom hooks, and API integration. The app uses a JSON server as a mock backend to simulate a real blog platform.

## 🚀 Features

- **View Blog Posts**: Browse all blog posts in a clean list format
- **Read Individual Posts**: Click on any blog post to read the full content
- **Create New Posts**: Add new blog posts with title, body, and author
- **Delete Posts**: Remove unwanted blog posts
- **Custom Hook**: Uses a custom `useFetch` hook for data fetching
- **Routing**: Client-side routing with React Router
- **Error Handling**: Proper error states and 404 page

## 🛠️ Technologies Used

- **Frontend**: React 17, React Router DOM 5.3.4
- **Data Source**: JSON Server (mock API)
- **Styling**: CSS
- **Build Tool**: Create React App

## 📦 Dependencies

```json
{
  "react": "^17.0.1",
  "react-dom": "^17.0.1",
  "react-router-dom": "^5.3.4",
  "react-scripts": "^5.0.1"
}
```

## 🗂️ Project Structure

```
src/
├── App.js           # Main app component with routing
├── Home.js          # Home page displaying blog list
├── Create.js        # Create new blog post page
├── BlogDetails.js   # Individual blog post page
├── BlogList.js      # Blog list component
├── Navbar.js        # Navigation component
├── NotFound.js      # 404 error page
├── useFetch.js      # Custom hook for API calls
├── index.js         # App entry point
└── index.css        # Global styles
data/
└── db.json          # Mock database with sample blog data
```

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd simple_blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install JSON Server globally (for mock API)**
   ```bash
   npm install -g json-server
   ```

4. **Start the JSON Server (in a separate terminal)**
   ```bash
   npx json-server --watch data/db.json --port 8000
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Launch the test runner
- `npm eject` - Eject from Create React App (one-way operation)

## 🗄️ Data Structure

The app uses a JSON file as a mock database with the following structure:

```json
{
  "blogs": [
    {
      "title": "Blog Title",
      "body": "Blog content...",
      "author": "Author Name",
      "id": "unique_id"
    }
  ]
}
```

## 📱 Usage

1. **Home Page**: View all blog posts with preview information
2. **Create Post**: Click "New Blog" to write and publish a new post
3. **Read Post**: Click on any blog title to read the full content
4. **Delete Post**: Remove posts directly from the detail page

## 🔧 Key Features

- **Custom useFetch Hook**: Reusable hook for API calls with loading and error states
- **React Router Integration**: Smooth navigation between pages
- **Responsive Design**: Works on desktop and mobile devices
- **Error Boundaries**: Proper error handling and user feedback

## 🤝 Contributing

Feel free to submit issues and pull requests to improve the application.

## 📄 License

This project is open source and available under the [MIT License].