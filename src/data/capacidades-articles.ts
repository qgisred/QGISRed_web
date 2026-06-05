export interface CapacidadArticle {
  slug: string;
  title: string;
  group: "novedades" | "capacidadesdestacadas";
  excerpt: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
}

export const capacidadesArticles: CapacidadArticle[] = [
  // ── Novedades versión 0.18 ────────────────────────────────────────────────
  {
    slug: "mejoras-en-el-almacenamiento-de-resultados-y-su-visualizacion-sobe-el-mapa",
    title: "Mejoras en el almacenamiento de resultados y su visualización sobre el mapa",
    group: "novedades",
    excerpt: "Hasta la versión 0.17 los resultados de una simulación se guardaban en un fichero propio desde donde se configuraban los diferentes ficheros shape asociados a cada variable.",
    paragraphs: [
      "Hasta la versión 0.17 los resultados de una simulación se guardaban en un fichero propio desde donde se configuraban los diferentes ficheros shape asociados a cada variable. Las filas de la tabla de atributos eran los elementos de la red y sus columnas los diferentes instantes de simulación. Esta estructura resultaba finalmente demasiado rígida para desarrollar nuevas herramientas de análisis de los resultados.",
      "Por ello en la versión 0.18 se ha dado un cambio radical. Los diferentes resultados solicitados por cada herramienta de análisis se extraen ahora directamente del fichero binario de salida .out creado por la última versión de la Toolkit 2.3.4. La respuesta es ahora mucho más rápida y la flexibilidad ante cualquier tipo de consulta mucho mayor.",
      "En la nueva estructura de resultados, los elementos siguen ocupando las filas de la tabla de atributos de los ficheros shape, pero las columnas son ahora las diferentes magnitudes asociadas bien a los nudos, o bien a las líneas. Al avanzar en el tiempo, esta tabla se refresca para cada instante.",
      "La nueva estructura ha permitido implementar la confección de diversas estadísticas para cada uno de los elementos de la red, considerando todos sus valores temporales a lo largo de la simulación para la magnitud elegida. Ello se hace por consulta directa al fichero binario de resultados, sin necesidad de volver a simular el escenario.",
      "Si en algún momento el usuario quiere disponer de todos los resultados, para todos los elementos, magnitudes e instantes de tiempo, se ha añadido al menú Calcular la opción de exportar todos ellos a un fichero CSV. Esta nueva forma de almacenar y mostrar los resultados presenta una gran casuística, que se ha ido resolviendo de forma satisfactoria en cada caso. Para conocer en detalle todas las prestaciones de la nueva herramienta de análisis de resultados sobre el mapa, próximamente se elaborará un tutorial específico para ello.",
    ],
  },
  {
    slug: "curvas-de-evolucion-de-las-variables-dinamicas",
    title: "Curvas de evolución de las variables dinámicas",
    group: "novedades",
    excerpt: "Una de las prestaciones que más se echaba en falta en QGISRed era poder mostrar la evolución en el tiempo de cualquiera de las variables dinámicas contenidas en los resultados.",
    paragraphs: [
      "Una de las prestaciones que más se echaba en falta en QGISRed era poder mostrar la evolución en el tiempo de cualquiera de las variables dinámicas contenidas en los resultados. Se trata de una consulta muy útil y habitual, ofrecida por la mayoría de las aplicaciones de análisis de redes.",
      "Para ello se ha añadido una nueva opción en el menú Calcular denominada Curvas Temporales, que abre un estado de la aplicación destinado a mostrar las diferentes curvas de evolución temporal. Estas se muestran en un nuevo panel propio, el cual por defecto se apila debajo del mapa.",
      "Al pinchar sobre cualquier elemento éste se resalta sobre el mapa y automáticamente se muestra la curva de evolución a lo largo de tiempo de la magnitud asociada al mismo que está actualmente seleccionada en el panel de resultados. Al pinchar sobre otro elemento la curva se refresca.",
      "QGISRed permite también superponer varias curvas en el mismo gráfico. Si no se cambia de magnitud, todas ellas quedarán referidas al mismo eje, el cual se re-escala automáticamente. Además, en el lateral de la gráfica se muestra una leyenda, con los nombres por defecto de las distintas curvas, y el color asignado también por defecto. Todos los elementos consultados quedan resaltados en el mapa. Un cursor deslizable permite mostrar el valor de todas las curvas para el instante elegido.",
      "Pero las capacidades de esta herramienta QGISRed van más allá, permitiendo superponer curvas de magnitudes distintas en la misma gráfica. Para la segunda magnitud se usa el eje vertical derecho, y si fueran más de dos se intenta superponer diferentes magnitudes sobre el mismo eje. De esta forma es posible comparar por ejemplo el nivel de un depósito con el estado de la bomba que lo alimenta, o la presión en un nudo frente a su demanda. El panel de la gráfica ofrece otras opciones de navegación, para personalizar el aspecto del gráfico y las curvas o para exportar las mismas. También se pueden mostrar los valores numéricos de los puntos de paso de las curvas en formato tabla. Todas estas prestaciones serán mostradas en detalle en un futuro tutorial.",
    ],
  },
  {
    slug: "confeccion-de-mapas-tematicos",
    title: "Confección de mapas temáticos",
    group: "novedades",
    excerpt: "Si queremos ver en el mapa los valores de una determinada variable calculada para todos los elementos de la red en un instante dado, clasificados por colores o bien como etiquetas, disponemos del panel de resultados.",
    paragraphs: [
      "Si queremos ver en el mapa los valores de una determinada variable calculada para todos los elementos de la red en un instante dado, clasificados por colores o bien como etiquetas, disponemos del panel de resultados para gestionar esta información. Estos valores además son dinámicos y cambian en el tiempo. Pero ¿y si lo que queremos mostrar en el mapa son los valores estáticos de una determinada propiedad física de cualquier elemento, clasificada por rangos de colores? Este es el objetivo de los mapas temáticos, que complementan a los mapas de resultados.",
      "La nueva opción alojada en el menú de Consultas abre un diálogo desde el que podemos elegir la propiedad a mostrar en el mapa, las cuales se muestran clasificadas por el tipo de elemento. Desde este diálogo se pueden activar o desactivar los diferentes mapas temáticos.",
      "Las capas de los mapas temáticos se alojan en un subgrupo dentro del grupo Queries, y se superponen a las capas del grupo Inputs. Automáticamente se establece una clasificación por defecto, según la propiedad elegida, la cual puede editarse desde el Editor de Leyendas de QGISRed para su permanencia. En la tabla de atributos se muestra solo el Id y la propiedad del mapa elegida, ampliada en algunas ocasiones, mientras que las demás propiedades se mantienen ocultas.",
      "Por cada mapa, además de la simbología, se ha cuidado también el formato de la información mostrada en las etiquetas y en los avisos del mapa, de modo que pueden combinarse varias propiedades en la misma etiqueta. Realmente los mapas temáticos comparten los mismos ficheros que las capas del grupo Inputs, de modo que cualquier edición en los datos de estas capas se refleja automáticamente en los mapas temáticos. De hecho, la edición de las capas de los mapas temáticos no está permitida, para unificar las operaciones de edición.",
    ],
  },
  {
    slug: "propiedades-de-los-elementos",
    title: "Propiedades de los elementos",
    group: "novedades",
    excerpt: "Los mapas temáticos y el panel de resultados permiten mostrar sobre el mapa los valores de cualquier propiedad elegida para todos los elementos de la red, o bien clasificarlos por colores.",
    paragraphs: [
      "Los mapas temáticos y el panel de resultados permiten mostrar sobre el mapa los valores de cualquier propiedad elegida para todos los elementos de la red, o bien clasificarlos por colores. Pero ¿y si queremos ver todas las propiedades para un elemento elegido?",
      "En el menú de Consultas de QGISRed se ha añadido una nueva opción denominada Propiedades de los elementos, con este fin. Tras seleccionar esta opción y pinchar sobre cualquier elemento se abrirá una nueva ventana, apilada en el panel lateral derecho, normalmente debajo del panel de resultados, para mostrar las propiedades.",
      "Esta ventana está conectada con el buscador de elementos por ID, el cual puede contraerse o expandirse. De este modo, podemos ver también todos los elementos conectados al elemento seleccionado. Ambos conjuntamente configuran el Explorador de elementos de QGISRed.",
      "El elemento seleccionado es resaltado en el mapa, mientras que el tipo de elemento y su ID se muestran como título de la ventana. Debajo de él se muestran los campos Etiqueta y Descripción, si tuvieran algún contenido.",
      "La ventana de propiedades contiene por ahora dos pestañas. La de datos muestra todas las propiedades del elemento elegido, las cuales cambian según el tipo de elemento, y según se haya declarado o no un modelo de calidad. Para cada propiedad se muestra su valor, con un formato predefinido, y las unidades correspondientes. Cualquier cambio en los datos será reflejado inmediatamente sobre la ventana de propiedades.",
      "Si existen resultados de una simulación se mostrará una segunda pestaña, coloreada en amarillo, para mostrar los resultados vinculados al elemento elegido. Las propiedades mostradas dependen de si se trata de un nudo o de una línea, y también del tipo de elemento dentro de éstos. Los valores de la calidad solo se mostrarán si previamente se ha declarado un modelo de calidad. Para cada variable se muestra su valor, en un formato predefinido, y las unidades correspondientes. Los valores mostrados en esta pestaña están conectados con el navegador temporal del panel de resultados, de modo que al avanzar o retroceder en el tiempo, los resultados se actualizan.",
    ],
  },
  {
    slug: "consultas-por-propiedades",
    title: "Consultas por Propiedades",
    group: "novedades",
    excerpt: "A través de los mapas temáticos podemos mostrar sobre el mapa el valor de una determinada propiedad para todos sus elementos. Pero si queremos saber qué elementos cumplen un determinado criterio...",
    paragraphs: [
      "A través de los mapas temáticos podemos mostrar sobre el mapa de la red el valor de una determinada propiedad para todos sus elementos. Lo mismo puede decirse para los resultados de una simulación, usando el panel de resultados para elegir la variable a observar en el mapa. Finalmente, el explorador de elementos nos ofrece el valor de todas las propiedades de un elemento seleccionado, incluidos los resultados de la simulación para dicho elemento.",
      "Pero si queremos saber qué elementos cumplen un determinado criterio o condición nos veríamos obligados a revisarlos todos visualmente. La herramienta de Consultas por propiedades permite mostrar precisamente los elementos que cumplen uno o más criterios.",
      "La nueva opción del menú Consultas abre una nueva ventana en el panel lateral derecho del mapa, que permanecerá abierta hasta que el usuario la cierre, para poder alternar las consultas con cualquier otra acción.",
      "Primeramente, hay que elegir el tipo de elemento a buscar. Además de los elementos básicos, demandas múltiples, fuentes y elementos del GT, si hay resultados de una simulación se ofrecen también los Nudos y Líneas para consultar globalmente dichos resultados. A continuación, hay que elegir la propiedad a consultar, la cual depende del tipo de elemento elegido.",
      "Seguidamente hay que indicar la condición a cumplir, la cual depende de si la propiedad es numérica o de texto, y finalmente el valor umbral a comparar. Si la propiedad es de texto, se pueden usar filtros, o bien elegirla de un desplegable si es enumerada.",
      "Al lanzar la consulta se resaltarán sobre el mapa los elementos que cumplen la condición, en la parte inferior de la ventana se indicará el número de elementos que cumplen la condición, y las estadísticas de dichos elementos si la variable es numérica. Las estadísticas pueden establecerse sobre la propiedad buscada o sobre cualquier otra propiedad numérica de ese tipo de elemento, y sus resultados pueden exportarse a un fichero CSV.",
      "La herramienta es más completa, pues permite combinar múltiples criterios usando diferentes propiedades del mismo elemento. La ventana se expande en tal caso para editar dichos criterios, los cuales pueden guardarse para recuperarlos posteriormente. Si la propiedad buscada es una propiedad dinámica procedente de los resultados de la simulación, la hora a que corresponden se muestra en la parte superior de las estadísticas, de modo que los elementos seleccionados se irán actualizando al navegar en el tiempo.",
    ],
  },
  {
    slug: "editor-de-leyendas",
    title: "Editor de leyendas",
    group: "novedades",
    excerpt: "Una de las prestaciones más importantes de QGIS es su capacidad para editar los estilos de las capas, y generar mapas muy variados. En QGISRed se ha creado una nueva opción para Editar las Leyendas.",
    paragraphs: [
      "Una de las prestaciones más importantes de QGIS es su capacidad para editar los estilos de las capas, y generar mapas muy variados. Sin embargo la cantidad de opciones ofrecida es abrumadora.",
      "Para simplificar, en QGISRed se ha creado una nueva opción en el menú Project para Editar las Leyendas con unas opciones más limitadas y prácticas, pero asistidas por algoritmos potentes. En cualquier caso, los estilos editados con el Editor de Leyendas de QGISRed son compatibles con los editados desde QGIS y viceversa.",
      "El Editor de Leyendas de QGISRed abre un diálogo donde fundamentalmente se puede modificar los rangos de clasificación de las variables y el número de clases, el color asignado a cada clase y el tamaño del símbolo empleado para cada una.",
      "Primeramente, hay que elegir la capa cuya leyenda se quiere editar. Para facilitar la elección, éstas se muestran agrupadas conforme a los grupos y subgrupos de capas existentes. El editor alcanza a todas las capas gestionadas por QGISRed, alojadas en los grupos Inputs, Queries, Issues y Results, si bien no todas ellas ofrecen las mismas opciones.",
      "Una vez elegida la capa se indican sus unidades y se detecta si la variable de clasificación es numérica o de texto. En el primer caso la clasificación es por rangos de valores y en el segundo caso por valores enumerados. También se diferencian las capas que contienen elementos lineales de las que contienen elementos puntuales, mostrando en este caso el símbolo usado para representarlos.",
      "En todos los casos, el número de clases a considerar es variable pudiendo incrementarse o decrementarse. El color, el tamaño, el rango de valores y la leyenda de cada clase puede modificarse manualmente pinchando en la casilla correspondiente, aunque con ciertas restricciones. Además, la leyenda se actualiza por defecto automáticamente, pudiendo después editarse.",
      "En el caso de variables numéricas existe un asistente para clasificar los rangos automáticamente. Teniendo en cuenta el número de clases establecido se permite calcular los rangos por intervalos iguales, percentiles iguales, cortes naturales, cortes usuales o en base a la desviación estándar.",
      "En relación al tamaño de los símbolos, puede ser único para todas las clases, o incrementarse desde un mínimo a un máximo de forma gradual, cuadrática o exponencial para resaltar mucho más alguna de las clases.",
      "En cuanto a los colores, el asistente permite asignar un mismo color para todas las clases, generar el color de cada clase de forma aleatoria, interpolarlo entre los colores de una rampa con varios puntos de paso, o bien elegirlo entre los colores de una paleta preestablecida.",
      "Para las capas del grupo Inputs solo se considera una clase, pudiendo modificar únicamente el color y tamaño. Una vez editada la leyenda, ésta puede visualizarse en el mapa o guardarse para ser usada solo en el proyecto actual o para todos los proyectos nuevos en adelante.",
    ],
  },
  {
    slug: "identificador-de-elementos-a-traves-de-su-id",
    title: "Identificador de elementos a través de su ID",
    group: "novedades",
    excerpt: "QGISRed dispone ahora de una herramienta para identificar directamente un elemento a través de su Id, resaltándolo en el mapa y mostrando todos los elementos conectados.",
    paragraphs: [
      "Cuando vemos el mapa de una red, fácilmente diferenciamos unos elementos de otros. Pero a veces algunos elementos pueden superponerse, siendo en realidad distintos. La única forma de diferenciarlos definitivamente es asignándoles un identificador único, al menos dentro de su tipo. QGISRed, al igual que EPANET, exige un identificador único para todos los elementos lineales, y también para los nodales. Este identificador se usa también para intercambiar información entre aplicaciones o para asociar diferentes datos a un mismo elemento.",
      "QGISRed dispone ahora de una herramienta para identificar directamente un elemento a través de su Id. Primeramente se elige el tipo de elemento, incluidas demandas múltiples, fuentes y elementos del GD, y a continuación se muestran los Id de todos los elementos de ese tipo o los que responden a un determinado filtro.",
      "El elemento elegido queda resaltado, y si estuviera fuera de la zona visible de la red, ésta se desplaza para mostrarlo. También si el espacio ocupado por el mismo es demasiado pequeño o demasiado grande se ajusta el nivel de zoom para observarlo bien, junto con su entorno.",
      "Además se muestran también en una ventana los Id de todos los elementos conectados al elemento encontrado, incluidos los elementos del GD. Pinchando una vez sobre cualquiera de los elementos conectados se resalta en el mapa, y pinchando dos veces, pasa a ser el nuevo elemento buscado. Esto permite navegar por la red a través de los elementos contiguos.",
      "Una vez identificado el elemento buscado, se pueden observar todas las propiedades del mismo. También es posible realizar la operación inversa, esto es, pinchar un elemento del mapa y observar su Id, sus propiedades y los Id de todos los elementos conectados.",
    ],
  },
  {
    slug: "otras-y-depuracion-de-errores",
    title: "Otras y depuración de errores",
    group: "novedades",
    excerpt: "Además de todo lo anterior, la versión 0.18 incluye otras muchas mejoras de menor relevancia y continúa depurando las prestaciones ofrecidas por QGISRed en versiones anteriores.",
    paragraphs: [
      "Además de todo lo anterior, la versión 0.18 incluye otras muchas mejoras de menor relevancia. También se han continuado depurando las prestaciones ofrecidas por QGISRed en versiones anteriores.",
      "Si quieres conocer con más detalle la totalidad de mejoras y correcciones realizadas en la versión 0.18, visita más abajo el registro de todos los cambios, en la sección Histórico de versiones.",
    ],
  },

  // ── Capacidades Destacadas ────────────────────────────────────────────────
  {
    slug: "incorporacion-de-las-valvulas-de-corte-al-modelo-de-qgisred",
    title: "Incorporación de las Válvulas de Corte al Modelo de QGISRed",
    group: "capacidadesdestacadas",
    excerpt: "Si quieres utilizar el modelo de la red para analizar cómo se ven afectados los flujos al seccionar la red por las válvulas de corte, tendrás que incorporar antes al modelo todas las válvulas de corte existentes.",
    image: "/images/capacidades/Diapositiva12.png",
    imageAlt: "Válvulas de corte en QGISRed",
    paragraphs: [
      "Si quieres utilizar el modelo de la red para analizar cómo se ven afectados los flujos al seccionar la red por las válvulas de corte, bien para separar zonas de forma permanente, o para aislar una zona de modo temporal mientras se efectúa una operación de mantenimiento, tendrás que incorporar antes al modelo todas las válvulas de corte existentes en la red.",
      "En QGISRed las válvulas de corte se modelan aparte de las válvulas de regulación, y no forman parte del modelo hidráulico para evitar inundar éste con válvulas que solo se utilizan de forma esporádica. Estas válvulas tienen un símbolo distinto para diferenciarlas de las válvulas de regulación. Sin embargo, conservan toda su funcionalidad, permitiendo aislar las zonas como si formaran parte del modelo. Además, si una zona queda desconectada de las fuentes de suministro por el cierre de las válvulas, se anulan sus demandas.",
      "En QGISRed se pueden crear válvulas de corte, editar su trazado y propiedades, borrarlas o importarlas desde ficheros shape.",
    ],
  },
  {
    slug: "soporte-a-las-nuevas-opciones-de-analisis-de-epanet-2-2",
    title: "Soporte a las Nuevas Opciones de Análisis de EPANET 2.2",
    group: "capacidadesdestacadas",
    excerpt: "Una de las mayores aportaciones de la versión 2.2 de la librería de EPANET es la posibilidad de considerar las demandas dependientes de la presión (PDA).",
    image: "/images/capacidades/Diapositiva16-1.png",
    imageAlt: "Opciones de análisis EPANET 2.2 en QGISRed",
    paragraphs: [
      "Una de las mayores aportaciones de la versión 2.2 de la librería de EPANET es la posibilidad de considerar las demandas dependientes de la presión (PDA), frente a la opción de considerarlas fijas (DDA), en un intento de acercar más el comportamiento de la red a la realidad cuando las presiones son insuficientes. Sin embargo, los parámetros que definen dicho comportamiento: la presión requerida, la presión mínima y el exponente de la presión, se declaran por ahora de forma única y global para todos los nudos desde las Opciones de Análisis.",
      "En QGISRed ya se pueden establecer dichas opciones. Además se han revisado todas las demás Opciones de Análisis, para verificar su correcta interpretación. Solamente quedan por activar las opciones estadísticas para mostrar valores máximos, mínimos o rangos.",
      "También QGISRed contempla ya la opción de permitir el desbordamiento de los depósitos cuando están llenos, otra novedad de la Toolkit 2.2.",
    ],
  },
  {
    slug: "asignacion-de-demandas-a-los-nudos-por-sectores-y-desde-los-puntos-de-consumo",
    title: "Asignación de Demandas a los Nudos por Sectores y desde los Puntos de Consumo",
    group: "capacidadesdestacadas",
    excerpt: "QGISRed ofrece dos herramientas muy potentes para asignar la demanda a los nudos de forma masiva, a partir de los consumos declarados por sectores, o bien a partir de la distribución de los puntos de consumo.",
    image: "/images/capacidades/Diapositiva14-1.png",
    imageAlt: "Asignación de demandas en QGISRed",
    paragraphs: [
      "La asignación de las demandas a los nudos de una red, cuando su número es elevado, no puede hacerse de uno en uno. Tampoco es factible asignarlas en grupo, pues cada nudo suele tener una demanda distinta en función de la población abastecida.",
      "QGISRed ofrece dos herramientas muy potentes para asignar la demanda a los nudos de forma masiva, a partir de los consumos declarados por sectores, o bien a partir de la distribución de los puntos de consumo, determinados por las coordenadas GPS de los contadores, por ejemplo.",
      "Para ello se basa en herramientas de análisis espacial propias, que permiten identificar los nudos que caen dentro de cada sector de demanda, o el nudo más próximo a cada punto de consumo. Pero además, podemos elegir los nudos candidatos a recibir las demandas por el diámetro de las tuberías y, en el caso del reparto por sectores, hacer que el consumo se distribuya de forma proporcional a la longitud de éstas. ¡Cuánto ahorro de tiempo! Además puedes arrepentirte, borrar todas las demandas actuales, y probar otra vez.",
    ],
  },
  {
    slug: "mejoras-en-la-navegacion-desde-el-editor-de-propiedades",
    title: "Mejoras en la Navegación desde el Editor de Propiedades",
    group: "capacidadesdestacadas",
    excerpt: "El Editor de Propiedades de QGISRed permite modificar las propiedades del elemento seleccionado, cualquiera que sea su naturaleza, sin necesidad de tener la capa correspondiente previamente seleccionada.",
    image: "/images/capacidades/Diapositiva15.png",
    imageAlt: "Editor de Propiedades QGISRed",
    paragraphs: [
      "El Editor de Propiedades de QGISRed abre una ventana desde la que se pueden modificar las propiedades del elemento seleccionado, cualquiera que sea su naturaleza. No es necesario tener la capa correspondiente a dicho elemento previamente seleccionada, como ocurre con el botón Info de QGIS, lo cual es una gran ventaja. Además, sin cerrar la ventana puedes pinchar sobre otro elemento de la red y actualizar el contenido de la ventana.",
      "En la nueva versión ya es posible navegar por los elementos contiguos sin cerrar la ventana, y además mantener un listado de los últimos elementos visitados para volver a ellos si fuera necesario. Las relaciones de contigüidad se crean al abrir el Editor de Propiedades por análisis espacial, lo que permite saber cuáles son los nudos extremos de una tubería, válvula o bomba; con qué tuberías conecta un nudo, depósito o embalse; qué elementos están sobre una tubería o nudo; o al revés.",
      "Recuerda que todos los cambios realizados en las propiedades no se consolidan hasta cerrar la ventana del Editor de Propiedades. No te olvides nunca de Aceptar la ventana. Si la Cancelas perderás todos los cambios realizados desde su apertura.",
    ],
  },
  {
    slug: "nueva-herramienta-para-cambiar-el-estado-de-los-elementos-y-simbolizacion-segun-su-estado",
    title: "Nueva Herramienta para cambiar el Estado de los Elementos y Simbolización según su Estado",
    group: "capacidadesdestacadas",
    excerpt: "Una de las operaciones más habituales a la hora de modificar un escenario de simulación es cambiar el estado de algún elemento de la red, sea de regulación o no.",
    image: "/images/capacidades/Diapositiva13-1.png",
    imageAlt: "Herramienta de estados en QGISRed",
    paragraphs: [
      "Una de las operaciones más habituales a la hora de modificar un escenario de simulación es cambiar el estado de algún elemento de la red, sea de regulación o no, pasando de estar abierto a cerrado o viceversa.",
      "Para facilitar esta tarea, QGISRed incorpora una herramienta específica que cambia el estado de los elementos al tocar sobre ellos, sin necesidad de abrir el Editor de Propiedades para modificarlo. Además, ahora todos los elementos tienen un color en función de su estado, que cambia al modificar el mismo, incluido el trazo en el caso de las tuberías cerradas. La herramienta es aplicable igualmente a las acometidas y válvulas de corte. En el caso de las válvulas de regulación, éstas pasan por los tres estados posibles en un turno rotativo.",
    ],
  },
  {
    slug: "pequenas-mejoras-y-depuracion-de-errores",
    title: "Pequeñas mejoras y depuración de errores",
    group: "capacidadesdestacadas",
    excerpt: "Además de todo lo anterior, en la versión 0.17 se ha continuado depurando las prestaciones ya ofrecidas por QGISRed.",
    image: "/images/capacidades/qgis-bin_s5ZfejsaKh.png",
    imageAlt: "Mejoras versión 0.17 QGISRed",
    paragraphs: [
      "Además de todo lo anterior, en la versión 0.17 hemos continuado depurando las prestaciones ya ofrecidas por QGISRed.",
      "Si quieres conocer con más detalle todas las pequeñas mejoras y correcciones realizadas en la versión 0.17, visita más abajo el registro de todos los cambios, en la sección Histórico de versiones.",
    ],
  },
  {
    slug: "epanet-2-3-ya-esta-integrado",
    title: "Integración de la versión 2.3 de la Toolkit de EPANET",
    group: "capacidadesdestacadas",
    excerpt: "La versión 2.2 de la Toolkit de EPANET se lanzó en 2019 y fue incorporada a QGISRed en sus primeras versiones. Finalmente, en Julio de 2025 se lanzó la nueva versión 2.3.",
    image: "/images/capacidades/epanet2.3.png",
    imageAlt: "EPANET 2.3 integrado en QGISRed",
    paragraphs: [
      "La versión 2.2 de la Toolkit de EPANET se lanzó en 2019 y fue incorporada a QGISRed en sus primeras versiones. A lo largo de los 5 años siguientes se han ido realizando bastantes mejoras en la Toolkit, aunque su consolidación ha sido lenta. Finalmente, en Julio de 2025 se lanzó la nueva versión 2.3, la cual ha sido corregida posteriormente en 4 ocasiones, siendo la versión más reciente la 2.3.4 lanzada en febrero de 2026.",
      "Entre las mejoras que incorpora la nueva versión 2.3 de la Toolkit cabe destacar mejoras en la precisión de los cálculos, nuevas opciones de análisis y mayor robustez en la resolución de modelos complejos.",
      "La nueva versión v0.17 de QGISRed incorpora la versión más reciente 2.3.4 de la Toolkit, pudiendo ya disfrutar de todas las mejoras introducidas en el motor de cálculo. Sin embargo, las mejoras que afectan a los datos o resultados se irán introduciendo en futuras versiones de QGISRed.",
    ],
  },
  {
    slug: "gestor-de-proyectos-renovado",
    title: "Nuevas opciones del Gestor de Proyectos",
    group: "capacidadesdestacadas",
    excerpt: "El Gestor de Proyectos de QGISRed es una de las herramientas más utilizadas por los usuarios, pues fácilmente permite pasar de un escenario a otro. La versión 0.17 viene a completar varias opciones muy demandadas.",
    image: "/images/capacidades/projectManager.png",
    imageAlt: "Gestor de Proyectos QGISRed renovado",
    paragraphs: [
      "El Gestor de Proyectos de QGISRed es una de las herramientas más utilizadas por los usuarios de QGISRed, pues fácilmente permite pasar de un escenario a otro. En el uso cotidiano quizás habrá echado en falta algunas opciones que la versión 0.17 viene a completar.",
      "Ahora puedes pinchar en la cabecera de cualquiera de las columnas de la tabla que muestra la lista de proyectos para ordenarlos en orden creciente, o en un segundo clic en orden decreciente. Además, el nuevo diálogo incluye dos botones con flechas que permiten desplazar arriba o abajo el proyecto seleccionado para mantener un orden permanente.",
      "El nuevo botón Rename permite cambiar el nombre del proyecto seleccionado, lo que modifica también el nombre de todos los ficheros de datos vinculados. El botón Remove permite eliminar totalmente del disco el proyecto seleccionado, tras avisar previamente.",
      "Finalmente, ahora es posible exportar un proyecto entero de QGISRed en un fichero comprimido .zip para después importarlo desde otra máquina, lo que facilita enormemente la colaboración entre usuarios.",
    ],
  },
  {
    slug: "nuevas-opciones-en-el-gestor-de-escenarios",
    title: "Gestión de escenarios compatibles con EPANET",
    group: "capacidadesdestacadas",
    excerpt: "El Gestor de Escenarios de QGISRed permite modificar en bloque los valores de un determinado parámetro del modelo. En la nueva versión los escenarios pueden exportarse/importarse siguiendo los mismos formatos usados por EPANET.",
    image: "/images/capacidades/epanetScenarios.png",
    imageAlt: "Gestión de escenarios compatibles con EPANET",
    paragraphs: [
      "EPANET dispone de una opción para exportar/importar escenarios, ofreciendo la opción de exportar los datos relativos a diámetros y rugosidades de tuberías, demandas en nudos, calidad inicial, coeficientes de reacción y leyes de control en distintos ficheros de texto, los cuales pueden ser editados y posteriormente reimportados.",
      "El Gestor de Escenarios de QGISRed permite también modificar en bloque los valores de un determinado parámetro del modelo: los diámetros para tareas de diseño, las rugosidades o las cotas para tareas de calibración, las demandas para tareas de planificación, los coeficientes de reacción y calidad inicial para analizar alternativas del modelo de calidad, etc.",
      "En la nueva versión de QGISRed los escenarios pueden también exportarse/importarse siguiendo los mismos formatos usados por EPANET, para así mantener la compatibilidad total entre EPANET y QGISRed. Además, se contempla también la posibilidad de resetear los valores actuales para diámetros, rugosidades y elevaciones a fin de configurar nuevos escenarios desde cero mediante la superposición de otros escenarios previos.",
    ],
  },
  {
    slug: "transfiere-estados-y-calidad-para-encadenar-simulaciones-sucesivas",
    title: "Encadenamiento de simulaciones sucesivas",
    group: "capacidadesdestacadas",
    excerpt: "La versión 0.17 de QGISRed permite encadenar simulaciones desde el Gestor de Escenarios, exportando el estado final de los elementos de regulación e importándolo como estado inicial para la etapa siguiente.",
    image: "/images/capacidades/simulaciones.png",
    imageAlt: "Encadenamiento de simulaciones en QGISRed",
    paragraphs: [
      "A medida que disponemos de más datos reales, se nos ofrece la oportunidad de ajustar más el modelo a la realidad, y en la práctica no hay dos días iguales. ¿Y si pudiéramos reproducir con el modelo todo un año entero? Podríamos ejecutar las simulaciones por etapas, por ejemplo de un mes de duración, y encadenar el final de una simulación con el comienzo de la siguiente sin que se note. Así podríamos obtener resultados para periodos prolongados y calcular todo tipo de indicadores anuales.",
      "La clave es cómo encadenar el final de una simulación con el comienzo de la siguiente, de modo que haya una continuidad total sin que se note ningún cambio en los resultados. Para ello hay que tener en cuenta que el estado final de los elementos de regulación tras un periodo de simulación, no es el mismo necesariamente que el estado inicial a declarar para el periodo siguiente.",
      "Ahora la versión 0.17 de QGISRed permite encadenar simulaciones desde el Gestor de Escenarios, gracias a la exportación del estado y las consignas de los elementos de regulación al final de la simulación, y su posterior reimportación como estado inicial para la etapa siguiente.",
      "En el caso de los modelos de calidad, para encadenar simulaciones deben imponerse las calidades en los nudos al final de un periodo de simulación como calidades iniciales del periodo siguiente, lo que también puede hacerse desde el Gestor de escenarios en la nueva versión de QGISRed.",
    ],
  },
  {
    slug: "visualizacion-de-hasta-13-estados-en-tuberias-valvulas-y-bomas",
    title: "Identificación de hasta 13 estados en tuberías, bombas y válvulas",
    group: "capacidadesdestacadas",
    excerpt: "Aunque EPANET diferencia hasta 8 estados distintos, en QGISRed se distinguen hasta 13 estados que completan las diferentes situaciones que pueden darse en tuberías, bombas y válvulas.",
    image: "/images/capacidades/statuses.png",
    imageAlt: "13 estados de tuberías y válvulas en QGISRed",
    paragraphs: [
      "No debes confundir el estado inicial de un elemento declarado en EPANET con el estado del mismo en un instante dado, obtenido como resultado de los cálculos.",
      "El estado inicial de un elemento de transporte (Tubería, Bomba, Válvula) puede ser Abierto, Cerrado o Activo (este último aplicable en el caso de las válvulas hidráulicas). Sin embargo, el estado final de estos mismos elementos admite más situaciones.",
      "La API de la Toolkit de EPANET 2.3 devuelve solo dos estados: Abierto y Cerrado, y se amplía a 4 en el caso de las bombas, pero la misma Toolkit reporta en el fichero binario de salida hasta 8 estados. En QGISRed se distinguen hasta 13 estados que completan las diferentes situaciones que pueden darse. Por ejemplo, si una válvula está temporalmente cerrada, QGISRed diferencia la causa en función de su tipo y consigna impuesta.",
      "Estos estados se reportan en una nueva columna de la tabla de resultados, los cuales pueden visualizarse gráficamente como una magnitud más a seleccionar para las líneas, y mostrarse en diferentes colores de acuerdo con una leyenda.",
    ],
  },
  {
    slug: "nueva-herramienta-para-la-exploracion-de-segmentos-aislados",
    title: "Nueva herramienta para la identificación de segmentos aislados",
    group: "capacidadesdestacadas",
    excerpt: "Una de las prestaciones más solicitadas en un software de simulación es la determinación de las válvulas que hay que cerrar para aislar un segmento de la red en torno a un punto donde ha producido una avería.",
    image: "/images/capacidades/isolatedSegments-1.png",
    imageAlt: "Identificación de segmentos aislados en QGISRed",
    paragraphs: [
      "Una de las prestaciones más solicitadas en un software de simulación de las redes urbanas de distribución de agua, es la determinación de las válvulas que hay que cerrar para aislar un segmento de la red en torno a un punto donde ha producido una avería, o donde se quiere realizar una actuación para ampliar el servicio, lo que se conoce también como la identificación del polígono de corte o 'cerrada'.",
      "En este tipo de actuaciones intervienen las válvulas de seccionamiento o válvulas de corte, que son válvulas en principio todo/nada. En QGISRed se contemplan como un elemento complementario que no parte la tubería, y por tanto no forma parte del modelo de cálculo, pero que sí tiene la capacidad de actuar sobre la red, modificando el estado de la tubería en que se sitúa.",
      "La nueva versión 0.17 de QGISRed incorpora ya la posibilidad de declarar una avería o actuación en un punto de la red, y a continuación explorar su entorno para determinar las válvulas de corte a cerrar para aislar la zona afectada. En la exploración se tienen en cuenta tanto las válvulas de corte como las válvulas de regulación incorporadas al modelo.",
      "Sobre el mapa se muestran resaltados los tramos de tubería que quedarían fuera de servicio como consecuencia de la cerrada, justo hasta la posición de las válvulas cerradas, así como las acometidas correspondientes si previamente se han digitalizado.",
    ],
  },
  {
    slug: "depuracion-y-mejora-de-prestaciones-de-versiones-anteriores",
    title: "Depuración y Mejora de Prestaciones Anteriores",
    group: "capacidadesdestacadas",
    excerpt: "La versión 0.16 ha mejorado algunos aspectos de las versiones anteriores, como la barra de tiempos, el orden y clasificación de algunas opciones de menú, y nuevos campos en la importación de shapes.",
    image: "/images/capacidades/Diapositiva11.png",
    imageAlt: "Mejoras versión 0.16 QGISRed",
    paragraphs: [
      "Además de todo lo anterior, la versión 0.16 ha mejorado algunos aspectos de las versiones anteriores, como la barra de tiempos y el desplegable para elegir el instante de observación de los resultados, el orden y clasificación de algunas opciones de menú, nuevos campos en la importación de shapes, etc.",
      "Si quieres conocer todas las pequeñas mejoras que la versión 0.16 ha añadido sobre las versiones anteriores, visita la sección Histórico de versiones.",
    ],
  },
  {
    slug: "identificacion-de-los-sectores-de-demanda-dma",
    title: "Identificación de los Sectores de Demanda (DMA)",
    group: "capacidadesdestacadas",
    excerpt: "A partir de la versión 0.15 ya se pueden declarar las válvulas de corte superpuestas a las tuberías, y con la versión 0.16 también se pueden declarar caudalímetros y contadores para identificar sectores de demanda.",
    image: "/images/capacidades/Diapositiva10-1.png",
    imageAlt: "Sectores de Demanda DMA en QGISRed",
    paragraphs: [
      "Las primeras versiones de QGISRed ya ofrecían la opción de obtener los sectores de demanda desde el menú Tools. Para ello había que cerrar antes las tuberías destinadas a actuar como frontera y ubicar manualmente un medidor sobre las tuberías destinadas a alimentar el sector. A partir de la versión 0.15 ya se pueden declarar las válvulas de corte superpuestas a las tuberías, y con la versión 0.16 podemos ahora también declarar caudalímetros y contadores sobre las tuberías utilizando la herramienta de Añadir Medidores.",
      "Elige en tu red de estudio las tuberías estratégicas donde piensas ubicar las válvulas de corte que aislarán los sectores, crea dichas válvulas y ciérralas a continuación con la Herramienta de Toque; al mismo tiempo se cerrarán también las tuberías que hay debajo. Elige ahora las tuberías de mayor diámetro por donde has previsto que entre o salga el agua al sector, y coloca sobre ellas los caudalímetros. Al lanzar la herramienta de Obtener los Sectores de Demanda, verás al momento en el grupo de Consultas los Sectores de Demanda (DMAs) identificados por QGISRed, cada uno en un color.",
      "QGISRed no te ofrece por ahora una sectorización automática siguiendo determinados criterios, ni tampoco te ofrece demasiada información asociada a cada sector. Pero la herramienta actual supone ya un paso importante, pues en redes muy enmarañadas no resulta fácil garantizar que los únicos puntos de entrada y salida de cada sector sean aquellos en los que hay ubicado algún caudalímetro.",
    ],
  },
  {
    slug: "incorporacion-de-los-medidores-al-modelo",
    title: "Incorporación de los Medidores al Modelo",
    group: "capacidadesdestacadas",
    excerpt: "Una de las características más importantes que se le deben exigir al modelo hidráulico de una red en explotación es que reproduzca fielmente la realidad. En QGISRed los medidores son tratados como objetos con sus propias propiedades.",
    image: "/images/capacidades/Diapositiva8-1.png",
    imageAlt: "Medidores en el modelo QGISRed",
    paragraphs: [
      "Una de las características más importantes que se le deben exigir al modelo hidráulico de una red en explotación es que reproduzca fielmente la realidad, y para ello antes hay que medir. En QGISRed los medidores son tratados como objetos con sus propias propiedades, a diferencia de EPANET, donde las medidas se asocian directamente a los elementos a través de su identificativo Id.",
      "Cada medidor se vincula espacialmente a un elemento del modelo (tubería, depósito, nudo, etc) según su naturaleza, y puede tener asociada una o más señales. Por su parte cada señal, además de las propiedades que la definen, está vinculada a una serie temporal que almacena los datos de campo. Es una estructura más compleja que en EPANET, pero mucho más próxima a la realidad de las instalaciones.",
      "La nueva versión 0.16 de QGISRed permite declarar hasta 10 tipos de medidores diferentes (manómetros, caudalímetros, analizadores de energía, etc) y vincularlos automáticamente a los elementos de la red siguiendo unas reglas predefinidas. Además, se pueden declarar varias señales vinculadas a cada medidor y cargar los datos de campo asociados en diversos formatos.",
      "La vinculación de los medidores con los datos de campo permite ya exportarlos en el formato de EPANET para contrastarlos desde allí con los valores calculados y obtener los informes de calibración. En el futuro desde QGISRed se podrán elaborar informes de calibración más completos y realizar todo tipo de analíticas con los datos.",
    ],
  },
];

export function getArticleBySlug(slug: string): CapacidadArticle | undefined {
  return capacidadesArticles.find((a) => a.slug === slug);
}

export function getArticlesByGroup(group: CapacidadArticle["group"]): CapacidadArticle[] {
  return capacidadesArticles.filter((a) => a.group === group);
}
