fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
       
        const totalPopulation = data.reduce((accumulator, country) => {
         
            return accumulator + country.population;
        }, 0); 
        
        console.log(`Total population of all countries: ${totalPopulation}`);
    })