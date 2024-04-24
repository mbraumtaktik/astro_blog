   // Navigation slider
   document.addEventListener("click", (e) => {
    if (!e.target.closest(".slideinabout")) return;
    if (document.getElementById("slideinNav").classList.contains("visible")) {
        document.getElementById("slideinNavHash").classList.remove("visible");
        document.getElementById("slideinSearch").classList.remove("visible");
        document.getElementById("slideinNav").classList.remove("visible");
    } else {
        document.getElementById("slideinNav").classList.toggle("visible");
        document.getElementById("slideinNavHash").classList.remove("visible");
        document.getElementById("slideinSearch").classList.remove("visible");
    }
});

document.addEventListener("click", (e) => {
    if (!e.target.closest("#ht-button")) return;
    if (document.getElementById("slideinNavHash").classList.contains("visible")) {
        document.getElementById("slideinNav").classList.remove("visible");
        document.getElementById("slideinSearch").classList.remove("visible");
        document.getElementById("slideinNavHash").classList.remove("visible");
    } else {
        document.getElementById("slideinNavHash").classList.toggle("visible");
        document.getElementById("slideinNav").classList.remove("visible");
        document.getElementById("slideinSearch").classList.remove("visible");
    }
});

document.addEventListener("click", (e) => {
    if (!e.target.closest("#search-button")) return;
    if (document.getElementById("slideinSearch").classList.contains("visible")) {
        document.getElementById("slideinNav").classList.remove("visible");
        document.getElementById("slideinNavHash").classList.remove("visible");
        document.getElementById("slideinSearch").classList.remove("visible");
    } else {
        document.getElementById("slideinSearch").classList.toggle("visible");
        document.getElementById("slideinNav").classList.remove("visible");
        document.getElementById("slideinNavHash").classList.remove("visible");
    }
});