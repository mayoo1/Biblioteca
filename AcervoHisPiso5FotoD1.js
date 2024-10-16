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
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <Text style={{ fontWeight: 'bold', color: 'darkred', fontSize: 22, marginLeft: 20, marginTop: 10 }}>Piso 5. Acervo General, Fondos Particulares, Archivos Visuales y Sonoros: Cinemáteca y Fototeca</Text>
        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 17, marginLeft: 20, marginTop: 10 }}>Colección Alberto Gómez Barbosa.
        </Text>

        <ScrollView style={{ marginTop: 10 }}>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 10 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Presentación</Text>

          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
              Esta colección llego a la biblioteca publica del estado de Jalisco en marzo de 2014. Consta aproximadamente de 75,000 negativos en blanco y negro, a color, asi como de 1,143 fotografías (126 enmarcadas, 22 litografías, 32 paquetes de fotografía sin enmarcar). Ademas incluye la biblioteca personal del fotógrafo Alberto Gomez Barbosa
              {'\n'}
            </Text>
            <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 0, marginTop: 10 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: -20 }}>Historia</Text>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
              Alberto Gomez Barbosa nació en Yurecuaro, Michoacan, en 1963. Reside en Guadalajara desde 1940. En su trayectoria como fotógrafo, se registran mas de cincuenta exposiciones individuales, destacando las realizadas en la ciudad de Mexico, en nueva York, La habana, Kioto, San Jose (Costa Rica) y Miami, asi como la ilustración de mas de treinta libros y la autoría de algunos mas. Su mas reciente libro fotográfico "Luz y sombra" es una muestra mayor de su trabajo en blanco y negro.
            </Text>
            
            <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
            <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 0, marginTop: 10 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30, marginTop: -20 }}>Acervo</Text>

          
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
              Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser consultada en el piso 5 de la Biblioteca Histórica (adicionalmente,
              parte de los acervos audiovisuales pueden consultarse desde la Mediateca Emilio García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).
            </Text>
            <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0 }} />
          </View>
        

          <Image source={require('./fotos/Logo3.jpg')} style={{height: 80, width: 150, marginLeft: 20, marginTop: 20}} />
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
    marginTop: -10
  },
});
 