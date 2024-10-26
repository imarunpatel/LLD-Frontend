document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const submitBtn = document.getElementById('submit-btn');
    const todoItems = document.getElementById('todo-items');


    submitBtn.addEventListener('click', function() {
        const todo = document.createElement('div')
        todo.classList.add('item')
        const text = document.createTextNode('hi')
        // todo.innerHTML = input.value
        console.log(text)
        todo.appendChild(text)
        todoItems.append(todo)
    })
})