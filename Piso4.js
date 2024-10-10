import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


export default class Piso2nove extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image source={require('./fotos/Libreria10.jpg')} style={styles.image} />

        <TouchableOpacity style={styles.button} activeOpacity={1}>
          <Text style={styles.buttonText}>Busqueda en base de datos</Text>
          <Image
            source={require('./fotos/ico2.png')}
            style={{ height: 25, width: 25, marginTop: -25, marginLeft:'-10%'}}
          />
        </TouchableOpacity>

        <Image
          source={require('./fotos/ico3.png')}
          style={{ height: 25, width: 25, marginLeft: 40, marginTop: 0 }}
        />
        <Text style={styles.title}>Presentación</Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            width: '90%',
            marginLeft: 20,
            marginTop: 20,
          }}
        />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Área especializada en la que se puede acceder a conocimientos acerca de la cultura, el
            desarrollo económico, los aspectos educativos y otras temáticas del estado de Jalisco
            (sus municipios, autores, monumentos históricos, economía, urbanismo, estadísticas,
            etcétera). En el edificio del contemporáneo se cuenta con aproximadamente 13,893 mil
            volúmenes y varias revistas editadas en Jalisco de 1961 a la fecha.
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            width: '90%',
            marginLeft: 20,
            marginTop: 20,
          }}
        />

        <TouchableOpacity style={styles.interestButton} activeOpacity={0}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: 10 }}>
            Sitios de interés
          </Text>
          <Image
            source={require('./fotos/ico4.png')}
            style={{ height: '60%', width: '15%', marginTop: -20 }}
          />
        </TouchableOpacity>

        <Image source={require('./fotos/Logo4.jpeg')} style={styles.logo} />
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
    backgroundColor: '#7b0000',
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    borderRadius: 5,
    height: '20%',
    width: '60%',
    position: 'absolute',
    top: 30,
    left: '50%',
    marginLeft: '-28%'
  },
  button: {
    marginTop: 20,
    marginLeft: 100,
  },
  buttonText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: -50,
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 70,
    marginTop: -25,
  },
  descriptionContainer: {
    height: '38%',
    width: '86.5%',
    marginTop: 10,
    marginLeft: '5%',
  },
  descriptionText: {
    color: 'black',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'justify',
    height: '110%',
    width: '100%',
  },
  interestButton: {
    borderColor: 'blue',
    borderWidth: 0,
    height: '5%',
    width: '40%',
    marginLeft: '5%',
    marginTop: -5,
  },
  logo: {
    height: '10%',
    width: '40%',
    marginLeft: '5%',
    marginTop: 10,
  },
};
