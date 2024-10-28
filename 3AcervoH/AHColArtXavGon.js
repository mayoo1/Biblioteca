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
            source={require('../fotos/persona4.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona4.jpg')}
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
                source={require('../fotos/persona4.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.8}]} onPress={() => Linking.openURL('https://bpej.udg.mx/sites/default/files/2021-09/1.-cancion-de-cuna-a-patricia.mp3')}>
                <Text style={styles.viewButtonText}>Escuchar: "Canción de cuna a Patricia"</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>2.4. Archivo Visuales y Sonoros: Fonoteca</Text>
            <Text style={styles.subtitleText}>2.4.2. Fondo Arturo Xavier González</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                El fondo del reconocido chelista y director de orquesta Arturo Xavier González fue donado por su hija, Consuelo González. 
                El maestro González nació en Tequila, Jalisco. A la edad de 12 años ya tocaba flauta, clarinete, saxofón y piano. Aprendió a tocar el cello, 
                instrumentos con el que consiguió fama y grandes triunfos, con el maestro Ignacio Camarena, en la Escuela Normal de Música de Guadalajara. 
                En 1953 se le nombró director de la Banda del Estado de Jalisco y en 1958 se le reconoció con el Premio Jalisco y la Medalla José 
                Clemente Orozco. Por mucho tiempo hizo dúo con la pianista Leonor Montijo.{'\n'}{'\n'}
                El Fondo Arturo Xavier González incluye música barroca, clásica, clásica contemporánea, gregoriana, medieval, romántica, ópera, autóctona, blues, 
                danzón, foxtrot, jazz y tango, además de música para ballet y cine.{'\n'}{'\n'}
                Este fondo forma parte de los Archivos Visuales y Sonoros y puede ser consultado en el piso 2 de la Biblioteca Histórica. Parte de
                 los acervos sonoros pueden consultarse en la Mediateca Emilio García Riera (ubicada en el piso 4 de la Biblioteca Contemporánea).{'\n'}
                </Text>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}