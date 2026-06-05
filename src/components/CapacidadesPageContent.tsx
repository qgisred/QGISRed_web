import Image from "next/image";
import Link from "next/link";

interface SectionHeadingProps {
  title: string;
  id?: string;
}

function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-6" id={id}>
      <span
        className="flex-shrink-0 rounded-full"
        style={{ width: "12px", height: "12px", backgroundColor: "rgb(95, 189, 211)" }}
      />
      <h2
        className="font-semibold"
        style={{ fontSize: "36px", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
      >
        {title}
      </h2>
    </div>
  );
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  return (
    <details className="mb-1 group" style={{ border: "1px solid rgb(220,220,220)" }}>
      <summary
        className="flex items-center justify-between px-4 py-3 cursor-pointer list-none transition-colors hover:bg-gray-100"
        style={{ fontSize: "14px", fontWeight: "600", color: "rgb(0, 9, 25)", backgroundColor: "rgb(252,252,252)" }}
      >
        <span>{title}</span>
        <span className="flex-shrink-0 transition-transform duration-200 group-open:rotate-90 ml-4" style={{ color: "rgb(95, 189, 211)", fontSize: "18px" }}>
          ›
        </span>
      </summary>
      <div className="px-4 pb-4 pt-3" style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6", backgroundColor: "rgb(255,255,255)" }}>
        {children}
      </div>
    </details>
  );
}

interface CapacidadCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

function CapacidadCard({ title, description, href, imageSrc, imageAlt }: CapacidadCardProps) {
  return (
    <div
      className="flex flex-col transition-shadow duration-200 hover:shadow-md"
      style={{ border: "1px solid rgb(230,230,230)", backgroundColor: "rgb(255,255,255)" }}
    >
      {imageSrc && (
        <div style={{ height: "155px", overflow: "hidden", flexShrink: 0 }}>
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            width={400}
            height={155}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold mb-2" style={{ fontSize: "14px", color: "rgb(0, 9, 25)", lineHeight: "1.35" }}>
          <Link href={href as "/"} style={{ color: "inherit", textDecoration: "none" }} className="hover:text-[rgb(95,189,211)] transition-colors">
            {title}
          </Link>
        </h3>
        <p className="mb-4 flex-1" style={{ fontSize: "12px", color: "rgb(80, 80, 80)", lineHeight: "1.6" }}>
          {description}
        </p>
        <Link
          href={href as "/"}
          className="inline-flex items-center gap-1 font-medium transition-colors duration-150"
          style={{ fontSize: "12px", color: "rgb(95, 189, 211)" }}
        >
          Leer más <span style={{ fontSize: "14px" }}>»</span>
        </Link>
      </div>
    </div>
  );
}

interface PrestacionGroupProps {
  title: string;
  items: string[];
}

function PrestacionGroup({ title, items }: PrestacionGroupProps) {
  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-3" style={{ fontSize: "16px", color: "rgb(0, 9, 25)" }}>
        {title}
      </h4>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span
              className="flex-shrink-0 rounded-full mt-1"
              style={{ width: "8px", height: "8px", backgroundColor: "rgb(95, 189, 211)" }}
            />
            <span style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const prestacionesActuales: { group: string; items: string[] }[] = [
  {
    group: "Gestión de Proyecto",
    items: [
      "Gestor de proyectos para facilitar la carga y almacenamiento de los diferentes proyectos",
      "Creación automática de un nuevo proyecto vacío",
      "Creación automática de un proyecto desde un fichero INP",
      "Clonación de proyectos y creación de una copia de seguridad",
    ],
  },
  {
    group: "Datos del Proyecto",
    items: [
      "Edición de los metadatos y propiedades del proyecto",
      "Resumen de las características del proyecto",
      "Gestión de las capas del modelo",
      "Declaración de valores por defecto",
      "Declaración de las opciones del modelo",
    ],
  },
  {
    group: "Herramientas de Edición Gráfica",
    items: [
      "Creación automática de los nudos a medida que se trazan las tuberías",
      "Creación automática de las relaciones topológicas entre todos los elementos cada vez que se necesita, liberando de ello al usuario",
      "Inserción de válvulas y bombas como elementos lineales en puntos intermedios de las tuberías o en nudos",
      "Herramientas para la edición gráfica de todos los elementos básicos de una red (creación, borrado, desplazamiento y edición del trazado)",
      "Herramienta para invertir automáticamente el trazado de tuberías, bombas y válvulas",
      "Herramienta para cambiar el estado de tuberías, bombas y válvulas al toque",
    ],
  },
  {
    group: "Edición de Propiedades",
    items: [
      "Asignación de propiedades por defecto al crear nuevos elementos",
      "Ventanas específicas para editar las propiedades de todos los elementos básicos de la red",
      "Buscador de elementos por su tipo e identificativo Id",
      "Navegador para visitar los elementos vinculados al elemento actual o volver sobre los ya visitados",
      "Selección de múltiples elementos por regiones para su posterior edición",
      "Tratamiento de las demandas múltiples como una capa independiente, integrando la edición de sus propiedades con las de los nudos",
      "Reconocimiento de los emisores como puntos de descarga a la atmósfera siguiendo una ley exponencial",
      "Tratamiento de las fuentes contaminantes como una capa independiente, integrando la edición de sus propiedades con las de los nudos",
    ],
  },
  {
    group: "Asistentes para completar los Datos del Modelo",
    items: [
      "Recálculo automático de las longitudes de las tuberías conforme al CRS",
      "Interpolación automática de las cotas de los nudos a partir de un MDT",
      "Estimación automática de la rugosidad de las tuberías a partir del material y edad de las tuberías",
      "Conversión del coeficiente de rugosidad entre diferentes fórmulas de pérdidas y sistemas de unidades",
      "Asignación automática de demandas a los nudos a partir de consumos declarados por sectores o por puntos",
      "Corrección de las demandas con el rendimiento hídrico por sectores",
      "Asignación de curvas de modulación de la demanda por sectores",
      "Asistente para construir escenarios con demandas múltiples, clasificadas por categorías",
      "Editor avanzado de patrones y curvas de comportamiento de los elementos",
      "Editor avanzado de leyes de control simples y por reglas",
    ],
  },
  {
    group: "Importación/exportación de Datos",
    items: [
      "Importación completa de todos los datos de un fichero INP de EPANET. Detección de errores",
      "Importación de los elementos básicos de la red desde ficheros shape (SHP). Selección de campos",
      "Importación aditiva de componentes desde ficheros shape",
      "Importación/exportación de curvas de modulación y de comportamiento de los elementos desde los Editores correspondientes",
      "Exportación de todos los datos del modelo actual a un fichero INP para continuar los análisis desde EPANET, incluidos los datos de campo si lo hay",
    ],
  },
  {
    group: "Verificación y Depuración de los Datos del Modelo",
    items: [
      "Detección y eliminación de elementos superpuestos",
      "Simplificación del trazado de líneas con vértices alineados",
      "Partición de tuberías creando nudos intermedios",
      "Fusión de tuberías contiguas con las mismas propiedades",
      "Fusión y separación de nudos de demanda",
      "Creación de conexiones en T, o reversión en su caso",
      "Resolución de los cruces de tuberías, creando nudos intermedios o cancelándolos",
      "Verificación de la conectividad de todos los elementos declarados en la red",
      "Verificación del rango de validez para algunas propiedades de los elementos (longitudes, diámetros, materiales y fechas)",
      "Identificación de los distintos sectores hidráulicos y su clasificación en función de la demanda aplicada y las fuentes de suministro",
    ],
  },
  {
    group: "Gestión de Escenarios",
    items: [
      "Asistente para gestionar escenarios de datos cambiando diámetros, rugosidades, cotas, demandas, estados iniciales, calidades iniciales, coeficientes de reacción o fuentes contaminantes",
      "Creación de escenarios combinados modificando varias magnitudes al mismo tiempo",
    ],
  },
  {
    group: "Análisis y visualización de Resultados",
    items: [
      "Ventana específica para editar todas las Opciones de Análisis, ordenadas por categorías",
      "Conexión con la Toolkit 2.2 de EPANET para llevar a cabo las simulaciones. Reconocimiento de todas las funciones",
      "Almacenamiento de los resultados de la simulación en una estructura de datos propia",
      "Visualización de los resultados en mapas de colores por magnitud, a elegir desde el panel de resultados",
      "Definición automática de las leyendas y simbología para observar los resultados, revisable desde QGis",
      "Opción para mostrar el sentido de los flujos mediante flechas",
      "Opción para mostrar los resultados numéricos de la magnitud actual como etiquetas fijas o flotantes",
      "Barra de navegación para observar la evolución de los resultados con el tiempo, para el intervalo de simulación",
    ],
  },
  {
    group: "Extensión para trabajar con Gemelos Digitales",
    items: [
      "Edición y manejo de las acometidas como elementos diferenciados para la carga de demandas al modelo",
      "Importación de las acometidas desde ficheros shape e integración en el Editor de Propiedades",
      "Asistente para el trazado automático de las acometidas mediante perpendiculares a las tuberías o conectándolas con nudos y vértices",
      "Carga de las lecturas de contador automatizadas a las acometidas y traslado automático de los consumos a los nudos del modelo",
      "Integración opcional de las acometidas en el modelo para formar parte de él como tuberías o como nudos",
      "Edición y manejo de las válvulas de corte como elementos diferenciados para controlar el paso del flujo",
      "Importación de las válvulas de corte desde ficheros shape e integración en el Editor de Propiedades",
      "Traslación automática del estado de las válvulas de corte a las tuberías",
      "Identificación de las zonas aisladas por las válvulas de corte y anulación de las demandas en las mismas",
      "Declaración de medidores de diversos tipos, y asociación automática de éstos con los elementos de la red",
      "Importación de los medidores desde ficheros shape e integración en el Editor de Propiedades",
      "Declaración de las señales registradas por cada uno de los medidores y su vinculación con los datos procedentes del SCADA o data-loggers",
      "Importación de las medidas de campo y comparación con los valores simulados desde el entorno de EPANET",
    ],
  },
  {
    group: "Conexión del Gemelo con los Datos Reales",
    items: [
      "Creación de un repositorio propio del proyecto con los datos de campo. Por ahora limitado a los registros de consumos, y las señales del SCADA o data-loggers",
      "Carga del modelo con los datos de campo para un intervalo cualquiera del pasado, dentro del rango cubierto por el repositorio",
    ],
  },
  {
    group: "Herramientas de Exploración",
    items: [
      "Identificación de los sectores de demanda básicos, considerando las válvulas cerradas y la ubicación de los caudalímetros",
      "Trazado del árbol de mínima resistencia de la red, con parámetros configurables, para identificar los trayectos prioritarios del agua",
    ],
  },
  {
    group: "Información",
    items: [
      "Ventana de información sobre la versión instalada, con algunos enlaces básicos y los créditos",
      "Botón de acceso directo al entorno de desarrollo GitHub para reportar incidencias",
    ],
  },
];

const proximasPrestaciones: { group: string; items: string[] }[] = [
  {
    group: "De carácter General de Proyecto",
    items: [
      "Completar algunas opciones del Gestor de Proyectos",
      "Revisar las opciones por defecto, y diferenciarlas a nivel de código, de usuario y de proyecto",
      "Integrar el MDT y la tabla de rugosidades en las especificaciones del proyecto y dinamizar su uso desde el Editor de Propiedades.",
      "Completar las Opciones a nivel de Proyecto (modos para asignar rugosidades, …)",
      "Añadir algunas propiedades adicionales a los elementos actuales. Completar el modelo de datos",
      "Hacer editable la tabla de rugosidades por materiales y edad",
      "Desarrollar un conversor de unidades para todos los datos",
      "Importar ficheros de CAD",
    ],
  },
  {
    group: "Edición de los Elementos",
    items: [
      "Desarrollar una herramienta para mover los elementos superpuestos sobre el trazado de la red",
      "Desarrollar herramientas para clonar elementos y copiar sus propiedades",
      "Añadir un buscador de elementos por Id desde el Menú de Edición",
      "Desarrollar un Editor de Propiedades de elementos en Grup",
    ],
  },
  {
    group: "Asistentes para completar los Datos del Modelo",
    items: [
      "Interpolar las cotas a partir de MDTs declarados como nubes de puntos",
      "Asistente para reasignar los Ids de los componentes",
      "Reorientar el trazado de las tuberías para reducir los casos de caudales negativos",
      "Completar el Editor de Demandas Nodales para asignar a los nudos los consumos declarados por polígonos o tramos lineales.",
      "Clasificar nudos y líneas por sectores en el campo Etiqueta",
      "Aumentar las opciones de verificación y depuración de los datos del modelo",
      "Compatibilizar los ficheros de escenarios con los de EPANET",
    ],
  },
  {
    group: "Nuevos Elementos del Modelo",
    items: [
      "Mejorar la modelación de los depósitos de rotura de carga y de los pequeños depósitos de reserva",
      "Implementar emisores con exponente variable a nivel de nudo",
      "Ampliar la caracterización de las curvas de comportamiento de bombas y válvulas. Curvas por defecto.",
      "Incorporar las turbinas como elementos para recuperar energía",
      "Vincular el consumo energético de los bombeos con la producción solar fotovoltaica",
      "Tratar los puntos de inyección de contaminante como objetos con Id propio, desvinculados de los nudos. Crear un editor específico para sus atributos",
    ],
  },
  {
    group: "Visualización de Datos y Resultados",
    items: [
      "Mejorar toda la iconografía: botones, componentes, simbología, etc.",
      "Simbolizar nudos los emisores con un icono diferente",
      "Aplicar opciones de zoom a la visualización de los componentes",
      "Diferenciar las redes de transporte, arterial y de distribución",
      "Compatibilizar la simbología y el visor de capas de QGIS con la de QGISRed",
      "Generar mapas temáticos a partir de las propiedades de los elementos: diámetros, materiales, edad, rugosidad, cotas, etc",
      "Desarrollar un editor de leyendas propio",
      "Agilizar la representación de resultados y mejorar la navegación sobre el mapa",
      "Completar las opciones de evaluar máximos, mínimos, rangos, medias y desviaciones de los resultados",
      "Desarrollar gráficos de evolución para una o más variables.",
      "Mostrar resultados para eventos intermedios en los gráficos temporales",
      "Desarrollar nuevas ventanas y capas para visualizar y analizar los resultados",
      "Desarrollar herramientas para comparar datos de campo con valores calculados y elaborar informes de calibración propios",
      "Comparar los resultados de distintos escenarios entre sí",
    ],
  },
  {
    group: "Flujos y Balances",
    items: [
      "Potenciar las herramientas de exploración topológica. Trabajar con árboles",
      "Desarrollar herramientas de ayuda para gestionar el trayecto de los flujos en una red",
      "Realizar balances hidráulicos por sectores y mostrarlos en diagramas",
      "Identificar origen y destino de las energías consumidas",
      "Realizar balances de energía por sectores y mostrarlos en diagramas",
      "Mostrar gráficamente los recorridos del flujo a través de las tuberías",
      "Identificar las zonas aguas arriba y aguas abajo de cualquier nudo",
      "Realizar balances de materia por sectores y mostrarlos en diagramas",
      "Identificar las zonas de influencia de las diferentes fuentes de suministro",
      "Superponer las fuentes de procedencia para la sustancia total que llega a un nudo en un instante",
      "Superponer el análisis de calidad para diversas sustancias no reactivas entre sí",
    ],
  },
  {
    group: "Gemelo Digital",
    items: [
      "Crear un Gestor de Acometidas para realizar asignaciones de demanda y otro tipo de operaciones masivas relacionadas con ellas",
      "Completar la asignación de demandas a las acometidas a partir de facturaciones periódicas",
      "Crear un Gestor de Válvulas Manuales para realizar todo tipo de operaciones masivas con las válvulas",
      "Conectar el modelo con el histórico de estados de las válvulas de corte",
      "Completar la identificación de cerradas (polígonos de corte) y crear estructuras de datos asociadas a las cerradas",
      "Conectar el modelo con el histórico de cerradas. Dinamizar el aislamiento de sectores",
      "Completar la caracterización de los sectores de demanda y crear estructuras de datos asociadas",
      "Enlazar simulaciones para periodos prolongados sobre datos reales, y evaluar KPIs para dichos periodos",
      "Añadir los contadores domiciliarios como un nuevo componente del Gemelo. Crear un Gestor de Contadores",
      "Ajustar las demandas a los caudales inyectados por sectores. Consideración de las medidas horarias de la telelectura.",
      "Distribuir las fugas latentes entre los nudos de la red y las acometidas",
      "Añadir las fugas puntuales como un nuevo elemento del Gemelo. Crear un Gestor de Fugas puntuales",
      "Incorporar nuevas leyes para caracterizar las fugas",
      "Personalizar los parámetros de las curvas de demanda dependientes de la presión (PDD) a nivel de nudo",
      "Incorporar nuevas leyes de comportamiento para las PDDs",
      "Incorporar los aljibes domiciliarios como nuevos elementos del Gemelo Digital",
      "Incorporar otros elementos al Gemelo Digital, como Hidrantes, Bocas de Riego, Válvulas de llenado y vaciado, Ventosas, etc",
    ],
  },
];

const historico = [
  {
    version: "0.18",
    fecha: "30 abril 2026",
    items: [
      "Mejoras en el Gestor de Proyectos. Nuevos botones para Mover y Exportar proyectos, y nuevas opciones para Renombrar proyectos.",
      "Identificación de todas las capas gestionadas por QGISRed mediante un Id propio, en lugar de hacerlo por el nombre, lo que permite trabajar en varios idiomas.",
      "Revisión de los símbolos, etiquetas y avisos del mapa asociados a todas las capas gestionadas por QGISRed.",
      "Mayor integración del Editor de Propiedades de los Elementos, manteniendo las propiedades de las capas, y el refresco de los datos en todas las ventanas afectadas, incluida la tabla de atributos.",
      "Almacenamiento del estilo de todas las capas gestionadas por QGISRed en ficheros .qml a tres niveles: por defecto, nivel de usuario y nivel de proyecto.",
      "Almacenamiento en una tabla propia de todas las magnitudes manejadas por QGISRed, especificando las unidades y decimales a mostrar en los distintos sistemas de unidades y según la casuística.",
      "Creación de un Editor de Leyendas propio para personalizar rangos o clases, colores y tamaños de todas las leyendas manejadas por QGISRed.",
      "Asistentes para personalizar las leyendas automáticamente.",
      "Adición de un nuevo menú y una nueva barra de herramientas para alojar nuevas las opciones orientadas a realizar consultas sobre datos y resultados.",
      "Reorganización de las capas del grupo de Consultas, y del almacenamiento de los ficheros shp correspondientes en la estructura de carpetas del proyecto.",
      "Nueva herramienta para localizar en el mapa cualquier elemento a través de su Id e identificar los elementos conectados, con la opción de navegar a través de los mismos.",
      "Nuevo panel para observar los datos y resultados de cualquier elemento de la red seleccionado. Sincronización de los resultados con el instante actual de la simulación.",
      "Nuevo diálogo para crear mapas temáticos de algunas magnitudes asociadas a los distintos tipos de elementos manejados por QGISRed.",
      "Nuevo panel para localizar en el mapa los elementos que cumplen determinados criterios en relación a los datos o los resultados. Sincronización con los resultados para el instante actual de la simulación.",
      "Mejora del formato en que se exporta el fichero INP desde QGISRed, similar al que se exportaría desde la Toolkit de EPANET.",
      "Sustitución del motor de cálculo de EPANET 2.2 por la nueva versión 2.3, hasta la revisión más reciente 2.3.5.",
      "Lectura de los resultados de una simulación directamente desde los ficheros binarios de EPANET para una navegación más rápida y ágil.",
      "Incorporación del Informe de Estado al panel de resultados en una nueva pestaña, siempre accesible.",
      "Exportación de todos los resultados de una simulación a un fichero CSV estructurado.",
      "Nueva opción para mostrar diversas estadísticas sobre los resultados a lo largo de todo el periodo de simulación.",
      "Nueva ventana para mostrar la curva de evolución en el tiempo de cualquier magnitud de un elemento a lo largo del periodo de simulación. Posibilidad de superponer varias curvas para la misma o distinta magnitud.",
      "Mejoras en el Constructor de Demandas para las demandas puntuales. Revisión de los algoritmos y carga automática de los enlaces. Nuevo tema para los puntos de demanda.",
      "Revisión de la herramienta de identificación de los sectores hidráulicos y detección de los consumos aislados.",
      "Revisión del algoritmo para identificar cerradas. Detección de los consumos aislados.",
      "Nuevas opciones a nivel de proyecto para trasladar las demandas de las acometidas a los nudos. Clasificación de las demandas por patrones.",
      "Compatibilización de la versión 0.18 con las nuevas versiones de QGIS 4.0.",
      "Traducción de todos los diálogos, paneles, mensajes y nombres de capas de QGISRed al idioma español.",
      "Rediseño de todos los iconos manejados por QGISRed con un aspecto más uniforme y agradable.",
      "Alojamiento en web del manual provisional de QGISRed en inglés y español para su consulta on-line a través de la plataforma colaborativa GitBook.",
      "Mención al Banco Interamericano de Desarrollo (BID) por el soporte financiero a todas las mejoras realizadas en la presente versión 0.18.",
      "Resuelto un problema al cargar los datos de campo relacionado con el separador decimal.",
      "Corregido un error que impedía cancelar la demandas de las zonas que quedan aisladas.",
      "Limitación del tamaño del campo Descripción, usado para informar sobre las demandas de las acometidas cargadas a cada nudo.",
    ],
  },
  {
    version: "0.17",
    fecha: "febrero 2026",
    items: [
      "Resueltas las incompatibilidades con las últimas versiones de QGISRed, hasta la 3.44",
      "Sustitución de la versión 2.2 de la Toolkit de EPANET por la nueva versión 2.3",
      "Nueva herramienta de exploración para identificar los polígonos de corte, resaltando las válvulas manuales y acometidas afectadas",
      "Visualización en los resultados de hasta 13 estados para tuberías, válvulas y bombas",
      "Transferencia de estados y calidades para el encadenamiento de simulaciones en periodos sucesivos",
      "Nuevas opciones para resetear rugosidades, elevaciones y diámetros en el constructor de escenarios",
      "Nueva opción para exportar e importar escenarios con el formato de Epanet",
      "Los proyectos listados en el Gestor de Proyectos pueden ahora reordenarse temporalmente por los diferentes campos pinchando en las cabeceras",
      "Nuevas opciones en el Gestor de Proyectos para Reordenar, Exportar, Borrar y Renombrar proyectos",
      "Nueva pestaña en el diálogo de importación para Importar proyectos de QGISRed",
      "Nuevos botones y opciones de menú para abrir y guardar proyectos",
      "La ruta del fichero .qgz se almacena ahora como una ruta relativa en el fichero metadata.txt",
      "Si al abrir un proyecto de QGISRed, el fichero .qgz asociado no se encuentra, se ofrece ahora la opción de buscarlo",
      "Al abrir un proyecto qgz directamente desde QGIS, si es un proyecto de QGISRed se añade automáticamente al Gestor de Proyectos",
      "Cambios en los iconos y textos de algunas opciones de menú",
      "Cambio en la simbología de algunos elementos: nudos con demanda, demandas múltiples, emisores y fuentes contaminantes)",
      "Las capas del grupo Input se reordenan ahora automáticamente",
      "Junto al nombre de cada capa ahora se muestra el número de elementos que contiene",
      "Todos los elementos ahora muestran su ID al pasar el ratón por encima",
      "Eliminada la notificación por defecto de la presencia de bombas o válvulas con un extremo libre",
      "Ampliada la precisión al escribir ciertos valores numéricos en los shapes",
      "Cambios en el mensaje a la hora de descargar las dependencias necesarias",
      "Ahora el fichero 'metadata.txt' se cierra siempre al abrirlo desde el diálogo About",
      "La tolerancia por defecto al crear un proyecto o importar los shapes es ahora 0, para evitar comportamientos extraños en coordenadas WSG84",
      "Eliminada la creación por defecto del fichero Signals.dbf al crear un proyecto nuevo",
      "Eliminada la creación inesperada del tema de acometidas al realizar algunas operaciones de edición gráfica",
      "Extendida la representación de las curvas de las bombas declaradas por 3 puntos a todo el cuadrante",
      "En caso de declarar el material de una tubería y omitirse la fecha de instalación, se determina su rugosidad como si fuera nueva",
      "Corregido error que impedía añadir bombas y válvulas sobre nudos de grado de conectividad dos",
      "Corregido un error al visualizar la curva de modulación por defecto en el diálogo de patrones, y al declarar o modificar ésta en las opciones de análisis",
      "Corregido un error de almacenamiento de la fecha de instalación de las válvulas de corte.",
      "Corregido un error al interpolar cotas cuando el punto cae en alguno de los extremos de la malla",
      "Corregido un error al repartir las demandas en proporción a la longitud de las tuberías",
      "Exclusión de los extremos de bombas y válvulas en todas las opciones, al asignar las demandas a los nudos desde el Nodal Demand Builder o desde las acometidas",
      "Corregido un error que impedía superponer demandas sobre el mismo nudo en la asignación de consumos puntuales desde el Nodal Demand Builder",
      "Corregido un error al cargar las demandas a partir de una capa de sectores",
      "Corregido un error al confundir el patrón de precios con el patrón de velocidades en la lectura del INP",
      "Corregido un error al importar INPs con fuentes de calidad sin patrón definido",
      "Corregidos algunos errores al importar un INP, relacionados con los formatos de tiempos y las leyes de control temporales",
      "Corregido un error al leer la sección LABELS de un INP, que diferenciaba las mayúsculas de las minúsculas en las palabras clave",
      "Corregidos ciertos errores de importación/exportación de curvas y patrones relacionados con el separador decimal",
      "Corregido un error en el símbolo decimal, en las opciones del modelo PDA",
    ],
  },
  {
    version: "0.16",
    fecha: "14 julio 2022",
    items: [
      "Nuevas opciones en el gestor de demandas nodales para declarar el consumo para toda la red o por zonas",
      "Posibilidad de exportar, editar y reimportar los enlaces entre los consumos puntuales y los nudos",
      "Nuevas opciones para importar/exportar/eliminar escenarios de demanda por categorías",
      "Nuevas herramientas en el gestor de demandas nodales para considerar la eficiencia hídrica o asignar patrones de consumo por sectores.",
      "Nuevo Gestor de Escenarios para almacenar y recuperar en bloque diversos parámetros del modelo",
      "Cálculo automático de la longitud de las tuberías a partir de las coordenadas de los vértices",
      "Completado automático del trazado de las acometidas mediante un tramo perpendicular a la tubería más próxima o un enlace al nudo más próximo.",
      "Posibilidad de trazar automáticamente acometidas de longitud prefijada desde un punto de una tubería o un nudo.",
      "Nueva opción para reflejar una acometida con la herramienta de invertir",
      "Nueva opción de importar acometidas como puntos, creando perpendiculares a las tuberías o conexiones a los nudos más próximos.",
      "Nuevo campo IsActive en acometidas para definir si está operativa o no",
      "Verificación del punto de contacto de una acometida con alguna tubería o nudo por ambos extremos.",
      "Antes de calcular la sectorización hidráulica se transmite ahora el estado de las válvulas manuales",
      "Al exportar a INP el coeficiente de pérdidas de las válvulas de corte se transmite a las tuberías",
      "Declaración, edición y borrado de medidores de diversos tipos, como nuevos elementos del Gemelo Digital",
      "Edición, lectura y guardado de las señales asociadas a los medidores",
      "Nuevo diálogo para leer los datos de campo y exportar a CSV aquellos correspondientes al intervalo de simulación",
      "Nueva opción para exportar los datos de campo, junto al fichero INP",
      "Nuevos campos en el diálogo de importación, para poder importar más información de los elementos",
      "Nueva opción para mostrar en los temas auxiliares los elementos con alguna incidencia, durante el proceso de importación de shapefiles.",
      "Nuevos botones y nueva deslizadera en el panel de resultados",
      "Mejoras en las etiquetas para mostrar los resultados",
      "Nuevo tipo de resultado para visualizar el Status de las líneas",
      "Mejoras en las búsquedas desde el editor de propiedades",
      "Al exportar el INP, nuevo desplegable con las rutas de los ejecutables de EPANET encontrados, para abrir automáticamente el fichero exportado",
      "Al importar un fichero INPs ahora se clasifican los patrones por su tipo",
      "Nuevo warning cuando se autocompleta el Id de algún elemento",
      "Cambios en el orden y en los nombres de algunos botones de la barra de herramientas",
      "Cambios en los estilos visuales de algunos de los elementos",
      "Nuevo enlace a la web de QGISRed en la ventana de info",
      "Corregida la lectura del Id de la curva en válvulas GPV y su edición desde la ventana de propiedades de los elementos",
      "Corregido un error al asignar valores por defecto en la importación de los coeficientes de reacción en el seno del agua y en las paredes",
      "Corregido un error y el mensaje mostrado al leer las fuentes contaminantes en depósitos y embalses",
      "Corregido un problema que provocaba que las herramientas de selección puntual dejasen de funcionar para ciertos elementos",
      "Corregido un error en la herramienta de crear conexiones en T masivamente",
      "Corregido un error con la herramienta de selección múltiple",
      "Corregido un error en la herramienta de selección mediante polígono, cuando el sistema de referencia no era el asumido por defecto",
      "Corregido un error con la herramienta de snapping (selección puntual de elementos) en la versión 3.26 de QGis",
    ],
  },
  {
    version: "0.15",
    fecha: "10 marzo 2022",
    items: [
      "Gestión de válvulas manuales (importación, creación, borrado, edición de propiedades, interacción con el estado de las tuberías...)",
      "Nueva herramienta para cambiar el estado de los elementos lineales y válvulas manuales",
      "Nueva simbolización de tuberías, bombas, válvulas de regulación y manuales según su estado",
      "Anulación de las demandas aisladas por el cierre de tuberías o válvulas superpuestas durante las simulaciones",
      "Asignación de demandas a los nudos a partir de sectores de demanda y demandas puntuales, con diversas opciones",
      "Mejoras en la ventana de edición de propiedades (selección múltiple, elementos conectados, elementos visitados, centrar elemento seleccionado)",
      "Revisión y ampliación de las opciones de análisis (hidráulicas, calidad, tiempos y energía)",
      "Incorporación de los nuevos parámetros de Epanet 2.2 a los formularios (rebose depósitos, demandas dependientes de la presión)",
      "Resaltados los botones/menús de la barra de herramientas principal",
      "Idioma por defecto y único el inglés (por ahora)",
      "Mejora de la edición de rules (con times y clock times)",
      "Corregido error al escribir valores de demanda con más de 4 dígitos a la izquierda del punto decimal",
      "Corregido error con las etiquetas de tiempo para seleccionar resultados",
      "Corregido error al convertir números en el proceso de interpolación de cotas",
      "Corregidos errores con la lectura y escritura de rules",
      "Corregido error con el orden de las rules",
      "Corregido error con rules usando la coma como separador decimal",
      "Corregido problema al asignar la proyección del proyecto",
      "Corregido error al editar propiedades trabajando con capas ráster",
    ],
  },
  {
    version: "0.14",
    fecha: "11 junio 2021",
    items: [
      "Nueva herramienta para editar la geometría de las acometidas",
      "Prioridad de los elementos del Gemelo Digital a la hora de seleccionar los objetos para editar sus propiedades o borrarlos",
      "La opción hidráulica Demand Multiplier admite ahora un valor con decimales",
      "Visualización del separador decimal definido por el usuario en las diferentes ventanas del plugin",
      "Corregido error grave al leer los metadatos de modelos anteriores, que impedía trabajar con ellos",
      "Corregido un error al instalar el plugin sin disponer previamente de las dependencias necesarias",
      "Corregido un error al interpretar el formato de la hora en las leyes de control simples",
    ],
  },
  {
    version: "0.13",
    fecha: "26 mayo 2021",
    items: [
      "Nuevo menú para agrupar las herramientas destinadas al manejo de los Gemelos Digitales",
      "Creación de acometidas a través de una herramienta propia, e incorporación de las mismas a la herramienta de borrado",
      "Ficha específica para editar las propiedades de las acometidas",
      "Carga de las lecturas automáticas de contador (telelectura) bajo diferentes formatos, a las acometidas o nudos del modelo",
      "Incorporación al editor de curvas de modulación de las curvas de las demandas en las acometidas",
      "Nuevo gestor de demandas para completar la importación desde fichero, la exportación a fichero y el borrado selectivo de las demandas base en los nudos y sus curvas de modulación",
      "Mejora de los tiempos de acceso a la ventana de edición de propiedades de los elementos, para redes de gran tamaño",
      "La apertura del fichero INP desde la interfaz de EPANET al exportarlo es ahora optativa",
      "Nuevas opciones para definir las unidades y la fórmula de pérdida de carga al importar datos desde GIS",
      "El conversor de los coeficientes de pérdidas al cambiar de fórmula, comprueba antes que existan tuberías declaradas",
      "Corregido el formato de las opciones de tiempo para permitir introducir dias, además de horas, minutos y segundos",
      "La eliminación de las curvas de modulación en demandas múltiples se limita ahora exclusivamente a las demandas eliminadas",
      "Corregida la lectura de fechas en los metadatos",
      "Corregido el error que impedía importar SHPs al seleccionar el mismo campo para distintas propiedades",
      "Corregido el error por el cual se importaban algunos campos de los SHPs sin haberlos seleccionado expresamente",
      "Traducción al inglés de algunos textos que se mostraban solo en español",
      "Corregido el fallo de las herramientas de selección gráfica cuando el CRS de QGIS es diferente al de los datos de QGISRed",
      "Corregido el error de importación de SHPs cuando alguna feature no tiene su geometría declarada",
      "Corregido un error de visualización en las capas de resultados",
    ],
  },
  {
    version: "0.12",
    fecha: "7 enero 2021",
    items: [
      "Edición de la tabla de materiales-rugosidad para el cálculo de la rugosidad en función de material y edad",
      "Nueva importación y exportación de patrones/curvas en formato CSV",
      "Nueva herramienta para importar las demandas base en los nudos y los Ids de las curvas de modulación (simples o múltiples) desde un fichero CSV",
      "Importación de acometidas desde SHP",
      "Nueva herramienta para obtener el árbol de mínima resistencia de la red",
      "Actualización de la librería de EPANET a la versión 2.2",
      "Mejorada la interfaz para convertir los coeficientes de rugosidad",
      "Corrección de un error al mostrar resultados de Calidad",
      "Refresco de las unidades y la fórmula de pérdidas actuales en la barra de estado, al cargar un proyecto QGIs",
      "Los proyectos importados desde INP se muestran ahora en la lista de proyectos",
      "Corrección de un error cuando los nudos no tienen coordenadas",
      "Al insertar válvulas o bombas en tuberías, se evita ahora la aparición de longitudes negativas",
      "Corrección de un error de acceso cuando el Pattern TimeStep es 0:00",
      "Las acometidas se leen ahora correctamente",
    ],
  },
  {
    version: "0.11",
    fecha: "15 septiembre 2020",
    items: [
      "Creación de un archivo Json para definir las diferentes proyecciones (contenido del .prj) en el caso de no disponer de Internet",
      "Implementada la lectura de los formatos de la sección PUMPS heredados de la versión 1.1 de EPANET",
      "Nuevo instalador único para ambas arquitecturas (x86 y x64)",
      "Se muestran las unidades y la fórmula de pérdida de carga en la barra de estado.",
      "La estimación del coeficiente de rugosidad en función de la edad y el material admite diferentes fórmulas de pérdida de carga y sistema de unidades",
      "Conversión de coeficientes de rugosidad entre diferentes fórmulas de pérdida de carga",
      "Herramienta para crear una copia de seguridad del proyecto (restauración manual)",
      "Corregido el error al cargar el plugin en la versión de QGIs 3.14.15",
      "Corregido un error por no permitir expresar las horas en formato distinto a AM/PM en la sección Controls",
      "Corregido un error al no poder acceder a la información del usuario de Windows en determinados ordenadores",
      "Nuevo color azul en las etiquetas para los resultados de tipo línea",
      "Corregido el error al clonar el proyecto y perder los metadatos",
      "Corregido el error al guardar un escenario de resultados y quedarse congelado el mapa",
      "Nuevo orden alfabético en las listas de links y nodes en los Controles Simples",
    ],
  },
  {
    version: "0.10",
    fecha: "12 mayo 2020",
    items: [
      "Corregido el comportamiento anormal de la herramienta crear/importar cuando hay otras capas abiertas",
      "Las cabeceras de las secciones del fichero INP se escriben ahora en inglés",
      "Se han validado las propiedades de los elementos para prevenir que las líneas tengan los dos nudos extremos con el mismo ID",
      "Corregido un error al importar los depósitos",
      "Mejorada la simplificación de vértices para eliminar repeticiones en el punto inicial",
      "Corregido un error al escribir las Opciones de Tiempo",
      "Se ha reestructurado los Metadada, y se han unificado en el fichero _Metadata.txt file",
      "Corregido el error de unir tuberías con las mismas características, cuando empiezan y terminan en el mismo nudo",
      "Ahora se comprueba si existe una nueva versión y se notifica al usuario",
      "Corregida la visualización de los iconos en la leyenda para la versión 3.12 de QGIS",
      "Corregido un fallo que impedía almacenar los estilos para los resultados",
      "Corregido un error en la lectura del separador decimal cuando el usuario utiliza el formato en Inglés y cambia el separador decimal por coma",
      "Desde EditProject se accede ahora a LayerManagement para controlar la visibilidad de las capas y su creación",
      "Ahora se almacena correctamente la proyección en los ficheros shape",
    ],
  },
];

export function CapacidadesPageContent() {
  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Después de la{" "}
            <Link href="/presentacion" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
              Presentación
            </Link>
            , estarás ansioso por saber qué capacidades ofrece al usuario el plugin QGISRed. En esta sección te las
            contamos. Pero puesto que es un producto aún en desarrollo, iniciado hace algunos años, lo vamos a hacer
            por etapas.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            En primer lugar te mostraremos las{" "}
            <Link href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Últimas novedades</Link>
            {" "}incluidas en la versión más reciente. A continuación te resaltaremos las{" "}
            <Link href="#capacidadesdestacadas" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Capacidades más importantes</Link>
            {" "}ya desarrolladas, para que no tengas que descubrirlas haciendo un repaso exhaustivo del manual, pero si lo prefieres puedes echar una leída rápida a todas las
            <Link href="#prestacionesactuales" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}> Capacidades ya implementadas</Link>
            . Finalmente te haremos un adelanto de lo que está por llegar en{" "}
            <Link href="#proximasprestaciones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Próximas prestaciones</Link>
            . Y para los más curiosos hemos reservado la última sección, donde podrás ver cómo ha ido evolucionando el producto desde sus inicios, y las mejoras introducidas en{" "}
            <Link href="#historicodeversiones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>cada Versión</Link>
            .
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Para que tengas una idea más exacta de la numeración seguida en el versionado, observa que todas las
            versiones actuales empiezan por 0, por ser un producto aún en desarrollo. El objetivo de la primera versión
            de QGISRed es concluir todas las mejoras previstas sobre lo que actualmente ofrece EPANET 2.2, completar
            las capacidades adicionales orientadas a facilitar la construcción del modelo, y finalizar la extensión del
            modelo para contemplar todos los elementos adicionales necesarios y sus funcionalidades, hasta poder
            reproducir el comportamiento real de una red para cualquier periodo elegido, en conexión con los datos de
            campo, como primer paso para confeccionar un Gemelo Digital.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            En ese momento lanzaremos la versión 1.0 y abriremos las puertas a completar el producto con otras
            prestaciones mucho más prácticas y profesionales. Mientras tanto, vamos por la versión 0.15 y estimamos
            que quedan unas 5 versiones adicionales para concluir todos los objetivos previstos. Básicamente falta por
            completar la introducción de los datos para hacerla aún más ágil y potente, añadir algunos parámetros más
            a los componentes, mejorar ciertos aspectos estéticos, aumentar la agilidad y alternativas a la hora de
            mostrar los resultados, y completar toda la casuística para reproducir la realidad con mayor fidelidad, lo
            que puede conllevar añadir algunos componentes más en la parte del Gemelo Digital.
          </p>
          <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Entra en las secciones siguientes, y conocerás todo ello con más detalle.
          </p>
        </div>
      </section>

      {/* Novedades */}
      <section id="novedades" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Novedades versión 0.18" />

          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            En esta nueva versión 0.18 de QGISRed se recogen muchos de los avances realizado en los últimos 3 años
            desde que se terminó la versión 0.17, aunque el lanzamiento de ésta última se haya retrasado hasta fechas
            recientes.
          </p>

          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            El impulso dado en los últimos años ha sido gracias a la colaboración establecida con el Banco
            Interamericano de Desarrollo (BID), quien ha confiado en QGISRed para su uso como herramienta libre en el
            análisis de soluciones para los proyectos de mejora de los abastecimientos de agua que financia.
          </p>

          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            Algunas de estas mejoras se han ido adelantando a través de las versiones beta 0.17.1 a 0.17.4, liberadas en la plataforma de{" "}
            <a href="https://github.com/qgisred/QGISRed" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>GitHub</a>
            {" "}de QGISRed.
          </p>

          <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            En las fichas siguentes se destacan las <strong>novedades más importantes de la versión 0.18. </strong>
            Para una descripción más detallada de todas las novedades visitar la sección{" "}
            <Link href="#historicodeversiones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Histórico de versiones</Link>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CapacidadCard
              href="/capacidades/mejoras-en-el-almacenamiento-de-resultados-y-su-visualizacion-sobe-el-mapa"
              title="Mejoras en el almacenamiento de resultados y su visualización sobre el mapa"
              description="Hasta la versión 0.17 los resultados de una simulación se guardaban en un fichero propio desde donde se configuraban los diferentes ficheros shape asociados a cada variable. Las filas de la tabla de atributos eran los elementos de la red y sus columnas los diferentes instantes de simulación."
            />
            <CapacidadCard
              href="/capacidades/curvas-de-evolucion-de-las-variables-dinamicas"
              title="Curvas de evolución de las variables dinámicas"
              description="Una de las prestaciones que más se echaba en falta en QGISRed era poder mostrar la evolución en el tiempo de cualquiera de las variables dinámicas contenidas en los resultados. Se trata de una consulta muy útil y habitual, ofrecida por la mayoría de las aplicaciones de análisis de redes."
            />
            <CapacidadCard
              href="/capacidades/confeccion-de-mapas-tematicos"
              title="Confección de mapas temáticos"
              description="Si queremos ver en el mapa los valores de una determinada variable calculada para todos los elementos de la red en un instante dado, clasificados por colores o bien como etiquetas, disponemos del panel de resultados para gestionar esta información."
            />
            <CapacidadCard
              href="/capacidades/propiedades-de-los-elementos"
              title="Propiedades de los elementos"
              description="Los mapas temáticos y el panel de resultados permiten mostrar sobre el mapa los valores de cualquier propiedad elegida para todos los elementos de la red, o bien clasificarlos por colores. Pero ¿y si queremos ver todas las propiedades para un elemento elegido?"
            />
            <CapacidadCard
              href="/capacidades/consultas-por-propiedades"
              title="Consultas por Propiedades"
              description="A través de los mapas temáticos podemos mostrar sobre el mapa de la rede el valor de una determinada propiedad para todos sus elementos. Pero si queremos saber qué elementos cumplen un determinado criterio o condición, la herramienta de Consultas por propiedades permite mostrar precisamente esos elementos."
            />
            <CapacidadCard
              href="/capacidades/editor-de-leyendas"
              title="Editor de leyendas"
              description="Una de las prestaciones más importantes de QGIS es su capacidad para editar los estilos de las capas, y generar mapas muy variados. Sin embargo la cantidad de opciones ofrecida es abrumadora. Para simplificar, en QGISRed se ha creado una nueva opción con unas opciones más limitadas y prácticas."
            />
            <CapacidadCard
              href="/capacidades/identificador-de-elementos-a-traves-de-su-id"
              title="Identificador de elementos a través de su ID"
              description="Cuando vemos el mapa de una red, fácilmente diferenciamos unos elementos de otros. Pero a veces algunos elementos pueden superponerse, siendo en realidad distintos. La única forma de diferenciarlos definitivamente es asignándoles un identificador único."
            />
            <CapacidadCard
              href="/capacidades/otras-y-depuracion-de-errores"
              title="Otras y depuración de errores"
              description="Además de todo lo anterior, la versión 0.18 incluye otras muchas mejoras de menor relevancia. También se han continuado depurando las prestaciones ofrecidas por QGISRed en versiones anteriores."
            />
          </div>
        </div>
      </section>

      {/* Capacidades Destacadas */}
      <section id="capacidadesdestacadas" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Capacidades destacadas" />

          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            En esta sección queremos resaltar las capacidades más destacadas de QGISRed, en lo que llevamos desarrollado
            hasta ahora. Aunque en el Manual se reflejan todas las capacidades de la aplicación, su lectura no siempre
            resulta amena. Por otra parte, desde aquí te podemos contar la motivación, peculiaridades y alcance de cada
            una de las capacidades destacadas.
          </p>

          <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            Como son muchas, las hemos ordenado por temática. Además, poco a poco las iremos completando, a medida que tengamos más contenidos. Al igual que en la sección de{" "}
            <Link href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Novedades</Link>
            , en las fichas siguientes pretendemos hacer solo una introducción a cada capacidad destacada para motivarte y despertar tu interés. Para profundizar más en ellas te remitiremos a los tutoriales y vídeos, y en último caso al Manual.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CapacidadCard
              href="/capacidades/incorporacion-de-las-valvulas-de-corte-al-modelo-de-qgisred"
              title="Incorporación de las Válvulas de Corte al Modelo de QGISRed"
              description="Si quieres utilizar el modelo de la red para analizar cómo se ven afectados los flujos al seccionar la red por las válvulas de corte, bien para separar zonas de forma permanente, o para aislar una zona de modo temporal, tendrás que incorporar antes al modelo todas las válvulas de corte existentes en la red."
              imageSrc="/images/capacidades/Diapositiva12.png"
              imageAlt="Válvulas de corte en QGISRed"
            />
            <CapacidadCard
              href="/capacidades/soporte-a-las-nuevas-opciones-de-analisis-de-epanet-2-2"
              title="Soporte a las Nuevas Opciones de Análisis de EPANET 2.2"
              description="Una de las mayores aportaciones de la versión 2.2 de la librería de EPANET es la posibilidad de considerar las demandas dependientes de la presión (PDA), frente a la opción de considerarlas fijas (DDA), en un intento de acercar más el comportamiento de la red a la realidad."
              imageSrc="/images/capacidades/Diapositiva16-1.png"
              imageAlt="Opciones de análisis EPANET 2.2"
            />
            <CapacidadCard
              href="/capacidades/asignacion-de-demandas-a-los-nudos-por-sectores-y-desde-los-puntos-de-consumo"
              title="Asignación de Demandas a los Nudos por Sectores y desde los Puntos de Consumo"
              description="La asignación de las demandas a los nudos de una red, cuando su número es elevado, no puede hacerse de uno en uno. QGISRed ofrece dos herramientas muy potentes para asignar la demanda de forma masiva, a partir de los consumos declarados por sectores o desde los puntos de consumo."
              imageSrc="/images/capacidades/Diapositiva14-1.png"
              imageAlt="Asignación de demandas"
            />
            <CapacidadCard
              href="/capacidades/mejoras-en-la-navegacion-desde-el-editor-de-propiedades"
              title="Mejoras en la Navegación desde el Editor de Propiedades"
              description="El Editor de Propiedades de QGISRed abre una ventana desde la que se pueden modificar las propiedades del elemento seleccionado, cualquiera que sea su naturaleza. No es necesario tener la capa correspondiente previamente seleccionada, lo cual es una gran ventaja."
              imageSrc="/images/capacidades/Diapositiva15.png"
              imageAlt="Editor de Propiedades QGISRed"
            />
            <CapacidadCard
              href="/capacidades/nueva-herramienta-para-cambiar-el-estado-de-los-elementos-y-simbolizacion-segun-su-estado"
              title="Nueva Herramienta para cambiar el Estado de los Elementos y Simbolización según su Estado"
              description="Una de las operaciones más habituales a la hora de modificar un escenario de simulación es cambiar el estado de algún elemento de la red, sea de regulación o no, pasando de estar abierto a cerrado o viceversa."
              imageSrc="/images/capacidades/Diapositiva13-1.png"
              imageAlt="Herramienta de estados en QGISRed"
            />
            <CapacidadCard
              href="/capacidades/pequenas-mejoras-y-depuracion-de-errores"
              title="Pequeñas mejoras y depuración de errores"
              description="Además de todo lo anterior, en la versión 0.17 se ha continuado depurando las prestaciones ya ofrecidas por QGISRed en versiones anteriores."
              imageSrc="/images/capacidades/qgis-bin_s5ZfejsaKh.png"
              imageAlt="Mejoras versión 0.17"
            />
            <CapacidadCard
              href="/capacidades/epanet-2-3-ya-esta-integrado"
              title="Integración de la versión 2.3 de la Toolkit de EPANET"
              description="La versión 2.2 de la Toolkit de EPANET se lanzó en 2019 y fue incorporada a QGISRed en sus primeras versiones. Finalmente, en Julio de 2025 se lanzó la nueva versión 2.3, la cual incorpora mejoras notables en el motor de cálculo."
              imageSrc="/images/capacidades/epanet2.3.png"
              imageAlt="EPANET 2.3 en QGISRed"
            />
            <CapacidadCard
              href="/capacidades/gestor-de-proyectos-renovado"
              title="Nuevas opciones del Gestor de Proyectos"
              description="El Gestor de Proyectos de QGISRed es una de las herramientas más utilizadas por los usuarios. La versión 0.17 añade ordenación de columnas, renombrado de proyectos, eliminación definitiva y exportación/importación como fichero zip."
              imageSrc="/images/capacidades/projectManager.png"
              imageAlt="Gestor de Proyectos renovado"
            />
            <CapacidadCard
              href="/capacidades/nuevas-opciones-en-el-gestor-de-escenarios"
              title="Gestión de escenarios compatibles con EPANET"
              description="En la nueva versión de QGISRed los escenarios pueden también exportarse/importarse siguiendo los mismos formatos usados por EPANET, para así mantener la compatibilidad total entre EPANET y QGISRed."
              imageSrc="/images/capacidades/epanetScenarios.png"
              imageAlt="Gestión de escenarios EPANET"
            />
            <CapacidadCard
              href="/capacidades/transfiere-estados-y-calidad-para-encadenar-simulaciones-sucesivas"
              title="Encadenamiento de simulaciones sucesivas"
              description="La versión 0.17 de QGISRed permite encadenar simulaciones desde el Gestor de Escenarios, exportando el estado final de los elementos de regulación e importándolo como estado inicial para la etapa siguiente."
              imageSrc="/images/capacidades/simulaciones.png"
              imageAlt="Encadenamiento de simulaciones"
            />
            <CapacidadCard
              href="/capacidades/visualizacion-de-hasta-13-estados-en-tuberias-valvulas-y-bomas"
              title="Identificación de hasta 13 estados en tuberías, bombas y válvulas"
              description="Aunque EPANET diferencia hasta 8 estados distintos, en QGISRed se distinguen hasta 13 estados que completan las diferentes situaciones que pueden darse en tuberías, bombas y válvulas."
              imageSrc="/images/capacidades/statuses.png"
              imageAlt="13 estados en QGISRed"
            />
            <CapacidadCard
              href="/capacidades/nueva-herramienta-para-la-exploracion-de-segmentos-aislados"
              title="Nueva herramienta para la identificación de segmentos aislados"
              description="Una de las prestaciones más solicitadas en un software de simulación es la determinación de las válvulas que hay que cerrar para aislar un segmento de la red en torno a un punto donde ha producido una avería."
              imageSrc="/images/capacidades/isolatedSegments-1.png"
              imageAlt="Identificación de segmentos aislados"
            />
            <CapacidadCard
              href="/capacidades/depuracion-y-mejora-de-prestaciones-de-versiones-anteriores"
              title="Depuración y Mejora de Prestaciones Anteriores"
              description="La versión 0.16 ha mejorado algunos aspectos de las versiones anteriores, como la barra de tiempos, el orden y clasificación de algunas opciones de menú, y nuevos campos en la importación de shapes."
              imageSrc="/images/capacidades/Diapositiva11.png"
              imageAlt="Mejoras versión 0.16"
            />
            <CapacidadCard
              href="/capacidades/identificacion-de-los-sectores-de-demanda-dma"
              title="Identificación de los Sectores de Demanda (DMA)"
              description="A partir de la versión 0.15 ya se pueden declarar las válvulas de corte superpuestas a las tuberías, y con la versión 0.16 también se pueden declarar caudalímetros y contadores para identificar con precisión los Sectores de Demanda."
              imageSrc="/images/capacidades/Diapositiva10-1.png"
              imageAlt="Sectores de Demanda DMA"
            />
            <CapacidadCard
              href="/capacidades/incorporacion-de-los-medidores-al-modelo"
              title="Incorporación de los Medidores al Modelo"
              description="Una de las características más importantes que se le deben exigir al modelo hidráulico de una red en explotación es que reproduzca fielmente la realidad. En QGISRed los medidores son tratados como objetos con sus propias propiedades."
              imageSrc="/images/capacidades/Diapositiva8-1.png"
              imageAlt="Medidores en el modelo QGISRed"
            />
          </div>
        </div>
      </section>

      {/* Prestaciones Actuales */}
      <section id="prestacionesactuales" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Prestaciones actuales" />

          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            QGISRed ha cumplido ya casi cuatro años de vida, desde que comenzó su andadura a finales de 2018. Desde
            entonces no hemos parado de introducir mejoras, aunque quizás no al ritmo deseado por no haberle podido
            dedicar atención exclusiva durante ese tiempo. Pero si echamos la vista atrás, las prestaciones que
            ofrece ya en su última versión son muy notables.
          </p>

          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            Algunas de estas prestaciones se describen con más detalle en las{" "}
            <Link href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Últimas Novedades</Link>
            , o en las{" "}
            <Link href="#capacidadesdestacadas" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Capacidades Destacadas</Link>
            , pero para saber más sobre otras prestaciones tendrás que consultar el{" "}
            <a href="/utilizacion#manualusuario" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Manual</a>
            , o los{" "}
            <a href="/utilizacion#tutoriales" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Tutoriales</a>
            {" "}y{" "}
            <a href="/utilizacion#videosformativos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Videos Formativos</a>
            {" "}que poco a poco vamos desarrollando. También puedes apuntarte a nuestros{" "}
            <a href="/difusion#cursos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Cursos</a>
            {" "}presenciales o virtuales, aún en elaboración.
          </p>

          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            A continuación, te listamos las principales prestaciones que ya ofrece la última versión descargable
            desde el instalador de Complementos de QGIS, las cuales hemos ordenado por temáticas para más claridad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
            {prestacionesActuales.map((group) => (
              <PrestacionGroup key={group.group} title={group.group} items={group.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Próximas Prestaciones */}
      <section id="proximasprestaciones" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Próximas prestaciones" />

          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            Como ya sabes, la versión 1.0 de QGISRed está aún en desarrollo. A continuación, te adjuntamos una lista de
            las principales mejoras que tenemos previsto incorporar para completar esta versión. La lista que se acompaña
            no es cerrada, y puede estar sujeta a cambios.
          </p>

          <div className="mb-8">
            {proximasPrestaciones.map((group) => (
              <PrestacionGroup key={group.group} title={group.group} items={group.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Histórico de Versiones */}
      <section id="historicodeversiones" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Histórico de versiones" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 100%" }}>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El proceso de desarrollo de un producto de software es complejo y requiere muchas horas de dedicación y
                revisión del código. Desde la concepción inicial de un procedimiento hasta su implementación final hay
                muchas pruebas intermedias, y al final siempre surgen errores donde menos se esperan. En cada nueva
                versión se intentan introducir nuevas capacidades, pero al mismo tiempo es inevitable tener que corregir
                errores de lo aparentemente ya consolidado.
              </p>

              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Lo que sigue es una relación de los avances y correcciones realizados en las sucesivas versiones de
                QGISRed, desde la versión 0.6 que se subió por vez primera al repositorio de QGIS.
              </p>

              <div className="mb-4">
                {historico.map((item) => (
                  <AccordionItem key={item.version} title={`Cambios en la versión ${item.version} – ${item.fecha}`}>
                    <ul className="list-none p-0 m-0">
                      {item.items.map((li, idx) => (
                        <li key={idx} className="flex items-start gap-2 mb-1.5">
                          <span className="flex-shrink-0" style={{ color: "rgb(95, 189, 211)", marginTop: "3px", fontSize: "10px" }}>●</span>
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
