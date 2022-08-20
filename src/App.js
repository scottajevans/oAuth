import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  )
  const [isError, setIsError] = useState(false)

  const handleError = () => {
    setIsError(true)
  }

  const handleLogin = (googleData) => {
    const decoded = jwtDecode(googleData.credential)
    setLoginData(decoded)
    localStorage.setItem('loginData', JSON.stringify(decoded))
  }

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null)
  }

  const renderError = () => {
    return (
      <>
        <h1>There was an error logging you in with Google.</h1>
        <button className="btn" onClick={() => setIsError(false)}>Reset application to try again</button>
      </>
    )
  }

  const render = () => {
    return (
      <>
        {
          loginData ? (
            <>
              <h2>Welcome {loginData.name}, you have logged in using {loginData.email}</h2>
              <button className="btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <h1>Welcome, try out oAuth below by logging in:</h1>
              <Login handleLogin={handleLogin} handleError={handleError} />
              <button className="btn" onClick={() => setIsError(true)}>Fake a problem with oAuth</button>
            </>
          )
        }
      </>
    )
  }

  return (
    <div className="App">
      <header className='App-header'>
        { isError ? renderError() : render() }
      </header>
    </div>
  );
}

export default App;
