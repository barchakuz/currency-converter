import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currency, setCurrency] = useState([]);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('PKR');
  const [amount, setAmount] = useState(0);
  const [exchange, setExchange] = useState(0);
  const [convert, setConvert] = useState(0);

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        return response.json();
      })
      .then((data) => {
        setCurrency(Object.keys(data.rates));
        setExchange(data.rates[to]);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error fetching data. Please try again later.');
      });
  }, [from, to]);

  useEffect(() => {
    setConvert(amount * exchange);
  }, [amount, exchange]);

  return (
    <>
    <div className='bg-gray-200 grid gap-2 grid-cols-1 '>
      <h1 className=' font-extrabold from-neutral-950 text-lg'>Currency Converter</h1>
        <div className=' m-2 col-span-1 max-h-28'>
          <label htmlFor="Amount" className=' font-semibold'>Amount</label>
          <input type="number" name="Amount" id="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}  className=' border-y-4 border-green-500'/>

          <select value={from} onChange={(e) => setFrom(e.target.value)} className=' font-semibold border-y-4 border-yellow-300'>
            {currency.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select value={to} onChange={(e) => setTo(e.target.value)}  className=' font-semibold border-y-4 border-red-300'>
            {currency.map((out) => (
              <option key={out} value={out}>
                {out}
              </option>
            ))}
          </select>
          </div>
        <div className=' col-span-1 my-2 max-h-28'>
          <label htmlFor="convert" className=' font-semibold'>Converted Amount</label>
          <input type="text" name="convert" id="convert" value={convert} readOnly className=' border-y-4 border-red-500'/>
        </div>

    </div>
    </>
  );
}

export default App;
