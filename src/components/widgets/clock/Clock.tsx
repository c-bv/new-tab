import { useEffect, useState } from 'react';
import useSettings from '../../../hooks/useSettings';
import styles from './Clock.module.scss';

interface ClockProps {
    time: string;
    format: string;
}

const Clock = () => {
    const { settings } = useSettings();

    const [clock, setClock] = useState<ClockProps>({
        time: '',
        format: settings.clock.format
    });

    const renderTime = () => {
        const currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();

        if (settings.clock.format === '12') {
            hours = hours % 12;
            hours = hours ? hours : 12;
        }

        const formatHours = hours.toString().padStart(2, '0');
        const formatMinutes = minutes.toString().padStart(2, '0');
        const formatSeconds = seconds.toString().padStart(2, '0');
        const formatTime = `${formatHours}:${formatMinutes}${settings.clock.showSeconds ? `:${formatSeconds}` : ''}`;

        setClock({
            time: formatTime,
            format: settings.clock.format
        });
        setTimeout(renderTime, 1000);
    };

    useEffect(() => {
        renderTime();
        // eslint-disable-next-line
    }, []);

    return (
        <div id={styles.container}>
            <h1>{clock.time}</h1>
        </div>
    );
};

export default Clock;