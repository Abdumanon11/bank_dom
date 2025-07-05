import axios from "axios";

const pages = [
    {
        path: '/',
        view: async (app) => {
            const home = await axios.get('/src/pages/home.html')
            app.innerHTML= home.data
        },
        loandStyles: async () => {
            import('../src/styles/home.css')


        },
          loandScripts: async () => {

            import('../src/scripts/home.js')

        }
    },
    {
        path: '/signin',
        view: async (app) => {
            const home = await axios.get('/src/pages/signin.html')
            app.innerHTML= home.data

        },
        loandStyles: async () => {

            import('../src/styles/style.css')

        },
         loandScripts: async () => {

            import('../src/scripts/signin.js')

        }

    },
    {
        path: '/signup',
        view: async (app) => {
            const home = await axios.get('/src/pages/signup.html')
           app.innerHTML= home.data

        },
        loandStyles: async () => {
            import('../src/styles/style.css')

        },
          loandScripts: async () => {

            import('../src/scripts/signup.js')

        }
    }
]


async function errorr(app)  {
    const home = await axios.get('/src/pages/404.html')
    await import('../src/styles/404.css')
  app.innerHTML= home.data
    


}



async function router() {

    const path = window.location.pathname;
    const app = document.getElementById('app')


    const page = pages.find(elem => elem.path === path)


    if (!page) {
        return  await errorr(app)
      
    }

    await page.loandStyles();
    await page.view(app);
    await page.loandScripts();


}
router()