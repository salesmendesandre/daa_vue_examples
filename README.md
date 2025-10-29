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
- `06_forms_and_events/01_forms`: campos controlados, validación básica y modificadores de eventos. [Capítulo 6](https://salesmendesandre.github.io/daa_vue/main/vue/p2c6_manejo_de_formularios_y_eventos.html)
- `06_forms_and_events/02_custom_events`: propagación de datos desde componentes hijos mediante eventos personalizados. [Capítulo 6](https://salesmendesandre.github.io/daa_vue/main/vue/p2c6_manejo_de_formularios_y_eventos.html)

Si detectas una diferencia entre el libro y el ejemplo correspondiente, abre un issue o un pull request para mantener el material sincronizado.
