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
            source={require('./fotos/persona8.jpg')} 
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image 
                source={require('./fotos/persona8.jpg')} 
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
                source={require('./fotos/persona8.jpg')} 
                style={styles.infoImage} 
              />
              <TouchableOpacity style={styles.viewButton} onPress={this.handleImagePress}>
              <Text style={styles.viewButtonText}>Ver Imagen</Text>
            </TouchableOpacity>
            </View>
            

        <ScrollView style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15, marginLeft: 20, marginTop:5 }}>5 Colecciones Internacionales. Piso 5</Text>
        <Image source={require('./fotos/ico3.png')} style={{ height: 25, width: 25, marginLeft: 20, marginTop: 15 }} />
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, marginTop: -20 }}>Historia</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
          
          <View style={{ width: '86.5%', marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
            En 1944 el reconocido etnólogo Paul Rivet llega a México como el primer agregado cultural de la nación gala tras el final de la Il guerra mundial. Ese mismo año funda el Instituto Francés para América Latina (IFAL), concebido en su origen como un centro de investigación y difusión de la cultura francesa.
Aunque Rivet regresa a Francia en 1945, continúan su obra en México personajes como François Chevalier, el gran especialista en historia iberoamericana que llegó a la Ciudad de México en 1946 como becario y unos cuantos años más tarde volvería como director del IFAL, a finales de la década comienza a conformarse de manera natural el acervo de la biblioteca del instituto que finalmente recibirá el nombre de su primer promotor en 1958. En 2008 la biblioteca cierra sus puertas en su sede del Distrito Federal y en 2010 La Biblioteca Pública del Estado de Jalisco Juan José Arreola es seleccionada por una comisión presidida por el historiador Jean Meyer y avalada por el embajador de Francia Daniel Parfait para ser depositaria de dicho acervo. Finalmente la Biblioteca Paul Rivet
está a disposición del público jalisciense desde octubre del 2012 cuando entra en servicio la nueva sede de la biblioteca.
              </Text>
        
            
          <Image source={require('./fotos/ico10.png')} style={{ height: 25, width: 25, marginTop: 15 }} />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 25, marginTop: -20 }}>Acervo</Text>
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 10 }} />  
           
    
          <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', marginTop: 10 }}>
          La Biblioteca Paul Rivet consta de cerca de 26 mil libros y 15 mil revistas. Es una de las bibliotecas de ciencias sociales más ricas en América Latina, alberga a los principales escritores franceses de la posguerra y 
          es muy completa en temas como urbanismo, historia, filosofía, antropología, ciencias políticas, crítica literaria y desde luego literatura francesa. Se destaca en su acervo la importante colección de revistas editadas en Francia que contiene los primeros números de publicaciones tan importantes como Los animales, Le tiempos modernos, Tiers Monde y otras publicaciones de cine, lingüística, teatro, 
          psicología entre otras. Cabe destacar que la riqueza de su acervo fue apreciada por artistas e intelectuales franceses y mexicanos, Jean Meyer, Carlos Fuentes, José Emilio Pacheco (por citar algunos) fueron asiduos visitantes de la biblioteca Paul Rivet. Incluso el ganador del novel de literatura 2008 Jean-Marie Gustavo Le Clézio contribuyó a la conformación del acervo, ya que a finales de los años 60s durante una estancia en nuestro país trabajo catalogando y atendiendo la biblioteca.
          {'\n'}</Text>
          </View>
          
          <View style={{ borderWidth: 1, borderColor: 'gray', width: 320,  marginTop: 0, marginLeft:20 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Image source={require('./fotos/Logo27.png')} style={{ height: 30, width: 150, marginLeft:20 }} />
            <Image source={require('./fotos/Logo28.png')} style={{ height: 30, width: 150, marginRight:30 }} />
          </View>
          <Image source={require('./fotos/Logo29.png')} style={{height: 60, width: 150, marginLeft: 20, marginTop: 5}} />
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
    width: '75%',
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
