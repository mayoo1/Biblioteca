import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';

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
            source={require('../fotos/Antiguo19.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Antiguo19.png')}
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
                source={require('../fotos/Antiguo19.png')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 5. Acervo General, Fondos Particulares y Fototeca</Text>
            <Text style={styles.subtitleText}>5.1 Obras Bibliográficas editadas entre los Siglos XVII y XX</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.contentContainer}>
                <Text style={styles.contentText}>
                  Textos desde el siglo XVII hasta mediados del XX, de diversa temática; historia, contabilidad,
                  geografía, artes, literatura, lógica, ética, filosofía, psicología, moral, matemáticas, ciencias,
                  química, física, medicina, arte, etc.
                </Text>
              </View>
              <View style={styles.separator} />

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
    height: 400,
    width: 300,
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
    height: '70%',
    width: '40%',
    borderRadius: 10,
  },
  viewButton: {
    borderWidth: 0,
    borderColor: 'white',
    width: '40%',
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
  titleText: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: 22,
    marginLeft: '5%',
    marginTop: 10,
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
    marginLeft: '5%',
    marginTop: 10,
    width: '90%',
  },
  scrollView: {
    marginTop: 10,
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
    marginLeft: '5%',
    marginTop: 10,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: '12.5%',
    marginTop: -20,
  },
  contentContainer: {
    width: '90%',
    marginLeft: '5%',
  },
  contentText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logo: {
    height: 80,
    width: 150,
    marginLeft: '5%',
    marginTop: 20,
  },
});
