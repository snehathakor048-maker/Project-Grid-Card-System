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

errorBtn.addEventListener("click",()=>{
createToast("error","Something went wrong!");
});
