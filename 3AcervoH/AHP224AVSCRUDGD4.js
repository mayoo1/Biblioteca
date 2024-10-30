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
            source={require('../fotos/persona3.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona3.jpg')}
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
                source={require('../fotos/persona3.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.8}]} onPress={() => Linking.openURL('https://bpej.udg.mx/sites/default/files/2021-09/crisalida.mp3')}>
                <Text style={styles.viewButtonText}>Escuchar: "Crisálida"</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>2.4. Archivo Visuales y Sonoros: Fonoteca</Text>
            <Text style={styles.subtitleText}>Titulo de la obra: Crisálida</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Crisálida</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Autor: Ray Bradbury
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
        )}
      </View>
    );
  }
}