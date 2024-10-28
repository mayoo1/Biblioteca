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
          source={require('../fotos/Libros5.jpg')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/Libros5.jpg')}
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
              source={require('../fotos/Libros5.jpg')}
              style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>6.4. Sala Jalisciense</Text>
          <Text style={styles.subtitleText}>6.4.3. Impresos en Guadalajara Siglos XVIII al XX</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
                Esta colección contiene los primeros impresos que se generan con la llegada de la imprenta a Guadalajara que se otorgó a Mariano Valdés Téllez Girón, el 10 de agosto de 1793, por medio de una cédula real con un privilegio exclusivo por 10 años. Esta colección se compone de 1,823 volúmenes.
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