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
            source={require('../fotos/Auditorio.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Auditorio.png')}
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
                source={require('../fotos/Auditorio.png')}
                style={[styles.infoImage, {height: width * 0.5, width: width * 0.9}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Listado de Servicios</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator}/>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
              <Text style={styles.sectionTitle}>1.- Catálogo en línea.</Text>
              {'\n'}<Text style={styles.sectionTitle}>2.- Referencia.</Text>
              {'\n'}<Text style={styles.sectionTitle}>3.- Servicios de Cómputo.</Text>
              {'\n'}<Text style={styles.sectionTitle}>4.- Actividades culturales y académicas:</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} a. Ciclos de Cine</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} b. Talleres</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} c. Charlas</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} d. Círculos de lectura</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} e. Conferencias</Text>
              {'\n'}<Text style={styles.sectionTitle}>5.- Visitas guiadas.</Text>
              {'\n'}<Text style={styles.sectionTitle}>6.- Guarda objetos.</Text>
              {'\n'}<Text style={styles.sectionTitle}>7.- Conexión inalámbrica.</Text>
              {'\n'}<Text style={styles.sectionTitle}>8.- Reprografía, (digitalización, fotocopiado, digitalización sonora).</Text>
              {'\n'}<Text style={styles.sectionTitle}>9.- Salas de exposiciones y conferencias.</Text>
              {'\n'}<Text style={styles.sectionTitle}>10.- Salas de lectura.</Text>
              {'\n'}<Text style={styles.sectionTitle}>11.- Salas de lectura al aire libre.</Text>

                
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