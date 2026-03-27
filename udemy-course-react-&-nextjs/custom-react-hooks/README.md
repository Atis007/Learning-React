# Custom React Hooks Demo 🎣

A sophisticated demonstration of custom React hooks implementation through a places management application with advanced state and HTTP request handling.

## 📋 Overview

This project showcases the development and implementation of custom React hooks, featuring the `useFetch` hook for data fetching and state management. It demonstrates best practices in hook composition, state management, and error handling through a practical places management interface.

## 🚀 Features

- **Custom useFetch Hook**: Reusable data fetching logic
  ```javascript
  const { isFetching, fetchedData, setFetchedData, error } = useFetch(fetchFunction, initialValue);
  ```
- **Places Management**: Advanced CRUD operations with places data
- **Modal System**: Custom hook-based modal management
- **Error Handling**: Comprehensive error state management
- **Loading States**: Fetch status tracking and UI feedback
- **State Persistence**: Efficient data management patterns
- **Backend Integration**: REST API communication

## 🛠️ Technologies Used

- **Framework**: React 18 with Vite
- **Build Tool**: Vite 4.4.x
- **Custom Hooks**: useFetch, useModal
- **State Management**: useState, useEffect
- **HTTP Client**: Native fetch API
- **Development**: ESLint + React Hooks plugin

## 🎓 Implementation Details

### useFetch Hook Implementation
```javascript
export function useFetch(fetchFunction, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);
  
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFunction();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFunction]);
  
  return { isFetching, fetchedData, setFetchedData, error };
}
```

## � Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^4.4.9"
}
```

## 🔍 Key Hook Patterns

- **State Management**: Multiple state variables per hook
- **Effect Handling**: Proper dependency management
- **Error Boundaries**: Comprehensive error handling
- **Loading States**: Request lifecycle management
- **Data Updates**: Immutable state updates
- **Cleanup**: Proper useEffect cleanup

This project demonstrates professional-grade custom hook implementation with practical real-world applications.