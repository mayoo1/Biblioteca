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
          source={require('../fotos/cpi.png')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/cpi.png')}
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
              source={require('../fotos/cpi.png')}
              style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Piso 3. Hemeroteca Contemporánea, Pueblos Indígenas y Modulo INEGI</Text>
          <Text style={styles.subtitleText}>3.3 Colección de Pueblos Indígenas</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
                La colección de Pueblos Indígenas representa un fondo valioso, pues atesora textos de todas las áreas del conocimiento en lenguas indígenas de Jalisco, México y del mundo que pueden ser consultados por el público en general.{'\n'}{'\n'}
                Esta colección cuenta con un acervo de más de 7,000 volúmenes en donde podemos encontrar música, libros de diferentes temáticas, documentales, diccionarios, juegos de mesa, entre otros, siendo la mayoría bilingües.{'\n'}
                Las lenguas indígenas que pueden encontrarse son aproximadamente 36 entre las cuales están: el zapoteco, otomí, nahua, mazateco, ñañú, rarámuri, entre otras lo que permite conocer y valorar la riqueza de las lenguas de los pueblos originarios.{'\n'}
                Entre sus volúmenes se pueden encontrar:{'\n'}
                •Diccionarios.{'\n'}{'\n'}
                •Libros infantiles (de adivinanzas, trabalenguas, literatura), además de algunos juegos de mesa.{'\n'}{'\n'}
                •Libros de fotografía.{'\n'}{'\n'}
                •Recetarios.{'\n'}{'\n'}
                •Constituciones de los Estados Unidos Mexicanos y leyes de los derechos lingüísticos.{'\n'}{'\n'}
                •Reproducciones de códices.Libros de textos en lenguas indígenas de primaria elaborados por la Dirección General de Educación Indígena de la Secretaría de Educación.{'\n'}{'\n'}
                También cuenta con un área de lectura y un área de acceso a recursos multimedia (música, películas, documentales, grabaciones de cátedras, libros electrónicos y videos).{'\n'}{'\n'}
                Esta colección está ubicada en el piso 3 de la Biblioteca.
              </Text>
            </View>
            
            <View style={styles.separator} />

            <TouchableOpacity onPress={() => this.openURL('https://www.nacionmulticultural.unam.mx/')} style={{ height: width * 0.25, width: width * 0.40 }}>
            <Image source={require('../fotos/Logo14.png')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.5}]} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/inea/documentos/comision-nacional-para-el-desarrollo-de-los-pueblos-indigenas')} style={{ height: width * 0.25, width: width * 0.40 }}>
            <Image source={require('../fotos/Logo15.png')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.5}]} />
            </TouchableOpacity>

          </ScrollView>
        </View>
      )}
    </View>
  );
  }
  }