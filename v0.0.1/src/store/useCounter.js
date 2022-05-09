import { defineStore } from "pinia"

// main is some unique store name
export const useCounterStore = defineStore("main", {
    state: () => ({
        counter: 0,
        name: "Erik"
    }),
    getters: {
        doubleCount: state => {
            state.counter * 2
        }
    },
    actions: {
        reset() {
            this.counter = 0;
        },
        addOne() {
            this.counter++;
        }
    }
})