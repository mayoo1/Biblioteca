import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Linking } from 'react-native';

const { width, height } = Dimensions.get('window'); // Obtenemos las dimensiones de la pantalla

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
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/jesus.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('../fotos/jesus.jpg')} 
                style={{ height: height * 0.6, width: width * 0.8, borderRadius: 10 }} // Responsivo
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.imageContainer}>
              <Image 
                source={require('../fotos/jesus.jpg')} 
                style={styles.image} // Responsivo
              />
              <TouchableOpacity style={styles.button} onPress={this.handleImagePress}>
                <Text style={styles.buttonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>1.5.3 Jesús Camarena</Text>

            <View style={styles.rowContainer}>
              <Image 
                source={require('../fotos/ico3.png')} 
                style={styles.icon}
              />
              <Text style={styles.headerText}>Presentación</Text>
            </View>

            <View style={styles.divider}></View>

            <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}>
              <Text style={styles.descriptionText}>
                Correspondencia personal y asuntos varios de su ejercicio en los cargos de Diputado del Congreso de la Unión, Gobernador Interino del Estado de Jalisco y Presidente del supremo Tribunal de Justicia del Estado de Jaleco, entre los años de 1840 y 1878.
              </Text>
            </ScrollView>

            <View style={styles.divider}></View>
            <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}>
            <Image source={require('../fotos/Logo3.jpg')} style={styles.logo} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  imageContainer: {
    height: height * 0.4, 
    width: width * 0.9, 
    backgroundColor: '#454545', 
    borderRadius: 5, 
    marginLeft: width * 0.05, 
    marginTop: 10 
  },
  image: {
    height: '70%',
    width: '60%',
    marginTop: '10%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  button: {
    borderWidth: 0,
    borderColor: 'white',
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 13,
    borderRadius: 5,
    backgroundColor: 'darkred',
    marginTop: 10,
    marginHorizontal: width * 0.05,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: width * 0.05,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: -30,
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 40,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginTop: 10,
    marginHorizontal: width * 0.05,
  },
  scrollView: {
    borderWidth: 0,
    width: width * 0.9,
    marginLeft: width * 0.05,
  },
  descriptionText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'justify',
    lineHeight: 25,
  },
  logo: {
    height: height * 0.1,
    width: width * 0.4,
    marginLeft: width * 0.05,
    marginTop: 10,
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
};
