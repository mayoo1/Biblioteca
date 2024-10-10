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
      { title: 'Banco Mundial', description: 'No disponible', link: 'No disponible' },
      { title: 'Bartleby', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Digital Andina', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Digital Bicentenario', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Digital Mundial', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Digital de la OEI', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Virtual Cervantes', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Jurídica Virtual de la UNAM	', description: 'No disponible', link: 'No disponible' },
      { title: 'Biografías', description: 'No disponible', link: 'No disponible' },
      { title: 'Descarga UNAM', description: 'No disponible', link: 'No disponible' },
      { title: 'Goethe-Institut Mexiko', description: 'No disponible', link: 'No disponible' },
      { title: 'Google Books', description: 'No disponible', link: 'No disponible' },
      { title: 'Letras Libres', description: 'No disponible', link: 'No disponible' },
      { title: 'Project Gutenberg', description: 'No disponible', link: 'No disponible' },
      { title: 'The Online Book Page', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Digital Mexicana', description: 'No disponible', link: 'No disponible' },
      { title: 'Colegio de Michoacán', description: 'No disponible', link: 'No disponible' },
      { title: 'Wikisource', description: 'No disponible', link: 'No disponible' },
      { title: 'Repositorio Digital de la Comisión Económica para América Latina y el Caribe de las Naciones Unidas', description: 'No disponible', link: 'No disponible' },
      { title: 'Catálogo de Libros Electrónicos de CONACULTA', description: 'No disponible', link: 'No disponible' },
      { title: 'Portal de Archivos Españoles', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Virtual de Patrimonio Bibliográfico', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Digital del Real Jardín Botánico', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Virtual de Prensa Histórica Española', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Nacional de España', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca de la Universidad de Harvard (HCL)', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Digital Ciudad Seva', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Digital de la Universidad de Berkeley', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Joan Fuster de textos electrònics', description: 'No disponible', link: 'No disponible' },
      { title: 'Biblioteca Británica', description: 'No disponible', link: 'No disponible' },
      { title: 'La biblioteca pública de Nueva York', description: 'No disponible', link: 'No disponible' },
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
