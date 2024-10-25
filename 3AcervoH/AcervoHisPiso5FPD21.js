import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Obtenemos el tamaño de la pantalla

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
            source={require('../fotos/persona25.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/persona25.jpg')} 
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
                source={require('../fotos/persona25.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.subTitle}>Piso 5. Fondos Particulares</Text>
            <Text style={styles.title}>5.4.21 Ignacio Igor Arreola Haro</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.divider} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.description}>
                  Considerado uno de los mejores dramaturgos de Jalisco, Ignacio Igor Arreola Haro, nació en Guadalajara, el 26 de enero de 1930. Fundó la compañía de teatro de la Universidad de Guadalajara en 1917, siendo maestro de la misma. Posteriormente fungió como director de la escuela de Teatro. En 1973 fundó el cine club de la misma Universidad, en el cual se desempeña como director hasta 1989.
                </Text>
                <View style={styles.divider} />
              </View>

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
    height: height * 0.3,
    width: width * 0.95,
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  infoImage: {
    height: '65%', 
    width: '40%',
    borderRadius: 10,
  },
  viewButton: {
    borderWidth: 0,
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
  subTitle: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 10,
  },
  icon: {
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
  textContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  description: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
  },
  logo: {
    height: 60,
    width: width * 0.8,   // 80% del ancho de la pantalla
    marginLeft: 20,
    marginTop: 20,
    borderWidth: 0,
    borderColor: 'gray',
  },
});
