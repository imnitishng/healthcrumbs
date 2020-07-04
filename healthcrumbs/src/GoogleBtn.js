import React, {useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Dashboard from './Dashboard'

const CLIENT_ID = '255514400382-88gak0t3bens19vru35alq3p1hgi5efc.apps.googleusercontent.com';

const GoogleBtn = () => {
  const [logState, login] = useState({
    isLoggedIn: false,
    accessToken: ''
  })

  const handleLogout = (response) => {
    login({...logState, isLoggedIn: false, accessToken: ''})
  }

  const handleLogin = (response) => {
    if(response) {
      login({...logState, isLoggedIn: true, accessToken: response.accessToken})
    }
  }

  const handleLoginFailure = () => {
    alert('Failed to log in')
  }

  const handleLogoutFailure = () => {
    alert('Failed to log out')
  }

  return (
    <div>
    { logState.isLoggedIn ?
      <GoogleLogout
        clientId={ CLIENT_ID }
        buttonText='Logout'
        onLogoutSuccess={handleLogout}
        onFailure={handleLogoutFailure} />: 
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText='Login'
        onSuccess={handleLogin}
        onFailure={handleLoginFailure}
        cookiePolicy={ 'single_host_origin' }
        responseType='code,token' />
    }
    { logState.accessToken ? <p>Google Logged in</p> : null }
  </div>
  )
}

export default GoogleBtn;