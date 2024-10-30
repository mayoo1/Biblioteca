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
            source={require('../fotos/Libreria12.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/Libreria12.jpg')}
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
                source={require('../fotos/Libreria12.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Recursos Electrónicos</Text>
            <Text style={styles.subtitleText}>Autoaprendizaje de idiomas</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Área de Autoaprendizaje de Idiomas{'\n'}{'\n'}
                El auto-aprendizaje es una alternativa de estudio apoyada en los principios teóricos del aprendizaje independiente y aprender a aprender. 
                En el auto-aprendizaje el estudiante se haces cargo de du propio aprendizaje; es decir, de acuerdo a sus necesidades decide su 
                propio ritmo de trabajo y elige tanto la metodología como los recursos materiales y tecnológicos.{'\n'}{'\n'}
                La Unidad de Autoaprendizaje de idiomas es un espacio físico que te ofrece la biblioteca Pública, el cual cuenta con materiales y tecnología 
                apropiados para aprender uno o varios idiomas en la modalidad de auto-aprendizaje.{'\n'}{'\n'}
                En esta unidad los usuarios tienen acceso a materiales didácticos presentados a través de diversos medios, los cuales contienen programas, 
                actividades y ejercicios enfocados al aprendizaje, práctica, desarrollo y evaluación dentro del proceso de adquisición de Lenguas 
                extranjeras. Contamos con 23 computadoras para la utilización de los materiales multimedia y práctica de idiomas en sitios web.            
                </Text>
              </View>

              <View style={styles.separator} />
              <Image source={require('../fotos/ico10.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07, marginLeft: '6%'}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.5, marginLeft: '13%'}]}>Objetivos</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Facilitar el aprendizaje de idiomas en forma autodidacta Dar servicio a quien por diversas razones no puede asistir a clases formales de idiomas 
                en horarios fijos con costos fuera de su alcance Lograr que los estudiantes se involucren en la búsqueda de la información Proporcionar 
                un servicio enriquecedor con métodos encaminados a satisfacer las necesidades propias del usuario Proporcionar a los usuarios medios 
                para adquirir conocimientos y habilidades que le permitan identificar y manejar adecuadamente los principios que rigen la autonomía.{'\n'}            
                </Text>
              </View>
              
              <View style={styles.separator} />
              <Image source={require('../fotos/ico10.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07, marginLeft: '6%'}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.85, marginLeft: '13%', marginTop: '-10%'}]}>Servicios que Ofrece El Área de Autoaprendizaje de Idiomas de la Biblioteca Pública.</Text>

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Servicios que Ofrece El Área de Autoaprendizaje de Idiomas de la Biblioteca Pública.             
                </Text>
                <Text style={[styles.descriptionText, {marginLeft: '4%'}]}>
                  • Métodos para Autoaprendizaje de idiomas (material impreso, audio, video y multimedia).{'\n'}
                  • Libros de gramática.{'\n'}
                  • Libros de literatura.{'\n'}
                  • Libros de preparación para exámenes Internacionales (TOFEL, TOEIC, IELTS, etc.).{'\n'}
                  • Préstamo de equipo para coadyuvar en el auto-aprendizaje de idiomas contamos con computadoras con software interactivo y acceso a internet.{'\n'}
                  • 12 computadoras con acceso a televisiones del mundo.{'\n'}         
                </Text>
              </View>
              <View style={styles.separator} />
              <Image source={require('../fotos/ico10.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07, marginLeft: '6%'}]} />
              <Text style={[styles.sectionTitle, {width: width * 0.85, marginLeft: '13%', marginTop: '-8%'}]}>Los Idiomas que se Pueden Aprender en la Bipeja son 6:</Text>
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={[styles.descriptionText, {marginLeft: '4%'}]}>
                  • Inglés{'\n'}
                  • Francés{'\n'}
                  • Alemán{'\n'}
                  • Italiano{'\n'}
                  • Chino{'\n'}
                  • Árabe{'\n'}         
                </Text>
              </View>
              
              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://es.duolingo.com/')}style={{ height: width * 0.12, width: width * 0.5 }}>
              <Image source={require('../fotos/Logo39.png')} style={[styles.logoImage,{height: width * 0.12, width: width * 0.5}]} />
              </TouchableOpacity>
              <Image source={require('../fotos/Logo40.png')} style={[styles.logoImage,{height: width * 0.1, width: width * 0.87, marginLeft: '2%'}]} />
              <TouchableOpacity onPress={() => this.openURL('https://es.babbel.com/pages/es-es/evergreen-multilanguage?bsc=gg_br_srh_spa_all&btp=default&gad_source=1&gclid=Cj0KCQjwsoe5BhDiARIsAOXVoUu31HjCkgixh9hbRrqn_y1EPQEKYwHiyKP5e7p7fcfwOQdqGxKz9EsaAiDaEALw_wcB&utm_content=17002963919_139681633630_kwd-96813789_594099382951&utm_medium=cpc&utm_source=google')}style={{ height: width * 0.15, width: width * 0.3 }}>
              <Image source={require('../fotos/Logo41.png')} style={[styles.logoImage,{height: width * 0.1, width: width * 0.3}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}