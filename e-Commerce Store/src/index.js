import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store/Store';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
store.subscribe(()=>{console.log(store.getState())});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ErrorBoundary>
    <Provider store={store}>
    <App />  
  </Provider>
  </ErrorBoundary>
  
      
  // </React.StrictMode>
);

reportWebVitals();
