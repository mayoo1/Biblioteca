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
            source={require('../fotos/fj.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/fj.png')}
                style={[styles.fullImage, {height: width * 0.8, width: width * 0.9}]}
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
                source={require('../fotos/fj.png')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.80}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 4. Colecciones Especiales Nacionales y Mediateca</Text>
            <Text style={styles.subtitleText}>4.1. Fondo Jalisco</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                  Área especializada en la que se puede acceder a conocimientos acerca de la cultura, el desarrollo económico, los aspectos educativos y otras temáticas del estado de Jalisco (sus municipios, autores, monumentos históricos, economía, urbanismo, estadísticas, etcétera).
                  En el edificio del contemporáneo se cuenta con aproximadamente 13,893 mil volúmenes y varias revistas editadas en Jalisco de 1961 a la fecha.
                </Text>
              </View>
              
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://coljal.mx/')}style={{ height: width * 0.20, width: width * 0.70}}>
              <Image source={require('../fotos/Logo4.jpeg')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.60}]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openURL('https://www.jalisco.gob.mx/inicio')}style={{ height: width * 0.2, width: width * 0.70, marginTop:'10%'}}>
              <Image source={require('../fotos/Logo9.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.60}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
  }