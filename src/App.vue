<template>
  <navbar />
  <add />
  <Todo />
</template>

<script>
import navbar from "./components/Navbar.vue";
import add from "./components/Add Model.vue";
import Todo from "./components/Todo Model.vue";


export default {
  name: 'App',
  components: {
    navbar,
    add,
    Todo,
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
  height: 100v;
  background: #f1f1f1;
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
</style>