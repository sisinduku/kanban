<template>
  <div id="BoardSectionComponent">
    <b-card style="max-width: 20rem;"
            class="mb-4"
            :title="section">
      <b-card style="max-width: 20rem;"
              class="mb-4"
              :header="section">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
      <b-card style="max-width: 20rem;"
              class="mb-4"
              :header="section">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'BoardSectionComponent',

  props: ['tasks', 'section'],

  data: () => ({

  })
}
</script>
<style scoped>
</style>
