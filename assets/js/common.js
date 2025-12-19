document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form").forEach(form => {

        const agreeAll = form.querySelector('[data-role="agree-all"]');
        const agreeItems = form.querySelectorAll('[data-role="agree-item"]');

        if (!agreeAll || !agreeItems.length) return;

        // 전체동의 클릭
        agreeAll.addEventListener("change", () => {
            agreeItems.forEach(chk => {
                chk.checked = agreeAll.checked;
            });
        });

        // 개별 동의 클릭
        agreeItems.forEach(chk => {
            chk.addEventListener("change", () => {
                agreeAll.checked = [...agreeItems].every(c => c.checked);
            });
        });
    });
});
