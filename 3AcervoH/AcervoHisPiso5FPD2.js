import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
            source={require('../fotos/persona11.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/persona11.jpg')} 
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
                source={require('../fotos/persona11.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Piso 5. Fondos Particulares</Text>
            <Text style={styles.subTitle}>5.4.2 Jorge Enciso Alatorre</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  Material con temática sobre agricultura, fitotécnica, tecnología, boletines y todo lo concerniente al cultivo y cuidado de la caña de azúcar.{'\n'}
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
    height: 400, // Proporcional a la altura de la pantalla
    width: 300,  // Proporcional a la anchura de la pantalla
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
    paddingHorizontal: 20,
  },
  infoContainer: {
    height: '39%',
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  infoImage: {
    height: '65%', 
    width: '55%',
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
  sectionTitle: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    marginTop: 10,
  },
  subTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%', // Ajustado a 100% del ancho
    alignSelf: 'center',
    marginVertical: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 0,
    marginTop: 10,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 30,
    marginTop: -20,
  },
  descriptionContainer: {
    width: '95%', // Proporcional al ancho de la pantalla
    alignSelf: 'center',
    marginLeft: '-4%'
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
    width: '95%', // Proporcional al ancho de la pantalla
    alignSelf: 'center',
    marginTop: 20,
  },
});

