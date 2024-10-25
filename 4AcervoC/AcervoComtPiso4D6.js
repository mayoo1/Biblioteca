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
            source={require('../fotos/periodico.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/periodico.png')} 
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
                source={require('../fotos/periodico.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Piso 4. Colecciones Especiales Nacionales</Text>
            <Text style={styles.subtitle}>4.6 Hemeroteca Especializada sobre la Universidad de Guadalajara</Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Es un acervo de noticias acerca del pensamiento y trabajo de la Universidad de Guadalajara, difundidas en los principales periódicos locales У nacionales, de 1973 a la fecha. El acervo se encuentra en formato físico y en digital. {'\n'}En 1973 fue fundado el acervo por el Miro. José Manuel Jurado Parres; 2006 fue la inauguración del acervo físico y virtual en la BPEJ por el Rector General.
                </Text>
                
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/Logo25.png')} style={styles.logo1} />
              <Image source={require('../fotos/Logo26.png')} style={styles.logo2} />
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
    height: height * 0.5, // Ajuste dinámico basado en el tamaño de pantalla
    width: width * 0.75,
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
    backgroundColor: 'gray',
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
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'gray',
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
    width: '90%',
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 10,
    width: '90%',
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: '5%',
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
    marginLeft: '5%',
  },
  text: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logo1: {
    height: 40,
    width: 210,
    marginLeft: 20,
    marginTop: 20,
  },
  logo2: {
    height: 70,
    width: 200,
    marginLeft: 20,
    marginTop: 10,
  },
});
