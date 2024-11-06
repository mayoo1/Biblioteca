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
            source={require('../fotos/portada.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/portada.jpg')}
                style={[styles.fullImage, {height: width * 1.0, width: width * 0.9}]}
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
                source={require('../fotos/portada.jpg')}
                style={[styles.infoImage, {height: width * 0.50, width: width * 0.8}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Biblioteca Pública del Estado de Jalisco:</Text>
            <Text style={styles.subtitleText}>"Juan Jose Arreola"</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator}/>
              <Text style={[styles.sectionTitle, {width: width * 1, marginTop:'2%', marginLeft:'5%', fontSize:14}]}>Conoce más de nosotros en nuestras redes sociales</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Dentro de nuestras instalaciones puede usted consultar a texto completo y de alta calidad muchas de las colecciones
                con su respectiva base de datos con el fin de ayudarle con su tarea de investigación.
                </Text>
              </View>
              
              <View style={styles.separator}/>

              <TouchableOpacity onPress={() => this.openURL('https://www.facebook.com/bibliojalisco')}style={{ height: width * 0.20, width: width * 0.20, marginLeft: '5%', marginTop:'5%'}}>
              <Image source={require('../fotos/Fb.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.15, marginLeft: '5%', marginTop:'-2%'}]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openURL('https://www.youtube.com/@bibliotecapublicadelestado384')}style={{ height: width * 0.20, width: width * 0.20, marginLeft: '27%',marginTop:'-20%'}}>
              <Image source={require('../fotos/YT.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.15, marginLeft: '10%', marginTop:'-2%'}]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openURL('https://www.instagram.com/biblio_jalisco/')}style={{ height: width * 0.20, width: width * 0.20, marginLeft: '51%', marginTop:'-20%'}}>
              <Image source={require('../fotos/Ins.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.15, marginLeft: '20%', marginTop:'-2%'}]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openURL('https://x.com/BiblioJalisco')}style={{ height: width * 0.20, width: width * 0.20, marginLeft: '75%', marginTop:'-20%'}}>
              <Image source={require('../fotos/Tw.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.15, marginLeft: '20%', marginTop:'-2%'}]} />
              </TouchableOpacity>

            </ScrollView>
          </View>
        )}
      </View>
    );
  }
  }