document.addEventListener("DOMContentLoaded",
    function () {
        const todoForm = document.getElementById("todo-form");
        const todoInput = document.getElementById("todo-input");
        const todoItems = document.getElementById("todo-items");

        todoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            addTodoItem();
        });

        function addTodoItem() {
            const newTodoText = todoInput.value.trim();
            todoInput.classList.remove("invalid");

            if (newTodoText.length === 0) {
                todoInput.classList.add("invalid");
                return;
            }

            const newTodo = document.createElement("li");
            newTodo.classList.add("new-todo-item");
            createTodoItemView(newTodo, newTodoText);

            todoItems.append(newTodo);
            todoInput.value = "";
        }

        function editTodoItem(editTodo) {
            const initialText = editTodo.querySelector(".todo-item-text").textContent;

            editTodo.innerHTML = `<input class="todo-item-text-edit"></span>
                                  <div class="error-message">Please specify a task</div>
                                  <div class="list-item-container">
                                  <button class="save-button button" type="button"> Save</button>
                                  <button class="cancel-button button" type="button"> Cancel</button>
                                  </div>`;

            let todoItemTextEdit = editTodo.querySelector(".todo-item-text-edit");
            todoItemTextEdit.value = initialText;

            editTodo.querySelector(".save-button").addEventListener("click",
                function () {
                    const editText = editTodo.querySelector(".todo-item-text-edit").value;
                    todoItemTextEdit.classList.remove("invalid");

                    if (editText.length === 0) {
                        todoItemTextEdit.classList.add("invalid");
                        return;
                    }

                    createTodoItemView(editTodo, editText);
                });

            editTodo.querySelector(".cancel-button").addEventListener("click",
                function () {
                    createTodoItemView(editTodo, initialText);
                });
        }

        function createTodoItemView(todoItem, itemText) {
            todoItem.innerHTML = `<span class="todo-item-text"></span>
                                  <div class="list-item-container">
                                  <button class="delete-button button" type="button"> Delete</button>
                                  <button class="edit-button button" type="button"> Edit</button>
                                  </div>`;

            todoItem.querySelector(".todo-item-text").textContent = itemText;

            todoItem.querySelector(".delete-button").addEventListener("click",
                function () {
                    todoItem.remove();
                });

            todoItem.querySelector(".edit-button").addEventListener("click",
                function () {
                    editTodoItem(todoItem);
                });
        }
    });