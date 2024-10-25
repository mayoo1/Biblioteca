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
            source={require('../fotos/persona20.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona20.jpg')}
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
                source={require('../fotos/persona20.jpg')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Piso 5. Fondos Particulares</Text>
            <Text style={styles.sectionSubtitle}>5.4.11 Antonio Peñafiel</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.presentationTitle}>Presentación</Text>

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  Uno de lo más grandes polígrafos de México y tal vez el más ilustre hidalguense de finales del siglo XIX y principios del XX, participa en la acciones militares, al lado del General Ignacio Zaragoza, en su carácter de médico militar, promovió la edición de numerosas obras relativas a la historia antigua de México, se le considera como uno de los primeros y más completos estadígrafos de México, dirigió el Primer Censo General de la República.
                </Text>
              </View>
              <View style={styles.separator} />

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
    height: 400,
    width: 250, 
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
    height: '65%',
    width: '45%',
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
    backgroundColor: 'black',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
  },
  sectionSubtitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%', // Cambiar a porcentaje para mayor responsividad
    alignSelf: 'center',
    marginTop: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  presentationTitle: {
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
  logo: {
    height: 60,
    width: '80%',
    marginLeft: '10%', 
    marginTop: 20,
  },
});
