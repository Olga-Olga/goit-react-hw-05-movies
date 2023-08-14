import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router';
// import { GlobalStyles } from 'styles/GlobalStyles';
import { App } from 'components/App';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <BrowserRouter>
  <BrowserRouter basename="goit-react-hw-05-movies">
    <App />
    {/* <GlobalStyles /> */}
    {/* <ToastContainer autoClose={1000} /> */}
  </BrowserRouter>
  // </React.StrictMode>
);
