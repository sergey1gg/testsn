import React from 'react';
import './index.css';
import store from './redux/reduxstore';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
      <Provider store={store}>
      <App/>
        </Provider>  
  );

//reducer - чистая функция, которая принимает старый state,action, если нужно модицицирует state, работая с копией 
// и возвращает измененную копию из этой функции