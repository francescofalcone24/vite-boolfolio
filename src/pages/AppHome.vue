<script>
export default {
    name: "AppHome"
}
</script>

<template>

    <div class="container p-0 overflow-hidden">
        <div class="row mb-4">
            <div class="col-12 text-center">
                <h1 class="my-animation fw-bolder fs-1 text-light m-0">Benvenuto nel mio Portfolio</h1>
            </div>
        </div>
        <div class="row">
            <div class="text-center col-md-6 col-sm-12 p-5 mt-4">
                <p class="my-animation mt-4 fs-5 text-light">Ciao! Sono Francesco, un Junior Web Developer con una
                    passione per la
                    creazione di
                    esperienze
                    digitali innovative. Con una solida base in HTML, CSS, JavaScript, VueJs, Vite e PHP, mi dedico a
                    sviluppare progetti moderni e funzionali. Amo affrontare nuove sfide e sono sempre alla ricerca di
                    opportunità per ampliare le mie competenze e crescere nel mondo dello sviluppo web. La mia
                    attenzione ai dettagli e la voglia di imparare mi permettono di adattarmi rapidamente a diversi
                    progetti e di contribuire con soluzioni efficaci e ben pensate.
                    Naviga tra i miei progetti, scopri il mio lavoro e non esitare a contattarmi se hai un'idea che vuoi
                    trasformare in realtà. Sono pronto a collaborare e a mettere in campo le mie competenze per portare
                    i tuoi progetti al livello successivo.</p>
                <a href="file/CV-ITA-FF.pdf" target="_blank"
                    class="my-animation px-3 py-2 bg-light rounded rounded-pill text-decoration-none text-dark"><i
                        class="fa-regular fa-file me-2 text-dark"></i> Download
                    my CV</a>
            </div>
            <div class=" my-animation text-center col-md-6 col-sm-12">
                <img src="../assets/img/cvph.jpg" alt="" style="width: 44%;" class="rounded-circle selfie">
            </div>
        </div>
    </div>

</template>text-center


<style scoped>
.my-animation {
    /* Underlying values */
    opacity: 1;
    transform: translateY(0);
    animation: fade-in 1s ease-in;

    /* Replace is the default value */
    /* for animation-composition
  animation-composition: replace; */
}

@keyframes fade-in {
    0% {
        /* Effect values */
        opacity: 0;
        transform: translateY(50px);
    }
}

.selfie {
    -webkit-box-reflect: below 10px linear-gradient(transparent, #fff);
}
</style>