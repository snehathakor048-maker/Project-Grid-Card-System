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
