import './assets/scss/App.scss';
import Navbar from './components/navbar/Navbar';
import Settings from './components/settings/Settings';
import Background from './components/widgets/background/Background';
import Widgets from './components/widgets/Widgets';
import useSettings from './hooks/useSettings';

const App = () => {
    const { settings, toggleSettingsModal } = useSettings();

    return (
        <>
            <Background />
            <main>
                <Navbar toggleSettingsModal={toggleSettingsModal} />
                <Widgets />
                {settings.modal.open && <Settings toggleSettingsModal={toggleSettingsModal} />}
            </main>
        </>
    );
};

export default App;