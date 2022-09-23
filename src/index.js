import "./styles.css";

const dataTable = document.getElementById("mytable");
const getButton = document.getElementById("event");

getButton.addEventListener("click", getData);

async function getData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const promise = await fetch(url);
  const userJSON = await promise.json();

  Array.from(userJSON).forEach((dataset) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.innerText = dataset.dimension.Alue.category.label;
    td2.innerText = dataset.values;
    tr.appendChild(td1);
    tr.appendChild(td2);

    dataTable.appendChild(tr);
  });
}
