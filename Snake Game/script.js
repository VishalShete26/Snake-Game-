const board = document.querySelector(".board");
const modal = document.querySelector(".modal");
const startBtn = document.querySelector(".btn");
const startGame = document.querySelector(".start-game");
const gameOver = document.querySelector(".game-over");
const highScoreEl = document.querySelector("#highScore");
const scoreEl = document.querySelector("#score");
const timeEl = document.querySelector("#time");

//sound Effect
const soundEat = new Audio("soundsEat.wav");
const soundGameOver = new Audio("soundsGameOver.wav");
const soundStartGame = new Audio("soundsStartGame.wav");
const bgmusic = new Audio("bgmusic.wav");
bgmusic.loop = true;
bgmusic.volume = 0.3;

const blockwidth = 50;
const blockheight = 50;

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = "00:00";

const cols = Math.floor(board.clientWidth / blockwidth);
const rows = Math.floor(board.clientHeight / blockheight);

let blocks = [];
let snake = [{ x: 1, y: 1 }];

let speed = 400;

let food = {
  x: Math.floor(Math.random() * cols),
  y: Math.floor(Math.random() * rows),
};

let direction = "right";

let IntervelId = null;
let timerIntervalId = null;
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${col},${row}`] = block;
  }
}

function render() {
  // Remove current snake drawing
  snake.forEach((segment) => {
    blocks[`${segment.x},${segment.y}`].classList.remove("fill");
  });

  // Calculate new head
  let head = { ...snake[0] };

  if (direction === "right") head.x++;
  else if (direction === "left") head.x--;
  else if (direction === "up") head.y--;
  else if (direction === "down") head.y++;

  // Wall collision
  if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
    soundGameOver.currentTime = 0;
    soundGameOver.play();
    clearInterval(IntervelId);
    clearInterval(timerIntervalId);
    modal.style.display = "flex";
    startGame.style.display = "none";
    gameOver.style.display = "flex";
    bgmusic.pause();
    bgmusic.currentTime = 0;
    return;
  }

  // self collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      soundGameOver.currentTime = 0;
      soundGameOver.play();
      clearInterval(IntervelId);
      modal.style.display = "flex";
      startGame.style.display = "none";
      gameOver.style.display = "flex";
      bgmusic.pause();
      bgmusic.currentTime = 0;
      return;
    }
  }
  // Add new head
  snake.unshift(head);
  // Food collision
  if (head.x === food.x && head.y === food.y) {
    // Remove food class
    blocks[`${food.x},${food.y}`].classList.remove("food");

    // Create new food
    food = {
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
    };

    score += 10;
    scoreEl.innerText = score;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
    }

    if (score % 50 === 0 && speed > 100) {
      speed -= 20;
      clearInterval(IntervelId);
      IntervelId = setInterval(render, speed);
    }

    soundEat.currentTime = 0;
    soundEat.play();
  } else {
    // Remove tail if no food eaten
    snake.pop();
  }

  // Draw food
  blocks[`${food.x},${food.y}`].classList.add("food");

  // Draw snake
  snake.forEach((segment) => {
    blocks[`${segment.x},${segment.y}`].classList.add("fill");
  });
}

startBtn.addEventListener("click", () => {
  modal.style.display = "none";
  IntervelId = setInterval(() => {
    render();
  }, speed);
  highScoreEl.innerText = localStorage.getItem("highScore");
  timeEl.innerText = "00:00";
  timerIntervalId = setInterval(() => {
    let [min, sec] = time.split(":").map(Number);
    if (sec > 59) {
      min++;
      sec = 0;
    } else {
      sec++;
    }
    time = `${min}:${sec}`;
    timeEl.innerText = time;
  }, 1000);
  soundStartGame.currentTime = 0;
  soundStartGame.play();
  bgmusic.play();
});

gameOver.addEventListener("click", resetGame);

function resetGame() {
  blocks[`${food.x},${food.y}`].classList.remove("food");
  snake.forEach((segment) => {
    blocks[`${segment.x},${segment.y}`].classList.remove("fill");
  });
  snake = [{ x: 1, y: 1 }];
  food = {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows),
  };

  score = 0;
  time = "00:00";
  scoreEl.innerText = score;
  highScoreEl.innerText = localStorage.getItem("highScore");
  modal.style.display = "none";
  speed = 400;
  clearInterval(IntervelId);
  IntervelId = setInterval(() => {
    render();
  }, speed);
  direction = "down";
  soundStartGame.currentTime = 0;
  soundStartGame.play();
}
window.addEventListener("keydown", (evt) => {
  console.log(evt.key);
  if (evt.key === "ArrowDown") {
    direction = "down";
  } else if (evt.key === "ArrowUp") {
    direction = "up";
  } else if (evt.key === "ArrowLeft") {
    direction = "left";
  } else if (evt.key === "ArrowRight") {
    direction = "right";
  }
});
