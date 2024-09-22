function check(){
    var name =  document.querySelector("#name").value;
    var email =  document.querySelector("#email").value;
    var phone =  document.querySelector("#phone").value;
    var msg =  document.querySelector("#msg").value;

    if(name == "") {
         alert("name is empty");
     }
     else if(email == ""){
         alert("email is empty");
     }
     else if(phone==''){
        alert("phone is empty")
     }
     else if(msg == ""){
     alert("message is empty");
    }
    
    else{
    alert("send successfully");
     }

}
