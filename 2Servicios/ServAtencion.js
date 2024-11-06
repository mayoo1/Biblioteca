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
            source={require('../fotos/Atencion.jpeg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Atencion.jpeg')}
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
                source={require('../fotos/Atencion.jpeg')}
                style={[styles.infoImage, { height: width * 0.5, width: width * 0.8 }]}
              />
            </View>

            <Text style={[styles.titleText, { width: width * 0.9, fontSize: 15, textAlign: 'justify', color:'black'}]}>
              Es en el área de recepción donde se realiza el trámite para el acceso a la consulta de los fondos especiales, solicitudes de visita y de uso de espacios.
            </Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />

              <Image
                source={require('../fotos/ico3.png')}
                style={[styles.iconImage, { height: width * 0.07, width: width * 0.07 }]}
              />
              <Text style={[styles.sectionTitle, { width: width * 0.9 }]}>Solicitud de Visita Guiada por la Biblioteca</Text>

              <View style={[styles.descriptionContainer, { width: width * 0.85 }]}>
                <Text style={styles.descriptionText}>
                  <Text style={styles.requirementsText}>
                    <Text style={styles.titleText}>Requisitos</Text>
                      {'\n'}Enviar oficio dirigido al Lic. José Trinidad Padilla López, Director de la Biblioteca Pública del Estado de Jalisco “Juan José Arreola” con los siguientes requisitos:
                      {'\n\n'}
                      • Hoja membretada de la institución solicitante y firmada por el responsable.
                      {'\n'}
                      • Grado y edades de asistentes.
                      {'\n'}
                      • Fecha y horario (a reserva de la disponibilidad de la agenda).
                      {'\n'}
                      • Número de personas que asistirán.
                      {'\n'}
                      • Nombre, correo electrónico y teléfono del responsable de grupo.
                      {'\n'}
                      • Enviar solicitud con 15 días de anticipación a la fecha de visita.
                      {'\n\n'}
                    <Text style={styles.titleText}>Tipos de visita que se ofrece:</Text>
                    {'\n\n'}
                    <Text style={styles.titleText}>Para niños de tres a seis años:</Text>
                    {'\n'}
                    Recorrido 1: Con taller, tiempo estimado de 2.5 hrs.
                    {'\n'}
                    Recorrido 2: Sin taller, tiempo estimado de 1.5 hrs.
                    {'\n\n'}
                    <Text style={styles.titleText}>Visitas niños de 7 a 12 años:</Text>
                    {'\n'}
                    Recorrido 1: Con taller, tiempo estimado de 2.5 hrs.
                    {'\n'}
                    Recorrido 2: Con charla, tiempo estimado de 2.5 hrs.
                    {'\n'}
                    Recorrido 3: Sin taller, ni charla, tiempo estimado de 1.5 hrs.
                    {'\n'}
                    Recorrido 4: Búsqueda en catálogo, tiempo estimado 2 hrs.
                    {'\n\n'}
                    Entregar en el módulo de Atención a Usuarios o enviar a la responsable Martha Blanco, al 
                    {'\n'}
                    <Text style={styles.mailText} onPress={() => Linking.openURL('mailto:patricia.blanco@udg.mx')}>
                      Correo: patricia.blanco@udg.mx
                    </Text>
                    {'\n'}
                    <Text style={styles.phoneText} onPress={() => Linking.openURL('tel:3338364530')}>
                      Teléfono: 33 3836 4530 ext. 22143
                    </Text>
                    {'\n\n'}
                    <Text style={styles.titleText}>Nivel Media Superior en adelante:</Text>
                    {'\n'}
                    Entregar en el módulo de Atención a Usuarios o enviar a la responsable Stefanie Muro, al 
                    {'\n'}
                    <Text style={styles.mailText} onPress={() => Linking.openURL('mailto:stefanie.muro@udg.mx')}>
                      Correo: stefanie.muro@udg.mx
                    </Text>
                    {'\n'}
                    <Text style={styles.phoneText} onPress={() => Linking.openURL('tel:3338364530')}>
                      Teléfono: 33 3836 4530 ext. 22258
                    </Text>
                  </Text>
                </Text>
              </View>

              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://bpej.udg.mx/')} style={{ height: width * 0.2, width: width * 0.85 }}>
                <Image
                  source={require('../fotos/Logo.png')}
                  style={[styles.logoImage, { height: width * 0.15, width: width * 0.85, marginLeft: '6%' }]}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
