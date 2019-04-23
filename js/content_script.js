let hostname = document.location.hostname;
console.log("aviv: ",hostname);
let port = chrome.runtime.connect({name: hostname});

chrome.runtime.onMessage.addListener(onMessage);

function onMessage(request, sender, sendResponse){
    let body = document.getElementsByTagName("BODY")[0];
    let anchors = document.getElementsByTagName("A");
    let text = body.innerText;
    text = text.replace(/(\r\n|\n|\r)/gm,"<br>");
    for(let anchor of anchors){
        console.debug(`replacing: ${anchor.innerText} with ${anchor}`)
        text = text.replace(anchor.innerText,`<a href="${anchor}">${anchor.innerText}</a>`);
        //text = text.replace(anchor.innerText,anchor);
    }
    body.innerHTML = text;
    sendResponse({result: text});
}