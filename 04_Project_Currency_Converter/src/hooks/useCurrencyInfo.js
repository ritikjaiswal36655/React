import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(
    () => {
      fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then(response => response.json())
        .then(data => {
          setData(data.rates);
          console.log(data); // Log the updated data
        })
        .catch(error => console.error("Error fetching data:", error));
    },
    [currency]
  );

  return data;
}

export default useCurrencyInfo;
