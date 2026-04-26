let button = document.querySelector("#btn");
let ul = document.querySelector("ul");

function add(num1,num2)
{
    return num1 +num2;
}

button.addEventListener("click", function(){
    const num1 = Math.floor(Math.random() *10);
    const num2 = Math.floor(Math.random() *10);
    console.log(num1,num2);

    const final = add(num1,num2);

    let li = document.createElement("li");
    li.textContent = final;
    
    ul.appendChild(li);
});