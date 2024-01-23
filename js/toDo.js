let toDo = document.querySelector('.todo.App')
let toDoForm = toDo.querySelector('form')
let toDoInput = toDo.querySelector('input')
let toDoLists = toDo.querySelector('.todo ul')
let doneList = toDo.querySelector('.done ul')
let leftToDo = []

function enterToDo(event) {
    event.preventDefault();
    let toDoValue = toDoInput.value;

    if (toDoValue === "") {
        alert("Please write to do")
        return
    }

    let li = document.createElement('li')
    let span = document.createElement('span')
    let btnDone = document.createElement('button')
    li.appendChild(span)
    span.innerText = toDoValue
    btnDone.innerText = '✔️'
    // ✔️✅
    
    toDoLists.appendChild(li);
    li.appendChild(btnDone)
    
    leftToDo.push(li)

    toDoInput.value = ''

    btnDone.addEventListener('click', moveToDone)
    return leftToDo
}

function moveToDone(event) {
    let li = event.target.parentElement;
    doneList.appendChild(li);
    li.childNodes[1].innerText = '❌'
}

toDoForm.addEventListener('submit', enterToDo)


