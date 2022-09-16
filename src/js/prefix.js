"use strict";

function addPrefix(form) {
  const data = new FormData(form);
  const prefix = data.get("prefix");
  const urlVal = "https://aka.ms/" + prefix;
  saveToChrome(prefix, function () {
    chrome.tabs.create({ url: urlVal });
  });
}

function openOptions(event) {
  event.preventDefault();
  try{
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('src/options.html'));
    }
  }catch(err){
    alert(err)
  }
  
}

(async () => {
  const savedAkaTerms = await getSavedItems()
  autocomplete(document.getElementById("prefix-input"), savedAkaTerms)

  const form = document.getElementById("prefix-form");
  form.addEventListener("submit", () => addPrefix(form));
  
  const optionsBtn = document.querySelector('#go-to-options')
  optionsBtn.addEventListener('click', openOptions);
})();