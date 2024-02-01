const createNumbers = () => {
  const container = document.getElementById("tombola-contanier");

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

const arrayNums = () => {
  for (let i = 0; i < 90; i++) {
    extractedNumbers.push(i + 1);
  }
  return extractedNumbers;
};

const extractedNumbers = [];
randomBtn.onclick = () => {
  const randomNum = Math.floor(Math.random() * 90 + 1);
  extractedNumbers.push(randomNum);
};

window.onload = function () {
  createNumbers();
};
