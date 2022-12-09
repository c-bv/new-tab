import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastProvider } from './contexts/ToastContext';
import { ModalProvider } from './contexts/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ModalProvider>
        <ToastProvider>
            <App />
        </ToastProvider>
    </ModalProvider>
);