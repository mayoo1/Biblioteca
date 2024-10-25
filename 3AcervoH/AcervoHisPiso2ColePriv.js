import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Linking } from 'react-native';

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
            source={require('../fotos/Libreria15.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Libreria15.png')}
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
                source={require('../fotos/Libreria15.png')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 2 Biblioteca Álvarez del Castillo</Text>
            <Text style={styles.subtitleText}>2.2 Colección Privada.</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  Integrada por obras impresas y valiosos documentos relacionados con las actividades intelectuales y culturales de Jorge Álvarez del Castillo. Entre dichas
                  obras se encuentra la Biblia del Oso, una de las primeras traducidas al español que data de 1569 y una impresionante colección personal de 483 ediciones
                  del Quijote. Esta Colección está compuesta por 6,500 ejemplares, de los cuales 5,000 son de gran valor histórico y 1,500 pertenecen al fondo
                  "Ana María Álvarez del Castillo Zuloaga".
                </Text>
              </View>
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}>
              <Image source={require('../fotos/Logo3.jpg')} style={styles.logoImage} />
              </TouchableOpacity>
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
    height: width * 0.6,
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
    height: '35%',
    width: '95%',
    backgroundColor: 'darkred',
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
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'darkred',
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
    marginLeft: '6%',
    marginTop: '3%',
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 17,
    marginLeft: '6%',
    marginTop: '3%',
  },
  scrollView: {
    marginTop: '3%',
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '88%',
    marginLeft: '5%',
    marginTop: '3%',
  },
  iconImage: {
    height: '5%',
    width: '8%',
    marginLeft: '6%',
    marginTop: '3%',
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: '16%',
    marginTop: '-6%',
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
    marginTop: '3%',
    marginBottom: '-8%'
  },
  logoImage: {
    height: width * 0.25, // Ajustar según el ancho de la pantalla
    width: width * 0.45,
    marginLeft: '6%',
    marginTop: '3%',
  },
});
