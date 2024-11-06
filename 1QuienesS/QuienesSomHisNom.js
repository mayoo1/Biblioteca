import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, StyleSheet, Dimensions } from 'react-native';
import styles from '../3Diseno';

const { width } = Dimensions.get('window');

export default class AcervoHisPiso1A4 extends Component {
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
          source={require('../fotos/Juan.jpg')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/Juan.jpg')}
              style={[styles.fullImage, {height: width * 0.6, width: width * 0.95}]}
            />
            <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={[styles.infoContainer, {height: width * 0.70, width: width * 0.95}]}>
            <Image
              source={require('../fotos/Juan.jpg')}
              style={[styles.infoImage, {height: width * 0.5, width: width * 0.8}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Historia</Text>
          <Text style={styles.subtitleText}>Nombramiento Juan Jose Arreola</Text>

          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
              La evolución de la Biblioteca Pública del Estado de Jalisco continuó en el nuevo milenio con cambios significativos en su nomenclatura y ubicación:{'\n'}{'\n'}
              1. Nombramiento "Juan José Arreola" (2001): En 2001, el Consejo General Universitario aprobó cambiar el nombre de la biblioteca pública a "Juan José Arreola" en memoria de este destacado escritor mexicano que fue director de la biblioteca  entre 1991-2001, reconociendo la contribución de Arreola a la institución durante su gestión.{'\n'}{'\n'}
              2. Traslado por problemas estructurales (2004): En 2004, debido a problemas estructurales del edificio original, los acervos bibliográficos y la hemeroteca contemporánea se trasladaron a la avenida Alcalde núm. 130, ubicada a un costado de Palacio Municipal permitiendo preservar los materiales en un entorno más seguro y adecuado.{'\n'}{'\n'}
              3. Fondo Antiguo y nueva sede (2011): En esta etapa de la biblioteca, iniciada el 3 de mayo de 2011, tanto el fondo histórico como el contemporáneo fueron trasladados a un nuevo edificio del Centro Cultural de la Universidad de Guadalajara, situado en Periférico Norte Manuel Gómez Morín no. 1695. Este cambio de sede proporcionó instalaciones más modernas y adecuadas para la preservación y acceso a los acervos.{'\n'}{'\n'}
              Estos cambios reflejan el compromiso continuo de la Biblioteca Pública "Juan José Arreola" con la adaptación y mejora constante para cumplir con los estándares de preservación y proporcionar servicios de calidad a la comunidad. El traslado a una sede más moderna en el Centro Cultural de la Universidad de Guadalajara marcó un hito en la evolución de la biblioteca, asegurando un ambiente propicio para la conservación y difusión del patrimonio documental.{'\n'}{'\n'}
              </Text>
            </View>            
            <View style={styles.separator} />
          </ScrollView>
        </View>
      )}
    </View>
  );
}
}
