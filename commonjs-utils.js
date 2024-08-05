function generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function convert(celsius) {
    return (celsius * 9 / 5) + 32;
}

module.exports = {
    generateRandom,
    convert
};


//  to use in another file

// const {generateRandom, convert} = require('./commonjs-utils.js');
// console.log(`Random number = ${generateRandom()}`);
// console.log(`Celsius to Fahrenheit = ${convert(37)}`);