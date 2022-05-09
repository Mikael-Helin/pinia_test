<template>
  <h3>Hello World {{ name }}</h3>
  <h4>counter: {{ counter }}</h4>
  <h4>double counter: {{ doubleCount }}</h4>
  <br>
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
  <button @click="main.myreset">main.myreset</button><br>
  <br>
  <button @click="clear">clear</button>
</template>

<script setup>
  import { useCounterStore } from "./store/useCounter";
  import { storeToRefs, mapActions } from "pinia";

  const main = useCounterStore();

  const { counter, name, doubleCount } = storeToRefs(main);

  const { addOne, reset } = main;
  // const { addOne } = mapActions(useCounterStore, ["addOne"]);

  function add(value) {
    main.$patch({
      counter: counter.value+value
    })
  };

  function remove(value) {
    main.$patch(s => s.counter -= value)
  };

  function resetfun() {
    main.$reset();
  };

  main.$subscribe((mutation, state) => {
    console.log("mutation", mutation);
    console.log("state", state);
  });

  function clear() {
    main.$state = { counter: 123, name: "Bob" }
  };

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
