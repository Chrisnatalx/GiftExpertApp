import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/GetGifs";

export const useFetchGifs = (category) => {
    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages(newImages)
    }
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            getImages();
            setIsLoading(false)
        }, [])
  return{
    images,
    isLoading,
  }
}
