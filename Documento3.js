import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

export default class QuienesSom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false, // Estado para mostrar la imagen
    };
  }

  handleImagePress = () => {
    this.setState({ showImage: true }); // Mostrar la imagen al presionar
  };

  handleCloseImage = () => {
    this.setState({ showImage: false }); // Cerrar la imagen
  };

  render() {
    const { showImage } = this.state; // Obtener el estado de la imagen

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/GaleriaHis3.png')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10} // Difuminar el fondo
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/GaleriaHis3.png')} 
                style={{ height: 450, width: 300, borderRadius: 10 }} // Mostrar imagen grande
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ height: '50%', width: '90%', backgroundColor: '#454545', borderRadius: 5, marginLeft: 20, marginTop: 10 }}>
              <Image 
                source={require('./fotos/GaleriaHis3.png')} 
                style={{ height: '70%', width: '60%', marginTop: '10%', borderRadius: 5, alignSelf: 'center' }}
              />
              <TouchableOpacity style={{ borderWidth: 0, borderColor: 'white', width: '30%', height: '7%', alignSelf: 'center', justifyContent: 'center', marginTop: 1 }} onPress={this.handleImagePress}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop:20, height:'100%', borderColor:'red', borderWidth:0}}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color:'white', fontSize:12, borderRadius: 5, backgroundColor: 'darkred', marginTop: 10, marginHorizontal: 20, width:'90%' }}>Piso 1.1 Archivo de la Real Audiencia de la Nueva Galicia</Text>

            <View style={{ flexDirection: 'row', width: '40%', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={{ height: 25, width: 25, marginRight: -30 }}
              />
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 40 }}>Presentacion</Text>
            </View>

            <View style={{ height: 1, backgroundColor: 'gray', marginTop: 10, marginHorizontal: 20 }}></View>

            <ScrollView style={{ borderWidth: 0, width: '90%', marginLeft: 15 }} contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}>
              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify' }}>
                Libros encuadernados en piel que incluyen asuntos relativos al real ensaye, caudales del ramo de peajes, tabacos, papel sellado, renta de naipes, registro de alcabalas, entre otros.
              </Text>
            </ScrollView>

            <View style={{ height: 1, backgroundColor: 'gray', marginTop: 10, marginHorizontal: 20 }}></View>

            <Image source={require('./fotos/Logo3.jpg')} style={styles.logo} />
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  logo: {
    height: '10%',
    width: '40%',
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
