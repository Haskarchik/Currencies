import React, { useEffect, useState } from "react";
import HeaderCurrenciesLine from "./HeaderCurrenciesLine";
import axios from "axios";
import "../../styles/header.css";

const Header = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        setRates(response.data);
      });
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="header-title">Currencies</div>
        <div className="header-currency-row">
          <HeaderCurrenciesLine currency={rates} name={"USD"} />
          <HeaderCurrenciesLine currency={rates} name={"EUR"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
