import { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

interface Time {
    hours: string;
    minutes: string;
    seconds: string;
    format: string;
}

const Clock = () => {

    const [date, setDate] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
        format: '24'
    } as Time);
    
    const [showSeconds, setShowSeconds] = useState(false);

    const startTime = () => {
        const currentDate = new Date();
        let hours = currentDate.getHours().toString().padStart(2, '0');
        let minutes = currentDate.getMinutes().toString().padStart(2, '0');
        let seconds = currentDate.getSeconds().toString().padStart(2, '0');
        setDate({
            ...date,
            hours,
            minutes,
            seconds
        });
        setTimeout(startTime, 500);
    };

    useEffect(() => {
        startTime();
        console.log(date);
    }, []);

    return (
        <div id={styles.container}>
            <h1>{date.hours}:{date.minutes}{showSeconds && `:${date.seconds}`}</h1>
        </div>
    );
};

export default Clock;