const apiURL = `https://v6.exchangerate-api.com/v6/2b6c8cfd383ea6f056349734/latest/`;

const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

// Fetch available currencies
fetch(`${apiURL}USD`)
    .then(res => res.json())
    .then(data => {
        const currencies = Object.keys(data.conversion_rates);
        currencies.forEach(currency => {
            const optionFrom = document.createElement('option');
            optionFrom.value = currency;
            optionFrom.textContent = currency;
            fromCurrency.appendChild(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = currency;
            optionTo.textContent = currency;
            toCurrency.appendChild(optionTo);
        });
    });

// Convert currency
convertBtn.addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === '' || isNaN(amount)) {
        result.textContent = 'Please enter a valid amount.';
        return;
    }

    fetch(`${apiURL}${from}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[to];
            const convertedAmount = (amount * rate).toFixed(2);
            result.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
        })
        .catch(err => {
            result.textContent = 'Something went wrong. Please try again later.';
        });
});
