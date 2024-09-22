function func(){
    var email=document.getElementById("username").value;
    var pass=document.getElementById('password').value;

    if(email =='jegan123@gmail.com' &&  pass =='jegan@2004'){
            alert("sucessfully login")
            window.location.assign('../intex.html');
    }     
else{
    alert("wrong enntry invaild value");
   
}
}