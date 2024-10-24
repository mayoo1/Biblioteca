import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Linking } from 'react-native';

const { width, height } = Dimensions.get('window'); // Obtener las dimensiones de la ventana

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

  // Función para abrir enlaces
  openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Error al abrir la URL:", err));
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/persona6.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/persona6.jpg')} 
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
                source={require('./fotos/persona6.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 4. Colecciones Especiales Nacionales</Text>
            <Text style={styles.subtitleText}>4.5 Fondo Biodiversidad Dr. Enrique Beltrán</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('./fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.paragraph}>
                  Ese fondo debe su nombre al doctor Enrique Beltrán, uno de los primeros biólogos mexicanos predecesor del movimiento conservacionista en México y en el mundo. Sus trabajos han sido de gran importancia para el medio de las ciencias naturales, por lo que biólogos mexicanos y extranjeros han clasificado con su apellido a 16 especies. Además, fue fundador del Instituto Mexicano de Recursos Naturales Renovables (IMERNAR). Esta área se especializa en ciencias naturales, biología, biodiversidad y temas relacionados. El fondo se compone de 16 mil libros y 25 mil publicaciones periódicas en alrededor de 1 100 títulos; el archivo personal del doctor Beltrán, la correspondencia entre investigadores científicos; una importante colección de misceláneas y archivos del IMERNAR.
                </Text>
              </View>
              <View style={styles.separator} />
              
              <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/semarnat')}>
                <Image source={require('./fotos/Logo22.png')} style={styles.logoImage} />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => this.openURL('https://iucn.org/')}>
                <Image source={require('./fotos/Logo24.png')} style={styles.logoImageSmall} />
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
    width: '95%',
    backgroundColor: '#353535',
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
    width: '40%',
    height: '20%',
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
    fontSize: width * 0.05,
    marginLeft: 20,
    marginTop: 10,
    width: '86.5%',
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.04,
    marginLeft: 20,
    marginTop: 10,
    width: '86.5%',
  },
  scrollView: {
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: width * 0.9,
    marginLeft: '5%',
    marginTop: 10,
  },
  iconImage: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.045,
    marginLeft: 50,
    marginTop: -20,
  },
  textContainer: {
    width: '86.5%',
    marginLeft: '5%',
  },
  paragraph: {
    color: 'black',
    fontSize: width * 0.045,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logoImage: {
    height: height * 0.1,
    width: width * 0.4,
    marginLeft: 20,
    marginTop: 20,
  },
  logoImageSmall: {
    height: height * 0.1,
    width: width * 0.25,
    marginLeft: 20,
    marginTop: 10,
  },
});
