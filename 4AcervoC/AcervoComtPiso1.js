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
          source={require('../fotos/p1i.jpg')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/p1i.jpg')}
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
              source={require('../fotos/p1i.jpg')}
              style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Piso 1. Biblioteca Infantil y Juvenil José Rosas Moreno</Text>
          <Text style={styles.subtitleText}>Piso 1. Biblioteca Infantil y Juvenil José Rosas Moreno</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
                Biblioteca Infantil u Juvenil "José Rosas Moreno" cuenta con más de 30,000 volúmenes distribuidos en diferentes colecciones.
                {'\n'}Además, se ofrecen distintos cursos, talleres y visitas guiadas, enfocados al fomento de la lectura y el desarrollo de la creatividad.
              </Text>
              <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, marginTop: 10 }}>
                • Acervo general Infantil{'\n'}
                • Acervo general Juvenil{'\n'}
                • Biblioteca Infantil Benjamin Franklin{'\n'}
                • Colección de lectura recreativa{'\n'}
                • Colección CONALITEG{'\n'}
                • Biblioteca Infantil Josep Maria Muria Romani{'\n'}
                • Acervos Internacionales{'\n'}
                • Taller de cómputo Infantil{'\n'}
                • Taller de cómputo Juvenil{'\n'}
                • Sala de Proyecciones{'\n'}
                • Salón de Talleres{'\n'}
                • Teatro{'\n'}
                • Cuentacuentos{'\n'}
                • Bebeteca{'\n'}
                • Área de exposiciones
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