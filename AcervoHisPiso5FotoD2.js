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
            source={require('./fotos/Libro2.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/Libro2.jpg')}
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
                source={require('./fotos/Libro2.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Piso 5. Acervo General, Fondos Particulares y Fototeca</Text>
            <Text style={styles.subtitle}>Colección Emilio García Riera (Sección Fotográfica)</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('./fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  La sección fotográfica de la Colación Emilio Garcia Riera se resguarda en 9 archiveros con alrededor de 22,000 fotografías en blanco y negro, a color de películas, directores, actores y actrices del cine mexicano e Internacional.
                </Text>
                </View>
                <View style={styles.separator} />
              
                <Image source={require('./fotos/ico3.png')} style={styles.icon} />
                <Text style={styles.sectionTitle}>Acervo</Text>

                <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser consultada en el piso 5 de la Biblioteca Histórica (adicionalmente, parte de los acervos audiovisuales pueden consultarse desde la Mediateca Emilio García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).
                  {'\n'}
                </Text>
              </View>
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
    width: '85%',
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
    fontSize: width * 0.06, // Ajustar según el ancho de la pantalla
    marginLeft: 20,
    marginTop: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: width * 0.05, // Ajustar según el ancho de la pantalla
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
    alignSelf: 'center',
    marginTop: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.04,
    marginLeft: 50,
    marginTop: -20,
  },
  textContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  descriptionText: {
    color: 'black',
    fontSize: width * 0.05,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
});

