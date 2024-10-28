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
            source={require('../fotos/persona7.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona7.jpg')}
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
                source={require('../fotos/persona7.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 5. Acervo General, Fondos Particulares y Fototeca</Text>
            <Text style={styles.subtitleText}>Colección Emilio García Riera</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                  La Colección Emilio García Riera consta de aproximadamente 4,000 libros, 3,300 revistas, 5,300 películas en formato BETA,
                  VHS y DVD, carteles en diversos formatos, un gran acervo hemerográfico y documental, así como objetos personales del historiador y crítico de cine.
                  Además, la colección se integra de 22,000 fotografías que se consideran parte de la Fototeca.{'\n'}
                </Text>
              </View>
              
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Historia</Text>
              
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                  García Riera (Ibiza, 1931 - Guadalajara, 2002) fue pionero en la investigación cinematográfica de México. Comenzó su carrera como crítico de cine en el
                  suplemento México en la Cultura. También colaboró en Excelsior, Unomásuno, La Jornada y Proceso; dirigió las revistas Imágenes. En la década de los
                  sesenta fundó, junto con otros críticos de su generación, el grupo Nuevo Cine, así como la revista del mismo nombre. Su obra más importante es Historia
                  documental del cine mexicano (1969 - 1978). Otras de sus publicaciones son México visto por el cine extranjero (1987 - 1988) y su autobiografía El cine
                  es mejor que la vida (1990). En 1986 fundó el Centro de Investigación y Enseñanza Cinematográficas (CIEC) de la Universidad de Guadalajara.</Text>
              </View>

              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]}/>
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Acervo</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                  Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser consultada en el piso 5 de la Biblioteca Histórica (adicionalmente,
                  parte de los acervos audiovisuales pueden consultarse desde la Mediateca Emilio García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).{'\n'}
                </Text>
              </View>
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}style={{ height: width * 0.30, width: width * 0.45 }}>
              <Image source={require('../fotos/Logo3.jpg')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.45}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

