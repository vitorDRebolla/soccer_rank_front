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
      <tr
          v-for="(team, teamIndex) in teams" :key="team.id"
          :class="[{
              'bg-first': teamIndex + 1 === 1,
              'bg-libertadores': teamIndex + 1 > 1 && teamIndex + 1 < 8,
              'bg-SA': teamIndex + 1 > 7 && teamIndex + 1 < 15,
              'bg-relegated': teamIndex + 1 > 16 && teamIndex + 1 < 21
          }]"
      >
        <td>
          <span class="fw-bold">
             {{ teamIndex + 1 }}
          </span>
        </td>
        <td class="text-start">
          <span class="fw-bold">
            {{ team.name }}
          </span>
        </td>
        <td>
          <span class="fw-bold">{{ team.team_info.points }}</span>
        </td>
        <td>
          {{ team.team_info.games }}
        </td>
        <td>
          {{ team.team_info.wins }}
        </td>
        <td>
          {{ team.team_info.draws }}
        </td>
        <td>
          {{ team.team_info.loses }}
        </td>
        <td>
          {{ team.team_info.goals }}
        </td>
        <td>
          {{ team.team_info.goals_against }}
        </td>
        <td>
          {{ team.team_info.goal_difference }}
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
.bg-first {
  background-color: #ccffcc;
}

.bg-libertadores {
  background-color: #c0dfff;
}

.bg-SA {
  background-color: #ffffbb;
}

.bg-relegated {
  background-color: #ffadad;
}
</style>