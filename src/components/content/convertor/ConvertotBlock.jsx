import { React, useState, useEffect } from "react";
import ConvertorLine from "./ConvertorLine";
import axios from "axios";
import "../../../styles/convertor.css";

export default function ConvertotBlock() {
  const [rates, setRates] = useState([]);
  const [Amount, setAmount] = useState(0);
  const [Amount1, setAmount1] = useState(0);
  const [Amount2, setAmount2] = useState(0);
  const [Currency, setCurrency] = useState("UAH");
  const [Currency1, setCurrency1] = useState("USD");
  const [Currency2, setCurrency2] = useState("EUR");

  rates.push({
    r01: 1,
    txt: "Українська гривня",
    rate: 1,
    cc: "UAH",
    exchangedate: "05.08.2022",
  });

  useEffect(() => {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        setRates(response.data);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function calculate(params) {
    let count;
    rates.map((el) => {
      if (el.cc == params) {
        count = el.rate;
      }
    });
    return count;
  }

  function handleAmountChange(Amount) {
    setAmount2(format((Amount * calculate(Currency)) / calculate(Currency2)));
    setAmount(Amount);
    setAmount1(format((Amount * calculate(Currency)) / calculate(Currency1)));
  }

  function handleCurrencyChange(Currency) {
    setAmount2(format((Amount * calculate(Currency)) / calculate(Currency2)));
    setCurrency(Currency);
    setAmount1(format((Amount * calculate(Currency)) / calculate(Currency1)));
  }

  function handleAmount1Change(Amount1) {
    setAmount2(format((Amount1 * calculate(Currency1)) / calculate(Currency2)));
    setAmount1(Amount1);
    setAmount(format((Amount1 * calculate(Currency1)) / calculate(Currency)));
  }

  function handleCurrency1Change(Currency1) {
    setAmount2(format((Amount1 * calculate(Currency1)) / calculate(Currency2)));
    setCurrency1(Currency1);
    setAmount(format((Amount1 * calculate(Currency1)) / calculate(Currency)));
  }

  function handleAmount2Change(Amount2) {
    setAmount1(format((Amount2 * calculate(Currency2)) / calculate(Currency1)));
    setAmount2(Amount2);
    setAmount(format((Amount2 * calculate(Currency2)) / calculate(Currency)));
  }

  function handleCurrency2Change(Currency2) {
    setAmount1(format((Amount2 * calculate(Currency2)) / calculate(Currency1)));
    setCurrency2(Currency2);
    setAmount(format((Amount2 * calculate(Currency2)) / calculate(Currency)));
  }

  return (
    <div className="content">
 
      <div className="container">
        <div className="convertor-block">
          <ConvertorLine
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={rates}
            amount={Amount1}
            currency={Currency1}
          />
          <ConvertorLine
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={rates}
            amount={Amount2}
            currency={Currency2}
          />
          <ConvertorLine
            onAmountChange={handleAmountChange}
            onCurrencyChange={handleCurrencyChange}
            currencies={rates}
            amount={Amount}
            currency={Currency}
          />
        </div>
      </div>
    </div>
  );
}
