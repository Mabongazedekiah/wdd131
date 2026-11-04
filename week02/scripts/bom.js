const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement("li");
const deleteButton = document.createElement("button");
li.innerHTML = input.value;
deleteButton.innerHTML = '<button aria-label="delete" id="delete">❌</button>';
li.appendChild(deleteButton);
list.appendChild(li);