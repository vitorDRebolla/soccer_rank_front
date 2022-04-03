<template>
  <div class="container mt-5">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#teamsModal">
          Inserir Confronto
        </button>
      </div>
      <div class="mt-3">
        <teams-table :teams="teams"/>
      </div>
    </div>
    <teams-modal :teams="teams"/>
  </div>
</template>

<script>
import TeamsTable from '@/components/TeamsTable';
import TeamsModal from "@/components/TeamsModal";

export default {
  name: 'TeamsIndex',
  components: {
    TeamsModal,
    TeamsTable
  },
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
  },
  mounted() {
    this.getTeams();
  }
}
</script>

<style scoped>

</style>