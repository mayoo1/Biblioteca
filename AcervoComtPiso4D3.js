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
            source={require('./fotos/biblioilv.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/biblioilv.png')} 
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
                source={require('./fotos/biblioilv.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <Text style={{ fontWeight: 'bold', color: 'darkred', fontSize: 22, marginLeft: 20, marginTop: 10, width: '86.5%' }}>Piso 4. Colecciones Internacionales</Text>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 19, marginLeft: 20, marginTop: 10 }}>4.4 Biblioteca Ignacio L. Vallarta
        </Text>

        <ScrollView style={{ marginTop: 10 }}>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          
          <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 10 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Historia</Text>
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
              Esta biblioteca se entraba anteriormente en el instituto de investigaciones jurídicas del centro universitario de ciencia sociales y humanidades de la Universidad de Guadalajara, la cual pasa a la biblioteca Publica del estado de Jalisco "Juan Jose Arreola", con la finalidad de tener un mayor alcance y difusión entre los estudiosos e investigadores del area de la jurisprudencia. 
            </Text>
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0 }} />
          </View>
          <Image source={require('./fotos/ico10.png')} style={{ height: 25, width: 25, marginLeft: 15, marginTop: 10 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 40, marginTop: -20 }}>Acervo</Text>
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
            La biblioteca cuenta con alrededor de 10,000 volúmenes y varias publicaciones periódicas, tanto nacionales como del extranjero, entre ellas están las publicaciones oficiales del estado de Quintana Roo, revista de la facultad de derecho de la universidad de la republica de Montevideo, Uruguay, etc.{'\n'}
            </Text>
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Image source={require('./fotos/Logo19.png')} style={{ height: 40, width: 100, marginLeft:20 }} />
            <Image source={require('./fotos/Logo.png')} style={{ height: 40, width: 230, marginRight:80 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Image source={require('./fotos/Logo21.png')} style={{ height: 90, width: 90, marginLeft:20 }} />
            <Image source={require('./fotos/Logo20.png')} style={{ height: 90, width: 220, marginRight:20 }} />
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
    backgroundColor: 'black',
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
    backgroundColor: 'black',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    marginTop: -10
  },
});
