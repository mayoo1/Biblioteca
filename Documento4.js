import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

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
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/Antiguo5.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/Antiguo5.jpg')} 
                style={{ height: 450, width: 300, borderRadius: 10 }}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ height: '50%', width: '90%', backgroundColor: '#454545', borderRadius: 10, marginLeft: 20 }}>
              <Image 
                source={require('./fotos/Antiguo5.jpg')} 
                style={{ height: '85%', width: '60%', marginTop: '5%', borderRadius: 5, alignSelf: 'center' }}
              />
              <TouchableOpacity 
                style={styles.imageButton} 
                onPress={this.handleImagePress}
              >
                <Text style={styles.imageButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: 'white', fontSize: 13, borderRadius: 5, backgroundColor: 'darkred', marginTop: 10, marginHorizontal: 20 }}>
              Piso 1.1 Archivo de la Real Audiencia de la Nueva Galicia
            </Text>
            <View style={{ flexDirection: 'row', width: '40%', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
              <Image 
                source={require('./fotos/ico3.png')} 
                style={{ height: 25, width: 25, marginRight: -30 }}
              />
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 40 }}>Presentación</Text>
            </View>

            <View style={{ height: 1, backgroundColor: 'gray', marginTop: 10, marginHorizontal: 20 }}></View>

            <ScrollView style={{borderWidth:0, borderColor:'red', width: '90%',marginLeft: 15}}>
              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify'}}>
                El Juzgado General de bienes de Difuntos contiene documentos relativos a los españoles que murieron intestados en las posesiones hispánicas.  
              </Text>
            </ScrollView>
            <View style={{ height: 1, backgroundColor: 'gray', marginHorizontal: 20 }}></View>

            <Image source={require('./fotos/Logo3.jpg')} style={styles.logo} />
            <View style={styles.imageRow}>
              <Image source={require('./fotos/Logo6.png')} style={styles.smallImage}/>
              <Image source={require('./fotos/Logo7.png')} style={{marginLeft:10, height:80, width:80, marginTop:200}}/>
            </View>
          
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageButton: {
    borderWidth: 0,
    borderColor: 'white',
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  imageButtonText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 0, 
    width: '100%',
    padding: 25,
  },
  logo: {
    height: '12%',
    width: '42%',
    marginLeft: 20,
    marginTop: 10,
  },
  smallImage: {
    height: 80,
    width: 80,
    backgroundColor: '#ddd',
    marginLeft:140,
    marginTop:200
  },
};
