const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const price = document.querySelectorAll('.price');
    let total = 0;

    price.forEach(p => {
        total += parseFloat(p.textContent);
    });

    const table = document.querySelector('table');
    const newRow = document.createElement("tr");

    const labelcell = document.createElement("td");
    const totalcell = document.createElement("td");

    labelcell.textContent = "Total Price";
    totalcell.textContent = total;

    newRow.append(labelcell, totalcell);
    table.append(newRow);
}
getSumBtn.addEventListener("click", getSum);

