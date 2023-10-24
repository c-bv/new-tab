import { Background, Widgets } from 'components/widgets/index';
// import { Navbar } from '@components/index';
const App = () => {


    return (
        <>
        <Background />
        <main>
            {/* <Navbar /> */}
            <Widgets />
            {/* {settings.modal.open && <Settings toggleSettingsModal={toggleSettingsModal} />} */}
        </main>
    </>
    );
};

export default App;