import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';

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
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/Libreria10.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/Libreria10.jpg')} 
                style={{ height: 400, width: 300, borderRadius: 10 }}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1, padding: '5%' }}>
            <View style={{ height: '40%', backgroundColor: '#454545', borderRadius: 5, marginBottom: '5%' }}>
              <Image 
                source={require('./fotos/Libreria10.jpg')} 
                style={{ height: '70%', width: '80%', borderRadius: 5, alignSelf: 'center', marginTop: '8%' }}
              />
              <TouchableOpacity 
                style={styles.button} 
                onPress={this.handleImagePress}
              >
                <Text style={styles.buttonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Piso 4. Publicaciones Seriadas</Text>
            <Text style={styles.subtitle}>4.1. Publicaciones Seriadas.</Text>

            <View style={styles.presentationContainer}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={styles.icon}
              />
              <Text style={styles.presentationText}>Presentación</Text>
            </View>

            <View style={styles.separator} />

            <ScrollView style={styles.scrollView}>
              <Text style={styles.scrollText}>
                Este acervo se compone de las revistas y folletos publicados de manera periódica en el estado y en otras regiones del país.
                Se resguardan ediciones de diversas áreas del conocimiento publicadas durante los siglos XIX y XX.
              </Text>
            </ScrollView>

            <View style={styles.separator} />
            <TouchableOpacity onPress={() => this.openURL('https://idej.edu.mx/')}>
            <Image source={require('./fotos/Logo8.png')} style={styles.logo} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  logo: {
    height: 80,
    width: 150,
    alignSelf: 'center',
    marginTop: '2%',
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
  button: {
    borderWidth: 0,
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 1,
    backgroundColor: 'transparent', // Cambié a transparente para mantener el diseño original
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    height: '100%',
    marginTop: '30%'
  },
  title: {
    color: 'darkred',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  presentationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  scrollView: {
    borderWidth: 0,
    width: '90%',
    alignSelf: 'center',
  },
  scrollText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'justify',
  },
};


