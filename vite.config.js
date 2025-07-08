import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    base: './',
    esbuild: {
        target: 'esnext'
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                home: resolve(__dirname, 'src/pages/home.html'),
                signin: resolve(__dirname, 'src/pages/signin.html'),
                signup: resolve(__dirname, 'src/pages/signup.html'),
                many: resolve(__dirname, 'src/pages/many.html'),
                histor: resolve(__dirname, 'src/pages/histor.html'),
                menu: resolve(__dirname, 'src/pages/menu.html'),
                '404': resolve(__dirname, 'src/pages/404.html'),
                dobtr: resolve(__dirname, 'src/pages/dobtr.html'),
                dobksh: resolve(__dirname, 'src/pages/dobksh.html'),
            },
        },
    },
})
