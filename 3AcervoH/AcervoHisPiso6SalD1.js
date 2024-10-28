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
          source={require('../fotos/gdlp.jpg')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/gdlp.jpg')}
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
              source={require('../fotos/gdlp.jpg')}
              style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>6.4. Sala Jalisciense</Text>
          <Text style={styles.subtitleText}>6.4.1 Sala jalisciense</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
                Libros impresos en Mexico entre los años de 1601 hasta 1930, existe un aproximado de 6,000 volúmenes de diferentes temáticas: tecnología mística, biblias, obras raras, geología, artes, Historia, literatura, trasformaciones sociales, económicas y políticas de la nación.
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