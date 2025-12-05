# Ejemplos del libro "Desarrollo de Aplicaciones Avanzadas con Vue"

<p align="center">
  <img src="https://salesmendesandre.github.io/daa_vue/main/_static/Cover.png" alt="Portada del libro Desarrollo de Aplicaciones Avanzadas con Vue" width="40%" />
</p>

Este repositorio reúne los proyectos de apoyo descritos en el libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/intro.html). Cada carpeta corresponde a un ejemplo práctico que profundiza en los conceptos presentados capítulo a capítulo.

## Cómo ejecutar cualquier ejemplo
1. Instala dependencias con `npm install`.
2. Inicia el servidor de desarrollo con `npm run dev`.
3. Abre `http://localhost:5173` (o el puerto indicado por Vite) para explorar el caso práctico.

> Todos los ejemplos se basan en Vite y Vue 3. Si prefieres usar `pnpm` o `yarn`, sustituye los comandos según tu gestor de paquetes.

## Mapa de ejemplos y capítulos

### Capítulo 1 – Introducción a Vue
- `01_introduction`: crea y monta el primer componente con `<script setup>` y reactividad básica. [Leer el capítulo](https://salesmendesandre.github.io/daa_vue/main/vue/p1c1_introduccion_a_vue.html)

### Capítulo 2 – Configuración y Componentes
- `02_configuration_components/01_components_registration`: registro local y global de componentes. [Capítulo 2](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html)
- `02_configuration_components/02_props`: definición y validación de props con `defineProps`. [Capítulo 2](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html)
- `02_configuration_components/03_events`: manejo de eventos nativos y modificadores básicos. [Capítulo 2](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html)
- `02_configuration_components/04_custom_events`: emisión de eventos personalizados con `defineEmits`. [Capítulo 2](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html)
- `02_configuration_components/05_vmodel`: uso de `v-model` en inputs controlados. [Capítulo 2](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html)
- `02_configuration_components/06_custom_vmodel`: creación de componentes con `v-model` personalizado (`update:modelValue`). [Capítulo 2](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html)
- `02_configuration_components/07_attribute_inheritance`: herencia y control de atributos con `$attrs`. [Capítulo 2](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html)

### Capítulo 3 – Plantillas y Directivas
- `03_data_interpolation_and_binding/01_data_interpolation`: interpolación de texto, enlaces dinámicos y clases condicionadas. [Capítulo 3](https://salesmendesandre.github.io/daa_vue/main/vue/p1c3_plantillas_y_directivas.html)
- `03_data_interpolation_and_binding/02_conditionals_and_iterations`: `v-if`, `v-else` y bucles con `v-for`. [Capítulo 3](https://salesmendesandre.github.io/daa_vue/main/vue/p1c3_plantillas_y_directivas.html)
- `03_data_interpolation_and_binding/03_events`: eventos de teclado, formularios y modificación de estado reactivo. [Capítulo 3](https://salesmendesandre.github.io/daa_vue/main/vue/p1c3_plantillas_y_directivas.html)
- `03_data_interpolation_and_binding/04_slots`: slots básicos y nombrados para componer interfaces flexibles. [Capítulo 3](https://salesmendesandre.github.io/daa_vue/main/vue/p1c3_plantillas_y_directivas.html)
- `03_data_interpolation_and_binding/05_v_cloak`: ocultar parpadeos iniciales con la directiva `v-cloak`. [Capítulo 3](https://salesmendesandre.github.io/daa_vue/main/vue/p1c3_plantillas_y_directivas.html)

### Capítulo 4 – Options API vs Composition API
- `04_options_api_vs_composition_api`: comparación lado a lado entre ambos enfoques para un contador reactivo. [Capítulo 4](https://salesmendesandre.github.io/daa_vue/main/vue/p2c4_estilos_api.html)

### Capítulo 5 – Ciclo de vida y Reactividad
- `05_lifecycle_reactivity_optimization/01_lifecycle`: ganchos de ciclo de vida con ejemplos de montaje y desmontaje. [Capítulo 5](https://salesmendesandre.github.io/daa_vue/main/vue/p2c5_ciclo_de_vida_y_computed.html)
- `05_lifecycle_reactivity_optimization/02_reactivity`: `ref`, `computed`, `watch` y `watchEffect` en acción. [Capítulo 5](https://salesmendesandre.github.io/daa_vue/main/vue/p2c5_ciclo_de_vida_y_computed.html)
- `05_lifecycle_reactivity_optimization/03_filtered_list`: optimización de listas mediante propiedades computadas. [Capítulo 5](https://salesmendesandre.github.io/daa_vue/main/vue/p2c5_ciclo_de_vida_y_computed.html)

### Capítulo 6 – Formularios y Eventos Personalizados
- `06_forms_and_events/01_forms`: campos controlados, validación básica y modificadores de eventos. [Capítulo 6](https://salesmendesandre.github.io/daa_vue/main/vue/p2c6_manejo_de_formularios.html)

### Capítulo 7 – Ruteo y Estado Global
- `07_router_and_global_state/01_vue_router`: configuración mínima de Vue Router con enlaces declarativos y `<router-view>`. [Capítulo 7](https://salesmendesandre.github.io/daa_vue/main/vue/p3c7_ruteo_y_estado_global.html)
- `07_router_and_global_state/02_dinamic_rutes`: parámetros dinámicos (`/usuarios/:id`) y consumo de `useRoute()`. [Capítulo 7](https://salesmendesandre.github.io/daa_vue/main/vue/p3c7_ruteo_y_estado_global.html)
- `07_router_and_global_state/03_nested_rutes`: layouts anidados y rutas hijas para un CRUD de productos. [Capítulo 7](https://salesmendesandre.github.io/daa_vue/main/vue/p3c7_ruteo_y_estado_global.html)
- `07_router_and_global_state/04_pinia`: store global con Pinia, getters y acciones para compartir estado. [Capítulo 7](https://salesmendesandre.github.io/daa_vue/main/vue/p3c7_ruteo_y_estado_global.html)
- `07_router_and_global_state/05_pinia_and_router`: integración Pinia + Router con navegación programática y selección global. [Capítulo 7](https://salesmendesandre.github.io/daa_vue/main/vue/p3c7_ruteo_y_estado_global.html)

### Capítulo 8 – PrimeVue y ecosistema
- `08_prime_vue`: instalación de PrimeVue con tema Aura, PrimeFlex e íconos, usando auto-import de componentes. [Capítulo 8](https://salesmendesandre.github.io/daa_vue/main/vue/p3c8_prime_vue.html)

### Capítulo 9 – Formularios con PrimeVue Forms
- `09_prime_vue_forms`: formularios con el add-on `@primevue/forms` y validación con resolutores basados en Zod. [Capítulo 9](https://salesmendesandre.github.io/daa_vue/main/vue/p3c9_prime_vue_forms.html)

### Capítulo 10 – Integración Firebase: Autenticación
- `10_firebase_auth`: configuración del SDK modular v9, alta e inicio de sesión con email/contraseña y Google, más gestión de sesión reactiva. [Capítulo 10](https://salesmendesandre.github.io/daa_vue/main/vue/p4c10_firebase_auth_firestore.html)

### Capítulo 11 – CRUD en Firestore
- `11_firebase_firestore`: servicios para `addDoc`, `getDoc`, `updateDoc`, `deleteDoc` y `onSnapshot`, con vistas de listado, alta y edición. [Capítulo 11](https://salesmendesandre.github.io/daa_vue/main/vue/p4c11_firebase_firestore.html)

### Capítulo 12 – Imágenes como Base64 en Firestore
- `12_firebase_images_in_firestore`: carga de imágenes desde `input file`, conversión a Base64, guardado en Firestore y previsualización. [Capítulo 12](https://salesmendesandre.github.io/daa_vue/main/vue/p4c12_firebase_images_in_firestore.html)

### Capítulo 15 – Introducción a Node.js y Express
- `15_node_express/01_first_server_http`: servidor HTTP con el módulo nativo `http` y respuesta de texto plano. [Capítulo 15](https://salesmendesandre.github.io/daa_vue/main/vue/p6c15_node_express.html)
- `15_node_express/02_express`: primer “hola mundo” con Express y respuesta HTML. [Capítulo 15](https://salesmendesandre.github.io/daa_vue/main/vue/p6c15_node_express.html)
- `15_node_express/03_arch_express`: estructura base de API con `src/app.js`, rutas y middleware de logger. [Capítulo 15](https://salesmendesandre.github.io/daa_vue/main/vue/p6c15_node_express.html)

### Capítulo 16 – ¿Qué es una API REST?
- `16_api_rest`: endpoints CRUD en memoria para productos (GET, POST, PUT, DELETE) usando Express y `express.json()`. [Capítulo 16](https://salesmendesandre.github.io/daa_vue/main/vue/p6c16_api_rest.html)

### Capítulo 17 – Entidad Producto con MongoDB y Mongoose
- `17_mongo_mongoose`: API Express conectada a MongoDB con modelo Producto, validaciones y rutas CRUD. [Capítulo 17](https://salesmendesandre.github.io/daa_vue/main/vue/p6c17_producto_mongoose.html)

### Capítulo 18 – Autenticación con JWT
- `18_auth_jwt/01_auth_api`: API Express + MongoDB con registro, login, generación/verificación de JWT y middlewares de protección. [Capítulo 18](https://salesmendesandre.github.io/daa_vue/main/vue/p6c18_04_auth_jwt.html)
- `18_auth_jwt/02_auth_front`: cliente Vue 3 con Pinia y axios que consume la API JWT y protege rutas según el token. [Capítulo 18](https://salesmendesandre.github.io/daa_vue/main/vue/p6c18_04_auth_jwt.html)

### Capítulo 19 – Subida de archivos con Multer
- `19_upload_files/01_upload_files_api`: endpoint `/upload/imagen` con Multer, validación de tipo y tamaño y servido estático desde `/uploads`. [Capítulo 19](https://salesmendesandre.github.io/daa_vue/main/vue/p6c19_05_upload_multer.html)
- `19_upload_files/02_client`: cliente Vue que envía imágenes como `multipart/form-data` y muestra la URL devuelta por la API. [Capítulo 19](https://salesmendesandre.github.io/daa_vue/main/vue/p6c19_05_upload_multer.html)

### Utilidades
- `99_utils/01_primevue_starter`: plantilla base con PrimeVue (tema Aura, PrimeFlex, íconos y auto-import) lista para clonar y arrancar sin reconfigurar cada proyecto.

Si detectas una diferencia entre el libro y el ejemplo correspondiente, abre un issue o un pull request para mantener el material sincronizado.
