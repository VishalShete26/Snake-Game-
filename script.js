// let h1=document.querySelector("h1");
// h1.textContent="Hello Rajaji";
// h1.hidden=false;

// let a = document.querySelector("a");
// a.href="http://www.google.com"
// console.log(a.getAttribute("href"));
// a.removeAttribute("href");

// let img = document.querySelector("img");
// img.setAttribute("src","https://voteforshivajijayanti.com/wp-content/uploads/2024/06/Chhatrapati-Shivaji-Maharaj-1.jpg",);


// let h2=document.createElement("h2");  //create element
// h2.textContent="Khamma ghani";    //set the value 
// //document.body.append(h2);     // append  or prepend
// document.querySelector("body").append(h2); 

// let h1=document.querySelector("div h1");
// // h1.remove();
// h1.style.color="gold";
// h1.style.backgroundColor="black";
// h1.style.fontFamily="century gothic (bold-italic)";
// h1.style.textTransform="capitalize";

//✅ use queruSelectorAll to select all Button With class "buy-now"

// let buyNow=document.querySelectorAll(".buy-now");
// console.log(buyNow);

//✅Select the heading of a page by it's id and change it's text to "Welcome to Shyeriance Coding School"
// let h1=document.querySelector("#info h1");
// h1.textContent="Shyeriance Coding School.";
// h1.style.fontFamily="Century gothic";

// let p=document.querySelector("#info p");
// p.style.fontFamily="baloo";

//✅select all <li> Element and print thrie text using a loop

// let lis=document.querySelectorAll("li");
// lis.forEach((val)=>{
//     console.log(val.textContent);
// })

// for(let i=0;i<lis.length;i++)
// {
//     console.log(lis[i].textContent);
// }

//✅Select a paragraph and replace its content with  { <b>Updated</b> by javaScript}

// let p=document.querySelector("#update");
// p.innerHTML="<b>Updated</b> by JavaScript";

//✅How Do you get src of an image using javaScript

// let img = document.querySelector("#new");
// console.log(img.getAttribute("src"));

//✅What Does SetAttribute() do?
// document.querySelector("#new").setAttribute("src", "https://dfdx9u0psdezh.cloudfront.net/Visual-Icons/dataScienceGraphic2.webp");

//✅Select a link and update its href to "https://sheryians.com"
// let a=document.querySelector("a");
// a.href="https://sheryians.com";

//✅Add a title attribute to a div dynamically
// let update=document.querySelector("div");
// update.setAttribute("title","Somthing Importent");

//✅Remove the Disable Attribute from Button

// let bts=document.querySelector("button");
// bts.removeAttribute("disabled");

//✅ What does createElement() do? whats returned?

// let h3 = document.createElement("h3");
// console.log(h3);

//✅Remove an element using removeChild()

// let div=document.querySelector("div");
// div.removeChild(h1);

//✅Create a new list item <li>New Task </li> and add it to the end <ul>

// let ul=document.querySelector("ul");
// let li=document.createElement("li");
// li.textContent="Papaya";
// ul.appendChild(li);

//✅Create a new image element with a placeholder source and add it to the top of a div

// let img=document.createElement("img");
// img.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/048/910/778/large_2x/default-image-missing-placeholder-free-vector.jpg");

// img.classList.add("placeholder");
// let div=document.querySelector("div");
// div.prepend(img);

//✅Select the first item in the list and remove it from DOM

// let ul=document.querySelector("ul");
// let li=document.querySelector("li");
// ul.removeChild(li);

//✅Add highlight Class to every even item in a list

// let li=document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((val)=>{
//     val.classList.toggle("highlight");
// });

//✅Set the font size of all <p> element to 18px using style

// let p=document.querySelector("p")
// p.classList.add("fontSize");

//✅✅✅✅✅ Event and Events Handling ✅✅✅✅✅

// let state = document.querySelector("#state");
// let hd = document.querySelector("#heading");

// state.addEventListener("change", function(dat){
//     hd.textContent =`${dat.target.value} Selected`;
// });


// let main=document.querySelector("#main");
// let gender=document.querySelector("#gender");
// gender.addEventListener("change", function(val){
//     main.textContent=`${val.target.value} Selecter`;
// })

// let main=document.querySelector("#main");
// let h3=document.querySelector("h3");

// main.addEventListener("mouseover", function(){
//     main.style.backgroundColor="yellow";
//     h3.textContent="Yellow";
//     h3.style.color="black";
// })

// main.addEventListener("mouseout", function()
// {
//     main.style.backgroundColor="red";
//     h3.textContent="Red";
//     h3.style.color=" #fff";
// })

// let main=document.querySelector("#main");
// window.addEventListener("mousemove",function(dtl){
//     main.style.top= dtl.clientY +"px";
//     main.style.left= dtl.clientX +"px";
// })

// let ul=document.querySelector("ul");
// ul.addEventListener("click", function(evo)
// {
//      evo.target.classList.toggle("lt");
// })

let input=document.querySelector("input");
let span=document.querySelector("span")

input.addEventListener("input", function(evo){
     let cnt=20-input.value.length;
     span.textContent= 20-input.value.length;
     if(cnt<0)
     {
          span.style.color="red";
     }
     else{
          span.style.color="white";
     }

})