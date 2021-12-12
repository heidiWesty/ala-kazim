import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import clientId from "./Login";

function Logout() {
  const history = useHistory();

  const onSuccess = () => {
    history.push("/");
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        height: '100%', 
        width: '100%'
      }}
    >
      <GoogleLogout
        clientId={clientId}
        buttonText="Log out"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
