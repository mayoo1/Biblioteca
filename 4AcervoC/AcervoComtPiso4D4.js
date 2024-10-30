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
            source={require('../fotos/persona5.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona5.jpg')}
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
                source={require('../fotos/persona5.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 4. Colecciones Especiales Nacionales y Mediateca</Text>
            <Text style={styles.subtitleText}>4.4 Fondo Enrique Estrada Faudón</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Biblioteca particular de un distinguido jalisciense, médico, especializado en psiquiatría, amante de las ciencias naturales y uno de los fundadores de 
                la Sociedad de Ciencias Naturales de Jalisco. Dirigió la Benemérita Sociedad de Geografía y Estadística del Estado de Jalisco, A. C.; 
                perteneció también a la Sociedad Mexicana de Geografía y Estadística y estuvo a cargo de la Dirección de Ecología y forestación del Ayuntamiento de Zapopan.{'\n'} 
                Realizó trabajos sobre ecología y vegetación urbana, así como un amplio estudio sobre recursos naturales de la costa de Jalisco. 
                Es considerado como el investigador más importante del occidente de México por sus aportaciones a las ciencias naturales.{'\n'} 
                Su biblioteca particular consta de 8,500 volúmenes, publicaciones periódicas, así como su archivo personal de documentos.{'\n'}              
                </Text>
              </View>
              
              <View style={styles.separator} />
              <View style={styles.logoContainer}>
              <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/semarnat')}style={{ height: width * 0.25, width: width * 0.45 }}>
              <Image source={require('../fotos/Logo22.png')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.4}]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openURL('https://psiquiatrasapm.org.mx/')}style={{ height: width * 0.25, width: width * 0.45, marginRight: '15%' }}>
              <Image source={require('../fotos/Logo23.png')} style={[styles.logoImage,{height: width * 0.2, width: width * 0.4}]} />
              </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}