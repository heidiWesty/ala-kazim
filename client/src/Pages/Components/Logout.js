import React from 'react';
import { GoogleLogout} from 'react-google-login';
import { useHistory } from 'react-router-dom';


function Logout() {
    const history = useHistory();

    const onSuccess = () => {
        history.push('/');
    };

    return (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <GoogleLogout
                clientId='868066420194-sanvqj0g79q5435pcq0nogol67aq8jk4.apps.googleusercontent.com'
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logout;