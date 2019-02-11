//Flat and Flat map
const arr = [1,2,3[4,5,6[7,8,9[10,11,12]]]];
//console.log(arr.flat().flat());
console.log(arr.flat(Infinity));
//Map
const res = [1,2,3,4].map(x => [x, x *2]);
console.log(res);

//Object.fromEntries
const obj =
    {
    key1: 'value1',
    key2: 'value2',
    key3: 'value 3'
};
const entries = Object.entries(obj);
const originalObject = Object.fromEntries(entries);
console.log(originalObject);

//trim start and end
const string = '   long spaces  ';
console.log(JSON.stringify(string.trim()));
console.log(JSON.stringify(string.trimStart()));
console.log(JSON.stringify(string.trimEnd()));

//Try Catch binding
try {
    throw new Error('Hey!!')
}
catch //(Error) <----
{
    //console.log(Error); <----
    console.log('Hey!!!!!!!!!!!!!')
}


//Function
function /*Comments */ myFunction() {

}
console.log(myFunction.toString());

//Symbol Description getter
const desc = 'my symbol';
const sym = Symbol(desc);
console.log(sym);
console.log(String(sym) === `Symbol(${desc})`);
console.log(sym.description);
