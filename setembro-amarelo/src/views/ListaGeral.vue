<template>
    <v-container>
        <v-row>
            <v-col
            cols="12"
            sm="6"
            >
            <v-text-field
                label="Video ou Site"
                outlined
                v-model="search"
            ></v-text-field>
            </v-col>
        </v-row>
        <h2 class="text-center my-5">Iniciativas</h2>

        <v-card
            class="mx-auto my-6"
            max-width="344"
            :items="itemsFiltered"
            v-for="lista of itemsFiltered" :key="lista.id"
        >
            <v-img
            :src="lista.imagem" :alt="lista.nome"
            height="200px"
            ></v-img>

            <v-card-title>
            {{ lista.nome }}
            </v-card-title>

            <v-card-subtitle>
            {{ lista.descricao }}
            <v-spacer/>
            <span><b>Tipo:</b></span> {{ lista.tipo }}
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
            >
                Link
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    <a :href=" lista.link ">{{ lista.link }}</a>
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>

    </v-container>
</template>

<script>
export default {
    name: 'ListaGeral',
    data(){
        return{
            listaIniciativas: [],
            show: false,
            search: ""
        }
    },
    created(){
        fetch("https://it3-kjw-default-rtdb.firebaseio.com/setembroamarelo.json")
            .then(resposta => resposta.json())
            .then(json => {
                this.listaIniciativas = json
            }) 
    },
    computed:{
        itemsFiltered(){
            let valores = [];
            valores = this.listaIniciativas.filter((item) => {
                return(
                    
                    item.tipo.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                );
            });

            return valores;
        }
    }
    
}
</script>

<style scoped>

</style>