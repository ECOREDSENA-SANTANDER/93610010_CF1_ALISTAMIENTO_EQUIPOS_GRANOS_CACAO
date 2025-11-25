<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Procesos de transformación del grano
      
    
    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 ¿Qué es la transformación del grano?



    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Importancia del alistamiento previo de los equipos




    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Tipos de granos (café, cacao, maíz, etc.) y procesos asociados











</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
