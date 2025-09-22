# Supa Smoothies 🥤

A React application for managing smoothie recipes using Supabase as the backend database.

## 📋 Overview

This is a full-stack web application built with React and Supabase that allows users to create, view, update, and delete smoothie recipes. The app features a clean interface for managing smoothie data with real-time database operations.

## 🚀 Features

- **View Smoothies**: Browse all smoothie recipes in a card-based layout
- **Create Smoothies**: Add new smoothie recipes with details
- **Update Smoothies**: Edit existing smoothie information
- **Delete Smoothies**: Remove smoothies from the collection
- **Sorting**: Order smoothies by creation date, title, or rating
- **Real-time Data**: Powered by Supabase for instant updates

## 🛠️ Technologies Used

- **Frontend**: React 18, React Router DOM
- **Backend**: Supabase (Database & API)
- **Styling**: CSS
- **Build Tool**: Create React App

## 📦 Dependencies

```json
{
  "@supabase/supabase-js": "^1.35.6",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.3.0"
}
```

## 🗂️ Project Structure

```
src/
├── components/
│   └── SmoothieCard.js      # Individual smoothie display component
├── config/
│   └── supabaseClient.js    # Supabase configuration and client setup
├── pages/
│   ├── Create.js            # Create new smoothie page
│   ├── Home.js              # Main page displaying all smoothies
│   └── Update.js            # Edit existing smoothie page
├── App.js                   # Main app component with routing
└── index.js                 # App entry point
```

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd supabase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🗄️ Database Setup

This app requires a Supabase database with a `smoothies` table. The table should include fields such as:
- `id` (primary key)
- `title` (text)
- `rating` (number)
- `created_at` (timestamp)
- Additional smoothie-specific fields

## 🔧 Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Launch the test runner
- `npm eject` - Eject from Create React App (one-way operation)

## 📱 Usage

1. **Home Page**: View all smoothies with sorting options
2. **Create**: Click "Create New Smoothie" to add a recipe
3. **Update**: Click on any smoothie card to edit its details
4. **Delete**: Remove smoothies directly from the interface

## 🤝 Contributing

Feel free to submit issues and pull requests to improve the application.

## 📄 License

This project is open source and available under the [MIT License].
