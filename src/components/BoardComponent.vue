<template>
<div id="BoardComponent">
  <b-container>
    <!-- Modal Todo Component -->
    <b-modal id="modaltodo" title="New Todo" ref="modaltodo" @ok="handleOk" @cancel="clearInput">
      <b-form @submit.stop.prevent="addTodo">
        <b-form-group label="Title:" label-for="title">
          <b-form-input id="title" type="text" v-model="title" required placeholder="Enter Task Title"></b-form-input>
        </b-form-group>
        <b-form-group label="Desciption:" label-for="description">
          <b-form-input id="description" type="text" v-model="description" required placeholder="Enter Description"></b-form-input>
        </b-form-group>
        <b-form-group label="Point:" label-for="point">
          <b-form-input id="point" type="text" required v-model.number="point"></b-form-input>
        </b-form-group>
        <b-form-group label="Assigned To:" label-for="user">
          <b-form-input id="user" type="text" required v-model="user"></b-form-input>
        </b-form-group>
      </b-form>
      <b-alert v-if="validation" show variant="danger"><ul v-html="validation"></ul></b-alert>
    </b-modal>

    <!-- Modal Detail Task Component -->
    <b-modal title="Detail Task" v-model="showDetail">
      <p>
        <h3>Title</h3>
        {{currentTask.title}}
        <h3>Description</h3>
        {{currentTask.description}}
        <h3>Point</h3>
        {{currentTask.point}}
        <h3>Assigned To</h3>
        {{currentTask.user}}
        <h3>Status</h3>
        {{this.currentTaskStatus}}
      </p>
    </b-modal>

    <b-row>
      <b-col md="auto">
        <h1>KanBann</h1></b-col>
      <b-col class="text-right">
        <b-button v-b-modal="'modaltodo'" variant="primary">Add Task</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3"><BoardSectionComponent section="Backlog" :tasks="backlog"/></b-col>
      <b-col md="3"><BoardSectionComponent section="Todo" :tasks="todo"/></b-col>
      <b-col md="3"><BoardSectionComponent section="Doing" :tasks="doing"/></b-col>
      <b-col md="3"><BoardSectionComponent section="Done" :tasks="done"/></b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import Vuex from 'vuex'
import BoardSectionComponent from '@/components/BoardSectionComponent'
import {
  db
} from '../assets/js/firebase'

var todosRef = db.ref('todos')

export default {
  name: 'BoardComponent',

  components: {
    BoardSectionComponent
  },

  computed: {
    ...Vuex.mapGetters([
      'todos', 'backlog', 'todo', 'doing', 'done', 'currentTask', 'showDetail'
    ]),
    currentTaskStatus () {
      switch (this.currentTask.status) {
        case 0:
          return 'Backlog'
        case 1:
          return 'To-do'
        case 2:
          return 'Doing'
        case 3:
          return 'Done'
        default:
          return 'Backlog'
      }
    }
  },

  data: () => ({
    title: '',
    description: '',
    point: 0,
    user: '',
    validation: ''
  }),

  methods: {
    addTodo () {
      todosRef.push({
        title: this.title,
        description: this.description,
        point: this.point,
        status: 0,
        user: this.user
      })
      this.$refs.modaltodo.hide()
      this.clearInput()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.validation = ''
      if (!this.title) {
        this.validation += '<li>Please enter task title</li>'
      }
      if (!this.point) {
        this.validation += '<li>Please enter point</li>'
      }
      if (!this.user) {
        this.validation += '<li>Please enter task user</li>'
      }
      if (this.user) {
        this.addTodo()
      }
    },
    clearInput () {
      this.title = ''
      this.description = ''
      this.point = 0
      this.user = ''
    }
  },

  created () {
    this.$store.dispatch('setTodosRef', todosRef)
  }
}
</script>
<style scoped>
</style>
