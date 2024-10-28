import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, StyleSheet, Dimensions } from 'react-native';
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

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/cpi.png')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/cpi.png')}
                style={[styles.fullImage, {height: width * 1.2, width: width * 0.8}]}
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
                source={require('../fotos/cpi.png')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Archivo Sonoro</Text>
            <Text style={styles.subtitleText}>Francisco Navarro</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Reúne un gigantesco acervo de discos de vinilo y CD con música de diferentes géneros (sones, danzones, huapangos, corridos, rancheras, cumbias,
                salsa, trova, tangos, bandas, norteña, blues, rock, jazz y clásica) con grabaciones de principios y mediados del siglo XX. Ademas, integra esta
                colección una biblioteca y un archivo documental sobre música. Esta colección, que forma parte de los Archivos Visuales y Sonoros, puede ser 
                consultada en el piso 4 de la Biblioteca Histórica (adicionalmente, parte de los acervos sonoros pueden consultarse desde la Mediateca Emilio
                García Riera, ubicada en el piso 4 de la Biblioteca Contemporánea).
                </Text>
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Música Mexicana</Text>
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                {'\t'}{'\t'}• Boleros
                  {'\n'}{'\t'}{'\t'}• Danzones 
                  {'\n'}{'\t'}{'\t'}• Huapangos 
                  {'\n'}{'\t'}{'\t'}• Corridos 
                  {'\n'}{'\t'}{'\t'}• Rancheras 
                  {'\n'}{'\t'}{'\t'}• Cumbias 
                  {'\n'}{'\t'}{'\t'}• Salsa 
                  {'\n'}{'\t'}{'\t'}• Trova 
                  {'\n'}{'\t'}{'\t'}• Bandas y Norteña {'\n'}
                </Text>
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Música Internacional</Text>
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                {'\t'}{'\t'}• Tangos 
                  {'\n'}{'\t'}{'\t'}• Blues  
                  {'\n'}{'\t'}{'\t'}• Rock and roll 
                  {'\n'}{'\t'}{'\t'}• Jazz  
                  {'\n'}{'\t'}{'\t'}• Clásica{'\n'}
                </Text>
              </View>
              
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}