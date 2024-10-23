import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const resources = [
  {
    section: 'Generalidades',
    items: [
      { Titulo: '010 Bibliografía' },
      { Titulo: '020 Biblioteca tecnología e informática' },
      { Titulo: '030 Enciclopedias generales' },
      { Titulo: '040 Este número no tiene ningún uso' },
      { Titulo: '050 Publicaciones en serie' },
      { Titulo: '060 Organizaciones y museografía' },
      { Titulo: '070 Periodismo, editoriales, diarios' },
      { Titulo: '080 Colecciones generales' },
      { Titulo: '090 Manuscritos y libros raros' },
    ],
  },
  {
    section: 'Filosofía y Psicología',
    items: [
        { Titulo: '110 Metafísica' },
        { Titulo: '120 Conocimiento, causa, fin, hombre' },
        { Titulo: '130 Parapsicología, ocultismo' },
        { Titulo: '140 Puntos de vista filosóficos' },
        { Titulo: '150 Psicología' },
        { Titulo: '160 Lógica' },
        { Titulo: '170 Ética (filosofía moral)' },
        { Titulo: '180 Filosofía antigua, medieval, oriental' },
        { Titulo: '190 Filosofía moderna occidental' },
    ],
  },
  {
    section: 'Religión',
    items: [
      { Titulo: '210 Religión natural' },
      { Titulo: '220 Biblia' },
      { Titulo: '230 Teología cristiana' },
      { Titulo: '240 Moral y prácticas cristianas' },
      { Titulo: '250 Iglesia local y órdenes religiosas' },
      { Titulo: '260 Teología social y eclesiología' },
      { Titulo: '270 Historia y geografía de la iglesia' },
      { Titulo: '280 Credos de la iglesia cristiana' },
      { Titulo: '290 Otras religiones' },
    ],
  },
  {
    section: 'Ciencias Sociales',
    items: [
      { Titulo: '310 Estadística' },
      { Titulo: '320 Ciencia política' },
      { Titulo: '330 Economía' },
      { Titulo: '340 Derecho' },
      { Titulo: '350 Administración pública' },
      { Titulo: '360 Patología y servicio sociales' },
      { Titulo: '370 Educación' },
      { Titulo: '380 Comercio' },
      { Titulo: '390 Costumbres y folklore' },
    ],
  },
  {
    section: 'Lenguas',
    items: [
      { Titulo: '410 Lingüística' },
      { Titulo: '420 Inglés y anglosajón' },
      { Titulo: '430 Lenguas germánicas; alemán' },
      { Titulo: '440 Lenguas romances; francés' },
      { Titulo: '450 Italiano, rumano, rético' },
      { Titulo: '460 Español y portugués' },
      { Titulo: '470 Lenguas itálicas; latín' },
      { Titulo: '480 Lenguas helénicas; griego clásico' },
      { Titulo: '490 Otras lenguas' },
    ],
  },
  {
    section: 'Matemáticas y Ciencias Naturales',
    items: [
      { Titulo: '510 Matemáticas' },
      { Titulo: '520 Astronomía y ciencias afines' },
      { Titulo: '530 Física' },
      { Titulo: '540 Química y ciencias afines' },
      { Titulo: '550 Geociencias' },
      { Titulo: '560 Paleontología' },
      { Titulo: '570 Ciencias biológicas' },
      { Titulo: '580 Ciencias botánicas' },
      { Titulo: '590 Ciencias zoológicas' },
    ],
  },
  {
    section: 'Tecnología y Ciencias Aplicadas',
    items: [
      { Titulo: '610 Ciencias médicas' },
      { Titulo: '620 Ingeniería y operaciones afines' },
      { Titulo: '630 Agricultura y tecnologías afines' },
      { Titulo: '640 Economía doméstica' },
      { Titulo: '650 Servicios administrativos empresariales' },
      { Titulo: '660 Química industrial' },
      { Titulo: '670 Manufacturas' },
      { Titulo: '680 Manufacturas varias' },
      { Titulo: '690 Construcciones' },
    ],
  },
  {
    section: 'Artes',
    items: [
      { Titulo: '710 Urbanismo y arquitectura del paisaje' },
      { Titulo: '720 Arquitectura' },
      { Titulo: '730 Artes plásticas; escultura' },
      { Titulo: '740 Dibujo, artes decorativas y menores' },
      { Titulo: '750 Pintura y pinturas' },
      { Titulo: '760 Artes gráficas; grabados' },
      { Titulo: '770 Fotografía y fotografías' },
      { Titulo: '780 Música' },
      { Titulo: '790 Entretenimiento' },
    ],
  },
  {
    section: 'Literatura',
    items: [
      { Titulo: '810 Literatura americana en inglés' },
      { Titulo: '820 Literatura inglesa y anglosajona' },
      { Titulo: '830 Literaturas germánicas' },
      { Titulo: '840 Literaturas de las lenguas romances' },
      { Titulo: '850 Literaturas italiana, rumana' },
      { Titulo: '860 Literaturas española y portuguesa' },
      { Titulo: '870 Literaturas de las lenguas itálicas' },
      { Titulo: '880 Literaturas de las lenguas helénicas' },
      { Titulo: '890 Literaturas de otras lenguas' },
    ],
  },
  {
    section: 'Historia y Geografía',
    items: [
      { Titulo: '910 Geografía; viajes' },
      { Titulo: '920 Biografía y genealogía' },
      { Titulo: '930 Historia del mundo antiguo' },
      { Titulo: '940 Historia de Europa' },
      { Titulo: '950 Historia de Asia' },
      { Titulo: '960 Historia de África' },
      { Titulo: '970 Historia de América del Norte' },
      { Titulo: '980 Historia de América del Sur' },
      { Titulo: '990 Historia de otras regiones' },
    ],
  }
];

export default class ServRecur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources,
    };
  }

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.Titulo && <Text style={styles.titulo}>• {item.Titulo}</Text>}
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
    padding: '3%',
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: '1%',
    marginBottom: '4%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderColor: 'gainsboro',
    borderWidth: 2,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '3%',
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#db3210',
    marginBottom: '3%',
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#515151',
  },
});
