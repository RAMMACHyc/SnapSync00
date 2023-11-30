import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App'; 
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = createRoot(document.getElementById('root'));

root.render(
    <GoogleOAuthProvider clientId="843186121167-k5jjc6dhamnreq3blmvdiacvbg2uc16k.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
);
