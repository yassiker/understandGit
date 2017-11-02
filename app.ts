function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;

}

console.log('Master')
console.log('Yassine')
var arrayFromString = genericFunc<string>("beep");
console.log(typeof arrayFromString[0]);
// learn

console.log('Master')
var arrayFromNumber = genericFunc(45);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0])

