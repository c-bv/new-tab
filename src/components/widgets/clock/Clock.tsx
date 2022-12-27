import { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

interface Time {
    time: string;
    format: string;
}

const Clock = () => {
    const [clock, setClock] = useState({
        time: '',
        format: '24'
    } as Time);
    const [showSeconds, setShowSeconds] = useState(true);

    const startTime = () => {
        const currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();

        if (clock.format === '12') {
            hours = hours % 12;
            hours = hours ? hours : 12;
        }

        const formatHours = hours.toString().padStart(2, '0');
        const formatMinutes = minutes.toString().padStart(2, '0');
        const formatSeconds = seconds.toString().padStart(2, '0');

        setClock({
            ...clock,
            time: `${formatHours}:${formatMinutes}${showSeconds ? `:${formatSeconds}` : ''}`
        });

        setTimeout(startTime, 1000);
    };

    useEffect(() => {
        startTime();
        // eslint-disable-next-line
    }, []);

    return (
        <div id={styles.container}>
            <h1>{clock.time}</h1>
        </div>
    );
};

export default Clock;