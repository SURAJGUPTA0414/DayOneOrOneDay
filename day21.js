console.log("Day 21 started");

//1
// Detect if Two Numbers Have Opposite Signs
class Solution {
    /**
     * Function to check if two numbers have opposite signs.
     * @param {number} a - The first integer.
     * @param {number} b - The second integer.
     * @return {boolean} True if they have opposite signs, otherwise False.
     */
    haveOppositeSigns(a, b) {
        // Implementation here
       
        let x = a * b;
         if (x === 0) {
            return false
        }
        if (x > 0) {
            return false
        } else {
            return true
        }
        
        
    }
}


console.log("Day 21 ended done");