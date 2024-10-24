import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Linking  } from 'react-native';

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
    const { navigation } = this.props;
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/Libreria13.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/Libreria13.png')} 
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
                source={require('./fotos/Libreria13.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <Text style={{ fontWeight: 'bold', color: 'darkred', fontSize: 22, marginLeft: '6%', marginTop: '3%', width: '86.5%'}}>Piso 2 Biblioteca Álvarez del Castillo</Text>
        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 17, marginLeft: '6%', marginTop: '3%' }}>2.1 Acervo General.</Text>

        <ScrollView style={{ marginTop: '3%' }}>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: '88%', marginLeft: '5%', marginTop: '3%' }} />
          <Image source={require('./fotos/ico3.png')} style={{ height: '8%', width: '5%', marginLeft: '6%', marginTop: '3%' }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: '13%', marginTop: '-5%' }}>Presentación</Text>

          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
              Resguarda libro impresos durante los Siglos XIX y XX, se compone por más de 80,000 volúmenes.
            </Text>
            
          </View>
          <View style={{ borderWidth: 1, borderColor: 'gray', width: '88%',  marginTop: '3%',marginLeft: '5%' }} />
          <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}>
          <Image source={require('./fotos/Logo3.jpg')} style={{height: 80, width: 150, marginLeft: '6%', marginTop: '6%'}} />
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
    width: 300,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: '6%',
    backgroundColor: 'white',
    padding: '3%',
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
    margin: '3%',
    borderRadius: '3%',
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
    marginTop: '6%',
    backgroundColor: 'darkred',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'darkred',
    marginTop: '-2%'
  },
});