

url1 ='https://api.whatsonchain.com/v1/bsv/main/address/'
url3 ='/balance'
url2  = address
balanceurl = url1 + url2 + url3
const woc_url = balanceurl
async function getwoc_url() {
  const response = await fetch(woc_url);
  const datawoc = await response.json();
  document.getElementById('con').textContent=datawoc.confirmed;
  document.getElementById('ucon').textContent=datawoc.unconfirmed;
  
}
getwoc_url();