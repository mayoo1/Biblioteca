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
          source={require('../fotos/biblioj.png')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/biblioj.png')}
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
              source={require('../fotos/biblioj.png')}
              style={[styles.infoImage, {height: width * 0.45, width: width * 0.35}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Piso 5. Colecciones Internacionales</Text>
          <Text style={styles.subtitleText}>5.3 Biblioteca Josep Maria Murià i Romani</Text>

          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Historia</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
              La biblioteca Josep María Murià i Romaní es un vínculo cultural entre dos regiones emblemáticas, el occidente de México con Jalisco como pivote y una de las regiones más prosperas y culturalmente desarrolladas de España, Cataluña.{'\n'}{'\n'}
              Inicialmente conformada con los libros de la biblioteca personal del escritor, catedrático y exiliado catalán Don Josep María Murià i Romaní (Barcelona 1907 - Guadalajara 1999) quien desarrollo en México y señaladamente en Guadalajara una amplia labor cultural, su colección se ha visto enriquecida posteriormente con donaciones de importantes editoriales e instituciones culturales catalanas.{'\n'}
              </Text>
            </View>
            <Image source={require('../fotos/ico10.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Acervo</Text>
            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
                Desde el día de su inauguración el 29 de agosto del año 2012, este acervo ha experimentado una rápida expansión, contando al día de hoy con un aproximado de 10 mil volúmenes, gran parte de ellos en catalán de temas tan diversos como lingüística, artes, deporte, comida, tradiciones, literatura universal y catalana; digno de realce es la amplia colección de libros de historia de Cataluña y España con énfasis en la guerra civil española y sus consecuencias, así como la estrecha relación cultural entre México y España a través de los numerosos refugiados que producto de esta conflagración arribaron a México, entre ellos el propietario original de esta biblioteca.{'\n'}{'\n'}
                De esta forma la biblioteca Josep María Murìa i Romaní una de las más importantes del mundo en lengua catalana, se erige en un verdadero punto de referencia de la indudable vinculación histórico – cultural entre México y Cataluña a través del tiempo.{'\n'}{'\n'}
                La biblioteca Josep María Murià i Romaní además del acervo bibliográfico cuenta con una sección hemerográfica, que incluye publicaciones periódicas como el Butlletí del Centre Català de Guadalajara o Xaloc entre otras, que fueron objeto incluso de persecución como productos culturales peligrosos por parte del régimen del General Francisco Franco. </Text>
            </View>
            
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => this.openURL('https://www.llull.cat/catala/home/index.cfm')}style={{ height: width * 0.30, width: width * 0.45 }}>
            <Image source={require('../fotos/Logo31.png')} style={[styles.logoImage,{height: width * 0.22, width: width * 0.75}]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.openURL('https://parla.cat/theme/parla/demo/index.php')}style={{ height: width * 0.30, width: width * 0.45, marginTop:'-5%'}}>
            <Image source={require('../fotos/Logo32.png')} style={[styles.logoImage,{height: width * 0.20, width: width * 0.35}]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.openURL('https://govern.cat/gov/')}style={{ height: width * 0.30, width: width * 0.45 }}>
            <Image source={require('../fotos/Logo33.png')} style={[styles.logoImage,{height: width * 0.2, width: width * 0.85}]} />
            </TouchableOpacity>

          </ScrollView>
        </View>
      )}
    </View>
  );
}
}