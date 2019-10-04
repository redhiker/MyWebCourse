function displayName(name) {
    console.log('Hello, ' + name)
}

function convertCelsiusToFahrenheit(degreesCelsius) {

    let degreesFahenheit = NaN;

    if (degreesCelsius === NaN) {
        return degreesFahrenheit;
    }

    degreesFahrenheit = (9.0/5.0) * degreesCelsius + 32.0;

    return degreesFahrenheit;
}

function convertFahrenheitToCelsius(degreesFahrenheit) {

    let degreesCelsius = NaN;

    if (degreesCelsius === NaN) {
        return degreesFahrenheit;
    }

    degreesCelsius = (5.0/9.0) * (degreesFahrenheit - 32.0);

    return degreesCelsius;
}

displayName('Henry');

console.log(convertCelsiusToFahrenheit(100.0));

console.log(convertFahrenheitToCelsius(100.0));