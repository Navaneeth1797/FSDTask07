//1.Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).


//a.Get all the countries from the Asia continent /region using the Filter function

let XMLHttpRequest = require("xhr2");

let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3/all');

xhr.onload = function () {
 
   let countries = JSON.parse(xhr.responseText);

    let asiaCountries = countries.filter(function (country) {
       
        return country.region === 'Asia';
        
    });

    console.log(asiaCountries);
  
};

xhr.send();


//b. Get all the countries with a population of less than 2 lakhs using Filter function

let XMLHttpRequest2 = require("xhr2");

let xhr2 = new XMLHttpRequest2();


xhr2.open('GET', 'https://restcountries.com/v3/all');

xhr2.onload = function () {

    let countries2 = JSON.parse(xhr2.responseText);

    let Countriespop = countries2.filter((country) => {

        let population = country.population

        return population < 200000;
    });

    console.log(Countriespop);

}
 xhr2.send()


//c.Print the following details name, capital, flag using forEach function
 
let XMLHttpRequest3 = require("xhr2");
let xhr3 = new XMLHttpRequest3();


xhr3.open('GET', 'https://restcountries.com/v3.1/all');

xhr3.onload = function () {
  
    let countries3 = JSON.parse(xhr3.responseText);

    
    countries3.forEach(function (country) {

        console.log('Name: ' + country.name.common);
        
        console.log('Capital: ' + country.capital);
        
        console.log('Flag: ' + country.flags.svg);
        
        console.log('---'); 
        
    });
  
};

xhr3.send();

//d.Print the total population of countries using reduce function


 
let XMLHttpRequest4 = require("xhr2");
let xhr4 = new XMLHttpRequest4();


xhr4.open('GET', 'https://restcountries.com/v3.1/all');

xhr4.onload = function () {
  
    let countries4 = JSON.parse(xhr4.responseText);

    Population = countries4.reduce(function (addpop, country) {

        return addpop + (country.population || 0);

    }, 0);

    console.log(Population);

}
xhr4.send(); 


//e.Print the country which uses US Dollars as currency

let XMLHttpRequest5 = require("xhr2");

let xhr5 = new XMLHttpRequest5();


xhr5.open('GET', 'https://restcountries.com/v3.1/all');

xhr5.onload = function () {
  
    let countries5 = JSON.parse(xhr5.responseText);

    let USDollarCountries = countries5.filter(function (country) {

        return country.currencies && country.currencies['USD'];
        
    });

    console.log('US Dollars currency:');

    USDollarCountries.forEach(function (country) {

        console.log(country.name.common);
        
    });

  }

xhr5.send();
