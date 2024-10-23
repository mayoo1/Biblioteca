import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Linking } from 'react-native';

const { width, height } = Dimensions.get('window');

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
          <View style={styles.mainContent}>
            <View style={styles.infoContainer}>
              <Image 
                source={require('./fotos/at.png')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
              <Image source={require('./fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Presentación</Text>
              <View style={styles.divider} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  El objetivo de esta área es satisfacer las necesidades de información del usuario ciego o con debilidad visual mediante equipo tiflotecnológico.{'\n'}
                  Este espacio dispone de un importante acervo en braille y audiolibros, además de ofrecer al usuario tanto la capacitación como el acceso gratuito a diversos equipos y software diseñados para facilitar la accesibilidad de la información documental.
                </Text>
              </View>

              <Image source={require('./fotos/ico3.png')} style={styles.icon} />
              <Text style={styles.sectionTitle}>Acervo y Equipo</Text>
              <View style={styles.divider} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  • Libros en versión braille.{'\n'}
                  • Audiolibros.{'\n'}
                  • Periódicos y revistas en versión braille.{'\n'}
                  • Escáner plano: Captura imágenes a tinta y las convierte en un archivo digital.{'\n'}
                  • Teclado para PC en braille.{'\n'}
                  • Cámara Escáner con motor de voz zoom-twist.{'\n'}
                  • Impresora braille: Realiza impresiones en lenguaje braille.{'\n'}
                </Text>
                
              </View>
              <View style={styles.divider} />
              <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://worldblindunion.org/about/')}>
                  <Image source={require('./fotos/Logo12.png')} style={styles.logo} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => Linking.openURL('https://www.euroblind.org/')}>
                  <Image source={require('./fotos/Logo13.png')} style={styles.logoSmall} />
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity style={{borderWidth:0, borderColor:'black', width:190, height:30, marginTop: 30,}} onPress={() => Linking.openURL('https://ww1.audiobooksforfree.com/?usid=16&utid=34976684130')}>
                <Image source={require('./fotos/Logo11.png')} style={styles.logoFooter} />
              </TouchableOpacity>
              
              <Text style={styles.spacerText}>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
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
    height: height * 0.5,
    width: width * 0.8,
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
  mainContent: {
    flex: 1,
    padding: 10,
  },
  infoContainer: {
    height: height * 0.35,
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
    width: '30%',
    height: '7%',
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
  },
  scrollView: {
    marginTop: '3%',
  },
  icon: {
    height: height * 0.03,
    width: width * 0.075,
    marginLeft: '6%',
    marginTop: '3%',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: '15%',
    marginTop: '-7%',
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '88%',
    marginLeft: '5%',
    marginTop: '5%',
  },
  textContainer: {
    width: '86.5%',
    marginLeft: '5%',
  },
  text: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: '3%',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  logo: {
    height:100,
    width: 150,
    marginLeft: '10%',
  },
  logoSmall: {
    height: 100,
    width: 150,
    marginRight: 30,
  },
  logoFooter: {
    height: 30,
    width: 190,
    marginLeft: 20,
  },
  spacerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: '15%',
    marginTop: '-7%',
  },
});
