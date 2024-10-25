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
            source={require('../fotos/persona12.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/persona12.jpg')} 
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
                source={require('../fotos/persona12.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15, marginLeft: '6%', marginTop: '3%' }}>Piso 5. Fondos Particulares</Text>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginLeft: '6%', marginTop: '3%' }}>5.4.3 José Cornejo Franco
        </Text>

        <ScrollView style={{ marginTop: 10 }}>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: '90%', marginLeft: '5%', marginTop: '3%' }} />
          <Image source={require('../fotos/ico3.png')} style={{ height: '8%', width: '6%', marginLeft: '6%', marginTop: '4%' }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: '14%', marginTop: '-6%' }}>Presentación</Text>

          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: '3%' }}>
              Escritor, historiador, bibliotecólogo, bibliógrafo, catedrático, investigador y académico mexicano, se especializó en la historia del estado de Jalisco. 
              Director de la biblioteca Pública del Estado de Jalisco de 1930 a 1931, repitiendo nuevamente el cargo en 1949 hasta su muerte.
            </Text>
            
          </View>
          <View style={{ borderWidth: 1, borderColor: 'gray', width: '90%', marginLeft: '5%', marginTop: '6%' }} />
          
          <Image source={require('../fotos/Logo.png')} style={{height: '20%', width: '80%', marginLeft: '6%', marginTop: '3%',borderWidth: 0, borderColor: 'gray' }} />
         
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
    backgroundColor: 'black',
    margin: '3%',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  infoImage: {
    height: '65%', 
    width: '45%',
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
    backgroundColor: 'black',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    marginTop: '-2%'
  },
});
