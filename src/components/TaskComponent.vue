<template>
  <div id="TaskComponent">
    <b-card style="max-width: 20rem;"
            class="mb-4"
            :header="task.title">
      <p class="card-text text-left">
        Point: {{task.point}}
      </p>
      <p class="card-text text-left">
        Assigned to: {{task.user}}
      </p>
      <b-button variant="primary" @click="showDetail">Show Detail</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'TaskComponent',

  props: ['task'],

  methods: {
    showDetail () {
      this.$store.commit('toggleDetail', this.task)
    }
  }
}
</script>
<style scoped>
</style>
