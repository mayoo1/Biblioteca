import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Linking } from 'react-native';
import styles from '../3Diseno';

const { width } = Dimensions.get('window');

export default class QuienesSom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
    };
  }

  handleImagePress = () => {
    this.setState({ showImage: true });
  };

  handleCloseImage = () => {
    this.setState({ showImage: false });
  };

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/persona2.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona2.jpg')}
                style={[styles.fullImage, {height: width * 1.2, width: width * 0.8}]}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={[styles.infoContainer, {height: width * 0.70, width: width * 0.95}]}>
              <Image
                source={require('../fotos/persona2.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.9}]} onPress={() => Linking.openURL('https://bpej.udg.mx/sites/default/files/2021-09/manuel-rodriguez-latinoamerica.mp3')}>
                <Text style={styles.viewButtonText}>Escuchar: "Manuel Rodríguez Latinoamérica"</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>2.4. Archivo Visuales y Sonoros: Fonoteca</Text>
            <Text style={styles.subtitleText}>Titulo de la obra: Dr. Manuel Rodríguez Lapuente</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.8}]}>Dr. Manuel Rodríguez Lapuente</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Serie: Latinoamérica en el mundo.
                {'\n'}Género: Programa radiofónico
                {'\n'}Intérpretes: Dr. Manuel Rodríguez Lapuente
                {'\n'}Año: 1989
                {'\n'}Breve sinopsis:
                {'\n'}Serie radiofónica producida y conducida por el Dr. Manuel Rodríguez Lapuente. Reproducimos la emisión del sábado 14 de marzo de 1989, en el que el doctor hace un análisis del 
                Encuentro de cancilleres del grupo de los ocho, en Guayana, Puerto Ordaz, Venezuela. El Dr. Manuel Rodríguez Lapuente fue un reconocido humanista, político, autor de libros, maestro, director
                de la Revista de la Universidad de Guadalajara y director de Estudios Sociales y de la Facultad de Filosofía y Letras.
                </Text>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}