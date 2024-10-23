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

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/biblioilv.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('./fotos/biblioilv.png')}
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
                source={require('./fotos/biblioilv.png')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Piso 4. Colecciones Internacionales</Text>
            <Text style={styles.subtitle}>4.4 Biblioteca Ignacio L. Vallarta</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />

              <Image source={require('./fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Historia</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Esta biblioteca se encontraba anteriormente en el instituto de investigaciones jurídicas del centro universitario de ciencia sociales y humanidades de la Universidad de Guadalajara, la cual pasa a la biblioteca Publica del estado de Jalisco "Juan Jose Arreola", con la finalidad de tener un mayor alcance y difusión entre los estudiosos e investigadores del area de la jurisprudencia.
                </Text>
                <View style={styles.separator} />
              </View>

              <Image source={require('./fotos/ico10.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Acervo</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  La biblioteca cuenta con alrededor de 10,000 volúmenes y varias publicaciones periódicas, tanto nacionales como del extranjero...
                </Text>
                <View style={styles.separator} />
              </View>

              <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => this.openURL('https://idej.edu.mx/')}>
                  <Image source={require('./fotos/Logo19.png')} style={styles.logo} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openURL('https://bpej.udg.mx/')}>
                  <Image source={require('./fotos/Logo.png')} style={styles.largeLogo} />
                </TouchableOpacity>
              </View>

              <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => this.openURL('https://stjjalisco.gob.mx/')}>
                  <Image source={require('./fotos/Logo21.png')} style={styles.largeLogo} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openURL('https://tjajal.gob.mx/')}>
                  <Image source={require('./fotos/Logo20.png')} style={styles.extraLargeLogo} />
                </TouchableOpacity>
              </View>
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
    width: '95%',
    backgroundColor: 'black',
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
    height: height * 0.05,
    justifyContent: 'center',
    backgroundColor: 'black',
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
    width: '86.5%',
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
    marginLeft: 20,
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: width * 0.9,
    alignSelf: 'center',
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
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  logo: {
    height: 40,
    width: 120,
    marginLeft: 20,
  },
  largeLogo: {
    height: 40,
    width: 150,
    marginRight: 10,
  },
  extraLargeLogo: {
    height: 40,
    width: 150,
    marginRight: 20,
  },
});
