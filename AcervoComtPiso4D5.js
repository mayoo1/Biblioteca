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
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/persona6.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/persona6.jpg')} 
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
                source={require('./fotos/persona6.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            
        <Text style={{ fontWeight: 'bold', color: 'darkred', fontSize: 22, marginLeft: 20, marginTop: 10, width: '86.5%' }}>Piso 4. Colecciones Especiales Nacionales</Text>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginLeft: 20, marginTop: 10, width: '86.5%' }}>4.5 Fondo Biodiversidad Dr. Enrique Beltrán
        </Text>

        <ScrollView style={{ marginTop: 10 }}>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 10 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Presentación</Text>

          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
            Ese fondo debe su nombre al doctor Enrique Beltrán, uno de los primeros biólogos mexicanos predecesor del movimiento conservacionista en México y en el mundo. Sus trabajos han sido de gran importancia para el medio de las ciencias naturales, por lo que biólogos mexicanos y extranjeros han clasificado con su apellido a 16 especies. Además, fue fundador del Instituto Mexicano de Recursos Naturales Renovables (IMERNAR).Esta área se especializa en ciencias naturales, biología, biodiversidad y temas relacionados. El fondo se compone de 16 mil libros y 25 mil publicaciones periódicas en alrededor de 1 100 títulos; el archivo personal del doctor Beltrán, la correspondencia entre investigadores científicos; una importante colección de misceláneas y archivos del IMERNAR.
            {'\n'}</Text>
            <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0 }} />
          </View>

          <Image source={require('./fotos/Logo22.png')} style={{height: 60, width: 150, marginLeft: 20, marginTop: 20}} />
          <Image source={require('./fotos/Logo24.png')} style={{height: 80, width: 100, marginLeft: 20, marginTop: 10}} />
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
    height: '65%', 
    width: '65%',
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
    marginTop: -10
  },
});
