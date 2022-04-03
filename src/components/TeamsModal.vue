<template>
  <div>
    <div id="teamsModal" aria-hidden="true" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"
         tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confronto</h5>
            <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-center gap-3">
              <div class="d-flex flex-column">
                <span>Time de casa</span>
                <div class="d-flex gap-2 mt-2">
                  <select class="form-select" id="home-team" v-model="homeTeam">
                    <option :value="team.id" v-for="team in homeAvailableTeams" :key="`home-team-${team.id}`">
                      {{ team.name }}
                    </option>
                  </select>
                  <input class="form-control" style="width: 50px" type="text" v-model="visitorTeamScore">
                </div>
              </div>
              <div class="d-flex justify-content-center align-items-end">
                <span class="mb-2">x</span>
              </div>
              <div>
                <span>Visitante</span>
                <div class="d-flex gap-2 mt-2">
                  <input class="form-control" style="width: 50px" type="text" v-model="visitorTeamScore">
                  <select class="form-select" id="visitor-team" v-model="visitorTeam">
                    <option :value="team.id" v-for="team in visitorAvailableTeams" :key="`visitor-team-${team.id}`">
                      {{ team.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button class="btn btn-primary" @click="save">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamsModal',
  props: {
    teams: {
      required: true,
      type: Array
    }
  },
  computed: {
    homeAvailableTeams() {
      return this.teams.filter((team) => team.id !== this.visitorTeam )
    },
    visitorAvailableTeams() {
      return this.teams.filter((team) => team.id !== this.homeTeam )
    }
  },
  data() {
    return {
      homeTeam: 0,
      homeTeamScore: 0,
      visitorTeam: 0,
      visitorTeamScore: 0,
    }
  },
  methods: {
    save() {

    }
  }
}
</script>

<style scoped>

</style>