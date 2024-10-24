import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';

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

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };


  render() {
    const { showImage } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/Antiguo11.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/Antiguo11.jpg')} 
                style={{ height: 450, width: 300, borderRadius: 10 }}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
              
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ height: '50%', width: '90%', backgroundColor: '#454545', borderRadius: 5, marginLeft: '5%', marginTop: '3%' }}>
              <Image 
                source={require('./fotos/Antiguo11.jpg')} 
                style={{ height: '70%', width: '60%', marginTop: '10%', borderRadius: 5, alignSelf: 'center' }}
              />
              <TouchableOpacity style={{ borderWidth: 0, borderColor: 'white', width: '30%', height: '7%', alignSelf: 'center', justifyContent: 'center', marginTop: 1 }} onPress={this.handleImagePress}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop:'20%', height:'100%', borderColor:'red', borderWidth:0}}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color:'white', fontSize:13, borderRadius: 5, backgroundColor: 'darkred', marginTop: '3%', marginHorizontal: '5%', textAlign:'center' }}>1.2.1 Ramo Civil</Text>

            <View style={{ flexDirection: 'row', width: '40%', alignItems: 'center', marginTop: '3%', marginLeft: '5%' }}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={{ height: '95%', width: '15%', marginRight: -30 }}
              />
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: '25%' }}>Presentación</Text>
            </View>

            <View style={{ height: 2, backgroundColor: 'gray', marginTop: '3%', marginHorizontal: '5%' }}></View>

            <ScrollView style={{ borderWidth: 0, width: '90%', marginLeft: '3%' }} contentContainerStyle={{ paddingHorizontal: '5%', paddingTop: '3%' }}>
              <Text style={{ color: 'black', fontSize: 15, textAlign: 'justify', lineHeight: 25}}>
              Incluyen más de siglo y medio de procesos, sentencias, cuadrantes, actas, entradas y salidas de presos, conocimientos ejecutorias, turnos, minutas, de contabilidad: libros mayores, diarios, de caja, etc.  
              </Text>
            </ScrollView>

            <View style={{ height: 2, backgroundColor: 'gray', marginTop: '2%', marginHorizontal: 20 }}></View>

            <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}>
            <Image source={require('./fotos/Logo3.jpg')} style={styles.logo} />
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
    width: 150,
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
