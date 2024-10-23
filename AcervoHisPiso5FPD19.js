import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  ImageBackground, 
  StyleSheet 
} from 'react-native';

export default class QuienesSom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false, // Estado para controlar la visibilidad de la imagen completa
    };
  }

  // Maneja el evento al presionar la imagen para mostrarla
  handleImagePress = () => {
    this.setState({ showImage: true });
  };

  // Maneja el evento al cerrar la imagen
  handleCloseImage = () => {
    this.setState({ showImage: false });
  };

  render() {
    const { showImage } = this.state; // Extraer el estado de la imagen

    return (
      <View style={styles.container}>
        {showImage ? (
          // Mostrar la imagen a pantalla completa con un fondo desenfocado
          <ImageBackground
            source={require('./fotos/persona23.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/persona23.jpg')} 
                style={styles.fullImage}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          // Contenido principal antes de abrir la imagen
          <View style={{ flex: 1 }}>
            <View style={styles.infoContainer}>
              <Image 
                source={require('./fotos/persona23.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15, marginLeft: 20, marginTop: 10 }}>
              Piso 5. Fondos Particulares
            </Text>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginLeft: 20, marginTop: 10 }}>
              5.4.19 Colección Ignacio Retes
            </Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
              <Image 
                source={require('./fotos/ico3.png')} 
                style={{ height: 25, width: 25, marginLeft: 20, marginTop: 10 }} 
              />
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>
                Presentación
              </Text>

              <View style={{ width: '86.5%', marginLeft: '5%' }}>
                <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
                  Actor de cine, director, dramaturgo, guionista, profesor y director de la ANDA de carácter siempre amable, atento, artista entregado a su trabajo y su pasión que era el teatro.
                </Text>
                <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 0, marginTop: 20 }} />
              </View>

              <Image 
                source={require('./fotos/Logo.png')} 
                style={{ height: 60, width: 300, marginLeft: 20, marginTop: 20, borderWidth: 0, borderColor: 'gray' }} 
              />
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

// Estilos para el componente
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
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  infoImage: {
    height: '65%', 
    width: '55%',
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
    backgroundColor: 'black',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    marginTop: -10,
  },
});
