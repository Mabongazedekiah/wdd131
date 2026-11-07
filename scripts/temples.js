document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();

const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hambutton.addEventListener("click" , () => {
    navigation.classList.toggle("opened");
    hambutton.classList.toggle("opened");
})