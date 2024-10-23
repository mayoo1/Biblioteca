import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';

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
            source={require('./fotos/bibliobf.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/bibliobf.png')}
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
                source={require('./fotos/bibliobf.png')}
                style={styles.infoImage}
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.scrollView}>
              <Text style={styles.headerText}>5 Colecciones Internacionales. Piso 5</Text>
              <Text style={styles.titleText}>5.2 Biblioteca Benjamin Franklin</Text>
              <Image source={require('./fotos/ico3.png')} style={styles.iconImage} />
              <Text style={styles.presentationText}>Presentación</Text>
              <View style={styles.separator} />
              
              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>
                  La Biblioteca Benjamín Franklin abre sus puertas el 25 de agosto de 1949 como un proyecto binacional, bicultural y bilingüe, en el edificio de la Rectoría de la Universidad de Guadalajara, bajo el auspicio del Servicio Cultural e Información de los Estados Unidos y donada por el Consulado Norteamericano de la ciudad de Guadalajara, para promover la amistad entre ambas naciones motivadas a través de la lectura y con un intercambio cultural constante. La Biblioteca Benjamín Franklin a lo largo de su historia ha conocido diferentes sedes entre ellas una ubicada en la calle Tomás V. Gómez, además de la biblioteca central del Centro Universitario de Ciencias Económicas Administrativas. A partir del año 2012 este acervo pasa definitivamente a formar parte de material bibliográfico que ofrece la Biblioteca Pública del Estado de Jalisco "Juan José Arreola".{'\n'}
                </Text>
              </View>
              
              <View style={styles.separator} />
              <Image source={require('./fotos/Logo30.png')} style={styles.logoImage} />
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
    height: 250,
    width: 380,
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
  },
  scrollView: {
    marginTop: 10,
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
  },
  iconImage: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 15,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 50,
    marginTop: -20,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
  },
  textContainer: {
    width: '90%',
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
    height: 80,
    width: 150,
    marginLeft: 20,
    marginTop: 20,
  },
});
