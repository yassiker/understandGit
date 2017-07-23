function genericFunc(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);
var arrayFromNumber = genericFunc(45);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);
