<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Procesos de transformación del grano
      

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La transformación del grano es una actividad fundamental en las cadenas agroindustriales, que convierte los granos en productos listos para el consumo humano o como materia prima para otros procesos industriales. Con este proceso se agrega valor, se mejora la conservación del producto y se da respuesta a las exigencias del mercado en términos de calidad, presentación y seguridad alimentaria. 
            br
            br
            p.mb-0 A través de una secuencia de operaciones físicas, mecánicas o térmicas, la transformación del grano permite estandarizar características como el tamaño, la humedad, el contenido nutricional y el sabor, generando productos como harinas, café tostado, cacao en polvo, cereales procesados, entre otros.
    
    
    p.mb-0 Este proceso requiere no solo conocimiento técnico sobre las etapas y equipos involucrados, sino también una planificación adecuada, condiciones de higiene óptimas y el cumplimiento de normativas nacionales e internacionales, especialmente en lo relacionado con la inocuidad y la calidad.
   
   
    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 ¿Qué es la transformación del grano?


    p.mb-5 La transformación del grano se refiere al conjunto de operaciones destinadas a cambiar las condiciones físicas, químicas o microbiológicas del grano crudo para convertirlo en un producto apto para el consumo o uso industrial.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Operaciones para transformación del grano


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/2.png' alt='AvatarTop')
            h4.text-center.mb-4 Limpieza
            p.mb-2.text-center Eliminación de impurezas, tierra, piedras, restos vegetales, entre otros.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/3.png' alt='AvatarTop')
            h4.text-center.mb-4 Secado
            p.mb-2.text-center Reducción del contenido de humedad para evitar fermentación o desarrollo de hongos.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/4.png' alt='AvatarTop')
            h4.text-center.mb-4 Trilla y descascarado
            p.mb-2.text-center Separación de la cáscara o envoltura del grano.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/5.png' alt='AvatarTop')
            h4.text-center.mb-4 Tostado
            p.mb-2.text-center Aplicación de calor para desarrollar sabores y reducir humedad.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/6.png' alt='AvatarTop')
            h4.text-center.mb-4 Molienda
            p.mb-2.text-center Reducción del tamaño del grano para obtener harinas, polvos o pastas.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/7.png' alt='AvatarTop')
            h4.text-center.mb-4 Tamizado y clasificación
            p.mb-2.text-center Separación por tamaño o calidad.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/8.png' alt='AvatarTop')
            h4.text-center.mb-4 Empaque
            p.mb-2.text-center Acondicionamiento del producto para su almacenamiento y distribución.


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-md-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos procesos pueden variar según el tipo de grano, el producto final deseado y el nivel de tecnificación del sistema productivo. 
            br
            br
            p.mb-0 En cada etapa es crucial el uso de equipos específicos y el seguimiento de protocolos de calidad y seguridad.



    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Importancia del alistamiento previo de los equipos


    p.mb-5 El alistamiento de los equipos es una etapa previa al inicio de la operación que asegura que todas las máquinas e instrumentos estén en condiciones óptimas de funcionamiento. Su importancia radica en los siguientes aspectos:

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/tema1/10.png' alt='AvatarTop')
      .col-lg-9
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0
          .row.justify-content-center.align-items.p-0(titulo="Prevención de fallas técnicas")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Un equipo mal calibrado, sucio o con piezas desgastadas puede fallar durante el proceso, ocasionando frenos en la producción, daños en el producto o accidentes.
          .row.justify-content-center.align-items.p-0(titulo="Garantía de la calidad del producto")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Equipos correctamente alistados permiten una transformación uniforme, evitando defectos como quemados, trituración excesiva, contaminación cruzada o pérdida de aroma y sabor.
          .row.justify-content-center.align-items.p-0(titulo="Cumplimiento de normativas")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Las normas de #[b Buenas Prácticas de Manufactura (BPM)] y los sistemas de #[b Análisis de Peligros y Puntos Críticos de Control (HACCP, por sus siglas en inglés)] exigen el mantenimiento y la verificación previa de los equipos antes del contacto con los alimentos.
          .row.justify-content-center.align-items.p-0(titulo="Eficiencia en el proceso")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Un buen alistamiento minimiza pérdidas de tiempo, optimiza el uso de energía y recursos, y mejora la productividad.


    .titulo.mb-5
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Actividades claves de alistamiento


    .row.fondo1.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
      .col-lg-12
        
        .row.justify-content-center.align-items-center.mb-lg-3.mb-0
          .col-lg-7
            ul.lista-ul.mb-4
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Limpieza interna y externa de los equipos.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Verificación de calibración y funcionamiento.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Inspección de seguridad (guardas, frenos, sensores).
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Revisión de conexiones eléctricas, de gas o hidráulicas.
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Comprobación de herramientas auxiliares y accesorios.
            .bg3.p-4
              h4.mb-0 El alistamiento debe ser realizado por personal capacitado y documentado en formatos de control o listas de chequeo, lo cual facilita la trazabilidad y el cumplimiento de estándares de calidad.
          .col-lg-5
            img(src='@/assets/curso/tema1/11.png' alt='AvatarTop')



    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Tipos de granos (café, cacao, maíz, etc.) y procesos asociados

    
    p.mb-5 Los granos son semillas secas de diversas plantas cultivadas que constituyen una de las bases de la alimentación humana y animal a nivel mundial. Cada tipo de grano requiere procesos específicos para su transformación, debido a sus características físicas, químicas y usos finales.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla presenta diferentes tipos de granos (cacao, café, maíz y otros cereales) y detalla las principales etapas de su procesamiento, el objetivo de cada una, el proceso clave y el producto final obtenido. Resume cómo cada grano requiere procedimientos específicos (como fermentación, tostado, molienda o cocción) para alcanzar productos con características organolépticas y funcionales distintas.')
          h5 Tabla 1. 
          | #[em Tipos de grano]

        .tabla-a.tab1.mb-2
          table
            thead
              tr
                th Producto
                th Etapas del proceso
                th Objetivo
                th Proceso clave
                th Producto final
            tbody
              tr
                td.left #[b Cacao]
                td
                  p.mb-0.left - Fermentación y secado de las semillas frescas.
                  p.mb-0.left - Limpieza y selección.
                  p.mb-0.left - Tostado (liberación de aromas y desarrollo de sabor).
                  p.mb-0.left - Descascarillado (remoción de la cáscara).
                  p.mb-0.left - Molienda (obtención de licor de cacao).
                  p.mb-0.left - Prensado o pulverizado (separación de manteca y cacao en polvo).
                td.left Desarrollar el sabor, aroma y textura del cacao, base para productos derivados como coberturas, chocolates y bebidas.
                td.left Fermentación y tostado.
                td.left Chocolate, licor de cacao, manteca y cacao en polvo.
              tr
                td.left #[b Café]
                td
                  p.mb-0.left - Recepción y clasificación.
                  p.mb-0.left - Secado (natural o mecánico).
                  p.mb-0.left - Trilla (remoción del pergamino).
                  p.mb-0.left - Tostado (desarrollo de aroma, color y sabor).
                  p.mb-0.left - Molienda (según tipo de preparación).
                  p.mb-0.left - Empaque.
                td.left Obtener un producto con aroma y sabor característicos, libre de defectos físicos y microbiológicos.
                td.left Tostado y molienda.
                td.left Café tostado, molido o instantáneo.
              tr
                td.left #[b Maíz]
                td
                  p.mb-0.left - Desgranado (si se recibe en mazorca).
                  p.mb-0.left - Limpieza y clasificación.
                  p.mb-0.left - Secado (para almacenamiento o procesamiento).
                  p.mb-0.left - Molienda (seca o húmeda).
                  p.mb-0.left - Cocción (nixtamalización en procesos tradicionales).
                  p.mb-0.left - Tamizado y empaque.
                td.left Producir materia prima en forma de harina o masa para diferentes aplicaciones alimentarias.
                td.left Molienda y cocción.
                td.left Harina, masa, #[em snacks], cereales, tortillas, entre otros.
              tr
                td.left #[b Otros granos (arroz, trigo, quinua, sorgo, cebada, etc.)]
                td
                  p.mb-0.left - Secado y almacenamiento.
                  p.mb-0.left - Descascarillado o pulido.
                  p.mb-0.left - Molienda o trituración.
                  p.mb-0.left - Clasificación y empaque.
                td.left Obtener materia prima o productos intermedios de consumo o transformación secundaria.
                td.left Pulido, clasificación y molienda.
                td.left Arroz blanco o integral, harinas y sémolas para panadería y pastelería.
        
        figcaption Fuente: SENA, (2025)


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cada grano tiene propiedades particulares, como tamaño, dureza, contenido de almidón o aceites, lo que define el tipo de maquinaria y el proceso necesario para su transformación efectiva.
            br
            br
            p.mb-0 La transformación del grano es mucho más que un proceso técnico; es una actividad estratégica dentro de la cadena de valor agroindustrial. Conocer los tipos de granos, sus necesidades específicas, y contar con equipos debidamente alistados, garantiza la eficiencia, la calidad del producto final y el cumplimiento de las exigencias del mercado. Este conocimiento es esencial para quienes trabajan en plantas agroindustriales, cooperativas, emprendimientos rurales o industrias alimentarias.



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
