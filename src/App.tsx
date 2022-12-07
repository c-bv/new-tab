import Navbar from "./components/navbar/Navbar";
import Widgets from "./components/widgets/Widgets";
import SettingsModal from "./components/settings/SettingsModal";
import './assets/scss/App.scss';

const App = () => {
    return (
        <main>
            <Navbar />
            <Widgets />
            <SettingsModal />
        </main>
    );
};

export default App;