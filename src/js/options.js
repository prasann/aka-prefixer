function listItem(text) {
  return $("<li>")
    .attr("class", "list-item")
    .append($("<span>").text(text))
    .append(
      $("<img>")
        .attr("src", "images/delete-30.png")
        .attr("title", "delete the term")
        .attr("width", "16")
        .attr("height", "16")
        .attr("class", "list-item-del")
    );
}

function populateTermsInUI(savedAkaTerms) {
  $("#aka-terms").append(savedAkaTerms.map(listItem));
}

function deleteItem(event) {
  const clickedDeleteIcon = event.target;
  const termToBeDeleted = $(clickedDeleteIcon).parent().find("span").text();
  removeTerm(termToBeDeleted);
}

(async () => {
  const savedAkaTerms = await getSavedItems();
  populateTermsInUI(savedAkaTerms);
  if (savedAkaTerms.length === 0) {
    $(".no-items-present").show();
  }
  $(".list-item-del").on("click", deleteItem);
})();
