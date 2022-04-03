<template>
  <div>
    <table class="table text-center">
      <thead>
      <tr>
        <th>Posição</th>
        <th></th>
        <th>PTS</th>
        <th>J</th>
        <th>V</th>
        <th>E</th>
        <th>D</th>
        <th>GP</th>
        <th>GC</th>
        <th>SG</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(team, teamIndex) in teams" :key="team.id">
        <td>
          {{ teamIndex }}
        </td>
        <td>
          {{ team.name }}</td>
        <td>
          <span class="fw-bold">{{ team.teamInfo.points }}</span>
        </td>
        <td>
          {{ team.teamInfo.games }}
        </td>
        <td>
          {{ team.teamInfo.wins }}
        </td>
        <td>
          {{ team.teamInfo.draws }}
        </td>
        <td>
          {{ team.teamInfo.loses }}
        </td>
        <td>
          {{ team.teamInfo.goals }}
        </td>
        <td>
          {{ team.teamInfo.goals_against }}
        </td>
        <td>
          {{ team.teamInfo.goal_difference }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TeamsTable',
  props: {
    teams: {
      required: true,
      type: Array,
    }
  }
}
</script>

<style scoped>

</style>