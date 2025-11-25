<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Equipos utilizados en la transformación del grano
    

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Equipos para la limpieza

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Equipos para el secado

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Equipos para la molienda

    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Equipos para la molienda

    separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Equipos de separación y extracción en la transformación del grano

    separador
    #t_2_6.titulo-segundo.mb-5
      h2 2.6  Equipos auxiliares






























</template>

<script>
export default {
  name: 'Tema2',
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
