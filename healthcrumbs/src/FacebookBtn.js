import React, {useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import handleLoginFailure from './GoogleBtn'

const APP_ID = '1594962223996985';

const FacebookBtn = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const handleLogin = (response) => {
    if(response.accessToken) {
      setData(response)
      setPicture(response.picture.data.url)
      setLogin(true)
    }
  }

  return (
    <div>
      <FacebookLogin
        appId={APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        callback={handleLogin}
        responseType='code,token' />
        {login ? <h5>Facebook Logged in</h5> : handleLoginFailure}
    </div>
  )
}

export default FacebookBtn;