const theSum = (...numbers) => {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

module.exports = theSum;