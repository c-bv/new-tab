import { useContext } from 'react';
import SettingsContext from '../contexts/SettingsContext';

const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) throw new Error('context must be use inside provider');
    return context;
};

export default useSettings;