import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil"
import {history} from "./tools/history";

ReactDOM.render(
    <Router history={history}>
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    </Router>

    ,
    document.getElementById('root')
);

