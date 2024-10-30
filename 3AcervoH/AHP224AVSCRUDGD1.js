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
            source={require('../fotos/persona1.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona1.jpg')}
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
                source={require('../fotos/persona1.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.8}]} onPress={() => Linking.openURL('https://bpej.udg.mx/sites/default/files/2021-09/2.-yo-no-lo-se-de-cierto.mp3')}>
                <Text style={styles.viewButtonText}>Escuchar: "Yo no lo sé de cierto"</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>2.4. Archivo Visuales y Sonoros: Fonoteca</Text>
            <Text style={styles.subtitleText}>Titulo de la obra: Antología poética de Jaime Sabines</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.8}]}>Antología poética de Jaime Sabines </Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Serie: Voz Viva de México.
                {'\n'}Editorial: Dirección de Literatura UNAM
                {'\n'}Lectura a cargo de: Jaime Sabines
                {'\n'}Estudio de grabación: Estudio 19
                {'\n'}Dirección: Mauricio Molina / Lizbeth Suárez / Margarita Heredia.
                {'\n'}Operación y postproducción: Rodolfo Sánchez Alvarado / Mauricio Molina / David Bojorges.
                {'\n'}Año de grabación: 1964
                {'\n'}De la serie Voz Viva de México compartimos el disco de vinilo con poemas de Jaime Sabines leídos por él mismo. La cadencia de su lectura 
                enaltecen estos maravillosos versos que hablan sobre el amor, la soledad y la muerte, y que gracias a su lenguaje sencillo y directo obtuvieron 
                la aceptación no sólo de la academia sino de gran parte de los mexicanos.{'\n'}
                </Text>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
