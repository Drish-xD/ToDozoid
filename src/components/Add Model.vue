<template>
    <div class=" max-w-screen-sm mx-auto sm:px-0 px-4">
      <h1 class="block text-center font-extrabold font-syne bg-indigo-500">Add ToDo</h1>
        <form @submit.prevent="addtodo()" method="POST" v-on:keyup.enter="addtodo()">
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
                  <textarea id="about" v-model="newtodo.description" name="about" rows="3" class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Description" />
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
</template>
<script>
import { ref } from "vue"

export default {
    setup() {
      const newtodo = ref({
        title: "",
        description: "",
      })
      function addtodo() {
        console.log(newtodo.value.title);
        console.log(newtodo.value.description);
        console.log("add");
        newtodo.value = {
          title: "",
          description: "",
        };
    }
    return {
      addtodo,
      newtodo,
    }
}
}
</script>
<style scoped>
    .font-syne {
        font-family: 'Syne';
    }
</style>