<template>
  <div>
    <div id="teamsModal" aria-hidden="true" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"
         tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="p-2" v-if="missingData">
            <div class="alert alert-warning" role="alert">
              Preencha os campos com valores válidos para salvar!
            </div>
          </div>
          <div class="modal-header">
            <h5 class="modal-title">Confronto</h5>
            <button v-if="!saving" aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button" @click="missingData = false"/>
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
                  <input class="form-control" style="width: 50px" type="text" v-model.number="homeTeamScore">
                </div>
              </div>
              <div class="d-flex justify-content-center align-items-end">
                <span class="mb-2">x</span>
              </div>
              <div>
                <span>Visitante</span>
                <div class="d-flex gap-2 mt-2">
                  <input class="form-control" style="width: 50px" type="text" v-model.number="visitorTeamScore">
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
            <button v-if="!saving" class="btn btn-secondary" data-bs-dismiss="modal" @click="missingData = false">Fechar</button>
            <button v-if="!saving" class="btn btn-primary" @click="save">Salvar</button>
            <button v-if="saving" class="btn btn-primary" disabled>
              <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Salvando...
            </button>
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
    },
    selectedHomeTeam() {
      return this.teams.find(team => team.id === this.homeTeam);
    },
    selectedVisitorTeam() {
      return this.teams.find(team => team.id === this.visitorTeam);
    }
  },
  data() {
    return {
      homeTeam: 0,
      homeTeamScore: 0,
      visitorTeam: 0,
      visitorTeamScore: 0,
      saving: false,
      missingData: false,
    }
  },
  methods: {
    save() {
      this.missingData = false;

      if(this.saving) {
        return;
      }

      if(!this.canSave()) {
        this.missingData = true;
        return;
      }

      this.saving = true;
      let data = this.buildData();
      this.$axios.post(`/api/game-result`, data).then(() => {
        this.$emit('game-result-saved');
      }).then(() => {
        this.homeTeam = 0;
        this.homeTeamScore = 0;
        this.visitorTeam = 0;
        this.visitorTeamScore = 0;
      }).then(() => {
        this.saving = false;
      })
    },
    canSave() {
      return this.homeTeam !== 0 &&
          this.visitorTeam !== 0 &&
          Number.isInteger(this.homeTeamScore) &&
          Number.isInteger(this.visitorTeamScore) &&
          (this.homeTeamScore >= 0 && this.homeTeamScore <= 100) &&
          (this.visitorTeamScore >= 0 && this.visitorTeamScore <= 100);
    },
    buildData() {
      return {
        homeTeamInfo: this.selectedHomeTeam.team_info,
        visitorTeamInfo: this.selectedVisitorTeam.team_info,
        homeTeamScore: this.homeTeamScore,
        visitorTeamScore: this.visitorTeamScore
      }
    }
  }
}
</script>

<style scoped>

</style>