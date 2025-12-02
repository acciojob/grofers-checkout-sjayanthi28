const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll('.prices');
  let total = 0;

  prices.forEach((p) => {
    total += parseFloat(p.textContent);
  });

  const table = document.querySelector('table');
  const newRow = document.createElement("tr");
  const labelcell = document.createElement("td");
  const tablecell = document.createElement("td");

  totalcell.textContent = "total";
  labelcell.textContent =' Totalprice';

  newRow.id = "ans";
  newRow.append(labelcell, tablecell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

