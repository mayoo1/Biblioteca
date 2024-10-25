import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/persona4.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/persona4.jpg')} 
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
                source={require('../fotos/persona4.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.audioButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Escuchar: "Canción de cuna a Patricia"</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
              <Image source={require('../fotos/Logo42.png')} style={styles.logo} />
              <View style={styles.separator} />
              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  La colección del reconocido chelista y director de orquesta Arturo Xavier González fue donada por su hija,
                  Consuelo González. El maestro González nació en Tequila, Jalisco. A la edad de 12 años ya tocaba flauta, clarinete, 
                  saxofón y piano. Aprendió a tocar el cello, instrumento con el que consiguió fama y grandes triunfos, con el maestro
                  Ignacio Camarena, en la Escuela Normal de Música de Guadalajara. En 1953 se le nombró director de la Banda del Estado 
                  de Jalisco y en 1958 se le reconoció con el Premio Jalisco y la Medalla José Clemente Orozco. Por mucho tiempo hizo dúo
                  con la pianista Leonor Montijo. Su Colección incluye música barroca, clásica, contemporánea, gregoriana, medieval, 
                  romántica, ópera, autóctona, blues, danzón, foxtrot, jazz y tango, además de música para ballet y cine.
                  
                  Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser consultada en el piso 2 de la Biblioteca
                  Histórica (adicionalmente, parte de los acervos sonoros pueden consultarse desde la Mediateca Emilio García Riera, ubicada en el
                  piso 4 de la Biblioteca Contemporánea).

                  En la Escuela Normal de Música de Guadalajara, con el maestro Ignacio Camarena, aprendió a tocar el Cello, instrumento con el que consiguió gran fama
                  y grandes triunfos. En 1953, se le nombró director de la Banda del Estado de Jalisco y en 1958 se le reconoció con el Premio Jalisco y la medalla
                  José Clemente Orozco. Por mucho tiempo hizo dúo con la pianista Leonor Montijo.
                </Text>
                <View style={styles.separator} />
                <Text style={styles.sectionTitle}>Música Formal</Text>
                <Text style={styles.bulletList}>
                  • ballet{'\n'}
                  • Barroco{'\n'}
                  • Clásica{'\n'}
                  • Clásica contemporánea{'\n'}
                  • Gregoriana{'\n'}
                  • Medieval{'\n'}
                  • Ópera{'\n'}
                  • Romanticismo
                </Text>
                <View style={styles.separator} />
                <Text style={styles.sectionTitle}>Música Variada</Text>
                <Text style={styles.bulletList}>
                  • Autóctona{'\n'}
                  • Blues{'\n'}
                  • Cine{'\n'}
                  • Danzón{'\n'}
                  • Fonógrafo{'\n'}
                  • Fox Trot{'\n'}
                  • Jazz{'\n'}
                  • Tango
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
    height: height * 0.4,
    width: width * 0.8,
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
    padding: 5,
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
    width: '65%',
    borderRadius: 10,
  },
  audioButton: {
    width: '90%',
    marginTop: 25,
    marginLeft: -10,
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  scrollView: {
    marginTop: 10,
  },
  logo: {
    height: 40,
    width: 150,
    marginTop: 10,
    marginLeft: 20,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 315,
    marginVertical: 10,
    alignSelf: 'center',
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
  },
  sectionTitle: {
    color: 'black',
    fontSize: 22,
    lineHeight: 25,
    textAlign: 'justify',
    fontWeight: 'bold',
    marginTop: 10,
  },
  bulletList: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 15,
    marginLeft: 20,
  },
});
