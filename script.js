const numbers = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const table = document.createElement("table");
for (let i = 0; i < 6; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    const cell = document.createElement("td");
    cell.textContent = numbers[i * 6 + j];
    if (numbers[i * 6 + j] >= 50) {
      cell.style.backgroundColor = "gray";
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);
function addNumber() {
    const number = Math.floor(Math.random() * 100);
    const td = document.createElement("td");
    td.innerText = number;
    if (number >= 50) {
        td.style.backgroundColor = "gray";
    }
    const trList = table.getElementsByTagName("tr");
    const lastTr = trList[trList.length - 1];
    if (lastTr.childElementCount < 5) {
    lastTr.appendChild(td);
    } else {
    const newTr = document.createElement("tr");
    newTr.appendChild(td);
    table.appendChild(newTr);
    }
    }
    