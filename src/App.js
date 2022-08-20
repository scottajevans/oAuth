import './App.css';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  )

  const handleLogin = (googleData) => {
    setLoginData(googleData)
    localStorage.setItem('loginData', JSON.stringify(googleData))
  }

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null)
  }

  return (
    <div className="App">
      <header className='App-header'>
        {
          loginData ? (
            <div>
              <h2>You are logged in as {loginData.email}</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <>
              <h1>Welcome, try out oAuth below by logging in:</h1>
              <Login handleLogin={handleLogin} />
            </>
          )
        }
      </header>
    </div>
  );
}

export default App;
