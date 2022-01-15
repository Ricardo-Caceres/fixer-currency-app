import c3 from "c3";
import { useEffect, useState } from "react";

export const ChartHistory = ({ currencyState }) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    if (currencyState.data !== null && currencyState.lenght !== 0) {
      const propertyValues = Object.values(currencyState.data.rates);
      const propertyNames = Object.keys(currencyState.data.rates);
      setGraphData([
        ["x", currencyState.data.date],
        [propertyNames[0], propertyValues[0]],
        [propertyNames[1], propertyValues[1]],
      ]);
    }
  }, [currencyState]);

  useEffect(() => {
    c3.generate({
      bindto: "#chartHistory",
      data: {
        x: "x",
        columns: graphData,
        type: "bar",
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d",
          },
        },
      },
    });
  }, [graphData]);

  return <div id='chartHistory' />;
};
