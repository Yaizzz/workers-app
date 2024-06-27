import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //consoldan useEffect 2 çıktı verir sebebi bu
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

