// import React, { useState, useEffect } from 'react';

// function CurrencyConverter() {
//   const [currencies, setCurrencies] = useState([]);
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('EUR');
//   const [amount, setAmount] = useState(1);
//   const [exchangeRate, setExchangeRate] = useState();
//   const [convertedAmount, setConvertedAmount] = useState();

//   useEffect(() => {
//     fetch('https://api.exchangerate-api.com/v4/latest/' + fromCurrency)
//       .then(response => response.json())
//       .then(data => {
//         setCurrencies(Object.keys(data.rates));
//         setExchangeRate(data.rates[toCurrency]);
//       });
//   }, [fromCurrency, toCurrency]);

//   useEffect(() => {
//     if (exchangeRate != null) {
//       setConvertedAmount((amount * exchangeRate).toFixed(2));
//     }
//   }, [amount, exchangeRate]);

//   function handleFromAmountChange(event) {
//     setAmount(event.target.value);
//   }

//   function handleFromCurrencyChange(event) {
//     setFromCurrency(event.target.value);
//   }

//   function handleToCurrencyChange(event) {
//     setToCurrency(event.target.value);
//   }

//   return (
//     <div>
//       <h1>Currency Converter</h1>
//       <div>
//         <input
//           type="number"
//           value={amount}
//           onChange={handleFromAmountChange}
//         />
//         <select value={fromCurrency} onChange={handleFromCurrencyChange}>
//           {currencies.map(currency => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <h2>=</h2>
//       </div>
//       <div>
//         <h2>{convertedAmount}</h2>
//         <select value={toCurrency} onChange={handleToCurrencyChange}>
//           {currencies.map(currency => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default CurrencyConverter;
