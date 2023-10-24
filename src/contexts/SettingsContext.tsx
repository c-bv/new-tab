import { createContext, useState } from 'react';

const SettingsContext = createContext({} as any);

interface Settings {
    modal: {
        open: boolean;
    };
    clock: {
        format: string;
        showSeconds: boolean;
    };
    search: {
        engine: string;
    };
}

export const SettingsProvider = ({ children }: any) => {

    const [settings, setSettings] = useState<Settings>({
        modal: {
            open: false
        },
        clock: {
            format: '24',
            showSeconds: false
        },
        search: {
            engine: 'google'
        }
    });

    const toggleSettingsModal = () => {
        setSettings({
            ...settings,
            modal: {
                open: !settings.modal.open
            }
        });
    };

    return (
        <SettingsContext.Provider
            value={{
                settings, setSettings,
                toggleSettingsModal
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsContext;