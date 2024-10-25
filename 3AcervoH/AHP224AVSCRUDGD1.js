import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';

export default class QuienesSom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.infoContainer}>
            <Image 
              source={require('../fotos/persona1.jpg')} 
              style={styles.infoImage} 
            />
            
            <TouchableOpacity 
              style={{ width: '90%', marginTop: 25, marginLeft: -10 }} 
              onPress={() => Linking.openURL('https://bpej.udg.mx/sites/default/files/2021-09/2.-yo-no-lo-se-de-cierto.mp3')}
            >
              <Text style={styles.viewButtonText}>Escuchar: "Yo no lo sé de cierto"</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Archivo Sonoro. Radio Universidad de Guadalajara. Piso 4</Text>
          <Text style={styles.subtitleText}>Jaime Sabines</Text>

          <ScrollView style={{ marginTop: 10 }}>
            <View style={styles.divider} />
            <Text style={styles.infoText}>
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.boldText}>Titulo de la obra: </Text>
              <Text>Antología poética de Jaime Sabines</Text>
            </Text>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                {'\n'}Serie: Voz Viva de México.
                {'\n'}Editorial: Dirección de Literatura UNAM
                {'\n'}Lectura a cargo de: Jaime Sabines
                {'\n'}Estudio de grabación: Estudio 19
                {'\n'}Dirección: Mauricio Molina / Lizbeth Suárez / Margarita Heredia.
                {'\n'}Operación y postproducción: Rodolfo Sánchez Alvarado / Mauricio Molina / David Bojorges.
                {'\n'}Año de grabación: 1964
              </Text>
              <Text style={styles.descriptionText}>
                {'\n'}De la serie Voz Viva de México compartimos el disco de vinilo con poemas de Jaime Sabines leídos por él mismo. La cadencia de su lectura 
                enaltecen estos maravillosos versos que hablan sobre el amor, la soledad y la muerte, y que gracias a su lenguaje sencillo y directo obtuvieron 
                la aceptación no sólo de la academia sino de gran parte de los mexicanos.{'\n'}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  infoContainer: {
    height: '35%',
    width: '95%',
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  infoImage: {
    height: '65%', 
    width: '45%',
    borderRadius: 10,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    marginTop: -10,
  },
  titleText: {
    fontWeight: 'bold',
    color: '#515151',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    width: '90%',
  },
  subtitleText: {
    fontWeight: 'bold',
    color: '#515151',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 320,
    marginLeft: 20,
    marginTop: 10,
  },
  infoText: {
    fontSize: 15,
    marginLeft: 20,
    lineHeight: 25,
    width: '86%',
  },
  iconImage: {
    height: 20,
    width: 20,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionContainer: {
    width: '86.5%',
    marginLeft: '5%',
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
  },
});
