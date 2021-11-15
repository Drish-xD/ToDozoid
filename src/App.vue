<template>
  <navbar />
  <main class="pt-20">
      <div class=" max-w-screen-sm mx-auto sm:px-0 px-4">
      <h1 class="block text-center font-extrabold font-syne bg-indigo-500">Add ToDo</h1>
        <form @submit.prevent="addtodo()" method="POST" @keyup.enter="addtodo()">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="ToDo-Title" class="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" name="ToDo-Title" id="ToDo-Title" v-model="newtodo.title" class="p-3 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Title" />
                  </div>
                </div>
              </div>

              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div class="mt-1">
                  <textarea placeholder="Description" maxlength = "500" id="about" v-model="newtodo.description" name="about" class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
    </div>
    <section class="flex flex-wrap gap-4 justify-center xl:max-w-screen-2xl max-w-screen-md min-h mx-auto mt-20 px-4">
      <h1  class="absolute text-center font-extrabold text-5xl text-gray-500 text-opacity-20 self-center	">Added Todo will appear here</h1>
      <div class="todos" v-for="todo in todos" :key="todo.id">
        <div id="todo" class="max-w-xs px-6 py-3 rounded-xl cursor-default group border border-gray-400 bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-300 transform hover:translate-x-2 hover:-translate-y-2" >
            <h1 class="text-black text-xl font-extrabold break-all"> {{ todo.title }} </h1>
            <p class="text-black pt-1 text-justify break-all"> {{ todo.Description }}</p>
            <div class="flex justify-end text-gray-800">
                <ColorSwatchIcon class="hidden opacity-0 h-6 w-6 p-0.5 md:h-7 md:w-7 mt-1 cursor-pointer" @click="colour()"/>
                <TrashIcon class="hidden opacity-0 icon h-6 w-6 p-0.5 md:h-7 md:w-7 mt-1 cursor-pointer" @click="deletetodo(todo)"/>
            </div>
        </div>
    </div>
    </section>
  </main>
</template>

<script>
import { ref, onMounted } from "vue"
import { TrashIcon } from '@heroicons/vue/solid'
import { ColorSwatchIcon  } from '@heroicons/vue/solid'
import navbar from "./components/Navbar.vue";
// import add from "./components/Add Model.vue";
// import Todomodel from "./components/Todo Model.vue";


export default {
  name: 'App',
  components: {
    navbar,
    TrashIcon, 
    ColorSwatchIcon,
  },
  setup() {    
    const newtodo = ref({
      title: "",
      description: "",
    })
    const todos = ref([ ]);

    onMounted(() => {
      if(localStorage.getItem("todocopy")) {
        let todocopy = JSON.parse(localStorage.getItem("todocopy"));
        todocopy.forEach(todo => {
          todos.value.push(todo);
        })
      }
      console.log(todos)
    })
   
   function colour() {
        console.log("colour");
    }       
    
    function deletetodo(todo) {
        todos.value = todos.value.filter(t => t.id !== todo.id);
        localStorage.setItem("todocopy", JSON.stringify(todos.value));
        console.log("deleted");
    }


    function addtodo() {
      if (newtodo.value.title.trim() && newtodo.value.description.trim()) {
        todos.value.push ( {
          id : Date.now(),
          title: newtodo.value.title,
          Description: newtodo.value.description,
        })
        newtodo.value = {
          title: "",
          description: "",
        };
        localStorage.setItem("todocopy", JSON.stringify(todos.value));
        console.log("add");
      } else {
        alert("Please enter a Title and Description");
      }
    }

    var isempty = false;
    let todocopy = JSON.parse(localStorage.getItem("todocopy"));
    if ( todocopy.length == 0 ) {
      isempty = true;
      console.log("empty");
    } else {
      isempty = false;
      console.log("not empty");
    }

    return {
      newtodo,
      todos,
      addtodo,
      deletetodo,
      colour,
      isempty,
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro:regular,italic,700,700italic);
@import url(https://fonts.googleapis.com/css?family=Syne:regular,500,600,700,800);

* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  font-family: 'Anonymous Pro', monospace;
}

body {
  width: 100%;
  height: 100vh;
}

.min-h {
  min-height: 50vh;  
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #222831;
  border-radius: 25px;
}

::-webkit-scrollbar-thumb:hover {
  background: #393E46;
}

#todo:hover .icon {
    transition: opacity 0.3s ease-in-out;
    display: block;
    opacity: 1;
}
</style>