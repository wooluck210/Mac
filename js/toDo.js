let toDoApp = document.querySelector('.todo.App')
let toDoForm = toDoApp.querySelector('form')
let toDoInput = toDoApp.querySelector('input')
let toDoLists = toDoApp.querySelector('.todo ul')
let doneList = toDoApp.querySelector('.done ul')

let TODOS_KEY = "todos"
let toDos = []

function savedToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function handleToDoSubmit(event) {
    event.preventDefault();
    let newToDo = toDoInput.value;
    toDoInput.value = ''
    toDos.push(newToDo)
    enterToDo(newToDo)
    savedToDos()
}

function enterToDo(newToDo) {
    let li = document.createElement('li')
    let span = document.createElement('span')
    let btnDone = document.createElement('button')

    if (newToDo === "") {
        alert("Please write to do")
        return
    }

    li.appendChild(span)
    span.innerText = newToDo
    btnDone.innerText = '✔️'
    // ✔️✅
    
    toDoLists.appendChild(li);
    li.appendChild(btnDone)

    btnDone.addEventListener('click', moveToDone)
}

function moveToDone(event) {
    let li = event.target.parentElement;
    doneList.appendChild(li);
    li.childNodes[1].innerText = '❌'
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    parsedToDos.forEact(enterToDo)
}