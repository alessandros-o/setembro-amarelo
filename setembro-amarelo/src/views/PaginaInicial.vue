<template>
  <div class="home text-center ma-7">
    <h2 class="text-center mb-5">A campanha Setembro Amarelo® salva vidas!</h2>
    <img width="344" src="../assets/banner-set.png" alt="">
    <p width="344" class="my-5">
        Desde 2014, a Associação Brasileira de Psiquiatria – ABP, 
        em parceria com o Conselho Federal de Medicina – CFM, 
        organiza nacionalmente o Setembro Amarelo®. 
        O dia 10 deste mês é, oficialmente, 
        o <strong> Dia Mundial de Prevenção ao Suicídio</strong>, 
        mas a campanha acontece durante todo o ano.
    </p>
    <h3 class="mb-5">Encontre Ajuda!</h3>
    <v-card
      class="card-inicio mx-auto"
      max-width="344"
      outlined
      color="blue-grey darken-4"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4 white--text">
            INFORMAÇÕES
          </div>
          <v-list-item-title class="text-h5 mb-1 white--text">
              Sites, vídeos e mais
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">Veja nossa lista de sites, vídeos, artigos e canais de atendimento.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          
        ><img src="../assets/Esperanca.jpg" alt=""></v-list-item-avatar>
      </v-list-item>

      <v-card-actions class="btn-inicio">
        <router-link to="/ListaGeral">
          <v-btn
            rounded
            color="orange accent-2"
            dark
          
          >
            Buscar
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>

    <v-card
      class=" card-inicio mx-auto"
      max-width="344"
      outlined
      color="blue-grey darken-4"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4 white--text">
            PODE FALAR
          </div>
          <v-list-item-title class="text-h5 mb-1 white--text">
            Fale conosco
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">Deseja falar conosco ou ser parceiro da iniciativa?.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
        ><img src="../assets/mao-amarelo.jpg" alt=""></v-list-item-avatar>
      </v-list-item>

      <v-card-actions class="btn-inicio">
        <router-link to="/FaleConosco">
          <v-btn
            rounded
            color="orange accent-2"
            dark
          >
            CONTATO
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    
  </div>
</template>

<script>

export default {
  name: 'PaginaInicial',
}
</script>

<style scoped>
  .card-inicio{
    margin-bottom: 10px;
  }
  .btn-inicio a{
    text-decoration: none;
  }
</style>