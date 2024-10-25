import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Linking } from 'react-native';

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

  handleLogoPress = () => {
    Linking.openURL('https://editorial.udg.mx/');
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/udg.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/udg.png')}
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
                source={require('../fotos/udg.png')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 4. Colecciones Especiales Nacionales</Text>
            <Text style={styles.subtitleText}>4.2 Colección Universidad de Guadalajara.</Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.presentacionText}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  Se compone del material editado por la Universidad de Guadalajara, sus centros universitarios y departamentos. Su objetivo es divulgar el conocimiento y fortalecer la áreas de docencia e investigación, impulsando a su vez la creación de nuevos contenidos, la expansión cultural y la actualización en materias de estudio. La colección cuenta con 11,500 volúmenes además de las publicaciones periódicas que edita la Universidad en cada uno de sus centros universitarios.
                </Text>
                
              </View>
              <View style={styles.separator} />
              <TouchableOpacity onPress={this.handleLogoPress}>
                <Image source={require('../fotos/Logo18.png')} style={styles.logoImage} />
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
    width: '34%',
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
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
    width: '86.5%',
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
    marginLeft: 20,
    marginTop: 10,
    width: '88%',
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '86.5%',
    marginLeft: '5%',
    marginTop: 10,
  },
  iconImage: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  presentacionText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 50,
    marginTop: -20,
  },
  textContainer: {
    width: '86.5%',
    marginLeft: '5%',
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logoImage: {
    height: 60,
    width: 250,
    marginLeft: 20,
    marginTop: 20,
  },
});
