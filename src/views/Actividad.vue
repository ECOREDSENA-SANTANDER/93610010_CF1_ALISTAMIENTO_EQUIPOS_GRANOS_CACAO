<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad_Completar_Frases
      //<ActividadCompletar :parrafo="parrafo"/>

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
//import ActividadCompletar from '@/views/plantilla/actividadCompletar/ActividadCompletar.vue'
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    //ActividadCompletar,
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Equipos e instrumentos en la transformación del grano.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar equipos según uso y etapas del proceso.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La transformación del grano es una actividad que convierte los granos en productos listos para el consumo humano o como materia prima para otros procesos industriales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El proceso de limpieza consiste en la eliminación de impurezas, tierra, piedras, restos vegetales, entre otros.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El proceso de tostado consiste en la reducción del tamaño del grano para obtener harinas, polvos o pastas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El proceso de tamizado consiste en el acondicionamiento del producto para su almacenamiento y distribución.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La prevención de fallas técnicas es uno de los aspectos importantes en el alistamiento previo de los equipos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Las zarandas, las sopladoras y los separadores hacen parte de los equipos de limpieza.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Los equipos de secado se clasifican en solares y mecánicos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La prensa hidráulica se utiliza para extraer aceites o grasas de los granos molidos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El tamizador se utiliza en la etapa final de purificación del aceite o manteca de cacao.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Las Buenas Prácticas de Manufactura (BPM) son un conjunto de procedimientos, normas y controles que garantizan la producción de alimentos seguros, de calidad y aptos para el consumo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica equipos e instrumentos según su uso y etapas del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha identificado con claridad equipos según uso y etapas del proceso de transformación del grano.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
