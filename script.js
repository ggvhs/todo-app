const form = document.getElementById('form');
const input = document.getElementById("input");
const todoUL = document.getElementById('todos');



form.addEventListener('submit', (e) => {

    e.preventDefault();
    

    addToDo()
})


function addToDo(todo){
    let todoText =input.value

    if(todo){
        todoText = todo.text
    }

    if(todoText){
        const todoEL = document.createElement('li')

        if(todo && todo.completed){
            todoEL.classList.add('completed')
        }
        //make the text of li same as input value
        todoEL.innerText = todoText
        //append the todo li item to the todo unordered list
        todoUL.appendChild(todoEL);
        // clear out input value
        input.value = " "


        todoEL.addEventListener('click', () => {
            todoEL.classList.toggle('completed')
        })


        todoEL.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            //remove list item

            todoEL.remove()
        })
    }
}