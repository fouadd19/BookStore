import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import classes from './LoginHook.module.css';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

import { useNavigate } from 'react-router-dom';

const clientId =
  '601321739401-kiltosdkgck2b6au31g0knhcc3ukum97.apps.googleusercontent.com';

function LoginHooks() {
  let navigate = useNavigate();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    navigate('/authorsearch');
    alert(`Logged in successfully welcome ${res.profileObj.name} 😍.`);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div>
      <button onClick={signIn} className={classes.button}>
        <span className={classes.buttonText}>Sign in with Google</span>
      </button>
    </div>
  );
}

export default LoginHooks;

// clientid: 601321739401-kiltosdkgck2b6au31g0knhcc3ukum97.apps.googleusercontent.com
