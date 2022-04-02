<template>
  <div class="d-flex justify-content-center mt-5">
    <table class="table">
      
    </table>
  </div>
</template>

<script>
export default {
  name: 'TeamsTable',
  data() {
    return {
      teams: []
    }
  },
  methods: {
    getTeams() {
      this.$axios.get('/api/teams').then(({ data }) => {
        this.teams = data;
      })
    }
  }
}
</script>

<style scoped>

</style>