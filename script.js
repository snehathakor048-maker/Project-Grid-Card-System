/* NAVBAR */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
document.body.classList.toggle("no-scroll");
});

/* SEARCH */

const form = document.getElementById("searchbox");
const input = document.getElementById("searchInput");

form.addEventListener("submit",(e)=>{
e.preventDefault();

if(input.value===""){
alert("Please enter a search term");
}else{
console.log("Searching for:",input.value);
}

});

/* CONTACT VALIDATION */

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const msgError = document.getElementById("msgError");

const submitBtn = document.getElementById("submitBtn");

function validateForm(){

let valid=true;

if(nameInput.value.length < 3){
nameError.textContent="Name must be at least 3 characters";
nameInput.classList.add("error");
nameInput.classList.remove("success");
valid=false;
}else{
nameError.textContent="";
nameInput.classList.remove("error");
nameInput.classList.add("success");
}

if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
emailError.textContent="Enter valid email";
emailInput.classList.add("error");
emailInput.classList.remove("success");
valid=false;
}else{
emailError.textContent="";
emailInput.classList.remove("error");
emailInput.classList.add("success");
}

if(messageInput.value.length < 5){
msgError.textContent="Message too short";
messageInput.classList.add("error");
messageInput.classList.remove("success");
valid=false;
}else{
msgError.textContent="";
messageInput.classList.remove("error");
messageInput.classList.add("success");
}

submitBtn.disabled=!valid;

}

nameInput.addEventListener("input",validateForm);
emailInput.addEventListener("input",validateForm);
messageInput.addEventListener("input",validateForm);

/* BACK TO TOP */

const backToTopBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 200){
backToTopBtn.classList.add("show");
}else{
backToTopBtn.classList.remove("show");
}

});

backToTopBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});
