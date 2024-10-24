import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, StyleSheet, Linking } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class AcervoHisPiso1A4 extends Component {
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

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/ferrocarriles.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageContainer}>
              <Image 
                source={require('./fotos/ferrocarriles.jpg')} 
                style={styles.largeImage}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.contentContainer}>
            <View style={styles.card}>
              <Image 
                source={require('./fotos/ferrocarriles.jpg')} 
                style={styles.cardImage}
              />
              <TouchableOpacity onPress={this.handleImagePress} style={styles.viewImageButton}>
                <Text style={styles.viewImageButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>1.5.2 Ferrocarriles de Jalisco, 1897 - 1927</Text>

            <View style={styles.presentationContainer}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={styles.icon}
              />
              <Text style={styles.presentationText}>Presentación</Text>
            </View>

            <View style={styles.separator} />

            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <Text style={styles.descriptionText}>
                Contiene documentación con las cuentas mensuales de las oficina general de los ferrocarriles. (18 registros) Son las cuentas mensuales de la oficina general de los Ferrocarriles de Jalisco, 1897-1927.
              </Text>
            </ScrollView>

            <View style={styles.separator} />
            <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}>
            <Image source={require('./fotos/Logo3.jpg')} style={styles.logo} />
            </TouchableOpacity>
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
  imageContainer: {
    alignItems: 'center',
  },
  largeImage: {
    height: height * 0.45,
    width: width * 0.8,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  card: {
    height: height * 0.5,
    width: width * 0.9,
    backgroundColor: '#454545',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  cardImage: {
    height: '70%',
    width: '60%',
    marginTop: '10%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  viewImageButton: {
    borderWidth: 0,
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  viewImageButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 13,
    borderRadius: 5,
    backgroundColor: 'darkred',
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  presentationContainer: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: -30,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 40,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginTop: 10,
    marginHorizontal: 20,
  },
  scrollViewContainer: {
    borderWidth: 0,
    width: '90%',
    marginLeft: 15,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  descriptionText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
  },
  logo: {
    height: height * 0.1,
    width: width * 0.4,
    marginLeft: '5%',
    marginTop: height * 0.02,
  },
});
