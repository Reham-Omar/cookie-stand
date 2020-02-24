'use strict';

function getRandomCustmer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var seattle = {
    name:'seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgNumPerCustmer: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custmernumber: [],
    amountOfCookies: [],
    total: 0,
    amountOfCookie: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
            this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
            this.amountOfCookies[i]=parseInt (this.amountOfCookies[i]);
        }
    },
    
    totalAmount:function(amountOfCookies) { 
        for (var i=0 ; i< this.amountOfCookies.length ;i++){
            this.total= this.total + this.amountOfCookies[i];
        }
    },
    
   
    supply: function () {
        var container = document.getElementById('seattle');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = seattle.name;
        for(var i = 0 ; i < seattle.hours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${seattle.hours[i]} : ${seattle.amountOfCookies[i]}Cookies`;
            articleEl.appendChild(liEl);
        }
        var h2Total = document.createElement('h2');
        h2Total.textContent = `The Total is : ${seattle.total}`
        articleEl.appendChild(h2Total);
    }
};

seattle.amountOfCookie();
seattle.totalAmount();
seattle.supply();
console.log(seattle.custmernumber);



var Tokyo = {
    name:'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgNumPerCustmer: 1.2,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custmernumber: [],
    amountOfCookies: [],
    total: 0,
    amountOfCookie: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
            this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
            this.amountOfCookies[i]=parseInt (this.amountOfCookies[i]);
        }
    },
    totalAmount:function(amountOfCookies) { 
        for (var i=0 ; i< this.amountOfCookies.length ;i++){
            this.total= this.total + this.amountOfCookies[i];
        }
    },
   
    supply: function () {
        var container = document.getElementById('Tokyo');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = Tokyo.name;
        for(var i = 0 ; i < Tokyo.hours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${Tokyo.hours[i]} : ${Tokyo.amountOfCookies[i]}Cookies`;
            articleEl.appendChild(liEl);
        }
        var h2Total = document.createElement('h2');
        h2Total.textContent = `The Total is : ${Tokyo.total}`
        articleEl.appendChild(h2Total);
    }
};

Tokyo.amountOfCookie();
Tokyo.totalAmount();
Tokyo.supply();
console.log(Tokyo.custmernumber);


var Dubai = {
    name:'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgNumPerCustmer: 3.7,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custmernumber: [],
    amountOfCookies: [],
    total: 0,
    amountOfCookie: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
            this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
            this.amountOfCookies[i]=parseInt (this.amountOfCookies[i]);
        }
    },
    totalAmount:function(amountOfCookies) { 
        for (var i=0 ; i< this.amountOfCookies.length ;i++){
            this.total= this.total + this.amountOfCookies[i];
        }
    },
   
    supply: function () {
        var container = document.getElementById('Dubai');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = Dubai.name;
        for(var i = 0 ; i < Dubai.hours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${Dubai.hours[i]} : ${Dubai.amountOfCookies[i]}Cookies`;
            articleEl.appendChild(liEl);
        }
        var h2Total = document.createElement('h2');
        h2Total.textContent = `The Total is : ${Dubai.total}`
        articleEl.appendChild(h2Total);
    }
};

Dubai.amountOfCookie();
Dubai.totalAmount();
Dubai.supply();
console.log(Dubai.custmernumber);

var Paris = {
    name:'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgNumPerCustmer: 2.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custmernumber: [],
    amountOfCookies: [],
    total: 0,
    amountOfCookie: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
            this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
            this.amountOfCookies[i]=parseInt (this.amountOfCookies[i]);
        }
    },
    totalAmount:function(amountOfCookies) { 
        for (var i=0 ; i< this.amountOfCookies.length ;i++){
            this.total= this.total + this.amountOfCookies[i];
        }
    },
   
    supply: function () {
        var container = document.getElementById('Paris');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = Paris.name;
        for(var i = 0 ; i < Paris.hours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${Paris.hours[i]} : ${Paris.amountOfCookies[i]}Cookies`;
            articleEl.appendChild(liEl);
        }
        var h2Total = document.createElement('h2');
        h2Total.textContent = `The Total is : ${Paris.total}`
        articleEl.appendChild(h2Total);
    }
};

Paris.amountOfCookie();
Paris.totalAmount();
Paris.supply();
console.log(Paris.custmernumber);


var Lima = {
    name:'Lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgNumPerCustmer: 4.6,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custmernumber: [],
    amountOfCookies: [],
    total: 0,
    amountOfCookie: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
            this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
            this.amountOfCookies[i]=parseInt (this.amountOfCookies[i]);
        }
    },
    totalAmount:function(amountOfCookies) { 
        for (var i=0 ; i< this.amountOfCookies.length ;i++){
            this.total= this.total + this.amountOfCookies[i];
        }
    },
   
    supply: function () {
        var container = document.getElementById('Lima');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = Lima.name;
        for(var i = 0 ; i < Lima.hours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${Lima.hours[i]} : ${Lima.amountOfCookies[i]} Cookies`;
            articleEl.appendChild(liEl);
        }
        var h2Total = document.createElement('h2');
        h2Total.textContent = `The Total is : ${Lima.total}`
        articleEl.appendChild(h2Total);
    }
};

Lima.amountOfCookie();
Lima.totalAmount();
Lima.supply();
console.log(Lima.custmernumber);