document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll(".tab-list button");
    const changeContents = document.querySelectorAll(".change-cont");

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {

            tabButtons.forEach(btn => btn.classList.remove("on"));

            changeContents.forEach(cont => cont.classList.remove("on"));

            button.classList.add("on");

            changeContents[index].classList.add("on");
        });
    });
});