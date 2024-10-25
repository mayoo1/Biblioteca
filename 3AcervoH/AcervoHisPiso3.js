import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';

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

  // Agrega esta función para manejar la apertura de la URL
  handleLogoPress = () => {
    const url = 'https://tu-url-aqui.com'; // Reemplaza con la URL que desees
    Linking.openURL(url).catch(err => console.error("No se pudo abrir la URL:", err));
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/Antiguo1.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('../fotos/Antiguo1.jpg')} 
                style={{ height: 450, width: 300, borderRadius: 10 }}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ height: '50%', width: '90%', backgroundColor: '#454545', borderRadius: 5, marginLeft: '6%', marginTop: '3%' }}>
              <Image 
                source={require('../fotos/Antiguo1.jpg')} 
                style={{ height: '70%', width: '60%', marginTop: '10%', borderRadius: 5, alignSelf: 'center' }}
              />
              <TouchableOpacity style={{ borderWidth: 0, borderColor: 'white', width: '30%', height: '7%', alignSelf: 'center', justifyContent: 'center', marginTop: 1 }} onPress={this.handleImagePress}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop:'6%', height:'100%', borderColor:'red', borderWidth:0}}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color:'white', fontSize:13, borderRadius: 5, backgroundColor: 'darkred', marginTop: '3%', marginHorizontal: '6%', textAlign:'center' }}>Piso 3. Hemeroteca Histórica</Text>

            <View style={{ flexDirection: 'row', width: '40%', alignItems: 'center', marginTop: '3%', marginLeft: '6%' }}>
              <Image 
                source={require('../fotos/ico3.png')} 
                style={{ height: '95%', width: '15%', marginRight: '-25%' }}
              />
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: '30%' }}>Presentación</Text>
            </View>

            <View style={{ height: 2, backgroundColor: 'gray', marginTop: '3%', marginHorizontal: '6%' }}></View>

            <ScrollView style={{ borderWidth: 0, width: '95%', marginLeft: '2%' }} contentContainerStyle={{ paddingHorizontal: '6%', paddingTop: '3%' }}>
              <Text style={{ color: 'black', fontSize: 16, lineHeight: 20, textAlign: 'justify' }}>
                De la prensa local, regional nacional existen diferentes títulos, que abordan temas de política, jurisprudencia, literatura, arte, variedades, educación, medicina y religion. Se resguardan títulos publicados desde 1809 hasta el año 2011.
              </Text>
            </ScrollView>

            <View style={{ height: 2, backgroundColor: 'gray', marginTop: '3%', marginHorizontal: '6%' }}></View>

            <TouchableOpacity onPress={this.handleLogoPress}>
              <Image source={require('../fotos/Logo8.png')} style={styles.logo} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  logo: {
    height: 80,
    width:150,
    marginLeft: '6%',
    marginTop: '3%',
  },
  closeButton: {
    marginTop: '6%',
    padding: '3%',
    backgroundColor: '#444',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
