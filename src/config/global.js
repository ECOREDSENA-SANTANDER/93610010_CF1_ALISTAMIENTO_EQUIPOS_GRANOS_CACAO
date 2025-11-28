export default {
  global: {
    Name: 'Equipos e instrumentos en la transformación del grano',
    Description:
      'Este proceso consiste en reconocer y describir los distintos equipos e instrumentos utilizados en las etapas de transformación del grano, como limpieza, secado, molienda, tostado y empaque. La identificación permite conocer el nombre, tipo y función de cada equipo, mientras que la caracterización incluye aspectos técnicos como capacidad, fuente de energía, materiales de fabricación, componentes principales y condiciones óptimas de operación. Esta información es clave para seleccionar adecuadamente los equipos según el tipo de grano, el volumen de producción y los requisitos de calidad e inocuidad del proceso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procesos de transformación del grano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es la transformación del grano?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia del alistamiento previo de los equipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Tipos de granos (café, cacao, maíz, etc.) y procesos asociados',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Equipos utilizados en la transformación del grano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Equipos para la limpieza',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Equipos para el secado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Equipos para la molienda',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Equipos para la molienda',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Equipos de separación y extracción en la transformación del grano',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Equipos auxiliares',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Componentes y funcionamiento de los equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura mecánica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Componentes eléctricos o electrónicos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Mecanismos de seguridad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Clasificación y criterios de selección de los equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Por tipo de grano',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Por capacidad de procesamiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Por fuente de energía',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Por normativa de seguridad e higiene',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Buenas Prácticas de Manufactura (BPM)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Equipos utilizados en la transformación del grano.',
      referencia:
        'Portal Envira Ingenieros Asesores. (2022, 27 de junio). ¿Qué es el sistema HACCP? Revista Industria Alimentaria.',
      tipo: 'Revista',
      link:
        'https://www.industriaalimentaria.org/blog/contenido/que-es-el-sistema-haccp',
    },
    {
      tema: 'Componentes y funcionamiento de los equipos.',
      referencia:
        'Cooperación Alemana al Desarrollo – GIZ. (2013). Catálogo de maquinaria para procesamiento de cacao [PDF]. Energypedia.',
      tipo: 'Pdf',
      link: 'https://energypedia.info/images/0/08/Maquinaria_para_Cacao.pdf',
    },
    {
      tema: 'Buenas Prácticas de Manufactura.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Condiciones de instalación y funcionamiento para la producción del chocolate. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PjwXkTIFZ4I',
    },
  ],
  glosario: [
    {
      termino: 'Aspiradora industrial',
      significado: 'Remueve polvo y residuos livianos del grano.',
    },
    {
      termino: 'Clasificadora',
      significado: 'Separa granos por tamaño, forma o densidad.',
    },
    {
      termino: 'Compuerta automática',
      significado: 'Regula la descarga en tolvas o silos.',
    },
    {
      termino: 'Controlador de temperatura',
      significado: 'Regula el calor en procesos.',
    },
    {
      termino: 'Criba',
      significado: 'Superficie perforada que clasifica materiales.',
    },
    {
      termino: 'Descascaradora',
      significado: 'Retira la cáscara del grano.',
    },
    {
      termino: 'Desintegrador',
      significado: 'Reduce el grano a polvo fino.',
    },
    {
      termino: 'Detector de metales',
      significado: 'Identifica metales contaminantes.',
    },
    {
      termino: 'Dosificador',
      significado: 'Regula el flujo de grano.',
    },
    {
      termino: 'Elevador de cangilones',
      significado: 'Transportador vertical de granos.',
    },
    {
      termino: 'Envasadora',
      significado: 'Empaca el producto final.',
    },
    {
      termino: 'Etiquetadora',
      significado: 'Coloca etiquetas en los empaques.',
    },
    {
      termino: 'Extractor de polvo',
      significado: 'Sistema que limpia el aire del proceso.',
    },
    {
      termino: 'Filtro de aire',
      significado: 'Purifica el aire del sistema.',
    },
    {
      termino: 'Higrómetro',
      significado: 'Mide la humedad relativa.',
    },
    {
      termino: 'Humectadora',
      significado: 'Agrega humedad al grano antes de molerlo.',
    },
    {
      termino: 'Imán industrial',
      significado: 'Retira metales del flujo de grano.',
    },
    {
      termino: 'Limpieza previa',
      significado: 'Etapa inicial para quitar impurezas gruesas.',
    },
    {
      termino: 'Mezcladora',
      significado: 'Homogeniza ingredientes o granos.',
    },
    {
      termino: 'Molino',
      significado:
        'Máquina que muele granos para convertirlos en harina o sémola.',
    },
    {
      termino: 'Monitor de flujo',
      significado: 'Mide velocidad del grano.',
    },
    {
      termino: 'Secador rotatorio',
      significado: 'Usa tambor giratorio para secar el grano.',
    },
    {
      termino: 'Secadora',
      significado:
        'Equipo que reduce la humedad del grano para su almacenamiento seguro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chocolates Artesanos Isabel. (s. f.). Tostado del cacao. El tostado del cacao para elaborar chocolate artesano: ¿en qué consiste y por qué es tan importante?',
      link: 'https://chocolatesartesanosisabel.com/tostado-del-cacao/',
    },
    {
      referencia:
        'Cotecno. (s. f.). Importancia del tamizado en diferentes industrias.',
      link:
        'https://www.cotecno.cl/importancia-del-tamizado-en-diferentes-industrias/',
    },
    {
      referencia:
        'Grupo Navarro. (2023, 2 de octubre). Importancia de las Secadoras para Granos: la clave para granos de calidad. Grupo Navarro.',
      link:
        'https://gruponavarro.net/2023/10/02/importancia-de-las-secadoras-para-granos/',
    },
    {
      referencia:
        'Loyal. (2024, 17 de septiembre). Fabricación de chocolate: el papel de los molinos de bolas y los trituradores de cacao en la alquimia del chocolate.',
      link: 'https://loyal-machine.com/es/blog/chocolate-milling/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
