import { useState } from 'react';
import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';
import Signup from "./components/Signup.jsx";

function App() {
  const [a, setA] = useState(false);
  return (
    <>
      <Header />
      <main>
        {a ? <Login /> : <Signup /> }
      </main>
    </>
  );
}

export default App;
