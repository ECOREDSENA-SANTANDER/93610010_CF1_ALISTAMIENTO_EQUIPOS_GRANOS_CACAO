<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-9.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/intro/1.png', alt='')
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-lg-5.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/intro/2.svg', alt='')
          .col-lg-10
            p.mb-0 La transformación del grano es una etapa clave en las cadenas agroindustriales, ya que determina en gran medida la calidad, inocuidad y valor agregado del producto final. Para garantizar procesos eficientes, seguros y alineados con los estándares del mercado, es fundamental identificar y caracterizar correctamente los equipos e instrumentos involucrados en cada fase del procesamiento.
        p.mb-0 Esta identificación permite reconocer las máquinas y herramientas utilizadas en actividades como la limpieza, el secado, la molienda, el tostado, el empaque y el transporte del grano. A su vez, la caracterización técnica ofrece información detallada sobre su estructura, capacidad de operación, tipo de energía utilizada, componentes mecánicos y electrónicos, así como los mecanismos de seguridad que deben estar presentes.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-left")
        img.img-t.mb-2.d-none.d-lg-block(src='@/assets/curso/intro/3.svg', alt='')
        p.mb-lg-0.mb-4 Contar con este conocimiento permite seleccionar los equipos adecuados según el tipo de grano, el volumen de producción y las condiciones operativas. Además, favorece una gestión técnica eficiente, una mejor planificación del mantenimiento preventivo y el cumplimiento de normativas sanitarias, de seguridad e inocuidad.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        .bg1.p-4
          img(src='@/assets/curso/intro/4.png', alt='')
      .col-lg-5(data-aos="fade-left")
        .bg2.p-4
          p.mb-0.mb-lg-1.my-lg-1 Este componente formativo brinda a los participantes las herramientas necesarias para comprender y aplicar criterios técnicos en la selección, uso y mantenimiento de los equipos e instrumentos para la transformación del grano. Asimismo, promueve una visión integral del proceso productivo, subrayando la importancia de la estandarización, la eficiencia energética y la sostenibilidad en el desarrollo agroindustrial.

    
    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RJ9U1trd4Xo?si=JpRsDeWbgnH9WGGT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        figcaption Video. Alistamiento de equipos e instrumentos de transformación del grano

</template>

<script>
export default {
  name: 'Introduccion',
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
