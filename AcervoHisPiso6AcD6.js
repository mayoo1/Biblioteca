import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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
    const { width, height } = Dimensions.get('window'); // Obtiene dimensiones de la pantalla

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/Antiguo21.png')}
            style={[styles.imageBackground, { height }]} // Ajusta al alto de la pantalla
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/Antiguo21.png')} 
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
                source={require('./fotos/Antiguo21.png')} 
                style={[styles.infoImage, { height: height * 0.23, width: width * 0.7 }]}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={[styles.titleText, { fontSize: width * 0.06, marginLeft: width * 0.05 }]}>6.2. Acervo Especial. Piso 6</Text>
            <Text style={[styles.subTitleText, { fontSize: width * 0.04, marginLeft: width * 0.05 }]}>6.2.6. Colección de Testigos.</Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={[styles.divider, { width: width * 0.9, marginLeft: width * 0.05 }]} />
              <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: width * 0.05, marginTop: 10 }} />
              <Text style={[styles.sectionTitle, { fontSize: width * 0.04, marginLeft: width * 0.15 }]}>Presentación</Text>

              <View style={[styles.textContainer, { width: width * 0.9, marginLeft: width * 0.05 }]}>
                <Text style={[styles.bodyText, { fontSize: width * 0.045, lineHeight: width * 0.06 }]}>
                  Recopilación de fragmentos de manuscritos, cartas oficios religiosos, hojas con anotaciones manuscritas, recortes de periódicos, invitaciones, etc. Encontrados en las siguientes colecciones o acervos:
                  {'\n'}
                  {'\n'}-Manuscritos
                  {'\n'}-Cedularios
                  {'\n'}-Acervo General
                </Text>
                <View style={[styles.divider, { width: width * 0.9 }]} />
              </View>

              <Image source={require('./fotos/Logo3.jpg')} style={{ height: height * 0.1, width: width * 0.5, marginLeft: width * 0.05, marginTop: 20 }} />
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
    backgroundColor: '#353535',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  infoImage: {
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
    backgroundColor: '#353535',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#353535',
    marginTop: -10,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'darkred',
    marginTop: 10,
  },
  subTitleText: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: -20,
  },
  textContainer: {
    marginTop: 10,
  },
  bodyText: {
    color: 'black',
    textAlign: 'justify',
    marginTop: 10,
  },
});
