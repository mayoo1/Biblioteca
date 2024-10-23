import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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
              <Text style={styles.collectionText}>5 Colecciones Internacionales. Piso 5</Text>
              <Image source={require('./fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.historyText}>Historia</Text>
              <View style={styles.separator} />

              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  La biblioteca Josep María Muria i Romaní es un vínculo cultural entre dos regiones emblemáticas, el occidente de México con Jalisco como pivote y una de las regiones más prósperas y culturalmente desarrolladas de España, Cataluña.
                  {'\n\n'}
                  Inicialmente conformada con los libros de la biblioteca personal del escritor, catedrático y exiliado catalán Don Josep María Muria i Romaní (Barcelona 1907 - Guadalajara 1999), quien desarrolló en México y, señaladamente en Guadalajara, una amplia labor cultural. Su colección se ha visto enriquecida posteriormente con donaciones de importantes editoriales e instituciones culturales catalanas.
                </Text>
              </View>

              <Image source={require('./fotos/ico10.png')} style={styles.iconImage} />
              <Text style={styles.historyText}>Acervo</Text>
              <View style={styles.separator} />

              <View style={styles.textContainer}>
              <Text style={styles.descriptionText}>
                Desde el día de su inauguración el 29 de agosto del año 2012, este acervo ha experimentado una rápida expansión, contando al día de hoy con un aproximado de 10 mil volúmenes, gran parte de ellos en catalán de temas tan diversos como lingüística, artes, deporte, comida, tradiciones, literatura universal y catalana. Digno de realce es la amplia colección de libros de historia de Cataluña y España con énfasis en la guerra civil española y sus consecuencias, así como la estrecha relación cultural entre México y España a través de los numerosos refugiados que, producto de esta conflagración, arribaron a México, entre ellos el propietario original de esta biblioteca.
                {'\n\n'}
                  De esta forma, la biblioteca Josep María Muria i Romaní, una de las más importantes del mundo en lengua catalana, se erige en un verdadero punto de referencia de la indudable vinculación histórico-cultural entre México y Cataluña a través del tiempo. La biblioteca Josep María Muria i Romaní, además del acervo bibliográfico, cuenta con una sección hemerográfica, que incluye publicaciones periódicas como el Butlletí del Centre Català de Guadalajara o Xaloc, entre otras, que fueron objeto incluso de persecución como productos culturales peligrosos por parte del régimen del General Francisco Franco.
                </Text>
                </View>
                
              <View style={styles.separator} />
              <Image source={require('./fotos/Logo31.png')} style={{height: 70, width: '65%', marginLeft: 20, marginTop: 10,}} />
              <Image source={require('./fotos/Logo32.png')} style={{height: 110, width: '65%', marginLeft: 20, marginTop: 10,}} />
              <Image source={require('./fotos/Logo33.png')} style={{height: 60, width: '80%', marginLeft: 20, marginTop: 10,}} />
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
  infoContainer: {
    height: height * 0.35,
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
  },
  collectionText: {
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
  historyText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 50,
    marginTop: -20,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '86.5%',
    marginLeft: '5%',
    marginTop: 10,
  },
  textContainer: {
    width: '86.5%',
    marginLeft: '5%',
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    marginTop: 10,
  },
  logoImage: {
    height: 50,
    width: '80%',
    marginLeft: 20,
    marginTop: 10,
  },
});


