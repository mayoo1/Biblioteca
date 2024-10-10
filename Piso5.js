import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

const sections = [
  {
    link: 'http://windowofshanghai.library.sh.cn/faq/20'
  }
];

export default class Piso5 extends Component {
  render() {
    const { link } = sections[0]; // Obtener el enlace del array de secciones

    return (
      <View style={styles.container}>
        <View style={styles.header} />

        <Image
          source={require('./fotos/Shangai.jpg')}
          style={[styles.image, { height: '20%', width: '60%', marginTop: '-55%', marginLeft:'20%', borderRadius:8}]}
        />

        <TouchableOpacity onPress={() => link && Linking.openURL(link)}>
          <Text style={styles.button}>Visita el website de Shangai E-books</Text>
          <Image source={require('./fotos/ico2.png')} style={styles.icon} />
        </TouchableOpacity>

        <Image
          source={require('./fotos/ico3.png')}
          style={[styles.icon, { marginLeft: 40, marginTop: '5%' }]}
        />

        <Text style={styles.sectionTitle}>Presentación</Text>

        <View style={styles.divider} />

        <ScrollView style={styles.textContainer}>
          <Text style={styles.textContent}>
            <Text style={styles.title}>Historia</Text>
            {'\n'}Este importante acervo llegó al resguardo de la biblioteca a través de un proyecto llamado “Libro Internacional de China” impulsado por la Biblioteca de Shangai. 
            El proyecto tiene como objetivo hacer más visible la cultura y la historia China en otros países a través de la lectura. En la ceremonia celebrada el día 12 de Abril de 2011 
            y en presencia de las autoridades de ambas instituciones, se hizo la donación de 571 títulos a esta biblioteca.
            {'\n'}{'\n'}
            <Text style={styles.title}>Acervo</Text>
            {'\n'}La colección “Window of Shanghai” ofrece una variedad de temas para acercar al público a la cultura china, tales como la historia, tradiciones, lengua, gastronomía, indumentaria de algunos pueblos y etnias que conforman a la actual China. Gran parte de estos títulos se encuentran disponibles en ediciones bilingües en inglés-mandarín y en caracteres chinos.
            {'\n'}{'\n'}
            <Text style={styles.title}>Programa académico-cultural</Text>
            {'\n'}El programa académico-cultural "WINDOWS OF SHANGHAI" ayuda a introducir la historia y cultura china a la población Jalisciense por medio del intercambio de acervo literario. Se ha llevado a cabo este convenio entre la Biblioteca Pública del Estado de Jalisco “Juan José Arreola” y la Biblioteca de Shanghái desde el año 2011 y promueve el entendimiento entre los pueblos y las culturas mediante el intercambio de libros entre bibliotecas.
          </Text>
        </ScrollView>
        <Image source={require('./fotos/Logo5.png')} style={styles.logo} />
      </View>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#eeeeee',
  },
  header: {
    height: '30%',
    width: '95%',
    backgroundColor: '#2980b9',
    margin: 10,
    borderRadius:8,
  },
  button: {
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: '20%',
    marginTop: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: '10%',
    marginTop: '-6%',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#2c3e50',
    fontSize: 20,
    marginLeft: 80,
    marginTop: -20,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '95%',
    marginLeft: 10,
    marginTop: 20,
  },
  textContainer: {
    height: '35%',
    width: '90%',
    marginLeft: '5%',
  },
  textContent: {
    color: 'black',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
    marginHorizontal: '5%',
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2980b9',
  },
  logo: {
    height: '10%',
    width: '80%',
    marginLeft: '5%',
    marginTop: '5%',
  },
};
