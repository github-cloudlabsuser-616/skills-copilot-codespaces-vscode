const calculator = {
    currentValue: 0,
    add: function(num) {
        this.currentValue += num;
        return this.currentValue;
    },
    subtract: function(num) {
        this.currentValue -= num;
        return this.currentValue;
    },
    multiply: function(num) {
        this.currentValue *= num;
        return this.currentValue;
    },
    divide: function(num) {
        this.currentValue /= num;
        return this.currentValue;
    }
};

// Example usage
console.log(calculator.add(5)); // Output: 5
console.log(calculator.subtract(3)); // Output: 2
console.log(calculator.multiply(2)); // Output: 4
console.log(calculator.divide(2)); // Output: 2
console.log(calculator.add(10)); // Output: 12