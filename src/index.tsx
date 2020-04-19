import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from 'serviceWorker';
import Routes from "routes"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { basicTheme } from 'assets/jss/basicTheme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/jss/global-styles';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={basicTheme}>
            <Routes />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
