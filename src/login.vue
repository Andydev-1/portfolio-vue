<template>
<div>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo" required placeholder="new todo">
        <button>Add Todo</button>
    </form>

    <ul>
        <li v-if="todo in todo" :key="todo.id">
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
</div>
</template>

<script setup>
    import { ref } from 'vue';

    let id='';

    const newTodo = (ref);
    const todo = (ref);

    function addTodo(){
        todos.value.push({id: id++, text:newTodo.value});
    };
    function removeTodo(todo){
        todos.value = todos.value.filter((t) => t !== todo);
    }
</script>