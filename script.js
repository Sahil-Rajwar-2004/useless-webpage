function showusername(){
    var usernamecontent = document.getElementById("usernamecontent");
    var pwdcontent = document.getElementById("pwdcontent");
    var repwdcontent = document.getElementById("repwdcontent");
    if(usernamecontent.value == "" || pwdcontent.value == "" || repwdcontent.value == ""){
        alert("username or passwrod shouldn't be empty");
    }else{
        if(pwdcontent.value == repwdcontent.value){
            usernamecontent.value = "";
            pwdcontent.value = "";
            repwdcontent.value = "";
            alert("your credentials are safe cause we don't collect them")
            window.location.href = "refs.html";
        }else{
            alert("password doesn't match");
        }
    }
}
