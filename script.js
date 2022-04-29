/*we r gonna use web socket| use esta vez web socket*/

let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let stockPriceElement = document.getElementById('stock-price');
let lastPrice = null;

ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2); 
  stockPriceElement.innerText = price;

  stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price ? 'green' : 'red';

lastPrice = price;
};
