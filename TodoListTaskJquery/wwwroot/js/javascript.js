$(function () {
    const addTodoForm = $("#add-todo-form");
    const todoList = $("#todo-list");
    const newTodoTextField = $("#new-todo-text-field");

    addTodoForm.on("submit", function (e) {
        e.preventDefault();

        let newTodoText = newTodoTextField.val().trim();
        newTodoTextField.removeClass("invalid");

        if (newTodoText.length === 0) {
            newTodoTextField.addClass("invalid");
            return;
        }

        const newTodo = $("<li class='new-todo-item'></li>");

        function setViewMode() {
            newTodo.html(`<span class="todo-item-text"></span>
                      <button class="delete-button" type="button"> Удалить</button>
                      <button class="edit-button" type="button"> Редактировать</button>`);

            newTodo.find(".todo-item-text").text(newTodoText);
            todoList.append(newTodo);

            newTodo.find(".delete-button").on("click", function () {
                newTodo.remove();
            });

            newTodo.find(".todo-item-text").text(newTodoText);
            todoList.append(newTodo);

            newTodo.find(".edit-button").on("click", function () {
                newTodo.html(`<input type="text" class="edit-todo-item-text-field"></input>
                                             <div class="error-message">Укажите текст</div>
                                             <button class="save-button" type="button"> Сохранить</button>
                                             <button class="cancel-button" type="button"> Отменить</button>`);

                const editTodoItemTextField = newTodo.find(".edit-todo-item-text-field");
                editTodoItemTextField.val(newTodoText);

                newTodo.find(".cancel-button").on("click", function () {
                    setViewMode();
                });

                newTodo.find(".save-button").on("click", function () {
                    const changedTodoText = editTodoItemTextField.val().trim();

                    if (changedTodoText.length === 0) {
                        editTodoItemTextField.addClass("invalid");
                    } else {
                        editTodoItemTextField.removeClass("invalid");
                        newTodoText = changedTodoText;
                        setViewMode();
                    }
                });
            });
        };

        setViewMode();
        newTodoTextField.val("");
    });
});