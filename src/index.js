import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 가장 메인이 되는 App.js App이라는 이름은 바꿔도 되지만 규율이기 때문에 굳이 바꿔야할 이유는 없다

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//가장 메인이 되는 App.js를 넣어 놓는다.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
