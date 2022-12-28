import Clock from './clock/Clock';
import SearchBar from './searchBar/SearchBar';
import Gretting from './ gretting/Gretting';
import styles from './Widgets.module.scss'

const Widgets = () => {
    return (
        <div id={styles.container}>
            <SearchBar />
            <Clock />
            <Gretting />
        </div>
    );
};

export default Widgets;