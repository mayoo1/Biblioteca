import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Piso2nove extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eeeeee',
      },
      header: {
        height: 200,
        width: 370,
        backgroundColor: '#7b0000',
        marginLeft: 10,
        marginTop: 10,
      },
      logo: {
        borderColor: 'white',
        borderWidth: 0,
        height: 100,
        width: 150,
        marginTop: -170,
        borderRadius: 7,
        marginLeft: 120,
      },
      button: {
        color: 'white',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 100,
        width: 220,
        height: 25,
        marginTop: 15,
      },
      buttonIcon: {
        borderColor: 'white',
        borderWidth: 0,
        height: 25,
        width: 25,
        marginLeft: 75,
        marginTop: -25,
      },
      sectionTitle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginLeft: 70,
        width: 150,
        height: 20,
        marginTop: -20,
      },
      textContent: {
        color: 'black',
        fontSize: 15,
        lineHeight: 25,
        textAlign: 'justify',
        height: '100%',
        width: '100%',
      },
      interestSite: {
        borderColor: 'blue',
        borderWidth: 0,
        height: '3%',
        width: '60%',
        marginLeft: '5%',
        marginTop: 15,
      },
      logoImage: {
        borderColor: 'red',
        borderWidth: 0,
        height: '10%',
        width: '60%',
        marginLeft: '5%',
        marginTop: '4%',
      },
      separator: {
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        marginLeft: 20,
        marginTop: 20,
      },
    };

    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image source={require('./fotos/Coleccion2.jpg')} style={styles.logo} />
        
        <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL('https://google.com')}>
          <Text style={styles.button}>Busqueda en base de datos</Text>
          <Image source={require('./fotos/ico2.png')} style={styles.buttonIcon} />
        </TouchableOpacity>

        <Image source={require('./fotos/ico3.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width: 25, marginLeft: 40, marginTop: 50 }} />
        <Text style={styles.sectionTitle}>Presentación</Text>
        
        <View style={styles.separator} />

        <View style={{ height: '32%', width: '86.5%', marginTop: 10, marginLeft: '5%' }}>
          <Text style={styles.textContent}>
            Incluye las más recientes adquisiciones de libros, periódicos y revistas de circulación nacional e internacional, además donaciones realizadas por parte de cámaras editoriales y consulados participantes en la Feria Internacional del Libro de Guadalajara (FIL).
            laboratorio de cómputo y acceso a internet inalámbrico, juegos de mesa y un aula de trabajo. Se ubica en la Planta baja.
          </Text>
        </View>

        <View style={styles.separator} />

        <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL('https://google.com')} style={styles.interestSite}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30 }}>Sitio de interés</Text>
          <Image source={require('./fotos/ico4.png')} style={{ borderColor: 'red', borderWidth: 0, height: '100%', width: '10%', marginTop: -20 }} />
        </TouchableOpacity>

        <Image source={require('./fotos/Logo.png')} style={styles.logoImage} />
      </View>
    );
  }
}
