import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {store} from './state/store';
import {Provider} from 'react-redux';
import AppWithRedux from "./AppWithRedux";
//import AppWithReducer from "./AppWithReducer";
//import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        {/*<App />*/}
        {/*<AppWithReducer />*/}
        <AppWithRedux />
    </Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
