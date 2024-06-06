document.addEventListener("DOMContentLoaded", () => {
  
  const clickSubmit = document.querySelector("#create-task-form")
  console.log(clickSubmit)
    clickSubmit.addEventListener("submit", (event) => {
      event.preventDefault()
      console.log(event.target); // debug
        const newTask = {task:event.target["new-task-description"].value,}
        console.log(newTask)
        displayTask(newTask)
    })


function displayTask(snow){
  const task_list = document.querySelector("#tasks")
  const task = document.createElement("h2")

  task.textContent = snow.task


const div = document.createElement("li")
  div.append(task)
  task_list.append(div)


}



})