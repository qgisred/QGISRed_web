import Image from "@/components/AppImage";
import { Link } from "@/i18n/navigation";
import { capacidadesArticles, getArticleSlug } from "@/data/capacidades-articles";
import { anchorHash, anchorId } from "@/i18n/anchors";
import { localize } from "@/i18n/localize";

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
  /** URL segment of the article in the current locale. */
  slug: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  readMoreText?: string;
  /** Small label above the title, e.g. a version tag on an archived changelog card. */
  eyebrow?: string;
}

function CapacidadCard({ title, description, slug, imageSrc, imageAlt, imageWidth, imageHeight, readMoreText = "Leer más", eyebrow }: CapacidadCardProps) {
  const href = { pathname: "/capacidades/[slug]", params: { slug } } as const;
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
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        {eyebrow && (
          <span
            className="font-semibold uppercase mb-1"
            style={{ fontSize: "11px", letterSpacing: "0.04em", color: "rgb(95, 189, 211)" }}
          >
            {eyebrow}
          </span>
        )}
        <h3 className="font-semibold mb-2" style={{ fontSize: "14px", color: "rgb(0, 9, 25)", lineHeight: "1.35" }}>
          <Link href={href} style={{ color: "inherit", textDecoration: "none" }} className="hover:text-[rgb(95,189,211)] transition-colors">
            {title}
          </Link>
        </h3>
        <p className="mb-4 flex-1" style={{ fontSize: "12px", color: "rgb(80, 80, 80)", lineHeight: "1.6" }}>
          {description}
        </p>
        <Link
          href={href}
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

interface PrestacionGroupData {
  group: string;
  groupEn: string;
  groupFr?: string;
  groupPt?: string;
  items: string[];
  itemsEn: string[];
  itemsFr?: string[];
  itemsPt?: string[];
}

const prestacionesActuales: PrestacionGroupData[] = [
  {
    group: "Gestión de Proyecto",
    groupEn: "Project Management",
    items: [
      "Gestor de proyectos para facilitar la carga y almacenamiento de los diferentes proyectos",
      "Creación automática de un nuevo proyecto vacío",
      "Creación automática de un proyecto desde un fichero INP",
      "Clonación de proyectos y creación de una copia de seguridad",
    ],
    itemsEn: [
      "Project manager that simplifies loading and storing the different projects",
      "Automatic creation of a new empty project",
      "Automatic creation of a project from an INP file",
      "Project cloning and backup creation",
    ],
  },
  {
    group: "Datos del Proyecto",
    groupEn: "Project Data",
    items: [
      "Edición de los metadatos y propiedades del proyecto",
      "Resumen de las características del proyecto",
      "Gestión de las capas del modelo",
      "Declaración de valores por defecto",
      "Declaración de las opciones del modelo",
    ],
    itemsEn: [
      "Editing of the project metadata and properties",
      "Summary of the project characteristics",
      "Management of the model layers",
      "Declaration of default values",
      "Declaration of the model options",
    ],
  },
  {
    group: "Herramientas de Edición Gráfica",
    groupEn: "Graphical Editing Tools",
    items: [
      "Creación automática de los nudos a medida que se trazan las tuberías",
      "Creación automática de las relaciones topológicas entre todos los elementos cada vez que se necesita, liberando de ello al usuario",
      "Inserción de válvulas y bombas como elementos lineales en puntos intermedios de las tuberías o en nudos",
      "Herramientas para la edición gráfica de todos los elementos básicos de una red (creación, borrado, desplazamiento y edición del trazado)",
      "Herramienta para invertir automáticamente el trazado de tuberías, bombas y válvulas",
      "Herramienta para cambiar el estado de tuberías, bombas y válvulas al toque",
    ],
    itemsEn: [
      "Automatic creation of nodes as the pipes are drawn",
      "Automatic creation of the topological relationships between all elements whenever they are needed, relieving the user of the task",
      "Insertion of valves and pumps as line elements at intermediate points along pipes or at nodes",
      "Tools for the graphical editing of every basic network element (creation, deletion, displacement and layout editing)",
      "Tool to automatically reverse the direction of pipes, pumps and valves",
      "Tool to change the status of pipes, pumps and valves with a single click",
    ],
  },
  {
    group: "Edición de Propiedades",
    groupEn: "Property Editing",
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
    itemsEn: [
      "Assignment of default properties when new elements are created",
      "Dedicated windows for editing the properties of every basic network element",
      "Element finder by type and Id",
      "Browser for visiting the elements connected to the current one, or returning to those already visited",
      "Selection of multiple elements by region for subsequent editing",
      "Multiple demands handled as a separate layer, with their property editing integrated with that of the nodes",
      "Emitters recognised as discharge points to the atmosphere following an exponential law",
      "Contaminant sources handled as a separate layer, with their property editing integrated with that of the nodes",
    ],
  },
  {
    group: "Asistentes para completar los Datos del Modelo",
    groupEn: "Wizards for Completing the Model Data",
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
    itemsEn: [
      "Automatic recalculation of pipe lengths according to the CRS",
      "Automatic interpolation of node elevations from a DTM",
      "Automatic estimation of pipe roughness from the material and age of the pipes",
      "Conversion of the roughness coefficient between different head loss formulas and unit systems",
      "Automatic allocation of demands to nodes from consumption declared by sector or by point",
      "Correction of demands using the water efficiency of each sector",
      "Assignment of demand patterns by sector",
      "Wizard for building scenarios with multiple demands, classified by category",
      "Advanced editor for patterns and element behaviour curves",
      "Advanced editor for simple and rule-based controls",
    ],
  },
  {
    group: "Importación/exportación de Datos",
    groupEn: "Data Import/Export",
    items: [
      "Importación completa de todos los datos de un fichero INP de EPANET. Detección de errores",
      "Importación de los elementos básicos de la red desde ficheros shape (SHP). Selección de campos",
      "Importación aditiva de componentes desde ficheros shape",
      "Importación/exportación de curvas de modulación y de comportamiento de los elementos desde los Editores correspondientes",
      "Exportación de todos los datos del modelo actual a un fichero INP para continuar los análisis desde EPANET, incluidos los datos de campo si lo hay",
    ],
    itemsEn: [
      "Complete import of all the data in an EPANET INP file, with error detection",
      "Import of the basic network elements from shapefiles (SHP), with field selection",
      "Additive import of components from shapefiles",
      "Import and export of patterns and element behaviour curves from the corresponding Editors",
      "Export of all the current model data to an INP file so the analysis can continue in EPANET, including field data where available",
    ],
  },
  {
    group: "Verificación y Depuración de los Datos del Modelo",
    groupEn: "Model Data Verification and Debugging",
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
    itemsEn: [
      "Detection and removal of overlapping elements",
      "Simplification of line layouts with collinear vertices",
      "Splitting of pipes by creating intermediate nodes",
      "Merging of adjoining pipes that share the same properties",
      "Merging and separation of demand nodes",
      "Creation of T-connections, or their reversal where appropriate",
      "Resolution of pipe crossings, either by creating intermediate nodes or by cancelling them",
      "Verification of the connectivity of every element declared in the network",
      "Verification of the valid range of certain element properties (lengths, diameters, materials and dates)",
      "Identification of the different hydraulic sectors and their classification according to the demand applied and the supply sources",
    ],
  },
  {
    group: "Gestión de Escenarios",
    groupEn: "Scenario Management",
    items: [
      "Asistente para gestionar escenarios de datos cambiando diámetros, rugosidades, cotas, demandas, estados iniciales, calidades iniciales, coeficientes de reacción o fuentes contaminantes",
      "Creación de escenarios combinados modificando varias magnitudes al mismo tiempo",
    ],
    itemsEn: [
      "Wizard for managing data scenarios by changing diameters, roughness values, elevations, demands, initial statuses, initial quality, reaction coefficients or contaminant sources",
      "Creation of combined scenarios that modify several quantities at once",
    ],
  },
  {
    group: "Análisis y visualización de Resultados",
    groupEn: "Analysis and Display of Results",
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
    itemsEn: [
      "Dedicated window for editing all the Analysis Options, arranged by category",
      "Connection to the EPANET Toolkit 2.2 to run the simulations, with support for all its functions",
      "Storage of the simulation results in a purpose-built data structure",
      "Display of the results as colour maps per quantity, chosen from the results panel",
      "Automatic definition of the legends and symbology used to inspect the results, which remain editable from QGIS",
      "Option to show flow direction with arrows",
      "Option to show the numerical results of the current quantity as fixed or floating labels",
      "Navigation bar for following how the results evolve over the simulation period",
    ],
  },
  {
    group: "Extensión para trabajar con Gemelos Digitales",
    groupEn: "Extension for Working with Digital Twins",
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
    itemsEn: [
      "Editing and handling of service connections as distinct elements for loading demands into the model",
      "Import of service connections from shapefiles and their integration into the Property Editor",
      "Wizard for drawing service connections automatically, either perpendicular to the pipes or by linking them to nodes and vertices",
      "Loading of automated meter readings onto the service connections, and automatic transfer of the consumption to the model nodes",
      "Optional integration of the service connections into the model, becoming part of it as pipes or as nodes",
      "Editing and handling of isolation valves as distinct elements for controlling the passage of flow",
      "Import of isolation valves from shapefiles and their integration into the Property Editor",
      "Automatic transfer of the isolation valve status to the pipes",
      "Identification of the areas isolated by the valves, and cancellation of the demands within them",
      "Declaration of meters of various types, and their automatic association with the network elements",
      "Import of meters from shapefiles and their integration into the Property Editor",
      "Declaration of the signals recorded by each meter and their link to data coming from SCADA systems or data loggers",
      "Import of field measurements and their comparison with the simulated values from within EPANET",
    ],
  },
  {
    group: "Conexión del Gemelo con los Datos Reales",
    groupEn: "Connecting the Twin to Real Data",
    items: [
      "Creación de un repositorio propio del proyecto con los datos de campo. Por ahora limitado a los registros de consumos, y las señales del SCADA o data-loggers",
      "Carga del modelo con los datos de campo para un intervalo cualquiera del pasado, dentro del rango cubierto por el repositorio",
    ],
    itemsEn: [
      "Creation of a project-owned repository for the field data, for now limited to consumption records and SCADA or data logger signals",
      "Loading of the model with field data for any past interval within the range covered by the repository",
    ],
  },
  {
    group: "Herramientas de Exploración",
    groupEn: "Exploration Tools",
    items: [
      "Identificación de los sectores de demanda básicos, considerando las válvulas cerradas y la ubicación de los caudalímetros",
      "Trazado del árbol de mínima resistencia de la red, con parámetros configurables, para identificar los trayectos prioritarios del agua",
    ],
    itemsEn: [
      "Identification of the basic demand sectors, taking into account the closed valves and the position of the flow meters",
      "Tracing of the minimum resistance tree of the network, with configurable parameters, to identify the paths the water takes first",
    ],
  },
  {
    group: "Información",
    groupEn: "Information",
    items: [
      "Ventana de información sobre la versión instalada, con algunos enlaces básicos y los créditos",
      "Botón de acceso directo al entorno de desarrollo GitHub para reportar incidencias",
    ],
    itemsEn: [
      "Information window about the installed version, with a few basic links and the credits",
      "Shortcut button to the GitHub development environment for reporting issues",
    ],
  },
];

const proximasPrestaciones: PrestacionGroupData[] = [
  {
    group: "De carácter General de Proyecto",
    groupEn: "General Project Matters",
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
    itemsEn: [
      "Complete some of the Project Manager options",
      "Review the default options and separate them at code, user and project level",
      "Integrate the DTM and the roughness table into the project specifications, and make them easier to use from the Property Editor.",
      "Complete the project-level Options (modes for assigning roughness, and so on)",
      "Add further properties to the existing elements and complete the data model",
      "Make the roughness table by material and age editable",
      "Develop a unit converter covering all the data",
      "Import CAD files",
    ],
  },
  {
    group: "Edición de los Elementos",
    groupEn: "Element Editing",
    items: [
      "Desarrollar una herramienta para mover los elementos superpuestos sobre el trazado de la red",
      "Desarrollar herramientas para clonar elementos y copiar sus propiedades",
      "Añadir un buscador de elementos por Id desde el Menú de Edición",
      "Desarrollar un Editor de Propiedades de elementos en Grup",
    ],
    itemsEn: [
      "Develop a tool for moving elements that overlap the network layout",
      "Develop tools for cloning elements and copying their properties",
      "Add an element finder by Id to the Edit menu",
      "Develop a Property Editor that works on groups of elements",
    ],
  },
  {
    group: "Asistentes para completar los Datos del Modelo",
    groupEn: "Wizards for Completing the Model Data",
    items: [
      "Interpolar las cotas a partir de MDTs declarados como nubes de puntos",
      "Asistente para reasignar los Ids de los componentes",
      "Reorientar el trazado de las tuberías para reducir los casos de caudales negativos",
      "Completar el Editor de Demandas Nodales para asignar a los nudos los consumos declarados por polígonos o tramos lineales.",
      "Clasificar nudos y líneas por sectores en el campo Etiqueta",
      "Aumentar las opciones de verificación y depuración de los datos del modelo",
      "Compatibilizar los ficheros de escenarios con los de EPANET",
    ],
    itemsEn: [
      "Interpolate elevations from DTMs supplied as point clouds",
      "Wizard for reassigning component Ids",
      "Reorient pipe directions to reduce the number of negative flows",
      "Complete the Nodal Demand Editor so that consumption declared over polygons or line segments can be assigned to nodes.",
      "Classify nodes and lines by sector in the Tag field",
      "Extend the options for verifying and debugging the model data",
      "Make the scenario files compatible with those of EPANET",
    ],
  },
  {
    group: "Nuevos Elementos del Modelo",
    groupEn: "New Model Elements",
    items: [
      "Mejorar la modelación de los depósitos de rotura de carga y de los pequeños depósitos de reserva",
      "Implementar emisores con exponente variable a nivel de nudo",
      "Ampliar la caracterización de las curvas de comportamiento de bombas y válvulas. Curvas por defecto.",
      "Incorporar las turbinas como elementos para recuperar energía",
      "Vincular el consumo energético de los bombeos con la producción solar fotovoltaica",
      "Tratar los puntos de inyección de contaminante como objetos con Id propio, desvinculados de los nudos. Crear un editor específico para sus atributos",
    ],
    itemsEn: [
      "Improve the modelling of break-pressure tanks and small storage tanks",
      "Implement emitters with a variable exponent at node level",
      "Extend the characterisation of pump and valve behaviour curves, including default curves.",
      "Add turbines as elements for recovering energy",
      "Link the energy consumption of pumping stations to photovoltaic solar production",
      "Treat contaminant injection points as objects with their own Id, independent of the nodes, and create a dedicated editor for their attributes",
    ],
  },
  {
    group: "Visualización de Datos y Resultados",
    groupEn: "Display of Data and Results",
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
    itemsEn: [
      "Improve the whole iconography: buttons, components, symbology and so on.",
      "Symbolise emitter nodes with a distinct icon",
      "Apply zoom options to the display of the components",
      "Distinguish between transmission, arterial and distribution networks",
      "Make the QGIS symbology and layer viewer compatible with those of QGISRed",
      "Generate thematic maps from element properties: diameters, materials, age, roughness, elevations and so on",
      "Develop a purpose-built legend editor",
      "Speed up the rendering of results and improve navigation over the map",
      "Complete the options for evaluating maxima, minima, ranges, means and deviations of the results",
      "Develop time series charts for one or more variables.",
      "Show results for intermediate events in the time charts",
      "Develop new windows and layers for viewing and analysing the results",
      "Develop tools for comparing field data with computed values and producing QGISRed's own calibration reports",
      "Compare the results of different scenarios against each other",
    ],
  },
  {
    group: "Flujos y Balances",
    groupEn: "Flows and Balances",
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
    itemsEn: [
      "Strengthen the topological exploration tools and work with trees",
      "Develop tools that help manage the path the flows take through a network",
      "Produce hydraulic balances by sector and present them as diagrams",
      "Identify the origin and destination of the energy consumed",
      "Produce energy balances by sector and present them as diagrams",
      "Show the paths the flow takes through the pipes graphically",
      "Identify the areas upstream and downstream of any node",
      "Produce mass balances by sector and present them as diagrams",
      "Identify the areas of influence of the different supply sources",
      "Superimpose the source origins for the total substance reaching a node at a given instant",
      "Superimpose the quality analysis for several substances that do not react with one another",
    ],
  },
  {
    group: "Gemelo Digital",
    groupEn: "Digital Twin",
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
    itemsEn: [
      "Create a Service Connection Manager for demand allocation and other bulk operations involving them",
      "Complete the allocation of demands to service connections from periodic billing records",
      "Create a Manual Valve Manager for carrying out bulk operations of every kind on the valves",
      "Connect the model to the history of isolation valve statuses",
      "Complete the identification of shutdowns (isolation polygons) and create the data structures associated with them",
      "Connect the model to the shutdown history and make sector isolation more dynamic",
      "Complete the characterisation of the demand sectors and create the associated data structures",
      "Chain simulations over extended periods on real data, and evaluate KPIs for those periods",
      "Add domestic meters as a new component of the Twin, and create a Meter Manager",
      "Adjust demands to the flows injected into each sector, taking hourly smart metering readings into account.",
      "Distribute background leakage between the network nodes and the service connections",
      "Add burst leaks as a new element of the Twin, and create a Burst Leak Manager",
      "Incorporate new laws for characterising leakage",
      "Customise the parameters of the pressure-dependent demand (PDD) curves at node level",
      "Incorporate new behaviour laws for the PDDs",
      "Incorporate domestic storage tanks as new elements of the Digital Twin",
      "Incorporate further elements into the Digital Twin, such as hydrants, irrigation outlets, filling and draining valves, air valves and so on",
    ],
  },
];

interface HistoricoEntry {
  version: string;
  fecha: string;
  fechaEn: string;
  fechaFr?: string;
  fechaPt?: string;
  items: string[];
  itemsEn: string[];
  itemsFr?: string[];
  itemsPt?: string[];
}

const historico: HistoricoEntry[] = [
  {
    version: "0.19",
    fecha: "septiembre 2026",
    fechaEn: "September 2026",
    items: [
      "Agrupación de las opciones de tipo informativo como Novedades, Incidencias, Manual, Valoración, Suscripciones y Acerca de.. en una nueva entrada Info del menú principal.",
      "Reubicación del menú de Consultas tras el menú de Herramientas, en la barra del menú principal.",
      "Incorporación de una marca y un prefijo en el título de todos los paneles de QGISRed para diferenciarlos de otros.",
      "Incorporación de un icono de aviso en aquellas capas que pueden quedar desactualizadas al realizar cambios en los datos.",
      "Ahora se puede cambiar independientemente el nombre del proyecto de QGISRed y el nombre del fichero que aloja la información del mapa (qgz).",
      "Al mover un proyecto, se pueden mover los datos y el fichero del mapa (qgz) conjuntamente, o de forma independiente a carpetas distintas.",
      "Se ha eliminado la opción de hacer un backup del proyecto, y se ha sustituido por la opción de Exportar el proyecto, con más alternativas.",
      "Al exportar un proyecto se pueden elegir los grupos de capas de QGISRed y las capas ajenas al proyecto (cartografías, MDT, etc) a copiar, entre las presentes en el panel de capas. Todo ello se guarda en un único fichero .zip.",
      "Para exportar el fichero qgz del mapa, éste debe estar en la misma carpeta del proyecto o en un nivel superior. La información cartográfica debe estar en carpetas paralelas a la carpeta del proyecto.",
      "Al importar un proyecto de QGISRed se restaura en una nueva carpeta toda la información previamente exportada, manteniendo la estructura de todos los ficheros.",
      "Posibilidad de seleccionar las tuberías candidatas para conectar las acometidas que parten de los puntos de consumo importados.",
      "Declaración de una tabla de materiales por defecto distinta para cada uno de los cuatro idiomas soportados.",
      "Nuevas opciones en el diálogo de edición de la tabla de materiales, para copiar, cargar y editar nuevas tablas a nivel global, antes de crear un proyecto o desde dentro de él.",
      "Nuevas opciones para elegir la tabla de materiales deseada al crear un nuevo proyecto o importar ficheros shape por primera vez.",
      "Creación de un nuevo grupo de capas denominado Capas Auxiliares para alojar temas complementarios a los temas básicos.",
      "Creación de un subgrupo dentro del grupo de Capas Auxiliares, denominado Constructor de Demandas, para alojar sus temas propios: sectores, demandas puntuales y enlaces.",
      "Incorporación de una nueva pestaña al Gestor de Capas para crear, borrar, cargar o descargar las capas auxiliares vinculadas al Constructor de Demandas.",
      "Pulsando con la varita sobre una bomba, válvula o tubería, ahora se alterna solo entre los estados abierto y cerrado.",
      "Para alternar entre el estado activo o cerrado de una válvula, o declarar una CV en una tubería, mantener la tecla Ctrl al pulsar con la varita.",
      "Al insertar una bomba o válvula en un tramo menor que la separación establecida entre los nudos extremos, éstos se mantienen y ya no se desplazan.",
      "Al mover un nudo ya no se queda ninguna capa abierta, evitando conflictos con otras herramientas de edición.",
      "Revisada la herramienta de edición de vértices para hacer más amigable su manejo.",
      "Al partir una tubería por un punto intermedio, se desdobla el Id añadiendo un sufijo numérico. El Id original puede recuperarse si los tramos se funden en sentido inverso al que se crearon los nudos intermedios.",
      "Cuando dos tuberías en serie no pueden unirse eliminando el nudo intermedio, se informa de la causa.",
      "Revisada la herramienta de fundir o separar nudos, permitiendo mayor separación entre ellos.",
      "Al crear una conexión en T ahora se prolonga el último tramo de la derivación hasta intersectar con la tubería principal.",
      "Revisadas las herramientas de deshacer T y cruces, eliminando algunas restricciones y uniformando las acciones del ratón.",
      "Nueva opción del menú Edit para editar las propiedades de los elementos en grupo.",
      "Preselección gráfica de los elementos a modificar con las herramientas de selección múltiple.",
      "Aplicación de filtros para restringir los elementos a modificar, según el tipo de propiedad.",
      "Opción para visualizar en el mapa los elementos que van a ser modificados.",
      "Múltiples opciones para modificar la propiedad elegida, diferenciando si la propiedad es numérica, de texto o enumerada.",
      "Visualización previa en la tabla de atributos de los cambios realizados antes de consolidarlos.",
      "Incorporación de nuevos mapas temáticos vinculados a las tuberías: año de instalación, edad, y coeficiente de rugosidad según fórmula de pérdidas.",
      "Nuevos mapas temáticos vinculados a las uniones: elevaciones y demanda base total graduada por tamaño.",
      "Al confeccionar el mapa de materiales, ahora a cada material se le asigna un color propio en función de su abreviatura e idioma, el cual es editable.",
      "Cuando un mapa temático queda desactualizado por un cambio de unidades o fórmula de pérdidas, se muestra un icono de advertencia, pudiendo actualizarlo pinchando en él.",
      "Mejoras en los asistentes para crear automáticamente rangos, tamaños y colores para configurar la leyenda de todas las capas.",
      "Posibilidad de modificar algunos parámetros de estilo de los temas básicos del grupo Datos.",
      "Incorporación al Editor de Leyendas de QGISRed de las capas creadas por Consultas (mapas temáticos, sectores hidráulicos, árboles, etc).",
      "Incorporación de las capas de Resultados al Editor de Leyendas para personalizar su estilo.",
      "Opción para guardar las leyendas a nivel de proyecto, o a nivel de usuario para aplicarlas en nuevos proyectos.",
      "Opción para almacenar los asistentes con los cuales adaptar la leyenda a los datos, en lugar de guardar una leyenda preconfigurada.",
      "Creación de una biblioteca de símbolos, rampas y paletas de colores propia de QGISRed, accesible desde el Editor de Leyendas y editable desde QGIS.",
      "Opción para consolidar los parámetros importados relativos a la asignación de demandas por sectores en un tema propio de QGISRed.",
      "Opción para repartir la demanda global o por sectores en base a los diámetros que confluyen en los nudos candidatos.",
      "Opción para declarar los consumos por tramos lineales o por polígonos, como alternativa a los consumos puntuales.",
      "Opción para consolidar los consumos puntuales importados en un tema propio de QGISRed.",
      "Opción para gestionar los temas propios de consumos puntuales y agregar varias demandas al mismo tema.",
      "Reconocimiento de diversas unidades a la hora de declarar los consumos a importar.",
      "Opción para asignar las demandas puntuales a los extremos de la tubería más próxima en lugar de buscar directamente los nudos más próximos.",
      "Opción para considerar o no los extremos de bombas y válvulas como posibles nudos de demanda.",
      "Opción para distribuir las demandas puntuales en base a los diámetros de las tuberías que confluyen en los nudos, o en combinación con su distancia a los puntos de consumo.",
      "Notificación de los nudos cargados que queden alejados más de una distancia dada de los puntos de consumo.",
      "Posibilidad de editar y reutilizar los enlaces entre puntos de consumo y nudos de demanda.",
      "Asignación de las demandas a los nudos a partir de las acometidas declaradas como elementos del Gemelo Digital.",
      "Diferenciación de las demandas base por categorías, tanto en consumos puntuales como por acometidas, creando demandas múltiples en los nudos.",
      "Opción para cargar las demandas solo de los sectores, puntos de consumo o acometidas seleccionados.",
      "Opción de usar un tema propio para asignar rendimientos y patrones por sectores, importar sus valores y editarlos.",
      "Opción para aplicar rendimientos hídricos y asignar patrones de demanda por categorías.",
      "Opción para reajustar rendimientos y patrones declarados a un nivel por los impuestos a otro nivel superior (categorías → sectores → global).",
      "Nueva opción en el menú de Consultas para realizar todo tipo de estadísticas con los datos del modelo y los resultados.",
      "Evaluación de las estadísticas de una magnitud, clasificadas por rangos o clases de dicha magnitud u otra magnitud del mismo tipo de elemento.",
      "Posibilidad de usar una segunda magnitud de clasificación para crear tablas de doble entrada.",
      "Posibilidad de aplicar filtros sobre los datos de partida y visualizar en el mapa los elementos afectados por la consulta.",
      "Visualización de las estadísticas en histogramas o mediante una tabla de valores exportable.",
      "Exportación de la configuración de la consulta y su posterior importación.",
      "Revisadas las herramientas de Conectividad, Sectores hidráulicos y Grafos en árbol: nuevos nombres, reubicación de las capas, cambios de estilo, etc.",
      "Nuevo tema para resaltar las demandas aisladas en los Sectores hidráulicos.",
      "Posibilidad de crear y gestionar la existencia de varios temas para los Grafos en árbol (ahora denominados Árboles de Mínimo Coste).",
      "Nuevo diálogo de progreso para mostrar el avance de los cálculos hidráulicos y de calidad.",
      "El diálogo de progreso puede pausarse para observar detenidamente el avance de los cálculos.",
      "El diálogo de progreso puede omitirse para mayor agilidad en los cálculos, salvo para redes con largos tiempos de procesamiento.",
      "Opción para mostrar todos los instantes de cálculo en el mapa de resultados y demás paneles en los que interviene el tiempo.",
      "Opción para mostrar el instante de la simulación en diversos formatos: tiempo transcurrido desde el inicio (en horas acumuladas o agrupadas por días) o bien hora civil (en formato 24 h o am/pm).",
      "Nueva barra de botones para realizar animaciones a velocidad controlada o paso a paso.",
      "Las variables elegidas para mostrar los resultados de nudos y líneas son ahora resaltadas y tienen asignado un color propio.",
      "Nueva pestaña con varias opciones para mejorar la visualización de los resultados en el mapa, la simbología y el color del fondo.",
      "Nueva opción para mostrar en un histograma la distribución de la variable actual de nudos o líneas y sus valores acumulados, en el instante actual.",
      "Nueva opción para mostrar una curva simplificada de evolución de la variable actual de nudos o líneas, para el elemento elegido en el mapa.",
      "Al rescatar el Panel de Resultados se conservan las opciones de la última acción, en lugar de aplicar las opciones por defecto.",
      "Cuando se cambian los datos del escenario, las capas de resultados muestran un icono de advertencia, pudiendo actualizarse pinchando en él.",
      "Nuevos botones para navegar en el gráfico de las curvas de evolución.",
      "Nuevo botón con múltiples opciones para personalizar el aspecto de todos los componentes de la gráfica.",
      "Adaptación de la escala de tiempos conforme a las opciones elegidas en el Panel de resultados.",
      "Posibilidad de mostrar todos los instantes de tiempo o solo instantes pautados, según se elija en el Panel de resultados.",
      "Sincronización opcional del cursor con el instante actual del Panel de resultados.",
      "Incorporación de la evolución del volumen de un depósito o del caudal desbordado, como nuevas variables.",
      "Opción para representar las curvas de evolución de algunas variables globales para todo el sistema.",
      "Nuevo botón para mostrar en una tabla los valores numéricos de los puntos de paso de las curvas de evolución y exportar sus valores a un fichero CSV.",
      "Nuevo botón para exportar las gráficas como imágenes.",
      "Opción para guardar y recuperar la configuración de los gráficos de evolución, incluida la creación de plantillas.",
      "Posibilidad de crear y mantener abiertas varias ventanas de curvas de evolución al mismo tiempo.",
      "Todas las opciones de menú, diálogos y mensajes de QGISRed se muestran ahora también en francés y en portugués brasileño, cuando se elige este idioma para la interfaz de QGIS. Actualmente ya se muestran en inglés y en español.",
      "Verificados todos los controles de seguridad y corregidas las incidencias relativas a la calidad del código, notificadas por el sistema Security Scan de QGIS.",
      "Revisada la compatibilidad del código de la versión 0.19 con Qt6 y QGIS 4.xx.",
      "Fin del soporte para las librerías de QGISRed en sistemas de 32 bits (x86). En adelante QGISRed solo funcionará en sistemas de 64 bits.",
      "Eliminados los botones de minimizar y maximizar en todos los diálogos incorporados en las librerías.",
      "Revisados los nombres de algunos campos de los ficheros shape, tablas dbf y ficheros CSV, por uniformidad. Todos los campos de identificadores terminan ahora con ID.",
      "Revisados los nombres de las propiedades mostrados en todos los diálogos de QGISRed, según el idioma, por uniformidad.",
      "Revisados los decimales mostrados en las tablas de atributos de los temas, en función de las unidades empleadas.",
      "Revisión de las posibles situaciones al cargar las librerías de GISRed para evitar intentos repetidos.",
      "Revisión del formato de exportación de los ficheros INP para evitar solapamientos que causaban errores de lectura.",
      "Subsanado un error que impedía crear nuevas curvas de comportamiento.",
      "Comprobación de que los identificativos de los elementos, curvas y patrones no contengan ningún espacio en blanco.",
      "Subsanado un error que impedía consolidar la hora civil de inicio de la simulación.",
    ],
    itemsEn: [
      "Grouping of informative options such as News, Incidents, Manual, Rating, Subscriptions and About... in a new Info entry in the main menu.",
      "Relocation of the Queries menu behind the Tools menu, in the main menu bar.",
      "Incorporation of a brand and a prefix in the title of all QGISRed panels to differentiate them from others.",
      "Incorporation of a warning icon in those layers that may become outdated when changes are made to the data.",
      "Now you can independently change the name of the QGISRed project and the name of the file that houses the map information (qgz).",
      "When moving a project, you can move the data and the map file (qgz) together, or independently to different folders.",
      "The option to make a backup of the project has been removed, and has been replaced by the option to Export the project, with more alternatives.",
      "When exporting a project, you can choose the QGISRed layer groups and the layers outside the project (cartographies, MDT, etc.) to copy, among those present in the layers panel. All of this is saved in a single .zip file.",
      "To export the map qgz file, it must be in the same project folder or at a higher level. The cartographic information should be in folders parallel to the project folder.",
      "When importing a QGISRed project, all previously exported information is restored to a new folder, maintaining the structure of all files.",
      "Possibility of selecting the candidate pipes to connect the connections that start from the imported consumption points.",
      "Declaration of a different default material table for each of the four supported languages.",
      "New options in the materials table editing dialog, to copy, load and edit new tables at a global level, before creating a project or from within it.",
      "New options to choose the desired material table when creating a new project or importing shape files for the first time.",
      "Creation of a new group of layers called Auxiliary Layers to host complementary themes to the basic themes.",
      "Creation of a subgroup within the group of Auxiliary Layers, called Demand Builder, to host its own topics: sectors, specific demands and links.",
      "Adding a new tab to the Layer Manager to create, delete, load or download auxiliary layers linked to the Demand Builder.",
      "Wand tapping on a pump, valve, or pipe now toggles only between open and closed states.",
      "To toggle between the active or closed state of a valve, or declare a CV on a pipe, hold the Ctrl key when wand-clicking.",
      "When inserting a pump or valve in a section smaller than the separation established between the extreme nodes, they are maintained and no longer move.",
      "When moving a node no layer is left open, avoiding conflicts with other editing tools.",
      "Revised the vertex editing tool to make it more user-friendly.",
      "When splitting a pipe at an intermediate point, the Id is split by adding a numerical suffix. The original Id can be recovered if the sections are merged in the opposite direction to which the intermediate nodes were created.",
      "When two pipes in series cannot be joined by eliminating the intermediate node, the cause is reported.",
      "Revised the tool for merging or separating nodes, allowing greater separation between them.",
      "Creating a T connection now extends the last section of the branch until it intersects with the main pipe.",
      "Revised the undo T and crosses tools, removing some restrictions and standardizing mouse actions.",
      "New Edit menu option to edit the properties of group elements.",
      "Graphical preselection of the elements to modify with multiple selection tools.",
      "Application of filters to restrict the elements to modify, depending on the type of property.",
      "Option to display on the map the elements that are going to be modified.",
      "Multiple options to modify the chosen property, differentiating whether the property is numerical, text or enumerated.",
      "Preview in the attribute table of the changes made before consolidating them.",
      "Incorporation of new thematic maps linked to pipes: year of installation, age, and roughness coefficient according to loss formula.",
      "New thematic maps linked to junctions: elevations and total base demand graduated by size.",
      "When creating the material map, each material is now assigned its own color based on its abbreviation and language, which is editable.",
      "When a thematic map becomes outdated due to a change in units or loss formula, a warning icon is displayed and can be updated by clicking on it.",
      "Improvements to wizards to automatically create ranges, sizes and colors to set the legend for all layers.",
      "Possibility of modifying some style parameters of the basic themes of the Data group.",
      "Incorporation to the QGISRed Legend Editor of the layers created by Queries (thematic maps, hydraulic sectors, trees, etc.).",
      "Added Results layers to the Legend Editor to customize its style.",
      "Option to save legends at the project level, or at the user level to apply them to new projects.",
      "Option to store wizards with which to adapt the legend to the data, instead of saving a preconfigured legend.",
      "Creation of a QGISRed library of symbols, ramps and color palettes, accessible from the Legend Editor and editable from QGIS.",
      "Option to consolidate the imported parameters related to the assignment of demands by sectors in a QGISRed theme.",
      "Option to distribute global demand or by sectors based on the diameters that converge at the candidate nodes.",
      "Option to declare consumption by linear sections or by polygons, as an alternative to specific consumption.",
      "Option to consolidate imported specific consumption in a QGISRed theme.",
      "Option to manage specific consumption topics and add several demands to the same topic.",
      "Recognition of various units when declaring the consumption to be imported.",
      "Option to assign specific demands to the ends of the nearest pipe instead of directly searching for the nearest nodes.",
      "Option to consider or not the ends of pumps and valves as possible demand nodes.",
      "Option to distribute specific demands based on the diameters of the pipes that converge at the nodes, or in combination with their distance from the consumption points.",
      "Notification of loaded nodes that are more than a given distance from consumption points.",
      "Possibility of editing and reusing links between consumption points and demand nodes.",
      "Assignment of demands to nodes based on connections declared as elements of the Digital Twin.",
      "Differentiation of base demands by categories, both in specific consumption and by connections, creating multiple demands at the nodes.",
      "Option to load demands only from the selected sectors, consumption points or connections.",
      "Option to use your own theme to assign efficiencies and patterns by sector, import their values and edit them.",
      "Option to apply hydraulic efficiencies and assign demand patterns by categories.",
      "Option to readjust efficiencies and patterns declared at one level using those imposed at a higher level (categories → sectors → global).",
      "New option in the Queries menu to perform all types of statistics with the model data and results.",
      "Evaluation of the statistics of a magnitude, classified by ranges or classes of said magnitude or another magnitude of the same type of element.",
      "Ability to use a second classification magnitude to create double entry tables.",
      "Possibility of applying filters on the starting data and viewing the elements affected by the query on the map.",
      "Display of statistics in histograms or through an exportable table of values.",
      "Export of the query configuration and its subsequent import.",
      "Revised the Connectivity, Hydraulic Sectors and Tree Graphs tools: new names, relocation of layers, style changes, etc.",
      "New topic to highlight isolated demands in the hydraulic sectors.",
      "Possibility of creating and managing the existence of several themes for Tree Graphs (now called Minimum Cost Trees).",
      "New progress dialog to show the progress of hydraulic and quality calculations.",
      "The progress dialog can be paused to carefully observe the progress of the calculations.",
      "The progress dialog can be omitted for greater speed in calculations, except for networks with long processing times.",
      "Option to show all calculation moments in the results map and other panels in which time intervenes.",
      "Option to show the moment of the simulation in various formats: time elapsed since the beginning (in accumulated hours or grouped by days) or calendar time (in 24 hour or am/pm format).",
      "New button bar to perform animations at controlled speed or step by step.",
      "The variables chosen to display the results of nodes and lines are now highlighted and have their own color assigned.",
      "New tab with several options to improve the visualization of the results on the map, the symbology and the background color.",
      "New option to show in a histogram the distribution of the current variable of nodes or lines and their accumulated values, at the current moment.",
      "New option to show a simplified evolution curve of the current variable of nodes or lines, for the chosen element on the map.",
      "When rescuing the Results Panel, the options from the last action are preserved, instead of applying the default options.",
      "When the scenario data is changed, the result layers display a warning icon, which can be updated by clicking on it.",
      "New buttons to navigate the evolution curves graph.",
      "New button with multiple options to customize the appearance of all the components of the graph.",
      "Adaptation of the time scale according to the options chosen in the Results Panel.",
      "Possibility of showing all time moments or only scheduled moments, as chosen in the Results Panel.",
      "Optional synchronization of the cursor with the current moment of the Results Panel.",
      "Incorporation of the evolution of the volume of a tank or the overflow flow, as new variables.",
      "Option to represent the evolution curves of some global variables for the entire system.",
      "New button to display in a table the numerical values of the passing points of the evolution curves and export their values to a CSV file.",
      "New button to export graphs as images.",
      "Option to save and recall evolution chart settings including template creation.",
      "Ability to create and keep open several evolution curve windows at the same time.",
      "All QGISRed menu options, dialogs and messages are now also displayed in French and Brazilian Portuguese, when this language is chosen for the QGIS interface. Currently they are already shown in English and Spanish.",
      "All security controls verified and incidents related to code quality, reported by the QGIS Security Scan system, corrected.",
      "Checked version 0.19 code for compatibility with Qt6 and QGIS 4.xx.",
      "End of support for QGISRed libraries on 32-bit (x86) systems. From now on QGISRed will only work on 64-bit systems.",
      "Removed the minimize and maximize buttons in all dialogs built into the libraries.",
      "Revised the names of some fields in shape files, dbf tables and CSV files, for uniformity. All identifier fields now end with ID.",
      "Revised the property names displayed in all QGISRed dialogs, depending on the language, for uniformity.",
      "Revised the decimals shown in the topic attribute tables, depending on the units used.",
      "Review of possible situations when loading GISRed libraries to avoid repeated attempts.",
      "Review of the export format of INP files to avoid overlaps that caused reading errors.",
      "Corrected a bug that prevented creating new behavior curves.",
      "Checking that the identifiers of the elements, curves and patterns do not contain any blank space.",
      "Corrected an error that prevented consolidating the civil start time of the simulation.",
    ],
  },
  {
    version: "0.18",
    fecha: "30 abril 2026",
    fechaEn: "30 April 2026",
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
    itemsEn: [
      "Improvements to the Project Manager. New buttons for moving and exporting projects, and new options for renaming them.",
      "All layers managed by QGISRed are now identified by their own Id rather than by name, which makes it possible to work in several languages.",
      "Revision of the map symbols, labels and warnings associated with every layer managed by QGISRed.",
      "Closer integration of the Element Property Editor, preserving the layer properties and refreshing the data in every affected window, including the attribute table.",
      "The style of every layer managed by QGISRed is stored in .qml files at three levels: default, user and project.",
      "All the quantities handled by QGISRed are stored in a dedicated table, specifying the units and decimal places to display for each unit system and case.",
      "A purpose-built Legend Editor for customising ranges or classes, colours and sizes of every legend managed by QGISRed.",
      "Wizards for customising the legends automatically.",
      "A new menu and a new toolbar to host the options aimed at querying data and results.",
      "Reorganisation of the layers in the Queries group, and of the storage of the corresponding shapefiles within the project folder structure.",
      "New tool for locating any element on the map by its Id and identifying the connected elements, with the option to navigate through them.",
      "New panel for inspecting the data and results of any selected network element. The results are synchronised with the current simulation instant.",
      "New dialog for creating thematic maps of some of the quantities associated with the different element types handled by QGISRed.",
      "New panel for locating on the map the elements that meet certain criteria on the data or the results. Synchronised with the results for the current simulation instant.",
      "Improved format for the INP file exported from QGISRed, closer to what the EPANET Toolkit would export.",
      "The EPANET 2.2 calculation engine has been replaced by the new version 2.3, up to the most recent revision 2.3.5.",
      "Simulation results are read directly from the EPANET binary files, for faster and smoother navigation.",
      "The Status Report has been added to the results panel in a new tab, always available.",
      "Export of all the results of a simulation to a structured CSV file.",
      "New option to display various statistics on the results over the whole simulation period.",
      "New window showing the time series of any quantity of an element over the simulation period, with the option to overlay several curves for the same or different quantities.",
      "Improvements to the Demand Builder for point demands. Revision of the algorithms and automatic loading of the links. New theme for the demand points.",
      "Revision of the hydraulic sector identification tool and detection of isolated consumption.",
      "Revision of the algorithm for identifying shutdowns. Detection of isolated consumption.",
      "New project-level options for transferring the demands of the service connections to the nodes. Classification of demands by pattern.",
      "Version 0.18 has been made compatible with the new QGIS 4.0 releases.",
      "All QGISRed dialogs, panels, messages and layer names have been translated into Spanish.",
      "All QGISRed icons have been redesigned for a more uniform and pleasant appearance.",
      "The provisional QGISRed manual is now hosted on the web in English and Spanish for online consultation through the GitBook collaborative platform.",
      "Acknowledgement to the Inter-American Development Bank (IDB) for financially supporting all the improvements made in this version 0.18.",
      "Fixed a problem when loading field data related to the decimal separator.",
      "Fixed an error that prevented the demands of isolated areas from being cancelled.",
      "The size of the Description field, used to report the service connection demands loaded onto each node, is now limited.",
    ],
  },
  {
    version: "0.17",
    fecha: "febrero 2026",
    fechaEn: "February 2026",
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
    itemsEn: [
      "Resolved the incompatibilities with the latest QGIS versions, up to 3.44",
      "Version 2.2 of the EPANET Toolkit has been replaced by the new version 2.3",
      "New exploration tool for identifying isolation polygons, highlighting the manual valves and service connections affected",
      "The results now show up to 13 statuses for pipes, valves and pumps",
      "Transfer of statuses and quality values so simulations can be chained over successive periods",
      "New options for resetting roughness values, elevations and diameters in the scenario builder",
      "New option for exporting and importing scenarios in EPANET format",
      "The projects listed in the Project Manager can now be sorted temporarily by the different fields by clicking on the column headers",
      "New options in the Project Manager for sorting, exporting, deleting and renaming projects",
      "New tab in the import dialog for importing QGISRed projects",
      "New buttons and menu options for opening and saving projects",
      "The path of the .qgz file is now stored as a relative path in the metadata.txt file",
      "If the associated .qgz file cannot be found when opening a QGISRed project, the option to look for it is now offered",
      "When a qgz project is opened directly from QGIS, it is automatically added to the Project Manager if it is a QGISRed project",
      "Changes to the icons and wording of some menu options",
      "Changes to the symbology of some elements: nodes with demand, multiple demands, emitters and contaminant sources",
      "The layers in the Input group are now reordered automatically",
      "The number of elements each layer contains is now shown next to its name",
      "All elements now show their ID on mouse hover",
      "Removed the default notification about pumps or valves with a free end",
      "Increased precision when writing certain numeric values to the shapefiles",
      "Changes to the message shown when downloading the required dependencies",
      "The 'metadata.txt' file is now always closed after being opened from the About dialog",
      "The default tolerance when creating a project or importing shapefiles is now 0, to avoid odd behaviour with WGS84 coordinates",
      "Removed the default creation of the Signals.dbf file when a new project is created",
      "Removed the unexpected creation of the service connections theme during some graphical editing operations",
      "The representation of pump curves declared by 3 points has been extended to the whole quadrant",
      "When a pipe material is declared and the installation date is omitted, its roughness is determined as if the pipe were new",
      "Fixed an error that prevented pumps and valves from being added on nodes with a connectivity degree of two",
      "Fixed an error when displaying the default pattern in the patterns dialog, and when declaring or modifying it in the analysis options",
      "Fixed an error storing the installation date of isolation valves.",
      "Fixed an error when interpolating elevations where the point falls on one of the edges of the grid",
      "Fixed an error when distributing demands in proportion to pipe length",
      "Pump and valve endpoints are now excluded from every option when assigning demands to nodes from the Nodal Demand Builder or from the service connections",
      "Fixed an error that prevented demands from being accumulated on the same node when assigning point consumption from the Nodal Demand Builder",
      "Fixed an error when loading demands from a sector layer",
      "Fixed an error that confused the price pattern with the speed pattern when reading the INP file",
      "Fixed an error when importing INP files with quality sources that have no pattern defined",
      "Fixed several errors when importing an INP file, related to time formats and time-based controls",
      "Fixed an error reading the LABELS section of an INP file, which treated keywords as case sensitive",
      "Fixed certain import and export errors for curves and patterns related to the decimal separator",
      "Fixed an error with the decimal symbol in the PDA model options",
    ],
  },
  {
    version: "0.16",
    fecha: "14 julio 2022",
    fechaEn: "14 July 2022",
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
    itemsEn: [
      "New options in the nodal demand manager for declaring consumption for the whole network or by zone",
      "The links between point consumption and nodes can now be exported, edited and reimported",
      "New options for importing, exporting and deleting demand scenarios by category",
      "New tools in the nodal demand manager for taking water efficiency into account or assigning consumption patterns by sector.",
      "New Scenario Manager for storing and retrieving various model parameters in bulk",
      "Automatic calculation of pipe length from the coordinates of the vertices",
      "Automatic completion of the service connection layout, either with a segment perpendicular to the nearest pipe or with a link to the nearest node.",
      "Service connections of a preset length can now be drawn automatically from a point on a pipe or from a node.",
      "New option to mirror a service connection with the reverse tool",
      "New option to import service connections as points, creating perpendiculars to the pipes or connections to the nearest nodes.",
      "New IsActive field on service connections to define whether they are operational",
      "Verification of the contact point of a service connection with a pipe or node at both ends.",
      "The status of the manual valves is now transferred before the hydraulic sectorisation is calculated",
      "When exporting to INP, the head loss coefficient of the isolation valves is transferred to the pipes",
      "Declaration, editing and deletion of meters of various types, as new elements of the Digital Twin",
      "Editing, reading and saving of the signals associated with the meters",
      "New dialog for reading field data and exporting to CSV the values corresponding to the simulation period",
      "New option to export the field data together with the INP file",
      "New fields in the import dialog, so more information about the elements can be imported",
      "New option to show elements with any issue in the auxiliary themes during the shapefile import process.",
      "New buttons and a new slider in the results panel",
      "Improvements to the labels used to display the results",
      "New result type for viewing the Status of the lines",
      "Improvements to searching from the property editor",
      "When exporting the INP file, a new drop-down lists the paths of the EPANET executables found, so the exported file can be opened automatically",
      "Patterns are now classified by type when an INP file is imported",
      "New warning when the Id of an element is autocompleted",
      "Changes to the order and names of some toolbar buttons",
      "Changes to the visual styles of some of the elements",
      "New link to the QGISRed website in the info window",
      "Fixed the reading of the curve Id on GPV valves and its editing from the element properties window",
      "Fixed an error assigning default values when importing the bulk and wall reaction coefficients",
      "Fixed an error, and the message shown, when reading contaminant sources in tanks and reservoirs",
      "Fixed a problem that caused the point selection tools to stop working for certain elements",
      "Fixed an error in the tool that creates T-connections in bulk",
      "Fixed an error with the multiple selection tool",
      "Fixed an error in the polygon selection tool when the reference system was not the assumed default",
      "Fixed an error with the snapping tool (point selection of elements) in QGIS 3.26",
    ],
  },
  {
    version: "0.15",
    fecha: "10 marzo 2022",
    fechaEn: "10 March 2022",
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
    itemsEn: [
      "Management of manual valves (import, creation, deletion, property editing, interaction with the pipe status, and so on)",
      "New tool for changing the status of line elements and manual valves",
      "New symbology for pipes, pumps, control valves and manual valves according to their status",
      "Cancellation of the demands isolated by the closure of pipes or overlapping valves during the simulations",
      "Assignment of demands to nodes from demand sectors and point demands, with a range of options",
      "Improvements to the property editing window (multiple selection, connected elements, visited elements, centring the selected element)",
      "Revision and extension of the analysis options (hydraulics, quality, times and energy)",
      "The new EPANET 2.2 parameters have been added to the forms (tank overflow, pressure-dependent demands)",
      "The buttons and menus of the main toolbar have been highlighted",
      "English is the default and, for now, the only language",
      "Improved rule editing (with times and clock times)",
      "Fixed an error writing demand values with more than 4 digits to the left of the decimal point",
      "Fixed an error with the time labels used to select results",
      "Fixed an error converting numbers during the elevation interpolation process",
      "Fixed errors reading and writing rules",
      "Fixed an error with the order of the rules",
      "Fixed an error with rules that use the comma as the decimal separator",
      "Fixed a problem assigning the project projection",
      "Fixed an error editing properties while working with raster layers",
    ],
  },
  {
    version: "0.14",
    fecha: "11 junio 2021",
    fechaEn: "11 June 2021",
    items: [
      "Nueva herramienta para editar la geometría de las acometidas",
      "Prioridad de los elementos del Gemelo Digital a la hora de seleccionar los objetos para editar sus propiedades o borrarlos",
      "La opción hidráulica Demand Multiplier admite ahora un valor con decimales",
      "Visualización del separador decimal definido por el usuario en las diferentes ventanas del plugin",
      "Corregido error grave al leer los metadatos de modelos anteriores, que impedía trabajar con ellos",
      "Corregido un error al instalar el plugin sin disponer previamente de las dependencias necesarias",
      "Corregido un error al interpretar el formato de la hora en las leyes de control simples",
    ],
    itemsEn: [
      "New tool for editing the geometry of the service connections",
      "Digital Twin elements now take priority when selecting objects to edit their properties or delete them",
      "The Demand Multiplier hydraulic option now accepts a decimal value",
      "The decimal separator defined by the user is now shown in the various plugin windows",
      "Fixed a serious error reading the metadata of earlier models, which made it impossible to work with them",
      "Fixed an error when installing the plugin without the required dependencies already in place",
      "Fixed an error interpreting the time format in simple controls",
    ],
  },
  {
    version: "0.13",
    fecha: "26 mayo 2021",
    fechaEn: "26 May 2021",
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
    itemsEn: [
      "New menu grouping the tools for working with Digital Twins",
      "Creation of service connections through a dedicated tool, and their addition to the delete tool",
      "Dedicated form for editing the properties of the service connections",
      "Loading of automated meter readings in various formats onto the service connections or the model nodes",
      "The service connection demand curves have been added to the pattern editor",
      "New demand manager rounding out the import from file, the export to file and the selective deletion of base demands at the nodes and their patterns",
      "Faster access to the element property editing window for large networks",
      "Opening the INP file from the EPANET interface after exporting is now optional",
      "New options for defining the units and the head loss formula when importing data from GIS",
      "The head loss coefficient converter now checks that pipes have been declared before changing formula",
      "Fixed the format of the time options so days can be entered as well as hours, minutes and seconds",
      "Deleting patterns on multiple demands is now limited strictly to the demands that were removed",
      "Fixed the reading of dates in the metadata",
      "Fixed the error that prevented shapefiles from being imported when the same field was selected for different properties",
      "Fixed the error by which some shapefile fields were imported without having been explicitly selected",
      "Translated into English some texts that were only shown in Spanish",
      "Fixed the failure of the graphical selection tools when the QGIS CRS differs from that of the QGISRed data",
      "Fixed the shapefile import error when a feature has no geometry declared",
      "Fixed a display error in the results layers",
    ],
  },
  {
    version: "0.12",
    fecha: "7 enero 2021",
    fechaEn: "7 January 2021",
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
    itemsEn: [
      "Editing of the material-roughness table used to compute roughness as a function of material and age",
      "New import and export of patterns and curves in CSV format",
      "New tool for importing the base demands at the nodes and the Ids of the patterns (single or multiple) from a CSV file",
      "Import of service connections from shapefiles",
      "New tool for obtaining the minimum resistance tree of the network",
      "The EPANET library has been updated to version 2.2",
      "Improved interface for converting the roughness coefficients",
      "Fixed an error displaying Quality results",
      "The current units and head loss formula are refreshed in the status bar when a QGIS project is loaded",
      "Projects imported from INP files are now shown in the project list",
      "Fixed an error occurring when nodes have no coordinates",
      "Negative lengths are now avoided when inserting valves or pumps into pipes",
      "Fixed an access error when the Pattern TimeStep is 0:00",
      "Service connections are now read correctly",
    ],
  },
  {
    version: "0.11",
    fecha: "15 septiembre 2020",
    fechaEn: "15 September 2020",
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
    itemsEn: [
      "Creation of a Json file defining the different projections (the content of the .prj) for use when there is no Internet connection",
      "Implemented the reading of the PUMPS section formats inherited from EPANET 1.1",
      "New single installer for both architectures (x86 and x64)",
      "The units and the head loss formula are shown in the status bar.",
      "The estimation of the roughness coefficient from age and material now supports different head loss formulas and unit systems",
      "Conversion of roughness coefficients between different head loss formulas",
      "Tool for creating a backup copy of the project (manual restore)",
      "Fixed the error loading the plugin in QGIS 3.14.15",
      "Fixed an error caused by not allowing times to be expressed in a format other than AM/PM in the Controls section",
      "Fixed an error caused by being unable to access the Windows user information on certain computers",
      "New blue colour in the labels for line-type results",
      "Fixed the error that lost the metadata when cloning a project",
      "Fixed the error that froze the map when saving a results scenario",
      "New alphabetical order in the link and node lists of the Simple Controls",
    ],
  },
  {
    version: "0.10",
    fecha: "12 mayo 2020",
    fechaEn: "12 May 2020",
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
    itemsEn: [
      "Fixed the abnormal behaviour of the create/import tool when other layers are open",
      "The section headers of the INP file are now written in English",
      "Element properties are now validated to prevent lines from having the same ID at both end nodes",
      "Fixed an error importing tanks",
      "Improved vertex simplification to remove repetitions at the starting point",
      "Fixed an error writing the Time Options",
      "The metadata has been restructured and unified into the _Metadata.txt file",
      "Fixed the error merging pipes with the same characteristics when they start and end at the same node",
      "The plugin now checks whether a new version exists and notifies the user",
      "Fixed the display of the legend icons for QGIS 3.12",
      "Fixed a failure that prevented result styles from being stored",
      "Fixed an error reading the decimal separator when the user works in the English format and changes the decimal separator to a comma",
      "LayerManagement is now reached from EditProject to control layer visibility and creation",
      "The projection is now stored correctly in the shapefiles",
    ],
  },
];

export function CapacidadesPageContent({ locale = "es" }: { locale?: string }) {
  const readMoreText = localize(locale, "Leer más", "Read more");

  const novedadesArticles = capacidadesArticles.filter((a) => a.group === "novedades");
  const destacadasArticles = capacidadesArticles.filter((a) => a.group === "capacidadesdestacadas");
  const historicoArticles = capacidadesArticles.filter((a) => a.group === "historicodeversiones");
  const historicoVersions = Array.from(new Set(historicoArticles.map((a) => a.version!))).sort((a, b) =>
    b.localeCompare(a, undefined, { numeric: true })
  );

  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <div className="columns-1 md:columns-2 gap-12">
          {localize(locale,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", breakInside: "avoid" }}>
                Después de la{" "}
                <Link href="/presentacion" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
                  Presentación
                </Link>
                , estarás ansioso por saber qué capacidades ofrece al usuario el plugin QGISRed. En esta sección te las
                contamos. Pero puesto que es un producto aún en desarrollo, iniciado hace algunos años, lo vamos a hacer
                por etapas.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En primer lugar te mostraremos las{" "}
                <a href={anchorHash("novedades", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Últimas novedades</a>
                {" "}incluidas en la versión más reciente. A continuación te resaltaremos las{" "}
                <a href={anchorHash("capacidadesdestacadas", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Capacidades más importantes</a>
                {" "}ya desarrolladas, para que no tengas que descubrirlas haciendo un repaso exhaustivo del manual, pero si lo prefieres puedes echar una leída rápida a todas las
                <a href={anchorHash("prestacionesactuales", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}> Capacidades ya implementadas</a>
                . Finalmente te haremos un adelanto de lo que está por llegar en{" "}
                <a href={anchorHash("proximasprestaciones", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Próximas prestaciones</a>
                . Y para los más curiosos hemos reservado la última sección, donde podrás ver cómo ha ido evolucionando el producto desde sus inicios, y las mejoras introducidas en{" "}
                <a href={anchorHash("historicodeversiones", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>cada Versión</a>
                .
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Para que tengas una idea más exacta de la numeración seguida en el versionado, observa que todas las
                versiones actuales empiezan por 0, por ser un producto aún en desarrollo. El objetivo de la primera versión
                de QGISRed es concluir todas las mejoras previstas sobre lo que actualmente ofrece EPANET 2.2, completar
                las capacidades adicionales orientadas a facilitar la construcción del modelo, y finalizar la extensión del
                modelo para contemplar todos los elementos adicionales necesarios y sus funcionalidades, hasta poder
                reproducir el comportamiento real de una red para cualquier periodo elegido, en conexión con los datos de
                campo, como primer paso para confeccionar un Gemelo Digital.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En ese momento lanzaremos la versión 1.0 y abriremos las puertas a completar el producto con otras
                prestaciones mucho más prácticas y profesionales. Mientras tanto, vamos por la versión 0.15 y estimamos
                que quedan unas 5 versiones adicionales para concluir todos los objetivos previstos. Básicamente falta por
                completar la introducción de los datos para hacerla aún más ágil y potente, añadir algunos parámetros más
                a los componentes, mejorar ciertos aspectos estéticos, aumentar la agilidad y alternativas a la hora de
                mostrar los resultados, y completar toda la casuística para reproducir la realidad con mayor fidelidad, lo
                que puede conllevar añadir algunos componentes más en la parte del Gemelo Digital.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", breakInside: "avoid" }}>
                Entra en las secciones siguientes, y conocerás todo ello con más detalle.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", breakInside: "avoid" }}>
                After the{" "}
                <Link href="/presentacion" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
                  Presentation
                </Link>
                , you will be eager to know what capabilities the QGISRed plugin offers. In this section we will tell you. Since it is still a product in development, we will do it in stages.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                First we will show you the{" "}
                <a href={anchorHash("novedades", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>What&apos;s New</a>
                {" "}included in the most recent version. Then we will highlight the{" "}
                <a href={anchorHash("capacidadesdestacadas", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Featured Capabilities</a>
                {" "}already developed, so you don&apos;t have to discover them by reading the entire manual. If you prefer, you can also take a quick look at all{" "}
                <a href={anchorHash("prestacionesactuales", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Current Capabilities</a>
                . Finally, we will give you a preview of what is coming in{" "}
                <a href={anchorHash("proximasprestaciones", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Road Map</a>
                . And for the most curious, we have reserved the last section, where you can see how the product has evolved from its beginnings, and the improvements introduced in{" "}
                <a href={anchorHash("historicodeversiones", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>each Version</a>
                .
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                To give you a more accurate idea of the versioning, note that all current versions start with 0, as the product is still in development. The goal of the first version of QGISRed is to complete all planned improvements over what EPANET 2.2 currently offers, complete the additional capabilities aimed at facilitating model construction, and finalize the model extension to include all additional necessary elements and their functionalities, until the real behaviour of a network can be reproduced for any chosen period, in connection with field data, as a first step towards building a Digital Twin.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                At that point we will launch version 1.0 and open the doors to completing the product with other much more practical and professional features. In the meantime, we are on version 0.15 and estimate that there are about 5 additional versions to complete all the planned objectives.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", breakInside: "avoid" }}>
                Enter the following sections, and you will learn all about it in more detail.
              </p>
            </>
          )}
          </div>
        </div>
      </section>

      {/* Novedades */}
      <section id={anchorId("novedades", locale)} className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Novedades versión 0.19", "What's New in version 0.19")} />

          {localize(locale,
            <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              Esta nueva versión 0.19 de QGISRed incluye numerosas mejoras y nuevas prestaciones. En las fichas siguientes se destacan las <strong>novedades más importantes de la versión 0.19. </strong>
              Para una descripción más detallada de todas las novedades visitar la sección{" "}
              <a href={anchorHash("historicodeversiones", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Histórico de versiones</a>.
            </p>,
            <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              This new version 0.19 of QGISRed includes numerous new features and improvements. The following cards highlight the <strong>most important new features of version 0.19.</strong>{" "}
              For a more detailed description of all the new features, visit the{" "}
              <a href={anchorHash("historicodeversiones", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Version History</a> section.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {novedadesArticles.map((article) => (
              <CapacidadCard
                key={article.slug}
                slug={getArticleSlug(article, locale)}
                title={localize(locale, article.title, article.titleEn, article.titleFr, article.titlePt)}
                description={localize(locale, article.excerpt, article.excerptEn, article.excerptFr, article.excerptPt)}
                readMoreText={readMoreText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capacidades Destacadas */}
      <section id={anchorId("capacidadesdestacadas", locale)} className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Capacidades destacadas", "Featured Capabilities")} />

          {localize(locale,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En esta sección queremos resaltar las capacidades más destacadas de QGISRed, en lo que llevamos desarrollado
                hasta ahora. Aunque en el Manual se reflejan todas las capacidades de la aplicación, su lectura no siempre
                resulta amena. Por otra parte, desde aquí te podemos contar la motivación, peculiaridades y alcance de cada
                una de las capacidades destacadas.
              </p>
              <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Como son muchas, las hemos ordenado por temática. Además, poco a poco las iremos completando, a medida que tengamos más contenidos. Al igual que en la sección de{" "}
                <a href={anchorHash("novedades", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Novedades</a>
                , en las fichas siguientes pretendemos hacer solo una introducción a cada capacidad destacada para motivarte y despertar tu interés. Para profundizar más en ellas te remitiremos a los tutoriales y vídeos, y en último caso al Manual.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                In this section we want to highlight the most outstanding capabilities of QGISRed developed so far. Although the Manual covers all application capabilities, it is not always easy reading. From here we can tell you the motivation, peculiarities and scope of each featured capability.
              </p>
              <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                There are many, so we have ordered them by topic. We will gradually complete them as we have more content. As in the{" "}
                <a href={anchorHash("novedades", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>What&apos;s New</a>
                {" "}section, the following cards are intended to provide only an introduction to each featured capability to motivate you. For further depth, we will refer you to tutorials and videos, and ultimately to the Manual.
              </p>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {destacadasArticles.map((article) => (
              <CapacidadCard
                key={article.slug}
                slug={getArticleSlug(article, locale)}
                title={localize(locale, article.title, article.titleEn, article.titleFr, article.titlePt)}
                description={localize(locale, article.excerpt, article.excerptEn, article.excerptFr, article.excerptPt)}
                imageSrc={article.image}
                imageAlt={localize(locale, article.imageAlt, article.imageAltEn, article.imageAltFr, article.imageAltPt)}
                imageWidth={article.imageWidth}
                imageHeight={article.imageHeight}
                readMoreText={readMoreText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prestaciones Actuales */}
      <section id={anchorId("prestacionesactuales", locale)} className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Prestaciones actuales", "Current Capabilities")} />

          {localize(locale,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                QGISRed ha cumplido ya casi cuatro años de vida, desde que comenzó su andadura a finales de 2018. Desde
                entonces no hemos parado de introducir mejoras, aunque quizás no al ritmo deseado por no haberle podido
                dedicar atención exclusiva durante ese tiempo. Pero si echamos la vista atrás, las prestaciones que
                ofrece ya en su última versión son muy notables.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Algunas de estas prestaciones se describen con más detalle en las{" "}
                <a href={anchorHash("novedades", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Últimas Novedades</a>
                , o en las{" "}
                <a href={anchorHash("capacidadesdestacadas", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Capacidades Destacadas</a>
                , pero para saber más sobre otras prestaciones tendrás que consultar el{" "}
                <Link href={{ pathname: "/utilizacion", hash: anchorHash("manualusuario", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Manual</Link>
                , o los{" "}
                <Link href={{ pathname: "/utilizacion", hash: anchorHash("tutoriales", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Tutoriales</Link>
                {" "}y{" "}
                <Link href={{ pathname: "/utilizacion", hash: anchorHash("videosformativos", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Videos Formativos</Link>
                {" "}que poco a poco vamos desarrollando. También puedes apuntarte a nuestros{" "}
                <Link href={{ pathname: "/difusion", hash: anchorHash("cursos", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Cursos</Link>
                {" "}presenciales o virtuales, aún en elaboración.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                A continuación, te listamos las principales prestaciones que ya ofrece la última versión descargable
                desde el instalador de Complementos de QGIS, las cuales hemos ordenado por temáticas para más claridad.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                QGISRed has now been in development for nearly four years since it started its journey at the end of 2018. Since then we have continued to introduce improvements, and looking back the capabilities offered in its latest version are very notable.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Some of these capabilities are described in more detail in{" "}
                <a href={anchorHash("novedades", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>What&apos;s New</a>
                , or in{" "}
                <a href={anchorHash("capacidadesdestacadas", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Featured Capabilities</a>
                , but to learn more about other capabilities you will need to consult the{" "}
                <Link href={{ pathname: "/utilizacion", hash: anchorHash("manualusuario", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Manual</Link>
                , or the{" "}
                <Link href={{ pathname: "/utilizacion", hash: anchorHash("tutoriales", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Tutorials</Link>
                {" "}and{" "}
                <Link href={{ pathname: "/utilizacion", hash: anchorHash("videosformativos", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Training Videos</Link>
                {" "}we are gradually developing. You can also sign up for our{" "}
                <Link href={{ pathname: "/difusion", hash: anchorHash("cursos", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Courses</Link>
                , both in-person and online, still in preparation.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Below, we list the main capabilities already offered by the latest version downloadable from the QGIS Plugin installer, ordered by topic.
              </p>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 items-start">
            {prestacionesActuales.map((group) => (
              <PrestacionGroup
                key={group.group}
                title={localize(locale, group.group, group.groupEn, group.groupFr, group.groupPt)}
                items={localize(locale, group.items, group.itemsEn, group.itemsFr, group.itemsPt)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Próximas Prestaciones */}
      <section id={anchorId("proximasprestaciones", locale)} className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Próximas prestaciones", "Road Map")} />

          {localize(locale,
            <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              Como ya sabes, la versión 1.0 de QGISRed está aún en desarrollo. A continuación, te adjuntamos una lista de
              las principales mejoras que tenemos previsto incorporar para completar esta versión. La lista que se acompaña
              no es cerrada, y puede estar sujeta a cambios.
            </p>,
            <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              As you know, version 1.0 of QGISRed is still under development. Below is a list of the main improvements we plan to incorporate to complete this version. The list is not exhaustive and may be subject to changes.
            </p>
          )}

          <div>
            {proximasPrestaciones.map((group) => (
              <PrestacionGroup
                key={group.group}
                title={localize(locale, group.group, group.groupEn, group.groupFr, group.groupPt)}
                items={localize(locale, group.items, group.itemsEn, group.itemsFr, group.itemsPt)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Histórico de Versiones */}
      <section id={anchorId("historicodeversiones", locale)} className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Histórico de versiones", "Version History")} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 100%" }}>
              {localize(locale,
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
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    The process of developing a software product is complex and requires many hours of dedication and code review. From the initial conception of a procedure to its final implementation there are many intermediate tests, and errors always arise where least expected. Each new version tries to introduce new capabilities, while at the same time it is inevitable to correct errors in what appeared to be already consolidated.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    What follows is a record of the advances and corrections made in successive versions of QGISRed, from version 0.6 which was first uploaded to the QGIS repository.
                  </p>
                </>
              )}

              <div className="mb-4">
                {historico.map((item) => (
                  <AccordionItem
                    key={item.version}
                    title={localize(
                      locale,
                      `Cambios en la versión ${item.version} – ${item.fecha}`,
                      `Changes in version ${item.version} – ${item.fechaEn}`
                    )}
                  >
                    <ul className="list-none p-0 m-0">
                      {localize(locale, item.items, item.itemsEn, item.itemsFr, item.itemsPt).map((li, idx) => (
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

          {historicoVersions.map((version) => (
            <div key={version} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {historicoArticles
                .filter((article) => article.version === version)
                .map((article) => (
                  <CapacidadCard
                    key={article.slug}
                    slug={getArticleSlug(article, locale)}
                    title={localize(locale, article.title, article.titleEn, article.titleFr, article.titlePt)}
                    description={localize(locale, article.excerpt, article.excerptEn, article.excerptFr, article.excerptPt)}
                    imageSrc={article.image}
                    imageAlt={localize(locale, article.imageAlt, article.imageAltEn, article.imageAltFr, article.imageAltPt)}
                    imageWidth={article.imageWidth}
                    imageHeight={article.imageHeight}
                    readMoreText={readMoreText}
                    eyebrow={localize(locale, `Novedades v${version}`, `What's New v${version}`)}
                  />
                ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
