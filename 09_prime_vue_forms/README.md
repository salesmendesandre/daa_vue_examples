# Formularios con PrimeVue Forms + Zod

Ejemplo del capítulo 9 del libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/vue/p3c9_prime_vue_forms.html). Muestra cómo usar el add-on `@primevue/forms` con un `resolver` basado en Zod para validar formularios.

## Qué repasar antes
- Haber configurado PrimeVue (ver `08_prime_vue`).
- Dependencias clave: `@primevue/forms`, `zod`, además de `primevue`, `@primeuix/themes`, `primeflex` y `primeicons`.
- Node.js 18+ y gestor de paquetes.

## Qué incluye el ejemplo
- Formulario base con `<Form>` y slots `$form`.
- Resolver con Zod para validar campos (por ejemplo `id` y `price`).
- Integración con auto-import de componentes y estilos de PrimeVue.

## Cómo ejecutar
```bash
npm install
npm run dev
```

Visita `http://localhost:5173` y revisa el componente principal del formulario para entender el flujo de validación.
