import { data } from "autoprefixer";
import { useEffect, useState } from "react"


const localCache = {};

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getfetch();

    }, [url])

    const setLoading = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    

    const getfetch = async () => {
        if(localCache[url]){
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }
        setLoading();
        const response = await fetch(url);
        
        //sleep

        await new Promise(resolve => setTimeout(resolve, 1500));

        if(!response.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });
        
            return;
        }

        const data = await response.json();
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        });
        

        //Manejo de cache 
        localCache[url] = data;

        
    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}