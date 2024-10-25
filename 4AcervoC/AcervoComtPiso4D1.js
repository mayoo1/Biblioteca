import React, { Component } from 'react'; 
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Linking } from 'react-native';

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

  handleLogoPress = (url) => {
    Linking.openURL(url);
  };

  render() {
    const { showImage } = this.state;
    const { width, height } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/fj.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/fj.png')} 
                style={[styles.fullImage, { height: height * 0.5, width: width * 0.8 }]}
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
                source={require('../fotos/fj.png')} 
                style={[styles.infoImage, { height: height * 0.2, width: width * 0.7 }]}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={[styles.titleText, { fontSize: width * 0.05 }]}>4.1 Fondo de Jalisco</Text>
            <Text style={[styles.subtitleText, { fontSize: width * 0.04 }]}>Colecciones Especiales Nacionales.</Text>

            <ScrollView style={{ marginTop: 10 }}>
              <View style={styles.divider} />
              <Image source={require('../fotos/ico3.png')} style={[styles.icon, { height: height * 0.03, width: width * 0.07 }]} />
              <Text style={[styles.sectionTitle, { fontSize: width * 0.04 }]}>Presentación</Text>

              <View style={{ width: '90%', marginLeft: '5%' }}>
                <Text style={[styles.descriptionText, { fontSize: width * 0.045 }]}>
                  Área especializada en la que se puede acceder a conocimientos acerca de la cultura, el desarrollo económico, los aspectos educativos y otras temáticas del estado de Jalisco (Sus municipios, autores, monumentos históricos, economía, urbanismo, estadísticas, etcetera). En el edificio del contemporáneo se cuenta con aproximadamente 13,893 mil volúmenes y varias revistas editadas en Jalisco de 1961 a la fecha.
                </Text>
              </View>
              <View style={styles.divider} />

              <TouchableOpacity onPress={() => this.handleLogoPress('https://coljal.mx/')}>
                <Image source={require('../fotos/Logo4.jpeg')} style={[styles.logoImage, { height: height * 0.08, width: width * 0.5 }]} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleLogoPress('https://www.jalisco.gob.mx/inicio')}>
                <Image source={require('../fotos/Logo9.png')} style={[styles.logoImage, { height: height * 0.03, width: width * 0.4, marginTop:30}]} />
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
    height: '30%',
    width: '90%',
    backgroundColor: '#353535',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  infoImage: {
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
    marginTop: -10,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'darkred',
    marginLeft: 20,
    marginTop: 10,
  },
  subtitleText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
  },
  icon: {
    marginLeft: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 50,
    marginTop: -20,
  },
  descriptionText: {
    color: 'black',
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logoImage: {
    marginLeft: 20,
    marginTop: 20,
  },
});
