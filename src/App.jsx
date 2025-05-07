import { useState } from 'react'
import Input from './assets/components/Input.jsx'
import useCurrencyInfo from "./hooks/useCurrencyinfo.js"
function App() {
  const [amount, setAmount] = useState(0);
  const [To ,setTo] = useState("usd");
  const [From,setFrom] = useState("inr");
  const [convertedAmount ,setConvertedAmount] = useState(0);
  const swap = ()=>{
    setFrom(To);
    setTo(From);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  
   const currencyInfo = useCurrencyInfo(From)

  const convert = ()=>{
  setConvertedAmount(amount * currencyInfo[To])
  }

  const options = Object.keys(currencyInfo);
  console.log(options);
  
  return (
    <>
      <div className='flex flex-col bg-white/15 w-[480px] h-[320px] border-amber-50  border rounded-xl '>
      <div className='relative top-5'>
        <Input label = "From"
        currencyOption={options}
        onCurrencyChange={(val)=>setTo(val)}
        selectCurrency={To}
        onAmountChange={(val)=>setAmount(val)}
        amount = {amount}
        />
        
      </div >
      <div className='flex justify-center '>
      <button onClick={swap} className='absolute z-10   w-17 h-7 rounded-sm  text-white bg-blue-700'>swap</button>
      </div>
      

      <Input
        label="To"
        amount={convertedAmount}
        currencyOption={options}
        onCurrencyChange={(val)=>setFrom(val)}
        selectCurrency={From}
        onAmountChange={(val)=>setConvertedAmount(val)}
        className='relative top-1'
        />
        <div className='flex justify-center '>
        <button onClick={convert} className='text-[18px] mt-3 p-1 h-15 w-114  rounded-lg text-center text-white bg-blue-700/80'> Convert {From.toUpperCase()} to {To.toUpperCase()}</button>

        </div>
      </div>
    </>
  )
}

export default App
