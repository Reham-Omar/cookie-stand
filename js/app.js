'use strict';

function getRandomCustmer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var total = 0;

function Cookie(name, minCustPerHour, maxCustPerHour, avgNumPerCustmer) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgNumPerCustmer = avgNumPerCustmer;
    this.amountOfCookies = [];
    this.custmernumber = [];
    this.totalPerHour=[];
    this.total = 0;
    //this.totalAmountOfCookies=[];


}

Cookie.prototype.amountOfCookie = function () {
    for (let i = 0; i < hours.length; i++) {
        this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
        this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
        this.amountOfCookies[i] = parseInt(this.amountOfCookies[i]);

    };


    Cookie.prototype.totalAmount = function () {
        for (var i = 0; i < hours.length; i++) {
            total=total+this.amountOfCookies[i];
           //this.totalAmountOfCookies.push(this.totalAmountOfCookies + this.amountOfCookies[i]);
            
        }
    };
    Cookie.prototype.totalPerhr = function () {
        for(i=0; i<hours.length;i++){
        this.totalPerHour.push(Seattle.amountOfCookies[i]+ Tokyo.amountOfCookies[i]+Dubai.amountOfCookies[i] +Paris.amountOfCookies[i]+ Lima.amountOfCookies[i]);
        }
    };
    Cookie.prototype.supply = function () {
        // this.amountOfCookie();
        // this.totalAmount();
        var container = document.getElementById('SalmonCookie');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} : ${this.amountOfCookies[i]}Cookies`;
            articleEl.appendChild(liEl);
        }
        var h2Total = document.createElement('h2');
        h2Total.textContent = `The Total is : ${total}`;
        articleEl.appendChild(h2Total);
    }
};
var Seattle = new Cookie('Seattle', 23, 65, 6.3);
Seattle.amountOfCookie();
Seattle.totalAmount();
Seattle.supply();
var Tokyo = new Cookie('Tokyo', 3, 24, 1.2);
Tokyo.amountOfCookie();
Tokyo.totalAmount();
Tokyo.supply();
var Dubai = new Cookie('Dubai', 11, 38, 3.7);
Dubai.amountOfCookie();
Dubai.totalAmount();
Dubai.supply();
var Paris = new Cookie('Paris', 20, 38, 2.3);
Paris.amountOfCookie();
Paris.totalAmount();
Paris.supply();
var Lima = new Cookie('Lima', 2, 16, 4.6);
Lima.amountOfCookie();
Lima.totalAmount();
Lima.supply();



var container = document.getElementById('SalmonCookie');
var tableEl = document.createElement('table');
SalmonCookie.appendChild(tableEl);

var trEl = document.createElement('tr');
tableEl.appendChild(trEl);


var tr1El = document.createElement('tr');
tableEl.appendChild(tr1El);

var tr2El = document.createElement('tr');
tableEl.appendChild(tr2El);

var tr3El = document.createElement('tr');
tableEl.appendChild(tr3El);

var tr4El = document.createElement('tr');
tableEl.appendChild(tr4El);

var tr5El = document.createElement('tr');
tableEl.appendChild(tr5El);

var tr6El = document.createElement('tr');
tableEl.appendChild(tr6El);

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



//1st row
var tdEl = document.createElement('td');
tdEl.textContent = 'Seattle'
tr1El.appendChild(tdEl);

for (var i = 0; i <= hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Seattle.amountOfCookies[i];
    tr1El.appendChild(tdEl);
}


//2nd row
var tdEl = document.createElement('td');
tdEl.textContent = 'Tokyo';
tr2El.appendChild(tdEl);

for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Tokyo.amountOfCookies[i];
    tr2El.appendChild(tdEl);
}
var tdEl = document.createElement('td');
tdEl.textContent = Tokyo.total;
tr2El.appendChild(tdEl);

//3rd row

var tdEl = document.createElement('td');
tdEl.textContent = 'Dubai';
tr3El.appendChild(tdEl);

for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Dubai.amountOfCookies[i];
    tr3El.appendChild(tdEl);
}
var tdEl = document.createElement('td');
tdEl.textContent = '';
tr3El.appendChild(tdEl);

//4th row
var tdEl = document.createElement('td');
tdEl.textContent = 'Paris';
tr4El.appendChild(tdEl);

for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Paris.amountOfCookies[i];
    tr4El.appendChild(tdEl);
}
var tdEl = document.createElement('td');
tdEl.textContent = '';
tr4El.appendChild(tdEl);

//5th row

var tdEl = document.createElement('td');
tdEl.textContent = 'Lima';
tr5El.appendChild(tdEl);

for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Lima.amountOfCookies[i];
    tr5El.appendChild(tdEl);
}
var tdEl = document.createElement('td');
tdEl.textContent = '';
tr5El.appendChild(tdEl);

//footer
var tdEl = document.createElement('td');
tdEl.textContent = 'total';
tr6El.appendChild(tdEl);

for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = '';
    //this.totalPerHour[i];
    tr6El.appendChild(tdEl);
}
var tdEl = document.createElement('td');
tdEl.textContent = '';
tr6El.appendChild(tdEl);

