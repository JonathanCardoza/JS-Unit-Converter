//let input = parseInt(prompt("Please enter a tmep in Fahrenheit"));
//console.log(parseInt(input));
//let f = input;
//let celsius = (f-32) * (5/9);
//alert("Your temp is " + celsius + " in Celsius");
//console.log(celsius);

function toCelsius(f){
    f = prompt("Please enter a temp in Fahrenheit");
    function toCel(f) {
        return (5/9) * (f-32);
    }
    alert("Your temp in celsius is " + toCel(f));
}

function toFahrenheit(c){
    c = prompt("Please enter a temp in Celsius");
    function toFah(c) {
        return (c *(9/5)) + 32;
    }
    alert("Your temp in Fahrenheit is " + toFah(c));
}

function toLiters(g){
    g = prompt("Please enter volume in Gallons");
    function toLit(g) {
        return g * 3.78541;
    }
    alert( g + " Gallon(s) equals " + toLit(g));
}

function toGallons(l){
    l = prompt("Please enter volume in Liters");
    function toGal(l) {
        return l / 3.785;
    }
    alert( l  + " Liter(s) equals " + toGal(l) +"G");
}

function kelToCel(k){
    k = prompt("Please enter temp in Kelvin");
    function kToC(k) {
        return k - 273.1;
    }
    alert("Your temp in Kelvin is " + kToC(k));
}
 function toFeet(m) {
    m = prompt("Please enter measurement in meters")
    function metersToFeet(m){
        return m * 3.281;
    }
    alert( m + " Meter(s) equals " + metersToFeet(m) +"ft");
 }
 function toMeter(f) {
    f= prompt("Please enter measurement in ft")
    function feetToMeter(f){
        return f / 3.281;
    }
    alert( f + " Ft equals " + feetToMeter(f) +"Meters");
 }
 