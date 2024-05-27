import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ubjh081als53ckyv.us.auth0.com"
      clientId="VkyeBuEG9i1Ct70O9VfBNfAaQBfv6lwL"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
    <Provider store={store} >

      <App />
    </Provider>
      </Auth0Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
