function giveLink() {
    var search = document.getElementById("googlehere").value;
    var url = "https://maarasteh.github.io/re-lmgtfy/go.html?q=" + search;
    document.getElementById("url").textContent = url;
}

function openInNewTab() {
    var url = document.getElementById("url").textContent;
    open(url);
    win.focus()
}
