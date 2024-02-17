import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div className="container content-center">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('index')) {
    const Index = ReactDOM.createRoot(document.getElementById("index"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
