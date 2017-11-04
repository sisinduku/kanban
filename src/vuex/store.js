import Vue from 'vue'
import Vuex from 'vuex'
import {
  firebaseMutations,
  firebaseAction
} from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todos: []
  },
  mutations: {
    ...firebaseMutations
  },
  getters: {
    todos: state => state.todos,
    backlog: state => state.todos.filter(task => task.status === 0),
    todo: state => state.todos.filter(task => task.status === 1),
    doing: state => state.todos.filter(task => task.status === 2),
    done: state => state.todos.filter(task => task.status === 3)
  },
  actions: {
    setTodosRef: firebaseAction(({
      bindFirebaseRef
    }, ref) => {
      bindFirebaseRef('todos', ref, {
        wait: true
      })
    })
  }
})
