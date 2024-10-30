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
          source={require('../fotos/biblioilv.png')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/biblioilv.png')}
              style={[styles.fullImage, {height: width * 1.2, width: width * 0.9}]}
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
              source={require('../fotos/biblioilv.png')}
              style={[styles.infoImage, {height: width * 0.50, width: width * 0.40}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Piso 4. Colecciones Especiales Nacionales y Mediateca</Text>
          <Text style={styles.subtitleText}>4.2. Colección Universidad de Guadalajara</Text>

          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
              Esta biblioteca se encontraba anteriormente en el Instituto de Investigaciones Jurídicas del centro Universitario de ciencias Sociales y Humanidades de la Universidad de Guadalajara, la cual pasa a la Biblioteca Pública del Estado de Jalisco “Juan José Arreola”, con la finalidad de tener un mayor alcance y difusión entre los estudiosos e investigadores del área de la jurisprudencia.{'\n'}{'\n'}
              La biblioteca cuenta con alrededor de 10,000 volúmenes y varias publicaciones periódicas, tanto nacionales como del extranjero, entre ellas están las publicaciones oficiales del Estado de Quintana Roo, Revista de la Facultad de Derecho de la Universidad de la República de Montevideo, Uruguay, etc.
              </Text>
            </View>
            
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => this.openURL('https://idej.edu.mx/')}style={{ height: width * 0.20, width: width * 0.70}}>
            <Image source={require('../fotos/Logo19.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.60}]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.openURL('https://bpej.udg.mx/')}style={{ height: width * 0.20, width: width * 0.70}}>
            <Image source={require('../fotos/Logo.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.80}]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.openURL('https://stjjalisco.gob.mx/')}style={{ height: width * 0.20, width: width * 0.70}}>
            <Image source={require('../fotos/Logo21.png')} style={[styles.logoImage,{height: width * 0.3, width: width * 0.3}]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.openURL('https://tjajal.gob.mx/')}style={{ height: width * 0.20, width: width * 0.70}}>
            <Image source={require('../fotos/Logo20.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.60}]} />
            </TouchableOpacity>

          </ScrollView>
        </View>
      )}
    </View>
  );
}
}