const inputText = document.getElementById('input-text')
const addBtn = document.getElementById('add-btn')
const todoList = document.getElementById('todo-list')
const deleteBtn = document.getElementById('delete-btn')
const itemNo = document.getElementById('item-no')
let count = 0

todoList.addEventListener('click',function(e){
  document.getElementById(e.target.id).classList.add('disappear')
  count--
  itemNo.innerHTML = count
})

function getInput(){
    return inputText.value

}

const todos = [];
addBtn.addEventListener('click',function(){
 
  let newStr = ''
  if(!todos.includes(inputText.value) && inputText.value){
    todos.push(getInput())
    count++
  }
  for(let todo of todos){
    newStr += `<p id="${todo}" class="todo-item">${todo}</p>`
  }
   todoList.innerHTML = newStr
   inputText.value=''
   itemNo.innerHTML = count
})
