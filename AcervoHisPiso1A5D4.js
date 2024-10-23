import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';

export default class AcervoHisPiso1A4 extends Component {
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
    const { width, height } = Dimensions.get('window'); // Obtener las dimensiones de la pantalla

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/juanjose.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/juanjose.jpg')} 
                style={{ height: height * 0.6, width: width * 0.8, borderRadius: 10 }} // Ajuste de tamaño en base a la pantalla
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ height: height * 0.4, width: width * 0.9, backgroundColor: '#454545', borderRadius: 5, alignSelf: 'center', marginTop: 10 }}>
              <Image 
                source={require('./fotos/juanjose.jpg')} 
                style={{ height: '70%', width: '60%', marginTop: '10%', borderRadius: 5, alignSelf: 'center' }}
              />
              <TouchableOpacity 
                style={{ borderWidth: 0, borderColor: 'white', width: '30%', height: '7%', alignSelf: 'center', justifyContent: 'center', marginTop: 10 }} 
                onPress={this.handleImagePress}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={{color:'white', fontSize:13, borderRadius: 5, backgroundColor: 'darkred', marginTop: 10, marginHorizontal: 20, textAlign:'center' }}>
              1.5.4 Capitán de Fragata de la Armada Mexicana Juan José
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={{ height: 25, width: 25, marginRight: 10 }}
              />
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Presentación</Text>
            </View>

            <View style={{ height: 1, backgroundColor: 'gray', marginTop: 10, marginHorizontal: 20 }}></View>

            <ScrollView style={{ width: '90%', alignSelf: 'center' }} contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}>
              <Text style={{ color: 'black', fontSize: 15, textAlign: 'justify', lineHeight: 25 }}>
                Correspondencia oficial y privada sobre asuntos concernientes a los cargos que desempeñó en los puertos de San Blas y Acapulco, entre los años de 1793 - 1839, 1840 - 1864 y 1897 - 1904.
              </Text>
            </ScrollView>

            <View style={{ height: 1, backgroundColor: 'gray', marginTop: 10, marginHorizontal: 20 }}></View>

            <Image source={require('./fotos/Logo3.jpg')} style={[styles.logo, { width: width * 0.4, height: height * 0.1 }]} />
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  logo: {
    marginLeft: 20,
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
