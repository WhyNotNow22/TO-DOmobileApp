
document.getElementById('add').addEventListener('click',function() {
    let value = document.getElementById('input').value;
    if(value) {
        addItemTodo(value);
        document.getElementById('input').value = "";
    }
});

function removeItem() {
    let parent = this.parentNode.parentNode;
    let item = this.parentNode;
    parent.removeChild(item);
}

function addItemTodo(text) {
    let list = document.getElementById('todo');

    let item = document.createElement('li');

    let itemText = document.createElement('p');
    itemText.classList.add('taskText');
    itemText.textContent = text;

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteTask');
    
    deleteButton.addEventListener('click',removeItem)

    let doneButton = document.createElement('button');
    doneButton.classList.add('didTask');

    item.appendChild(itemText);
    item.appendChild(deleteButton);
    item.appendChild(doneButton);

    list.insertBefore(item,list.childNodes[0]);
}
