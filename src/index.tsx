import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalProvider } from './contexts/ModalContext';
import { ToastProvider } from './contexts/ToastContext';
import { SettingsProvider } from './contexts/SettingsContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <SettingsProvider>
        <ModalProvider>
            <ToastProvider>
                <App />
            </ToastProvider>
        </ModalProvider>
    </SettingsProvider>
);