document.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.querySelector('input[name="name"]');
    if (nameInput) {
        nameInput.addEventListener("input", () => {
            nameInput.value = nameInput.value.replace(/[0-9]/g, "");
        });
    }

    const phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener("input", () => {
            phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
        });
    }

    const agreeAll = document.getElementById("agree-all");
    const detailChecks = document.querySelectorAll(".chk_cont.et input[type='checkbox']");

    if (agreeAll && detailChecks.length) {
        const updateAgreeAll = () => {
            const allChecked = Array.from(detailChecks).every((checkbox) => checkbox.checked);
            agreeAll.checked = allChecked;
        };

        agreeAll.addEventListener("change", () => {
            detailChecks.forEach((checkbox) => {
                checkbox.checked = agreeAll.checked;
            });
        });

        detailChecks.forEach((checkbox) => {
            checkbox.addEventListener("change", updateAgreeAll);
        });
    }
});
