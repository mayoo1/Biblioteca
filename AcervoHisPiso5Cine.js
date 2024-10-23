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
            source={require('./fotos/persona7.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('./fotos/persona7.jpg')}
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
                source={require('./fotos/persona7.jpg')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 5. Acervo General, Fondos Particulares y Fototeca</Text>
            <Text style={styles.subtitleText}>Colección Emilio García Riera</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('./fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  La Colección Emilio García Riera consta de aproximadamente 4,000 libros, 3,300 revistas, 5,300 películas en formato BETA,
                  VHS y DVD, carteles en diversos formatos, un gran acervo hemerográfico y documental, así como objetos personales del historiador y crítico de cine.
                  Además, la colección se integra de 22,000 fotografías que se consideran parte de la Fototeca.
                </Text>

                <Image source={require('./fotos/ico3.png')} style={{height: 25, width: 25, marginLeft: 0, marginTop: 0,}} />
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: -20,}}>Historia</Text>

                <Text style={styles.descriptionText}>
                  García Riera (Ibiza, 1931 - Guadalajara, 2002) fue pionero en la investigación cinematográfica de México. Comenzó su carrera como crítico de cine en el
                  suplemento México en la Cultura. También colaboró en Excelsior, Unomásuno, La Jornada y Proceso; dirigió las revistas Imágenes. En la década de los
                  sesenta fundó, junto con otros críticos de su generación, el grupo Nuevo Cine, así como la revista del mismo nombre. Su obra más importante es Historia
                  documental del cine mexicano (1969 - 1978). Otras de sus publicaciones son México visto por el cine extranjero (1987 - 1988) y su autobiografía El cine
                  es mejor que la vida (1990). En 1986 fundó el Centro de Investigación y Enseñanza Cinematográficas (CIEC) de la Universidad de Guadalajara.{'\n'}
                </Text>

                <Image source={require('./fotos/ico3.png')} style={{height: 25, width: 25, marginLeft: 0, marginTop: 0,}} />
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: -20,}}>Acervo</Text>

                <Text style={styles.descriptionText}>
                  Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser consultada en el piso 5 de la Biblioteca Histórica (adicionalmente,
                  parte de los acervos audiovisuales pueden consultarse desde la Mediateca Emilio García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).
                </Text>
                
              </View>
              <View style={styles.separator} />
              <Image source={require('./fotos/Logo3.jpg')} style={styles.logoImage} />
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
    height: width * 1.2,
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
    width: '35%',
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
  titleText: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
  },
  iconImage: {
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
  descriptionContainer: {
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
  logoImage: {
    height: 80,
    width: 150,
    marginLeft: 20,
    marginTop: 20,
  },
});
