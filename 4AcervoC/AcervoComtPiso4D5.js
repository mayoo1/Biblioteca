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
            source={require('../fotos/persona6.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona6.jpg')}
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
                source={require('../fotos/persona6.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.4}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 4. Colecciones Especiales Nacionales y Mediateca</Text>
            <Text style={styles.subtitleText}>4.5.Colección Biodiversidad Dr. Enrique Beltrán Castillo</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Ese fondo debe su nombre al doctor Enrique Beltrán, uno de los primeros biólogos mexicanos predecesor del movimiento conservacionista en México 
                y en el mundo. Sus trabajos han sido de gran importancia para el medio de las ciencias naturales, por lo que biólogos mexicanos y extranjeros 
                han clasificado con su apellido a 16 especies. Además, fue fundador del Instituto Mexicano de Recursos Naturales Renovables (IMERNAR).{'\n'}
                Esta área se especializa en ciencias naturales, biología, biodiversidad y temas relacionados.{'\n'}
                El fondo se compone de 16 mil libros y 25 mil publicaciones periódicas en alrededor de 1 100 títulos; el archivo personal del doctor Beltrán, 
                la correspondencia entre investigadores y científicos; una importante colección de misceláneas y archivos del IMERNAR.
                </Text>
              </View>
              
              <View style={styles.separator} />
              <View style={styles.logoContainer}>
              <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/semarnat')}style={{ height: width * 0.25, width: width * 0.45 }}>
              <Image source={require('../fotos/Logo22.png')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.4}]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openURL('https://iucn.org/')}style={{ height: width * 0.35, width: width * 0.45, marginRight: '15%' }}>
              <Image source={require('../fotos/Logo24.png')} style={[styles.logoImage,{height: width * 0.3, width: width * 0.4}]} />
              </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}