async function main() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url);
    const data = await response.json();

    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);

    const usd = document.getElementById('usd');
    const eur = document.getElementById('eur');

    usd.innerText = usdRate;
    eur.innerText = eurRate;
}

main();