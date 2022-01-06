import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    {console.log(process.env.PUBLIC_URL)}
    <HashRouter>
      {/* <App /> */}
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<App />} />
        <Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
        <Route path={process.env.PUBLIC_URL + '/home'} element={<Home />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
