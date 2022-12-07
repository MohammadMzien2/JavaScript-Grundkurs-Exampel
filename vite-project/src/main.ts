import './style.css'

const todoList = document.querySelector('#todos')
const newTodoForm = document.querySelector("#new-todo-form")

const getRandomNumber = (max: number = 10): number => {
  return  Math.ceil(Math.random() * max)
}

const num =  getRandomNumber()
console.log("Random number:", num)

newTodoForm?.addEventListener('submit', e => {
  e.preventDefault()

  const inputNewTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!
  const newTodoTitle = inputNewTodoTitle.value

  if (todoList) {
    todoList.innerHTML += `<li>${newTodoTitle}</li>`
  }
  console.log(newTodoTitle)
})