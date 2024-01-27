const toDoApp = document.querySelector('.todo.App')
const toDoForm = toDoApp.querySelector('form')
const toDoInput = toDoApp.querySelector('input')
const toDoLists = toDoApp.querySelector('.todo ul')
const doneList = toDoApp.querySelector('.done ul')

const TODOS_KEY = "todos"
const DONE_KEY = "done"
let toDos = []
let dones = []

function savedToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
function savedDone() {
    localStorage.setItem(DONE_KEY, JSON.stringify(dones))
}

function handleToDoSubmit(event) {
    event.preventDefault();
    let newToDo = toDoInput.value;
    toDoInput.value = ''
    const newToDoObj = {
        id: Date.now(),
        text: newToDo
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    savedToDo()
}

function paintToDo(newToDo) {
    if (newToDo === "") {
        alert("Please write to do")
        return
    }

    let li = document.createElement('li')
    li.id = newToDo.id
    let span = document.createElement('span')
    span.innerText = newToDo.text
    let btnDone = document.createElement('button')
    btnDone.innerText = '✔️'

    li.appendChild(span)
    li.appendChild(btnDone)
    toDoLists.appendChild(li);
    
    btnDone.addEventListener('click', moveToDone)
}

function paintDone(doneItem) {
    let li = document.createElement('li');
    li.id = doneItem.id;
    let span = document.createElement('span');
    span.innerText = doneItem.text;
    let btnRemove = document.createElement('button');
    btnRemove.innerText = '❌';

    li.appendChild(span);
    li.appendChild(btnRemove);
    doneList.appendChild(li);

    // ❌ 버튼에 대한 이벤트 리스너 추가 (필요한 경우)
    btnRemove.addEventListener('click', deleteDone)
}

function moveToDone(event) {
    let li = event.target.parentElement;
    const toDoId = parseInt(li.id);

    // 해당 ToDo 객체 찾기
    const toDoObj = toDos.find(toDo => toDo.id === toDoId);

    // ToDo 배열에서 해당 항목 제거
    toDos = toDos.filter(toDo => toDo.id !== toDoId);
    savedToDo();
    // Done 배열에 항목 추가 및 저장
    if (toDoObj) {
        dones.push(toDoObj);
        savedDone();
    }
    doneList.appendChild(li);
    li.childNodes[1].innerText = '❌'

    li.childNodes[1].removeEventListener('click', moveToDone);
    li.childNodes[1].addEventListener('click', deleteDone);
}

function deleteDone(event) {
    console.log(event)
    const li = event.target.parentElement;
    const doneId = parseInt(li.id); // li의 id를 숫자로 변환
    dones = dones.filter(done => done.id !== doneId); // 해당 id를 가진 항목 제거
    console.log(dones)
    savedDone()
    li.remove();
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
const savedDones = localStorage.getItem(DONE_KEY)

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}
if (savedDones) {
    const parsedDones = JSON.parse(savedDones)
    dones = parsedDones
    parsedDones.forEach(paintDone)
}