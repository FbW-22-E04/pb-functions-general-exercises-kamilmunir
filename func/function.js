/*function multi(a,b){
    console.log(a*b);
}
multi(6,8)

const multis=function(a,b){

    d=a*b;
    return d;
}

let c=multis(6,9);
console.log(c);


const mul=(a,b)=>{

    return a*b;

}

console.log(mul(10,10));

//remainder of the given number

console.log('*********************')

function multi1(a,b){
    console.log(a%b);
}
multi1(10,2)

const multis1=function(a,b){

    d=a%b;
    return d;
}

let h=multis1(15,5);
console.log(h);


const mul1=(a,b)=>{

    return a%b;

}

console.log(mul1(10,10));*/

/*

console.log('Expontential values******************');
let exp=1;
var d='';
const myfunc=function(a){
    for(b=1;b<=8;b++){
    exp*=2;
    d=d+"  "+  exp;
   
    }
    console.log(d);
}
myfunc();

console.log('Fruits///////////////////');
let fruit='Strawberry';
const myfruits=function(){
    fruit='Mango';
    console.log('Myfavourite fruit is '+"   "+fruit);

}
myfruits();

console.log('Multiply a number****************');
var result=1;

const expo=function(a,b){
    for(b=1;b<=8;b++){
    result=a*a;
    
    console.log(result);
    }
    
}

expo(2,5);

console.log("  outside " +result);

*/

/*
const one=function(a){
    for(b=1;b<4;b++){
        console.log(a);
    }
}
one(5);



const two=function(a){
    for(b=1;b<=5;b++){
        console.log(a);
    }
}
two('cat');


const three=function(a,b){
    for(c=1;c<=a;c++){
        console.log(b);
    }
}
three(6,'Dog');
*/

console.log('*****************************')
/*

const num = [1,6,83,91,0,-4,1337,5];

function myfun(a) {

    const larg=Math.max(...a);

    return larg;

}

let b=myfun(num);
console.log(b);

console.log('*************');

function myfunc2(a){
    let b=a%10===0;
    if(b===true){
     console.log(a+"    "  + ' Even Number Dvisible by 10');
     return a;
    }
    

}
//myfunc2(60);

for(c=1;c<=125;c++){
  let a= myfunc2(c);
 
}
*/
console.log('************************');

/*


function myfunc(a,b,c,d,e){


    const numbers = [a, b, c, d,e];
    const newArr = numbers.map(myFunction);
    console.log(newArr);
    let larg=Math.max(...newArr);
    console.log(larg);    
    
}


function myFunction(num) {
  return num;
}
myfunc(2,3,114,5,60);

console.log('*******************');

let myFunction2 = (a) => {

let res=(typeof a);
 if (res==='string'){
    console.log('String parameter passed');
 }

}
myFunction2(5)

console.log('********************');

const twonumber=(a,b)=>{

    let c=(typeof a);
    let d=(typeof b);
    if(c==='string' && d==='string'){
        return a+"   "+ b;
    }

}

let three=twonumber('hello','world');
console.log(three);


console.log('****************');


const twostr=(a)=>{
    const str = a;

    const firstword = str.split(' ')[0]
   // console.log(firstword); 
    return firstword;
    

}

let word=twostr('Internet is slow');
console.log(word);
*/

console.log('//////////////////');
/*

function words(str) {
    const arr = str.split(' ');
  
 

    let a=arr.filter(word => word !== '').length;
    console.log(a);
    var varc= '';
    
      for (i=0;i<a;i++){
        const firstword = str.split(' ')[i];
        //console.log(firstword);
for(b=0;b<a;b++)
{
    varc= varc+" "+ firstword;
       // console.log(varc);
}

      }
        
    console.log(varc);

    return  a; //arr.filter(word => word !== '').length;

    

  }
  
  
  words('internet is very');

  console.log('********************');
/*
  const mystr = (par = "Hello") =>{

    `string is: ${par}.`;
    console.log(par.substring(1,0));
  } 

  mystr('Internet');


*/
  console.log('**************************');

/*
function words(str) {
    const arr = str.split(' ');
  
 

    let a=arr.filter(word => word !== '').length;
    console.log(a);
    var varc= '';
    
      for (i=0;i<a;i++){
        const firstword = str.split(' ')[i];
        //console.log(firstword);
   // for(b=0;b<a;b++)
//{
    varc= varc+""+ firstword.substring(1,0);
       // console.log(varc);
//}

      }
        
    console.log(varc);

    return  a; //arr.filter(word => word !== '').length 

  }

  words('what you see is what you get')
*/

  console.log('********************')
/*
    
 let b=[5,6,7,8];
  const arar=(a)=>{

    let result =  Array.isArray(a);
    console.log(result);
    let result2=(typeof a);
    console.log(result2);

    
     switch(result || result2){
        case  'string':
        console.log('its a string');
        break;
        case true:
            console.log('its a array');
            break;
            default:
                console.log('neither a string nor array');

     }

  }
arar(b)


*/
console.log('**********************');

/*
function words(str) {
    const arr = str.split(' ');
  
 

    let a=arr.filter(word => word !== '').length;
    console.log(a);
    var varc= '';
    
      for (i=0;i<a;i++){
        const firstword = str.split(' ')[i];
        //console.log(firstword);
for(b=0;b<a;b++)
{
    varc= varc+" "+ firstword;
       // console.log(varc);
}

      }
        
    console.log(varc);

    return  a; //arr.filter(word => word !== '').length;

    

  }
  
  
  words('internet is very');
*/


function myfunc(str){

let a='';

for (i=0;i<=str.length;i++)
{
    if((str.includes("f")) || (str.includes("o"))|| (str.includes("l"))){
        
        a='true';

    }
    else{
        a='false';
    }

            
}
console.log(a);
}
myfunc('fool')



