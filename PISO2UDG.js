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
            source={require('./fotos/persona1.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/persona1.jpg')} 
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
                source={require('./fotos/persona1.jpg')} 
                style={styles.infoImage} 
              />
              
              <TouchableOpacity style={{width: '90%', marginTop: 25, marginLeft: -10 }}>
              <Text style={styles.viewButtonText}>Escuchar: "Yo no lo se de cierto"</Text>
            </TouchableOpacity>
            </View>
            

        <Text style={{ fontWeight: 'bold', color: '#515151', fontSize: 20, marginLeft: 20, marginTop: 10, width: '90%' }}>Archivo Sonoro. Radio Universidad de Guadalajara. Piso 4</Text>
        <Text style={{ fontWeight: 'bold', color: '#515151', fontSize: 17, marginLeft: 20, marginTop: 10 }}>Jaime Sabines</Text>

        <ScrollView style={{ marginTop: 10 }}>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
        <Text style={{fontSize: 15, marginLeft: 20, lineHeight: 25,borderWidth: 0, width:'86%' }}>
          <Image source={require('./fotos/ico3.png')} style={{ height: 20, width: 20, marginTop: 10}} />
          <Text style={{fontWeight: 'bold', color: 'black', marginTop: -20}}>Titulo de la obra: </Text>
          <Text style={{color: 'black', marginTop: -20 }}>Antología poética de Jaime Sabines </Text>
        </Text>

          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
            {'\n'}Serie: Voz Viva de México.
              {'\n'}Editorial: Dirección de Literatura UNAM
              {'\n'}Lectura a cargo de: Jaime Sabines
              {'\n'}Estudio de grabación: Estudio 19
              {'\n'}Dirección: Mauricio Molina / Lizbeth Suárez / Margarita Heredia.
              {'\n'}Operación y postproducción: Rodolfo Sánchez Alvarado / Mauricio Molina / David Bojorges.
              {'\n'}Año de grabación: 1964
            </Text>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
            {'\n'}De la serie Voz Viva de México compartimos el disco de vinilo con poemas de Jaime Sabines leídos por él mismo. La cadencia de su lectura 
              enaltecen estos maravillosos versos que hablan sobre el amor, la soledad y la muerte, y que gracias a su lenguaje sencillo y directo obtuvieron 
              la aceptación no sólo de la academia sino de gran parte de los mexicanos.{'\n'}
            </Text>
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
    width: '45%',
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
