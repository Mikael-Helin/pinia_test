<template>
  <h3>Hello World</h3>
  <h4> {{ counter }}</h4>
  <button @click="main.addOne">main.addOne</button><br>
  <br>
  <button @click="addOne">addOne</button><br>
  <br>
  <button @click="add(3)">add(3)</button><br>
  <br>
  <button @click="remove(5)">remove(5)</button><br>
  <br>
  <button @click="resetfun">resetfun</button><br>
  <br>
  <button @click="main.myreset">main.myreset</button>
</template>

<script setup>
  import { useCounterStore } from "./store/useCounter";
  import { storeToRefs, mapActions } from "pinia";

  const main = useCounterStore();

  const { counter, name } = storeToRefs(main);

  // following 2 lines are equivalent
  // const { addOne } = main;
  const { addOne } = mapActions(useCounterStore, ["addOne"]);

  function add(value) {
    main.$patch({
      counter: counter.value+value
    })
  }

  function remove(value) {
    main.$patch(s => s.counter -= value)
  }

  function resetfun() {
    main.$reset();
  }

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
