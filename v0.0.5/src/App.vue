<template>
  <h3>Hello World</h3>
  <h4> {{ counter }}</h4>
  <button @click="main.addOne">Add one</button>
</template>

<script setup>
  import { useCounterStore } from "./store/useCounter";
  import { storeToRefs } from "pinia";

  const main = useCounterStore();

  const { counter, name } = storeToRefs(main);

// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
