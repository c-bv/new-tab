import { createPortal } from 'react-dom';
import useModal from '../../../hooks/useModal';
import styles from './Modal.module.scss';
import CrossIcon from '../../../assets/icons/CrossIcon';

const Modal = ({ data }: any) => {
    const { closeModal } = useModal();

    return createPortal(
        <div id={styles.wrapper}>
            <div id={styles.container}>
                <div id={styles.header}>
                    <h2>{data.title}</h2>
                    <button onClick={closeModal}>
                        <CrossIcon />
                    </button>
                </div>
                <div id={styles.content}>
                    <p>{data.content}</p>
                </div>
                <div id={styles.footer}>
                    <button onClick={closeModal}>{data.labelCancel}</button>
                    <button onClick={data.actionConfirm}>{data.labelConfirm}</button>
                </div>
            </div>
        </div>
        , document.getElementById('root') as HTMLElement
    );
};

export default Modal;