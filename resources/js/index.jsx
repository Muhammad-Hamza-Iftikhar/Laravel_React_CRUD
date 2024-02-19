import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx'

if (document.getElementById('index')) {
    const Index = ReactDOM.createRoot(document.getElementById("index"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
