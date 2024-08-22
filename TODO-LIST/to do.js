(() => {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const tasks = document.querySelector("#tasks");
    input.focus();
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        //get all task content
        let current_task = []
        const taskContent = document.querySelectorAll("#taskname")
        taskContent.forEach(span => {
            current_task.push(span.innerHTML.trim().toLowerCase());
        })

        //add new task to the list
        const value = input.value
        if (value.trim() == "") {
            alert("Please enter a Value")
            input.focus();
        } else if (current_task.includes(value.trim().toLowerCase())) {
            alert("Task already exists")
            input.focus()
        } else {
            let taskContainer = document.createElement("div")
            taskContainer.classList.add("task")
            let span = document.createElement("span")
            span.setAttribute("id", "taskname")
            span.innerHTML = value
            let btn_edit = document.createElement("button")
            btn_edit.classList.add("edit")
            btn_edit.innerHTML = ` <i class="fa-solid fa-pen-to-square"></i>`
            let btn_delete = document.createElement("button")
            btn_delete.classList.add("delete")
            btn_delete.innerHTML = ` <i class="fa-solid fa-trash"></i>`
            taskContainer.appendChild(span)
            taskContainer.appendChild(btn_edit)
            taskContainer.appendChild(btn_delete)
            tasks.appendChild(taskContainer)
        }
        input.value = ""
        storeData()
    })

    function storeData() {
        localStorage.setItem("data", tasks.innerHTML)
    }

    function showData() {
        const storedTasks = localStorage.getItem("data")
        if (storedTasks) {
            tasks.innerHTML = storedTasks
        }
    }
    showData()
    const task = document.querySelectorAll(".task");
    task.forEach(items => {
        items.addEventListener("click", (e) => {
            if (e.target.classList.contains("edit")) {
                console.log("edit")
                const span = e.target.previousElementSibling
                const value = prompt("Edit Task", span.innerHTML)
                if (value.trim() !== "") {
                    span.innerHTML = value
                    storeData()
                }
            }
            else if (e.target.classList.contains("delete")) {
                e.target.parentElement.remove()
                storeData()
            } else {
                console.log("other")
                return
            }
        });
    })

})()