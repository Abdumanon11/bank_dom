import axios from 'axios';

const pages = [
    {
        path: '/',
        loadHtml: async (app) => {
            const response = await axios.get('/src/pages/main.html');

            app.innerHTML = response.data;
        },
        loadStyles: async () => {
            await import('../src/styles/main.css');
        },
        loadScripts: async () => {
            await import('../src/scripts/main.js');
        }
    },
    {
        path: '/about',
        loadHtml: async (app) => {
            const response = await axios.get('/src/pages/about.html');

            app.innerHTML = response.data;
        },
        loadStyles: async () => {
            await import('../src/styles/about.css');
        },
        loadScripts: async () => {
            await import('../src/scripts/about.js');
        }
    },
    {
        path: '/account',
        loadHtml: async (app) => {
            const response = await axios.get('/src/pages/account.html');

            app.innerHTML = response.data;
        },
        loadStyles: async () => {
            await import('../src/styles/account.css');
        },
        loadScripts: async () => {
            await import('../src/scripts/account.js');
        }
    },


    {
        path: '/catalog',
        loadHtml: async (app) => {
            const response = await axios.get('/src/pages/catalog.html');

            app.innerHTML = response.data;
        },
        loadStyles: async () => {
            await import('../src/styles/catalog.css');
        },
        loadScripts: async () => {
            await import('../src/scripts/catalog.js');
        }
    }
];

async function loadNotFoundPage(app) {
    const response = await axios.get('/src/pages/404.html');
    await import('../src/styles/404.css');

    app.innerHTML = response.data;
}

async function router() {
    const path = window.location.pathname;
    const app = document.getElementById('app');

    const page = pages.find(elem => elem.path === path);

    if (!page) {
        return await loadNotFoundPage(app);
    }

    await page.loadStyles();
    await page.loadHtml(app);
    await page.loadScripts();
}

router();