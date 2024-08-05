(function () {
    const countries = [
        {
            name: "Canada",
            cities: [
                { name: "Toronto", population: 3000000 },
                { name: "Ottawa", population: 880000 },
                { name: "Calgary", population: 1100000 }
            ]
        },
        {
            name: "Russia",
            cities: [
                { name: "Moscow", population: 13000000 },
                { name: "Kazan", population: 1100000 },
                { name: "Samara", population: 1200000 }
            ]
        },
        {
            name: "France",
            cities: [
                { name: "Paris", population: 2100000 },
                { name: "Nice", population: 340000 },
                { name: "Toulouse", population: 440000 }
            ]
        },
        {
            name: "Niger",
            cities: [
                { name: "Niamey", population: 1000000 },
                { name: "Zinder", population: 240000 },
                { name: "Maradi", population: 270000 }
            ]
        }
    ];

    const getCountriesWithMaxCities = (countries) =>
        countries.filter(country => country.cities.length === countries.reduce((maxCount, country) =>
            Math.max(maxCount, country.cities.length), 0));

    const getPopulationsByCountry = (countries) => {
        const populationsByCountry = {};

        countries.forEach(country => {
            if (country.cities && country.cities.length > 0) {
                const countryPopulation = country.cities.reduce((sum, city) => sum + city.population, 0);
                populationsByCountry[country.name] = countryPopulation;
            } else {
                populationsByCountry[country.name] = 0;
            }
        });

        return populationsByCountry;
    }

    console.log("Print countries with maximum cities amount:");
    console.log(getCountriesWithMaxCities(countries).map(x => x.name).join(", "));
    console.log();

    const populationsByCountry = getPopulationsByCountry(countries);
    console.log("Get population by country:");
    Object.entries(populationsByCountry).forEach(([countryName, population]) => {
        console.log(`Name: ${countryName}; Population: ${population}`);
    });
})();