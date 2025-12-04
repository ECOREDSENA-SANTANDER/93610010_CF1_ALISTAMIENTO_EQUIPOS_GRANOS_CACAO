<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Buenas Prácticas de Manufactura (BPM)

  
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 Las Buenas Prácticas de Manufactura (BPM) son un conjunto de procedimientos, normas y controles que garantizan la producción de alimentos seguros, de calidad y aptos para el consumo. Implementar BPM es fundamental para prevenir la contaminación, asegurar la inocuidad alimentaria y cumplir con las regulaciones sanitarias, existen requisitos y aspectos clave de BPM aplicados a la transformación del grano.


    .tarjetaf.p-4.p-lg-5.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Requisitos de infraestructura
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Instalaciones construidas con materiales resistentes, fáciles de limpiar y mantener (piso, paredes y techos lisos, sin grietas).
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Diseño que permita el flujo ordenado de materia prima, productos en proceso y productos terminados para evitar contaminaciones cruzadas.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Áreas bien iluminadas y ventiladas.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Zonas específicas para almacenamiento, procesamiento, limpieza y desecho.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Disponibilidad de agua potable en cantidad y calidad adecuada.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Instalaciones sanitarias adecuadas para el personal.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/2.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Control de procesos y operaciones
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Definición clara de las etapas de producción, con instrucciones estandarizadas (Procedimientos Operativos Estandarizados de Saneamiento - POES).
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Control de variables críticas como temperatura, humedad, tiempos de secado o tostado.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Registro continuo de datos para asegurar trazabilidad y seguimiento.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Supervisión constante para evitar desviaciones en el proceso.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/3.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Higiene personal
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Uso obligatorio de ropa adecuada (batas, gorros, guantes). 
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Lavado frecuente de manos con agua y jabón.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Prohibición de joyas, perfumes, maquillaje o objetos que puedan contaminar.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Capacitación continua del personal sobre prácticas higiénicas y manipulación segura.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/4.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Control de materias primas e insumos
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Recepción de granos e insumos en buen estado, libres de plagas y contaminantes.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Inspección visual y, de ser posible, análisis de calidad (humedad, peso, impurezas).
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Almacenamiento separado y adecuado para evitar mezcla o contaminación.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Registros detallados de proveedores y lotes.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/5.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Control de productos terminados
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Evaluación de calidad antes del despacho (humedad, tamaño, color, aroma).
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Almacenamiento en condiciones adecuadas para mantener su integridad y evitar contaminaciones.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Etiquetado correcto con información clara y trazabilidad.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/6.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Limpieza y desinfección
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Plan de limpieza y desinfección regular de instalaciones, equipos y utensilios.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Uso de productos aprobados y en concentraciones adecuadas.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Registro de actividades de limpieza.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Capacitación del personal en técnicas correctas para evitar contaminación cruzada.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/7.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Mantenimiento
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Programa de mantenimiento preventivo y correctivo para maquinaria e instalaciones.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Inspección periódica para detectar fallas o desgaste.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Documentación de todas las intervenciones.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Asegurar que el mantenimiento no afecte la higiene ni la seguridad alimentaria.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/8.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Control de plagas
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Implementación de un programa integral de manejo de plagas (roedores, insectos, aves). 
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Medidas preventivas como sellado de accesos, trampas, y uso controlado de biocidas.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Contratación de servicios profesionales cuando sea necesario.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Registros de inspecciones y acciones realizadas.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/9.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Documentos y registros
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Manuales y procedimientos escritos que definan todas las actividades.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Registros diarios de producción, limpieza, mantenimiento y control de calidad.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Control de lotes y trazabilidad para facilitar la identificación y retiro de productos en caso de problemas.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Actualización y revisión periódica de documentos.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/10.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4.my-lg-4 Almacenamiento
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Áreas limpias, ventiladas y protegidas contra plagas y contaminantes.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Uso de pallets para evitar contacto directo con el suelo.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Rotación de inventarios (sistema FIFO: primero en entrar, primero en salir).
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Separación de materias primas, productos en proceso y productos terminados.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Control ambiental para conservar las características del grano (temperatura y humedad adecuadas).
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/11.png")


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .bg4.p-4.mb-0
          p.mb-0.mt-lg-4.mb-lg-4.text-center #[b Nota:] implementar y mantener estas Buenas Prácticas de Manufactura asegura la producción de granos y derivados seguros, cumple con normativas nacionales e internacionales, y mejora la competitividad del producto en el mercado.



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
