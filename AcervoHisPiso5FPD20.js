import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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
    const { navigation } = this.props;
    const { showImage } = this.state;
    const { width, height } = Dimensions.get('window'); // Obtener dimensiones de la pantalla

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/persona24.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/persona24.jpg')} 
                style={[styles.fullImage, { height: height * 0.5, width: width * 0.8 }]}
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
                source={require('./fotos/persona24.jpg')} 
                style={[styles.infoImage, { width: width * 0.5, height: height * 0.2 }]}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.subTitle, { fontSize: width * 0.04 }]}>Piso 5. Fondos Particulares</Text>
            <Text style={[styles.title, { fontSize: width * 0.045 }]}>5.4.20 Gabriel Retes Balzaretti</Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={[styles.divider, { width: width * 0.9 }]} />
              <Image source={require('./fotos/ico3.png')} style={[styles.icon, { width: width * 0.07, height: width * 0.07 }]} />
              <Text style={[styles.presentation, { fontSize: width * 0.04 }]}>Presentación</Text>

              <View style={{ width: '90%', marginLeft: '5%' }}>
                <Text style={[styles.text, { fontSize: width * 0.045 }]}>
                  Hijo de los actores Ignacio Retes Y Lucila Balzaretti, desde los trece años empezó a trabajar en puestas en escena de varias obras dramáticas. Salto a la industria fílmica mexicana gracias a la creación de empresas estatales de producción en los setentas. Sus obras mas reconocidas son Chin Chin el teporocho, Nuevo Mundo y Flores de Papel.
                </Text>
              </View>
              <View style={[styles.divider, { width: width * 0.9 }]} />

              <Image source={require('./fotos/Logo.png')} style={[styles.logo, { width: width * 0.8 }]} />
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
    backgroundColor: 'black',
    marginTop: -10,
  },
  subTitle: {
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 20,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    marginLeft: 10,
    marginTop: 10,
  },
  icon: {
    marginLeft: 20,
    marginTop: 10,
  },
  presentation: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 50,
    marginTop: -20,
  },
  text: {
    color: 'black',
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logo: {
    height: 60,
    marginLeft: 20,
    marginTop: 20,
    borderWidth: 0,
    borderColor: 'gray',
  },
});
