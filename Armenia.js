function toggleContent() {
    var content = document.getElementById("content");
    var btn = document.getElementById("toggle-btn");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btn.innerHTML = "Show More";
    } else {
        content.style.maxHeight = "150px"; 
        btn.innerHTML = "Show Less";
    }
}

