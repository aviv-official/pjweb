function clean(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, console.log);
    });
}
console.debug("document: ",document.innerHTML);
document.getElementById("cleanBtn").addEventListener("click",clean);