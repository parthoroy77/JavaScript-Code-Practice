// Problem-1 ------------

// Description: In this function takes a number as input. After that multiply the input number by 3, add 10 it, divided it by 2 and finally subtract 5 from the quotient and returned the result.



function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please input valid number'
    }
    const result = (((number * 3) + 10) / 2) - 5;
    return result;
}





// Problem-2 --------------

// Description: In this function takes a string as input. After that the string length modulate by two if the modulated result is 0 then inserted string word length is "Even"  But if the modulated result is not 0 then inserted string word length is "Odd".

function evenOdd(str) {
    if (typeof str !== 'string') {
        return 'Please input in string type'
    }
    if (str.length % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}




// Problem-3 ------------

// Description:   In this function takes a number input. After that subtracted the number by 7. If the subtracted value is less than 7, the subtracted result will be returned. But if the value is greater than 7 then multiply the input number by 2 and return.

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please input valid number'
    }
    const subtractValue = 7;
    const subtract = number - subtractValue;
    if ( subtract < 7) {
        return subtract;
    }
    else {
        return number * 2;
    }
}



// Problem-4 ---------

// Description:    In this function takes a array as input. After that if the array has negative element than return how many negative value there are but if the array has all positive value then return 0;


function findingBadData(arr) {
    if (toString.call(arr) !== "[object Array]") {
        return 'Please input valid Array';
    }
    let badData = [];
    for (let i = 0; i < arr.length; i++){
        const arrElement = arr[i];
        if (arrElement < 0) {
            badData.push(arrElement);
        }
    }
    return badData.length;
}





// Problem-5 ---------

// Description: In this function takes Three numbers as input. After that First number multiplied by 21 and second number multiplied by 32 and third number multiplied by 43 then add all the multiplied value. If the sum value is greater than 2000 then 2000 will be subtracted from the sum and returned. But if the sum is less than 2000 than the sum will just returned. 

function gemsToDiamond(firstFriendQuantity, secondFriendQuantity, thirdFriendQuantity) {
    if ((typeof firstFriendQuantity !== 'number') || (typeof secondFriendQuantity !== 'number') || (typeof thirdFriendQuantity !== 'number')) {
        return 'Please input valid number';
    }
    const firstFriendGemPower = 21;
    const secondFriendGemPower = 32;
    const thirdFriendGemPower = 43;

    const firstFriendDiamond = firstFriendQuantity * firstFriendGemPower;
    const secondFriendDiamond = secondFriendQuantity * secondFriendGemPower;
    const thirdFriendDiamond = thirdFriendQuantity * thirdFriendGemPower;

    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if (totalDiamond >= (1000 * 2)) {
        const remainingDiamond = totalDiamond - 2000;
        return remainingDiamond;
    }
    else {
        return totalDiamond;
    }
}

