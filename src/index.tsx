import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './globalStyles';

// ReactDOM.render(
//     <React.StrictMode>
//         <GlobalStyle />
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
