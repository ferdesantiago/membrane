var axios = require('axios');

const baseUrl = "https://api-pub.bitfinex.com/v2/"; // Domain

const home = (req, res, next) => {
  return res.status(200).json({ status: 1, message: 'Membrane project' });
}

const bookTips = (req, res, next) => {
  const symbols = req.query.symbols;
  const pathParams = "ticker";
  // axios.get(`${baseUrl}/${pathParams}?symbols=${symbols}`)
  axios.get(`${baseUrl}/${pathParams}/${symbols}`)
  .then(response => {
    return res.status(200).json({ status: 1, data: response.data });
  }, error => {
    return res.status(400).json({ status: 0, error: error.toString() });
  })
}

const order = (req, res, next) => {
  const symbols = req.query.symbols;
  const operation = req.query.operation;
  const amount = req.query.amount;
  const pathParams = "tickers"
  axios.get(`${baseUrl}/${pathParams}?symbols=${queryParams}`)
  .then(response => {
    return res.status(200).json({ status: 1, data: response.data });
  }, error => {
    return res.status(400).json({ status: 0, error: error.toString() });
  })
}

module.exports = {
  home,
  bookTips,
  order,
};
