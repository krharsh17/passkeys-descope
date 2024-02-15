import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from '@descope/react-sdk';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
            projectId='<your-project-id>'
        >
            <App />
        </AuthProvider>
    </React.StrictMode>
);

