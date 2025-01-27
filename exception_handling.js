function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log("Result: " + result);
    } catch (error) {
        console.error("Error: " + error.message);
    } finally {
        console.log("This block is always executed.");
    }
}


divide(10, 2); 
divide(10, 0); 
