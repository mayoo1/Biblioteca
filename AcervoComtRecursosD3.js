import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet  } from 'react-native';

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
    const { navigation } = this.props;
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/Libreria12.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/Libreria12.jpg')} 
                style={styles.fullImage}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.infoContainer}>
              <Image 
                source={require('./fotos/Libreria12.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            
        <Text style={{ fontWeight: 'bold', color: 'darkred', fontSize: 22, marginLeft: 20, marginTop: 10 }}>Recursos Electrónicos</Text>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginLeft: 20, marginTop: 10 }}>Autoaprendizaje de idiomas
        </Text>

        <ScrollView style={{ marginTop: 10 }}>
        <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 10 }} />
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Presentación</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
        <View style={{ width: '86.5%', marginLeft: '5%' }}>
        <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
          Área de Autoaprendizaje de Idiomas. El auto-aprendizaje es una alternativa de estudio apoyada en los principios teóricos del aprendizaje independiente y aprender a aprender. En el auto-aprendizaje el estudiante se haces cargo de du propio aprendizaje; es decir, de acuerdo a sus necesidades decide su propio ritmo de trabajo y elige tanto la metodología como los recursos materiales y tecnológicos.{'\n'}
          La Unidad de Autoaprendizaje de idiomas es un espacio físico que te ofrece la biblioteca Pública, el cual cuenta con materiales y tecnología apropiados para aprender uno o varios idiomas en la modalidad de auto-aprendizaje.En esta unidad los usuarios tienen acceso a materiales didácticos presentados a través de diversos medios, los cuales contienen programas, actividades y ejercicios enfocados al aprendizaje, práctica, desarrollo y evaluación dentro del proceso de adquisición de Lenguas extranjeras.{'\n'}
          Contamos con 23 computadoras para la utilización de los materiales multimedia y práctica de idiomas en sitios web.
        </Text>
        </View>
        <Image source={require('./fotos/ico10.png')} style={{ height: 25, width: 25, marginLeft: 15}} />
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 40, marginTop: -20 }}>Objetivos</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
        <View style={{ width: '86.5%', marginLeft: '5%' }}>
        <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
        Facilitar el aprendizaje de idiomas en forma autodidacta. Dar servicio a quien por diversas razones no puede asistir a clases formales de idiomas en horarios fijos con costos fuera de su alcance.{'\n'}
        Lograr que los estudiantes se involucren en la búsqueda de la información. Proporcionar un servicio enriquecedor con métodos encaminados a satisfacer las necesidades propias del usuario.{'\n'}
        Proporcionar a los usuarios medios para adquirir conocimientos y habilidades que le permitan identificar y manejar adecuadamente los principios que rigen la autonomía.
        </Text>
        </View>

        <Image source={require('./fotos/ico10.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 20}} />        
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -40,width: '86.5%' }}>Servicio que ofrece el Área de Autoaprendizaje de idiomas de la Biblioteca Pública</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          
           
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10, marginLeft: 30 }}>
            •Métodos para Autoaprendizaje de idiomas (material impreso, audio, video y multimedia).{'\n'}
            •Libros de gramática .{'\n'}
            •Libros de literatura.{'\n'}
            •Libros de preparación para exámenes Internacionales (TOFEL, TOEIC, IELTS, etc.).{'\n'}
            •Préstamo de equipo para coadyuvar en el auto-aprendizaje de idiomas contamos con computadoras con software interactivo y acceso a internet.{'\n'}
            •12 computadoras con acceso a televisiones del mundo.{'\n'}
            </Text>
          </View>
          
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0, marginLeft:20 }} />
          <Image source={require('./fotos/Logo39.png')} style={{height: 45, width: 180, marginLeft: 20, marginTop: 20}} />
          <Image source={require('./fotos/Logo40.png')} style={{height: 30, width: 300, marginLeft: 20, marginTop: 10}} />
          <Image source={require('./fotos/Logo41.png')} style={{height: 40, width: 150, marginLeft: 20, marginTop: 10}} />
        </ScrollView>
      </View>
        )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    alignItems: 'center',
  },
  fullImage: {
    height: 400,
    width: 300,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    height: '35%',
    width: '95%',
    backgroundColor: 'darkred',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  infoImage: {
    height: '65%', 
    width: '85%',
    borderRadius: 10,
  },
  viewButton: {
    borderWidth: 0,
    borderColor: 'white',
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'darkred',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'darkred',
    marginTop: -10
  },
});
