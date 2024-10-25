import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Linking } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class AcervoHisPiso1A4 extends Component {
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
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/Antiguo18.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageContainer}>
              <Image 
                source={require('../fotos/Antiguo18.jpg')} 
                style={styles.largeImage}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.cardContainer}>
              <Image 
                source={require('../fotos/Antiguo18.jpg')} 
                style={styles.cardImage}
              />
              <TouchableOpacity style={styles.viewImageButton} onPress={this.handleImagePress}>
                <Text style={styles.viewImageText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>1.5.1 Dirección General de Rentas</Text>

            <View style={styles.presentationContainer}>
              <Image 
                source={require('../fotos/ico3.png')} 
                style={styles.iconImage}
              />
              <Text style={styles.presentationText}>Presentación</Text>
            </View>

            <View style={styles.divider}></View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
              <Text style={styles.scrollText}>
                Incluyen más de siglo y medio de procesos, sentencias, cuadrantes, actas, entradas y salidas de presos, conocimientos ejecutorias, turnos, minutas, de contabilidad: libros mayores, diarios, de caja, etc.  
              </Text>
            </ScrollView>

            <View style={styles.divider}></View>
            <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}>
            <Image source={require('../fotos/Logo3.jpg')} style={styles.logo} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  largeImage: {
    height: height * 0.5,
    width: width * 0.7,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  cardContainer: {
    height: height * 0.5,
    width: '90%',
    backgroundColor: '#454545',
    borderRadius: 5,
    marginLeft: '5%',
    marginTop: height * 0.02,
    alignItems: 'center',
  },
  cardImage: {
    height: '70%',
    width: '60%',
    marginTop: '10%',
    borderRadius: 5,
  },
  viewImageButton: {
    width: '30%',
    height: '7%',
    justifyContent: 'center',
    marginTop: 10,
  },
  viewImageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: width * 0.035,
    borderRadius: 5,
    backgroundColor: 'darkred',
    marginTop: height * 0.02,
    marginHorizontal: '5%',
    textAlign: 'center',
  },
  presentationContainer: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginLeft: '5%',
  },
  iconImage: {
    height: 25,
    width: 25,
    marginRight: -30,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.04,
    marginLeft: 40,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginTop: height * 0.02,
    marginHorizontal: '5%',
  },
  scrollView: {
    borderWidth: 0,
    width: '90%',
    marginLeft: '5%',
  },
  scrollContent: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  scrollText: {
    color: 'black',
    fontSize: width * 0.04,
    lineHeight: height * 0.035,
    textAlign: 'justify',
  },
  logo: {
    height: height * 0.1,
    width: width * 0.4,
    marginLeft: '5%',
    marginTop: height * 0.02,
  },
};
