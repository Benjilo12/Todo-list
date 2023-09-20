


let age = 23;

console.log(++age, typeof age)
age = String(23)
console.log(++age, typeof age)


let num1 = 5/0;
console.log(num1)


//addition
var b = 7;
var c = 9;
var a = 15;

a+=7;
b+=5;
c+=3;

console.log(a + b + c);

//adding strings
let Noun = "dog";
let aDjective = "big";
let verb = "run";
let adverb = "quickly";

var word = `hello ${Noun} ${aDjective} ${verb} ${adverb}`;

console.log(word)

//finding length
let myfirstName = "";
let firstName = "benjamin";
var myfirstNamelength = firstName[firstName.length-2];
console.log(myfirstNamelength)

//array methods
const arrays = [["gari",6],["milik",8],["beans",8]];
arrays.shift()
arrays.unshift(["benji", 5])
arrays.pop()
arrays.push(["calcus",5])
console.log(arrays)

//accessing, changing arrays
let ourArrays = [537,546,987,"benjamin"];
ourArrays[3] = 1996;
console.log(ourArrays)

//accessing double arrays
const hisarrays = [["gari",6],["milik",8],["beans",8]];
hisarrays[2][1] = 12;
console.log(hisarrays)

//self involking fxn
// (function(firstname, secondname) {
//     console.log("hello " + firstname + " " + secondname);
// })("benjamin", "prymz");


//fxn constractor
function angle(width, height){
    this.width = width;
    this.height = height;
    this.getarea = function (){
      return  this.width * this.height
    }
}

let rect1 = new angle(10,5)
console.log(rect1.getarea());

//accessing onjects
let person = {
  Name:"benjamin",
  age: 27,
  eyecolor: "brown",
  id: 45,
  address:{
    street: '123 Main street',
    city: 'Cityville',
    state: 'State',
    zip: '12345',
  },
  getage: function(){
    return ++person.age
  }
}

delete person.id
person.age= 89;
console.log(person.age)
console.log(person.address.city)
console.log(person.getage())
console.log(person)

//logical operators
console.log((5 !=5));
console.log((3<=4) && (7>=11));
console.log((3<=4) || (7>=11));
console.log(4 === "5");
console.log(4 !== "4")

//control statement

function evenOdd(num){
  if((num % 2 === 0)){
    return "even";
  }else if ((num % 2 === 1)) {
    return "odd";
  }else{
    return "invalid";
  }
};

console.log(evenOdd(5))

//control statement

let marks = 75;

if((marks>=0) && (marks<=40)){
  console.log("F")
}else if ((marks>=41) && (marks<=49)) {
  console.log("D")
}else if ((marks>=50) && (marks<=59)) {
   console.log("C")
}else if ((marks>=60) && (marks<=69)) {
  console.log("B")
}else if ((marks>=70) && (marks<=100)) {
  console.log("A")
}else{
  console.log("INVALIDE")
}

//REMARKD

function mark(){
  if((marks>=0) && (marks<=40))
     return "F"
  else if ((marks>=41) && (marks<=49)) 
    return "D"
  else if ((marks>=50) && (marks<=59)) 
    return "C"
  else if ((marks>=60) && (marks<=69)) 
    return "B"
  else if ((marks>=70) && (marks<=100)) 
    return "A"
  else
    return "invalide";

}

console.log(mark(80));

//switch cases

function fruits(fruit){
       switch (fruit){
        case "orange":
          return "this is orange"
        case "bananna":
          return "this is bananna"
        case "mango":
          return "this is mango"
        case "pawpaw":
          return "this is pawpaw"
          default:
            return "invalid"
       }
}

console.log(fruits("orange"))


//looping

for(let i= 0; i<=5; i++){
  console.log(i);
}

const numbers = [1,3,4,6,7];
     numbers.forEach(function(number){
      console.log(number)
     })


   // fxn

  function alphLetters(letters){
     letters.forEach((letter) => {
       console.log(letter);
     })
  }

 alphLetters(["a","b","c"])

 //tina
 function deterTemperature(temperatures){
  return temperatures.filter(function(temperature){
    return temperature < 0;
  })
 }

 console.log(deterTemperature([-5,6,-3,1]))


 let letter = ["H", "E", "L", "P"];
for (let i = 0; i < letter.length; i++) {
    console.log(letter[i]);
}

if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
      console.log("No surprise there.");
  }
}


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
  } else if (i % 3 === 0) {
      console.log('Fizz');
  } else if (i % 5 === 0) {
      console.log('Buzz');
  } else {
      console.log(i);
  }
}


function sumOddNumbers(numberss) {
  let sum = 0
  numberss.forEach(function (number) {
      if (number % 2 !== 0) {
          sum = sum += number
      }
  })
  return sum
}

const number = [1, 2, 3, 4, 5, 6, 7];
const result = sumOddNumbers(number);



function getYears(years){
  return years.find((year) => year < 2022)
}

console.log(getYears([2019,2023,2020,2025]))

console.log(Number.parseInt("5",10))



let add = 45;
let type = String(add);
console.log(typeof type)


//Using map
function getMultiply(numbers){
  return numbers.map((number) => number*4)
}

console.log(getMultiply([4,5,6,8]))