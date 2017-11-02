function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;

}

console.log('Master')
var arrayFromString = genericFunc<string>("beep");
console.log(typeof arrayFromString[0]);
// learn


var arrayFromNumber = genericFunc(45);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0])

