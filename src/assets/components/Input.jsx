import React from 'react';
import { useId } from 'react';
function Input(
    {
      label,
      amount,
      onAmountChange,
      onCurrencyChange,
      currencyOption = [],
      selectCurrency = "usd",
      amoountDisabled = false,
       currencyDisabled = false,
       className = ""
    }
) {
    const amountInput = useId();
    return(
        <>
        <div className={ `bg-white m-3 p-3 rounded-lg text-sm flex mt-4 ${className}`}>
            <div className='w-1/2 ' >
                <label htmlFor="amountInput" className='text-black/40 font-bold mb-2 inline-block mr-55'>{label}</label>
                <input className='outline-none w-full bg-transparent py-1.3' type="number" placeholder='Amount' disabled = {amoountDisabled} value={amount}  id="amountInput" onChange={(e)=>{ onAmountChange && onAmountChange(Number(e.target.value))}} />
            </div>
            <div className='w-1/2 flex flex-col justify-end text-right'>
            <label htmlFor="" className='text-black/40 font-bold mb-2 inline-block '>Currency Type</label>
            <select
            className='w-25 ml-30 rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectCurrency}
            disabled={currencyDisabled}
            onChange={(e) => onCurrencyChange?.(e.target.value)}
            
            >
            {currencyOption.map((item) => (
                <option key={item} value={item}>
                {item}
                </option>
            ))}
            </select>

            </div>
        </div>
        </>
    )
}

export default Input