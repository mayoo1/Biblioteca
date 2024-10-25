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
    const { showImage } = this.state;
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/musica.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/musica.jpg')} 
                style={[styles.fullImage, { width: screenWidth * 0.8, height: screenHeight * 0.5 }]} // Responsivo
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
                source={require('../fotos/musica.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.titleText}>6.2. Acervo Especial. Piso 6</Text>
            <Text style={styles.subtitleText}>6.2.5. Colección de Música.</Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  Es esta colección podemos encontrar partituras de reconocidos músicos y compositores como el jalisciense Tomas Escobar, el compositor alemán Robert Schumann, Ludwig Van Beethoven, entre otros.
                </Text>
              </View>
              <View style={styles.separator} />

              <Image source={require('../fotos/Logo3.jpg')} style={styles.logoImage} />
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
    backgroundColor: '#353535',
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
    backgroundColor: '#353535',
    marginTop: -10
  },
  titleText: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: 24,
    marginLeft: 20,
    marginTop: 10,
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    alignSelf: 'center',
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
    height: 80,
    width: 150,
    marginLeft: 20,
    marginTop: 20,
  },
});
