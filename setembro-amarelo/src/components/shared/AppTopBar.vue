<template>
    <v-container class="app-top-bar">
        <v-app-bar
        color="yellow accent-3"
        dark
        >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Menu</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            >
            <router-link to="/">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Início</v-list-item-title>
                </v-list-item>
            </router-link>

            <router-link to="/ListaGeral">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Obtenha Ajuda</v-list-item-title>
                </v-list-item>
            </router-link>

            <router-link to="/QuemSomos">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-information</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Quem somos</v-list-item-title>
                </v-list-item>
            </router-link>

            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
}
</script>

<style scoped>
.app-top-bar a{
    text-decoration: none;
}

</style>