document.addEventListener("DOMContentLoaded",
    function () {
        const addTodoForm = document.getElementById("add-todo-form");
        const todoList = document.getElementById("todo-list");
        const newTodoTextField = document.getElementById("new-todo-text-field");

        addTodoForm.addEventListener("submit",
            function (e) {
                e.preventDefault();

                let newTodoText = newTodoTextField.value.trim();
                newTodoTextField.classList.remove("invalid");

                if (newTodoText.length === 0) {
                    newTodoTextField.classList.add("invalid");
                    return;
                }

                let newTodo = document.createElement("li");
                newTodo.classList.add("new-todo-item");

                function setViewMode() {
                    newTodo.innerHTML = `<span class="todo-item-text"></span>
                                        <button class="delete-button" type="button"> Удалить</button>
                                        <button class="edit-button" type="button"> Редактировать</button>`;

                    newTodo.querySelector(".todo-item-text").textContent = newTodoText;
                    todoList.append(newTodo);

                    newTodo.querySelector(".delete-button").addEventListener("click", function () {
                        newTodo.remove();
                    });

                    newTodo.querySelector(".edit-button").addEventListener("click", function () {
                        newTodo.innerHTML = `<input type="text" class="edit-todo-item-text-field"></input>
                                             <div class="error-message">Строка не должна быть пустой!</div>
                                             <button class="save-button" type="button"> Сохранить</button>
                                             <button class="cancel-button" type="button"> Отменить</button>`;

                        const editTodoItemTextField = newTodo.querySelector(".edit-todo-item-text-field");
                        editTodoItemTextField.value = newTodoText;

                        newTodo.querySelector(".cancel-button").addEventListener("click", function () {
                            setViewMode();
                        });

                        newTodo.querySelector(".save-button").addEventListener("click", function () {
                            const changedTodoText = editTodoItemTextField.value.trim();

                            if (changedTodoText.length === 0) {
                                editTodoItemTextField.classList.add("invalid");
                            } else {
                                editTodoItemTextField.classList.remove("invalid");
                                newTodoText = changedTodoText;
                                setViewMode();
                            }
                        });
                    });
                };

                setViewMode();
                newTodoTextField.value = "";
            });
    });