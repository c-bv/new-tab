import { useState } from 'react';
import LeftMenu from './leftMenu/LeftMenu';
import Button from '../ui/button/Button';
import SearchBar from './sections/SearchBar';
import CrossIcon from '../../assets/icons/CrossIcon';
import styles from './Settings.module.scss';

interface SettingsProps {
    setOpenSettings: (open: boolean) => void;
}

const Settings = ({ setOpenSettings }: SettingsProps) => {
    const [activeTab, setActiveTab] = useState('navbar');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'navbar':
                return <div>navbar</div>;
            case 'links':
                return <div>links</div>;
            case 'searchbar':
                return <SearchBar />;
            case 'weather':
                return <div>weather</div>;
            case 'clock':
                return <div>clock</div>;
            case 'news':
                return <div>news</div>;
            case 'calendar':
                return <div>calendar</div>;
            case 'notes':
                return <div>notes</div>;
            case 'music':
                return <div>music</div>;
            case 'calculator':
                return <div>calculator</div>;
            case 'crypto':
                return <div>crypto</div>;
            case 'translate':
                return <div>translate</div>;
            case 'general':
                return <div>General</div>;
            case 'appearance':
                return <div>Appearance</div>;
            case 'language':
                return <div>language</div>;
            case 'privacy':
                return <div>privacy</div>;
            case 'security':
                return <div>security</div>;
            case 'about':
                return <div>about</div>;
            default:
                return <div>navbar</div>;
        }

    };

    return (
        <div id={styles.settingsModal}>
            <LeftMenu
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div id={styles.container}>
                <div id={styles.header}>
                    <Button
                        id={styles.closeButton}
                        type='icon'
                        onClick={() => setOpenSettings(false)}
                    >
                        <CrossIcon />
                    </Button>
                </div>
                <section id={styles.outlet}>
                    {renderTabContent()}
                </section>
            </div>
        </div>
    );
};

export default Settings;