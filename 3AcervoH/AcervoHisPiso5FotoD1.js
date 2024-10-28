import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, StyleSheet, Dimensions } from 'react-native';
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
            source={require('../fotos/persona9.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona9.jpg')}
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
                source={require('../fotos/persona9.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>5.6 Fototeca de Jalisco</Text>
            <Text style={styles.subtitleText}>5.6.1 Colección Alberto Gómez Barbosa.</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Esta colección llegó a la Biblioteca Pública del Estado de Jalisco en marzo de 2014. Consta, aproximadamente, de 75,000 negativos en blanco y negro y a color, 
                así como de 1,143 fotografías (126 enmarcadas, 22 litografías, 32 paquetes de 
                fotografía sin enmarcar). Además, incluye la biblioteca personal del fotógrafo Alberto Gómez Barbosa.            
                </Text>
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Historia</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Alberto Gómez Barbosa nació en Yurécuaro, Michoacán, en 1936. Reside en Guadalajara desde 1940. En su trayectoria cono fotógrafo se registran más de 
                cincuenta exposiciones individuales, destacando las realizadas en la ciudad de México, en Nueva York, La Habana, Kioto, San José (Costa Rica) y Miami, 
                así como la ilustración de más de una treintena de 
                libros y la autoría de algunos más. Su más reciente libro fotográfico, Luz y Sombra, es una muestra mayor de su trabajo en blanco y negro.{'\n'}              
                </Text>
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Acervo</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser consultada en el piso 5 de la Biblioteca Histórica (adicionalmente, 
                parte de los acervos fotográficos pueden consultarse desde la Mediateca Emilio García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).{'\n'}
                </Text>
              </View>
              
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}style={{ height: width * 0.30, width: width * 0.45 }}>
              <Image source={require('../fotos/Logo3.jpg')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.45}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}