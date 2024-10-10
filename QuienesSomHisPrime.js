import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default class QuienesSomABHoy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBanner}></View>
        <Image source={require('./fotos/Historia2.jpg')} style={styles.headerImage}/>
        <Text style={styles.presentationText}>Primera Sede</Text>
        <View style={styles.divider}></View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
            La primera sede de la Biblioteca estuvo en la planta alta del antiguo Seminario de Guadalajara, que posteriormente fue el Liceo de Varones y actualmente es el Museo Regional de Guadalajara. La biblioteca ocupa este espacio hasta el 30 de marzo de 1891, cuando cerró sus puertas para trasladarse a un espacio más adecuado en el mismo edificio.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#eeeeee',
  },
  headerBanner: {
    height: '35%',
    width: '95%',
    backgroundColor: '#9c8c7c',
    borderRadius:10,
    marginLeft: 10,
    marginTop: 10,
    borderWidth:2,
    borderColor:'#7D4B23'
  },
  headerImage: {
    height: '25%',
    width: '70%',
    marginTop: '-60%',
    borderRadius: 10,
    marginLeft: '15%',
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize:30,
    marginLeft: '5%',
    marginTop: '15%',
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: 20,
    marginTop: 20,
  },
  scrollView: {
    marginTop: 10,
    marginLeft: '5%',
  },
  contentContainer: {
    width: '95%',
  },
  contentText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
  },
});
