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
    Linking.openURL(url).catch((err) => console.error("Error opening URL:", err));
  };

  render() {
    const { showImage } = this.state;
    const { width, height } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/cpi.png')} 
            style={[styles.imageBackground, { width, height }]}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('../fotos/cpi.png')} 
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
                source={require('../fotos/cpi.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={{ marginTop: 10 }}>
              <Text style={styles.sectionTitle}>3.3 Colección de Pueblos Indígenas. Piso 3</Text>
              <Image source={require('../fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.presentationTitle}>Presentación</Text>
              <View style={styles.divider} />
              
              <View style={styles.textContent}>
                <Text style={styles.paragraph}>
                  La colección de Pueblos Indígenas representa un fondo valioso, pues atesora textos de todas las áreas del conocimiento en lenguas indígenas de Jalisco, México y del mundo que pueden ser 
                  consultados por el público en general.{'\n'}{'\n'}
                  Esta colección cuenta con un acervo de más de 7,000 volúmenes en donde podemos encontrar música, libros de diferentes temáticas, documentales, diccionarios, juegos de mesa, entre otros, 
                  siendo la mayoría bilingües...
                </Text>
                <Text style={styles.subheading}>Entre sus volúmenes se pueden encontrar:</Text>
                <Text style={styles.list}>
                  • Diccionarios.{'\n'}
                  • Libros infantiles...{'\n'}
                </Text>
              </View>
              
              <View style={styles.divider} />
              
              <TouchableOpacity onPress={() => this.handleLogoPress('https://www.nacionmulticultural.unam.mx/')}>
                <Image source={require('../fotos/Logo14.png')} style={styles.logoImage} />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => this.handleLogoPress('https://www.gob.mx/inea/documentos/comision-nacional-para-el-desarrollo-de-los-pueblos-indigenas')}>
                <Image source={require('../fotos/Logo15.png')} style={styles.logoSmallImage} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    alignItems: 'center',
  },
  fullImage: {
    marginTop:-300,
    height: 300,
    width: 350,
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
    backgroundColor: '#1f4c50',
    margin: '5%',
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
    height: '10%',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#1f4c50',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
  },
  iconImage: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 15,
  },
  presentationTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 50,
    marginTop: -20,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
  },
  textContent: {
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
  },
  paragraph: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
  },
  subheading: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
  },
  list: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    marginLeft: 20,
  },
  logoImage: {
    height: 40,
    width: 300,
    marginLeft: 20,
    marginTop: 20,
  },
  logoSmallImage: {
    height: 60,
    width: 180,
    marginLeft: 20,
    marginTop: 5,
  },
});
