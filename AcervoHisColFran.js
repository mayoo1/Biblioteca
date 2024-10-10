import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet  } from 'react-native';

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
    const { navigation } = this.props;
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/seriadas.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/seriadas.png')} 
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
                source={require('./fotos/seriadas.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <Text style={{ fontWeight: 'bold', color: 'darkred', fontSize: 15, marginLeft: 20, marginTop: 10 }}>Archivo Sonoro</Text>
        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 17, marginLeft: 20, marginTop: 10 }}>Francisco Navarro</Text>

        <ScrollView style={{ marginTop: 10 }}>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 10 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Presentacion</Text>

          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
              Reúne un gigantesco acervo de discos de vinilo y CD con música de diferentes géneros (sones, danzones, huapangos, corridos, rancheras, cumbias,
              salsa, trova, tangos, bandas, norteña, blues, rock, jazz y clásica) con grabaciones de principios y mediados del siglo XX. Ademas, integra esta
              colección una biblioteca y un archivo documental sobre música. Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser 
              consultada en el piso 4 de la Biblioteca Histórica (adicionalmente, parte de los acervos sonoros pueden consultarse desde la Mediateca Emilio
              García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).
            </Text>
            <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 20 }} />
          </View>

          <View style={{ width: '86.5%', marginLeft: '5%' }}>
          <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 0, marginTop: 20 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: -20 }}>Música Mexicana</Text>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 15 }}>
            {'\t'}{'\t'}• Boleros
            {'\n'}{'\t'}{'\t'}• Danzones 
            {'\n'}{'\t'}{'\t'}• Huapangos 
            {'\n'}{'\t'}{'\t'}• Corridos 
            {'\n'}{'\t'}{'\t'}• Rancheras 
            {'\n'}{'\t'}{'\t'}• Cumbias 
            {'\n'}{'\t'}{'\t'}• Salsa 
            {'\n'}{'\t'}{'\t'}• Trova 
            {'\n'}{'\t'}{'\t'}• Bandas y Norteña 
            </Text>
            <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 20 }} />
          </View>
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
          <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 0, marginTop: 20 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: -20 }}>Música Internacional</Text>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 15 }}>
            {'\t'}{'\t'}• Tangos 
            {'\n'}{'\t'}{'\t'}• Blues  
            {'\n'}{'\t'}{'\t'}• Rock and roll 
            {'\n'}{'\t'}{'\t'}• Jazz  
            {'\n'}{'\t'}{'\t'}• Clásica
            </Text>
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
    backgroundColor: 'darkred',
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
    backgroundColor: 'darkred',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'darkred',
    marginTop: -10
  },
});