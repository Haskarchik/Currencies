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
  
   
    return (
    <div className="group">
      <input
        type="text"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <select
        value={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
      >
        { props.currencies.map((el)=>
        <option value={el.cc}> 
        {el.cc}
        </option>)} 
      </select>
    </div>
  );
}
