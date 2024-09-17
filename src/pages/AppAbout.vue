<script>
import store from '../data/store.js';

export default {
    name: "AppAbout",

    components: {

    },

    data() {
        return {
            store,

        }
    },

    mounted() {

    }
}
</script>

<template>

    <section>

        <div class="container px-4 py-3">
            <h2 class="pb-2 border-bottom">SOMETHING ABOUT ME</h2>
            <div class="row">
                <div class="col-12">
                    <p class="py-4">

                        Ciao! Sono Francesco Falcone, un Junior Fullstack Web Developer.
                        Sono appassionato di sviluppo web e attualmente sto completando un intenso corso di formazione
                        con Boolean, dove ho acquisito competenze pratiche nello sviluppo di applicazioni moderne
                        utilizzando tecnologie come HTML, CSS, JavaScript e PHP.

                        Ho lavorato su diversi progetti, tra cui la creazione di un'app clone di WhatsApp e una di
                        Netflix, entrambe con funzionalità avanzate come gestione di chat e chiamate API. Inoltre, ho
                        sviluppato un portfolio di progetti con Laravel, che include funzionalità di autenticazione e
                        gestione dei dati.

                        Nella mia esperienza lavorativa precedente, ho lavorato presso prestigiose strutture
                        a Londra e in Toscana, come Chef de Rang e successivamente come Sommelier. Dove ho affinato
                        competenze come la gestione dello stress, problem-solving e la comunicazione efficace, che
                        ora applico anche nel mio lavoro di sviluppatore.

                        Sono sempre alla ricerca di nuove sfide per migliorare le mie capacità e contribuire a progetti
                        innovativi. La mia esperienza diversificata mi ha insegnato l'importanza dell'attenzione ai
                        dettagli e del servizio di qualità, valori che porto con me in ogni progetto che affronto.
                    </p>
                </div>
            </div>

            <h2 class="pb-2 border-bottom">SKILLS</h2>

            <div class="row align-items-md-center g-5 py-5">
                <div class="col-md-6 col-sm-12 d-flex flex-column align-items-start gap-2">
                    <h2 class="fw-bold text-body-emphasis">Linguaggi</h2>
                    <p>Ho acquisito competenze solide in linguaggi essenziali per lo
                        sviluppo web, inclusi HTML, CSS, JavaScript (JS) e PHP.</p>
                </div>

                <div class="col-md-6 col-sm-12 text-center">
                    <div class="row">
                        <div v-for="skill in store.skills" class="col-3 d-flex flex-column">
                            <div>
                                <i class="fs-2" :class="skill.icon"></i>
                            </div>
                            <h4 class="fw-semibold mb-0 text-body-emphasis">{{ skill.name }}</h4>
                        </div>

                    </div>
                </div>

            </div>


            <div class="row align-items-md-center g-5 py-5">
                <div class="col-md-6 col-sm-12 d-flex flex-column align-items-start gap-2">
                    <h2 class="fw-bold text-body-emphasis">Strumenti e Framework </h2>
                    <p class="text-body-secondary">Ho anche acquisito esperienza nell'utilizzo di strumenti e framework
                        moderni come Vue.js per la costruzione di interfacce utente reattive, Vite per l'ottimizzazione
                        dello sviluppo frontend, Bootstrap per la progettazione responsiva e Laravel per lo sviluppo
                        backend robusto. Inoltre, utilizzi GitHub per il controllo delle versioni, MySQL per la gestione
                        dei database, Font Awesome per l'integrazione di icone e Node.js per l'esecuzione di JavaScript
                        lato server.</p>
                </div>

                <div class="col-md-6 col-sm-12 text-center">
                    <div class="row">
                        <div v-for="tool in store.tools" class="col-3 d-flex flex-column my-4">
                            <div>
                                <i class="fs-3" :class="tool.icon"></i>
                            </div>
                            <h5 class="fw-semibold mb-0 text-body-emphasis">{{ tool.name }}</h5>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </section>

</template>


<style scoped>
* {
    color: white;
}

.my_purple {
    color: purple
}

.my_orange {
    color: orangered
}
</style>