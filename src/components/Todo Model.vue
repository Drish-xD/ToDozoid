<template>

    <div class="todos" v-for="todo in todos" :key="todo.id">
    <div id="todo" class="max-w-xs px-6 py-3 rounded-xl cursor-default group border border-gray-400 bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-200 transform hover:translate-x-2 hover:-translate-y-2" >
        <h1 class="text-black text-xl font-extrabold"> {{ todo.title }} </h1>
        <p class="text-black pt-1 text-justify"> {{ todo.Description }}</p>
        <div class="flex justify-between">
            <ColorSwatchIcon class="icon h-6 w-6 p-0.5 md:h-7 md:w-7 mt-1 cursor-pointer"/>
            <TrashIcon class="icon h-6 w-6 p-0.5 md:h-7 md:w-7 mt-1 cursor-pointer"/>
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
                id: 1,
                title: 'Todo 1',
                Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dignissimos. Minima eum soluta necessitatibus ex beatae? Quas modi dolore placeat, cupiditate corrupti minima ut est? Cupiditate, sit voluptatum eius dolor nobis eveniet numquam pariatur explicabo provident, quaerat auto-cols-fr	chbhbedhbnnund hhh'
            },
            {
                id: 2,
                title: 'Todo 2',
                Description: 'Lorbeatae? Quas modi dolore placeat, cupiditate corrupti minima ut est? Cupiditate, sit voluptatum eius dolor nobis eveniet numquam pariatur explicabo provident, quaerat auto-cols-fr	chbhbedhbnnund hhh'
            },
            {
                id: 3,
                title: 'Todo 3',
                Description: 'ols-fr	chbhbedhbnnund hhh'
            },
        ]);

        return  {
            todos,
        }
    }
}
</script>
<style scoped>
    
</style>