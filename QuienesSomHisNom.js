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
        <Image source={require('./fotos/Juan.jpg')} style={styles.headerImage}/>
        <Text style={styles.presentationText}>Nombramiento Juan Jose Arreola</Text>
        <View style={styles.divider}></View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
            En 2001, el Consejo General Universitario aprobó cambiar el nombre de la biblioteca pública a "Juan José Arreola" en memoria de este destacado escritor mexicano que fue director de la biblioteca  entre 1991-2001, reconociendo la contribución de Arreola a la institución durante su gestión.
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
    backgroundColor: 'gray',
    borderRadius:10,
    marginLeft: 10,
    marginTop: 10,
    borderWidth:2,
    borderColor:'lightgray'
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
