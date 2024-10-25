import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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
            source={require('../fotos/Antiguo5.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Antiguo5.jpg')}
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
                source={require('../fotos/Antiguo5.jpg')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>6.4.1 Sala jalisciense. Piso 6</Text>
            <Text style={styles.subtitleText}>6.4.4. Fondo Jalisco Siglos XIX y XX.</Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  Colección que se encontraba en el edificio contemporáneo, de la Biblioteca Publica del Estado de Jalisco "Juan José Arreola", puesto que las características del Material y por la temporalidad de los libros, se tuvieron que trasladar al edificio histórico un total de 2,203 volúmenes, la temática mas destacada son los Informes de Gobierno del Estado de Jalisco desde 1828 hasta 1960.
                </Text>
                <View style={styles.separator} />
              </View>

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
    height: height * 0.5,
    width: width * 0.8,
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
    height: height * 0.35,
    width: width * 0.95,
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
    fontSize: 15,
    textAlign: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: width * 0.06,
    marginLeft: width * 0.05,
    marginTop: 10,
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.045,
    marginLeft: width * 0.05,
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: width * 0.9,
    marginLeft: width * 0.05,
    marginTop: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: width * 0.05,
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.04,
    marginLeft: width * 0.15,
    marginTop: -20,
  },
  textContainer: {
    width: '90%',
    marginLeft: '5%',
  },
  descriptionText: {
    color: 'black',
    fontSize: width * 0.045,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logo: {
    height: 80,
    width: 150,
    marginLeft: width * 0.05,
    marginTop: 20,
  },
});
