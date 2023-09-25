// let image1 = document.querySelector(".img1");
// let image2 = document.querySelector(".img2");
let dice1 = document.querySelectorAll(".diceByCss")[0];
let dice2 = document.querySelectorAll(".diceByCss")[1];

let circle1 = document.querySelector(".circle");
let title = document.querySelector("h1");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// image1.setAttribute("src", `./images/dice${randomNumber1}.png`);

// image2.setAttribute("src", `./images/dice${randomNumber2}.png`);
function createCircle(number,dice) {
  const dotPositionMatrix = {
    1: [[50, 50]],
    2: [
      [80, 20],
      [20, 80],
    ],
    3: [
      [80, 20],
      [50, 50],
      [20, 80],
    ],
    4: [
      [20, 20],
      [20, 80],
      [80, 20],
      [80, 80],
    ],
    5: [
      [20, 20],
      [20, 80],
      [50, 50],
      [80, 20],
      [80, 80],
    ],
    6: [
      [20, 20],
      [20, 80],
      [50, 20],
      [50, 80],
      [80, 20],
      [80, 80],
    ],
  };

  for (const dotPosition of dotPositionMatrix[number]) {
    const dot = document.createElement("div");
    dot.classList.add("circle");
    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");
    dice.appendChild(dot);
  }
}

createCircle(randomNumber1,dice1);
createCircle(randomNumber2,dice2);

if (randomNumber1 == randomNumber2) {
  title.innerHTML = "🚩Match Draw🚩";
} else if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins 🚩";
} else {
  title.innerHTML = "Player 2 Wins 🚩";
}
