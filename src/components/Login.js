import { GoogleLogin } from '@react-oauth/google';

const Login = ({handleLogin, handleError}) => {
  return (
    <GoogleLogin
      text='signin_with'
      theme='outline'
      size='large'
      type='standard'
      shape='pill'
      onSuccess={credentialResponse => {
        handleLogin(credentialResponse);
      }}
      onError={() => {
        handleError();
      }}
    />
  )
}

export default Login