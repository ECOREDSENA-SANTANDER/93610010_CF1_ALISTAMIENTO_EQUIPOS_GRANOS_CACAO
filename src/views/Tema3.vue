<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Componentes y funcionamiento de los equipos


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 Para garantizar un correcto desempeño y una operación segura de los equipos utilizados en la transformación del grano, es fundamental entender sus componentes estructurales, eléctricos y electrónicos, así como los mecanismos de seguridad incorporados. Cada equipo está diseñado para cumplir funciones específicas mediante la integración de diferentes partes mecánicas y sistemas de control que permiten su operación eficiente y confiable.
            br
            br
            p.mb-0 Se describen los principales elementos que componen estos equipos, su funcionamiento básico y las medidas de seguridad que garantizan la protección de los operadores y la integridad del proceso.


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Estructura mecánica


    p.mb-5(data-aos="fade-left") Comprende el conjunto de partes físicas que soportan y permiten el funcionamiento de la máquina.


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Chasis y bastidores
    

    p.mb-5(data-aos="fade-left") Soportes rígidos que mantienen alineados los componentes y garantizan estabilidad.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 13. 
          | #[em Chasis y bastidores]
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-10
            img(src='@/assets/curso/tema3/2.png' alt='Estructura metálica utilizada como soporte o base para equipos industriales o sistemas de procesamiento. Su diseño rígido y ajustable permite brindar estabilidad, facilitar el montaje de componentes y asegurar la correcta distribución del peso durante las operaciones.')


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Ejes y rodamientos

    
    p.mb-5(data-aos="fade-right") Facilitan el movimiento giratorio o lineal de piezas móviles.

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 14. 
          | #[em Ejes y rodamientos]
        img(src='@/assets/curso/tema3/3.png' alt='Se aprecia un conjunto mecánico compuesto por un eje cilíndrico que atraviesa varias piezas de rodamiento, las cuales permiten el giro suave y estable del sistema. El conjunto incluye soportes que fijan el eje en su posición y garantizan el adecuado funcionamiento en mecanismos rotativos industriales.')


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Elementos de transmisión

    
    p.mb-5(data-aos="fade-left") Como poleas, correas, engranajes o cadenas que transmiten potencia entre motores y partes móviles.

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 15. 
          | #[em Elementos de Transmisión]
        img.mb-0.d-none.d-md-block(src='@/assets/curso/tema3/14.png' alt='Se presentan tres mecanismos de transmisión mecánica dispuestos lado a lado. El primero corresponde a un conjunto de poleas unidas por una banda para transferir movimiento. El segundo contiene ruedas que interactúan por contacto directo para generar fricción y desplazamiento. El tercero está conformado por múltiples engranajes acoplados entre sí para transmitir potencia mediante el acople de dientes.')
      
        .row.justify-content-center.align-items-center.mb-3.img-mobile
          .col-12
            img.mb-3(src='@/assets/curso/tema3/4.png' alt='Se presentan tres mecanismos de transmisión mecánica dispuestos lado a lado. El primero corresponde a un conjunto de poleas unidas por una banda para transferir movimiento. El segundo contiene ruedas que interactúan por contacto directo para generar fricción y desplazamiento. El tercero está conformado por múltiples engranajes acoplados entre sí para transmitir potencia mediante el acople de dientes.')
            h4.mb-lg-0.mb-5.text-center Sistema de poleas
          .col-12
            img.mb-3(src='@/assets/curso/tema3/5.png' alt='Se presentan tres mecanismos de transmisión mecánica dispuestos lado a lado. El primero corresponde a un conjunto de poleas unidas por una banda para transferir movimiento. El segundo contiene ruedas que interactúan por contacto directo para generar fricción y desplazamiento. El tercero está conformado por múltiples engranajes acoplados entre sí para transmitir potencia mediante el acople de dientes.')
            h4.mb-lg-0.mb-5.text-center Ruedas de fricción
          .col-12
            img.mb-3(src='@/assets/curso/tema3/6.png' alt='Se presentan tres mecanismos de transmisión mecánica dispuestos lado a lado. El primero corresponde a un conjunto de poleas unidas por una banda para transferir movimiento. El segundo contiene ruedas que interactúan por contacto directo para generar fricción y desplazamiento. El tercero está conformado por múltiples engranajes acoplados entre sí para transmitir potencia mediante el acople de dientes.')
            h4.mb-0.text-center Tren de engranajes


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Partes de trabajo


    p.mb-5(data-aos="fade-right") Como martillos en molinos, tambores en tostadoras, mallas en zarandas, entre otros.


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .bg6.p-4
          h5.mb-0.text-center.text-white Martillos en molinos
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .bg6.p-4
          h5.mb-0.text-center.text-white Tambores en tostadoras
      .col-lg-4.col-md-6.col-10.mb-0
        .bg6.p-4
          h5.mb-0.text-center.text-white Mallas en zarandas



    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Componentes eléctricos o electrónicos


    p.mb-5(data-aos="fade-right") Para garantizar el funcionamiento eficiente de los equipos, se incorporan sistemas eléctricos y electrónicos encargados del control, la automatización y la operación de los distintos mecanismos.



    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Motores eléctricos


    p.mb-0(data-aos="fade-right") Transforman la energía eléctrica en energía mecánica, generando el movimiento necesario en las partes móviles de los equipos o sistemas de producción.


    .row.fondo3.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .col-lg-12

        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .titulo-sexto.mb-4
              h5 Figura 16. 
              | #[em Motor eléctrico]
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10
                img(src='@/assets/curso/tema3/7.png' alt='Dispositivo electromecánico que convierte la energía eléctrica en energía mecánica mediante la rotación de un eje. Se utiliza para accionar distintos equipos industriales, proporcionando movimiento continuo y controlado en procesos automatizados o de producción.')


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Interruptores y botones

    
    p.mb-5(data-aos="fade-left") Dispositivos de control que permiten activar, desactivar o regular manualmente el funcionamiento de un circuito o equipo. Son elementos esenciales en los sistemas de mando, ya que facilitan la operación segura y precisa de los procesos eléctricos o electrónicos.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 17. 
          | #[em Interruptores y botones]
        img(src='@/assets/curso/tema3/8.png' alt='Se presentan interruptores y botones distribuidos en dos filas. Cada elemento está identificado con funciones específicas como activación de calentamiento, encendido de motor, cambio de modo operativo, inicio de proceso y parada de emergencia, lo que permite gestionar diferentes acciones dentro de un sistema industrial.')


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Sensores

    
    p.mb-5(data-aos="fade-right") Detectan parámetros como temperatura, humedad, velocidad o posición para asegurar un funcionamiento óptimo.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 18. 
          | #[em Sensores]
        img(src='@/assets/curso/tema3/9.png' alt='Se aprecia una persona manipulando un módulo electrónico que incluye una pantalla donde se leen valores de temperatura y humedad, conectado a una placa de prototipado. El conjunto corresponde a un sistema de medición en el que intervienen sensores integrados para registrar variables ambientales durante una prueba o montaje experimental.')


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Controladores o PLC (controlador lógico programable)

    
    p.mb-0(data-aos="fade-left") Automatizan procesos, regulan variables y facilitan la programación de ciclos.


    .row.fondo3.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-right")
      .col-lg-12

        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .titulo-sexto.mb-4
              h5 Figura 19. 
              | #[em Controladores]
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9
                img(src='@/assets/curso/tema3/10.png' alt='Se presenta un dispositivo electrónico utilizado para automatización industrial, compuesto por una carcasa modular con puertos de conexión y una pantalla integrada para supervisar funciones del sistema. Incluye un panel de navegación que permite configurar parámetros y controlar procesos de manera programada dentro de una planta o equipo automatizado.')


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Paneles de control

    
    p.mb-5(data-aos="fade-right") Donde el operador puede monitorear y ajustar parámetros.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 20. 
          | #[em Panel de control]
        img(src='@/assets/curso/tema3/11.png' alt='Se presenta un dispositivo electrónico utilizado para automatización industrial, compuesto por una carcasa modular con puertos de conexión y una pantalla integrada para supervisar funciones del sistema. Incluye un panel de navegación que permite configurar parámetros y controlar procesos de manera programada dentro de una planta o equipo automatizado.')


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Protecciones eléctricas

    
    p.mb-5(data-aos="fade-left") Como fusibles, disyuntores o relés para evitar daños por sobrecarga o cortocircuitos.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 21. 
          | #[em Protecciones eléctricas]
        img(src='@/assets/curso/tema3/12.png' alt='Se aprecia un conjunto de dispositivos modulares utilizados para interrumpir o limitar el paso de corriente en instalaciones eléctricas. Cada unidad cuenta con mecanismos de accionamiento manual y conexiones superiores e inferiores que permiten su integración en tableros de distribución para proteger circuitos ante sobrecargas o fallas.')


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bg7.p-4.mb-0
          h5.mb-0.mt-lg-4.mb-lg-4.text-center Nota: estos componentes son clave para una operación segura, precisa y eficiente.
    
  
    
    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Mecanismos de seguridad

    
    p.mb-5(data-aos="fade-right") Para proteger a los operadores y evitar daños en los equipos, es imprescindible que las máquinas cuenten con mecanismos de seguridad.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 22. 
          | #[em Señales y advertencias]
        img(src='@/assets/curso/tema3/13.png' alt='Se presenta un tablero con símbolos de prohibición, advertencia y obligación utilizados en entornos laborales. Incluye indicaciones relacionadas con restricciones de acceso, riesgos eléctricos y exigencia de elementos de protección personal, con el fin de orientar comportamientos seguros en el área de trabajo.')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla presenta diferentes mecanismos de seguridad empleados en equipos industriales, junto con su función principal. Incluye elementos como guardas protectoras, paradas de emergencia, sistemas de bloqueo, sensores y señalizaciones, todos orientados a prevenir accidentes, evitar daños y alertar sobre posibles riesgos durante la operación de las máquinas.')
          h5 Tabla 9. 
          | #[em Mecanismos de seguridad]
        .tabla-a.tab9
          table
            thead
              tr
                th Mecanismo
                th Función
            tbody
              tr
                td Guardas y cubiertas protectoras.
                td Impiden el acceso a partes móviles peligrosas.
              tr
                td Paradas de emergencia.
                td Botones o interruptores que permiten detener la máquina inmediatamente en caso de accidente.
              tr
                td Sistemas de bloqueo y enclavamiento.
                td Aseguran que la máquina no funcione si las cubiertas no están correctamente colocadas.
              tr
                td Sensores de sobrecarga o temperatura.
                td Previenen daños al detectar condiciones anormales.
              tr
                td Señalización y advertencias.
                td Indicaciones visibles y auditivas para alertar sobre riesgos.
         

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-0
          p.mb-0.mt-lg-4.mb-lg-4.text-center La implementación de estos mecanismos es fundamental para cumplir con normas de seguridad industrial y proteger la integridad física de los trabajadores.
    

</template>

<script>
export default {
  name: 'Tema3',
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
