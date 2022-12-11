import SettingsIcon from '../../../assets/icons/SettingsIcon';
import styles from './LeftMenu.module.scss';

interface LeftMenuProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const LeftMenu = ({ activeTab, setActiveTab }: LeftMenuProps) => {

    const menuItems: any = {
        widgets: [
            {
                id: 'navbar',
                icon: <SettingsIcon />
            },
            {
                id: 'links',
                icon: <SettingsIcon />
            },
            {
                id: 'searchbar',
                icon: <SettingsIcon />
            },
            {
                id: 'weather',
                icon: <SettingsIcon />
            },
            {
                id: 'clock',
                icon: <SettingsIcon />
            },
            {
                id: 'news',
                icon: <SettingsIcon />
            },
            {
                id: 'calendar',
                icon: <SettingsIcon />
            },
            {
                id: 'notes',
                icon: <SettingsIcon />
            },
            {
                id: 'music',
                icon: <SettingsIcon />
            },
            {
                id: 'calculator',
                icon: <SettingsIcon />
            },
            {
                id: 'crypto',
                icon: <SettingsIcon />
            },
            {
                id: 'translate',
                icon: <SettingsIcon />
            }
        ],
        general: [
            {
                id: 'general',
                icon: <SettingsIcon />
            },
            {
                id: 'appearance',
                icon: <SettingsIcon />
            },
            {
                id: 'language',
                icon: <SettingsIcon />
            }
        ],
        account: [
            {
                id: 'privacy',
                icon: <SettingsIcon />
            },
            {
                id: 'security',
                icon: <SettingsIcon />
            }
        ],
        about: [
            {
                id: 'about',
                icon: <SettingsIcon />
            }
        ]
    };

    return (
        <div id={styles.container}>
            <h2>Settings</h2>
            <div id={styles.menuItems}>
                {Object.keys(menuItems).map((category: any, index: any) => (
                    <div key={index} className={styles.categories}>
                        {menuItems[category].map((tab: any, index: any) => (
                            <div
                                key={index}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.icon}
                                <span>{tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default LeftMenu;