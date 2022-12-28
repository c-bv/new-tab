import { useEffect, useRef } from 'react';
import convertBase64 from '../../../utils/convertBase64';
import styles from './Background.module.scss';

const Background = () => {
    const backgroundRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const base64 = await convertBase64(file);
            // store in local storage
            localStorage.setItem('background', base64 as string);
        }
    }

    useEffect(() => {
        const background = localStorage.getItem('background');
        background && (backgroundRef.current!.style.backgroundImage = `url(${background})`);
    }, []);

    return (
        <div id={styles.backgroundImage} className={styles.fadeIn} ref={backgroundRef} />
        // <input
        //     accept='image/jpeg, image/png, image/webp, image/webm, image/gif, video/mp4, video/webm, video/ogg'
        //     id="selectAvatar"
        //     type="file"
        //     ref={inputRef}
        //     onChange={handleUpload}
        // />
    );
};

export default Background;