import { createContext, useCallback, useState } from 'react';
import ToastContainer from '../components/common/toast/ToastContainer';

const ToastContext = createContext({} as any);

interface Toast {
    id: number;
    message: string;
    type: string;
}

let id = 0;

export const ToastProvider = ({ children }: any) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback(({ message, type }: any) => {
        setToasts(toasts => [
            ...toasts,
            {
                id: id++,
                message: message,
                type: type
            },
        ]);
    }, [setToasts ]);

    const removeToast = useCallback((id: number) => {
        setToasts(toasts => toasts.filter(toast => toast.id !== id));
    }, [setToasts]);

    return (
        <ToastContext.Provider
            value={{
                addToast,
                removeToast
            }}
        >
            <ToastContainer toasts={toasts} />
            {children}
        </ToastContext.Provider>
    );
};

export default ToastContext;