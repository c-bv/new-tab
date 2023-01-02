import styles from './Gretting.module.scss';

const Gretting = () => {

    return (
        <div className={styles.container}>
            <h1>Good Morning</h1>
            <h2>It's currently 9:41 AM in New York</h2>
        </div>
    );
};

export default Gretting;