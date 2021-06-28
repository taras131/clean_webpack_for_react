import React from 'react';
import ReactDom from 'react-dom';
import App from "./src/App.jsx";
import store from "./src/redux/store";
import {Provider} from "react-redux";

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'))