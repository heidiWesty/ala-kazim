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
        position: "absolute",
        left: "50%",
        top: "95%",
        transform: "translate(-50%, -50%)",
        padding: 20,
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
