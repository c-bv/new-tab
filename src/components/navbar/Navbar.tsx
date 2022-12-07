import styles from './Navbar.module.scss';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import useToast from '../../hooks/useToast';

const Navbar = () => {
    const { addToast } = useToast();

    const handleSettingsClick = () => {
        addToast({
            message: 'Settings clicked'
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.tooltip} onClick={handleSettingsClick}>
                <SettingsIcon />
                <span className={styles.tooltipText}>Settings</span>
            </div>
        </div>
    );
};

export default Navbar;