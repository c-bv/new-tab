import { createContext, useState } from 'react';
import Modal from '../components/common/modal/Modal';

const ModalContext = createContext({} as any);

interface ModalData {
    open: boolean;
    title: string;
    content: string;
    labelCancel: string;
    labelConfirm: string;
    actionConfirm: () => void;
}

export const ModalProvider = ({ children }: any) => {

    const [modalData, setModalData] = useState({
        open: false,
        title: '',
        content: '',
        labelCancel: '',
        labelConfirm: '',
        actionConfirm: () => { },
    } as ModalData);

    const openModal = ({ title, content, labelCancel, labelConfirm, actionConfirm }: ModalData) => {
        setModalData({
            ...modalData,
            open: true,
            title,
            content,
            labelCancel,
            labelConfirm,
            actionConfirm
        });
    };;

    const closeModal = () => {
        setModalData({
            ...modalData,
            open: false
        });
    };

    return (
        <ModalContext.Provider
            value={{
                modalData,
                openModal,
                closeModal
            }}
        >
            {modalData.open && <Modal data={modalData} />}
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;