document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".layer_zone .close").forEach(btn => {
        btn.addEventListener("click", () => {
            const layer = btn.closest(".layer_zone");
            if (layer) {
                layer.style.display = "none";
            }
        });
    });

    document.querySelectorAll(".tw-pro button").forEach(btn => {
        btn.addEventListener("click", () => {
            document
                .querySelectorAll(".tw-pro button.on")
                .forEach(active => active.classList.remove("on"));
    
            btn.classList.add("on");
        });
    });
});
