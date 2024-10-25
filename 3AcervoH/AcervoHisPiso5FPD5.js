import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';

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
            source={require('../fotos/persona14.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona14.jpg')}
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
                source={require('../fotos/persona14.jpg')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoText}>Piso 5. Fondos Particulares</Text>
            <Text style={styles.titleText}>5.4.5 Paulino Machorro Narváez</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.divider} />
              <Image source={require('../fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.presentationText}>Presentación</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  Con fuertes tendencias liberales fue Ministro Público en Teocaltiche, Jalisco y posteriormente Juez en Aguascalientes, fundó el periódico "Revista del Centro". En 1906 regresó a Jalisco y ganó las elecciones municipales de Guadalajara. Desempeñó diversos cargos en la Secretaria de Hacienda y fue Ministro de la Suprema Corte de Justicia. Dió clases de Derecho Constitucional en la UNAM y publicó diversas obras.
                </Text>
              </View>
              <View style={styles.divider} />

              <Image source={require('../fotos/Logo.png')} style={styles.logo} />
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
  innerContainer: {
    flex: 1,
    padding: 10,
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
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoImage: {
    height: '75%',
    width: '60%',
    borderRadius: 10,
  },
  viewButton: {
    width: '30%',
    height: '7%',
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
  infoText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 20,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginTop: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginTop: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    marginTop: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  presentationText: {
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
  logo: {
    height: 60,
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
  },
});
