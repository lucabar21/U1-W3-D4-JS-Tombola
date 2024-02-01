const createNumbers = () => {
  const container = document.getElementById("tombola-container");

  for (let i = 0; i < 90; i++) {
    const numCellDiv = document.createElement("div");
    numCellDiv.classList.add("numeri");

    const numCellH3 = document.createElement("h3");
    numCellH3.innerText = i + 1;

    numCellDiv.appendChild(numCellH3);
    container.appendChild(numCellDiv);
  }
};

const randomBtn = document.querySelector("button");

randomBtn.onclick = () => {
  const randomNum = Math.floor(Math.random() * 90 + 1);
  const arrayCells = document.querySelectorAll("#tombola-container");
  const extractedNum = arrayCells[randomNum];
  extractedNum.style = "background #9dfad1";
};

window.onload = function () {
  createNumbers();
};
