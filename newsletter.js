let button = document.querySelector('.button');
let email = document.querySelector('#email');

function subscribeHandler(e){
 e.preventDefault();
let emailValue = email.value;
let emailField = document.querySelector('#email');
let getError = document.querySelector('.error');
let emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;
  if (emailValue === ''){
     getError.innerHTML = '<p><b>Enter your email</b></p>';
     emailField.style.border ='1.5px solid #f64343';
     emailField.style.backgroundColor = 'rgb(248, 179, 179)';
    return
  }
  else if(emailValidation.test(emailValue) === false){
     getError.innerHTML = '<p><b>valid email required</b></p>';
     emailField.style.border ='1.5px solid #f64343';
     emailField.style.backgroundColor = 'rgb(248, 179, 179)';
     return
  }else{
  //this redirects the page to another page(success.html) and the redirected=true checks if the redirect was successful.i added the email=emailValue to be able to get the email entered and i also used backtick 

  window.location.href = `success.html?redirected=true&email=${emailValue}`; 
  }
}

if(subscribeHandler){
  button.addEventListener('click', subscribeHandler);

}


