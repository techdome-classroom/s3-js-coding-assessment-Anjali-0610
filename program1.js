var isValid = function(s) {
    // Stack to keep track of opening brackets
    let stack = [];
    
    // HashMap to store closing brackets as keys and opening brackets as values
    let bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through the string
    for (let char of s) {
        if (char in bracketMap) {
            // Pop the top of the stack or assign a dummy value if the stack is empty
            let topElement = stack.length > 0 ? stack.pop() : '#';
            
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
};

module.exports = { isValid };
