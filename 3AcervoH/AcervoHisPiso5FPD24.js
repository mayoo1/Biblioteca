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
            source={require('../fotos/persona28.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona28.jpg')}
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
                source={require('../fotos/persona28.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 5.4. Fondos Particulares</Text>
            <Text style={styles.subtitleText}>5.4.24 Colección Álvaro Matute y Evelia Trejo</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Evelia Trejo  historiadora y académica de la Universidad Autónoma de México. Es Investigadora titular del Instituto de Investigaciones Históricas de la misma 
                Universidad; sus líneas de investigación son la historiografía mexicana de los siglos XIX y XX; la hermenéutica e historia, y el discurso 
                histórico y cuestión religiosa.{'\n'}
                Álvaro Matute Aguirre (1943-2017) historiador, académico de la Universidad Autónoma de México, e investigador emérito de la misma institución; fue miembro de la 
                Academia Mexicana de la Historia y antes de su muerte había sido invitado a integrarse a la Academia Mexicana de la lengua. A lo largo de su carrera académica 
                publicó varios libros, numerosos artículos y capítulos. Su trabajo de investigación versaba sobre teoría e historia de la historiografía; e historia política, 
                cultura y vida cotidiana de los siglos XIX y XX.{'\n'}
                La colección contiene 934 libros y 131 publicaciones periódicas, en su mayoría libros de ciencias sociales e historia, 
                aunque también los hay de literatura, arte y ciencia; impresos en Estados Unidos y México.{'\n'}
                </Text>
              </View>
              
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://bpej.udg.mx/')}style={{ height: width * 0.2, width: width * 0.85 }}>
              <Image source={require('../fotos/Logo.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.85, marginLeft: '6%'}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}