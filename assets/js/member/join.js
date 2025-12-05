document.addEventListener("DOMContentLoaded", function () {
/* 로그인, 회원가입, 비번찾기 */

    function loginPurplesMem()
    {
        var uid, upwd, frmName;

        uid = $("#sidweb");
        frmName = $("#frmweblog");

        if (bCheck == 1){ upwd = $("#spwdwebi"); }
        else{ upwd = $("#spwdweb"); }

        if (uid.val() == ""){
            alert("아이디를 입력하세요.");
            uid.focus();
            return false;
        }

        if (upwd.val() == ""){
            alert("비밀번호를 입력해 주세요.");
            upwd.focus();
            return false;
        }

        frmName.submit();
    }

    function JsLinc_SMS_L()
    {
        var hp1, hp2, hp3, confirmNum, mobileNum;

        hp1 = $("#shp1");
        hp2 = $("#shp2");
        hp3 = $("#shp3");
        confirmNum = $("#websIdNum");

        if (hp1.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp1.focus();
            return;
        }

        if (hp2.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp2.val().length < 3){
            alert("연락처를 정확히 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp3.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp3.focus();
            return;
        }

        if (hp3.val().length < 4){
            alert("연락처를 정확히 입력해 주세요.");
            hp3.focus();
            return;
        }

        mobileNum = hp1.val() + hp2.val() + hp3.val();

        $.ajax({
            url:"/inc_folder/fnc_file/hpConfirm.asp?pgcate="+pgcate+"&tsub="+tsub+"&mobile1="+hp1.val()+"&mobile2="+hp2.val()+"&mobile3="+hp3.val(),
            datatype:"text",
            success: function(data){
                var res = data ;

                if (parseInt(res, 10) > 100000 && parseInt(res, 10) < 1000000 ){
                    alert(mobileNum + " 번호로 인증 번호가 전송 되었습니다.");
                    confirmNum.val(parseInt(res, 10));
                    hp1.prop("disabled", true);
                    hp2.prop("disabled", true);
                    hp3.prop("disabled", true);
                }else if (parseInt(res) == 1){
                    alert("페이지 오류 : 관리자에게 문의 바랍니다.");
                }else if (parseInt(res) == 2){
                    alert("입력 오류 : 관리자에게 문의 바랍니다.");
                }else if (parseInt(res) == 10){
                    alert("횟수 초과 : 일일 발송 횟수를 초과하였습니다.");
                }else{
                    alert(res + " : 예기치 않은 오류가 발생하였습니다.");
                }
            }
        });
    }

    function checkLostIdHPcertify(lv)
    {
        var hp1, hp2, hp3, auth, confirmNum, hpAuth;

        hp1 = $("#shp1");
        hp2 = $("#shp2");
        hp3 = $("#shp3");
        auth = $("#sauthweb");
        confirmNum = $("#websIdNum");
        hpAuth = $("#websIdAuth");

        //if (hpAuth.val() != "Y"){
            if (auth.val() == ""){
                if (lv != 0){ alert("인증번호를 입력해 주세요."); }
                auth.focus();
                return false;
            }

            if (auth.val().length < 6){
                if (lv != 0){ alert("인증번호를 정확히 입력해 주세요."); }
                auth.focus();
                return false;
            }

            $.ajax({
                url:"/inc_folder/fnc_file/hpConfirm_check.asp?pgcate="+pgcate+"&tsub="+tsub+"&mobile1="+hp1.val()+"&mobile2="+hp2.val()+"&mobile3="+hp3.val()+"&anum="+auth.val(),
                datatype:"text",
                success: function(data){
                    var res = data ;

                    if (parseInt(res) == 1){
                        hpAuth.val("Y");
                        if (lv != 0){ alert("인증번호가 확인되었습니다."); }
                        return true;
                    }else if (parseInt(res) == 0){
                        hpAuth.val("");
                        auth.val('');
                        if (lv != 0){ alert("인증번호가 일치하지 않습니다."); }
                        return false;
                    }else{
                        hpAuth.val("");
                        auth.val('');
                        if (lv != 0){ alert("오류가 발생하였습니다."); }
                        return false;
                    }
                }
            });
        //}
    }

    function searchId_Purples()
    {
        //var org = document.characterSet;

        var uname, hp1, hp2, hp3, hpAuto, frmName;

        uname = $("#snameweb");
        hp1 = $("#shp1");
        hp2 = $("#shp2");
        hp3 = $("#shp3");
        hpAuto = $("#websIdAuth");
        frmName = $("#frmwebsid");

        if (uname.val() == ""){
            alert("이름을 입력하세요.");
            uname.focus();
            return false;
        }

        if (hp1.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp1.focus();
            return;
        }

        if (hp2.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp2.val().length < 3){
            alert("연락처를 정확히 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp3.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp3.focus();
            return;
        }

        if (hp3.val().length < 4){
            alert("연락처를 정확히 입력해 주세요.");
            hp3.focus();
            return;
        }

        checkLostIdHPcertify(0);

        if (hpAuto.val() != "Y"){
            alert("인증번호 확인이 필요합니다.");
            return false;
        }

        hp1.prop("disabled", false);
        hp2.prop("disabled", false);
        hp3.prop("disabled", false);

        //document.characterSet='EUC-KR';
        frmName.submit();
        //document.characterSet=org;

        hp1.prop("disabled", true);
        hp2.prop("disabled", true);
        hp3.prop("disabled", true);
    }

    function JsLinc_SMS_P()
    {
        var hp1, hp2, hp3, confirmNum, mobileNum;

        hp1 = $("#shp1p");
        hp2 = $("#shp2p");
        hp3 = $("#shp3p");
        confirmNum = $("#websIdNum2");

        if (hp1.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp1.focus();
            return;
        }

        if (hp2.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp2.val().length < 3){
            alert("연락처를 정확히 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp3.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp3.focus();
            return;
        }

        if (hp3.val().length < 4){
            alert("연락처를 정확히 입력해 주세요.");
            hp3.focus();
            return;
        }

        mobileNum = hp1.val() + hp2.val() + hp3.val();

        $.ajax({
            url:"/inc_folder/fnc_file/hpConfirm.asp?pgcate="+pgcate+"&tsub="+tsub+"&mobile1="+hp1.val()+"&mobile2="+hp2.val()+"&mobile3="+hp3.val(),
            datatype:"text",
            success: function(data){
                var res = data ;

                if (parseInt(res, 10) > 100000 && parseInt(res, 10) < 1000000 ){
                    alert(mobileNum + " 번호로 인증 번호가 전송 되었습니다.");
                    confirmNum.val(parseInt(res, 10));
                    hp1.prop("disabled", true);
                    hp2.prop("disabled", true);
                    hp3.prop("disabled", true);
                }else if (parseInt(res) == 1){
                    alert("페이지 오류 : 관리자에게 문의 바랍니다.");
                }else if (parseInt(res) == 2){
                    alert("입력 오류 : 관리자에게 문의 바랍니다.");
                }else if (parseInt(res) == 10){
                    alert("횟수 초과 : 일일 발송 횟수를 초과하였습니다.");
                }else{
                    alert(res + " : 예기치 않은 오류가 발생하였습니다.");
                }
            }
        });
    }

    function checkLostPwdHPcertify(lv)
    {
        var hp1, hp2, hp3, auth, confirmNum, hpAuth;

        hp1 = $("#shp1p");
        hp2 = $("#shp2p");
        hp3 = $("#shp3p");
        auth = $("#sauthweb2");
        confirmNum = $("#websIdNum2");
        hpAuth = $("#websIdAuth2");

        //if (hpAuth.val() != "Y"){
            if (auth.val() == ""){
                if (lv != 0){ alert("인증번호를 입력해 주세요."); }
                auth.focus();
                return false;
            }

            if (auth.val().length < 6){
                if (lv != 0){ alert("인증번호를 정확히 입력해 주세요."); }
                auth.focus();
                return false;
            }

            $.ajax({
                url:"/inc_folder/fnc_file/hpConfirm_check.asp?pgcate="+pgcate+"&tsub="+tsub+"&mobile1="+hp1.val()+"&mobile2="+hp2.val()+"&mobile3="+hp3.val()+"&anum="+auth.val(),
                datatype:"text",
                success: function(data){
                    var res = data ;

                    if (parseInt(res) == 1){
                        hpAuth.val("Y");
                        if (lv != 0){ alert("인증번호가 확인되었습니다."); }
                        return true;
                    }else if (parseInt(res) == 0){
                        hpAuth.val("");
                        auth.val('');
                        if (lv != 0){ alert("인증번호가 일치하지 않습니다."); }
                        return false;
                    }else{
                        hpAuth.val("");
                        auth.val('');
                        if (lv != 0){ alert("오류가 발생하였습니다."); }
                        return false;
                    }
                }
            });
        //}
    }

    function searchPwd_Purples()
    {
        var org = document.characterSet;
        var uname, uid_, hp1, hp2, hp3, hpAuto, frmName;

        uname = $("#snameweb2");
        uid_ = $("#sidweb");
        hp1 = $("#shp1p");
        hp2 = $("#shp2p");
        hp3 = $("#shp3p");
        hpAuto = $("#websIdAuth2");
        frmName = $("#frmwebspw");

        if (uname.val() == ""){
            alert("이름을 입력하세요.");
            uname.focus();
            return false;
        }

        if (uid_.val() == ""){
            alert("아이디를 입력하세요.");
            uid_.focus();
            return false;
        }

        if (hp1.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp1.focus();
            return;
        }

        if (hp2.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp2.val().length < 3){
            alert("연락처를 정확히 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp3.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp3.focus();
            return;
        }

        if (hp3.val().length < 4){
            alert("연락처를 정확히 입력해 주세요.");
            hp3.focus();
            return;
        }

        checkLostPwdHPcertify(0);

        if (hpAuto.val() != "Y"){
            alert("인증번호 확인이 필요합니다.");
            return false;
        }

        hp1.prop("disabled", false);
        hp2.prop("disabled", false);
        hp3.prop("disabled", false);

        document.characterSet='EUC-KR';
        frmName.submit();
        document.characterSet=org;

        hp1.prop("disabled", true);
        hp2.prop("disabled", true);
        hp3.prop("disabled", true);
    }

    function idcheck()
    {
        var uid_ = $("#idregw");

        if (uid_.val() == ''){
            alert('아이디를 입력해주세요.');
            uid_.focus();
            return false;
        }

        if (uid_.val().length < 4 || uid_.val().length > 12){
            alert("아이디를 정확히 입력하세요.\n아이디는 4자이상 12자 이하입니다.");
            uid_.val('');
            uid_.focus();
            return false;
        }

        $.ajax({
            url:"/inc_folder/fnc_file/member_idck.asp?userid="+uid_.val(),
            datatype:"text",
            success: function(data){
                if (data == 0){
                    alert("사용가능합니다.");
                    $("#idchkw").val("Y");
                }else{
                    alert("사용중인 아이디 입니다.");
                    $("#idchkw").val("N");
                    uid_.val("");
                    uid_.focus();
                }
            }
        });	
    }

    function JsLinc_SMS_R()
    {
        var hp1, hp2, hp3, confirmNum, mobileNum;

        hp1 = $("#hp1regw");
        hp2 = $("#hp2regw");
        hp3 = $("#hp3regw");
        confirmNum = $("#jhpNumw");

        if (hp1.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp1.focus();
            return;
        }

        if (hp2.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp2.val().length < 3){
            alert("연락처를 정확히 입력해 주세요.");
            hp2.focus();
            return;
        }

        if (hp3.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp3.focus();
            return;
        }

        if (hp3.val().length < 4){
            alert("연락처를 정확히 입력해 주세요.");
            hp3.focus();
            return;
        }

        mobileNum = hp1.val() + hp2.val() + hp3.val();

        $.ajax({
            url:"/inc_folder/fnc_file/hpConfirm.asp?pgcate="+pgcate+"&tsub="+tsub+"&mobile1="+hp1.val()+"&mobile2="+hp2.val()+"&mobile3="+hp3.val(),
            datatype:"text",
            success: function(data){
                var res = data ;

                if (parseInt(res, 10) > 100000 && parseInt(res, 10) < 1000000 ){
                    alert(mobileNum + " 번호로 인증 번호가 전송 되었습니다.");
                    confirmNum.val(parseInt(res, 10));
                    hp1.prop("disabled", true);
                    hp2.prop("disabled", true);
                    hp3.prop("disabled", true);
                }else if (parseInt(res) == 1){
                    alert("페이지 오류 : 관리자에게 문의 바랍니다.");
                }else if (parseInt(res) == 2){
                    alert("입력 오류 : 관리자에게 문의 바랍니다.");
                }else if (parseInt(res) == 10){
                    alert("횟수 초과 : 일일 발송 횟수를 초과하였습니다.");
                }else{
                    alert(res + " : 예기치 않은 오류가 발생하였습니다.");
                }
            }
        });
    }

    function checkJoinHPcertify(lv)
    {
        var hp1, hp2, hp3, auth, confirmNum, hpAuth;

        hp1 = $("#hp1regw");
        hp2 = $("#hp2regw");
        hp3 = $("#hp3regw");
        auth = $("#okregw");
        confirmNum = $("#jhpNumw");
        hpAuth = $("#jhpauthw");

        //if (hpAuth.val() != "Y"){
            if (auth.val() == ""){
                if (lv != 0){ alert("인증번호를 입력해 주세요."); }
                auth.focus();
                return false;
            }

            if (auth.val().length < 6){
                if (lv != 0){ alert("인증번호를 정확히 입력해 주세요."); }
                auth.focus();
                return false;
            }

            $.ajax({
                url:"/inc_folder/fnc_file/hpConfirm_check.asp?pgcate="+pgcate+"&tsub="+tsub+"&mobile1="+hp1.val()+"&mobile2="+hp2.val()+"&mobile3="+hp3.val()+"&anum="+auth.val(),
                datatype:"text",
                success: function(data){
                    var res = data ;

                    if (parseInt(res) == 1){
                        hpAuth.val("Y");
                        if (lv != 0){ alert("인증번호가 확인되었습니다."); }

                        hp1.prop("readonly", true);
                        hp2.prop("readonly", true);
                        hp3.prop("readonly", true);

                        return true;
                    }else if (parseInt(res) == 0){
                        hpAuth.val("");
                        auth.val('');
                        if (lv != 0){ alert("인증번호가 일치하지 않습니다."); }
                        return false;
                    }else{
                        hpAuth.val("");
                        auth.val('');
                        if (lv != 0){ alert("오류가 발생하였습니다."); }
                        return false;
                    }
                }
            });
        //}
    }

    function setJoinForm()
    {
        setWebFormBirth('ageregw');
        setWebFormRegion('addregw');
        setWebFormHpNum('hp1regw');
        setWebFormDomain('edomregws');
        setWebFormSchool('eduregw');
        setWebFormJob('jobregw');
    }

    function joinPurplesMem()
    {
        //var org = document.charset;
        var i, jid, idck, pwd, pwd2, name, age, gen, mtype, region, branch, addr, hp1, hp2, hp3, hpAuto;
        var email, edomain, school, sname, job, oname, rchk1, rchk2, rchk3, rchk4, frmName;
        var thirdparty, marketing;

        jid		= $("#idregw");
        idck	= $("#idchkw");
        pwd		= $("#pwdregw");
        pwd2	= $("#pwdregw2");
        name	= $("#nameregw");
        age		= $("#ageregw");
        gen		= $("input:radio[name=genreg]:checked").val();
        mtype	= $("input:radio[name=mtypereg]:checked").val();
        region	= $("#addregw");
        branch	= $("#mBranchw");
        //addr	= $("#adderegw");
        hp1		= $("#hp1regw");
        hp2		= $("#hp2regw");
        hp3		= $("#hp3regw");
        hpAuto	= $("#jhpauthw");
        email	= $("#emailregw");
        edomain = $("#edomregw");
        school	= $("#eduregw");
        sname	= $("#snameregw");
        job		= $("#jobregw");
        oname	= $("#onameregw");
        rchk1	= $("input:radio[name=onregw]:checked").val();
        rchk2	= $("input:radio[name=privregw]:checked").val();
        rchk3	= $("input:radio[name=mktregw]:checked").val();
        rchk4	= $("input:radio[name=thirdpregw]:checked").val();
        frmName = $("#frmjoin");

        thirdparty	= $("#thirdpartyW");
        marketing	= $("#marketingW");

        if (jid.val() == ""){
            alert("아이디를 입력하세요.");
            jid.focus();
            return false;
        }

        if (jid.val().length < 4 || jid.val().length > 12){
            alert("아이디를 정확히 입력하세요.\n아이디는 4자이상 12자 이하입니다.");
            jid.val('');
            jid.focus();
            return false;
        }

        if (idck.val() != "Y"){
            alert("아이디 중복검사를 실행하세요.");
            return false;
        }

        if (pwd.val() == ""){
            alert("비밀번호를 입력하세요.");
            pwd.focus();
            return false;
        }

        if (!IsPassword(pwd.val())){
            alert("비밀번호는 4자이상 12자 이하\n영문자, 숫자, 특수문자가 조합된 문자열이어야 합니다.");
            pwd.focus();
            return false;
        }

        if (pwd2.val() == ""){
            alert("비밀번호를 다시 한번 입력하세요.");
            pwd2.focus();
            return false;
        }

        if (pwd.val() != pwd2.val()){
            alert("입력하신 비밀번호가 일치하지 않습니다.\n\n다시 확인하시고 입력하여 주십시오.");
            pwd2.focus();
            pwd2.select();
            return false;
        }

        if (name.val() == ""){
            alert("이름을 입력하세요.");
            name.focus();
            return false;
        }

        if (age.val() == ""){
            alert("출생년도를 선택하세요.");
            age.focus();
            return false;
        }

        if (!(gen)){
            alert("성별을 선택하세요.");
            return false;
        }

        if (!(mtype)){
            alert("결혼구분을 선택하세요.");
            return false;
        }

        if (region.val() == ""){
            alert("거주지를 선택하세요.");
            region.focus();
            return false;
        }

        if (branch.val() == ""){
            alert("지사를 선택하세요.");
            branch.focus();
            return false;
        }

        /*
        if (addr.val() == ""){
            alert("기타주소를 입력해 주세요.");
            addr.focus();
            return false;
        }
        */

        if (hp1.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp1.focus();
            return false;
        }

        if (hp2.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp2.focus();
            return false;
        }

        if (hp2.val().length < 3){
            alert("연락처를 정확히 입력해 주세요.");
            hp2.focus();
            return false;
        }

        if (hp3.val() == ""){
            alert("연락처를 입력해 주세요.");
            hp3.focus();
            return false;
        }

        if (hp3.val().length < 4){
            alert("연락처를 정확히 입력해 주세요.");
            hp3.focus();
            return false;
        }

        checkJoinHPcertify(0);

        if (hpAuto.val() != "Y"){
            //alert("인증을 해주세요.");
            return false;
        }

        /*
        if (email.val() == ""){
            alert("이메일을 입력해 주세요.");
            email.focus();
            return false;
        }

        if (edomain.val() == ""){
            alert("이메일을 정확히 입력해 주세요.");
            return false;
        }

        var realmail = email.val()+"@"+edomain.val();
        if(!checkMailForm(realmail)){
            alert("이메일을 형식이 잘못되었습니다.");
            return false;
        }
        */

        if (school.val() == ""){
            alert("학력을 선택하세요.");
            school.focus();
            return false;
        }

        /*
        if (sname.val() == ""){
            alert("최종학교를 입력해 주세요.");
            sname.focus();
            return false;
        }
        */

        if (job.val() == ""){
            alert("직업을 선택하세요.");
            job.focus();
            return false;
        }

        /*
        if (oname.val() == ""){
            alert("직장명을 입력해 주세요.");
            oname.focus();
            return false;
        }
        */

        if(rchk1 != 1){
            alert("온라인 회원 이용약관에 동의해 주세요.");
            return false;
        }

        if(rchk2 != 1){
            alert("개인정보 취급방침에 동의해 주세요.");
            return false;
        }

        if(rchk4 != 1){
            alert("제3자 정보제공에 동의해 주세요.");
            return false;
        }

        if(rchk3 != 1){
            alert("마케팅 제공에 동의해 주세요.");
            return false;
        }

        thirdparty.val(rchk4);
        marketing.val(rchk3);

        $("#reffurlW").val(reffURL);
        $("#reffurlM").val(reffURL);

        hp1.prop("disabled", false);
        hp2.prop("disabled", false);
        hp3.prop("disabled", false);

        //document.charset='euc-kr';
        frmName.submit();
        //document.charset=org;

        hp1.prop("disabled", true);
        hp2.prop("disabled", true);
        hp3.prop("disabled", true);
    }

    function checkAnum(sVal)
    {
        if (sVal.value == ""){ $(".aText").removeClass('noDispl'); }
        number_ok(sVal);
    }


    $(document).ready(function(){
        $("#btnLog").click(function(){
            loginPurplesMem();
        });

        $("#btnAuth").click(function(){
            JsLinc_SMS_L();
        });

        $("#btnSid").click(function(){
            searchId_Purples();
        });

        $("#btnAuth2").click(function(){
            JsLinc_SMS_P();
        });

        $("#btnSpw").click(function(){
            searchPwd_Purples();
        });

        $("#chkID").click(function(){
            idcheck();
        });

        $("#chkTel").click(function(){
            JsLinc_SMS_R();
        });

        $("#chkNum").click(function(){
            checkJoinHPcertify(1);
        });

        $("#edomregws").change(function(){
            checkMailDomain('edomregws', 'edomregw');
        });

        $("#btnJoin").click(function(){
            joinPurplesMem()
        });

        $("#okregw").click(function(){
            $(".aText").addClass('noDispl');
        });

        $("#all_agree1").click(function(){
            $("#onregw1").attr("checked", true);
            $("#privregw1").attr("checked", true);
            $("#thirdpregw1").attr("checked", true);
            $("#mktregw1").attr("checked", true);
        });

        $("#all_agree2").click(function(){
            $("#onregw2").attr("checked", true);
            $("#privregw2").attr("checked", true);
            $("#thirdpregw2").attr("checked", true);
            $("#mktregw2").attr("checked", true);
        });
    });
});
