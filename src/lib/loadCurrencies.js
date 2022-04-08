const loadCurrencies = async () => {
  const currencies = await fetch(
    `https://v6.exchangerate-api.com/v6/c63969b53f8ee1b3552718f5/latest/EUR`
  )
    .then((resp) => resp.json())
    .then(function (data) {
      return data;
    });

  return currencies;
};

export default loadCurrencies;
