import { useEffect, useState } from  "react";
import axios from "axios";


export const useRequestData = (initialValue, url) => {
    const [data, setData] = useState(initialValue);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert("Erro ao acessar endpoint, tente novamente");
                console.log(err)
            });
    }, [url]);
    return [data, setData]
}