import axios from "axios";
import { useState } from "react";

export const useGetCurrency = (url) => {
  const [currencyState, setCurrencyState] = useState({
    data: null,
    error: null,
  });

  const getCurrency = async () => {
    try {
      const response = await axios.get(url);
      setCurrencyState({
        data: response.data,
        error: null,
      });
    } catch (error) {
      console.error(error);
      setCurrencyState({ data: null, error: error });
    }
  };

  return [currencyState, getCurrency];
};
