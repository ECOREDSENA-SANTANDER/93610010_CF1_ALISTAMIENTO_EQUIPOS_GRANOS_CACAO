<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Clasificación y criterios de selección de los equipos

    
    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Por tipo de grano
    

    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Por capacidad de procesamiento

    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Por fuente de energía

    separador
    #t_4_4.titulo-segundo.mb-5
      h2 4.4 Por normativa de seguridad e higiene

      
    
    










</template>

<script>
export default {
  name: 'Tema4',
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
