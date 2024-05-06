fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Iterate over each country and print name, capital, and flag
        data.forEach(country => {
            const name = country.name.common;
            const capital = country.capital[0];
            const flag = country.flags.png;
            
            console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
        });
    })
    .catch(error => console.log('Error fetching data:', error));
