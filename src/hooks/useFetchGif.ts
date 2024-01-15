import { useState, useEffect } from 'react';
import { getGifs } from '../services/gifs';
const useFetchGif = (value: string) => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const response = await getGifs(value);
        setImages(response);
        setLoading(false);
    }

    useEffect(() => {
        if(value){
            setLoading(true);
            getImages();
        }
    }, [value]);

    return {
        loading,
        images
    }
}

export {
    useFetchGif,
}