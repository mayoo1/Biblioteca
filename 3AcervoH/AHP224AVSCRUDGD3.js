import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Linking } from 'react-native';
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
          <View style={{ flex: 1 }}>
            <View style={[styles.infoContainer, {height: width * 0.1, width: width * 0.95}]}>
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.1, width: width * 0.9, marginTop:1}]} onPress={() => Linking.openURL('https://bpej.udg.mx/sites/default/files/2021-09/lo-que-le-paso-a-joe-y-a-su-chica-editada.mp3')}>
                <Text style={styles.viewButtonText}>Escuchar: "Lo que le pasó a joe y a su chica"</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>2.4. Archivo Visuales y Sonoros: Fonoteca</Text>
            <Text style={styles.subtitleText}>Titulo de la obra: Lo que les pasó a Joe y a su chica</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.8}]}>Lo que le pasó a Joe y a su chica</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Género: Radio cuento
                {'\n'}Datación a radio: David Guerrero Lemus
                {'\n'}Intérpretes: David Guerrero, Álvaro José Gómez, Mario Franco, Javier Vizcaíno.
                {'\n'}Productor: Radio Universidad de Guadalajara
                {'\n'}Año: 1996
                </Text>
              </View>
            </ScrollView>
          </View>
      </View>
    );
  }
}