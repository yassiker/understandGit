function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
    // hello soccer
    // hello master
}

var arrayFromString = genericFunc<string>("beep");
console.warn('error');
console.log(typeof arrayFromString[0]);
console.log('Ndfdsfs')
// learn
var arrayFromNumber = genericFunc(45);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0])