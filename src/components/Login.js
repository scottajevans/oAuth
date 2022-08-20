import { GoogleLogin } from '@react-oauth/google';

const Login = ({handleLogin}) => {
    return (
        <GoogleLogin
            text='signin_with'
            theme='outline'
            size='large'
            type='standard'
            shape='pill'
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
                handleLogin(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default Login