"use strict";

function saveAndRedirect() {
  const prefix = $("#prefix-input").val();
  const urlVal = "https://aka.ms/" + prefix;
  saveToChrome(prefix, function () {
    chrome.tabs.create({ url: urlVal });
  });
}

function openOptions(event) {
  event.preventDefault();
  try {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL("src/options.html"));
    }
  } catch (err) {
    alert(err);
  }
}

(async () => {
  const savedAkaTerms = await getSavedItems();
  const transformedTerms = savedAkaTerms.map((term, i) => ({title: term, id: i}))

  $(".autocomplete").tinyAutocomplete({
    data: transformedTerms,
    maxItems: 5,
    onSelect: function(el, val) {
      if (val != null) {
        $(this).val(val.title);
      } 
      $("#prefix-form").trigger("submit");
    }
  });

  $(".autocomplete").trigger("focus");
  $("#prefix-form").on("submit", saveAndRedirect);
  $("#go-to-options").on("click", openOptions);
})();
