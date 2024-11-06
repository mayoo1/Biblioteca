import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, Dimensions } from 'react-native';
import styles from '../3Diseno';

const { width } = Dimensions.get('window');

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

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/Libreria4.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Libreria4.jpg')}
                style={[styles.fullImage, { height: width * 1.2, width: width * 0.8 }]}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={[styles.infoContainer, { height: width * 0.70, width: width * 0.95 }]}>
              <Image
                source={require('../fotos/Libreria4.jpg')}
                style={[styles.infoImage, { height: width * 0.6, width: width * 0.8 }]}
              />
            </View>

            <Text style={styles.titleText}>Catálogo Biblioteca</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator}/>
              <View style={[styles.descriptionContainer, { width: width * 0.85 }]}>
                
                <Text style={styles.title}>Catálogo Biblioteca</Text>
                <Text style={styles.subtitle}>Contiene los registros del acervo.</Text>
                <TouchableOpacity onPress={() => this.openURL('http://148.202.248.73/F/?func=find-b-0&local_base=BPJ01')}>
                  <Text style={styles.link}>Consultar el Catálogo General (Aleph)</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Colecciones Biblioteca Histórica (Colecciones)</Text>
                <Text style={styles.subtitle}>Contiene los registros de colecciones de manuscritos, libros y archivo.</Text>
                <TouchableOpacity onPress={() => this.openURL('https://bpej.udg.mx/acervo-historico/piso-5/archivo-visual-y-sonoro-avs')}>
                  <Text style={styles.link}>Consultar el catálogo Archivos Visuales y Sonoros (Cinemateca, Fototeca y Fonoteca)</Text>
                </TouchableOpacity>
                
                <Text style={styles.title}>Recursos electrónicos de acceso libre</Text>
                <Text style={styles.subtitle}>
                  Enlaces externos. La BPEJ no es responsable de sus contenidos, se enlistan como fuentes alternativas de información. Contiene acceso a diarios, revistas electrónicas especializadas y/o de divulgación, diccionarios, traductores, libros electrónicos etc.
                </Text>
                <TouchableOpacity onPress={() => this.openURL('https://bpej.udg.mx/servicios/recursos-en-internet')}>
                  <Text style={styles.link}>Consultar el listado de recursos open access</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.separator} />
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
