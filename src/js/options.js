function fillInOptions(savedAkaTerms){
    const tableBody = document.createElement('tbody');

    const rows = savedAkaTerms.forEach((term) => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.appendChild(document.createTextNode(term))
        row.appendChild(cell);
        tableBody.appendChild(row)
    })

    const table = document.getElementById("aka-terms");
    table.appendChild(tableBody)
}

(async () => {
  const savedAkaTerms = await getSavedItems()
  fillInOptions(savedAkaTerms);
})();
