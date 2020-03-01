'use strict';

function getRandomCustmer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totalAmountOfCookies = []; //i will save total for each store 
var salamonshops = [];

var container = document.getElementById('SalmonCookie');
var tableEl = document.createElement('table');
container.appendChild(tableEl);

function Cookie(name, minCustPerHour, maxCustPerHour, avgNumPerCustmer) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgNumPerCustmer = avgNumPerCustmer;
    this.amountOfCookies = [];// this will save the amount of cookies per hour 
    this.custmernumber = [];
    this.total = 0;
    salamonshops.push(this);
    this.amountOfCookie();

}

// calculate amount of cooki per hour then add it together
Cookie.prototype.amountOfCookie = function () {
    for (let i = 0; i < hours.length; i++) {
        this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
        this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
        this.amountOfCookies[i] = parseInt(this.amountOfCookies[i]);
        this.total += this.amountOfCookies[i];
    }
};

Cookie.prototype.supply = function () {
    var tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);

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

new Cookie('Seattle', 23, 65, 6.3);


new Cookie('Tokyo', 3, 24, 1.2);


new Cookie('Dubai', 11, 38, 3.7);


new Cookie('Paris', 20, 38, 2.3);


new Cookie('Lima', 2, 16, 4.6);

// header

function supplyheader() {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
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
}

// add new cookishop
var newcookishop = document.getElementById('newShop');
newcookishop.addEventListener('submit', function(event){
    event.preventDefault();
    var newname = event.target.name.value;
    var newminCustPerHour = parseInt(event.target.minCustPerHour.value);
    var newmaxCustPerHour = parseInt(event.target.maxCustPerHour.value);
    var newavgNumPerCustmer = parseInt(event.target.avgNumPerCustmer.value);
    var newshop=new Cookie(newname, newminCustPerHour, newmaxCustPerHour, newavgNumPerCustmer);
    if ( newname !=="" && newminCustPerHour<newmaxCustPerHour && newavgNumPerCustmer<newmaxCustPerHour){
        tableEl.deleteRow(tableEl.rows.length - 1);
        newshop.supply();
        supplyfooter();
    }
    else{
        prompt("you must enter all enteries, the MIN must be less than the MAX and the AVG between them");

    }
    
    });
//footer
function supplyfooter() {
    var tr6El = document.createElement('tr');
    tableEl.appendChild(tr6El);
    var tdEl = document.createElement('td');
    tr6El.appendChild(tdEl);
    tdEl.textContent = 'total';
    var totalOfTotal = 0;

    for (var hr = 0; hr < hours.length; hr++) {
        var totalPerHour = 0;
        for (var shop = 0; shop < salamonshops.length; shop++) {
            totalPerHour += salamonshops[shop].amountOfCookies[hr];

        }
        
        var tdEl = document.createElement('td');
        tdEl.textContent = totalPerHour;
        tr6El.appendChild(tdEl);
        totalOfTotal += totalPerHour;

    }
    var tdEl = document.createElement('td');
    tr6El.appendChild(tdEl);
    tdEl.textContent = totalOfTotal;

    }

supplyheader();

    for (var i = 0; i < salamonshops.length; i++) {

        salamonshops[i].supply();
    }

supplyfooter();

