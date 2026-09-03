import Image from "@/components/AppImage";
import { anchorHash, anchorId } from "@/i18n/anchors";

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

interface PublicationGroupProps {
  title: string;
  children: React.ReactNode;
}

/** Collapsible group holding one of the two publication lists. */
function PublicationGroup({ title, children }: PublicationGroupProps) {
  return (
    <details className="border border-gray-200 mb-2 group" style={{ backgroundColor: "rgb(255,255,255)" }}>
      <summary
        className="flex items-center justify-between px-5 py-4 cursor-pointer list-none"
        style={{ fontSize: "18px", fontWeight: "600", color: "rgb(0, 9, 25)" }}
      >
        <span>{title}</span>
        <span className="flex-shrink-0 text-[rgb(95,189,211)] transition-transform duration-200 group-open:rotate-90 ml-4">
          ›
        </span>
      </summary>
      <div className="px-5 pb-4">{children}</div>
    </details>
  );
}

interface PublicationItemProps {
  children: React.ReactNode;
}

function PublicationItem({ children }: PublicationItemProps) {
  return (
    <li
      className="pb-4 mb-4"
      style={{
        borderBottom: "1px solid rgb(230,230,230)",
        fontSize: "14px",
        color: "rgb(51, 51, 51)",
        lineHeight: "1.7",
      }}
    >
      {children}
    </li>
  );
}

const articulos = [
  {
    authors: "Martínez Alzamora, F., Conejos, P., Castro-Gama, M., Vertommen. I. (2021).",
    title: "Digital Twins. A new paradigm for Water Supply and Distribution Networks",
    journal: "Hydrolink IAHR, nº 2, 2021, pp 48-54",
    url: "https://www.iahr.org/library/infor?pid=10798",
    linkText: "https://www.iahr.org/library/infor?pid=10798",
  },
  {
    authors: "Vegas Niño, O.T., Martínez Alzamora, F., Tzatchkov, V.G. (2021).",
    title: "A Decision Support Tool for Water Supply System Decentralization via Distribution Network Sectorization",
    journal: "Processes MDPI 2021, Vol 9, Issue 4.",
    url: "https://doi.org/10.3390/pr9040642",
    linkText: "https://doi.org/10.3390/pr9040642",
  },
  {
    authors: "Conejos Fuertes, P., Martinez Alzamora, F., Hervás Carot, M., Alonso Campos, J.C. (2020).",
    title: '"Building and Exploiting a Digital Twin for the management of drinking water distribution network"',
    journal: "Urban Water Journal, Vol 17, issue 8, pp 704-713, 2020",
    url: "https://doi.org/10.1080/1573062X.2020.1771382",
    linkText: "https://doi.org/10.1080/1573062X.2020.1771382",
  },
  {
    authors: "Vegas Niño, O.T., Martinez Alzamora, F., Alonso Campos. J.C., Tzatchkov, V.G. (2018).",
    title: "Using the Epanet toolkit v2.00.12 with different programming environments",
    journal: "Instituto Mexicano Tecnología del Agua (IMTA). 1ª edic. 2018. ISBN: 978-607-9368-97-5 (obra digital).",
    url: "http://repositorio.imta.mx/handle/20.500.12013/2187",
    linkText: "http://repositorio.imta.mx/handle/20.500.12013/2187",
    suffix: " (IMTA)",
  },
  {
    authors: "Martínez Alzamora, F. (2017).",
    title: "EPANET 2.0 en Español. Manual del Usuario. Versión 2.00.12",
    journal: "Orig. L. Rossman. EPANET 2. Users Manual. IIAMA. Descarga libre. Mayo 2017. ISBN: 978-84-697-2429-3 (obra digital). DOI:",
    url: "https://www.researchgate.net/publication/330530679_EPANET_20_en_Espanol_MANUAL_DEL_USUARIO_Version_20012_Incluye_el_Modulo_Herramientas?channel=doi&linkId=5c46641292851c22a386f80c&showFulltext=true",
    linkText: "10.13140/RG.2.2.33536.89603",
  },
  {
    authors: "Martínez Alzamora, F. (2017).",
    title: "EPANET 2.0 en Française. Manuel de l'Utilisateur. Versión 2.00.12",
    journal: "Orig. L. Rossman. EPANET 2. Users Manual. ISBN: 978-84-697-2429-3 (obra digital). Descarga Libre. DOI:",
    url: "https://www.researchgate.net/publication/330530906_EPANET_20_en_Francaise_MANUEL_DE_L%2527UTILISATEUR_Version_20012_Comprend_la_Boite_a_Outils?channel=doi&linkId=5c46659c299bf12be3d9ec68&showFulltext=true",
    linkText: "10.13140/RG.2.2.25148.28808",
  },
  {
    authors: "F. Alvarruiz, F. Martinez-Alzamora, A.M. Vidal (2015).",
    title: "Improving the Efficiency of the Loop Method for the Simulation of Water Distribution Networks. J.",
    journal: "Water Res. and Planning Management. Vol 141. No 10. Oct 2015 (Q1, IF2015 2.521). DOI:",
    url: "https://ascelibrary.org/doi/10.1061/(ASCE)WR.1943-5452.0000539",
    linkText: "10.1061/(ASCE)WR.1943-5452.0000539",
  },
  {
    authors: "Martínez Alzamora, F., Ulanicki, B., Salomons, E. (2014).",
    title: "Fast and practical method for model reduction of large scale water distribution networks",
    journal: "J. of Water Res. Plann. and Manag. ASCE. April 2014, 140(4), 444-456 (Q1, IF2014 2,676). DOI:",
    url: "https://ascelibrary.org/doi/10.1061/(ASCE)WR.1943-5452.0000333",
    linkText: "10.1061/(ASCE)WR.1943-5452.0000333",
  },
  {
    authors: "Derek G. Jamieson, Uri Shamir, Fernando Martinez, Marco Franchini (2007).",
    title: "Conceptual design of a genetic, real-time, near-optimal control system for water-distribution networks",
    journal: "Journal of Hydroinformatics, Vol 9, nº 1, 2007, pp 3-14. DOI:",
    url: "https://iwaponline.com/jh/article/9/1/3/31286/Conceptual-design-of-a-generic-real-time-near",
    linkText: "10.2166/hydro.2006.013",
  },
  {
    authors: "Fernando Martínez, Vicente Hernández, José Miguel Alonso, Zhengfu Rao, Stefano Alvisi (2007).",
    title: "Optimizing the operation of the Valencia water distribution network.",
    journal: "Journal of Hydroinformatics, Vol 9, nº 1, 2007, pp 65-78 DOI:",
    url: "https://iwaponline.com/jh/article/9/1/65/31289/Optimizing-the-operation-of-the-Valencia-water",
    linkText: "10.2166/hydro.2006.018",
  },
  {
    authors: "Martínez Alzamora, F., Ferrer Polo, J., Bou Soler, V., Cortés Mahecha, J. (2007).",
    title: "Sistema de Indicadores para la Gestión de las Redes de Agua Potable.",
    journal: "Proyecto AQUA-CONTROL. Diputación de Castellón – Inst. Ing. Agua. Univ. Polit. Valencia. Marzo 2007. ISBN: 84-88263-64-3. DOI:",
    url: "https://www.researchgate.net/publication/316158981_Sistema_de_Indicadores_para_la_Gestion_de_las_Redes_de_Agua_Potable_Proyecto_AQUA-CONTROL",
    linkText: "10.13140/RG.2.2.30742.75846",
  },
  {
    authors: "Martínez, F.; Bartolín, H. (2005).",
    title: "GISRed 1.0, a GIS-based Tool for Water Distribution Models for Master Plans",
    journal: "Effective Modeling of Urban Water Systems. Monograph 13, pp 79-92. Ed. By W. James et al. Publ. CHI. Guelph, Ontario (Canadá). 2005. ISBN: 0-9736716-0-2. DOI:",
    url: "https://www.chijournal.org/R223-05",
    linkText: "10.14796/JWMM.R223-05",
  },
  {
    authors: "Bartolín, H, Martínez, F. (2004).",
    title: "GISRED v10. User's Manual",
    journal: "Publicaciones UPV, Marzo 2004. DOI:",
    url: "https://www.researchgate.net/publication/330535429_GISRED_v10_USER'S_MANUAL?channel=doi&linkId=5c46f44592851c22a3872d62&showFulltext=true",
    linkText: "10.13140/RG.2.2.35319.47527",
  },
  {
    authors: "Martínez, F. (2003).",
    title: "EPANET: Una potente herramienta para el análisis de redes de distribución de agua a presión",
    journal: "Hidropres: Tecnología y gestión del agua. Nº 38, May/Julio 2003, pp 30-37",
    url: "https://www.researchgate.net/publication/293145482_EPANET_Una_potente_herramienta_para_el_analisis_de_redes_de_distribucion_de_agua_a_presion",
    linkText: "Access",
  },
  {
    authors: "Hernández, V.; Vidal, A.; Alvarruiz, F.; Alonso, J.M.; Guerrero, D.; Ruiz, Martínez, F.; Vercher, J.; Ulanicki, B. (2000).",
    title: "Parallel Computing in Water Network Analysis and Leakage Minimisation.",
    journal: "Journal of .Water Resources and Plannign Management. ASCE Vol. 126. No.4 Jul/Aug 2000. pp 251-260 (IF2002 0,64). DOI:",
    url: "http://doi.org/10.1061/(ASCE)0733-9496(2000)126:4(251)",
    linkText: "http://doi.org/10.1061/(ASCE)0733-9496(2000)126:4(251)",
  },
  {
    authors: "Martínez, F; Signes, M; Savall, R.; Andrés, M., Ponz, R., Conejos, P. (1999).",
    title: "Construction and use of a dynamic simulation model for the Valencia metropolitan water supply and distribution network",
    journal: "Water Industry Systems. Vol One: modelling and optimisation applications. Edit: Savic, A, Walters G.A, pp 155-174. Research Studies Press Ltd. Hertfordshire, UK, 1999 ISBN: 0 86380 248 6.",
    url: "https://www.researchgate.net/publication/316647136_Construction_and_Use_of_a_Dynamic_Simulation_Model_for_the_Valencia_Metropolitan_Water_Supply_and_Distribution_Network",
    linkText: "Access",
  },
  {
    authors: "Ulanicki, B., Zehnpfund, A., Martinez, F. (1996).",
    title: "Simplification of water distribution network models",
    journal: "Hydroinformatics'96, Ed. by A. Müller, pp 493-500. Balkema, Rotterdam. September 1996. ISBN: 90-5410-852-5.",
    url: "https://www.researchgate.net/publication/273796660_Simplification_of_Water_Distribution_Network_Models",
    linkText: "Access",
  },
  {
    authors: "Martínez,F., Pérez, R., Izquierdo, J. (1995).",
    title: "Optimum design and reliability in water distribution systems",
    journal: "Improving Efficiency and Reliability in Water Distribution Systems. Cap 13, pp 303-328. Kluwer Academic Press. May 1995. SBN: 0-7923-3536-8 DOI:",
    url: "https://doi.org/10.1007/978-94-017-1841-7_13",
    linkText: "https://doi.org/10.1007/978-94-017-1841-7_13",
  },
  {
    authors: "Martínez, F., García-Serra, J. (1993).",
    title: "Mathematical modelling of water distribution systems in service. Water Supply Systems. State of the art and future trends,",
    journal: "Cap. 6, pp 143-174. Ed. E.Cabrera, F.Martinez. Computational Mechanics Pub. May 1993. ISBN: 1-85312-253-X.",
    url: "https://www.researchgate.net/publication/331482865_Mathematical_modelling_of_water_distribution_systems_in_service",
    linkText: "Access",
  },
];

const comunicaciones = [
  {
    authors: "Martínez Alzamora, F., Lerma, N., Vegas, O.T. (2021).",
    title: "QGISRed, un plugin libre y profesional sobre QGIS para gestionar modelos avanzados de redes de distribución de agua",
    journal: "SIGTE Jornada GIS libre. Universidad de Gerona. Congreso on-line",
    url: "http://diobma.udg.edu/handle/10256.1/6227",
    linkText: "http://diobma.udg.edu/handle/10256.1/6227",
  },
  {
    authors: "Martínez Alzamora, F. , Lerma, N., Bartolin, H., Vegas Niño, O.T. (2019)",
    title: "Upgrade of the GISRed application for the free analysis of WDN under GIS environment",
    journal: "17th Int. Conf CCWI 2019. Exeter (UK).",
    url: "https://www.researchgate.net/publication/336170857_Upgrade_of_the_GISRed_application_for_the_free_analysis_of_WDN_under_GIS_environment",
    linkText: "Access",
  },
  {
    authors: "Hervás Carot, M., Martínez Alzamora, F , Conejos, P. (2019).",
    title: "Simulation of Tanks behaviour in Quality Models of Water Supply Systems.",
    journal: "17th Int. Conf CCWI 2019. Exeter (UK).",
    url: "https://www.researchgate.net/publication/343346085_Simulation_of_Tanks_behaviour_in_Quality_Models_of_Water_Supply_Systems",
    linkText: "Access",
  },
  {
    authors: "Martínez Alzamora, F. , Conejos, P., Lerma, N., Hervás, M. (2019).",
    title: "Construcción del modelo de detalle de una red de abastecimiento de agua por consulta directa a las BdD corporativas: GIS, Telelectura, O&M y SCADA",
    journal: "VI Jornadas Ingeniería del Agua, JIA 2019. Toledo. Libro Resúmenes Ponencias, pp 321-323, ISBN 978-84-09-14914-8.",
    url: "https://www.hidralab.com:4430/jia2019/wp-content/uploads/2019/10/R172.pdf",
    linkText: "Access",
  },
  {
    authors: "Conejos, P., Martínez Alzamora, F., Hervás, M. (209).",
    title: "Verificación experimental de la variación de la demanda y las fugas con la presión en un sector de una red de distribución de agua",
    journal: "VI Jornadas Ingeniería del Agua, JIA 2019.Toledo. Libro Resúmenes Ponencias, pp 272-273, ISBN 978-84-09-14914-8.",
    url: "https://www.hidralab.com:4430/jia2019/wp-content/uploads/2019/10/R166.pdf",
    linkText: "Access",
  },
  {
    authors: "Hervás, M., Martínez Alzamora, F. y Conejos, P. (2019).",
    title: "Modelación experimental del comportamiento de la calidad del agua en depósitos, para su integración en el modelo de calidad de una red de distribución de agua.",
    journal: "VI Jornadas Ingeniería del Agua, JIA 2019. Toledo. Libro Resúmenes Ponencias, pp 304-305, ISBN 978-84-09-14914-8.",
    url: "https://www.hidralab.com:4430/jia2019/wp-content/uploads/2019/10/R165.pdf",
    linkText: "Access",
  },
  {
    authors: "Martínez Alzamora, F., Vegas Niño, O.T., Tzatchkov, V. (2018).",
    title: "Modelación del Comportamiento Real de Suministros de Agua con Depósitos Domiciliarios mediante EPANET",
    journal: "XXVIII Cong. Latinoamericano de Hidráulica. Buenos Aires (Argentina).",
    url: "https://www.researchgate.net/publication/340435854_Modelacion_del_Comportamiento_Real_de_Suministros_de_Agua_con_Depositos_Domiciliarios_mediante_EPANET",
    linkText: "Access",
  },
  {
    authors: "Martínez Alzamora, F., Conejos, P., Urban, P. (2017).",
    title: "Calibración de un sistema de distribución de agua complejo a partir de variables SCADA.",
    journal: "V Jornadas de Ingeniería del Agua, JIA 2017. A Coruña.",
    url: "http://geama.org/jia2017/wp-content/uploads/ponencias/tema_C/c12.pdf",
    linkText: "Access",
  },
  {
    authors: "Conejos, P., Martinez Alzamora, F., Gamón, A., Urbán, P., Alonso, J.C (2017).",
    title: "La simulación hidráulica como herramienta de apoyo a la toma de decisiones en Global Omnium – Grupo Aguas de Valencia",
    journal: "XXXIV Jornadas de AEAS. Tarragona. Rev. Tecnoagua",
    url: null,
    linkText: null,
  },
  {
    authors: "Vegas Niño, O.T., Martinez Alzamora, F., Tzatchkov, V.G. (2016).",
    title: "Aplicación de la teoría de grafos a la identificación de subsistemas hidráulicos en redes de distribución de agua",
    journal: "XXVII Congreso Latinoamericano de Hidráulica. Lima (Perú).",
    url: "https://www.researchgate.net/publication/315745096_Aplicacion_de_la_teoria_de_grafos_a_la_identificacion_de_subsistemas_hidraulicos_en_redes_de_distribucion_de_agua",
    linkText: "Access",
  },
  {
    authors: "Alvarruiz, F., Martinez Alzamora, F., Vidal, A.M. (2016).",
    title: "A Toolkit for Water Distribution Systems' Simulation using the Loop Method and High Performance Computing",
    journal: "Water Distribution System Analysis. WDSA 2016. Cartagena de Indias (Colombia). Proc. Eng. 186:303-310. Dec. 2017 DOI :",
    url: "https://www.sciencedirect.com/science/article/pii/S1877705817314030",
    linkText: "10.1016/j.proeng.2017.03.250",
  },
  {
    authors: "Conejos, M.P, Martinez Alzamora, F., Alonso, J.C. (2016).",
    title: "A Water Distribution System Model to Simulate Critical Scenarios by Considering both Leakage and Pressure Dependent Demands",
    journal: "Water Distribution System Analysis. WDSA 2016. Cartagena de Indias (Colombia). Proc. Eng. 186:380-387. Dec. 2017. DOI :",
    url: "https://www.sciencedirect.com/science/article/pii/S1877705817313838",
    linkText: "10.1016/j.proeng.2017.03.234",
  },
  {
    authors: "Martínez , F., Conejos, P. (2015).",
    title: "SCARed 2.0. Herramienta para la simulación y ayuda a la toma de decisiones en tiempo real de abastecimientos de agua. Vanguardias en Ciencia y Tecnología para la Innovación en la gestión del agua",
    journal: "Madrid.",
    url: "https://www.researchgate.net/publication/315728404_SCARed_20_Herramienta_para_la_simulacion_y_ayuda_a_la_toma_de_decisiones_en_tiempo_real_de_abastecimientos_de_agua",
    linkText: "Access",
  },
  {
    authors: "Martinez Alzamora, F, Bou Soler, V, Conejos Fuertes, P. Díaz Martínez, J. (2013).",
    title: "Conexión SCADA-modelo para la simulación en tiempo real del sistema de abastecimiento de agua a Valencia y su área metropolitana.",
    journal: "III Jornadas Ingeniería del Agua. Valencia, Univ. Politécnica. Actas JIA 2013, Vol. 2, pp. Ed. F.J. Vallés et alt. ISBN 9788-426720-719.",
    url: "https://www.researchgate.net/publication/315721617_Conexion_SCADA-modelo_para_la_simulacion_en_tiempo_real_del_sistema_de_abastecimiento_de_agua_a_Valencia_y_su_area_metropolitana",
    linkText: "Access",
  },
  {
    authors: "P. Salas, J. Domene, F. Martinez, H. Bartolín, V. Bou (2010).",
    title: "La gestión informatizada del agua inyectada y registrada en la red sectorizada de Málaga, para la mejora de su rendimiento",
    journal: "XXX Jornadas Técnicas AEAS. 9-10 Junio 2010. Sevilla. Actas del Congreso.",
    url: "https://www.researchgate.net/publication/290605318_La_gestion_informatizada_del_agua_inyectada_y_registrada_en_la_red_sectorizada_de_Malaga",
    linkText: "Access",
  },
  {
    authors: "Bou, V., Martínez, F., Conejos, P. (2006).",
    title: "SCA-Red, a general purpose SCADA application for taking decisions in real time with the aid of a hydraulic model",
    journal: "8th Annual Water Distribution Systems Analysis Symposium. WDSA 2006. Cincinnati (Ohio). Proceedings of WDSA 2006.",
    url: "https://www.researchgate.net/publication/268601785_SCA-Red_a_General_Purpose_SCADA_Application_for_Taking_Decisions_in_Real_Time_with_the_Aid_of_a_Hydraulic_Model",
    linkText: "Access",
  },
  {
    authors: "Bartolín, H., Martínez, F., Cortés, J.A. (2006).",
    title: "Bringing up to date WDS models by querying. An Epanet-based GIS Geodatabase",
    journal: "8th Annual Water Distribution Systems Analysis Symposium. WDSA 2006. Cincinnati (Ohio). Proceedings of WDSA 2006.",
    url: "https://www.researchgate.net/publication/268601902_Bringing_up_to_date_WDS_models_by_querying_An_EPANET-Based_GIS_Geodatabase",
    linkText: "Access",
  },
  {
    authors: "Martínez, F.; Bou, V.; Hernández, V.; Alvarruiz,F.; Alonso, J.M. (2005).",
    title: "ANN Architectures for simulating water distribution networks",
    journal: "CCWI 2005 – Water Management for the 21st Century. Exeter (UK). Vol One, pp 251-256. ISBN 0-9539140-2-X.",
    url: "https://www.researchgate.net/publication/282420512_Artificial_neural_network_model_for_simulation_of_water_distribution_in_sprinkle_irrigation",
    linkText: "Access",
  },
  {
    authors: "Martínez, F.; Hernández, V.; Bartolín, H.; Bou, V.;Alvarruiz,F.; Alonso, J.M (2005).",
    title: "CALNET project: building and updating water distribution models from GIS+ CIS+ O&M+SCADA",
    journal: "CCWI 2005 – Water Management for the 21st Century. Exeter (UK). Vol One, pp 209-214. ISBN 0-9539140-2-X.",
    url: "https://www.researchgate.net/publication/330841415_CALNET_Project_Building_and_Updating_Water_Distribution_Models_from_GIS_CIS_OM_SCADA",
    linkText: "Access",
  },
  {
    authors: "Bartolín, H.; Martínez, F.; Cortés, J.A. (2005).",
    title: "Topological GIS-Based Analysis of Water Distribution Network Model. Applications of the minimum spanning tree",
    journal: "CCWI 2005 – Water Management for the 21st Century. Exeter (UK). Vol One, pp 185-199. ISBN 0-9539140-2-X.",
    url: "https://www.researchgate.net/publication/285054091_Topological_GIS-Based_Analysis_of_a_Water_Distribution_Network_Model_Applications_of_the_Minimum_Spanning_Tree",
    linkText: "Access",
  },
  {
    authors: "Martínez, F., Bartolín, H. (2004).",
    title: "Integración SIG-SCADA para la explotación de redes de abastecimento con la ayuda de modelos hidráulicos.",
    journal: "Asamblea General de AEAS. Madrid. DOI:",
    url: "https://www.researchgate.net/publication/290605287_Integracion_SIG-SCADA_para_la_explotacion_de_redes_de_abastecimiento_con_la_ayuda_de_modelos_hidraulicos",
    linkText: "10.13140/RG.2.1.2973.2888",
  },
  {
    authors: "Bartolín, H., Martínez, F.. (2003).",
    title: "Modelling and Calibration of Water Distribution Systems. A new GIS approach",
    journal: "33th ESRI International User Conference 2003. San Diego (EEUU).",
    url: "https://www.researchgate.net/publication/290605506_Modelling_and_calibration_of_water_distribution_systems_A_new_GIS_approach",
    linkText: "Access",
  },
  {
    authors: "Martínez, F.; Bartolín, H., Monterde, N. (2001).",
    title: "Connecting ArcView 3.2 to EPANET2. A full environment to manage water distribution systems using models",
    journal: "6th Int. Conf. On Computing and Control for the Water Industry. Leicester (UK). Water Software Systems: theory and application. Vol. 2, pp 355-368 ISBN 0-86380-274-5. DOI",
    url: "http://dx.doi.org/10.13140/RG.2.1.3292.2649",
    linkText: "10.13140/RG.2.1.3292.2649",
  },
  {
    authors: "Martínez, F; Conejos, P., Vercher, J. (1999).",
    title: "Developing an integrated model for water distribution systems considering both, distributed leakage and pressure-dependent demands",
    journal: "26th Ann. Water Resources Planning & Manag. ASCE Conference. Tempe, Arizona, Proceedings. Preparing for the 21st Century. CD-ROM, pp1-14. Ed. ASCE.",
    url: "https://www.researchgate.net/publication/268592842_Developing_an_Integrated_Model_for_Water_Distribution_Systems_Considering_Both_Distributed_Leakage_and_Pressure-Dependent_Demands",
    linkText: "Access",
  },
  {
    authors: "Martínez, F; García, C. (1999).",
    title: "Simplification of detailed models of water distribution systems obtained from GIS systems",
    journal: "26th Ann. Water Resources Planning & Manag. ASCE Conference.Tempe, Arizona, USA. Proceedings. Preparing for the 21st Century. CD-ROM, pp1-22. Ed. ASCE.",
    url: "https://cedb.asce.org/CEDBsearch/record.jsp?dockey=0118008",
    linkText: "Access",
  },
  {
    authors: "Hernández, V, Vidal, A., Alvarruiz, F, Martínez, F., Vercher, J, Ulanicki, B. (1999).",
    title: "Parallel computing in water network analysis and optimization processes.",
    journal: "26th Ann. Water Resources Planning & Manag. ASCE Conference. Tempe, Arizona, USA. Proceedings. Preparing for the 21st Century. CD-ROM, pp1-10. Ed. ASCE.",
    url: "https://www.researchgate.net/publication/268592841_Parallel_Computing_in_Water_Network_Analysis_and_Optimization_Processes",
    linkText: "Access",
  },
];

const noticias = [
  {
    imageSrc: "/images/difusion-iagua.jpg",
    url: "https://www.iagua.es/blogs/oscar-vegas-nino/plugins-qgis-mas-utilizados-confeccionar-y-modelar-redes-hidraulicas",
  },
  {
    imageSrc: "/images/difusion-udg.jpg",
    url: "http://m.diobma.udg.edu/handle/10256.1/6227",
  },
];

export function DifusionPageContent({ locale = "es" }: { locale?: string }) {
  const isEn = locale === "en";

  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          {isEn ? (
            <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
              This section gathers those activities aimed at disseminating the QGISRed application, highlighting the{" "}
              <a href={anchorHash("cursos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
                Training Courses
              </a>
              , whose programme will be announced in due course. In addition, links to some{" "}
              <a href={anchorHash("publicaciones", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
                Publications
              </a>{" "}
              from the REDHISP group of IIAMA related to the application and its features are also included, as well as links to{" "}
              <a href={anchorHash("noticias", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
                News
              </a>{" "}
              appearing in various media and social networks.
            </p>
          ) : (
            <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
              En esta sección se recogen aquellas actividades destinadas a dar difusión de la aplicación QGISRed,
              destacando los{" "}
              <a href={anchorHash("cursos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
                Cursos de Formación
              </a>
              , cuya programación se irá anunciando oportunamente. Además, se incluyen también enlaces a algunas{" "}
              <a href={anchorHash("publicaciones", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
                Publicaciones
              </a>{" "}
              del grupo REDHISP del IIAMA relacionadas con la aplicación y sus prestaciones, así como enlaces a{" "}
              <a href={anchorHash("noticias", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
                Noticias
              </a>{" "}
              aparecidas en diversos medios y redes sociales.
            </p>
          )}
        </div>
      </section>

      {/* Cursos de Formación / Training Courses */}
      <section id={anchorId("cursos", locale)} className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Training Courses" : "Cursos de formación"} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    The <strong>first training course</strong> on QGISRed was held at the Universitat Politècnica de València on 18 July 2022, on the occasion of the{" "}
                    <strong>2nd Joint WDSA-CCWI 2022 Congress</strong>, which brings together professionals and researchers from around the world in the field of urban water, with the collaboration of Dr. Paloma Batanero Akerman.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    A brief summary of its contents can be accessed via the following button.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    El <strong>primer curso de formación</strong> sobre QGISRed se impartió en la Universidad Politécnica de Valencia,
                    el 18 de julio de 2022, con motivo de la celebración del{" "}
                    <strong>2º Congreso conjunto WDSA-CCWI 2022</strong>, que reúne a profesionales e investigadores de
                    todo el mundo en el ámbito del agua urbana, contando con la colaboración de la Dra. Paloma Batanero
                    Akerman.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    En el siguiente botón se puede acceder a un breve resumen de sus contenidos.
                  </p>
                </>
              )}

              <a
                href="https://wdsa-ccwi2022.upv.es/managing-advanced-hydraulic-models-with-qgisred-plugin-from-epanet-to-digital-twins/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 mb-8"
                style={{
                  background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  padding: "12px 32px",
                  textDecoration: "none",
                }}
              >
                Managing Advanced Hydraulic Models with QGISRed Plugin. From EPANET to Digital Twins
              </a>

              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    In the future, this section will announce new editions of this basic course, as well as the{" "}
                    <strong>Course Catalogue</strong> we are preparing, to cover everything from learning the basic principles of urban hydraulics, to building models and managing scenarios for Master Plans, through to the migration to Digital Twins connected with real data, always using the QGISRed platform as the basis.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    These will be fundamentally online courses with tutored assistance. In addition, there is the possibility of delivering face-to-face courses at the request of any institution or company.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    En el futuro, en esta sección se irán anunciando nuevas ediciones de este curso básico, así como el{" "}
                    <strong>Catálogo de Cursos</strong> que estamos preparando, para cubrir desde el aprendizaje de los
                    principios básicos de la hidráulica urbana, a la confección de modelos y la gestión de escenarios para
                    Planes Directores, hasta la migración a los Gemelos Digitales en conexión con los datos reales,
                    utilizando siempre como base la plataforma de QGISRed.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Serán fundamentalmente cursos on-line con asistencia tutorizada. Además, cabe la posibilidad de
                    impartir cursos presenciales a petición de cualquier institución o empresa.
                  </p>
                </>
              )}
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/difusion-curso.png"
                alt={isEn ? "Managing Advanced Hydraulic Models with QGISRed course" : "Curso Managing Advanced Hydraulic Models with QGISRed"}
                width={404}
                height={542}
                className="w-full h-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publicaciones / Publications */}
      <section id={anchorId("publicaciones", locale)} className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Publications" : "Publicaciones"} />

          <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            {isEn
              ? "This section reflects some of the most relevant publications that, together with the development of numerous contracts, have allowed us to acquire great experience in the modelling of water distribution networks, which we are gradually transferring to the QGISRed application."
              : "En esta sección se reflejan algunas de las publicaciones más relevantes que, junto con el desarrollo de numerosos contratos, nos han permitido adquirir gran experiencia en la modelación de redes de distribución de agua, la cual poco a poco vamos trasladando a la aplicación QGISRed."}
          </p>

          <PublicationGroup title={isEn ? "Articles and books" : "Artículos y libros"}>
            <ul className="list-none p-0 m-0">
              {articulos.map((pub, i) => (
                <PublicationItem key={i}>
                  <span>{pub.authors} </span>
                  <em>{pub.title}</em>
                  <span>. {pub.journal} </span>
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgb(95, 189, 211)", textDecoration: "none", wordBreak: "break-all" }}
                    >
                      {pub.linkText}
                    </a>
                  )}
                  {"suffix" in pub && pub.suffix}
                </PublicationItem>
              ))}
            </ul>
          </PublicationGroup>

          <PublicationGroup title={isEn ? "Conference Papers" : "Comunicaciones a Congresos"}>
            <ul className="list-none p-0 m-0">
              {comunicaciones.map((pub, i) => (
                <PublicationItem key={i}>
                  <span>{pub.authors} </span>
                  <em>{pub.title}</em>
                  <span>. {pub.journal} </span>
                  {pub.url && pub.linkText && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgb(95, 189, 211)", textDecoration: "none", wordBreak: "break-all" }}
                    >
                      {pub.linkText}
                    </a>
                  )}
                </PublicationItem>
              ))}
            </ul>
          </PublicationGroup>
        </div>
      </section>

      {/* Noticias y Redes Sociales / News & Social Media */}
      <section id={anchorId("noticias", locale)} className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "News & Social Media" : "Noticias y Redes Sociales"} />

          <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            {isEn
              ? "Below are links to news articles and podcasts that have appeared in the media and social networks, in relation to the impact that the QGISRed application is having in the world of water management and the training of new professionals."
              : "A continuación, se adjuntan enlaces a noticias y podcast aparecidos en los medios y redes sociales, en la relación con la repercusión que la aplicación QGISRed está teniendo en el mundo de la gestión del agua y la formación de nuevos profesionales."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {noticias.map((noticia, i) => (
              <div
                key={i}
                className="block"
                style={{ backgroundColor: "rgb(255,255,255)", border: "1px solid rgb(230,230,230)" }}
              >
                <Image
                  src={noticia.imageSrc}
                  alt=""
                  width={1024}
                  height={518}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-5 flex justify-center">
                  <a
                    href={noticia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
                    style={{
                      background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                      padding: "12px 32px",
                      textDecoration: "none",
                    }}
                  >
                    {isEn ? "Read article" : "Leer noticia"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
