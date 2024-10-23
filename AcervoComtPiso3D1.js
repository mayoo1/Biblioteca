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

  handleLogoPress = () => {
    Linking.openURL('https://hndm.iib.unam.mx/index.php/es/');
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/hc.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/hc.jpg')} 
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
                source={require('./fotos/hc.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.scrollView}>
              <Image source={require('./fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.headerText}>Presentación</Text>
              <View style={styles.separator} />
              
              <View style={styles.textContainer}>
                <Text style={styles.bodyText}>
                  La hemeroteca reúne colecciones de periódicos locales y nacionales, así como gran variedad de títulos de revistas, publicaciones oficiales, además de las diversas publicaciones que 
                  pueden ser consultadas por el público en general.{'\n'}{'\n'}
                  3.1.Publicaciones periódicas nacionales.{'\n'}
                  3.2.Publicaciones internacionales.{'\n'}
                  3.3.Periódicos oficiales.{'\n'}{'\n'}

                  <Text style={styles.boldText}>Periódicos locales:</Text>
                </Text>

                <Text style={styles.bodyText}>
                  • Informador{'\n'}
                  • Occidental{'\n'}
                  • Mural{'\n'}
                  • Ocho columnas{'\n'}
                  • Milenio{'\n'}
                  • Sol de Guadalajara{'\n'}
                </Text>

                <Text style={styles.boldText}>Periódicos nacionales:</Text>
                <Text style={styles.bodyText}>
                  • Excelsior{'\n'}
                  • Financiero{'\n'}
                  • Jornada{'\n'}
                  • Reforma{'\n'}
                  • Universal{'\n'}
                </Text>

                <Text style={styles.boldText}>Periódicos extranjeros:</Text>
                <Text style={styles.bodyText}>
                  • El País (España){'\n'}
                  • Le monde (Francia){'\n'}
                  • The New (E.U.){'\n'}
                </Text>
              </View>
              
              <View style={styles.separator} />
              
              <TouchableOpacity onPress={this.handleLogoPress}>
                <Image source={require('./fotos/Logo8.png')} style={styles.logoImage} />
              </TouchableOpacity>

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
    height: height * 0.6,
    width: width * 0.8,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: height * 0.05,
    backgroundColor: 'white',
    padding: height * 0.02,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    height: height * 0.35,
    width: '95%',
    backgroundColor: 'darkred',
    margin: '2.5%',
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
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: height * 0.02,
    backgroundColor: 'darkred',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  scrollView: {
    marginTop: 10,
    paddingHorizontal: '5%',
  },
  iconImage: {
    height: height * 0.03,
    width: width * 0.075,
    marginLeft: '6%',
    marginTop: '3%',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: '15%',
    marginTop: -20,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '88%',
    marginLeft: '5%',
    marginTop: '1%',
  },
  textContainer: {
    width: '86.5%',
    marginLeft: '5%',
  },
  bodyText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: '3%',
  },
  boldText: {
    fontWeight: 'bold',
  },
  logoImage: {
    height: 80,
    width: 150,
    marginLeft: '6%',
    marginTop: '3%',
  },
});
