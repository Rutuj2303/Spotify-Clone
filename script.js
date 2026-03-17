document.addEventListener("keydown", function (event) {

    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "l") {
        event.preventDefault(); // prevents browser default actions
        
        document.querySelector(".searchInput").focus();
    }

});