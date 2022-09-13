'use strict'
//----------concat---------//
const array1 = [1,2,3];
const array2 = [4,5,6];

const arr = array1.concat(array2)

console.log(arr);
// ---------revers---------//
const arrRevers = array1.reverse();
console.log(arrRevers);
//--------push---------//
const array3 = [1,2,3];
const arrPush = array3.push(4,5,6,);
console.log(array3);
//----------unshift-------//
const array4 = [1,2,3];
const arrUnshift = array4.unshift(4,5,6);
console.log(array4);
//--------shift--------//
const array5 = ['js', 'css', 'jq'];
const arryShift = array5.shift();
console.log(array5);
//---------pop----------///
const array6 = ['js', 'css', 'jq'];
const arrySPop = array6.pop();
console.log(array6);
//------------slice.--------------//
const array7 = [1,2,3,4,5];
const arraySlice = array7.slice(0,3);
console.log(arraySlice);
const array8 = [1,2,3,4,5];
const arraySlice2 = array8.slice(-2);
console.log(arraySlice2);
//--------------splice-----------------//
const arry9 = [1,2,3,4,5];
const arrySplice = arry9.splice(1,2);
console.log(arry9);

const arry10 = [1,2,3,4,5];
const arrySplice1 = arry10.splice(0,1);
const arrySplice2 = arry10.splice(3,1);
console.log(arry10);

const arry11 = [1,2,3,4,5];
const arrySplice3 = arry11.splice( 3, 0,'a', 'b', 'c',);
console.log(arry11);

const arry12 = [1,2,3,4,5];
const arrySplice4 = arry12.splice( 1, 0,'a', 'b');
const arrySplice5 = arry12.splice( 6, 0,'c');
const arrySplice6 = arry12.splice( 8, 0,'e');
console.log(arry12);
//----------------sort-----------------//
const arry13 = [3, 4, 1, 2, 7];
const arrySort = arry13.sort(function(a,b){
    return a-b;
});
console.log(arry13);
//---------------forEach--------------//
const arry14 = [{firstName: `Test`, lastName: `Testovich`, age: 42, gender: `male`,}, {firstName: `User`, lastName: `Userovich`, age: 12, gender: `male`,},	{firstName: `Testya`, lastName: `Testovna`, age: 16, gender: `emale`,},		{firstName: `Logina`, lastName: `Consolevna`, age: 42, gender: `female`,} ];
const arryForEach = arry14.forEach(function(elem){
    console.log(elem);
});
// ----------------map-----------------//
const arry15 = [{firstName: `Test`, lastName: `Testovich`, age: 42, gender: `male`,}, {firstName: `User`, lastName: `Userovich`, age: 12, gender: `male`,},	{firstName: `Testya`, lastName: `Testovna`, age: 16, gender: `emale`,},		{firstName: `Logina`, lastName: `Consolevna`, age: 42, gender: `female`,}];
const arryMap = arry15.map(function(elem){
    elem.telephoneNumber = 2533155325;

    return elem;
});
console.log(arryMap);

//----------------filter---------------//
const arry16 = [{firstName: `Test`, lastName: `Testovich`, age: 42, gender: `male`,}, {firstName: `User`, lastName: `Userovich`, age: 12, gender: `male`,},	{firstName: `Testya`, lastName: `Testovna`, age: 16, gender: `emale`,},		{firstName: `Logina`, lastName: `Consolevna`, age: 42, gender: `female`,}];
const arryFilter = arry16.filter(function(elem){
    return elem.age > 18;
    return elem.gender = `male`;
});
console.log(arryFilter);
//--------------flat-------------------//
const arry17 = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];
const arryFlat = arry17.flat(3);
console.log(arryFlat);