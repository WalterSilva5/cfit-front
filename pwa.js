import { registerSW } from 'virtual:pwa-register'
registerSW({ /* options */})

// main.ts
if (typeof window !== 'undefined') {
    import('./pwa')
}