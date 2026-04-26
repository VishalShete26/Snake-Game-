let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],

  init: function () {
    form.addEventListener("submit", this.submitUser.bind(this));
  },

  submitUser: function (e) {
    e.preventDefault();
    this.addUser();
  },

  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUI();
  },

  renderUI: function () {
    let container = document.querySelector(".cardcontainer");
    container.innerHTML = "";
    this.users.forEach((user, index) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const profile = document.createElement("div");
      profile.classList.add("profile");

      const img = document.createElement("img");
      img.src = user.photo;

      profile.appendChild(img);

      const info = document.createElement("div");
      info.classList.add("info");

      const h2 = document.createElement("h2");
      h2.textContent = user.username;

      const h5 = document.createElement("h5");
      h5.textContent = user.role;

      const h6 = document.createElement("h6");
      h6.textContent = user.bio;

      info.appendChild(h2);
      info.appendChild(h5);
      info.appendChild(h6);

      card.appendChild(profile);
      card.appendChild(info);

      card.addEventListener("click", ()=> {
        this.removeUser(index);
      });
      container.appendChild(card);
    });
  },

  removeUser: function (index) {
    this.users.splice(index, 1);
    this.renderUI();
  }
};

userManager.init();
