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
            source={require('../fotos/at.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/at.png')}
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
                source={require('../fotos/at.png')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 3. Hemeroteca Contemporánea, Pueblos Indígenas y Módulo INEGI</Text>
            <Text style={styles.subtitleText}>3.2. Área de Tiflotecnica</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                El objetivo de esta área es satisfacer las necesidades de información del usuario ciego o con debilidad visual mediante equipo tiflotecnológico.{'\n'} 
                Este espacio dispone de un importante acervo en braille y audiolibros, además de ofrecer al usuario tanto la capacitación como el acceso gratuito 
                a diversos equipos y software diseñados para facilitar la accesibilidad de la información documental.{'\n'}        
                </Text>
              </View>

              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Acervo y Equipo</Text>
 

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={[styles.descriptionText, {marginLeft: '4%'}]}>
                  • Libros en versión braille.{'\n'}
                  • Audiolibros.{'\n'}
                  • Periódicos y revistas en versión braille.{'\n'}
                  • Escáner plano: Captura imágenes a tinta (libros, volantes, revistas, periódicos etc.) y las convierte en un archivo digital para manipular en equipo de cómputo.{'\n'}
                  • Teclado para PC en braille.{'\n'}
                  • Cámara Escáner con motor de voz zoom-twist: Digitaliza imágenes de texto y lo convierte a motor de voz.{'\n'}
                  • Impresora Braille: Realiza impresiones tamaño.{'\n'}      
                </Text>
              </View>

              
              <View style={styles.separator} />
              <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => this.openURL('https://worldblindunion.org/about/')}style={{ height: width * 0.25, width: width * 0.40 }}>
                <Image source={require('../fotos/Logo12.png')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.40}]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openURL('https://www.euroblind.org/')}style={{ height: width * 0.25, width: width * 0.40, marginRight: '15%' }}>
                <Image source={require('../fotos/Logo13.png')} style={[styles.logoImage,{height: width * 0.2, width: width * 0.40}]} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => this.openURL('https://ww1.audiobooksforfree.com/?usid=16&utid=34976684130')}style={{ height: width * 0.15, width: width * 0.7 }}>
                <Image source={require('../fotos/Logo11.png')} style={[styles.logoImage,{height: width * 0.1, width: width * 0.7}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}