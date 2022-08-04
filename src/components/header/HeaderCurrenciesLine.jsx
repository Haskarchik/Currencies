import React from 'react'

export default function HeaderCurrenciesLine(props) {

    let count

    props.currency.forEach(el => {
        if(el.cc == props.name){
            count = el.rate
        }
    });
  return (
    <div className='current-currency'>
        <div className="currency-name">{props.name}</div>
        <div className="currency-count">{count}</div>
        
    </div>
  )
}
