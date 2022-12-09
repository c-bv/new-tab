import { useContext } from 'react';
import ModalContext from '../contexts/ModalContext';

const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('context must be use inside provider');
    return context;
};

export default useModal;