import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, MantineProvider } from '@mantine/core';

import App from './App';
import reportWebVitals from './reportWebVitals';

// core styles are required for all packages
import '@mantine/core/styles.css';

const theme = createTheme({
    /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MantineProvider defaultColorScheme='dark' theme={theme}>
            <App />
        </MantineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
