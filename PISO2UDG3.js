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
            source={require('./fotos/seriadas.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/seriadas.png')} 
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
                source={require('./fotos/seriadas.png')} 
                style={styles.infoImage} 
              />
              
              <TouchableOpacity style={{width: '90%', marginTop: 25, marginLeft: -10 }} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Escuchar: "Lo que le pasó a joe y a su chica"</Text>
            </TouchableOpacity>
            </View>
            

        <Text style={{ fontWeight: 'bold', color: '#515151', fontSize: 20, marginLeft: 20, marginTop: 10, width: '90%' }}>Archivo Sonoro. Radio Univerdiad de Guadalajara. Piso 4</Text>
        <Text style={{ fontWeight: 'bold', color: '#515151', fontSize: 17, marginLeft: 20, marginTop: 10 }}>Joe y a su chica</Text>

        <ScrollView style={{ marginTop: 10 }}>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
        <Text style={{fontSize: 15, marginLeft: 20, lineHeight: 25,borderWidth: 0, width:'86%' }}>
          <Image source={require('./fotos/ico3.png')} style={{ height: 20, width: 20, marginTop: 10}} />
          <Text style={{fontWeight: 'bold', color: 'black', marginTop: -20}}>Titulo de la obra: </Text>
          <Text style={{color: 'black', marginTop: -20 }}>Lo que le pasó a Joe y a su chica</Text>
        </Text>

          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
            {'\n'}Género: Radio cuento
              {'\n'}Daptación a radio: David Guerrero Lemus
              {'\n'}Intérpretes: David Guerrero, Álvaro José Gómez, Mario Franco, Javier Vizcaíno.
              {'\n'}Productor: Radio Univerdiad de Guadalajara
              {'\n'}Año: 1996
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
    marginTop: -10,
  },
});

