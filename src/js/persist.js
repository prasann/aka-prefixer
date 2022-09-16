function saveToChrome(term, callback) {
  chrome.storage.sync.get({ akaTerms: [] }, function (result) {
    const usedItemSet = result.akaTerms;
    const purgedSet = new Set(usedItemSet)
    purgedSet.add(term)
    chrome.storage.sync.set({ akaTerms: [...purgedSet] }, function () {
      callback()
    });
  });
}

async function getSavedItems(){
    return await new Promise(function (resolve, reject){
        chrome.storage.sync.get({ akaTerms: [] }, function (result){
            resolve(result.akaTerms)
        })
    });
}