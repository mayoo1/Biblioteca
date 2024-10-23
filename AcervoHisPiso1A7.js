import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class AcervoHisPiso1A7 extends Component {
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
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/GaleriaHis5.png')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/GaleriaHis5.png')} 
                style={{ height: height * 0.6, width: width * 0.8, borderRadius: 10 }}
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
                source={require('./fotos/GaleriaHis5.png')} 
                style={styles.mainImage}
              />
              <TouchableOpacity style={styles.viewImageButton} onPress={this.handleImagePress}>
                <Text style={styles.viewImageButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.title}>Piso 1.7 Mapoteca</Text>

            <View style={styles.sectionTitleContainer}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={styles.icon}
              />
              <Text style={styles.sectionTitle}>Presentación</Text>
            </View>

            <View style={styles.divider}></View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
              <Text style={styles.textContent}>
                1.1{'\t'}Nueva Galicia, Jalisco y sus municipios, planos y croquis de Guadalajara.
                {'\n'}1.2{'\t'}República Mexicana, Ciudad de México, estados de la República y Provincias de la época colonial.
                {'\n'}1.3{'\t'}Mapas de continentes, países y mapas mundi.
              </Text>
            </ScrollView>

            <View style={styles.divider}></View>

            <Image source={require('./fotos/Logo3.jpg')} style={styles.logo} />
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
    marginTop: 10,
  },
  mainImage: {
    height: '70%',
    width: '60%',
    marginTop: '10%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  viewImageButton: {
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  viewImageButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
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
  sectionTitleContainer: {
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
  sectionTitle: {
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
    width: '90%',
    marginLeft: width * 0.05,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  textContent: {
    color: 'black',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
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
