import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Widgets from './components/widgets/Widgets';
import Settings from './components/settings/Settings';
import Background from './components/widgets/background/Background';
import './assets/scss/App.scss';

const App = () => {
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <>
            <Background />
            <main>
                <Navbar
                    openSettings={openSettings}
                    setOpenSettings={setOpenSettings}
                />
                <Widgets />
                {openSettings && <Settings setOpenSettings={setOpenSettings} />}
            </main>
        </>
    );
};

export default App;