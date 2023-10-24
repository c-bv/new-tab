import { useEffect, useRef } from 'react';
import convertBase64 from 'utils/convertBase64';

const Background = () => {
    const backgroundRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const base64 = await convertBase64(file);
            localStorage.setItem('background', base64 as string);
        }
    };

    useEffect(() => {
        const storedBackground = localStorage.getItem('background');
        storedBackground && (backgroundRef.current!.style.backgroundImage = `url(${storedBackground})`);
    }, []);

    return (
        <>
            <div
                className='h-screen w-screen absolute top-0 left-0 bg-cover bg-center bg-no-repeat -z-10'
                ref={backgroundRef}
            />
            <input
                accept='image/jpeg, image/png'
                type="file"
                ref={inputRef}
                onChange={handleUpload}
            />
        </>
    );
};

export default Background;