const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll('.prices');
	let total=0;
	prices.forEach((p => {
		total+=parsefloat(p.textContent)
	}));
	cosnt table=document.querySelector('table');
	const newRow=document.createElement("tr");
	const labelcell=document.createElement("td");
	const tablecell=document.createElement("td");
	totalcell.textContent='total';
	labelcell.textContent='totalprice';
	new id='ans';
	newRow.append(labelcell,tablecell);
	table.appendchild('newRow')
getSumBtn.addEventListener("click", getSum);

