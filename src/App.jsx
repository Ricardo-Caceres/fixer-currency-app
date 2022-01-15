import { useEffect, useState } from "react";
import { ChartHistory } from "./components/ChartHistory";
import { CurrencySymbol } from "./components/CurrencySymbol";
import { useGetCurrency } from "./hooks/useGetCurrency";

function App() {
  const [symbolsValue, setSymbolsValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const urlHistory = `http://data.fixer.io/api/${encodeURI(
    dateValue
  )}?access_key=${encodeURI(
    process.env.REACT_APP_API_KEY
  )}&symbols=MXN,${encodeURI(symbolsValue)}`;
  const [currencyState, setCurrencyState] = useGetCurrency(urlHistory);

  useEffect(() => {
    symbolsValue && dateValue !== null && setCurrencyState();
  }, [symbolsValue, dateValue]);

  return (
    <section className='w-full height-screen'>
      <div className='p-4'>
        <CurrencySymbol
          setSymbolsValue={setSymbolsValue}
          setDateValue={setDateValue}
        />
      </div>
      <div className='w-full p-2 md:p-8 shadow rounded'>
        <ChartHistory currencyState={currencyState} />
      </div>
    </section>
  );
}

export default App;
