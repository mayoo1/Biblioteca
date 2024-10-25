import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const resources = [
  {
    section: 'Recursos Propios',
    items: [
      { title: 'Lectura en voz alta', link: 'https://bpej.udg.mx/Servicios/recursos-en-internet/lecturas-en-voz-alta' },
      { title: 'Sección para personas ciegas y con debilidad visual', link: 'https://bpej.udg.mx/Servicios/recursos-en-internet/seccion-para-personas-ciegas-y-con-debilidad-visual' },
      { title: 'Biblioteca Virtual BPEJ', link: 'http://virtual.bpej.udg.mx' },
      { title: 'Bases de datos de la Universidad de Guadalajara', link: 'https://wdg.biblio.udg.mx/' },
    ],
  },
  {
    section: 'Recursos libres',
    items: [
      { title: 'Periódicos Digitales de Acceso Abierto'},
      { title: 'CNN Interactive', description: 'CNN.com es uno de los líderes mundiales de noticias en línea y manejo de información.', link: 'http://cnn.com' },
      { title: 'News and Newspaper Online', description: 'Servicio gratuito de la Universidad de Carolina del Norte en Greensboro.', link: 'http://uncg.edu' },
      { title: 'Newspaper on the net', description: 'Periódicos de todo el mundo.', link: 'https://www.afternic.com/forsale/actualidad.com?utm_source=TDFS_DASLNC&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-daslnc_base&traffic_type=TDFS_DASLNC&traffic_id=daslnc&' },
      { title: 'Newspapers Online', description: 'Información sobre lo que sucede en el mundo.', link: 'https://www.onlinenewspapers.com/index.shtml' },
      { title: 'News Voyager', description: 'Periódicos de Estados Unidos de América.', link: 'https://ww16.newsvoyager.com/voyager.cfm?sub1=20241003-0114-59bd-952c-1f2f4bd9ed24' },
      { title: 'The World Press', description: 'Más de 5,000 periódicos de casi 200 países.', link: 'https://www.theworldpress.com/' },
      { title: 'Top 100 Media', description: 'Los 100 medios / periódicos más consultados en Estados Unidos de América y el mundo.', link: 'http://www.top100media.com/' },
      { title: 'Usa Today', description: 'Uno de los periódicos más populares de Estados Unidos de América.', link: 'https://www.usatoday.com/' },
    ],
  },
  {
    section: 'Diccionarios',
    items: [
      { title: 'Merriam Webster', description: 'Merriam-Webster Online', link: 'http://merriam-webster.com' },
      { title: 'RAE', description: 'Real Academia Española', link: 'http://rae.es' },
      { title: 'Word reference', description: 'Diccionario de Sinónimos y Antónimos', link: 'http://wordreference.com' },
    ],
  },
  {
    section: 'Enciclopedias',
    items: [
      { title: 'EDUMEX', description: 'En este sitio web puede encontrar gratis y accesible libremente, el texto completo de diccionarios, libros, revistas, tesis doctorales, cursos gratis, videos y presentaciones multimedia sobre Economía, Derecho y Ciencias Sociales.', link: 'http://edumex.com' },
      { title: 'Enciclonet', description: 'Basada en la enciclopedia universal editada por Micronet, brinda acceso a artículos sobre distintas ramas del conocimiento.', link: 'http://enciclonet.com' },
      { title: 'Britannica', description: 'Enciclopedia Británica', link: 'http://britannica.com' },
      { title: 'Merriam Webster', description: 'Merriam-Webster Online', link: 'http://merriam-webster.com' },
    ],
  },
  {
    section: 'Traductores en Línea',
    items: [
      { title: 'Free Translation and Professional Translation Services', description: 'En este sitio web puede encontrar gratis y accesible libremente, el texto completo de diccionarios, libros, revistas, tesis doctorales, cursos gratis, videos y presentaciones multimedia sobre Economía, Derecho y Ciencias Sociales.', link: 'http://www.freetranslation.com/' },
      { title: 'Google Herramientas de Idioma', description: 'Basada en la enciclopedia universal editada por Micronet, brinda acceso a artículos sobre distintas ramas del conocimiento.', link: 'https://translate.google.com/?hl=es&sl=auto&tl=es&op=translate' },
      { title: 'Yahoo Babel Fish', description: 'Enciclopedia Británica', link: 'https://espanol.yahoo.com/?p=us' },
      { title: 'World Lingo', description: 'Merriam-Webster Online', link: 'https://www.worldlingo.com/es/' },
    ],
  },
  {
    section: 'Portales Especializados',
    items: [
      { title: 'Cuéntame de México', description: 'Este portal es un recurso didáctico que ofrece contenidos sencillos que apoyan el fomento al uso de la información estadística y geográfica a través de secciones en las que se incluyen mapas para imprimir, juegos e información de interés, orientados a conocer mejor el espacio geográfico en el que vivimos y nos desarrollamos así como las características de la población y las actividades económicas que son representativas de nuestro país y entidad. Este conjunto de recursos informativos es de gran utilidad para apoyar los contenidos del programa de educación básica así como para la elaboración de tareas escolares.', link: 'http://www.cuentame.org.mx/' },
      { title: 'Directorio.com.mx', description: 'Directorio Mexicano de periódicos en línea y noticias de México.', link: 'https://www.directorio.com.mx/noticias/' },
      { title: 'Demoz Directory', description: 'Periódicos registrados en Demoz Directory.', link: 'http://www.dmoz.org/' },
      { title: 'TDR', description: 'Tesis doctorales en red', link: 'https://biblioteca.up.edu.mx/tesis-doctorales-en-red/' },
    ],
  },
  {
    section: 'Revistas Electrónicas de Acceso Abierto',
    items: [
      { title: 'CLACSO', description: 'Red de bibliotecas virtuales de Ciencias Sociales de América Latina y el Caribe de la red CLACSO.', link: 'https://www.clacso.org/' },
      { title: 'E-Revistas', description: 'Plataforma Open-Access de revistas científicas electrónicas españolas y latinoamericanas.', link: 'https://revistas.csic.es/' },
      { title: 'Dialnet', description: 'Es un portal de difusión científica hispana.', link: 'https://dialnet.unirioja.es/' },
      { title: 'DOAJ', description: 'Directory of Open Access Journals. Base de datos gratuita con acceso completo a artículos científicos. Actualmente tiene 4365 revistas.', link: 'https://www.doaj.org/' },
      { title: 'COLMEX', description: 'El Colegio de México', link: 'https://www.colmex.mx/' },
      { title: 'E-Journal', description: 'Es una selecta colección, en formato digital, de revistas científicas y humanísticas editadas por diversas dependencias académicas.', link: 'http://www.ejournal.unam.mx/' },
      { title: 'LANTINDEX', description: 'Sistema Regional de Información en Línea para Revistas Científicas de América Latina, el Caribe, España y Portugal.', link: 'https://www.proceso.com.mx/' },
      { title: 'Proceso', description: 'Notas del día, Noticiario Político, Prisma Internacional, Ámbito Deportivo, Cultura en la Mira, Análisis Político.', link: 'https://www.proceso.com.mx/' },
      { title: 'Redalyc', description: 'Proyecto impulsado por la Universidad Autónoma de Estado de México (UAEM), con el objetivo de contribuir a la difusión de la actividad científica editorial que se produce en y sobre Iberoamérica.', link: 'https://www.redalyc.org/' },
      { title: 'Revista Sistemas Judiciales', description: 'Derecho, Política Pública y Derechos Humanos', link: 'https://www.sistemasjudiciales.org/' },
      { title: 'Scielo', description: 'La Scientific Electronic Library on-line es un modelo de publicaciones electrónicas científicas clasificadas bajo un riguroso sistema de calidad.', link: 'https://scielo.org/es/' },
      { title: 'Archivos Nacionales de los Estados Unidos de América.', description: 'Es el encargado de todos los documentos y materiales creados en el curso de la historia del gobierno de los Estados Unidos.', link: 'https://www.archives.gov/' },
      { title: 'Archivos Nacionales de Inglaterra', description: 'Es el archivo oficial y editor del gobierno con una colección de más de 1,000 años de documentos del Reino Unido.', link: 'https://www.nationalarchives.gov.uk/' },
      { title: 'Luvina', description: 'Revista Literaria de la Universidad de Guadalajara.', link: 'https://luvina.com.mx/' },
    ],
  },
  {
    section: 'Libros Electrónicos',
    items: [
      { title: 'Banco Mundial', description: 'Negocios y Economía, Relaciones Internacionales y Ciencias Políticas, Finanzas, Contaduría Pública, Derecho y Ciencia de la Comunicación.', link: 'https://www.bancomundial.org/es/home' },
      { title: 'Bartleby', description: 'Libros electrónicos en inglés.', link: 'https://www.bartleby.com/' },
      { title: 'Biblioteca Digital Andina', description: 'Reúne las obras representativas del acervo cultural de los 5 países miembros de la Comunidad Andina.', link: 'https://www.comunidadandina.org/' },
      { title: 'Biblioteca Digital Bicentenario', description: 'La Biblioteca Digital Bicentenario es un acervo de libros digitalizados en los cuales podrás consultar los pasajes de la historia nacional relativos a la Independencia y la Revolución Mexicana, así como obras literarias que reflejan en sus páginas el contexto de estas épocas.', link: 'http://www.bicentenario.gob.mx/' },
      { title: 'Biblioteca Digital Mundial', description: 'Ciencias, Ciencias Sociales, Ingeniería, Artes y Humanidades.', link: 'https://www.loc.gov/collections/world-digital-library/about-this-collection/' },
      { title: 'Biblioteca Digital de la OEI', description: 'Servicio de Información y Documentación especializado en Educación, Ciencia, Tecnología, Sociedad e Innovación y Cultura en Iberoamérica.', link: 'https://oei.int/oficinas/secretaria-general' },
      { title: 'Biblioteca Virtual Cervantes', description: 'Libros electrónicos en textos completos en las diferentes áreas del conocimiento.', link: 'https://www.cervantesvirtual.com/' },
      { title: 'Biblioteca Jurídica Virtual de la UNAM	', description: 'Derecho y Relaciones Internacionales.', link: 'http://ww7.bibliojuridica.org/?caf=1&bpt=345&usid=27&utid=8695558973&query=Unam.MX&afdToken=ChMIqfj05cCTiQMVxBvQBR2yFzpfEmwBlLqpj-XEH8QQww51_iXcHk41JDc7EKc-RnybnA-NYqVqYOhwm8I595ahP0NP759LwUiQNKThEOlUXJ-w1_dJMXi-W4JgbMoBhyiH8quFcrFc9JManAEnTeIeATGnzs6KWAYgr6yMzhqqsDQ&pcsa=false&nb=0&nm=14&nx=324&ny=62&is=700x481&clkt=217' },
      { title: 'Biografías', description: 'Biografías y Vidas', link: 'https://www.biografiasyvidas.com/' },
      { title: 'Descarga UNAM', description: 'Descarga de podcast pertenecientes a cuentos, novela corta, poesía, ensayo, crónica, teatro y música. Los materiales han sido grabados para este proyecto por lectores profesionales y, mejor aún, por sus propios autores.', link: 'https://descargacultura.unam.mx/' },
      { title: 'Goethe-Institut Mexiko', description: 'La Biblioteca del Goethe-Institut Mexiko pone a disposición de todas las personas residentes en la República Mexicana: e-Books, e-Audios, e-Videos o e-Papers de Alemania. El servicio es gratuito y el préstamo digital puede solicitarse las 24 horas del día', link: 'https://www.goethe.de/de/index.html' },
      { title: 'Google Books', description: 'Google Libros/Google Books ofrece libros digitales completos de dominio público de diversa temática y libros que no poseen una visión total de su contenido, por encontrarse aún en venta. Puede localizar muchos libros de la UACJ, subidos a Google Books por pertenecer a CUMEX.', link: 'https://books.google.es/' },
      { title: 'Letras Libres', description: 'Literatura, Cultura.', link: 'https://letraslibres.com/' },
      { title: 'Project Gutenberg', description: 'Más de 25000 libros electrónicos en diferentes idiomas y áreas del conocimiento.', link: 'https://www.gutenberg.org/' },
      { title: 'The Online Book Page', description: 'Más de 18,000 libros electrónicos en texto completo en diferentes áreas del conocimiento.', link: 'https://onlinebooks.library.upenn.edu/' },
      { title: 'Biblioteca Digital Mexicana', description: 'Documentos históricos y culturales relevantes de diversos fondos de bibliotecas y archivos mexicanos y extranjeros que tengan importante documentación mexicana que refleje la riqueza documental del país y fuera de él entre otros la colección digital de códices en México y el mundo.', link: 'http://bdmx.mx/' },
      { title: 'Colegio de Michoacan', description: 'La Biblioteca Luis González es considerada como una de las bibliotecas académicas más importantes de la región centro occidente del país por su vasto acervo bibliográfico orientado al estudio de las ciencias sociales y las humanidades', link: 'https://www.colmich.edu.mx/' },
      { title: 'Wikisource', description: 'Otro importante proyecto que surge de la Fundación Wikimedia, aquí se concentran más de 100.000 textos de dominio público todos en formato HTML.', link: 'https://es.wikisource.org/wiki/Portada' },
      { title: 'Repositorio Digital de la Comisión Económica para América Latina y el Caribe de las Naciones Unidas', description: 'El Repositorio Digital de la CEPAL provee acceso a más de 35,000 publicaciones digitales, desde la primera publicación de la CEPAL en 1948 hasta la más reciente. Todos los documentos están disponibles a texto completo.El Repositorio Digital de la CEPAL es un producto desarrollado y mantenido por la Biblioteca Hernán Santa Cruz, ubicada en la Sede de la CEPAL en Santiago de Chile.', link: 'https://repositorio.cepal.org/home' },
      { title: 'Catálogo de Libros Electrónicos de CONACULTA', description: 'El Consejo Nacional para la Cultura y las Artes de México (CONACULTA) ha digitalizado gran parte de su acervo, donde tendremos acceso a libros de consulta, divulgación, y de diversas temáticas como Historia, Arqueología, Antropología, Etnología, Lingüística, entre muchas otras.', link: 'No disponible' },
      { title: 'Portal de Archivos Españoles', description: 'El Portal de Archivos Españoles es un proyecto del Ministerio de Educación, Cultura y Deporte destinado a la difusión en Internet del Patrimonio Histórico Documental Español conservado en su red de centros.', link: 'https://pares.mcu.es/ParesBusquedas20/catalogo/search' },
      { title: 'Biblioteca Virtual de Patrimonio Bibliográfico', description: 'La Biblioteca Virtual de Patrimonio Bibliográfico es un proyecto cooperativo del Ministerio de Cultura y las Comunidades Autónomas cuyo objetivo es la difusión mediante facsímiles digitales de colecciones de manuscritos y libros impresos que forman parte del Patrimonio Histórico Español.', link: 'https://bvpb.mcu.es/es/inicio/inicio.do' },
      { title: 'Biblioteca Digital del Real Jardín Botánico', description: 'Por supuesto también nos encontramos con bibliotecas de temáticas especializadas, con este caso que tendremos al alcance material científico e histórico para quien busque mayor información de las especies vegetales.', link: 'https://bibdigital.rjb.csic.es/' },
      { title: 'Biblioteca Virtual de Prensa Histórica Española', description: 'Este portal es el resultado de un proceso de digitalización cooperativa del Ministerio de Cultura, las Comunidades Autónomas y otras instituciones de la memoria para preservar y hacer accesibles la Prensa Histórica publicada en España.', link: 'https://prensahistorica.mcu.es/es/inicio/inicio.do' },
      { title: 'Biblioteca Nacional de España', description: '500 años de historia es lo que podemos encontrar en uno de los archivos digitales más importantes de España, donde se nos permite consultar, descargar o leer una gran cantidad de documentos, archivos, dibujos, fotografías, mapas, grabados y mucho más, todo de forma gratuita para cualquier persona.', link: 'https://www.bne.es/es' },
      { title: 'Biblioteca de la Universidad de Harvard (HCL)', description: 'Una de las universidades más importantes del mundo también ha digitalizado su acervo cultural, otorgando libre acceso a miles de fotografías históricas, folletos, manuscritos, libros, partituras, mapas y otros materiales únicos que están en poder de la universidad.', link: 'https://library.harvard.edu/' },
      { title: 'Biblioteca Digital Ciudad Seva', description: 'Fundada por el escritor y catedrático puertorriqueño Luis López Nieves, Ciudad Seva ha logrado digitalizar miles de cuentos, poemas, novelas, teoría, obras de teatro, ensayos y todo sobre la narrativa.', link: 'https://ciudadseva.com/biblioteca/' },
      { title: 'Biblioteca Digital de la Universidad de Berkeley', description: 'La pionera en iniciativas de digitalización y acceso público, esta biblioteca es uno de los proyectos más grandes y con mayor contenido en el mundo. Entre las colecciones más importantes podemos encontrar libros medievales, así como el Proyecto para la Herencia Americana, único en su tipo.', link: 'https://www.lib.berkeley.edu/' },
      { title: 'Biblioteca Joan Fuster de textos electronics', description: 'Sin duda la iniciativa sobre literatura en catalán más importante, aquí podremos acceder a obras literarias de todos los tiempos escritas en catalán, así como otras cuantas que han sido traducidas.', link: 'https://nti.uji.es/fuster/' },
      { title: 'Biblioteca Británica', description: 'La importancia de esta colección radica en que fue la primera que hizo uso de la tecnología en forma masiva, esto gracias a la creación del famoso dispositivo "Turning the Pages". Entre su colección de miles de libros, se encuentra el que posiblemente sea el más consultado del mundo: los manuscritos de Alice in Wonderland.', link: 'https://www.xataka.com/otros/46-museos-y-bibliotecas-que-han-digitalizado-todo-su-conocimiento-humano' },
      { title: 'La biblioteca pública de Nueva York', description: 'Una de las colecciones digitales recién renovadas, la cual nos ofrece más de 187.000 imágenes de dominio público de fotografías, mapas, postales, grabados y escritos.', link: 'https://publicdomain.nypl.org/pd-visualization/' },
    ],
  },
];

export default class ServRecur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources,
    };
  }

  renderSectionHeader = ({ section }) => (
    <Text style={styles.subHeader}>{section.title}</Text>
  );

  handleLinkPress = (link) => {
    Linking.openURL(link);
  };

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.link ? (
        <TouchableOpacity onPress={() => this.handleLinkPress(item.link)}>
          <Text style={styles.link}>{item.title}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.link}>{item.title}</Text>
      )}
      {item.description ? (
        <Text style={styles.description}>{item.description}</Text>
      ) : null}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.resources}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.sectionContainer}>
              <Text style={styles.header}>{item.section}</Text>
              <FlatList
                data={item.items}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.innerList}
              />
            </View>
          )}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'darkred',
    marginBottom: 10,
    marginLeft: 10
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  link: {
    fontSize: 15,
    color: '#ce2307',
    fontWeight: 'bold',
    marginBottom: 5, 
  },
  description: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
    marginLeft: 10,
    textAlign: 'justify',
  },
  innerList: {
    paddingLeft: 10,
  },
});
