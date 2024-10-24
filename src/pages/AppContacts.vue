<script>
import axios from 'axios';
import store from '../data/store.js';
export default {
    name: "ContactForm",
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {},
            policyInput: false
        }
    },
    methods: {


        sendForm() {
            if (this.policyInput = true) {
                this.loading = true;
                const data = {
                    'name': this.name,
                    'email': this.email,
                    'message': this.message
                };

                // pulisco l'array con i messaggi
                this.errors = {};

                // Importante - Stiamo comunicando con Laravel, quindi non è più obbligatorio inserire gli headers con il Content-Type
                // come abbiamo fatto invece quando comunicavamo direttamente con gli script PHP
                axios.post("https://admin.francescowebdev.com/api/contacts", data).then((response) => {
                    this.success = response.data.success;
                    if (!this.success) {
                        this.errors = response.data.errors;
                        console.log(this.errors);
                    } else {
                        // ripulisco i campi di input
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                });
            }

        },
    },

    mounted() {
        (function (w, d) {
            var loader = function () {
                var s = d.createElement("script"),
                    tag = d.getElementsByTagName("script")[0]; s.src = "https://cdn.iubenda.com/iubenda.js";
                tag.parentNode.insertBefore(s, tag);
            }; if (w.addEventListener) { w.addEventListener("load", loader, false); } else if (w.attachEvent) {
                w.attachEvent("onload", loader);

            } else { w.onload = loader; }
        })(window, document);
    }
}
</script>

<template>
    <section class="contact_me py-3">

        <div class="container text-center">

            <div class="row justify-content-center mb-4">

                <div class="col-md-4 col-sm-6 col-4 text-center p-3 mx-5 my-1 rounded my_bg"
                    style=" --bs-bg-opacity:.5">
                    <h5>LinkedIn</h5>
                    <i class="fa-brands fa-linkedin"></i>
                    <p><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                            target="_blank" rel="noopener noreferrer">Visita il profilo</a></p>
                </div>

            </div>

            <h2 class="text-uppercase">contact me</h2>
            <div v-if="success" class="alert alert-success text-start" role="alert">
                Messaggio inviato con successo!
            </div>
            <div class="row">
                <form @submit.prevent="sendForm()" class="col-12 text-start">
                    <div class="mb-3">
                        <input class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.name }"
                            type="text" name="name" id="name" placeholder="Name" v-model="name">
                        <p v-for="(error, index) in errors.name" :key="`message-error-${index}`"
                            class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <div class="mb-3">
                        <input class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.email }"
                            type="text" name="email" id="email" placeholder="Email" v-model="email">
                        <p v-for="(error, index) in errors.email" :key="`message-error-${index}`"
                            class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <div class="mb-3">
                        <textarea class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.message }"
                            name="message" id="message" cols="30" rows="10" placeholder="Message"
                            v-model="message"></textarea>
                        <p v-for="(error, index) in errors.message" :key="`message-error-${index}`"
                            class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <div class="mb-3">
                        <input type="checkbox" class="me-1" v-model="policyInput">
                        <a href="https://www.iubenda.com/privacy-policy/70516770"
                            class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe "
                            title="Privacy Policy ">Privacy Policy* (campo obbligatorio)</a>

                    </div>
                    <button class="btn btn-lg btn-primary text-white" type="submit"
                        :disabled="!loading && !policyInput">{{ loading ?
                            'Sending...' : 'Send'
                        }}</button>
                </form>
            </div>

        </div>

    </section>
</template>

<style scoped>
section {
    color: white;
}


.my_bg {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(0, 212, 255, 1) 0%, rgba(9, 9, 121, 1) 45%, rgb(4, 1, 62) 100%);

}
</style>