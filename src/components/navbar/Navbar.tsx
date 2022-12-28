import SettingsIcon from '../../assets/icons/SettingsIcon';
import Button from '../ui/button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    toggleSettingsModal: () => void;
}

const Navbar = ({ toggleSettingsModal }: NavbarProps) => {

    return (
        <div className={styles.container}>
            <Button
                type='icon'
                onClick={toggleSettingsModal}
            >
                <SettingsIcon />
            </Button>
        </div>
    );
};

export default Navbar;