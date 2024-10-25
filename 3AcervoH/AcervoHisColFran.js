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
            source={require('../fotos/cpi.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/cpi.png')} 
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
                source={require('../fotos/cpi.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Archivo Sonoro</Text>
            <Text style={styles.subtitle}>Francisco Navarro</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Presentación</Text>

              <Text style={styles.description}>
                Reúne un gigantesco acervo de discos de vinilo y CD con música de diferentes géneros (sones, danzones, huapangos, corridos, rancheras, cumbias,
                salsa, trova, tangos, bandas, norteña, blues, rock, jazz y clásica) con grabaciones de principios y mediados del siglo XX. Ademas, integra esta
                colección una biblioteca y un archivo documental sobre música. Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser 
                consultada en el piso 4 de la Biblioteca Histórica (adicionalmente, parte de los acervos sonoros pueden consultarse desde la Mediateca Emilio
                García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).
              </Text>
              <View style={styles.separator} />

              <View style={styles.section}>
                <Image source={require('../fotos/ico3.png')} style={styles.icon} />
                <Text style={styles.sectionTitle}>Música Mexicana</Text>
                <Text style={styles.subDescription}>
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
                
              </View>
              <View style={styles.separator} />
              <View style={styles.section}>
                <Image source={require('../fotos/ico3.png')} style={styles.icon} />
                <Text style={styles.sectionTitle}>Música Internacional</Text>
                <Text style={styles.subDescription}>
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
    padding: 10,
  },
  infoContainer: {
    height: '35%',
    width: '95%',
    backgroundColor: '#454545',
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
    height: '7%',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#454545',
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
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 17,
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
    marginVertical: 10,
    marginLeft: '4%'
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
  description: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  section: {
    width: '86.5%',
    marginLeft: '5%',
  },
  subDescription: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 15,
  },
});
