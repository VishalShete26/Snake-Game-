let parent = document.querySelector(".parent");

function CreateToaster(config) {
  return function (notification) {
    let div = document.createElement("div");
    div.textContent = notification;
    div.className = `inline-block ${config.theam === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}  px-6 py-3  rounded pointer-event-none`;

    parent.appendChild(div);
    document.body.appendChild(parent);

    
    if (config.positionX !== "left" || config.positionY !== "top") {
      parent.className += `${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }

    setTimeout(() => {
      parent.removeChild(div);
    }, config.duration * 1000);
  };
};

let toster = CreateToaster({
  positionX: "left",
  positionY: "bottom",
  theam: "dark",
  duration: 5,
});

toster("Wel-Come to Jurassic World.");

setTimeout(() => {
  toster("Explore The Jurassic World");
}, 2000);
