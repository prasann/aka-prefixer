"use strict";

function addPrefix(form) {
  const data = new FormData(form);
  const prefix = data.get("prefix");
  const urlVal = "https://aka.ms/" + prefix;
  saveToChrome(prefix, function () {
    chrome.tabs.create({ url: urlVal });
  });
}

(async () => {
  const form = document.getElementById("prefix-form");
  form.addEventListener("submit", () => addPrefix(form));
  const savedAkaTerms = await getSavedItems()
  autocomplete(document.getElementById("prefix-input"), savedAkaTerms)
})();