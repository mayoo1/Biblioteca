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
            source={require('./fotos/at.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/at.png')} 
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
                source={require('./fotos/at.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <ScrollView style={{ marginTop: 10 }}>
        <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 10 }} />
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Presentación</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
              El objetivo de esta área es satisfacer las necesidades de información del usuario ciego o con debilidad visual mediante equipo tiflotecnológico.{'\n'}
              Este espacio dispone de un importante acervo en braille y audiolibros, además de ofrecer al usuario tanto la capacitación como el acceso gratuito a diversos equipos y software
              diseñados para facilitar la accesibilidad de la información documental.
              </Text>
          </View>
              <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 10 }} />
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Acervo y Equipo</Text>
              <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          
           
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25,  marginTop: 10, marginLeft: 30 }}>
            • Libros en versión braille.{'\n'}
            • Audiolibros.{'\n'}
            • Periódicos y revistas en versión braille.{'\n'}
            • Escáner plano: Captura imágenes a tinta (libros, volantes, revistas, periódicos etc.) y las convierte en un archivo digital para manipular en equipo de cómputo.{'\n'}
            • Teclado para PC en braille.{'\n'}
            • Cámara Escáner con motor de voz zoom-twist: Digitaliza imágenes de texto y lo convierte a motor de voz.{'\n'}
            • Impresora braille: Realiza impresiones tamaño carta y oficio en lenguaje braille.{'\n'}
            </Text>
          </View>
          
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0, marginLeft:20 }} /> 
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Image source={require('./fotos/Logo12.png')} style={{ height: 80, width: 150, marginLeft:20 }} />
            <Image source={require('./fotos/Logo13.png')} style={{ height: 80, width: 150, marginRight:30 }} />
          </View>
          <Image source={require('./fotos/Logo11.png')} style={{height: 30, width: 190, marginLeft: 20, marginTop: 10}} />
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
    backgroundColor: '#004B86',
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
    backgroundColor: '#004B86',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#004B86',
    marginTop: -10
  },
});
