<template>
  <navbar />
  <main class="pt-20">
    <add />
    <section class="flex flex-wrap items-baseline gap-6 xl:max-w-screen-xl max-w-screen-md mx-auto mt-20 px-4"> 
      <Todomodel />
    </section>
  </main>
</template>

<script>
import navbar from "./components/Navbar.vue";
import add from "./components/Add Model.vue";
import Todomodel from "./components/Todo Model.vue";


export default {
  name: 'App',
  components: {
    navbar,
    add,
    Todomodel,
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