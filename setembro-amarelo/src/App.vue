<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>  
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'

export default {
  name: 'App',
  components:{
    AppTopBar
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');

  #app{
    color: #2c3e50;
    font-family: 'Oswald', sans-serif;
  }
</style>