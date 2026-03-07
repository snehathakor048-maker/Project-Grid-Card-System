/* NAVBAR */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const links = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
document.body.classList.toggle("no-scroll");
});

links.forEach(link=>{
link.addEventListener("click", ()=>{
navMenu.classList.remove("active");
document.body.classList.remove("no-scroll");
});
});

/* SEARCH */
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit",(e)=>{
e.preventDefault();
if(input.value===""){
alert("Please enter a search term");
}else{
console.log("Searching for:",input.value);
}
});

/* TOAST SYSTEM */

const toastContainer = document.getElementById("toastContainer");
const successBtn = document.getElementById("successBtn");
const errorBtn = document.getElementById("errorBtn");

function createToast(type,message){

const toast = document.createElement("div");
toast.classList.add("toast");

if(type==="success"){
toast.classList.add("toast-success");
toast.innerHTML=`<span>✔ ${message}</span>`;
}else{
toast.classList.add("toast-error");
toast.innerHTML=`<span>⚠ ${message}</span>`;
}

const closeBtn=document.createElement("button");
closeBtn.innerText="X";

closeBtn.addEventListener("click",()=>{
toast.remove();
});

toast.appendChild(closeBtn);
toastContainer.appendChild(toast);

/* Auto Dismiss */
setTimeout(()=>{
toast.remove();
},3000);
}

successBtn.addEventListener("click",()=>{
createToast("success","Operation Successful!");
});


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

submitBtn.disabled = !valid;

}

nameInput.addEventListener("input",validateForm);
emailInput.addEventListener("input",validateForm);
messageInput.addEventListener("input",validateForm);

errorBtn.addEventListener("click",()=>{
createToast("error","Something went wrong!");
});


/* BACK TO TOP */

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 500){
backToTopBtn.classList.add("show");
}else{
backToTopBtn.classList.remove("show");
}

});

backToTopBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});
