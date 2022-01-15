import { useEffect, useState } from "react";
import { useGetCurrency } from "../hooks/useGetCurrency";

export const CurrencySymbol = ({ setSymbolsValue, setDateValue }) => {
  const [symbols, setSymbols] = useState();
  const urlSymbols = `http://data.fixer.io/api/symbols?access_key=${encodeURI(
    process.env.REACT_APP_API_KEY
  )}`;
  const [dataSymbol, getSymbol] = useGetCurrency(urlSymbols);

  useEffect(() => {
    if (dataSymbol.data !== null) {
      const labels = Object.values(dataSymbol.data.symbols);
      const values = Object.keys(dataSymbol.data.symbols);

      const items = values.map((id, index) => {
        return {
          value: values[index],
          label: `${values[index]} ${labels[index]}`,
        };
      });
      setSymbols(items);
    }
  }, [dataSymbol]);

  useEffect(() => {
    getSymbol();
  }, []);

  const handleChange = (e) => {
    setSymbolsValue(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDateValue(e.target.value);
  };

  return (
    <>
      <form className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 items-center'>
        <input
          className='border-blue-500 rounded shadow p-4'
          type='date'
          name='date'
          onChange={handleChangeDate}
          required
        />
        <select
          className='border-blue-500 rounded shadow p-4 py-5'
          name='symbols'
          onChange={handleChange}
          required
        >
          <option value='default'>Select a exchange currency</option>
          {symbols !== undefined &&
            symbols?.length !== 0 &&
            symbols.map(({ value, label }, i) => (
              <option key={i} value={value}>
                {label}
              </option>
            ))}
        </select>
      </form>
    </>
  );
};
