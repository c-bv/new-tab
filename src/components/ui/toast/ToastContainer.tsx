import { createPortal } from 'react-dom';
import Toast from './Toast';
import styles from './ToastContainer.module.scss';

interface ToastContainerProps {
    toasts: any[];
}

const ToastContainer = ({ toasts }: ToastContainerProps) => {
    return createPortal(
        <div id={styles.container}>
            {toasts.map((toast, key) => (
                <Toast key={key} id={toast.id}>
                    {toast.message}
                </Toast>
            ))}
        </div>
        , document.getElementById('root') as HTMLElement
    );
};

export default ToastContainer;