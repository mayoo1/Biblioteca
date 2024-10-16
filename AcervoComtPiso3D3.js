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
            source={require('./fotos/cpi.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/cpi.png')} 
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
                source={require('./fotos/cpi.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <ScrollView style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15, marginLeft: 20, marginTop:5 }}>3.3 Colección de Pueblos Indígenas. Piso 3</Text>
        <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 15 }} />
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Presentación</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
              La colección de Pueblos Indígenas representa un fondo valioso, pues atesora textos de todas las áreas del conocimiento en lenguas indígenas de Jalisco, México y del mundo que pueden ser 
              consultados por el público en general.{'\n'}{'\n'}
              Esta colección cuenta con un acervo de más de 7,000 volúmenes en donde podemos encontrar música, libros de diferentes temáticas, documentales, diccionarios, juegos de mesa, entre otros, 
              siendo la mayoría bilingües. Las lenguas indígenas que pueden encontrarse son aproximadamente 36 entre las cuales están: el zapoteco, Otomí, Náhuatl, Mazateco, Ñañú, Rarámuri, entre otras lo que
              permite conocer y valorar la riqueza de las lenguas de los pueblos originarios.
              </Text>
        
            <Text style={{color: 'black', fontSize: 18, marginTop: 10 }}>Entre sus volúmenes se pueden encontrar:</Text>
              
           
    
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10, marginLeft: 20 }}>
            • Diccionarios.{'\n'}
            • Libros infantiles (de adivinanzas, trabalenguas, literatura), además de algunos juegos de mesa.{'\n'}
            • Libros de fotografía.{'\n'}
            • Recetarios.{'\n'}
            • Constituciones de los Estados Unidos Mexicanos y leyes de los derechos lingüísticos.{'\n'}
            • Reproducciones de códices.{'\n'}
            • Libros de textos en lenguas indígenas de primaria elaborados por la Dirección General de Educación Indígena de la Secretaría de Educación.{'\n'}</Text>

            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10}}>
            También cuenta con un área de lectura y un área de acceso a recursos multimedia (música, películas, documentales, grabaciones de cátedras, libros electrónicos y videos).{'\n'}
            Esta colección está ubicada en el piso 3 de la Biblioteca.{'\n'}{'\n'}

            Edición electrónica del libro Los pueblos indígenas de México. 100 preguntas, de Carlos Zolla y Emiliano Zolla Márquez. México: UNAM, 2005.{'\n'}
            Comisión Nacional para el Desarrollo de los pueblos indígenas.
            </Text>
          </View>
          
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0, marginLeft:20 }} />
          <Image source={require('./fotos/Logo14.png')} style={{height: 40, width: 300, marginLeft: 20, marginTop: 20}} />
          <Image source={require('./fotos/Logo15.png')} style={{height: 60, width: 180, marginLeft: 20, marginTop: 5}} />
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
    backgroundColor: '#1f4c50',
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
    backgroundColor: '#1f4c50',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#1f4c50',
    marginTop: -10
  },
});
