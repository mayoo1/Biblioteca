import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';

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
            source={require('../fotos/persona16.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/persona16.jpg')} 
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
                source={require('../fotos/persona16.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.locationText}>Piso 5. Fondos Particulares</Text>
            <Text style={styles.nameText}>5.4.7 Saul Rodiles Piña</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  Hombre intelectual, bibliófilo, político, periodista, célebre e ilustre, eternamente enamorado de la Pedagogía y la Humanidad, alumno de 
                  Salvador Díaz Mirón. Su inquietud lo llevó a estudiar la Normal y más tarde, fue Presidente Municipal de Puebla, participó en la promulgación
                  de la Carta Magna del 5 de febrero donde se reformaron los artículos 3°, 27 y 123, fue director de la escuela Normal Jalisco.
                </Text>
              </View>
              <View style={styles.separator} />

              <Image source={require('../fotos/Logo.png')} style={styles.logo} />
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
    height: 350,
    width: 250,
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
    width: '45%',
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
    backgroundColor: 'black',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  locationText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    marginLeft: '5%',
    marginTop: 10,
  },
  nameText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginLeft: '5%',
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: '5%',
    marginTop: 10,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: '15%',
    marginTop: -20,
  },
  descriptionContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logo: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
});