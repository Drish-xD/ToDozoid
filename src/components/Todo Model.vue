<template>

    <div class="todos" v-for="todo in todos" :key="todo.id">
    <div id="todo" class="max-w-xs px-6 py-3 rounded-xl cursor-default group border border-gray-400 bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-300 transform hover:translate-x-2 hover:-translate-y-2" >
        <h1 class="text-black text-xl font-extrabold"> {{ todo.title }} </h1>
        <p class="text-black pt-1 text-justify"> {{ todo.Description }}</p>
        <div class="flex justify-between text-gray-800">
            <ColorSwatchIcon class="hidden opacity-0 icon h-6 w-6 p-0.5 md:h-7 md:w-7 mt-1 cursor-pointer" @click="colour()"/>
            <TrashIcon class="hidden opacity-0 icon h-6 w-6 p-0.5 md:h-7 md:w-7 mt-1 cursor-pointer" @click="deletetodo(todo)"/>
        </div>
    </div>
    </div>
</template>
<script>
import { TrashIcon } from '@heroicons/vue/solid'
import { ColorSwatchIcon  } from '@heroicons/vue/solid'
import { ref } from "vue"


export default {
    components: {
        TrashIcon, 
        ColorSwatchIcon,
    },

    setup() {
        const todos = ref([
            {
                id: 0,
                title: 'Todo 1',
                Description: 'Lore chdbcd cgdscdgs vcgsvd cgs vdcsv dnhcbsdchh'
            },
            {
                id: 1,
                title: 'Todo 2',
                Description: 'Lorbluptatum eius dolor nobis eveniet numquam pariatur explicabo provident, quaerat auto-cols-fr	chbhbedhbnnund hhh'
            },
            {
                id: 2,
                title: 'Todo 3',
                Description: 'ols-fr	chbhbedhbnnund hhh'
            },
            {
                id: 3,
                title: 'Todo 4',
                Description: 'ols-fr	chbhbedhbnnund hhh'
            },
            {
                id: 4,
                title: 'Todo 5',
                Description: 'ols-fr	chbhbedhbnnund hhh'
            },
            {
                id: 5,
                title: 'Todo 6',
                Description: 'ols-fr	chbhbedhbnnund hhh'
            },
            {
                id: 6,
                title: 'Todo 7',
                Description: 'ols-fr	chbhbedhbnnund hhh'
            },
        ]);

        function colour() {
            console.log("colour");
        }       
        
        function deletetodo(todo) {
            todos.value = todos.value.filter(t => t.id !== todo.id);
            console.log("deleted");
        }

        return  {
            todos,
            colour,
            deletetodo,
        }
    }
}
</script>
<style scoped>
    #todo:hover .icon {
        transition: opacity 0.3s ease-in-out;
        display: block;
        opacity: 1;
    }
</style>