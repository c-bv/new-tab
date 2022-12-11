import { useEffect } from 'react';
import useToast from '../../../hooks/useToast';
import styles from './Toast.module.scss';

const Toast = ({ children, id }: any) => {
    const { removeToast } = useToast();

    useEffect(() => {
        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }, [removeToast, id]);

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                {children}
            </div>
        </div>
    );
};

export default Toast;