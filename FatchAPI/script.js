function getUser(){
    fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) =>{
        console.log(data.results);
        document.querySelector(".container").innerHTML="";

        data.results.forEach((user) =>{
            const card = document.createElement("div");
            card.classList.add("card");

            const profile = document.createElement("div");
            profile.classList.add("profile");

            const img = document.createElement("img");
            img.classList.add("img");
            img.src = user.picture.large;

            const info = document.createElement("div");
            info.classList.add("info");

            const h1 = document.createElement("h1");
            h1.classList.add("h1");
            h1.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

            const email = document.createElement("span");
            email.classList.add("span");
            email.textContent = user.email;

            const dob = document.createElement("span");
            dob.classList.add("span");
            dob.textContent = user.dob.date;

            const phone = document.createElement("span");
            phone.classList.add("span");
            phone.textContent = user.phone;

            
            info.appendChild(h1);
            info.appendChild(email);
            info.appendChild(dob);
            info.appendChild(phone);

            profile.appendChild(img);

            card.appendChild(profile);
            card.appendChild(info);

            document.querySelector(".container").appendChild(card);
        });
    })
}

getUser();

let button = document.querySelector("button");

button.addEventListener("click", function(){
    getUser();
});