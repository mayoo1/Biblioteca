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
          source={require('../fotos/persona7.jpg')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/persona7.jpg')}
              style={[styles.fullImage, {height: width * 1.2, width: width * 0.9}]}
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
              source={require('../fotos/persona7.jpg')}
              style={[styles.infoImage, {height: width * 0.50, width: width * 0.40}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Piso 4. Colecciones Especiales Nacionales y Mediateca</Text>
          <Text style={styles.subtitleText}>4.7 Mediateca Emilio García Riera</Text>

          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
                Parte de los acervos fotográficos, audiovisuales y sonoros de la Biblioteca Pública del Estado de Jalisco pueden consultarse en formato digital en la Mediateca Emilio García Riera, ubicada en el piso 4 de la biblioteca Contemporánea.
              </Text>
            </View>
            
            <View style={styles.separator} />

          </ScrollView>
        </View>
      )}
    </View>
  );
}
}