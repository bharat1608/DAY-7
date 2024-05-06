fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
       
        const asianCountries = data.filter(country => country.region === 'Asia');
        
       
        asianCountries.forEach(country => console.log(country.name.common));
    })
   
