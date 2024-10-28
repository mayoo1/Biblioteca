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
        {showImage ? (
          <ImageBackground
            source={require('../fotos/personas.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/personas.jpg')}
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
                source={require('../fotos/personas.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.80}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>6.1. Tesoros Bibliográficos</Text>
            <Text style={styles.subtitleText}>6.1.11. Álbum Fotográfico Casasola</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Agustín Víctor Casasola (1874 - 1938) fué desde temprana edad entusiasta trabajador de los medios impresos en un periodo donde se gestó y consumó la revolución mexicana, después de trabajar para importantes diarios, revistas y ser reportero para medios extranjeros contribuyó a la creación de la Asociación Mexicana de Periodistas y creó la Agencia Mexicana de Información Fotográfica.
                  {'\n'}{'\n'}Respecto a la autoría de las fotografías que en un principio se atribuían a Agustín Casasola y familia, recientemente se discute y se da a conocer la suposición de que gran parte de las fotografías, sobre todo las que no fueron tomadas en la capital, fueron compradas a otros fotógrafos.
                  {'\n'}{'\n'}Si bien el archivo Casasola se refiere a aproximadamente 4000 imágenes entre negativos y positivos de distintos formatos y en distintos soportes que se encuentran resguardados por el INAH, la Biblioteca Pública del Estado de Jalisco cuenta con 1224 fotografías de este archivo, sobre su procedencia se puede mencionar que según los archivos de la bilioteca, esta Colección historico-grafica de acontecimientos politicos y militares 1910 - 1919 fue adquirida por 250 pesos el 30 de septiembre de 1920 (AH de la udg, libro 61a, 1920).
                  {'\n'}{'\n'}En el archivo de la biblioteca existe un documento en relación con lo anterior que, a pesar de no ser muy especifico, resulta interesante dar a conocer: el jefe del Departamento de Educación Secundaria y Profesional informa al director de la Biblioteca que:
                  {'\n'}{'\n'}...el portador del presente oficio, entregará a usted la colección historico-grafica a que usted se refiere en su oficio 679, que ha adquirido el Gobierno del Estado, para el acervo bibliográfico y artistico de esta biblioteca, estos documentos formarán parte del departamento de manuscritos y obras valiosas... (archivo administrativo BPEJ, libro de correspondencia, 1916-1920)
                  {'\n'}{'\n'}El oficio 679 a que se hace referencia no fue localizado en el archivo de la biblioteca, pero se puede suponer que en el mencionado documento el director de la biblioteca solicita al gobernador del estado la adquisición de la obra.
                  </Text>
              </View>
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}style={{ height: width * 0.30, width: width * 0.45 }}>
              <Image source={require('../fotos/Logo3.jpg')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.45}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
  }