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
      teams: []
    }
  },
  methods: {
    getTeams() {
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
          return team_two.team_info.goal_difference - team_one.team_info.goal_difference;
        }).sort((team_one, team_two) => {
          return team_two.team_info.points - team_one.team_info.points;
        });
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