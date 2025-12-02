const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const price=document.querySelectorAll('.price')
	let total=0;
	price.forEach ((p=>{
		total+=parse float(p.textContent)
	}));
	const table=document.querySelector('table')
	const newRow=document.CreateElement("tr")
	const labelcell=document.CreateElement("td")
	const totalcell=document.CreateElement("td")
	totalcell.textContent='total';
	labelcell.textContent='Totalprice';
	newRow.id='ans';
	newRow.append(labelcell,totalcell);
	newRow.appendchild(newRow);
getSumBtn.addEventListener("click", getSum);

