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
            source={require('./fotos/biblioj.png')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/biblioj.png')} 
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
                source={require('./fotos/biblioj.png')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <ScrollView style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15, marginLeft: 20, marginTop:5 }}>5 Colecciones Internacionales. Piso 5</Text>
        <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 15 }} />
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Historia</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
            La biblioteca Josep María Muria i Romaní es un vínculo cultural entre dos regiones emblemáticas, el occidente de México con Jalisco como pivote y una de las regiones más prosperas y culturalmente desarrolladas de España, Cataluña.
Inicialmente conformada con los libros de la biblioteca personal del escritor, catedrático y exiliado catalán Don Josep María Muria i Romaní
(Barcelona 1907 - Guadalajara 1999) quien desarrollo en México y señaladamente en Guadalajara una amplia labor cultural, su colección se ha visto enriquecida posteriormente con donaciones de importantes editoriales e instituciones culturales catalanas.
              </Text>
        
            
          <Image source={require('./fotos/ico10.png')} style={{ height: 25, width: 25, marginTop: 5 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 25, marginTop: -20 }}>Acervo</Text>
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 10 }} />  
           
    
          <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
          Desde el día de su inauguración el 29 de agosto del año 2012, este acervo ha experimentado una rápida expansión, contando al día de hoy con un aproximado de 10 mil volúmenes, gran parte de ellos en catalán de temas tan diversos como lingüística, artes, deporte, comida, tradiciones, literatura universal y catalana; digno de realce es la amplia colección de libros de historia de Cataluña y España con énfasis en la guerra civil española y sus consecuencias, así como la estrecha relación cultural entre México y España a través de los numerosos refugiados que producto de esta conflagración arribaron a México, entre ellos el propietario original de esta biblioteca. De esta forma la biblioteca Josep María Muria i Romaní una de las más importantes del mundo en lengua catalana, se erige en un verdadero punto de referencia de la indudable vinculación histórico - cultural entre México y Cataluña a través del tiempo.La biblioteca Josep María Muria i Romaní además del acervo bibliográfico cuenta con una sección hemerográfica, que incluye publicaciones periódicas como el Butlletí del centro Català de Guadalajara o Xaloc entre otras, que fueron objeto incluso de persecución como productos culturales peligrosos por parte del régimen del
General Francisco Franco.</Text>
          </View>
          
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0, marginLeft:20 }} />
          <Image source={require('./fotos/Logo31.png')} style={{height: 50, width: 170, marginLeft: 20, marginTop: 20}} />
          <Image source={require('./fotos/Logo32.png')} style={{height: 80, width: 150, marginLeft: 20, marginTop: 10}} />
          <Image source={require('./fotos/Logo33.png')} style={{height: 40, width: 200, marginLeft: 20, marginTop: 10}} />
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

