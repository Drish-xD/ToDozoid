<template>
  <navbar />
  <main class="pt-20">
      <div class=" max-w-screen-sm mx-auto sm:px-0 px-4">
        <form @submit.prevent="addtodo()" method="POST" @keyup.enter="addtodo()" class="bg-purple-100 bg-opacity-50 text-white rounded-xl">
          <h1 class="block text-center font-syne text-xl bg-purple-100 bg-opacity-50 p-1 rounded-xl">Add ToDo</h1>
            <div class="px-4 py-3 space-y-6 sm:py-4">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="ToDo-Title" class="block text-base font-extrabold">
                    Title
                  </label>
                  <div class="mt-1">
                    <input type="text" name="ToDo-Title" id="ToDo-Title" v-model="newtodo.title" class="p-3 h-7 w-full sm:text-sm rounded-md bg-purple-200 text-black" placeholder="Title" />
                  </div>
                </div>
              </div>

              <div>
                <label for="about" class="block text-base font-extrabold">
                  Description
                </label>
                <div class="mt-1">
                  <textarea placeholder="Description" maxlength = "500" id="about" v-model="newtodo.description" name="about" class="p-3 mt-1 w-full sm:text-sm rounded-md bg-purple-200 text-black"  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 text-right sm:px-6">
              <button type="submit" class="py-2 px-4 border border-transparent text-sm font-black text-black rounded-md bg-purple-300 hover:bg-yellow-400 transition-all duration-600 ease-in-out">
                Save
              </button>
            </div>
        </form>
    </div>
    <section class="todos flex items-start justify-center flex-wrap gap-6 xl:max-w-screen-2xl max-w-screen-md mx-auto py-10 xl:py-20 px-4">
        <div :id="todo.id" v-for="todo in todos" :key="todo.id" class="todo max-w-xs px-6 py-3 rounded-xl cursor-default group border-2 border-gray-100 bg-purple-300 bg-opacity-50 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 transform hover:translate-x-2 hover:-translate-y-2" >
            <h1 class="text-black text-xl font-extrabold break-all"> {{ todo.title }} </h1>
            <p class="text-black pt-1 text-justify break-all"> {{ todo.Description }}</p>
            <div class="flex justify-between text-gray-800">
                <ColorSwatchIcon class="hidden opacity-0 icon h-6 w-6 p-0.5 md:h-7 md:w-7 mt-1 cursor-pointer transition-all duration-300 text-black hover:text-yellow-400" @click="colour(todo)"/>
                <TrashIcon class="hidden opacity-0 icon h-6 w-6 p-0.5 md:h-7 md:w-7 mt-1 cursor-pointer transition-all duration-300 text-black hover:text-yellow-400" @click="deletetodo(todo)"/>
            </div>
        </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import { ref, onMounted } from "vue"
import { TrashIcon, ColorSwatchIcon } from '@heroicons/vue/solid'
import navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    navbar,
    Footer,
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
    })
   
   function colour(todo) {
      var colors = ['bg-red-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300' , 'bg-pink-300'];
      var box = document.getElementById(todo.id);
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      box.classList.remove(colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[6]);
      box.classList.add(randomColor);
      console.log("randomColor", randomColor);
    }       
    
    function deletetodo(todo) {
        todos.value = todos.value.filter(t => t.id !== todo.id);
        localStorage.setItem("todocopy", JSON.stringify(todos.value));
        console.log("deleted", todo);
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
        console.log("add", todos.value);
      } else {
        alert("Please enter a Title and Description");
      }
    }

    return {
      newtodo,
      todos,
      addtodo,
      deletetodo,
      colour,
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
  background: url(./assets/pattern-dark.png); 
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

.todo:hover .icon {
    transition: opacity 0.3s ease-in-out;
    display: block;
    opacity: 1;
}


</style>