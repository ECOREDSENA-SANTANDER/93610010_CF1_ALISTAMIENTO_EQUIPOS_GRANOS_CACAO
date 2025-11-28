<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La identificación y caracterización de los equipos e instrumentos para la transformación del grano es esencial en la cadena agroindustrial, ya que incide directamente en la eficiencia, calidad e inocuidad del proceso. Seleccionar y describir técnicamente la maquinaria adecuada permite procesar el grano bajo condiciones óptimas, preservando sus propiedades y garantizando el cumplimiento de los estándares exigidos. Esta tarea implica reconocer los equipos apropiados para cada etapa, desde la limpieza y clasificación hasta el procesamiento final, asegurando su correcta función y adaptación a las características físicas y químicas del producto.
    p.mb-4 La caracterización técnica considera factores como capacidad de procesamiento, tipo de grano, fuente de energía, materiales de fabricación y normativas de seguridad e higiene. También abarca criterios funcionales como facilidad de operación, mantenimiento y durabilidad, fundamentales para optimizar la productividad y reducir costos. Una adecuada identificación y caracterización de los equipos no solo favorece la trazabilidad del proceso y la capacitación del personal, sino que también fortalece la sostenibilidad y competitividad del sector agroindustrial.
    

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        img(src="@/assets/curso/sintesis.png", alt="El diagrama describe los equipos e instrumentos utilizados en la transformación del grano, comenzando con una introducción donde se abarca qué es la transformación del grano, la importancia del alistamiento previo de los equipos y los tipos de granos y procesos asociados. Luego, se detallan los equipos utilizados, incluyendo los de limpieza, secado, molienda, tostado, separación y extracción, así como equipos auxiliares. También se explican los componentes y el funcionamiento de los equipos, destacando su estructura mecánica, componentes eléctricos o electrónicos y mecanismos de seguridad. La clasificación y selección de los equipos se basa en criterios como el tipo de grano, capacidad de procesamiento, fuente de energía y normativas de seguridad e higiene. Finalmente, se incluyen las Buenas Prácticas de Manufactura (BPM), que abarcan desde los requisitos de infraestructura, control de procesos y operaciones, higiene personal, control de materias primas e insumos, control de productos terminados, limpieza y desinfección, mantenimiento, control de plagas, hasta la gestión de documentos, registros y almacenamiento, asegurando así un manejo adecuado y seguro en la transformación del grano.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
