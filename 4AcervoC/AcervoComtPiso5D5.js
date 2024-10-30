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

            <Text style={styles.titleText}>Piso 5 Colecciones Internacionales</Text>
            <Text style={styles.subtitleText}>5.5 Otras Colecciones</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Historia</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                El área de colecciones internacionales cuenta también con material bibliográfico en alemán, portugués, gallego e italiano con temáticas diversas 
                como tecnología, literatura, ciencias sociales, medicina, entre otros. Estas colecciones han sido donadas en diversas ediciones de la FIL por 
                países invitados y por representantes de la industria editorial de diversas partes del mundo.{'\n'}              
                </Text>
              </View>
              
              <View style={styles.separator} />
              <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => this.openURL('https://www.goethe.de/ins/de/es/kur.html?gad_source=1&gclid=Cj0KCQjwsoe5BhDiARIsAOXVoUuceKq-epLyvIIV1fUCEcx24uKZkhVRl-umX8UBJCbwCJNAQRYst54aArCFEALw_wcB')}style={{ height: width * 0.25, width: width * 0.4 }}>
                <Image source={require('../fotos/Logo34.png')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.4}]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openURL('https://www.ediciona.com/')}style={{ height: width * 0.25, width: width * 0.4, marginRight: '15%' }}>
                <Image source={require('../fotos/Logo35.png')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.4}]} />
                </TouchableOpacity>
              </View>
              <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => this.openURL('https://institutoaleman.net/')}style={{ height: width * 0.35, width: width * 0.3 }}>
                <Image source={require('../fotos/Logo36.png')} style={[styles.logoImage,{height: width * 0.3, width: width * 0.3}]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openURL('https://centrogallegodemexico.org/')}style={{ height: width * 0.35, width: width * 0.3, marginRight: '35%' }}>
                <Image source={require('../fotos/Logo37.png')} style={[styles.logoImage,{height: width * 0.3, width: width * 0.3}]} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}