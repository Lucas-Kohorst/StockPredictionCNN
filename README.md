# StockPredictionCNN
### A Stock Prediction website that uses tensorflow.js and a Convolutional Neural Network (CNN) to predict next day prices 

Forked from [Gago993](https://github.com/Gago993/StockPredictionCNN)
You can find his Medium post about how he built the model [here](https://towardsdatascience.com/stock-price-prediction-system-using-1d-cnn-with-tensorflow-js-machine-learning-easy-and-fun-fe5323e68ffb)

Instead of using dates as the features for predictions [Gago993](https://github.com/Gago993/) used how the price changed over thee last seven days since it seems more reliable and unlike the date is not always increasing at a steady rate.

> What I think is more connected with the current stock price is how the stock price changed in the past. So for example the stock price today is dependent on the stock price changes from the last 7 days. For that reason we define 7 features for our test set and each one of them is labeled with the stock price for the next day.

## Additions in this fork
- Added support for all tickers that the IEX finnance API supports
- Added error reporting when a stock cannot be predicted properly
- Added an input for how many days you would like to predict your stock in the future
