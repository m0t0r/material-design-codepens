var el = document.querySelectorAll(".day");
for(var i = 0; i < el.length; i++) {
    el[i].addEventListener("touchend", handleEnd);
    el[i].addEventListener("mouseup", handleEnd);
}

function handleEnd(evt) {
    evt.preventDefault();
    // Grab manipulable elements
    var calendar = document.querySelectorAll(".calendar")[0];
    var clonedNode = evt.currentTarget.cloneNode(true);
    // Reset class names
    clonedNode.classList.remove("day");
    clonedNode.classList.add("cloned-day");
    // Set positions to mimic original placement
    clonedNode.style.left = evt.currentTarget.offsetLeft + "px";
    clonedNode.style.top = evt.currentTarget.offsetTop + "px";
    clonedNode.style.right = (calendar.offsetWidth - evt.currentTarget.offsetWidth - evt.currentTarget.offsetLeft) + "px";
    clonedNode.style.bottom = (calendar.offsetHeight - evt.currentTarget.offsetHeight - evt.currentTarget.offsetTop) + "px";
    calendar.appendChild(clonedNode);
    setTimeout(function() {
        clonedNode.classList.add("touched");
    });
    
}