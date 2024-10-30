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
            source={require('../fotos/bibliobf.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/bibliobf.png')}
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
                source={require('../fotos/bibliobf.png')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 5. Colecciones Internacionales</Text>
            <Text style={styles.subtitleText}>5.2 Biblioteca Benjamín Franklin</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                "Del pueblo de los Estados Unidos para el pueblo de Mexico"{'\n'}
                La Biblioteca Benjamín Franklin abre sus puertas el 25 de agosto de 1949 como un proyecto binacional, bicultural y bilingüe, en el edificio de la Rectoría de la Universidad de Guadalajara, bajo el auspicio del Servicio Cultural e Información de los Estados Unidos y donada por el Consulado Norteamericano de la ciudad de Guadalajara, para promover la amistad entre ambas naciones motivadas a través de la lectura y con un intercambio cultural constante.{'\n'}
                La Biblioteca Benjamín Franklin a lo largo de su historia ha conocido diferentes sedes entre ellas una ubicada en la calle Tomás V. Gómez, además de la biblioteca central del Centro Universitario de Ciencias Económicas Administrativas. A partir del año 2012 este acervo pasa definitivamente a formar parte de material bibliográfico que ofrece la Biblioteca Pública del Estado de Jalisco “Juan José Arreola”.{'\n'}
                </Text>
              </View>
              <Image source={require('../fotos/ico10.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Acervo</Text>
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                La Biblioteca Benjamín Franklin está conformada por aproximadamente 28,100 volúmenes y 3,900 recursos informativos digitales, la mayor parte de ellos en inglés. Ofrece a la comunidad en general, información y conocimiento en diferentes temas tales como cultura, política, economía y sociedad de los Estados Unidos y sus relaciones históricas con México, además de temas de interés como tecnología, lengua, ciencias exactas, sociales y naturales.
                </Text>
              </View>
              
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://www.congress.gov/')}style={{ height: width * 0.30, width: width * 0.45 }}>
              <Image source={require('../fotos/Logo30.png')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.45}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
  }