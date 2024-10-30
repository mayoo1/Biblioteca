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
            source={require('../fotos/hc.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/hc.jpg')}
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
                source={require('../fotos/hc.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 3. Hemeroteca Contemporánea, Pueblos Indígenas y Modulo INEGI</Text>
            <Text style={styles.subtitleText}>3.1. Hemeroteca Contemporánea</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
                    La hemeroteca reúne colecciones de periódicos locales y nacionales, así como gran variedad de títulos de revistas, publicaciones oficiales, además de las diversas publicaciones que 
                    pueden ser consultadas por el público en general.{'\n'}{'\n'}
                    3.1.Publicaciones periódicas nacionales.{'\n'}
                    3.2.Publicaciones internacionales.{'\n'}
                    3.3.Periódicos oficiales.{'\n'}{'\n'}

                    <Text style={styles.subtitleText}>Periódicos locales:</Text>
                  </Text>

                  <Text style={styles.descriptionText}>
                    • Informador{'\n'}
                    • Occidental{'\n'}
                    • Mural{'\n'}
                    • Ocho columnas{'\n'}
                    • Milenio{'\n'}
                    • Sol de Guadalajara{'\n'}
                  </Text>

                  <Text style={styles.subtitleText}>Periódicos nacionales:</Text>
                  <Text style={styles.descriptionText}>
                    • Excelsior{'\n'}
                    • Financiero{'\n'}
                    • Jornada{'\n'}
                    • Reforma{'\n'}
                    • Universal{'\n'}
                  </Text>

                  <Text style={styles.subtitleText}>Periódicos extranjeros:</Text>
                  <Text style={styles.descriptionText}>
                    • El País (España){'\n'}
                    • Le monde (Francia){'\n'}
                    • The New (E.U.){'\n'}
                  </Text>
              </View>
              
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://hndm.iib.unam.mx/index.php/es/')}>
              <Image source={require('../fotos/Logo3.jpg')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.5}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
    }
    }