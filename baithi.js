var btnSubmit = document.forms['register-form']['btn-submit'];
    btnSubmit.onclick = function () {
        var txtFullname = document.forms['register-form']['fullname'];
        var msgFullname = txtFullname.nextElementSibling;
        if (txtFullname == null || txtFullname.value.length == 0) {
            msgFullname.innerHTML = "* Vui lòng điền đây đủ thông tin.";
            msgFullname.classList.remove("hidden-text");
        } else if (txtFullname.value.length > 50) {
            msgFullname.innerHTML = "*Tên bạn quá dài.";
            msgFullname.classList.remove("hidden-text");
        } else {
            msgFullname.innerHTML = "Tên hợp lệ.";
            msgFullname.classList.remove("hidden-text");
            msgFullname.classList.remove("danger-text");
            msgFullname.classList.add("success-text");
        }
        var txtPhone = document.forms['register-form']['phone'];
        var msgPhone = txtPhone.nextElementSibling;
        if (txtPhone == null || txtPhone.value.length == 0) {
            msgPhone.innerHTML = "* Vui lòng nhập số điện thoại của bạn.";
            msgPhone.classList.remove("hidden-text");
        } else if (txtPhone.value.length < 10) {
            msgPhone.innerHTML = "* Sô điện thoại của bạn không đúng.";
            msgPhone.classList.remove("hidden-text");
        } else if (txtPhone.value.length > 11) {
            msgPhone.innerHTML = "* Số điện thoại của bạn không đúng.";
            msgPhone.classList.remove("hidden-text");
        } else {
            msgPhone.innerHTML = "số điện thoại hợp lê.";
            msgPhone.classList.remove("hidden-text");
            msgPhone.classList.remove("danger-text");
            msgPhone.classList.remove("success-text");
        }
        var txtEmail = document.forms['register-form']['email'];
        var msgEmail = txtEmail.nextElementSibling;
        var aCong = txtEmail.value.includes("@");
        if (txtEmail == null || txtEmail.value.length == 0) {
            msgEmail.innerHTML = "* Email không được bỏ trống.";
            msgEmail.classList.remove("hidden-text");
        } else if (aCong == false) {
            msgEmail.innerHTML = "* Email phải tồn tại một kí tự @";
            msgEmail.classList.remove("hidden-text");
        } else {
            msgEmail.innerHTML = " Email hợp lệ.";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }
}