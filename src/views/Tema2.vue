<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Equipos utilizados en la transformación del grano
    

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El uso de equipos adecuados permite optimizar el rendimiento, reducir las pérdidas postcosecha, mejorar la inocuidad y asegurar la trazabilidad del producto final; por ello, conocer las características, funciones y ventajas de cada uno de estos equipos resulta esencial para lograr una transformación eficiente y sostenible del grano, ya que cumplen funciones específicas en etapas como la limpieza, el secado, la molienda, el tostado y el almacenamiento o transporte, cuya elección depende del tipo de grano, el volumen de producción, los estándares de calidad y las condiciones locales de operación como el clima, la disponibilidad de energía o el nivel tecnológico.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Equipos para la limpieza


    p.mb-5 La limpieza del grano es una de las primeras y más importantes etapas en su procesamiento, ya que garantiza la calidad del producto final y protege los equipos que intervienen en las siguientes fases. Durante la cosecha, transporte y almacenamiento, los granos suelen contaminarse con diversas impurezas como tierra, piedras, restos vegetales, polvo, semillas de otras especies y granos dañados o vacíos.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla presenta diferentes equipos utilizados para la limpieza de granos, especificando su función, ventajas, consideraciones y una referencia gráfica. Se incluyen tres tipos principales: zarandas, que eliminan impurezas grandes mediante mallas; aspiradores o ventiladores, que separan partículas livianas utilizando corrientes de aire; y separadores por densidad o mesas densimétricas, que clasifican los granos según su peso y eliminan materiales dañados. Cada equipo se diferencia por su principio de funcionamiento, eficiencia en la limpieza y aplicaciones en distintos procesos industriales.')
          h5 Tabla 2. 
          | #[em Equipos para limpieza]

        .tabla-a.tab2
          table
            thead
              tr
                th Equipo
                th Función
                th Ventajas
                th Consideraciones
                th Descripción gráfica
            tbody
              tr
                td.left #[b Zarandas]
                td.left
                  p.mb-0 Separan los granos según su tamaño mediante mallas con diferentes perforaciones.
                td.left
                  p.mb-0 - Eliminan impurezas grandes (ramas, piedras) y pequeñas (arena, granos partidos).
                  p.mb-0 - Alta eficiencia y capacidad en procesos industriales.
                td.left
                  p.mb-0 - Las hay planas, rotativas o vibratorias.
                  p.mb-0 - La selección del tamaño de malla debe adaptarse al tipo de grano procesado (maíz, trigo, café, etc.).
                td
                  img(src='@/assets/curso/tema2/2.png' alt='AvatarTop')
              tr
                td.left #[b Sopladoras o ventiladores]
                td.left
                  p.mb-0 Usan corrientes de aire para separar elementos livianos (polvo, pajas, cáscaras) del grano.
                td.left
                  p.mb-0 - Bajo consumo energético.
                  p.mb-0 - Se pueden ajustar para distintos tipos de impurezas.
                td.left
                  p.mb-0 - Muy comunes en el procesamiento de arroz, café, cacao y cereales.
                  p.mb-0 - No eliminan impurezas del mismo tamaño y peso que el grano.
                td
                  img(src='@/assets/curso/tema2/3.png' alt='AvatarTop')
              tr
                td.left #[b Separadores por densidad (mesa densimétrica)]
                td.left
                  p.mb-0 Separan los granos según su peso específico.
                  p.mb-0 Ideal para eliminar granos vacíos, dañados o infestados.
                td.left
                  p.mb-0 - Muy útil en la selección de granos de calidad (café, legumbres, semillas certificadas).
                td.left
                  p.mb-0 - Funcionan mediante vibración y corriente de aire que elevan los granos más ligeros.
                  p.mb-0 - Requieren ajuste y calibración precisa.
                td
                  img(src='@/assets/curso/tema2/4.png' alt='AvatarTop')



    p.mb-0 Una limpieza eficiente no solo mejora el valor comercial del grano, sino que también reduce el riesgo de contaminación microbiológica, facilita el almacenamiento seguro y optimiza el rendimiento en etapas posteriores como el secado, la molienda o el tostado.
    

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Equipos para el secado


    p.mb-5 La limpieza del grano es una de las primeras y más importantes etapas en su procesamiento, ya que garantiza la calidad del producto final y protege los equipos que intervienen en las siguientes fases. Durante la cosecha, transporte y almacenamiento, los granos suelen contaminarse con diversas impurezas como tierra, piedras, restos vegetales, polvo, semillas de otras especies y granos dañados o vacíos.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/5.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El secado del grano es una etapa crítica en el proceso de transformación, ya que tiene un impacto directo en la calidad, seguridad y vida útil del producto. 
            br
            br
            p.mb-0 Después de la cosecha, los granos suelen contener un alto porcentaje de humedad, lo cual favorece el desarrollo de hongos, bacterias y procesos de fermentación que pueden deteriorarlos rápidamente. Por ello, reducir la humedad a niveles seguros es esencial antes de su almacenamiento o procesamiento posterior.
            br
            br
            p.mb-0 Para lograr esto, se utilizan diferentes equipos de secado, que varían en complejidad, costo y eficiencia según la tecnología empleada.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla compara dos tipos de equipos utilizados en el proceso de secado: los secadores solares y los secadores mecánicos. Los primeros emplean el sol como fuente de calor y son de bajo costo y sostenibles, aunque su rendimiento depende del clima y resultan lentos. Los segundos funcionan con fuentes de energía como gas, leña, electricidad o biomasa, permiten un mayor control de temperatura y reducen el tiempo de secado, pero requieren una inversión más alta y mantenimiento constante.')
          h5 Tabla 3. 
          | #[em Equipos para el secado]

        .tabla-a.tab3
          table
            thead
              tr
                th Equipo
                th Funcionamiento
                th Ventajas
                th Desventajas
            tbody
              tr
                td #[b Secadores solares]
                td
                  p.mb-0 Usan el sol como fuente de calor.
                  p.mb-0 El grano se expone sobre bandejas o camas bajo techos transparentes.
                td
                  p.mb-0 - Bajo costo operativo.
                  p.mb-0 - Energía renovable.
                td
                  p.mb-0 - Dependen del clima.
                  p.mb-0 - Lentos y con riesgo de fermentación si no se giran los granos correctamente.
                  p.mb-0 - Pequeñas producciones, zonas rurales con buen clima.
              
              tr
                td #[b Secadores mecánicos]
                td
                  p.mb-0 - Su funcionamiento es de flujo continuo o por lotes; verticales, horizontales, rotativos, entre otros.
                  p.mb-0 - Su fuente de calor es a base de gas, leña, electricidad o biomasa.
                  p.mb-0 - Muy usados en la industria del arroz, maíz, café y cacao.
                td
                  p.mb-0 - Mayor control de temperatura y humedad.
                  p.mb-0 - Reducción de tiempo de secado.
                td
                  p.mb-0 - Mayor inversión inicial.
                  p.mb-0 - Requieren mantenimiento regular.


    .row.fondo2.p-4.p-lg-5.p-md-4.mb-0
      .col-lg-12
        
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3
            img(src='@/assets/curso/tema2/6.png' alt='AvatarTop')
          .col-lg-4
            p.mb-0 Los secadores solares representan una alternativa económica y ecológica para pequeñas producciones, aunque dependen del clima. Por otro lado, los secadores mecánicos utilizan fuentes de energía como gas, leña o electricidad para generar aire caliente, lo que permite un secado más rápido, uniforme y controlado. La elección del tipo de secador adecuado depende de factores como el tipo de grano, el volumen de producción, las condiciones climáticas y los recursos disponibles.
          .col-lg-5
            img(src='@/assets/curso/tema2/7.png' alt='AvatarTop')
        

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Equipos para la molienda


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/8.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La molienda constituye una etapa esencial en la transformación del grano, pues consiste en la reducción controlada del tamaño de las partículas para facilitar su utilización posterior en la elaboración de alimentos, bebidas o productos industriales. Con ello se obtienen harinas, sémolas o polvos con características específicas, determinadas por el tipo de grano y el uso final del producto.
            br
            br
            p.mb-0 Existen diversas tecnologías empleadas para la molienda; entre las más comunes destacan los #[b molinos de martillos] y los #[b molinos de rodillos,] cada uno con ventajas particulares en términos de eficiencia, textura obtenida y consumo energético.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Los molinos de martillos
    

    p.mb-5 Trituran el grano mediante impactos repetidos de martillos giratorios contra una rejilla metálica. Son ideales para obtener harinas finas y se adaptan bien a una gran variedad de productos, incluyendo cereales, legumbres y subproductos agrícolas. Son equipos robustos, de alta velocidad y fáciles de operar, aunque generan mayor calentamiento y menos control en el tamaño del producto final.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1. 
          | #[em Molino de martillos]
        img(src='@/assets/curso/tema2/9.png' alt='Equipo industrial utilizado para triturar materia prima mediante un sistema de martillos que gira a alta velocidad. Cuenta con una tolva de alimentación superior, una carcasa protectora alrededor del mecanismo de trituración y una estructura metálica que sostiene el sistema durante su operación. Diseñado para procesos de reducción de tamaño en líneas de producción industriales.')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla presenta las características principales de los molinos de martillo, los cuales utilizan martillos giratorios para golpear el grano contra una rejilla metálica. Se destacan por su alta velocidad y por producir harinas finas, además de su capacidad para moler diversos productos como granos, raíces y hojas secas. Entre sus desventajas se encuentran la generación de calor y polvo, así como la dificultad para controlar el tamaño final de las partículas.')
          h5 Tabla 4. 
          | #[em Molinos de martillo]

        .tabla-a.tab4
          table
            thead
              tr
                th Funcionamiento
                th Ventajas
                th Desventajas
            tbody
              tr
                td
                  p.mb-0 - Martillos giratorios que golpean el grano contra una rejilla metálica.
                td
                  p.mb-0 - Alta velocidad.
                  p.mb-0 - Produce harinas finas.
                  p.mb-0 - Puede moler una variedad de productos (granos, raíces, hojas secas).
                td
                  p.mb-0 - Mayor generación de calor y polvo.
                  p.mb-0 - Menor control sobre el tamaño final de partícula.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Los molinos de rodillos

    
    p.mb-0 Realizan la molienda por compresión, haciendo pasar el grano entre dos cilindros metálicos que giran en direcciones opuestas. Este sistema permite un mayor control del tamaño de partícula, genera menos polvo y calor, y es especialmente adecuado para aplicaciones donde se requiere una molienda más precisa, como en la industria de la panificación o la elaboración de malta.

    
    .row.fondo3.p-4.p-lg-5.p-md-4.mb-0
      .col-lg-12

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .titulo-sexto.mb-4
              h5 Figura 2. 
              | #[em Molino de rodillos]
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-8
                img(src='@/assets/curso/tema2/10.png' alt='Equipo industrial destinado al procesamiento de granos mediante rodillos que ejercen presión controlada para realizar la molienda. Incluye un sistema de alimentación superior, paneles laterales con controles operativos, mecanismos de ajuste para regular la distancia entre rodillos y una estructura robusta que garantiza estabilidad durante el funcionamiento. Diseñado para operaciones continuas en plantas de transformación agroindustrial.')

   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla presenta la información principal sobre los molinos de rodillos. Explica que su funcionamiento se basa en el paso del grano entre dos cilindros metálicos que lo comprimen, siendo comunes en la industria del trigo y la cerveza. Entre sus ventajas se destacan una molienda más uniforme, menor daño térmico y control preciso del tamaño de partícula. Como desventajas, se indica que son más costosos y requieren limpieza frecuente.')
          h5 Tabla 5. 
          | #[em Molinos de rodillos]
        .tabla-a.tab5
          table
            thead
              tr
                th Funcionamiento
                th Ventajas
                th Desventajas
            tbody
              tr
                td
                  p.mb-0 El grano pasa entre dos cilindros metálicos que lo comprimen.
                  p.mb-0 Utilizados en la industria del trigo (panificación), cerveza, entre otros.
                td
                  p.mb-0 - Molienda más uniforme.
                  p.mb-0 - Menor daño térmico.
                  p.mb-0 - Control preciso del tamaño de partícula.
                td
                  p.mb-0 - Más costosos.
                  p.mb-0 - Requieren limpieza frecuente.

    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bg4.p-4.mb-0
          h5.mb-0.mt-lg-4.mb-lg-4 La selección del tipo de molino depende del tipo de grano a procesar, el nivel de molienda deseado, la capacidad de producción y el propósito del producto final.








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
