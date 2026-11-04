const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement("li");
const deleteButton = document.createElement("button");
button.addEventListener("click" , function() {
    if (input.value.trim() !== "") {
        li.innerHTML = input.value;
        deleteButton.innerHTML = '<button aria-label="delete" id="delete">❌</button>';
        li.appendChild(deleteButton);
        list.appendChild(li);
    } else {input.focus();}});

deleteButton.addEventListener("click", function() {
    list.removeChild(li);
    input.focus();
    input.value = "";
})

document.title = "My Favorite Chapters";
document.getElementById("year").textContent = new Date().getFullYear();