﻿const symbolSelectElement = document.getElementById('symbol');
const intervalSelectElement = document.getElementById('interval');

let candlesWS = null;

const chart = LightweightCharts.createChart(document.getElementById('chart'), {
    layout: {
        backgroundColor: '#111111',
        textColor: 'rgba(255, 255, 255, 0.5)',
    },
    grid: {
        vertLines: {
        color: 'rgba(255, 255, 255, 0.2)',
        },
        horzLines: {
        color: 'rgba(255, 255, 255, 0.2)',
        },
    },
    crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
    },

    timeScale: {
       timeVisible: true,
     },
});
   window.addEventListener('resize', () => {
    chart.resize(
        document.documentElement.clientWidth * 4 / 5,
        document.documentElement.clientHeight * 4 / 5,
    ); 
});
     const candlestickSeries = chart.addCandlestickSeries({
         upColor: '#11AA11',
         borderUpColor: '#11AA11',
         wickUpColor: '#AA1111',
         borderDownColor: '#AA1111',
         wickDownColor: '#AA1111',
});
/*
candlestickSeries.setData([
    { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
    { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
    { time: '2018-12-21', open: 108.19, high: 118.43, low: 74.22, close: 75.16 },
    { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
    { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
    { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
    { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
    { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
    { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
    { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
    { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
    { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
]);
*/
const symbol = symbolSelectElement.value;
const interval = intervalSelectElement.value;

setHistoryCandles(symbol, interval)

//streamCandles(symbol, interval)

function setHistoryCandles(symbol, interval) {
    fetch('https://fapi.binance.com/fapi/v1/klines?symbol=${symbol}&interval=${interval}&limit=1500')
        .then(resp => resp.json())
        .then(candlesArr => console.log(candlesArr))
    console.log(symbol, interval)
}

           /* candlestickSeries.setData(
                candlesArr.map(([time, open, high, low, close]) => ({
                  time: time / 1000, open, high, low, close
                }))
            )
    );
} 

function streamCandles(symbol, interval) {
    candlesWS = new WebSocket('wss://fstream.binance.com/ws/${symbol}@kline_${interval}');
    candlesWS.onmessage = event => {
    const { t: time, o: open, h: high, l: low, c: close } = JSON.parse(event.data).
        candlestickSeries.update({time: time / 1000, open, high, low, close});
  }
  
}
*/



