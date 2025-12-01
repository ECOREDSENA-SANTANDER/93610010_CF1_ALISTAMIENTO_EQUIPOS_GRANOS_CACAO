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
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/tema2/6.png' alt='AvatarTop')
          .col-lg-4
            p.mb-lg-0.mb-4 Los secadores solares representan una alternativa económica y ecológica para pequeñas producciones, aunque dependen del clima. Por otro lado, los secadores mecánicos utilizan fuentes de energía como gas, leña o electricidad para generar aire caliente, lo que permite un secado más rápido, uniforme y controlado. La elección del tipo de secador adecuado depende de factores como el tipo de grano, el volumen de producción, las condiciones climáticas y los recursos disponibles.
          .col-lg-5.col-md-9.col-10
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
      .col-lg-12(alt='La tabla presenta las características principales de los molinos de martillo, los cuales utilizan martillos giratorios para golpear el grano contra una rejilla metálica. Se destacan por su alta velocidad y por producir harinas finas, además de su capacidad para moler diversos productos como granos, raíces y hojas secas. Entre sus desventajas se encuentran la generación de calor y polvo, así como la dificultad para controlar el tamaño final de las partículas.')
        .titulo-sexto.mb-4
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

        .row.justify-content-center.align-items-center.mb-0
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


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/11.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El tostado es un proceso fundamental en la transformación de diversos granos como el café, cacao, cereales y algunos frutos secos, ya que mediante la aplicación controlada de calor se desarrollan sabores, aromas y texturas características que enriquecen el producto final. Además, el tostado contribuye a mejorar la digestibilidad y la conservación del grano, eliminando humedad residual y reduciendo la actividad microbiana.
            br
            br
            p.mb-0 Para realizar este proceso de manera eficiente y uniforme, se utilizan diferentes tipos de equipos especializados, siendo las tostadoras de tambor y las tostadoras de aire caliente las más comunes.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Las tostadoras de tambor


    p.mb-0 Aplican calor indirecto y permiten un control preciso del perfil de tostado, ideal para productos que requieren un tratamiento cuidadoso, como el del café especial. 


    .row.fondo4.p-4.p-lg-5.p-md-4.mb-0
      .col-lg-12

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .titulo-sexto.mb-4
              h5 Figura 3. 
              | #[em Tostadora de tambor]
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-6
                img(src='@/assets/curso/tema2/12.png' alt='Equipo especializado para el tostado de granos, compuesto por un tambor cilíndrico donde se realiza el proceso térmico. Incluye una tolva superior para la alimentación, un sistema de control frontal para regular temperatura y tiempo, y un mecanismo que permite el giro constante del tambor para asegurar una tostión uniforme. Diseñado para operaciones controladas en la transformación de cacao u otros granos.')


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Las tostadoras de aire caliente
     
    
    p.mb-0 Utilizan una corriente de aire caliente para tostar los granos de forma rápida y homogénea, siendo muy eficientes para producciones a gran escala.


    .row.fondo5.p-4.p-lg-5.p-md-4.mb-0
      .col-lg-12

        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .titulo-sexto.mb-4
              h5 Figura 4. 
              | #[em Tostadora de aire caliente]
            img(src='@/assets/curso/tema2/13.png' alt='Equipo de tostado que utiliza un flujo de aire caliente para procesar granos. Cuenta con una tolva de alimentación superior, una cámara principal donde circula el aire a alta temperatura y un compartimiento frontal destinado al enfriamiento y agitación del producto tostado. Incluye controles operativos y componentes laterales que permiten regular las condiciones del proceso para lograr un tostado uniforme.')


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bg4.p-4.mb-0
          h5.mb-0.mt-lg-4.mb-lg-4.text-center La elección del equipo adecuado para el tostado depende del tipo de grano, la capacidad de producción, el perfil de sabor deseado y los recursos disponibles. Un tostado bien controlado es clave para maximizar la calidad sensorial y comercial del producto final.

    separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Equipos de separación y extracción en la transformación del grano


    p.mb-5 En la industria agroalimentaria, la etapa de separación y extracción es fundamental para obtener productos puros y de alta calidad a partir del grano procesado. Estos equipos permiten separar los componentes valiosos (grasas, sólidos, fibras) y eliminar impurezas, optimizando el rendimiento y las características finales del producto.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Prensa hidráulica


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima1(src='@/assets/curso/tema2/14.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Función
          p.mb-2.text-center Se utiliza para extraer aceites o grasas de los granos molidos; en el caso del cacao, la prensa hidráulica separa la manteca de cacao de la pasta o licor de cacao.
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima2(src='@/assets/curso/tema2/15.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Características
          p.mb-2.text-center Opera aplicando alta presión para extraer la grasa sin alterar la calidad del producto.
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima3(src='@/assets/curso/tema2/16.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Aplicaciones
          p.mb-2.text-center Extracción de manteca en cacao, aceite en semillas oleaginosas, etc.
    .d-none
      img(src='@/assets/curso/tema2/17.svg' alt='')
      img(src='@/assets/curso/tema2/18.svg' alt='')
      img(src='@/assets/curso/tema2/19.svg' alt='')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 5. 
          | #[em Prensa extractora de manteca de cacao]
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-10
            img(src='@/assets/curso/tema2/20.png' alt='Máquina utilizada para separar la manteca del cacao mediante presión mecánica. Incorpora un sistema de prensado compuesto por cilindros y tornillos, un chasis robusto que sostiene todos los componentes y mecanismos de ajuste lateral que permiten regular la fuerza aplicada. Diseñada para procesos de extracción en plantas de transformación de cacao.')


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Separadores por gravedad


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-5.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima4(src='@/assets/curso/tema2/21.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Función
          p.mb-2.text-center Separan partículas según su peso específico, ayudando a eliminar impurezas como piedras o granos dañados.
      .col-lg-5.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima5(src='@/assets/curso/tema2/22.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Ejemplo
          p.mb-2.text-center En el cacao, pueden usarse para limpiar el grano antes del tostado.

    .d-none
      img(src='@/assets/curso/tema2/23.svg' alt='')
      img(src='@/assets/curso/tema2/24.svg' alt='')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 6. 
          | #[em Separador por gravedad]
        img(src='@/assets/curso/tema2/25.png' alt='Equipo agrícola utilizado para clasificar frutos mediante diferencias de peso. Cuenta con una tolva superior para alimentar el material, un mecanismo interno que facilita la separación y una estructura alargada donde se distribuyen los productos según su densidad. Está diseñado para procesos iniciales de selección en entornos de cultivo.')


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Separadores magnéticos


    p.mb-5 #[b Función:] retiran partículas metálicas contaminantes para proteger la maquinaria y garantizar la calidad del producto.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 7. 
          | #[em Separador magnético de alta densidad]
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-8
            img(src='@/assets/curso/tema2/26.png' alt='Se aprecia un equipo industrial compuesto por una estructura elevada que funciona como alimentador y un módulo principal con cámara cerrada y controles frontales. El sistema integra una tolva de entrada, un elevador de transporte y una zona de procesamiento montada sobre una base con ruedas para facilitar su movilidad. Está diseñado para la clasificación, selección o tratamiento técnico de productos agrícolas o granulares en un flujo continuo.')


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Decantadores y centrifugadoras


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-5.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima6(src='@/assets/curso/tema2/27.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Función
          p.mb-2.text-center Utilizan la fuerza centrífuga para separar líquidos de sólidos o componentes con diferentes densidades.
      .col-lg-5.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima7(src='@/assets/curso/tema2/28.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Ejemplo
          p.mb-2.text-center En la extracción de aceites o mantecas, pueden usarse para purificar el producto extraído.
    .d-none
      img(src='@/assets/curso/tema2/29.svg' alt='')
      img(src='@/assets/curso/tema2/30.svg' alt='')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 8. 
          | #[em Decantador centrifugador]
        img(src='@/assets/curso/tema2/31.png' alt='Se describe un equipo industrial de forma cilíndrica montado sobre una base robusta, con un motor lateral acoplado y una salida frontal para descarga del producto procesado. Posee puntos de sujeción superiores, una carcasa cerrada para el sistema interno y conexiones inferiores para operaciones de mantenimiento o flujo de materiales. Su diseño corresponde a un sistema continuo de procesamiento, separación o extracción en líneas productivas de cacao y otros granos.')


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Filtración y tamizado


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-5.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima6(src='@/assets/curso/tema2/27.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Función
          p.mb-2.text-center Separan partículas sólidas finas de líquidos o separan sólidos según tamaño.
      .col-lg-5.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima7(src='@/assets/curso/tema2/28.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Aplicación
          p.mb-2.text-center En la etapa final de purificación del aceite o manteca.
    .d-none
      img(src='@/assets/curso/tema2/29.svg' alt='')
      img(src='@/assets/curso/tema2/30.svg' alt='')


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 9. 
          | #[em Tamizador]
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            img(src='@/assets/curso/tema2/32.png' alt='Se trata de un equipo circular compuesto por varias secciones superpuestas que funcionan como niveles de separación. Incorpora una tapa superior, salidas laterales para la descarga del material clasificado y una base con resortes que permiten la vibración controlada durante el proceso de tamizado. Su diseño favorece la selección y clasificación de partículas según su tamaño.')


    separador
    #t_2_6.titulo-segundo.mb-5
      h2 2.6  Equipos auxiliares

    
    p.mb-5 En la transformación del grano, además de los equipos principales para limpieza, secado, molienda y tostado, es fundamental contar con una serie de equipos auxiliares que facilitan el manejo, transporte y control del producto durante todo el proceso. Estos dispositivos contribuyen a mejorar la eficiencia operativa, garantizar la seguridad alimentaria y optimizar el flujo de producción.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Tolvas


    p.mb-5 Sirven para el almacenamiento temporal y dosificación controlada del grano.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 10. 
          | #[em Tolvas]
        img(src='@/assets/curso/tema2/33.png' alt='Una persona se encuentra realizando una evaluación sensorial de granos de cacao sostenidos entre sus manos, mientras trabaja en un entorno equipado con maquinaria para procesamiento. La escena refleja una actividad de control de calidad en la que se revisan características del producto en una etapa del proceso industrial.')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla presenta información sobre las tolvas, indicando que su función es almacenar temporalmente el grano entre las etapas del proceso y facilitar su vaciado mediante una forma cónica. Se destacan como ventajas el flujo continuo y la dosificación controlada hacia las máquinas. Los materiales más comunes para su fabricación son acero inoxidable, galvanizado y plástico alimentario.')
          h5 Tabla 6. 
          | #[em Tolvas]
        .tabla-a.tab6
          table
            thead
              tr
                th Función
                th Ventajas
                th Materiales
            tbody
              tr
                td
                  p.mb-0 Almacenan temporalmente el grano entre etapas del proceso.
                  p.mb-0 Puede ser cónica para facilitar el vaciado.
                td
                  p.mb-0 - Permiten flujo continuo.
                  p.mb-0 - Ayudan a dosificar la entrada en máquinas.
                td
                  p.mb-0 Acero inoxidable, galvanizado, plástico alimentario.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Bandas transportadoras

    
    p.mb-5 Encargadas de movilizar el producto entre las diferentes etapas sin dañarlo ni contaminarlo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 11. 
          | #[em Banda transportadora]
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            img(src='@/assets/curso/tema2/34.png' alt='Se trata de un transportador industrial formado por una banda continua sostenida sobre una estructura metálica con patas regulables. Incluye un sistema motorizado lateral que permite el desplazamiento del material a lo largo de la superficie, facilitando el movimiento ordenado de productos dentro de una línea de producción.')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla presenta información sobre las bandas transportadoras, destacando que su función es mover el grano en sentido horizontal o vertical entre diferentes procesos sin dañarlo ni contaminarlo. Entre sus ventajas se incluyen la automatización del flujo de producción y la reducción de mano de obra. Los tipos más comunes son las de banda de goma, correa modular y tornillo sinfín.')
          h5 Tabla 7. 
          | #[em Bandas transportadoras]
        .tabla-a.tab7
          table
            thead
              tr
                th Función
                th Ventajas
                th Tipos
            tbody
              tr
                td
                  p.mb-0 - Mueven el grano horizontal o verticalmente entre procesos.
                  p.mb-0 - Deben evitar dañar o contaminar el grano.
                td
                  p.mb-0 - Automatización del flujo de producción.
                  p.mb-0 - Reducción de mano de obra.
                td
                  p.mb-0 - De banda de goma.
                  p.mb-0 - Correa modular.
                  p.mb-0 - Tornillo sinfín.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Balanzas y básculas

    
    p.mb-5 Permiten llevar un control preciso del peso en cada fase, asegurando la trazabilidad y el cumplimiento de normas de calidad.
  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 12. 
          | #[em Balanzas y básculas]
        img(src='@/assets/curso/tema2/35.png' alt='Se presenta un conjunto variado de instrumentos para determinar el peso, incluyendo balanzas mecánicas, electrónicas, de plato, de bandeja, de resorte y de contrapesos. Cada dispositivo posee estructuras y mecanismos distintos, lo que permite apreciar diferentes formas tradicionales y modernas de medición en procesos comerciales e industriales.')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4(alt=' La tabla presenta las funciones, la importancia y los tipos de básculas y balanzas utilizadas en los procesos productivos. Indica que su función principal es controlar la cantidad de grano que entra y sale en cada etapa, lo cual permite garantizar la trazabilidad, el rendimiento y el control del inventario. Además, se clasifican en tres tipos: mecánicas, digitales y aquellas conectadas a sistemas de control automatizado (PLC).')
          h5 Tabla 8. 
          | #[em Básculas y balanzas]
        .tabla-a.tab8
          table
            thead
              tr
                th Función
                th Importancia
                th Tipos
            tbody
              tr
                td
                  p.mb-0 Controlan la cantidad de grano que entra y sale en cada etapa.
                td
                  p.mb-0 Garantiza trazabilidad, rendimiento y control de inventario.
                td
                  p.mb-0 - Mecánicas.
                  p.mb-0 - Digitales.
                  p.mb-0 - Con conexión a sistemas de control (PLC).


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bg4.p-4.mb-0
          h5.mb-0.mt-lg-4.mb-lg-4.text-center El uso adecuado de estos equipos auxiliares es clave para mantener un proceso continuo, minimizar pérdidas y garantizar que el grano llegue en óptimas condiciones a cada etapa de transformación.


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
