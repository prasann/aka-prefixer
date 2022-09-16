'use strict';

const form = document.getElementById('prefix-form');
form.addEventListener('submit', addPrefix);

function addPrefix(event) {
    const data = new FormData(form);
    const prefix = data.get('prefix');
    const urlVal = "https://aka.ms/" + prefix;
    chrome.tabs.create({ url: urlVal });
}