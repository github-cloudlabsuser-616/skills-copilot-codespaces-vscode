describe("Calculator", () => {
    // Test case 1: Addition
    it("should add numbers correctly", () => {
        calculator.add(5);
        console.log("Result after addition:", calculator.result); // Expected output: 5
    });

    // Test case 2: Subtraction
    it("should subtract numbers correctly", () => {
        calculator.subtract(2);
        console.log("Result after subtraction:", calculator.result); // Expected output: 3
    });

    // Test case 3: Multiplication
    it("should multiply numbers correctly", () => {
        calculator.multiply(3);
        console.log("Result after multiplication:", calculator.result); // Expected output: 9
    });

    // Test case 4: Division
    it("should divide numbers correctly", () => {
        calculator.divide(4);
        console.log("Result after division:", calculator.result); // Expected output: 2.25
    });

    // Test case 5: Division by zero
    it("should handle division by zero", () => {
        calculator.divide(0); // This should print an error message
        console.log("Result after division by zero:", calculator.result); // Expected output: 2.25
    });
});