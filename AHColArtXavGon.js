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
            source={require('./fotos/persona4.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/persona4.jpg')} 
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
                source={require('./fotos/persona4.jpg')} 
                style={styles.infoImage} 
              />
              
              <TouchableOpacity style={{width: '90%', marginTop: 25, marginLeft: -10 }} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Escuchar: "Canción de cuna a Patricia"</Text>
            </TouchableOpacity>
            </View>
            

        <ScrollView style={{ marginTop: 10 }}>
        <Image source={require('./fotos/ico3.png')} style={{ height: 20, width: 100, marginTop: 10, marginLeft: 20}} />
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 360, marginLeft: 20, marginTop: 10 }} />
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
            {'\n'}La colección del reconocido chelista y director de orquesta Arturo Xavier González fue donada por su hija,
            Consuelo González. El maestro González nació en Tequila, Jalisco. A la edad de 12 años ya tocaba flauta, clarinete, 
            saxofón y piano. Aprendió a tocar el cello, instrumentos con el que consiguió fama y grandes triunfos, con el maestro
            Ignacio Camarena, en la Escuela Normal de Música de Guadalajara. En 1953 se lo nombró director de la Banda del Estado 
            de Jalisco y en 1958 se le reconoció con el Premio Jalisco y la Medalla José Clemente Orozco. Por mucho tiempo hizo dúo
            con la pianista Leonor Montijo. Su Colección incluye música barroca, clásica, clásica Contemporánea, gregoriana, medieval, 
            romántica, ópera, autóctona, blues, danzón, foxtrot, jazz y tango, además de música para ballet y cine.{'\n'}

            {'\n'}Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser consultada en el piso 2 de la Biblioteca
            Histórica (adicionalmente, parte de los acervos sonoros pueden consultarse desde la Mediateca Emilio García Riera, ubicada en el
            piso 4 de la Biblioteca Contemporánea).{'\n'}

            {'\n'}En la Escuela Normal de Música de Guadalajara, con el maestro Ignacio Camarena, aprendió a tocar el Cello, instrumento con el que consiguió gran fama
            y grandes triunfos. En 1953, se le nombro director de la Banda del Estado de Jalisco y en 1958 se le reconoció con el Premio Jalisco y la medalla
            José Clemente Orozco. Por mucho tiempo hizo dúo con la pianista Leonor Montijo.

            <View style={{ borderWidth: 1, borderColor: 'gray', width: 355, marginLeft: 20, marginTop: 10 }} />
            </Text>
            <Text style={{ color: 'black', fontSize: 22, lineHeight: 25, textAlign: 'justify', fontWeight: 'bold'}}>
            {'\n'}{'\t'}{'\t'}Música Formal 
            </Text>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 15, marginLeft: 20 }}>
            {'\t'}{'\t'}• ballet
            {'\n'}{'\t'}{'\t'}• Barroco 
            {'\n'}{'\t'}{'\t'}• Clásica
            {'\n'}{'\t'}{'\t'}• Clásica contemporánea
            {'\n'}{'\t'}{'\t'}• Gregoriana
            {'\n'}{'\t'}{'\t'}• Medieval 
            {'\n'}{'\t'}{'\t'}• Ópera 
            {'\n'}{'\t'}{'\t'}• Romanticismo
            </Text>
            <View style={{ borderWidth: 1, borderColor: 'gray', width: 355, marginLeft: 0, marginTop: 10 }} />
            <Text style={{ color: 'black', fontSize: 22, lineHeight: 25, textAlign: 'justify', fontWeight: 'bold'}}>
            {'\n'}{'\t'}{'\t'}Música Variada 
            </Text>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 15, marginLeft: 20 }}>
            {'\t'}{'\t'}• Autóctona
            {'\n'}{'\t'}{'\t'}• Blues 
            {'\n'}{'\t'}{'\t'}• Cine
            {'\n'}{'\t'}{'\t'}• Danzón
            {'\n'}{'\t'}{'\t'}• Fonógrafo
            {'\n'}{'\t'}{'\t'}• Fox Trot 
            {'\n'}{'\t'}{'\t'}• Jazz
            {'\n'}{'\t'}{'\t'}• Tango
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
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  infoImage: {
    height: '65%', 
    width: '65%',
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
    backgroundColor: 'black',
    marginTop: -10,
  },
});