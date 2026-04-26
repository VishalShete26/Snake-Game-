let pluse = document.querySelector("#pluse");
let modal = document.querySelector(".modal");
let closeForm = document.querySelector(".closeForm");

let imageUrlInput = document.querySelector("#imgurl");
let fullNameInput = document.querySelector("#fullname");
let homeTownInput = document.querySelector("#hometown");
let purposeInput = document.querySelector("#purpose");
let category = document.querySelectorAll("input[name='category']");
let submitBtn = document.querySelector(".submit-btn");

const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const container = document.querySelector(".card-container");
let form = document.querySelector("form");

pluse.addEventListener("click", function () {
  modal.classList.add("show");
});

closeForm.addEventListener("click", function () {
  modal.classList.remove("show");
});

function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTask = [];
    oldTask.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTask));
  } else {
    let newTask = localStorage.getItem("tasks");
    newTask = JSON.parse(newTask);
    newTask.push(obj);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }
}

form.addEventListener("submit", function (evo) {
  evo.preventDefault();

  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  let selected = false;
  category.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  if (imageUrl === "") {
    alert("please proviod image URL.");
    return;
  }

  if (fullName === "") {
    alert("please provide full name");
    return;
  }

  if (homeTown === "") {
    alert("please enter hometown");
    return;
  }

  if (purpose === "") {
    alert("please proviod purpose");
    return;
  }

  if (!selected) {
    alert("please select the Category");
    return;
  }

  saveToLocalStorage({
    imageUrl,
    fullName,
    homeTown,
    purpose,
    selected,
  });
  alert("Your call have been created..");
  form.reset();
  modal.classList.remove("show");
});

function showCard() {
  let allTasks = JSON.parse(localStorage.getItem("tasks"));

  allTasks.forEach(function (task) {
    // Create main card
    let card = document.createElement("div");
    card.classList.add("card");

    // Profile section
    let profile = document.createElement("div");
    profile.classList.add("profile");

    let avatar = document.createElement("div");
    avatar.classList.add("avatar");

    let img = document.createElement("img");
    img.src = task.imageUrl;
    img.alt = "profile";

    avatar.appendChild(img);
    profile.appendChild(avatar);

    // Name section
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("name");

    let h3 = document.createElement("h3");
    h3.textContent = task.fullName;

    nameDiv.appendChild(h3);

    // Info section
    let info = document.createElement("div");
    info.classList.add("info");

    let span1 = document.createElement("span");
    span1.textContent = "Home Towen";

    let span2 = document.createElement("span");
    span2.textContent = task.homeTown;

    let span3 = document.createElement("span");
    span3.textContent = "Purpose";

    let span4 = document.createElement("span");
    span4.textContent = task.purpose;

    info.append(span1, span2, span3, span4);

    // Action section
    let action = document.createElement("div");
    action.classList.add("Action");

    let callBtn = document.createElement("button");
    callBtn.type = "button";
    callBtn.className = "btn btn-call";
    callBtn.textContent = "📞 Call";

    let msgBtn = document.createElement("button");
    msgBtn.type = "button";
    msgBtn.className = "btn btn-msg";
    msgBtn.textContent = "Massage";

    action.append(callBtn, msgBtn);

    // Append everything to card
    card.append(profile, nameDiv, info, action);

    // Finally append card to container
    document.querySelector(".card-container").appendChild(card);
  });
}
showCard();

function updateContainer() {
  const cards = document.querySelectorAll(".container .card");

  cards.forEach(function (card, index) {
    card.style.zIndex = 3 - index;
    card.style.transform = `translateY(${index * 50}px) scale(${1 - index * 0.02}))`;
    card.style.opacity = `${1 - index * 0.02}`;
  });
}

upBtn.addEventListener("click", function () {
  const lastChild = container.lastElementChild;
  if (lastChild) {
    container.insertBefore(lastChild, container.firstElementChild);
  }
  //update
  updateContainer();
});

downBtn.addEventListener("click", function () {
  const firstChild = container.firstElementChild;
  if (firstChild) {
    container.append(firstChild);
  }
  updateContainer();
});
