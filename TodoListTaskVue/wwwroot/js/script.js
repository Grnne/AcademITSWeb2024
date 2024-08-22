"use strict";

Vue.createApp({})
    .component("TodoList", {
        data() {
            return {
                items: [],
                newTodoItemText: "",
                newTodoItemId: 1
            };
        },

        methods: {
            addTodoItem() {
                const newTodoItem = {
                    id: this.newTodoItemId++,
                    text: this.newTodoItemText.trim()
                };

                if (newTodoItem.text) {
                    this.items.push(newTodoItem);
                    this.newTodoItemText = "";
                }
            },
            deleteTodoItem(item) {
                this.items = this.items.filter(x => x.id !== item.id);
            },
            handleSubmit(event) {
                event.preventDefault();
                const form = event.target;

                if (!form.checkValidity()) {
                    form.classList.add("was-validated");
                    return;
                }

                this.addTodoItem();
                form.classList.remove("was-validated");
            }
        },

        template: `
        <div class="container-flex m-4">
            <div class="row justify-content-center">
                <div class="col-md-7">
                    <form @submit="handleSubmit" class="needs-validation" novalidate>
                        <div class="form-group">
                            <input v-model="newTodoItemText"
                                class="form-control"
                                type="text"
                                placeholder="Input your task"
                                required>
                            <div class="invalid-feedback">Specify a task.</div>
                        </div>
                        <div class="text-center mt-2">
                            <button class="btn btn-primary btn-lg m-2">Add</button>
                        </div>
                    </form>
                    <ul class="list-unstyled m-5">
                        <todo-list-item 
                            v-for="item in items"
                            :key="item.id"
                            :item="item"
                            @save-item="item.text = $event"
                            @delete-item="deleteTodoItem(item)">
                        </todo-list-item>
                    </ul>
                </div>
            </div>
        </div>`
    })
    .component("TodoListItem", {
        props: {
            item: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                isEditing: false,
                editingText: this.item.text
            };
        },
        methods: {
            save() {
                this.isEditing = false;
                this.$emit("save-item", this.editingText.trim());
            },
            cancel() {
                this.isEditing = false;
                this.editingText = this.item.text;
            },
            handleSubmit(event) {
                event.preventDefault();
                const form = event.target;

                if (!form.checkValidity()) {
                    form.classList.add("was-validated");
                    return;
                }

                this.save();
                form.classList.remove("was-validated");
            }
        },

        template: `
        <li class="list-group mb-2">
            <div class="row" v-if="!isEditing">
                <div class="col list-group-item overflow-auto">
                    <span class="me-1 overflow-scroll">{{ item.text }}</span>
                </div>
                <div class="col-auto">
                    <button @click="$emit('delete-item')" class="btn btn-danger me-1" type="button">Delete</button>
                    <button @click="isEditing = true" class="btn btn-primary" type="button">Edit</button>
                </div>
            </div>
            <form @submit="handleSubmit" class="needs-validation" novalidate v-else>
                <div class="row">
                    <div class="form-group col">
                        <input v-model="editingText" class="me-1 form-control" type="text" required>
                        <div class="invalid-feedback">Specify a task.</div>
                    </div>
                    <div class="col-auto">
                        <button @click="cancel" class="btn btn-secondary me-1" type="button">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </li>`
    }).mount("#app");