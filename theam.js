function applyTheam(theam)
{
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theam);
}

function getSystemTheam()
{
    return window.matchMedia('(prefers-color-scheme:dark)').matches ?"dark":"light";
}

function setInitialTheam(){
    const savedTheam=localStorage.getItem("theam");
    applyTheam(savedTheam || getSystemTheam());
}
//set initial theam

setInitialTheam();

//listen to system theam change only if no theam is stored
window.matchMedia('(prefers-color-scheme:dark)').addEventListener("change", ()=>{
    if(!localStorage.getItem("theam"))
    {
        applyTheam(getSystemTheam());
    }
});


//Toggle Button 

document.querySelector("#toggle-theam").addEventListener("click",()=>{
    const currentTheam = document.body.classList.contains("dark") ?"dark":"light";
    const newTheam = currentTheam === "dark" ? "light" : "dark";
    applyTheam(newTheam);
    localStorage.setItem("theam", newTheam);
});