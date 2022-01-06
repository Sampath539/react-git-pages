import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    {console.log(process.env.PUBLIC_URL)}
    <BrowserRouter basename='/react-git-pages'>
      {/* <App /> */}
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
