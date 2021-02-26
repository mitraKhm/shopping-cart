import {
    useEffect, useState
} from "react";

const useApi = (url) => {
    useEffect(() => {
        const [data,setData]=useState(null);
        const [error , setError] = useState(null)
        const fetchData = async () => {
            try{
                const res = fetch(url);
                const jsonRes = await res.json();
                setData( jsonRes)
    
            } catch(e) {
    setError(e)
            }
          
        };

        fetchData();
    }, [url])
    return {
      data, 
      error, 
    };
};

export default useApi;