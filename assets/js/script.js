document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input-box");
    const buttonAdd = document.getElementById("buttonAdd");
    const listContainer = document.getElementById("list-container");
  
    // Add Task
    buttonAdd.addEventListener("click", addTask);
  
    function addTask() {
      const taskText = inputBox.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      const li = document.createElement("li");
      li.className = "task-item";
  
      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent = taskText;
  
      const buttonComplete = document.createElement("button");
      buttonComplete.textContent = "✅";
      buttonComplete.className = "button-complete";
      buttonComplete.addEventListener("click", () => toggleComplete(li));
  
      const buttonEdit = document.createElement("button");
      buttonEdit.textContent = "🖊";
      buttonEdit.className = "button-edit";
      buttonEdit.addEventListener("click", () => editTask(li));
  
      const buttonDelete = document.createElement("button");
      buttonDelete.textContent = "❌";
      buttonDelete.className = "button-delete";
      buttonDelete.addEventListener("click", () => deleteTask(li));
  
      li.appendChild(span);
      li.appendChild(buttonComplete);
      li.appendChild(buttonEdit);
      li.appendChild(buttonDelete);
      listContainer.appendChild(li);
  
      inputBox.value = "";
    }
  
    // Toggle Complete
    function toggleComplete(li) {
      li.classList.toggle("completed");
    }
  
    // Edit Task
    function editTask(li) {
      const taskText = li.querySelector(".task-text");
      const newText = prompt("Edit your task:", taskText.textContent);
      if (newText !== null) {
        taskText.textContent = newText.trim();
      }
    }
  
    // Delete Task
    function deleteTask(li) {
      listContainer.removeChild(li);
    }
  });
  