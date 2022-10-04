import React from 'react'; //리액트의 사용을 위한 import
import ReactDOM from 'react-dom/client'; // 리액트 DOM의 사용을 위해
import './index.css';    // css import
import App from './App'; //App 컴포넌트 import
import reportWebVitals from './reportWebVitals'; //지금은 무시해도 됨..

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
