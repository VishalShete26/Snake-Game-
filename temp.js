let main=document.querySelector("#main");

main.addEventListener("submit", function(val){
    val.preventDefault();
    console.log(val);
})