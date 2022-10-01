const inputText = document.getElementById('input-text')
const addBtn = document.getElementById('add-btn')
const todoList = document.getElementById('todo-list')
const deleteBtn = document.getElementById('delete-btn')
const itemNo = document.getElementById('item-no')
const resetBtn = document.getElementById('reset-btn')
let count = 0
let items = document.getElementById('items');

todoList.addEventListener('click',function(e){
  document.getElementById(e.target.id).classList.add('disappear')
  count--
  itemNo.innerHTML = count
  if(count > 1 ){
    items.innerHTML ='items'
  }else if(count === 1){
    items.innerHTML = 'item'
  }else if(count === 0){
    items.innerHTML ='items'
  }
})

function getInput(){
    return inputText.value

}

let todos = [];
addBtn.addEventListener('click',function(){
  let newStr = '';
 
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

   if(count=== 1){
    items.innerHTML = 'item'
   }else if(count > 1){
    items.innerHTML = 'items'
   }
})

resetBtn.addEventListener('click',function(){
  count= 0;
  itemNo.innerHTML = count;
  todos=[];
  todoList.innerHTML = ''
})