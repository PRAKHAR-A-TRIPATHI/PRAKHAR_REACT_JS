import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((Response) => Response.json())
            .then((response) => setData(response[currency]));
    }, [currency])
    console.log(data)
    return data;
}

export default useCurrencyInfo;
