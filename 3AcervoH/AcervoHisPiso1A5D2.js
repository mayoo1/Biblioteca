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
          source={require('../fotos/ferrocarriles.jpg')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/ferrocarriles.jpg')}
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
              source={require('../fotos/ferrocarriles.jpg')}
              style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>1.5. Archivos Particulares</Text>
          <Text style={styles.subtitleText}>1.5.2. Ferrocarriles de Jalisco, 1879-1927.</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
              Contiene documentación con las cuentas mensuales de la oficina general de los ferrocarriles.  
              Son las cuentas mensuales de la oficina general de los Ferrocarriles de Jalisco, 1897-1927 (18 registros).{'\n'}
              </Text>
            </View>
            
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => this.openURL('https://hndm.iib.unam.mx/index.php/es/')} style={{ height: width * 0.30, width: width * 0.5 }}>
            <Image source={require('../fotos/Logo3.jpg')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.5}]} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  );
  }
  }