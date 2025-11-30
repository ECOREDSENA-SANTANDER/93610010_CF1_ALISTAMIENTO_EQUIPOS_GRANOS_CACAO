<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Buenas Prácticas de Manufactura (BPM)

  
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 Las Buenas Prácticas de Manufactura (BPM) son un conjunto de procedimientos, normas y controles que garantizan la producción de alimentos seguros, de calidad y aptos para el consumo. Implementar BPM es fundamental para prevenir la contaminación, asegurar la inocuidad alimentaria y cumplir con las regulaciones sanitarias, existen requisitos y aspectos clave de BPM aplicados a la transformación del grano.






















</template>

<script>
export default {
  name: 'Tema5',
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
