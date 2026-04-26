let btn=document.querySelector("#btn");
let inp=document.querySelector("#inp");
btn.addEventListener("click", function()
{
    inp.click();
})
inp.addEventListener("change", function(val){
    const file = val.target.files[0];
    if(file)
    {
        btn.textContent= file.name;
    }
})