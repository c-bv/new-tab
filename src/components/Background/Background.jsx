import { useState, useEffect } from 'react';
import styles from './background.scss';

const Background = () => {
    const reader = new FileReader();
    const [image, setImage] = useState(

    );
    const importPhoto = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            reader.readAsDataURL(file);
        };
        input.click();
        // store photo 
        reader.onload = () => {
            // chrome.storage.sync.set({ photo: reader.result });
            localStorage.setItem('background', reader.result);
            window.location.reload();
        }
    };

    const getTasks = () => {
        chrome.storage.sync.get('tasks', (results) => {
            console.log(results);
        })
    }
    useEffect(() => {
        if (chrome.storage == null || chrome.storage == 'undefined') { console.log('storage doesnt exist') }
        console.log(chrome.storage)
        getTasks();
    }, []);



        const getBackground = () => {
            // const type = chrome.storage.sync.get('type');
            localStorage.setItem('background', 'reader.result');
            if (chrome.storage == null || chrome.storage == 'undefined') { console.log('storage doesnt exist') }



            // switch (type) {
            //     case 'custom':
            //         let customBackground = [];
            //         const customSaved = localStorage.getItem('customBackground');

            //         customSaved && (customBackground = JSON.parse(customSaved));

            //         const object = {
            //             url: customBackground,
            //             type: 'custom',
            //         };
            //         setImage(object);
            //         localStorage.setItem('currentBackground', JSON.stringify(object));
            //         break;
            //     default:
            //         break;
            // }
        };



        useEffect(() => {
            getBackground();
            console.log(image);
        }, []);

        return (
            <>
                {image && image.type === 'custom' && (
                    < img src={image.url.url} alt="background" className={styles.background} />
                )}
            </>
        );
    };

    export default Background;