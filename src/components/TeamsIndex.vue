<template>
  <div class="container">
    <div class="d-flex justify-content-center" style="height: 100vh" v-if="loading">
      <div class="d-flex align-items-center gap-2" style="height: fit-content">
        <div class="spinner-border spinner-border-lg" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span class="fw-bold fs-4" style="">Carregando...</span>
      </div>

   </div>
    <div class="d-flex flex-column" v-if="!loading">
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#teamsModal">
          Inserir Confronto
        </button>
      </div>
      <div class="mt-3">
        <teams-table :teams="teams"/>
      </div>
    </div>
    <teams-modal :teams="teams" @game-result-saved="getTeams"/>
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
      teams: [],
      loading: false,
    }
  },
  methods: {
    getTeams() {
      this.loading = true;
      this.$axios.get('/api/teams').then(({ data }) => {
        this.teams = data.map((team) => {
          return team.team_info === null ? {
            ...team,
            team_info: {
              id: 0,
              team_id: team.id,
              points: 0,
              games: 0,
              wins: 0,
              draws: 0,
              loses: 0,
              goals: 0,
              goals_against: 0,
              goal_difference: 0,
            }
          } : team;
        }).sort((team_one, team_two) => {
          return team_two.team_info.goals - team_one.team_info.goals;
        }).sort((team_one, team_two) => {
          return team_two.team_info.goal_difference - team_one.team_info.goal_difference;
        }).sort((team_one, team_two) => {
          return team_two.team_info.wins - team_one.team_info.wins;
        }).sort((team_one, team_two) => {
          return team_two.team_info.points - team_one.team_info.points;
        });
      }).finally(() => {
        this.loading = false;
      })
    }
  },
  mounted() {
    this.getTeams();
  }
}
</script>

<style scoped>
.spinner-border-lg {
  width: 4rem;
  height: 4rem;
}
</style>