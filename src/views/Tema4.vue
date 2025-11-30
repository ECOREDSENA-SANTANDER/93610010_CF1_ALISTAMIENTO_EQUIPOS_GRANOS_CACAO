<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Clasificación y criterios de selección de los equipos


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La correcta selección de los equipos para la transformación del grano es clave para asegurar la eficiencia del proceso, la calidad del producto final y la seguridad operativa. La diversidad de granos, volúmenes de producción, condiciones de operación y normativas vigentes implica que no todos los equipos son adecuados para cualquier situación. Por ello, es necesario clasificar y seleccionar las máquinas según criterios técnicos, económicos y regulatorios que permitan optimizar la inversión y maximizar el rendimiento.
            br
            br
            p.mb-0 Se describen los principales criterios que se deben considerar para la clasificación y elección de los equipos más adecuados en función de las características específicas del proceso y las necesidades del usuario.


    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Por tipo de grano
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .bg2.p-lg-5.p-4
          p.mb-0.mb-lg-1.my-lg-1 Cada tipo de grano presenta características físicas y químicas particulares (tamaño, dureza, contenido de humedad, composición) que influyen en la selección de equipos.
      .col-lg-3
        .bg1.p-4
          img(src='@/assets/curso/intro/4.png', alt='')
      .col-lg-5
        ul.lista-ul.mb-0
          li.d-flex.mb-4
            i.fas.fa-leaf
            p.mb-0 Granos grandes y duros como el maíz requieren molinos y zarandas con mallas resistentes y mayor potencia.
          li.d-flex.mb-4
            i.fas.fa-leaf
            p.mb-0 Granos pequeños y delicados como el café o el arroz demandan equipos con controles más precisos para evitar daños.
          li.d-flex.mb-0
            i.fas.fa-leaf
            p.mb-0 Algunos equipos están diseñados específicamente para ciertos granos o cultivos, mientras que otros son versátiles.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema4/3.svg', alt='')
      .col-lg-11
        p.mb-0 Seleccionar equipos compatibles con el tipo de grano asegura la eficiencia en la limpieza, secado, molienda y otras etapas, y evita pérdidas o daños. En el caso del grano de cacao requiere equipos especializados debido a las características particulares del grano, como su tamaño, dureza, contenido de grasa y la necesidad de preservar su calidad para obtener productos de alta calidad, como el chocolate. Se mencionan algunos equipos específicos para cacao.


    .row.justify-content-center.align-items-stretch.mb-0
      .col-lg-3
        .bg1.p-4.h-100
          img.mb-3(src='@/assets/curso/tema4/4.png', alt='')
          h4.mb-3.text-center Tostadoras de cacao
          p.mb-0.text-center Diseñadas para tostar uniformemente los granos, liberando sabores y aromas característicos sin quemarlos. Suelen tener controles de temperatura y tiempo ajustables.
      .col-lg-3
        .bg1.p-4.h-100
          img.mb-3(src='@/assets/curso/tema4/5.png', alt='')
          h4.mb-3.text-center Descascarilladora
          p.mb-0.text-center Equipo encargado de separar la cáscara dura del grano tostado para obtener las almendras de cacao. Su operación debe ser precisa y cuidadosa, evitando la rotura o deterioro del grano durante el proceso.
      .col-lg-3
        .bg1.p-4.h-100
          img.mb-3(src='@/assets/curso/tema4/6.png', alt='')
          h4.mb-3.text-center Molinos de cacao
          p.mb-0.text-center Equipos para moler la almendra de cacao y convertirlos en pasta de cacao o licor de cacao. Estos molinos deben soportar la alta viscosidad y contenido graso del producto.
      .col-lg-3
        .bg1.p-4.h-100
          img.mb-3(src='@/assets/curso/tema4/7.png', alt='')
          h4.mb-3.text-center Prensas hidráulicas
          p.mb-0.text-center Usadas para separar la manteca de cacao de la pasta, fundamentales para obtener productos derivados. 


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Por capacidad de procesamiento

    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8
        p.mb-4 La capacidad o volumen que debe manejar el equipo es otro factor determinante. Se refiere a la cantidad de grano que puede procesarse en un período determinado.
        .bg2.p-lg-5.p-4.mb-4 
          ul.lista-ul.mb-0
            li.d-flex.mb-4
              i.fas.fa-leaf
              p.mb-0 Para producciones pequeñas o artesanales, se requieren equipos compactos, manuales o semiautomáticos.
            li.d-flex.mb-4
              i.fas.fa-leaf
              p.mb-0 En industrias medianas y grandes, se emplean máquinas de alta capacidad, automatizadas y con sistemas integrados.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 La capacidad también influye en el tamaño físico, consumo energético y costo de la máquina.
        p.mb-0 Es importante dimensionar correctamente el equipo para evitar cuellos de botella, excesos de inversión o subutilización.
      .col-lg-4
        img(src='@/assets/curso/tema4/8.png', alt='')


    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Por fuente de energía


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5
        img(src='@/assets/curso/tema4/9.png', alt='')
      .col-lg-7
        p.mb-4 Los equipos pueden clasificarse según el tipo de energía que utilizan para su funcionamiento, lo que afecta su disponibilidad, costos operativos y aplicación.
        ul.lista-ul.mb-4
          li.d-flex.mb-4
            i.fas.fa-leaf
            p.mb-0 #[b Eléctrica:] común en zonas con buena infraestructura; permite automatización y control preciso.
          li.d-flex.mb-4
            i.fas.fa-leaf
            p.mb-0 #[b Gas o combustibles fósiles:] usados en áreas sin acceso confiable a electricidad o para equipos que requieren altas temperaturas (como secadores o tostadoras).
          li.d-flex.mb-2
            i.fas.fa-leaf
            p.mb-0 #[b Manual:] ideales para pequeñas producciones o zonas rurales sin acceso a energía; equipos sencillos y de bajo costo.
        .bg6.p-4
          p.mb-0.text-white La elección debe considerar la disponibilidad local, costos, impacto ambiental y facilidad de mantenimiento.


    separador
    #t_4_4.titulo-segundo.mb-5
      h2 4.4 Por normativa de seguridad e higiene

    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-6
        p.mb-4 Los equipos deben cumplir con las normas y regulaciones vigentes en materia de seguridad industrial y seguridad alimentaria y garantizando varios aspectos.
        .bg2.p-4.mb-4 
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Protección del operador contra riesgos mecánicos, eléctricos o químicos.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Prevención de contaminación del producto durante el proceso.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Facilidades para limpieza y mantenimiento higiénico.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Certificaciones nacionales o internacionales (como ISO, FDA, normas locales).
        p.mb-0 El cumplimiento normativo es fundamental para la comercialización del producto y la sostenibilidad del proceso.
      .col-lg-6
        img(src='@/assets/curso/tema4/10.png', alt='')
    
    










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
