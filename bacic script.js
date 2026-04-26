/*const student = {
    name:"Vishal",
    city:"Sangamner"
};
let age = 23;
console.log(student);
console.log(age);
*/

/*
let x=10;
let x=20;
*/

/*
console.log(count);
var count = 42;
*/

/*
let user = {
    uid:1,
    name:"vishal",
    age:20,
    email:"vd@hr.in"
};

let u1 = Symbol("uid");
user [u1]="1";
*/

/*
let age=20, hasID = true;
if(age>=18 && hasID)
{
    console.log("Allowed");
}
*/

/*
let temp = 35;
if(!(temp<20))
{
    console.log("Hot");
}
else
{
    console.log("Cool");
}
*/

/*
let a = 0;
if(a)
{
    console.log("truthy");
}
else
{
    console.log("Falsy")
}
*/

/*
let score = 60;
let gread = score >= 90 ? "A" : score >= 80 ? "B":
score >= 70 ? "C" : "fail";
console.log(gread);
*/

/*
let point = 10;
let status = point >=90 ? "Gold": point>=70 ? "silver" : point >= 50 ? "Bronze" : "PASS";
console.log(status);
*/

/*
let logedIn = true;
let hasTokken = true;
let access = logedIn && hasTokken ? "Allow" : "Deny";
console.log(access);
*/

/*
let a =5;
a++;
console.log(a);
*/

/*
let x=3;
let y=x++;
console.log(x,y);
*/

/*
let p=4;
let q=++p;
console.log(p,q);
*/

/*
let m=10;
console.log(m--);
console.log(m);
*/

/*
let n=8;
let result = n++ + ++n;
console.log(result);
*/

/*
let likes =100;

function LikePost()
{
    return ++likes;
}
console.log(LikePost());
console.log(likes);
*/

/*
let count = 5;
if(count-- == 5)
{
    console.log("Matched");
}
else
{
    console.log("Not Matched");
}
*/

/*
let str = "42";
let num = +str;
let n = str;
console.log(typeof num);
console.log(typeof n);
console.log(num);
*/

/*
let age = 17;
let msg = age>=18 ? "Adult" : "Minor";
console.log(msg);
*/

/*
let mark = 33;
let score = mark>=90 ? "Exellent" : mark>=70 ? "GOOD" : mark>=50 ? "Average" : mark>=35 ? "Bad Score": "Fail";
console.log(score);
*/

// function GetScore(score)
// {
//     if(score>=90 && score<=100)
//         return "A+";
//     else if (score>=80 && score<=89)
//         return "A";
//     else if (score>=70 && score<=79)
//         return "B";
//     else if(score>=60 && score<=69)
//         return "C";
//     else if (score>=33 && score<=59)
//         return "D";
//     else if (score>=0 && score<=32)
//         return "fail";
//     else return "Invalid Score";
// }
// console.log(GetScore(50));

// function GetScore(score)
// {
//     if(score>=90 && score<=100)return "A+";
//     if(score>=80 && score<=89) return "A";
//     if(score>=70 && score<=79)return "B";
//     if(score>=60 && score<=69)return "C";
//     if(score>=33 && score<=59)return "D";
//     if(score>=0 && score<=32)return "fail";
//     else return "Invalid Score";
// }
// console.log(GetScore(-39));

// function rps(user, computer)
// {
//     if(user===computer) return "Draw";

//     if(user==="rock" && computer==="scior") return "user win..!";
//     if(user==="paper" && computer==="rock") return "user win..!";
//     if(user==="scior" && computer==="paper") return "user win..!";

//     return "computer win..!";
// }
// console.log(rps("rock","rock"))

// function LetCheck(IsLoggedIn,IsAdmin)
// {
//     if (IsLoggedIn == false && IsAdmin == false) return "Access Deny.!";
    
//     return " you are allowed";

// }
// console.log(LetCheck(false,false));

// function Agerange(age)
// {
//     if(age>=1 && age<=10) return "Kid";
//     if(age>=11 && age<=17) return "Teen";
//     if(age>=18 && age<= 21) return "Adult";
//     if(age>=22 && age<=50) return "young";
//     if(age>=51 && age<100) return "Senior";
//     else return "Invalid Age..!";
// }

// console.log(Agerange(17));

//for Loop
// for(let i=1;i<=100;i++)
// {
//     console.log(i);
// }

//Continue

// for(i=1;i<201;i++)
// {
//     if(i%2==0)
//     {
//         continue;
//     }
//     console.log(i);
// }

// //✅Q1. print the number 1 to 10 using for loop
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }

// //✅Q2.Print the number 10 to 1 using while loop

// let i=10;
// while(i>=1)
// {
//     console.log(i);
//     i--;
// }

//✅Q3. print the even number from 1 to 20 using for loop
// for(i=1;i<=20;i++)
//     {
//         if(i%2!=0)
//         {
//             continue;
//         }
//         console.log(i);
//     } 

//✅Q4. print odd number from 1 to 15 using while loop
// let i = 1;
// while(i<=15)
// {
//     if(i%2===1)
//     {
//         console.log(i);
//     }
//     i++;
// }

//✅Q5. print the multiplication table of 5

// for(let i=1;i<=10;i++)
// {
//     console.log(`5 * ${i} = ${5*i}`);
// }

//✅Q6. Find the sum of 1 to 100 numbers using loop

// let sum=0;
// for(let i=1;i<101;i++)
// {
//     sum = sum + i;
// }
// console.log(sum);

//✅ Q7. Print all the numbers between 1 to 50 which are divisible by 3

// for(let i=1;i<51;i++)
// {
//     let num=i;
//     if(num%3===0)
//     {
//         console.log(num);
//     }
// }

//✅ Ask The User for a number and print wether each number from 1 to that number is even or odd

// let num = prompt("Enter a number =");
// for(let i=1;i<=num;i++)
// {
//     if(i%2===0)
//     {
//         console.log(`${i} is a ✅EVEN number`);
//     }
//     else
//     {
//         console.log(`${i} is a ❌ODD number.`);
//     }
// }

//✅ Q9. Count how many numbers are divisible by both 3 & 5

// let count =0;
// for(let i=1;i<101;i++)
// {
//     if(i%3===0 && i%5===0)
//     {
//         console.log(i);
//         count++;
//     }
// }
// console.log(`${count} Numbers are divisible by Both 3 & 5`);

// for(let i=1;i<101;i++)
// {
//     console.log(i);
//     if(i%7===0 && i!==7)
//     {
//         break;
//     }
// }


// let count = 0;
// for(let i=0;i<=101;i++)
// {
//     if(i%2!==0)
//     {
//         count++;
//         console.log(i);

//     }
//     if(count === 5) break;
// }


// let num=12345;
// let count=0;
// while(num>0)
// {
//     count++;
//     num=Math.floor(num/10);
// }
// console.log("Total number of digit = ",count);

// function add(v1,v2)
// {
//     console.log(v1+v2);
// }
// add(1,undefined);

// function val(v1,v2)
// {
//     return v1+v2;
// }
// let ans = val(22,33);
// console.log(ans);

//💕for-Each
// let nums=[10,20,30];
// nums.forEach((num) =>{
//     console.log(num);
// });

//👌Reverse a string using loop

// let str = prompt("Enter a string.:");
// let reversed="";
// for(let i=str.length-1; i>=0; i--)
// {
//     reversed += str[i];
// }
// console.log("Revesed String is =",reversed);


//❤️ print all the charactors of the string using for of

// for(let char of "Rahul")
// {
//     console.log(char);
// }


// 😉 Function Expressions

// const greet = function()
// {
//     console.log("hello");
// };
// greet();

//😶‍🌫️use rest parameter to accept any number of scores and return the total

// function score(...val)
// {
//     let total=0;
//     val.forEach(function(src){
//         total=total+src;
//     });
//     return total;
// }
// console.log(score(12,11,13,14));

//👊 Early Return 

// function Getcheck(age)
// {
//     if(age>17) return "Allowed";
//     return "Not Allowed";
// }
// console.log(Getcheck(18));

//👊Pass a function into another function and exicute it inside

// function abcd(val)
// {
//     val();
// }
// abcd(function(){
//     console.log("hey");
// });

//👊 spread

// function sum(...nums)
// {
//     return nums.reduce((acc,val)=> acc+val,0);
// }
// let nums=[1,2,3];
// console.log(sum(...nums));

//👊 First Class Function

// function shout(msg)
// {
//     return msg.toUpperCase();
// }
// function processMassage(fn)
// {
//     console.log(fn("Hello"));
// }
// processMassage (shout);

//👊 Higher Order function

// function CreateMultiplier(x=1)
// {
//     return function(y=1)
//     {
//         return x*y;
//     }
// }
// let double = CreateMultiplier(2);
// console.log(double(7));

//👊 Closure
//Discount Calculator

// function DiscountCalculator(dis)
// {
//     return function(price)
//     {
//         return price - price *(dis/100);
//     }
// }
// let ten = DiscountCalculator(10);
// console.log(ten(1545));

// function outer()
// {
//     let count =0;
//     return function()
//     {
//         count++;
//         console.log(count);
//     }
// }
// let counter = outer();
// counter();
// counter();
// counter();
// counter();

//👌👌Array

// let arr=[22,5,77,33,86,34];
// let srt = arr.sort(function(a,b){
//     return a-b
// });
// console.log(arr);
// console.log(srt);

// //👊Filter
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let newarr=arr.filter(function(val){
//     if(val%2===0) return true;
// })
// console.log(arr);
// console.log(newarr);

//👊map

// let arr=[1,2,3,4,5,6,7];
// let newarr=arr.map(function(val){
//     if(val%2===1) return 2;
//     return val;
// });
// console.log(arr);
// console.log(newarr);

//👊Reduce

// let array=[1,2,3,4,5,6,7,8,9,10];
// let Total=array.reduce(function(accumulator, val){
//     return accumulator+val;
// },0);
// console.log(array);
// console.log(Total);

//👊Find

// let array=[
//     {id:1, val:1},
//     {id:2, val:2},
//     {id:3, val:3},
// ];
// let src=array.find(function(key){
//     return key.val===3;
// });
// console.log(array);
// console.log(src);

//👊Some

// let std=[70,78,99,37,68];
// let any=std.some(function(val){
//     return val>90;
// });
// console.log(any);

//👊Distucturing

// let arr=[1,2,3,4,5];
// let [a,b,,c]=arr;

//👌add "Mango" at the and "pineapple" at the beginning of this array.

// let fruit=["Apple","Banana"];
// fruit.push("Mango");
// fruit.unshift("Pineapple");

// //👊Replace "Banana" with "kiwi" in the above array

// let arr=fruit.map(function(val){
//     if(val==="Banana") return "Kiwi";
//     return "val";
// });

//✅Insert "Red" and "Blue" at the index 1 in this arry 

// let color=["yellow","Green"];
// color.splice(1,0,"Red","Blue");

//✅ Extract only the Middle 3 Element from the array.
// let array = [1,2,3,4,5,6,7];
// let newarr=array.slice(2,5);
// console.log(newarr);

//✅Sort this array in alphabetical order

// let array=["ram","sham","shivaji","laxman","hambirrao"];
// console.log(array.sort());//Alphabetical Order
// console.log(array.sort().reverse());//in reverced order

//✅Use .map() to squre each number

// let array=[1,2,3,4,5,6,7,8,9];
// let sqr=array.map(function(val){
//     return val*val;
// });
// console.log(sqr);

//✅Use .filter() to keep the numbers greater than 10.

// let array=[8,70,55,9,4,70,3];
// let fil=array.filter(function(val){
//     return val>10; //if(val>10) return val; 
// });
// console.log(fil);

//✅use .reduce() to find the sum of this array

// let array=[1,2,3,4,5,99];
// let ans=array.reduce((accumulator,val)=>{
//     return accumulator+val;
// },0);
// console.log(ans);

//✅Use .find() to get the first number greter than 10

// let array=[
//     {id:1,val:10},
//     {id:4,val:20},
//     {id:3,val:11},
//     {id:4,val:12}
// ];
// let ans=array.find((jk)=>{
//     return jk.val>10;
// });
// console.log(ans);

//✅Use .some() to get the any student who scored bellow 35
// let scr=[70,85,44,60,34,33,28];
// let result=scr.some((val)=>{
//     return val<35;
// });
// console.log(result);

//✅Use .every() to check every number are even
// let num=[1,2,3,4,5,6];
// let ans=num.every((val)=>{
//     return val%2===0;
// });
// console.log(ans);

//✅Distruct the array to get seprate firstname and lastname

// let user=["Rahul","Gandhi"];
// let [firstname,lastname]=user;

//✅Merge two array using spread operator.

// let a=[1,2,3];
// let b=[4,5,6];
// let c=[...a,...b];
// console.log(c);

//✅Add "India" to first using spread operator.

// let contries=["Japan","USA","China"];
// contries=["India",...contries];

// //✅Clone this array Properly (not by referance).
// let a=[4,5,6,7];
// let b=[...a];

// let std=["Vishal","Aditya","Saurabh","Abhi","Pratik","Ritesh","Prashant"];
// std.forEach(val=>console.log(val));

// let array=[1,2,3,4,5,6,7,8,9,12,44,377];
// console.log(array.filter(n=> n%2===0));

// let price=[200,300,400];
// let GST=price.map((val)=>{
//     return val+val*(18/100);
// });
// console.log(GST);

// let sallary=[18000,20000,21000,15724,16300];
// let payroll=sallary.reduce((acc,val) => acc+val,0);
// console.log(payroll);

//✅👊Find the first student with gread "A"

// let result= [
//     {std:"Vishal", gread:"A"},
//     {std:"Abhi", gread:"A"},
//     {std:"Ritesh", gread:"B"},
//     {std:"Saurabh",gread:"O"}
// ];
// let brt=result.find((val)=>{
//     return val.gread==="B";
// });
// console.log(brt);

//😅 Write a function to reverce an array
// let array=[1,2,3,4,5];
// console.log(array.reverse());

//😅sort array of age in accending order
// let age=[20,94,45,50,3];
// console.log(age.sort((a,b)=>a-b));

//😅Destruct first 2 element from array
// let array=[1,2,3,4,5];
// let[a,b]=array;

// let marks=[98,45,78,55,85,33];
// let result=marks.some((val)=>{
//     return val<35;
// });
// console.log(result);

// let a=[1,2,3,4];
// let b=[...a,5,6];
// console.log(b);

//👊👊Objects

// let obj={
//     name:"Vishal",
//     age:23,
//     email:"vdshete@gmail.com"
// };
// for(let key in obj)
// {
//     console.log(key+":"+obj[key]);
// }

//👊Create an object for student with name, age and isEnroled

// let std={
//     name:"vishal",
//     age:22,
//     isEnrolled: true
// };
// console.log(std);

//👊Can an object key be a number or boolean? try this

// let obj={
//     true:"ya yaa ya",
//     96:"Maratha"
// }

//✅Access the value of firstname from the object

// const obj={
//     "first-name":"Radhye"
// };
// console.log(obj["first-name"]);

//✅Given a Dynamic key let key= "age", how will you access user[key]

// let key='age';
// const user={
//     age:23
// };
// console.log(user[key]);

//✅from the object bellow print the lattitude

// const locations={
//     city:"Akole",
//     coordinates:{
//         lat:23.2,
//         lan:7.5
//     }
// };
// console.log(locations.coordinates.lat);

//✅What will happen when coordinates is missing? How can you prevent the error?
// console.log(locations?.coordinate?.lat);

//✅Destructs the city and lat from the locations objects above.
// let {city}=locations;
// let {lat}=locations.coordinates;

//✅Destruct the key "first-name" as a veriable Called firstName

// const user={
//     "first-name":"Rajaji"
// };
// let {"first-name":firstName}=user;

//✅use for-in to log all the key in this objects

// const course={
//     title:"JavaScript",
//     duration:"4 Weeks"
// };
// for(let key in course)
// {
//     console.log(key+" = "+course[key]);
// }

//✅use Object.entries() to print all key-value paires.
// Object.entries(course).forEach((val) => {
//     console.log(val[0]+" : "+val[1]);
// });

//✅copy this objects using spread operator

// const obj={a:1, b:2};
// const newobj={...obj};

//👊Deep Clone the object
// const obj={
//     name:"vishal",
//     address:{
//         city:"Akole",
//         dist:"Ahilyanagar"
//     }
// };
// let clone= JSON.parse(JSON.stringify(obj));

//👊Rewrite this safely using optional channing

// const user={};
// console.log(user?.address?.city);

//💕Use a veriable to dynamically assign a property

const key ="Role";
let obj={
    name:"vishal",
    [key]:"Admin"
};
 

