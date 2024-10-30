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
            source={require('../fotos/Shangai.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Shangai.jpg')}
                style={[styles.fullImage, {height: width * 1.2, width: width * 0.8}]}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={[styles.infoContainer, {height: width * 0.70, width: width * 0.95, backgroundColor: '#2980b9'}]}>
              <Image
                source={require('../fotos/Shangai.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.55}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.8}]} onPress={() => Linking.openURL('http://windowofshanghai.library.sh.cn/faq/20')}>
                <Text style={styles.viewButtonText}>Visita el website de Shanghai E-books</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.titleText, {color: '#2980b9'}]}>Piso 5 Colecciones Internacional</Text>
            <Text style={styles.subtitleText}>5.4 Ventana De Shangai</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Historia</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Este importante acervo llegó al resguardo de la biblioteca a través de un proyecto llamado “Libro Internacional de China” impulsado por la 
                Biblioteca de Shangai. El proyecto tiene como objetivo hacer más visible la cultura y la historia China en otros países a través de la lectura.{'\n'}{'\n'}
                En la ceremonia celebrada el día 12 de Abril de 2011 y en presencia de las autoridades de ambas instituciones, se hizo la donación de 571 títulos 
                a esta biblioteca.{'\n'}{'\n'}
                Con el objeto de generar una relación cultural más estrecha, en ese mismo año y con el apoyo del Gobierno del Estado, la Biblioteca 
                Pública del Estado de Jalisco “Juan José Arreola” correspondió donando una cantidad equivalente de libros conviniendo así el 
                acuerdo inicial para dicho programa de intercambio.
                </Text>
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico10.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07, marginLeft: '6%'}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.85, marginLeft: '13%'}]}>Acervo</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                La colección “Window of Shanghai” ofrece una variedad de temas para acercar al público a la cultura china, tales como la historia, tradiciones, 
                lengua, gastronomía, indumentaria de algunos pueblos y etnias que conforman a la actual China; gran parte de estos títulos se encuentran 
                disponibles en ediciones bilingües en inglés-mandarín y en caracteres chinos.{'\n'}
                </Text>
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico10.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07, marginLeft: '6%'}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.85, marginLeft: '13%', marginTop: '-8%'}]}>Programa académico-cultural "WINDOWS OF SHANGHAI"</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                El programa académico-cultural "WINDOWS OF SHANGHAI" ayuda a introducir la historia y cultura china a la población Jalisciense por medio del 
                intercambio de acervo literario. Se ha llevado a cabo este convenio entre la Biblioteca Pública del Estado de Jalisco “Juan José 
                Arreola” y la Biblioteca de Shanghái desde el año 2011 y promueve el entendimiento entre los pueblos y las culturas mediante 
                el intercambio de libros entre bibliotecas.{'\n'}{'\n'}
                La Biblioteca Pública del Estado de Jalisco “Juan José Arreola” es la única institución en todo el país que resguarda dicha 
                colección, formando parte de los más de 55 países que integran el proyecto “Libro Internacional de China”, 
                programa que consolida un puente de amistad con China.{'\n'}{'\n'}
                El acervo que actualmente tiene la Biblioteca Pública consta de más de 500 libros en idiomas como el chino, inglés y español de temas variados 
                como arquitectura, arte, historia, economía, literatura, lingüística, entre otros.{'\n'}{'\n'}
                Durante el 2015 se espera recibir más de 400 libros a la vez que se enviará una cantidad significativa a su contraparte. El área “Windows 
                of Shanghái” está a disposición de los usuarios de manera gratuita en el piso 5 del edificio contemporáneo de la Biblioteca Pública del Estado.{'\n'}
                </Text>
              </View>

              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('http://windowofshanghai.library.sh.cn/faq/20')}style={{ height: width * 0.25, width: width * 0.75 }}>
              <Image source={require('../fotos/Logo5.png')} style={[styles.logoImage,{height: width * 0.2, width: width * 0.75}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
