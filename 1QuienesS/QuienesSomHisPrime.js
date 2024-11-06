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
          source={require('../fotos/Historia2.jpg')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/Historia2.jpg')}
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
              source={require('../fotos/Historia2.jpg')}
              style={[styles.infoImage, {height: width * 0.5, width: width * 0.8}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Historia</Text>
          <Text style={styles.subtitleText}>Primera Sede</Text>

          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
              La historia de las sedes de la Biblioteca Pública del Estado de Jalisco refleja su evolución a lo largo de los años, con cambios de ubicación que respondieron a necesidades de espacio y adecuación. A continuación, se describen las principales sedes:{'\n'}{'\n'}
              1. Antiguo Seminario de Guadalajara (hasta 1891): La primera sede de la Biblioteca estuvo en la planta alta del antiguo Seminario de Guadalajara, que posteriormente fue el Liceo de Varones y actualmente es el Museo Regional de Guadalajara. La biblioteca ocupa este espacio hasta el 30 de marzo de 1891, cuando cerró sus puertas para trasladarse a un espacio más adecuado en el mismo edificio.{'\n'}{'\n'}
              2. Calle Hidalgo y Pino Suárez (1891-1894): Después de su cierre temporal, la biblioteca reabrió el 1 de enero de 1894 en una nueva ubicación, esta vez en la parte baja del edificio entre las calles Hidalgo y Pino Suárez hasta 1975.{'\n'}{'\n'}
              3. Avenida 16 de septiembre núm. 849 (1975 en adelante): La tercera sede de la Biblioteca Pública fue inaugurada en febrero de 1959 en la avenida 16 de septiembre núm. 849. Sin embargo, aunque la inauguración formal tuvo lugar en 1959, no fue hasta inicios del año 1975 que la biblioteca inició operaciones en estas nuevas instalaciones.{'\n'}{'\n'}
              José Cornejo Franco, director de la biblioteca en ese periodo, desempeñó un papel crucial al insistir en acondicionar y remodelar adecuadamente las nuevas instalaciones para garantizar la seguridad y conservación de los acervos. Este enfoque en la preservación y seguridad de los materiales refleja el compromiso de la biblioteca con el cuidado y mantenimiento de su valioso patrimonio cultural.{'\n'}{'\n'}
              A través de estas diferentes sedes, la Biblioteca Pública del Estado de Jalisco ha buscado adaptarse a las necesidades cambiantes de espacio y conservación, asegurando que sus instalaciones sean adecuadas para ofrecer servicios de calidad a la comunidad a lo largo de los años.
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
