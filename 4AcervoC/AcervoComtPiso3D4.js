import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Linking } from 'react-native';

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
    const url = 'https://www.inegi.org.mx/';
    Linking.openURL(url).catch(err => console.error("Error al abrir la URL: ", err));
  };

  render() {
    const { showImage } = this.state;
    const screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/inegi.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/inegi.png')} 
                style={[styles.fullImage, { width: screenWidth * 0.8 }]}
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
                source={require('../fotos/inegi.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={{ marginTop: 10 }}>
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.titleText}>Presentación</Text>
              <View style={styles.separator} />

              <View style={[styles.textContainer, { width: screenWidth * 0.9 }]}>
                <Text style={styles.bodyText}>
                  Es una red de consulta externa que cuenta con información estadística y geográfica generada por INEGI como los censos económicos, mapas interactivos, unidades de información,
                  Asesores de consulta y un espacio equipado para consulta y capacitación sobre sus diversos productos.{'\n'}
                </Text>
              </View>
              
              <View style={styles.separator} />
              <TouchableOpacity onPress={this.handleLogoPress}>
                <Image source={require('../fotos/Logo16.png')} style={styles.logoImage} />
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
    height: 400,
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
    borderWidth: 0,
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
  iconImage: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 50,
    marginTop: -20,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
  },
  textContainer: {
    marginLeft: '5%',
    marginTop: 10,
  },
  bodyText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
  },
  logoImage: {
    height: 90,
    width: 150,
    marginLeft: 20,
    marginTop: 20,
  },
});
