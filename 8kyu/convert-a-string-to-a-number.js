// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
//     Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
//
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//SOLUTION

function stringToNumber(s)
{
    if (/^-?\d+$/.test(s)) {
        return parseInt(s);
    }
}

let result = stringToNumber("34566");
console.log(result);

result = stringToNumber("-755");
console.log(result);