function calculate(num1, num2, op){
    if(num1 !== "" && num1 !== null && num1 !== undefined && num2 !== "" && num2 !== null && num2 !== undefined){
        if(op === 'add'){
            return num1 + num2;
        }else if (op === 'subtract'){
            return num1 - num2;
        } else if (op === 'multiply'){
            return num1 * num2;
        } else if (op === 'divide'){
            return num1 / num2;
        } else {
            return new Error("Operation Not Allowed");
        }
    }else {
        return new Error("Calculator Not Built For Such!!")
    }

};
