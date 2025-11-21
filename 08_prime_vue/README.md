# PrimeVue: instalación y configuración (Vue 3 + Vite)

Ejemplo del capítulo 8 del libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/vue/p3c8_prime_vue.html). Muestra cómo integrar PrimeVue con tema Aura, PrimeFlex, PrimeIcons y auto-import de componentes en un proyecto Vite.

## Qué repasar antes
- Haber creado un proyecto base con Vite + Vue 3.
- Conocer los pasos de instalación de dependencias (`primevue`, `@primeuix/themes`, `primeflex`, `primeicons`, `@primevue/auto-import-resolver`, `unplugin-vue-components`).
- Node.js 18+ y un gestor de paquetes (`npm`, `pnpm`, `yarn`).

## Qué incluye el ejemplo
- Configuración del tema Aura y uso de PrimeFlex para utilidades de layout.
- Auto-import de componentes para evitar registros manuales.
- Componentes de muestra para validar que el setup funciona desde el primer arranque.

## Cómo ejecutar
```bash
npm install
npm run dev
```

Abre `http://localhost:5173` y revisa `src/main.js` y `src/App.vue` para ver la configuración mínima de PrimeVue.
