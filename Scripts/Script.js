//let input = parseInt(prompt("Please enter a tmep in Fahrenheit"));
//console.log(parseInt(input));
//let f = input;
//let celsius = (f-32) * (5/9);
//alert("Your temp is " + celsius + " in Celsius");
//console.log(celsius);

function toCelsius(f){
    f = prompt("Please enter a temp in Fahrenheit");
    function toCel(f) {
        return Math.round(((5/9) * (f-32))*100)/100;
    }
    alert("Your temp in celsius is " + toCel(f));
}

function toFahrenheit(c){
    c = prompt("Please enter a temp in Celsius");
    function toFah(c) {
        return Math.round(((c *(9/5)) + 32)*100)/100;
    }
    alert("Your temp in Fahrenheit is " + toFah(c));
}

function toLiters(g){
    g = prompt("Please enter volume in Gallons");
    function toLit(g) {
        return g * 3.785;
    }
    alert( g + " Gallon(s) equals " + toLit(g) + " Liters");
}

function toGallons(l){
    l = prompt("Please enter volume in Liters");
    function toGal(l) {
        return Math.round((l / 3.785)*100)/100;
    }
    alert( l  + " Liters equals " + toGal(l) +" Gallons");
}

function kelToCel(k){
    k = prompt("Please enter temp in Kelvin");
    function kToC(k) {
        return Math.round((k - 273.1)*100)/100;
    }
    alert("Your temp in Kelvin is " + kToC(k));
}
 function toFeet(m) {
    m = prompt("Please enter measurement in meters")
    function metersToFeet(m){
        return Math.round((m * 3.281)*100)/100;
    }
    alert( m + " Meters equals " + metersToFeet(m) +"ft");
 }
 function toMeter(f) {
    f= prompt("Please enter measurement in ft")
    function feetToMeter(f){
        return Math.round((f / 3.281)*100)/100;
    }
    alert( f + " Ft equals " + feetToMeter(f) +"Meters");
 }
 