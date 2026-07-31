import Image from "@/components/AppImage";
import { Link } from "@/i18n/navigation";
import { capacidadesArticles } from "@/data/capacidades-articles";

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
        style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
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
  readMoreText?: string;
}

function CapacidadCard({ title, description, href, imageSrc, imageAlt, readMoreText = "Leer más" }: CapacidadCardProps) {
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
          {readMoreText} <span style={{ fontSize: "14px" }}>»</span>
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
    <AccordionItem title={title}>
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
    </AccordionItem>
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

export function CapacidadesPageContent({ locale = "es" }: { locale?: string }) {
  const isEn = locale === "en";
  const readMoreText = isEn ? "Read more" : "Leer más";
  const comingSoonText = isEn ? "Coming soon" : "Próximamente";

  const novedadesArticles = capacidadesArticles.filter((a) => a.group === "novedades");
  const destacadasArticles = capacidadesArticles.filter((a) => a.group === "capacidadesdestacadas");

  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                After the{" "}
                <Link href="/presentacion" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
                  Presentation
                </Link>
                , you will be eager to know what capabilities the QGISRed plugin offers. In this section we will tell you. Since it is still a product in development, we will do it in stages.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                First we will show you the{" "}
                <a href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>What's New</a>
                {" "}included in the most recent version. Then we will highlight the{" "}
                <a href="#capacidadesdestacadas" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Featured Capabilities</a>
                {" "}already developed, so you don't have to discover them by reading the entire manual. If you prefer, you can also take a quick look at all{" "}
                <a href="#prestacionesactuales" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Current Capabilities</a>
                . Finally, we will give you a preview of what is coming in{" "}
                <a href="#proximasprestaciones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Road Map</a>
                . And for the most curious, we have reserved the last section, where you can see how the product has evolved from its beginnings, and the improvements introduced in{" "}
                <a href="#historicodeversiones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>each Version</a>
                .
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                To give you a more accurate idea of the versioning, note that all current versions start with 0, as the product is still in development. The goal of the first version of QGISRed is to complete all planned improvements over what EPANET 2.2 currently offers, complete the additional capabilities aimed at facilitating model construction, and finalize the model extension to include all additional necessary elements and their functionalities, until the real behaviour of a network can be reproduced for any chosen period, in connection with field data, as a first step towards building a Digital Twin.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                At that point we will launch version 1.0 and open the doors to completing the product with other much more practical and professional features. In the meantime, we are on version 0.15 and estimate that there are about 5 additional versions to complete all the planned objectives.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Enter the following sections, and you will learn all about it in more detail.
              </p>
            </>
          ) : (
            <>
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
                <a href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Últimas novedades</a>
                {" "}incluidas en la versión más reciente. A continuación te resaltaremos las{" "}
                <a href="#capacidadesdestacadas" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Capacidades más importantes</a>
                {" "}ya desarrolladas, para que no tengas que descubrirlas haciendo un repaso exhaustivo del manual, pero si lo prefieres puedes echar una leída rápida a todas las
                <a href="#prestacionesactuales" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}> Capacidades ya implementadas</a>
                . Finalmente te haremos un adelanto de lo que está por llegar en{" "}
                <a href="#proximasprestaciones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Próximas prestaciones</a>
                . Y para los más curiosos hemos reservado la última sección, donde podrás ver cómo ha ido evolucionando el producto desde sus inicios, y las mejoras introducidas en{" "}
                <a href="#historicodeversiones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>cada Versión</a>
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
            </>
          )}
        </div>
      </section>

      {/* Novedades */}
      <section id="novedades" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "What's New in version 0.18" : "Novedades versión 0.18"} />

          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                This new version 0.18 of QGISRed includes many of the advances made over the last 3 years since version 0.17 was completed, even though the launch of the latter was delayed until recently.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                The momentum in recent years has been thanks to the collaboration established with the Inter-American Development Bank (IDB), which has trusted QGISRed as a free tool for analysing solutions for the water supply improvement projects it finances.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Some of these improvements have been previewed through beta versions 0.17.1 to 0.17.4, released on the{" "}
                <a href="https://github.com/qgisred/QGISRed" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>GitHub</a>
                {" "}platform of QGISRed.
              </p>
              <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                The following cards highlight the <strong>most important new features of version 0.18.</strong>{" "}
                For a more detailed description of all the new features, visit the{" "}
                <a href="#historicodeversiones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Version History</a> section.
              </p>
            </>
          ) : (
            <>
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
                <a href="#historicodeversiones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Histórico de versiones</a>.
              </p>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {novedadesArticles.map((article) => (
              <CapacidadCard
                key={article.slug}
                href={`/capacidades/${article.slug}`}
                title={isEn ? (article.titleEn ?? article.title) : article.title}
                description={isEn ? (article.excerptEn ?? article.excerpt) : article.excerpt}
                readMoreText={readMoreText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capacidades Destacadas */}
      <section id="capacidadesdestacadas" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Featured Capabilities" : "Capacidades destacadas"} />

          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                In this section we want to highlight the most outstanding capabilities of QGISRed developed so far. Although the Manual covers all application capabilities, it is not always easy reading. From here we can tell you the motivation, peculiarities and scope of each featured capability.
              </p>
              <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                There are many, so we have ordered them by topic. We will gradually complete them as we have more content. As in the{" "}
                <a href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>What's New</a>
                {" "}section, the following cards are intended to provide only an introduction to each featured capability to motivate you. For further depth, we will refer you to tutorials and videos, and ultimately to the Manual.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En esta sección queremos resaltar las capacidades más destacadas de QGISRed, en lo que llevamos desarrollado
                hasta ahora. Aunque en el Manual se reflejan todas las capacidades de la aplicación, su lectura no siempre
                resulta amena. Por otra parte, desde aquí te podemos contar la motivación, peculiaridades y alcance de cada
                una de las capacidades destacadas.
              </p>
              <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Como son muchas, las hemos ordenado por temática. Además, poco a poco las iremos completando, a medida que tengamos más contenidos. Al igual que en la sección de{" "}
                <a href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Novedades</a>
                , en las fichas siguientes pretendemos hacer solo una introducción a cada capacidad destacada para motivarte y despertar tu interés. Para profundizar más en ellas te remitiremos a los tutoriales y vídeos, y en último caso al Manual.
              </p>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {destacadasArticles.map((article) => (
              <CapacidadCard
                key={article.slug}
                href={`/capacidades/${article.slug}`}
                title={isEn ? (article.titleEn ?? article.title) : article.title}
                description={isEn ? (article.excerptEn ?? article.excerpt) : article.excerpt}
                imageSrc={article.image}
                imageAlt={article.imageAlt}
                readMoreText={readMoreText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prestaciones Actuales */}
      <section id="prestacionesactuales" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Current Capabilities" : "Prestaciones actuales"} />

          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                QGISRed has now been in development for nearly four years since it started its journey at the end of 2018. Since then we have continued to introduce improvements, and looking back the capabilities offered in its latest version are very notable.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Some of these capabilities are described in more detail in{" "}
                <a href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>What's New</a>
                , or in{" "}
                <a href="#capacidadesdestacadas" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Featured Capabilities</a>
                , but to learn more about other capabilities you will need to consult the{" "}
                <Link href={{ pathname: "/utilizacion", hash: "#manualusuario" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Manual</Link>
                , or the{" "}
                <Link href={{ pathname: "/utilizacion", hash: "#tutoriales" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Tutorials</Link>
                {" "}and{" "}
                <Link href={{ pathname: "/utilizacion", hash: "#videosformativos" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Training Videos</Link>
                {" "}we are gradually developing. You can also sign up for our{" "}
                <Link href={{ pathname: "/difusion", hash: "#cursos" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Courses</Link>
                , both in-person and online, still in preparation.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Below, we list the main capabilities already offered by the latest version downloadable from the QGIS Plugin installer, ordered by topic.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                QGISRed ha cumplido ya casi cuatro años de vida, desde que comenzó su andadura a finales de 2018. Desde
                entonces no hemos parado de introducir mejoras, aunque quizás no al ritmo deseado por no haberle podido
                dedicar atención exclusiva durante ese tiempo. Pero si echamos la vista atrás, las prestaciones que
                ofrece ya en su última versión son muy notables.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Algunas de estas prestaciones se describen con más detalle en las{" "}
                <a href="#novedades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Últimas Novedades</a>
                , o en las{" "}
                <a href="#capacidadesdestacadas" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Capacidades Destacadas</a>
                , pero para saber más sobre otras prestaciones tendrás que consultar el{" "}
                <Link href={{ pathname: "/utilizacion", hash: "#manualusuario" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Manual</Link>
                , o los{" "}
                <Link href={{ pathname: "/utilizacion", hash: "#tutoriales" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Tutoriales</Link>
                {" "}y{" "}
                <Link href={{ pathname: "/utilizacion", hash: "#videosformativos" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Videos Formativos</Link>
                {" "}que poco a poco vamos desarrollando. También puedes apuntarte a nuestros{" "}
                <Link href={{ pathname: "/difusion", hash: "#cursos" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Cursos</Link>
                {" "}presenciales o virtuales, aún en elaboración.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                A continuación, te listamos las principales prestaciones que ya ofrece la última versión descargable
                desde el instalador de Complementos de QGIS, las cuales hemos ordenado por temáticas para más claridad.
              </p>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 items-start">
            {prestacionesActuales.map((group) => (
              <PrestacionGroup key={group.group} title={group.group} items={group.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Próximas Prestaciones */}
      <section id="proximasprestaciones" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Road Map" : "Próximas prestaciones"} />

          {isEn ? (
            <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              As you know, version 1.0 of QGISRed is still under development. Below is a list of the main improvements we plan to incorporate to complete this version. The list is not exhaustive and may be subject to changes.
            </p>
          ) : (
            <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              Como ya sabes, la versión 1.0 de QGISRed está aún en desarrollo. A continuación, te adjuntamos una lista de
              las principales mejoras que tenemos previsto incorporar para completar esta versión. La lista que se acompaña
              no es cerrada, y puede estar sujeta a cambios.
            </p>
          )}

          <div className="mb-8">
            {proximasPrestaciones.map((group) => (
              <PrestacionGroup key={group.group} title={group.group} items={group.items} />
            ))}
          </div>

          <p className="italic" style={{ fontSize: "15px", color: "rgb(120, 120, 120)", lineHeight: "1.7" }}>
            {comingSoonText}
          </p>
        </div>
      </section>

      {/* Histórico de Versiones */}
      <section id="historicodeversiones" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Version History" : "Histórico de versiones"} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 100%" }}>
              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    The process of developing a software product is complex and requires many hours of dedication and code review. From the initial conception of a procedure to its final implementation there are many intermediate tests, and errors always arise where least expected. Each new version tries to introduce new capabilities, while at the same time it is inevitable to correct errors in what appeared to be already consolidated.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    What follows is a record of the advances and corrections made in successive versions of QGISRed, from version 0.6 which was first uploaded to the QGIS repository.
                  </p>
                </>
              ) : (
                <>
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
                </>
              )}

              <div className="mb-4">
                {historico.map((item) => (
                  <AccordionItem
                    key={item.version}
                    title={isEn
                      ? `Changes in version ${item.version} – ${item.fecha}`
                      : `Cambios en la versión ${item.version} – ${item.fecha}`
                    }
                  >
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
