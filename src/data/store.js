import { reactive } from 'vue';

const iMieiDati = reactive({
    projects: [
        {
            name: 'Portfolio Back end (Laravel)',
            slug: 'portfolio-back-end-laravel',
            description: 'Il progetto prevede la creazione di un Portfolio personale utilizzando Vue e Vite per quanto riguarda il lato front end, mentre Laravel per ciò che riguarda il lato back end, dove vengono inseriti, modificati ed eliminati i vari progetti da me realizzati.',
            img: 'src/assets/img/Portfolio laravel.png',
            link: 'https://github.com/francescofalcone24/laravel-auth'
        },
        {
            name: 'Portfolio Client side',
            slug: 'portfolio-client-side',
            description: `Il progetto prevede la creazione di un Portfolio personale utilizzando Vue e Vite per quanto riguarda il lato front end, mentre Laravel per ciò che riguarda il lato back end, dove vengono inseriti i vari progetti da me realizzati.`,
            img: 'src/assets/img/Portfolio.png',
            link: 'https://github.com/francescofalcone24/vite-boolflix'
        },
        {
            name: 'Boolzapp',
            slug: 'boolzapp',
            description: `Questa è una web app di messaggistica, creata con Vue.js, che assomiglia a una tipica applicazione di chat. Ecco una descrizione dettagliata delle sue caratteristiche e del layout: INTERFACCIA UTENTE: Barra Laterale Sinistra: Profilo Utente: In alto a sinistra c'è un'icona circolare con l'immagine di profilo dell'utente, etichettato come 'Francesco'. Notifiche: Sotto l'immagine di profilo c'è una sezione per ricevere notifiche sui nuovi messaggi, con un'opzione per attivare le notifiche desktop. Ricerca: Una barra di ricerca consente di cercare o iniziare una nuova chat. Elenco Chat: Un elenco di conversazioni recenti con vari contatti. Ogni contatto ha un'icona, il nome e l'ultimo messaggio ricevuto. Finestra di Chat: Intestazione della Chat: In alto a destra, c'è l'icona e il nome del contatto attuale (Fabio), insieme all'ultimo accesso. Messaggi: La finestra principale mostra i messaggi scambiati con il contatto selezionato. I messaggi sono visualizzati in bolle di testo. Campo di Input: In basso, c'è un campo di input per scrivere nuovi messaggi, accompagnato da un'icona di microfono per inviare messaggi vocali.`,
            img: 'src/assets/img/Boolzapp.png',
            link: 'https://github.com/francescofalcone24/vue-boolzapp'
        },
        {
            name: 'Boolflix',
            slug: 'boolflix',
            description: `Questa è una web app di streaming simile a Netflix, chiamata 'BoolFlix', creata utilizzando Vite e Vue.js. Ecco una descrizione dettagliata delle sue caratteristiche e del layout: Interfaccia Utente: 1. Intestazione: - Logo: In alto a sinistra c'è il logo 'BoolFlix' in rosso su sfondo nero, ben visibile. - Barra di Ricerca: In alto a destra c'è una barra di ricerca con il placeholder 'Titolo da cercare', affiancata da un pulsante 'Search' rosso con un'icona di una casa(home). 2. Sezione Principale: - Titolo della Sezione: Subito sotto l'intestazione, su sfondo rosso, troviamo il titolo 'Most Popular Films' in bianco, indicando che questa sezione mostra i film più popolari. - Elenco dei Film: Viene visualizzata una griglia con le locandine dei film più popolari. Ogni locandina è presentata con un'immagine accattivante e chiara.Alcuni dei film visualizzati sono: Funzionalità Implementate con Vite e Vue.js - Reattività: L'app è altamente reattiva grazie all'utilizzo di Vite, che permette una velocità di build e un'esperienza di sviluppo rapida. Vue.js gestisce l'aggiornamento dinamico dei contenuti. - Componenti: L'interfaccia è divisa in componenti Vue, facilitando la gestione e la manutenzione del codice. I componenti possono includere la barra di ricerca, la griglia dei film, e ciascun film come un componente individuale. -Ricerca Dinamica: La barra di ricerca permette di cercare film e serie TV, aggiornando i risultati in tempo reale senza ricaricare la pagina. Potenziali Aggiunte - Pagine dei Dettagli: Pagine individuali per ciascun film, contenenti descrizioni dettagliate, trailer, recensioni e opzioni di streaming. - Filtri e Categorie: Filtri avanzati per cercare film per genere, anno, valutazione, ecc. - Funzioni Social: Opzioni per creare liste di preferiti, lasciare recensioni, e condividere contenuti con amici.`,
            img: 'src/assets/img/Boolflix.png',
            link: 'https://github.com/francescofalcone24/vite-boolflix'
        },
        {
            name: 'Autocar',
            slug: 'autocar',
            description: `Questo è un sito web di vendita auto chiamato 'Autocar', creato in gruppo. Utilizza un design moderno e intuitivo per facilitare l'acquisto e la vendita di auto. Caratteristiche Principali: Interfaccia Pulita: Il sito presenta un'interfaccia pulita e professionale con un logo distintivo e un menu di navigazione semplice. Immagini di Alta Qualità: Utilizza immagini ad alta risoluzione di auto, enfatizzando l'aspetto visivo per attrarre gli utenti. Testi Promozionali: Include testi promozionali chiari e concisi che evidenziano i benefici di comprare e vendere auto sul sito. Navigazione Intuitiva: La navigazione è facile e intuitiva, con accesso rapido alle sezioni principali come Home, About Us, Vehicles, Dealers, Packages, Blog, e Contact.`,
            img: 'src/assets/img/Autocar.png',
            link: 'https://github.com/francescofalcone24/proj-html-vuejs'
        },
        {
            name: 'Comics',
            slug: 'comics',
            description: `Questo progetto di Comics è realizzato utilizzando Vite e VueJS e consiste di diversi componenti: Header che come componente ha la NavBar: Una barra di navigazione posizionata in cima alla pagina, che permette agli utenti di accedere rapidamente alle varie sezioni del sito. Il Main è composto da due sezioni: Jumbotron: Una sezione di eroe visiva mostra un'immagine stile cartone animato; e le Card : che mostrano le copertine di diversi fumetti. Nella parte inferiore della pagina, c'è un Footer che contiene vari link utili per gli utenti.`,
            img: 'src/assets/img/Comics.png',
            link: 'https://github.com/francescofalcone05/vite-comics'
        },
        {
            name: 'Dropbox',
            slug: 'dropbox',
            description: 'Questo progetto è una replica di una pagina di atterraggio di Dropbox, realizzata interamente in HTML e CSS. La pagina è strutturata in diverse sezioni, ognuna delle quali presenta contenuti distintivi per illustrare le funzionalità e i vantaggi del servizio.',
            img: 'src/assets/img/Dropbox.png',
            link: 'https://github.com/francescofalcone05/htmlcss-dropbox'
        },
        {
            name: 'Boolando',
            slug: 'boolando',
            description: `Questo progetto è una replica del sito web di Zalando, realizzata con HTML e CSS. La pagina presenta una griglia di prodotti di abbigliamento in vendita, con immagini, nomi dei brand, descrizioni brevi e prezzi, inclusi eventuali sconti evidenziati. Al passaggio del cursore, diversi elementi interattivi cambiano aspetto. Il design è pulito e moderno, replicando efficacemente l'esperienza di navigazione su Zalando.`,
            img: 'src/assets/img/Boolando.png',
            link: 'https://github.com/francescofalcone05/html-css-boolando'
        },
        {
            name: 'Dashboard',
            slug: 'dashboard',
            description: `Questo progetto è una dashboard interattiva creata con HTML, CSS e Bootstrap. La dashboard è organizzata in diverse sezioni e include vari elementi UI, come tabelle per elencare le classi in arrivo con vari dettagli, oltre a bottoni per modificare o eliminare voci. Ci sono anche funzionalità come dropdown . La sidebar laterale (offcanvas) è nascosta e si può espandere per aggiungere un eventuale nuovo studente.`,
            img: 'src/assets/img/Dashboard.png',
            link: 'https://github.com/francescofalcone05/html-css-bootstrap-dashboard'
        },
        {
            name: 'Spotify Web',
            slug: 'spotify-web',
            description: `Il progetto prevede la replica della famosa Web App di Spotify, realizzata con HTML e CSS, facendo uso delle media query per renderla responsive. Le varie icone sono state prese dalla libreria FontAwesome.`,
            img: 'src/assets/img/Dashboard.png',
            link: 'https://github.com/francescofalcone05/html-css-spotifyweb'
        },
        {
            name: 'Bootstrap freelencer',
            slug: 'bootstrap-freelencer',
            description: `Il progetto prevede la creazione di un layout interamente gestito da Bootstrap.`,
            img: 'src/assets/img/Bootstrap.png',
            link: 'https://github.com/francescofalcone05/html-css-bootstrap-freelancer'
        },
        {
            name: 'Float cards',
            slug: 'float-cards',
            description: `L'obbiettivo del progetto è quello di creare un layout utilizzando la proprietà CSS : float.`,
            img: 'src/assets/img/Float cards.png',
            link: 'https://github.com/francescofalcone05/html-css-float-cards'
        },
        {
            name: 'VueJs Carosello',
            slug: 'vuejs-carosello',
            description: `Il seguente progetto prevede la realizzazione di un carosello utilizzando JavaScript. Il carosello è dotato di un autoplay per lo scorrimento delle slide, oltre a quello manuale con i vari bottoni.`,
            img: 'src/assets/img/VueJs Carosello.png',
            link: 'https://github.com/francescofalcone05/vue-slider'
        },
        {
            name: 'Form calcolo biglietto treno',
            slug: 'form-calcolo-biglietto-treno',
            description: `Questo progetto prevedeva il calcolo di un biglietto del treno, tramite dei dati ottenuti da un form. Il prezzo varia a seconda dei kilometri da percorrere ed all'età del cliente.`,
            img: 'src/assets/img/Form calcolo biglietto treno.png',
            link: 'https://github.com/francescofalcone05/js-biglietto-treno-form'
        },
        {
            name: 'Calcolo biglietto treno',
            slug: 'calcolo-biglietto-treno',
            description: `Questo progetto prevedeva il calcolo di un biglietto del treno, tramite dei dati ottenuti da vari prompt all'avvio della pagina. Il prezzo varia a seconda dei kilometri da percorrere ed all'età del cliente.`,
            img: 'src/assets/img/Calcolo biglietto treno.png',
            link: 'https://github.com/francescofalcone05/js-biglietto-treno'
        },
        {
            name: 'Discord',
            slug: 'discord',
            description: `Il progetto prevede la replica statica del layout del famoso sito Discord. Le icone vengono prese dalla libreria Font Awesome.`,
            img: 'src/assets/img/Discord.png',
            link: 'https://github.com/francescofalcone05/htmlcss-discord'
        },
        {
            name: 'Web Application Responsive',
            slug: 'web-application-responsive',
            description: `Il progetto prevedeva la replica di una web application, resa però responsive e quindi adattabile a qualsiasi display, più, o meno grande.`,
            img: 'src/assets/img/Responsive 1.png',
            link: 'https://github.com/francescofalcone05/html-css-resp-wannabe'
        },
        {
            name: 'Web Application Responsive',
            slug: 'web-application-responsive',
            description: `Il progetto prevedeva la replica di una web application, resa però responsive e quindi adattabile a qualsiasi display, più, o meno grande.`,
            img: 'src/assets/img/Responsive 2.png',
            link: 'https://github.com/francescofalcone05/htmlcss-responsive-layout'
        },
        {
            name: 'Animation and filter',
            slug: 'animation-and-filter',
            description: `L'obbiettivo di questo progetto è quello di utilizzare delle animazioni e dei filtri su elementi in pagina, utilizzando solo CSS.`,
            img: 'src/assets/img/Animation and filter.png',
            link: 'https://github.com/francescofalcone05/html-css-animation-filter'
        },
        {
            name: 'Zoom',
            slug: 'zoom',
            description: `Il progetto prevede la replica di una schermata da videocall di Zoom. Le immagini vengono prese dal sito lorem picsum, e le icone tramite Font Awesome.`,
            img: 'src/assets/img/Zoom.png',
            link: 'https://github.com/francescofalcone05/html-css-animation-filter'
        },
        {
            name: 'Campo minato',
            slug: 'campo-minato',
            description: `Il progetto prevede la creazione di un applicazione Web basata sul gioco Campo Minato. Ci sono 3 difficoltà diverse create tramite una funzione in Javascript che determinano il numero di caselle ma il numero di bombe resta sempre lo stesso. L'utente deve cercare di evitare le bombe vincendo quando non ci saranno più celle sicure da cliccare.`,
            img: 'src/assets/img/Campo minato.png',
            link: 'https://github.com/francescofalcone05/html-css-animation-filter'
        },
    ],
    singleProject: null,
    localHostUrl: 'https://admin.francescowebdev.com',
    urlEachPage: 'https://admin.francescowebdev.com/api/projects?page=',
    urlProjects: 'https://admin.francescowebdev.com/api/projects',
    linksMenu: [
        'Home',
        'Projects',
        'About Me',
        'Contacts'
    ],
    skills: [
        {
            name: 'HTML',
            icon: 'fa-brands fa-html5 fa-bounce my_orange',
        },
        {
            name: 'CSS',
            icon: 'fa-brands fa-css3-alt fa-bounce text-primary',
        },
        {
            name: 'JS',
            icon: 'fa-brands fa-js fa-bounce text-warning',
        },
        {
            name: 'PHP',
            icon: 'fa-brands fa-php fa-bounce text-primary',
        },
    ],
    tools: [
        {
            name: 'VUEJS',
            icon: 'fa-brands fa-vuejs fa-bounce text-success',
        },
        {
            name: 'VITE',
            icon: 'fa-solid fa-bolt-lightning fa-bounce text-warning',
        },
        {
            name: 'BOOTSTRAP',
            icon: 'fa-brands fa-bootstrap fa-bounce my_purple',
        },
        {
            name: 'LARAVEL',
            icon: 'fa-brands fa-laravel fa-bounce text-danger',
        },
        {
            name: 'GITHUB',
            icon: 'fa-brands fa-github fa-bounce',
        },
        {
            name: 'MYSQL',
            icon: 'fa-solid fa-database fa-bounce text-warning',
        },
        {
            name: 'FONT-AWESOME',
            icon: 'fa-brands fa-font-awesome fa-bounce text-info',
        },
        {
            name: 'NODE',
            icon: 'fa-brands fa-node fa-bounce text-dark',
        },
    ],


});

export default iMieiDati