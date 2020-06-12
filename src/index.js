import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil"
import {history} from "./tools/history";

ReactDOM.render(
    <Router history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
            <RecoilRoot>
                <App/>
            </RecoilRoot>
        </React.Suspense>
    </Router>

    ,
    document.getElementById('root')
);

