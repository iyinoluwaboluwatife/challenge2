
let placeholder = document.querySelector('.placeholder');

//URLSearchParams allows me manipulate/work with the url query strings and window.location.search returns the query string of the current url which is what comes after ? 
let newLink = new URLSearchParams(window.location.search);

//this gets the email of the user that was entered
let updatedEmail = newLink.get('email');

//this checks if the redirection was successful
if(window.location.search.includes('redirected=true')){ 
  placeholder.textContent = updatedEmail;
};

