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
    const { width, height } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/craneo.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/craneo.jpg')}
                style={[styles.fullImage, { width: width * 0.9, height: height * 0.4 }]}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={[styles.infoContainer, { height: height * 0.35, width: width * 0.95 }]}>
              <Image 
                source={require('../fotos/craneo.jpg')} 
                style={[styles.infoImage, { height: height * 0.25, width: width * 0.85 }]} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.titleText}>6.2. Acervo Especial. Piso 6</Text>
            <Text style={styles.subtitleText}>6.2.4. Colección de Medicina.</Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={styles.divider} />
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.bodyText}>
                  Formada por impresos mexicanos y europeos de estudios y practicas medicas, del Siglo XVII a mediados del XX.
                </Text>
              </View>
              <View style={styles.innerDivider} />

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
    borderRadius: 7,
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
    backgroundColor: '#353535',
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
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#353535',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
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
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
  },
  iconImage: {
    height: '8%',
    width: '5%',
    marginLeft: '5%',
    marginTop: '5%',
  },
  presentationText: {
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
  bodyText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  innerDivider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft:'5%'
  },
  logoImage: {
    height: 80,
    width: 150,
    marginLeft: 20,
    marginTop: 20,
  },
});
