<template>
  <div id="BoardSectionComponent">
    <b-card style="max-width: 20rem;"
            class="mb-4"
            :header="section"
            :header-bg-variant="headerColor">
      <TaskComponent v-for="task in tasks" :key="task['.key']" :task="task"/>
    </b-card>
  </div>
</template>
<script>
import TaskComponent from '@/components/TaskComponent'
export default {
  name: 'BoardSectionComponent',

  components: {
    TaskComponent
  },

  props: ['tasks', 'section'],

  computed: {
    headerColor () {
      switch (this.section) {
        case 'Backlog':
          return 'light'
        case 'Todo':
          return 'info'
        case 'Doing':
          return 'primary'
        case 'Done':
          return 'success'
        default:
          return 'light'
      }
    }
  }
}
</script>
<style scoped>
</style>
