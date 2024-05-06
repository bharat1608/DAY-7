fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Filter countries with population less than 2 lakhs
        const countriesWithPopulationLessThan2Lakhs = data.filter(country => {
            /// Converting population to number and compare
            return country.population < 200000;
        });

        // Print the names of countries with population less than 2 lakhs
        countriesWithPopulationLessThan2Lakhs.forEach(country => console.log(country.name.common));
    })
    
