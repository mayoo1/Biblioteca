import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Linking } from 'react-native';

export default class AcervoHisPiso1A3 extends Component {
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

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  render() {
    const { showImage } = this.state;
    const { width, height } = Dimensions.get('window'); // Obteniendo el tamaño de la pantalla
    const imageHeight = height * 0.6; // 60% de la altura de la pantalla
    const imageWidth = width * 0.8; // 80% del ancho de la pantalla

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/Antiguo8.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/Antiguo8.jpg')} 
                style={{ height: imageHeight, width: imageWidth, borderRadius: 10 }}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={[styles.imageContainer, { width: width * 0.9, marginLeft: width * 0.05, marginTop: height * 0.03 }]}>
              <Image 
                source={require('./fotos/Antiguo8.jpg')} 
                style={{ height: '70%', width: '60%', marginTop: '10%', borderRadius: 5, alignSelf: 'center' }}
              />
              <TouchableOpacity style={styles.imageButton} onPress={this.handleImagePress}>
                <Text style={styles.imageButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.sectionTitle, { marginTop: height * 0.03, marginHorizontal: width * 0.05 }]}>
              Piso 1.3 Dirección General de Instrucción Pública del Estado de Jalisco
            </Text>

            <View style={[styles.rowContainer, { marginTop: height * 0.03, marginLeft: width * 0.05 }]}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={styles.icon}
              />
              <Text style={styles.headerText}>Presentación</Text>
            </View>

            <View style={[styles.divider, { marginTop: height * 0.03, marginHorizontal: width * 0.05 }]}></View>

            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
              <Text style={styles.descriptionText}>
                Este acervo resguarda los registros de clases, profesores y alumnos de diversas instituciones de educación en el estado de Jalisco durante el siglo XIX y principios del XX (1925). (4,095 registros)
              </Text>
            </ScrollView>

            <View style={[styles.divider, { marginTop: height * 0.02, marginHorizontal: 20 }]}></View>
            <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}>
            <Image source={require('./fotos/Logo3.jpg')} style={styles.logo} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  imageContainer: {
    height: '50%',
    backgroundColor: '#454545',
    borderRadius: 5,
  },
  imageButton: {
    borderWidth: 0,
    borderColor: 'white',
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  imageButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    height: '100%',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 13,
    borderRadius: 5,
    backgroundColor: 'darkred',
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: -30,
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 40,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
  },
  scrollContainer: {
    borderWidth: 0,
    width: '90%',
    marginLeft: 15,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  descriptionText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
  },
  logo: {
    height: 80,
    width: 150,
    marginLeft: 20,
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
