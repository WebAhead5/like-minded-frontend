import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil"
ReactDOM.render(
    <React.StrictMode>
          <RecoilRoot>
                <React.Suspense fallback={<div>Loading...</div>}>
                      <BrowserRouter>
                            <App />
                      </BrowserRouter>
                </React.Suspense>
          </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);

