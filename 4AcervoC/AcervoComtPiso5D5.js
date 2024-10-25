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
          <View style={styles.innerContainer}>
            <View style={styles.infoContainer}>
              <Image 
                source={require('../fotos/cpi.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
              <Text style={styles.collectionText}>5 Colecciones Internacionales. Piso 5</Text>
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.historyText}>Historia</Text>
              <View style={styles.separator} />

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  El área de colecciones internacionales cuenta también con material bibliográfico en alemán, portugués, gallego e italiano con temáticas diversas como tecnología, literatura, ciencias sociales, medicina, entre otros. Estas colecciones han sido donadas en diversas ediciones de la FIL por países invitados y por representantes de la industria editorial de diversas partes del mundo.
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={styles.logoRow}>
                <Image source={require('../fotos/Logo34.png')} style={styles.logoSmall} />
                <Image source={require('../fotos/Logo35.png')} style={styles.logoSmall} />
              </View>
              <View style={styles.logoRow}>
                <Image source={require('../fotos/Logo36.png')} style={styles.logoLarge} />
                <Image source={require('../fotos/Logo37.png')} style={styles.logoLarge} />
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
  innerContainer: {
    flex: 1,
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
  scrollView: {
    marginTop: 10,
  },
  collectionText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 15,
  },
  historyText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 50,
    marginTop: -20,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  textContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  logoSmall: {
    height: 50,
    width: 150,
  },
  logoLarge: {
    height: 80,
    width: 80,
  },
});
