'use strict';

function getRandomCustmer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totalAmountOfCookies = []; //i will save total for each store 
var totalOfTotal = 0;



function Cookie(name, minCustPerHour, maxCustPerHour, avgNumPerCustmer) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgNumPerCustmer = avgNumPerCustmer;
    this.amountOfCookies = [];// this will save the amount of cookies per hour 
    this.custmernumber = [];
    this.totalPerHour = [];
    this.total = 0;

}

// calculate amount of cooki per hour 
Cookie.prototype.amountOfCookie = function () {
    for (let i = 0; i < hours.length; i++) {
        this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
        this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
        this.amountOfCookies[i] = parseInt(this.amountOfCookies[i]);

    };
}

Cookie.prototype.totalAmount = function () {
    for (var i = 0; i < hours.length; i++) {
        this.total += this.amountOfCookies[i];
    };
    totalAmountOfCookies.push(this.total);
}


var container = document.getElementById('SalmonCookie');
var tableEl = document.createElement('table');
container.appendChild(tableEl);


var trEl = document.createElement('tr');
tableEl.appendChild(trEl);

//header 

var tdEl = document.createElement('td');
tdEl.textContent = '';
trEl.appendChild(tdEl);

for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
}
var tdEl = document.createElement('td');
tdEl.textContent = 'total';
trEl.appendChild(tdEl);

Cookie.prototype.supply = function () {
    this.amountOfCookie();
    this.totalAmount();



    var tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);

    // each row   
    for (var i = 0; i < 5; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.name;
        tr1El.appendChild(tdEl);

        for (var i = 0; i < hours.length; i++) {
            var tdEl = document.createElement('td');
            tdEl.textContent = this.amountOfCookies[i];
            tr1El.appendChild(tdEl);

        }
        var tdEl = document.createElement('td');
        tdEl.textContent = this.total;
        tr1El.appendChild(tdEl);
    };

};
var Seattle = new Cookie('Seattle', 23, 65, 6.3);

Seattle.supply();


var Tokyo = new Cookie('Tokyo', 3, 24, 1.2);

Tokyo.supply();
var Dubai = new Cookie('Dubai', 11, 38, 3.7);

Dubai.supply();
var Paris = new Cookie('Paris', 20, 38, 2.3);

Paris.supply();
var Lima = new Cookie('Lima', 2, 16, 4.6);

Lima.supply();

var tr6El = document.createElement('tr');
tableEl.appendChild(tr6El);

//footer
var tdEl = document.createElement('td');
tdEl.textContent = 'total';
tr6El.appendChild(tdEl);

for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Seattle.amountOfCookies[i] + Tokyo.amountOfCookies[i] + Dubai.amountOfCookies[i] + Paris.amountOfCookies[i] + Lima.amountOfCookies[i]
    tr6El.appendChild(tdEl);
}
var tdEl = document.createElement('td');
for (var i = 0; i < 5; i++) {
    totalOfTotal +=totalAmountOfCookies[i];
}
tdEl.textContent = totalOfTotal;
tr6El.appendChild(tdEl);

