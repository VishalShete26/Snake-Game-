let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("#form");
let emailerror=document.querySelector("#emailerror");
let passworderror=document.querySelector("#passworderror");
let confirm=document.querySelector("#confirm");
let confirmerror=document.querySelector("#confirmerror");


form.addEventListener("submit", function(evo){
    evo.preventDefault();

    emailerror.textContent="";
    passworderror.textContent="";
    confirmerror.textContent ="";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passwordans=passwordRegex.test(password.value);

    let isValid=true;

    if(!emailans){
        emailerror.textContent="Invalid Email";
        emailerror.style.display="initial";
        isValid=false;
    }

    if(!passwordans){
        passworderror.textContent="Invalid Password";
        passworderror.style.display="initial";
        isValid=false;
    }

    if(confirm.value !== password.value)
    {
        confirmerror.textContent ="Password Don't Match";
        confirmerror.style.display="initial";
        isValid=false;
    }

    if(confirm.value ==="")
    {
        confirmerror.textContent ="Please Confirm your Passsword";
        confirmerror.style.display="initial";
        isValid=false;
    }

    if(isValid)
    {
        document.querySelector("#resultMassage").textContent="Everything is Correct.";
    }

});