import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import { store } from './JS/store/store';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {disableReactDevTools} from "@fvilers/disable-react-devtools";


if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store} >
    <App />
  </Provider>
  </BrowserRouter>
);


