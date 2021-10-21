import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

export const clientId = '868066420194-sanvqj0g79q5435pcq0nogol67aq8jk4.apps.googleusercontent.com'

function Login() {
    const history = useHistory();

    const onSuccess = (res) => {
      if (res.profileObj.email == test.email) {
        console.log('[Login Success] currentUser:', res.profileObj);
        history.push('/Admin');

      }
      else {
          console.log(test.email);
          console.log(res.profileObj.email);
          alert('Sorry, no account with email address: ' + res.profileObj.email);

      }
  };

  const onFailure = (res) => {
    console.log('[Login failed res:', res);
  }
  return(
    <div>
      <GoogleLogin
        style={{fontWeight: 'bold'}}
        clientId={clientId}
        buttonText='Sign in with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '50px'}}
        isSignedIn={false}
      ></GoogleLogin>
    </div>
  );
}

const test = {
    email: "heidi.diggs@selu.edu",
}

export default Login;