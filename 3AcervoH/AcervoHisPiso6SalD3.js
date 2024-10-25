import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

// Obtener dimensiones de la pantalla para hacer el diseño responsivo
const { width, height } = Dimensions.get('window');

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
            source={require('../fotos/Libros5.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Libros5.jpg')}
                style={styles.fullImage}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.infoContainer}>
              <Image
                source={require('../fotos/Libros5.jpg')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>6.4.1 Sala jalisciense. Piso 6</Text>
            <Text style={styles.subtitle}>
              6.4.3. Impresos en Guadalajara Siglos{'\n'}XVII al XX.
            </Text>

            <ScrollView style={styles.scrollContainer}>
              <View style={styles.divider} />
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  Esta colección contiene los primeros impresos que se generan con la llegada de la imprenta a Guadalajara que se otorgó a Mariano Valdés Téllez Girón, el 10 de agosto de 1793, por medio de una cédula real con un privilegio exclusivo por 10 años. Esta colección se compone de 1,823 volúmenes.
                </Text>
              </View>
              <View style={styles.divider} />

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
    height: height * 0.5, 
    width: width * 0.9,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  infoContainer: {
    height: height * 0.35,
    width: '95%',
    backgroundColor: '#353535',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoImage: {
    height: '70%',
    width: '85%',
    borderRadius: 10,
  },
  viewButton: {
    borderWidth: 0,
    borderColor: 'white',
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#353535',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: width * 0.06,
    marginLeft: 20,
    marginTop: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.045,
    marginLeft: 20,
    marginTop: 10,
  },
  scrollContainer: {
    marginTop: 10,
  },
  divider: {
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
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.04, // Ajuste de fuente relativo
    marginLeft: 50,
    marginTop: -20,
  },
  textContainer: {
    width: '90%',
    marginLeft: '5%',
  },
  descriptionText: {
    color: 'black',
    fontSize: width * 0.045, // Ajuste de fuente relativo
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logoImage: {
    height: height * 0.1, // Ajuste de altura de la imagen
    width: width * 0.4, // Ajuste de ancho de la imagen
    marginLeft: 20,
    marginTop: 20,
  },
});
