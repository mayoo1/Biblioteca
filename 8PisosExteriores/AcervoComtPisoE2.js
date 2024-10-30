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
        source={require('../fotos/Coleccion2.jpg')}
        style={styles.imageBackground}
        blurRadius={10}
      >
        <View style={styles.imageView}>
          <Image
            source={require('../fotos/Coleccion2.jpg')}
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
            source={require('../fotos/Coleccion2.jpg')}
            style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
          />
          <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
            <Text style={styles.viewButtonText}>Ver Imagen</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}>Piso 2. Acervo General Contemporáneo</Text>
        <Text style={styles.subtitleText}>2.2. Novedades</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.separator} />
          <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
          <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

          <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
            <Text style={styles.descriptionText}>
            Incluye las más recientes adquisiciones de libros, periódicos y revistas de circulación nacional e internacional, además donaciones realizadas por parte de cámaras editoriales y consulados participantes en la Feria Internacional del Libro de Guadalajara (FIL).{'\n'}{'\n'}
            laboratorio de cómputo y acceso a internet inalámbrico, juegos de mesa y un aula de trabajo.{'\n'}{'\n'}
            Se ubica en la Planta baja.
            </Text>
          </View>
          
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')} style={{ height: width * 0.30, width: width * 0.5 }}>
          <Image source={require('../fotos/Logo3.jpg')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.5}]} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )}
  </View>
);
}
}
