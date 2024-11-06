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
          source={require('../fotos/Libros2.png')}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <View style={styles.imageView}>
            <Image
              source={require('../fotos/Libros2.png')}
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
              source={require('../fotos/Libros2.png')}
              style={[styles.infoImage, {height: width * 0.5, width: width * 0.8}]}
            />
            <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Quienes Somos?</Text>
          <Text style={styles.subtitleText}>Historia</Text>

          <ScrollView style={styles.scrollView}>
            <View style={styles.separator} />
            <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, {height: width * 0.07, width: width * 0.07}]} />
            <Text style={[styles.sectionTitle, {width: width * 0.5}]}>Presentación</Text>

            <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
              <Text style={styles.descriptionText}>
              El establecimiento de las bibliotecas como instrumentos de desarrollo cultural y  progreso en México tuvo lugar después de la instauración de la República. Durante este periodo, se fundó la Biblioteca Nacional y diversas bibliotecas públicas de diferentes estados, lo que marcó un cambio significativo en la percepción y función de estas instituciones. En el caso específico de Jalisco, la creación de nuestra biblioteca pública fue oficializada mediante un decreto gubernamental firmado el 24 de julio de 1861. Sin embargo, no fue sino hasta 1874 que abrió sus puertas al público. Esta institución, como otras en el país, se generó en un contexto político y social que buscaba impulsar el desarrollo cultural y educativo, alejándose de las estructuras anteriores asociadas a la iglesia y los conventos.{'\n'}{'\n'}
              Nuestra colección, de inicio, estuvo conformada principalmente por libros provenientes de los centros religiosos. Este hecho se vincula con la Ley de Reforma, que durante la segunda mitad del siglo XIX, oficializó una serie de medidas para la secularización de bienes eclesiásticos, incluyendo los archivos y bibliotecas de los conventos, los cuales pasaron a formar parte de las nuevas instituciones culturales y educativas del país. Dentro de este contexto, la Biblioteca Pública del Estado de Jalisco se convirtió en un espacio que albergó y compartió el conocimiento previamente resguardado en las instituciones religiosas. Este cambio representó un paso importante hacia la democratización del acceso al conocimiento en México, al abrir las puertas de estas bibliotecas al público en general.{'\n'}{'\n'}
              La evolución de las bibliotecas públicas ciertamente enfrentó desafíos significativos, principalmente la falta de apoyo gubernamental y de conciencia colectiva en sus etapas iniciales. La accesibilidad al conocimiento y la educación estaba limitada, ya que solo los grupos más acomodados tenían fácil acceso a la educación, excluyendo a gran parte de la población. No fue hasta la segunda década del siglo XX, específicamente después de la lucha armada revolucionaria, que se empezaron a realizar esfuerzos para democratizar el acceso al conocimiento. La creación de la Secretaría de Educación Pública (SEP), liderada por José Vasconcelos, marcó un hito crucial en este proceso. Vasconcelos impulsó la idea de convertir al libro en un objeto accesible para todos los ciudadanos, contribuyendo así a la expansión de las bibliotecas públicas. Durante su gestión, duplicó la creación de bibliotecas públicas, aunque no se consolidaron completamente. Este período marcó el inicio de un cambio significativo hacia la democratización del acceso a la información y la cultura.{'\n'}{'\n'}
              Sin embargo, no es hasta 1983 que se estableció el Plan Nacional de Bibliotecas Públicas, donde se proporcionó un impulso más sustancial para la creación y consolidación de las bibliotecas en el país. Este plan fue crucial para establecer una red de bibliotecas públicas a lo largo y ancho de México, brindando a la población un acceso más equitativo a la educación y la información.{'\n'}{'\n'}
              La Biblioteca Pública del Estado de Jalisco “Juan José Arreola” ha enfrentado desafíos considerables en términos de educación e infraestructura, pero a lo largo del tiempo se ha consolidado como una institución fundamental que va más allá de su función bibliotecaria. En lugar de limitarse a ser simplemente un depósito de libros, nos hemos convertido en un icono de identidad para los jaliscienses, representando la riqueza documental que refleja la diversidad de lenguajes, pueblos y culturas de la región. Esta heterogeneidad de lenguajes, la pluralidad de pueblos y la riqueza de las culturas presentes en la región se ven reflejadas en las colecciones documentales que aquí se resguardan. Estos materiales no solo son fuentes de conocimiento, sino también testimonios vivos de la historia y la identidad jalisciense.{'\n'}{'\n'}
              La biblioteca, al ser un espacio de acceso libre al conocimiento contribuye a superar las adversidades educativas, ya que proporciona recursos que enriquecen la formación y el aprendizaje de la población. Además, al posicionarse como un elemento social, se convierte en un punto de encuentro y conexión entre las personas, fomentando la construcción de una identidad colectiva basada en la apreciación y valoración de la diversidad cultural. En este sentido, la biblioteca no solo sirve como centro de información, sino que también es bastión de la herencia cultural y símbolo de la identidad regional. A través de esta labor, se contribuye a fortalecer el tejido social, promoviendo la comprensión y el respeto entre los distintos grupos y comunidades presentes.{'\n'}{'\n'}
              La evolución de la biblioteca refleja una adaptación constante a los cambios no solo en las barreras territoriales, sino también a las particularidades de la era actual, caracterizada por funcionamientos de carácter supranacional. Esta transformación implica que la biblioteca debe asumir roles más allá de lo local, reconociendo la importancia de integrarse a la sociedad globalizada y digital. En este sentido, la biblioteca no solo se enfoca en servir a un entorno específico, sino que también busca conectarse con las dinámicas globales de la sociedad del conocimiento.{'\n'}{'\n'}
              La transición de la biblioteca hacia los parámetros actuales implica incorporar tecnología, digitalizar las colecciones, ofertar servicios en línea y promocionar la alfabetización digital, entre otras actividades. Es por todo esto que la biblioteca se convierte en un espacio de encuentro no solo físico sino también virtual, promoviendo la interacción social y el intercambio de ideas. Este proceso de transición no solo está implicando cambios de infraestructura y tecnología, sino también en materia de redefinir el rol bibliotecario como facilitador del acceso a la información en un contexto que trasciende las fronteras locales.
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
