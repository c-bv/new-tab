import Background from './background/Background';
import Clock from './clock/Clock';
import SearchBar from './searchBar/SearchBar';

const Widgets = () => {
    return (
        <>
            <SearchBar />
            <Clock />
            <Background />
        </>
    );
};

export default Widgets;