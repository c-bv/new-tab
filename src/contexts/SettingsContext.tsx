import { createContext, useState } from 'react';

const SettingsContext = createContext({} as any);

interface Settings {
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
        clock: {
            format: '24',
            showSeconds: true
        },
        search: {
            engine: 'google'
        }
    });

    return (
        <SettingsContext.Provider
            value={{
                settings, setSettings
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsContext;