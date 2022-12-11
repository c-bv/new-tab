import Button from '../ui/button/Button';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import styles from './Navbar.module.scss';

interface NavbarProps {
    openSettings: boolean;
    setOpenSettings: (open: boolean) => void;
}

const Navbar = ({ openSettings, setOpenSettings }: NavbarProps) => {

    return (
        <div className={styles.container}>
            <Button
                type='icon'
                onClick={() => setOpenSettings(!openSettings)}
            >
                <SettingsIcon />
            </Button>
        </div>
    );
};

export default Navbar;