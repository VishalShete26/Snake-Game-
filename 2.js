// //Method के अंदर

// let obj = {
//   name:"SITARAM",
//   profession:"Give Blessing",
//   viewDetails: function(){
//     console.log(this);
//   }
// }

// obj.viewDetails();

// // Event Handler के अंदर
// document.querySelector("h1").addEventListener("click", function(){
//   console.log(this);
// });

// // class के अंदर
// class Abcd{
//   constructor(){
//     console.log("heyhe");
//     this.a=12;
//   }
// }

// let val = new Abcd();
// console.log(val);

// let object={
//   name:"Vishal",
//   age:22
// };

// function abcd(a,b){
//   console.log(this.age - a);
// }

// abcd.call(object,6,44);

// function Biscuits (name, company, price, category, qlt)
// {
//   this.name = name;
//   this.company = company;
//   this.price = price;
//   this.category = category;
//   this.qlt = qlt;
// }

// let show1 = new Biscuits("ParleG", "Parle", 10, "Glucose", 12);
// let show2 = new Biscuits("GoodDay", "Britannia", 10, "Cashew Cookies", "7");
// let show3 = new Biscuits("BourBon", "Britannia", 30 , "Creme Biscuits", 11);

// console.log(show1, show2, show3);

// class CreateLaptop {
//   constructor(name, company, color, price, size) {
//     this.name = name;
//     this.company = company;
//     this.color = color;
//     this.price = price;
//     this.size = size;
//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
//   }
// }

// let p1 = new CreateLaptop("pavillion", "HP", "silver", 65300, "15s");
// let p2 = new CreateLaptop("MacBook 2", "Apple", "Gold", 165300, "15s");

// class User {
//   constructor(name, address, username, email) {
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.roll = "User";
//   }

//   checkRoll() {
//     return `Your Roll is ${this.roll}`;
//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.name} : ${text}`;
//     document.body.appendChild(h1);
//   }
// }

// class Admin extends User {
//   constructor(name, address, username, email) {
//     super(name, address, username, email);
//     this.roll = "Admin";
//   }

//   remove()
//   {
//     document.querySelectorAll("h1").forEach(function (evo){
//       evo.remove();
//     })
//   }
// }


// let u1 = new User("Vishal", "Sherewadi", "vd_shete", "vishalsheted03@gmail.com");
// let u2 = new User("Raja", "Hariyana", "raja_gujar", "rajagujar@gmail.com");

// let a1 = new Admin("Santosh", "Gathan", "santu_mama", "santyrr@gmail.com");


//-------------------------   CALLBACK -----------------------------------------

// function greet(name , callback)
// {
//   console.log("Hello " + name);
//   callback();
// }

// function Bye()
// {
//   console.log("Good to see you.");
// }

// greet("Vilas", Bye);

// let pr = new Promise (function (res, rej){
//   setInterval(()=>{
//     let rc = Math.floor(Math.random() *10);
//     if(rc%2===0) res("Resolve with " + rc);
//     else rej("Rejected with " + rc);
//   },3000);
// })

// pr.then(function (val){
//   console.log(val);
// });

// pr.catch(function (val){
//   console.log(val);
// });

// async function abcd() {
//   try{
//     let val = await pr;
//     console.log(val);
//   }
//   catch (err){
//     console.log(err);
//   }
// };


// abcd();


//---------------------------Feach API---------------------------------------

// let image = document.querySelector("#image");
// fetch("https://randomuser.me/api/")
//  .then((raw) => raw.json())
//  .then((data) => {
//   console.log(data.results[0]);
//   image.src = data.results[0].picture.large;
//  })

//--------------------Factory Function Pattern-----------------------------


// function createProduct(name, price)
// {
//   let stock = 10;

//   return{
//     name,
//     price,

//     checkStock()
//     {
//       console.log(`${stock} Pieces is in Stock.`);
//     },

//     buy(qut)
//     {
//       if(qut <= stock)
//       {
//         stock -= qut
//         console.log(`${qut} Pieces Booked ${stock} Pieces left`);
//       }
//       else
//       {
//         console.error("We don't have that many pieces");
//       }
//     },

//     refiled(qut)
//     {
//       stock += qut;
//       console.log(`refiled ${qut} pieces, Now ${stock} Pieces in Stock.`);
//     }
//   }
// }

// let phone = createProduct("Iphone", 70000);


// //---------------------Observer Pattern (basic Pub-Sub)-------------------------------------------

// class YoutubeChannel
// {
//   constructor()
//   {
//     this.subscribers = [];
//   }

//   subscribe(user)
//   {
//     this.subscribers.push(user);
//     user.update("- You have Subscribe the channel");

//   }

//   unsubscrib(user)
//   {
//     this.subscribers = this.subscribers.filter((sub) => user!==sub);
//     user.update("Wel-come to our youtube channel");
//   }
//   notify(massage){
//     this.subscribers.forEach((sub) => sub.update(massage));
//   }
// }

// class Users
// {
//   constructor(name)
//   {
//     this.name = name;
//   }

//   update(data)
//   {
//     console.log(`${this.name} - ${data}`);
//   }
// }

// let Sheriyans = new YoutubeChannel ();
// let user1 = new Users("Vishal");
// let user2 = new Users("Shailesh");

// Sheriyans.subscribe(user1);
// Sheriyans.subscribe(user2);

// Sheriyans.notify("Hello Guys, there is a meetup on monday at pune");


//--------------------------Debouncing------------------------------------------------

// let input = document.querySelector("input");

// function debounce (fnc, delay)
// {
//   let timer;
//   return function(...arg)
//   {
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//       fnc(...arg);
//     },delay);
//   };
// }

// input.addEventListener("input", debounce(function(details)
// {
//   console.log(input.value);
// }, 1000))


//---------------------------------Throttling--------------------------------

let input = document.querySelector("input");

function throttle(fnc, delay)
{
  let timer = 0;
  return function(...arg)
  {
    let now = Date.now();
    if(now - timer >= delay)
    {
      timer = now;
      fnc(...arg);
    }
  };
};

input.addEventListener("input", throttle(function(details){
  console.log(input.value);
},5000));