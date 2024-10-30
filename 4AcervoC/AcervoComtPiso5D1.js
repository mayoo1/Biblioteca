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

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };


  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/persona8.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/persona8.jpg')}
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
                source={require('../fotos/persona8.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 5 Colecciones Internacionales</Text>
            <Text style={styles.subtitleText}>5.1 Biblioteca Paul Rivet del CCC-IFAL</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Historia</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                En 1944 el reconocido etnólogo Paul Rivet llega a México como el primer agregado cultural de la nación gala tras el final de la II guerra mundial. 
                Ese mismo año funda el Instituto Francés para América Latina (IFAL), concebido en su origen como un centro de investigación y difusión de la cultura
                francesa. Aunque Rivet regresa a Francia en 1945, continúan su obra en México personajes como François Chevalier, el gran especialista en historia iberoamericana que 
                llegó a la Ciudad de México en 1946 como becario y unos cuantos años más tarde volvería como director del IFAL, a finales de la década comienza a conformarse 
                de manera natural el acervo de la biblioteca del instituto que finalmente recibirá el nombre de su primer promotor en 1958. En 2008 la biblioteca cierra 
                sus puertas en su sede del Distrito Federal y en 2010 La Biblioteca Pública del Estado de Jalisco Juan José Arreola es seleccionada por una comisión 
                presidida por el historiador Jean Meyer y avalada por el embajador de Francia Daniel Parfait para ser depositaria de dicho acervo. Finalmente la 
                Biblioteca Paul Rivet está a disposición del público jalisciense desde octubre del 2012 cuando entra en servicio la nueva sede de la biblioteca.             
                </Text>
              </View>

              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Acervo</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                La Biblioteca Paul Rivet consta de cerca de 26 mil libros y 15 mil revistas. Es una de las bibliotecas de ciencias sociales más ricas en América Latina, 
                alberga a los principales escritores franceses de la postguerra y es muy completa en temas como urbanismo, historia, filosofía, antropología, ciencias 
                políticas, crítica literaria y desde luego literatura francesa. Se destaca en su acervo la importante colección de revistas editadas en Francia que contiene 
                los primeros números de publicaciones tan importantes como Los annales, Le temps modernes, Tiers Monde y otras publicaciones de cine, lingüística, teatro, 
                psicología entre otras. Cabe destacar que la riqueza de su acervo fue apreciada por artistas e intelectuales franceses y mexicanos, Jean Meyer, Carlos Fuentes, 
                José Emilio Pacheco (por citar algunos) fueron asiduos visitantes de la biblioteca Paul Rivet. Incluso el ganador del novel de literatura 2008 Jean-Marie 
                Gustave Le Clézio contribuyó a la conformación del acervo, ya que a finales de los años 60s durante una estancia en nuestro país trabajo catalogando y 
                atendiendo la biblioteca.{'\n'}              
                </Text>
              </View>
              
              <View style={styles.separator} />
                <TouchableOpacity onPress={() => this.openURL('https://alianzafrancesagdl.mx/')}style={{ height: width * 0.16, width: width * 0.7, marginLeft: '-2%' }}>
                <Image source={require('../fotos/Logo27.png')} style={[styles.logoImage,{height: width * 0.14, width: width * 0.7}]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openURL('https://www.bnf.fr/es')}style={{ height: width * 0.16, width: width * 0.5 }}>
                <Image source={require('../fotos/Logo28.png')} style={[styles.logoImage,{height: width * 0.15, width: width * 0.5}]} />
                </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openURL('http://www.cucsh.udg.mx/')}style={{ height: width * 0.30, width: width * 0.5 }}>
                <Image source={require('../fotos/Logo29.png')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.5}]} />
                </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}