//var JSONcontent = {
  //  "BTC" :10000,
    //"BSV" :100
//};

//var output = document.getElementById("livedata");
//output.innerHTML = 'BTC Price $' +JSONcontent.BTC+ '<br> BSV Price $' +JSONcontent.BSV ; 


//const woc_api_url = 'https://api.whatsonchain.com/v1/bsv/main/exchangerate'
//async function getwoc() {
 // const response = await fetch(woc_api_url);
  //const data = await response.json();
  //document.getElementById('prc').textContent=data.rate;
  //document.getElementById('cur').textContent=data.currency;
  
//}
//getwoc();

const crypto_comp_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR&'
const my_api_key = ""  //Add crypto compare api key
const my_crypto_url = crypto_comp_url + my_api_key


async function getcc() {
  const response = await fetch(my_crypto_url);
  const data = await response.json();
  document.getElementById('prc').textContent=data.ETH.USD;
  document.getElementById('prc1').textContent=data.BTC.USD;
  document.getElementById('prc2').textContent=data.BTC.EUR;
  document.getElementById('prc3').textContent=data.ETH.EUR;
}
getcc();

const crypto_comp_url2 = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&'
const my_crypto_url2 = crypto_comp_url2 + my_api_key

async function getcc2() {
  const response = await fetch(my_crypto_url2);
  const jpydata = await response.json();
  document.getElementById('prc5').textContent=jpydata.JPY;
}
getcc2();

const quandl_url1 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_ROU?start_date=2021-01-31&end_date=2021-01-31&api_key='
const quandl_api = ''   //Add quandl api here
const quandl_url = quandl_url1 + quandl_api
async function getquandl() {
  const response = await fetch(quandl_url);
  const quandldata = await response.json();
  document.getElementById('quandl').textContent= quandldata.dataset.data[0][2];
  document.getElementById('quandl2').textContent= quandldata.dataset.data[0][4];

}
getquandl();

const quandl_url12 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_ISR?start_date=2021-01-31&end_date=2021-01-31&api_key='
const quandl_url2 = quandl_url12 + quandl_api
async function getquandl2() {
  const response = await fetch(quandl_url2);
  const quandldata2 = await response.json();
  document.getElementById('quandl3').textContent= quandldata2.dataset.data[0][2];
  document.getElementById('quandl5').textContent= quandldata2.dataset.data[0][4];

}
getquandl2();

const quandl_url31 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_ARG?start_date=2021-01-31&end_date=2021-01-31&api_key='
const quandl_url3 = quandl_url31 + quandl_api

async function getquandl3() {
  const response = await fetch(quandl_url3);
  const quandldata3 = await response.json();
  document.getElementById('quandl6').textContent= quandldata3.dataset.data[0][2];
  document.getElementById('quandl7').textContent= quandldata3.dataset.data[0][4];

}
getquandl3();

const quandl_url41 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_BRA?start_date=2021-01-31&end_date=2021-01-31&api_key='
const quandl_url4 = quandl_url41 + quandl_api

async function getquandl4() {
  const response = await fetch(quandl_url4);
  const quandldata4 = await response.json();
  document.getElementById('quandl8').textContent= quandldata4.dataset.data[0][2];
  document.getElementById('quandl9').textContent= quandldata4.dataset.data[0][4];

}
getquandl4();

const quandl_url51 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_CHN?start_date=2021-01-31&end_date=2021-01-31&api_key='
const quandl_url5 = quandl_url51 + quandl_api

async function getquandl5() {
  const response = await fetch(quandl_url5);
  const quandldata5 = await response.json();
  document.getElementById('quandl10').textContent= quandldata5.dataset.data[0][2];
  document.getElementById('quandl11').textContent= quandldata5.dataset.data[0][4];

}
getquandl5();