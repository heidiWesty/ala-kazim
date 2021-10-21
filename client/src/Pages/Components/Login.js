import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

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
        clientId="868066420194-sanvqj0g79q5435pcq0nogol67aq8jk4.apps.googleusercontent.com"
        buttonText='Login with Google'
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
    familyName: "Westenhiser",
    givenName: "Heidi",
    googleId: "115531535696032474314",
    imageUrl: "https://lh3.googleusercontent.com/a-/AOh14GifXXoxOUBXmBZA5xfPDNc8qn8Lvb39T0YfuLM=s96-c",
    name: "Heidi Westenhiser"
}

export default Login;