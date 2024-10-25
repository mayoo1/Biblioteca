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
            source={require('../fotos/persona9.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/persona9.jpg')} 
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
                source={require('../fotos/persona9.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Piso 5. Acervo General, Fondos Particulares, Archivos Visuales y Sonoros: Cinemáteca y Fototeca</Text>
            <Text style={styles.subtitle}>Colección Alberto Gómez Barbosa.</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  Esta colección llegó a la biblioteca pública del estado de Jalisco en marzo de 2014. Consta aproximadamente de 75,000 negativos en blanco y negro, a color, así como de 1,143 fotografías (126 enmarcadas, 22 litografías, 32 paquetes de fotografía sin enmarcar). Además, incluye la biblioteca personal del fotógrafo Alberto Gómez Barbosa.
                </Text>
              </View>
                
              <View style={styles.separator} />
              <View style={styles.descriptionContainer}>
                <Image source={require('../fotos/ico3.png')} style={{height: 25, width: 25, marginLeft: 0, marginTop: 10,}} />
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: -20,}}>Historia</Text>
                <Text style={styles.descriptionText}>
                  Alberto Gómez Barbosa nació en Yurécuaro, Michoacán, en 1963. Reside en Guadalajara desde 1940. En su trayectoria como fotógrafo, se registran más de cincuenta exposiciones individuales, destacando las realizadas en la Ciudad de México, Nueva York, La Habana, Kioto, San José (Costa Rica) y Miami, así como la ilustración de más de treinta libros y la autoría de algunos más. Su más reciente libro fotográfico "Luz y sombra" es una muestra mayor de su trabajo en blanco y negro.
                </Text>
              </View>
                
                <View style={styles.separator} />
                <View style={styles.descriptionContainer}>
                <Image source={require('../fotos/ico3.png')} style={{height: 25, width: 25, marginLeft: 0, marginTop: 10,}} />
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: -20,}}>Acervo</Text>
                <Text style={styles.descriptionText}>
                  Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser consultada en el piso 5 de la Biblioteca Histórica (adicionalmente, parte de los acervos audiovisuales pueden consultarse desde la Mediateca Emilio García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).
                </Text>
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
    height: height * 0.4, // 40% de la altura de la pantalla
    width: width * 0.8, // 80% del ancho de la pantalla
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
    height: height * 0.35, // 35% de la altura de la pantalla
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
  title: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
  },
  subtitle: {
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
    width: '90%', // Usar un porcentaje para que sea responsivo
    alignSelf: 'center',
    marginTop: 20,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.04,
    marginLeft: 50,
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
  historyText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.04,
    marginLeft: 30,
    marginTop: -20,
  },
  acervoText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.04,
    marginLeft: 30,
    marginTop: -20,
  },
  logo: {
    height: height * 0.1, // 10% de la altura de la pantalla
    width: width * 0.4, // 40% del ancho de la pantalla
    marginLeft: 20,
    marginTop: 20,
  },
});

 