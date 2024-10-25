import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/Antiguo20.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/Antiguo20.png')} 
                style={styles.fullImage}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>
              <Image 
                source={require('../fotos/Antiguo20.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 5. Acervo General, Fondos Particulares y Fototeca</Text>
            <Text style={styles.subtitleText}>5.3 Fondo Histórico Siglo XX.</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  Contiene diccionarios, almanaques, religión, psicología, filosofía, ciencias sociales, lenguas, ciencias naturales y matemáticas, tecnologías, artes y literatura.
                </Text>
                
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/Logo3.jpg')} style={styles.logoImage} />
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    alignItems: 'center',
  },
  fullImage: {
    height: 400,
    width: 300,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  infoContainer: {
    height: '35%',
    width: '95%',
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoImage: {
    height: '65%',
    width: '65%',
    borderRadius: 10,
  },
  viewButton: {
    width: '30%',
    height: '7%',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
  },
  iconImage: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 50,
    marginTop: -20,
  },
  descriptionContainer: {
    width: '86.5%',
    marginLeft: '5%',
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logoImage: {
    height: 80,
    width: 150,
    marginLeft: 20,
    marginTop: 20,
  },
});


