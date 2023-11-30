import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton = ({ onSuccess, onError }) => {
  const handleSuccess = (response) => {
    try {
      const decodedResponse = jwtDecode(response.credential);
      console.log(decodedResponse);
      onSuccess(decodedResponse);
    } catch (error) {
      console.error('Error decoding Google login response', error);
      onError();
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={handleSuccess}
      onError={onError}
    />
  );
};

export default GoogleLoginButton;
