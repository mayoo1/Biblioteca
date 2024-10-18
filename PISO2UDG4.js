import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';

export default class QuienesSom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.infoContainer}>
            <Image 
              source={require('./fotos/persona3.jpg')} 
              style={styles.infoImage} 
            />
            
            <TouchableOpacity 
              style={{ width: '90%', marginTop: 25, marginLeft: -10 }} 
              onPress={() => Linking.openURL('https://bpej.udg.mx/sites/default/files/2021-09/crisalida.mp3')}
            >
              <Text style={styles.viewButtonText}>Escuchar: "Crisálida"</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Archivo Sonoro. Radio Universidad de Guadalajara. Piso 4</Text>
          <Text style={styles.subtitleText}>Crisálida</Text>

          <ScrollView style={{ marginTop: 10 }}>
            <View style={styles.divider} />
            <Text style={styles.infoText}>
              <Image source={require('./fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.boldText}>Titulo de la obra: </Text>
              <Text>Crisálida</Text>
            </Text>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                {'\n'}Autor: Ray Bradbury
                {'\n'}Género: Radio Novela
                {'\n'}Adaptación a radio: Elena Castillo Rivera
                {'\n'}Intérpretes: David Guerrero, Héctor Caro, Javier Vizcaíno y Víctor Manuel Espinoza.
                {'\n'}Créditos: Dirección: Elena Castillo Rivera.
                {'\n'}Operación técnica: Fortino Montaño.
                {'\n'}Productor: Radio Universidad de Guadalajara
                {'\n'}Año: 1998
                {'\n'}Breve sinopsis:
                {'\n'}Esta adaptación radiofónica del cuento Crisálida de Ray Bradbury, obtuvo el Primer Lugar de Radio Drama en la Segunda Bienal Latinoamericana de 
                Radio en 1998{'\n'}
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
    width: '70%',
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
