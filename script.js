let input = document.getElementById('input');
let ul = document.getElementById('ul');

function addtask() {
    if (input.value === '') {
        alert('You must write something!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '×';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', ul.innerHTML);
}

function showData(){
    ul.innerHTML = localStorage.getItem('data');
}
showData();
