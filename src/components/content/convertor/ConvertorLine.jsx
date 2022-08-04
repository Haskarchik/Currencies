import React from "react";
import PropTypes from "prop-types";

export default function ConvertorLine(props) {
  ConvertorLine.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
  };
  let htmlName;
  props.currencies.forEach((element) => {
    if (element.cc == props.currency) {
      htmlName = element.txt;
    }
  });

  return (
    <div className="convertorLine">
    <div className="group">
      <input
        className="input"
        type="text"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <select
        className="select"
        value={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
      >
        {props.currencies.map((el) => (
          <option value={el.cc}>{el.cc}</option>
        ))}
      </select>
      </div>
      <div className="text-name">{htmlName}</div>
    
    </div>
  );
}
