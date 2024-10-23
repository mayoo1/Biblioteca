import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';

// Obtenemos las dimensiones de la pantalla
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

  render() {
    const { showImage } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/Antiguo6.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/Antiguo6.jpg')} 
                style={{ height: height * 0.6, width: width * 0.8, borderRadius: 10 }}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.imageContainer}>
              <Image 
                source={require('./fotos/Antiguo6.jpg')} 
                style={styles.responsiveImage}
              />
              <TouchableOpacity style={styles.imageButton} onPress={this.handleImagePress}>
                <Text style={styles.imageButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.descriptionText}>Piso 1.4 Archivos y Mapoteca</Text>

            <View style={styles.presentationContainer}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={styles.icon}
              />
              <Text style={styles.presentationText}>Presentación</Text>
            </View>

            <View style={styles.separator}></View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
              <Text style={styles.scrollText}>
              Incluyen más de siglo y medio de procesos, sentencias, cuadrantes, actas, entradas y salidas de presos, conocimientos ejecutorias, turnos, minutas, de contabilidad: libros mayores, diarios, de caja, etc.
              </Text>
            </ScrollView>

            <View style={styles.separator}></View>

            <Image source={require('./fotos/Logo3.jpg')} style={styles.logo} />
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  imageContainer: {
    height: height * 0.5, 
    width: '90%', 
    backgroundColor: '#454545', 
    borderRadius: 5, 
    marginLeft: '5%', 
    marginTop: 10,
  },
  responsiveImage: {
    height: '70%', 
    width: '60%', 
    marginTop: '10%', 
    borderRadius: 5, 
    alignSelf: 'center',
  },
  imageButton: {
    borderWidth: 0, 
    borderColor: 'white', 
    width: '30%', 
    height: '7%', 
    alignSelf: 'center', 
    justifyContent: 'center', 
    marginTop: 10,
  },
  imageButtonText: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 15, 
    textAlign: 'center',
  },
  descriptionText: {
    color: 'white', 
    fontSize: 13, 
    borderRadius: 5, 
    backgroundColor: 'darkred', 
    marginTop: 10, 
    marginHorizontal: '5%', 
    textAlign: 'center',
  },
  presentationContainer: {
    flexDirection: 'row', 
    width: '40%', 
    alignItems: 'center', 
    marginTop: 10, 
    marginLeft: '5%',
  },
  icon: {
    height: 25, 
    width: 25, 
    marginRight: -30,
  },
  presentationText: {
    fontWeight: 'bold', 
    color: 'black', 
    fontSize: 15, 
    marginLeft: 40,
  },
  separator: {
    height: 1, 
    backgroundColor: 'gray', 
    marginTop: 10, 
    marginHorizontal: '5%',
  },
  scrollView: {
    borderWidth: 0, 
    width: '90%', 
    marginLeft: '5%',
  },
  scrollContent: {
    paddingHorizontal: 20, 
    paddingTop: 10,
  },
  scrollText: {
    color: 'black', 
    fontSize: 15, 
    textAlign: 'justify', 
    lineHeight: 25,
  },
  logo: {
    height: height * 0.1,
    width: width * 0.4,
    marginLeft: '5%',
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
