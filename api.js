const onOff = displayStyle => {
document.getElementById('add-sppiner').style.display = displayStyle;
}

const onOffResult = displayStyle => {
document.getElementById('country-container').style.display = displayStyle;
}
const onOffError = displayStyle => {
document.getElementById('error').style.display = displayStyle;
}


const loadResult = () =>{
  const search = document.getElementById('search-input');
  const searchText = search.value;
  search.value = '';

  // display spiner 
  onOff('block');
  onOffResult('none')
 if( searchText == ''){
  onOff('none')
 }

const url =(`https://restcountries.eu/rest/v2/name/${searchText}`)
fetch(url)
.then(res => res.json())
.then(data => DisplayCountries(data))

}




const DisplayCountries = data =>{
 const container = document.getElementById('country-container')
  container.textContent = '';
data.forEach(country =>{

const div = document.createElement('div');
div.classList.add('col')
div.innerHTML = `
<div  >
<img width= 100% src="${country.flag}" alt="img" srcset="">
 <h2> ${country.name} </h2>
 <button onclick="loadDetails('${country.name}')" > Show Details </button>
</div>
`
container.appendChild(div)


})

onOff('none')
onOffResult('block')

}


const loadDetails = name =>{

  const url =`https://restcountries.eu/rest/v2/name/${name}`
  fetch(url)
  .then(res => res.json())
  .then(data => loadCountry(data[0]))
  
}

const loadCountry = countries =>{
console.log(countries)
const details = document.getElementById('country-details');
details.textContent= '';
 const div = document.createElement('div')

 div.innerHTML = `

 <h2> Capital : ${countries.capital} </h2>
 <h3> Population : ${countries.population} </h3>
 <h3>  Area :${countries.area} </h3>
 <h3> Region : ${countries.region} </h3>
 <h3> Borders : ${countries.borders} </h3>
 <h3> Currencies name: ${countries.currencies[0].name} </h3>
 <h3> Currencies symbol : ${countries.currencies[0].symbol} </h3>
 <hr class="border-dark">
 `
details.appendChild(div)

}




