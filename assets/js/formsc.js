document.addEventListener('DOMContentLoaded', function() {
    // pc폼
    document.getElementById('checkall').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('agree1').checked = true;
            document.getElementById('agree2').checked = true;
        } else {
            document.getElementById('agree1').checked = false;
            document.getElementById('agree2').checked = false;
        }
    });

    document.getElementById('agree1').addEventListener('change', updateCheckAll);
    document.getElementById('agree2').addEventListener('change', updateCheckAll);

    function updateCheckAll() {
        if (document.getElementById('agree1').checked && document.getElementById('agree2').checked) {
            document.getElementById('checkall').checked = true;
        } else {
            document.getElementById('checkall').checked = false;
        }
    }
    
    // 모바일 폼
    document.getElementById('mo-checkall').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('mo-agree1').checked = true;
            document.getElementById('mo-agree2').checked = true;
        } else {
            document.getElementById('mo-agree1').checked = false;
            document.getElementById('mo-agree2').checked = false;
        }
    });

    document.getElementById('mo-agree1').addEventListener('mo-change', updateCheckAll);
    document.getElementById('mo-agree2').addEventListener('mo-change', updateCheckAll);

    function updateCheckAll() {
        if (document.getElementById('mo-agree1').checked && document.getElementById('mo-agree2').checked) {
            document.getElementById('mo-checkall').checked = true;
        } else {
            document.getElementById('mo-checkall').checked = false;
        }
    }
});
