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
            source={require('../fotos/Antiguo22.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/Antiguo22.jpg')} 
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
                source={require('../fotos/Antiguo22.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>6.1. Tesoros Bibliográficos. Piso 6</Text>
            <Text style={styles.subtitleText}>6.1.1. Lenguas Indígenas.</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  Consta de 128 títulos y 166 volúmenes elaborados principalmente con fines de evangelización del siglo XVI al XX, que conservan el testimonio de 21 lenguas,
                  pertenecientes a nueve familias lingüísticas distintas. Esto permite resaltar su importancia ya que se trata de un conjunto de obras que constituyen el único
                  testimonio existente con el que se cuenta sobre algunas lenguas, como es el caso de las coahuilteca, ópata y teguima. De ahí que dicha colección fuera declarada
                  Memoria del Mundo por la UNESCO.
                </Text>
                
              </View>
              <View style={styles.separator} />

              <Image source={require('../fotos/Logo3.jpg')} style={styles.logo} />
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
    width: width * 0.85,
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
    padding: 5,
  },
  infoContainer: {
    height: '35%',
    width: '95%',
    backgroundColor: '#353535',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoImage: {
    height: '65%',
    width: '85%',
    borderRadius: 10,
    marginTop: 20
  },
  viewButton: {
    width: '30%',
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#353535',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: -20,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: 24,
    marginLeft: 20,
    marginTop: 10,
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
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
    marginVertical: 10,
    alignSelf: 'center',
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 20,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 50,
    marginTop: -20,
  },
  textContainer: {
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
  logo: {
    height: 80,
    width: 150,
    marginLeft: 20,
    marginTop: 20,
  },
});

