"use strict";

const form = document.getElementById("prefix-form");
form.addEventListener("submit", addPrefix);
getSavedItems().then(akaTerms => {
    autocomplete(document.getElementById("prefix-input"), akaTerms)
})

function addPrefix(event) {
  const data = new FormData(form);
  const prefix = data.get("prefix");
  const urlVal = "https://aka.ms/" + prefix;
  saveToChrome(prefix, function () {
    chrome.tabs.create({ url: urlVal });
  });
}
