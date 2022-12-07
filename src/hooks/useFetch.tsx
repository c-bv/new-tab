import { useState, useEffect } from 'react';

interface Props {
    url: string;
}

const useFetch = ({ url }: Props) => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return { data, loading };
}

export default useFetch;