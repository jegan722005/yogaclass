const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
form.addEventListener('submit',e =>{
e.preventDefault();
validateInputs(); 

});
const setError=(element,message)=>{
const input=element.parentElement;
const errorDisplay=input.querySelector('.error');

errorDisplay.innerText=message;
input.classList.add('error');
input.classList.remove('success')
}
const setSuccess = element=>{
const input=element.parentElement;
const errorDisplay=input.querySelector('.error');

errorDisplay.innerText='';
input.classList.add('success');
input.classList.remove('error');
};
const isValidEmail = (email) => {
const re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();

  if(usernameValue ===''){
    setError(username,'Username is required');
  }
  else{
    setSuccess(username);
}
  if(emailValue===''){
   
    setError(email,'Email is required');
  }
  else if (!isValidEmail(emailValue)){
    setError(email,'please enter a valid email');
  }
  else{
    setSuccess(email);
  }
  if(passwordValue===''){
    
    setError(password, 'password is required')
  }
  else if(passwordValue.length < 8){
    setError(password,'password must be atleast 8 characters long');
  }
  else{
    setSuccess(password);
}
if(cpasswordValue===''){
    // success=false;
    setError(cpassword,'confirm password is required');
}
else if(cpasswordValue !== passwordValue){
    setError(cpassword,"password does not match");
}
else{
setSuccess(cpassword)

window.location.assign('../intex.html');
alert("Registered");
}
//         // return success;
};