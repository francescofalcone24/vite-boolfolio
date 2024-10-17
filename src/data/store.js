import { reactive } from 'vue';

const iMieiDati = reactive({
    projects: '',
    singleProject: null,
    localHostUrl: 'https://admin.francescowebdev',
    urlEachPage: 'https://admin.francescowebdev/api/projects?page=',
    urlProjects: 'https://admin.francescowebdev/api/projects',
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