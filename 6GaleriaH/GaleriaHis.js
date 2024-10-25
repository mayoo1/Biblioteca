import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

const data = [
  { key: '1', title: 'Tesoros', image: require('../fotos/GaleriaHis6.jpg'), description: 'Portada orlada, letra gótica y letras capitulares, texto a dos tintas de la obra, El cantar de cantares de Salomón: Según la edición reconocida y cotejada con varios manuscritos auténticos y publicados en Madrid por la imprenta de la hija de Ibarra en MDCCVI; Autor: Fray Luis de León, Ilustrador: Juan Ribot, San Feliú de Guixols, 1946.' },
  { key: '2', title: 'Biblias', image: require('../fotos/GaleriaHis.png'), description: 'Las primeras Bellezas del Mundo o sea la Santa Biblia (Antiguo y Nuevo Testamento), obra de la Colección de Biblias en el Acervo especial del piso 6 del acervo histórico de la Biblioteca Público del Estado de Jalisco.' },
  { key: '3', title: 'Ramo fiscal', image: require('../fotos/GaleriaHis3.png'), description: 'Borrador de Recuas de la oficina principal de la Real Aduana en el arrendamiento de Alcabalas. Libro 106 de la Real Audiencia de la Nueva Galicia.' },
  { key: '4', title: 'Sala Jalisciense', image: require('../fotos/GaleriaHis2.png'), description: 'Marcas de fuego que indican que las obras pertenecieron a diferentes Colegios, Congregaciones y Seminarios Religiosos.' },
  { key: '5', title: 'Plano de Guadalajara', image: require('../fotos/GaleriaHis5.png'), description: 'Facsimile de un Plano de la Ciudad de Guadalajara Capital como se hallaba en el año de 1800, del Reino de la Nueva Galicia.' },
  { key: '6', title: 'Real Audiencia', image: require('../fotos/GaleriaHis4.png'), description: 'Carta de monja en documentos del Ramo Civil de la Real Audiencia de la Nueva Galicia.' },
];

export default class Gh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  handlePress = (item) => {
    this.setState({ selectedItem: item });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.handlePress(item)} style={styles.box}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.footerText}>{item.title}</Text>
    </TouchableOpacity>
  );

  render() {
    const { selectedItem } = this.state;

    return (
      <View style={styles.container}>
        {selectedItem ? (
          <ImageBackground
            source={selectedItem.image}
            style={styles.background}
            blurRadius={10}
          >
            <View style={styles.overlay}>
              <Image source={selectedItem.image} style={styles.largeImage} />
              <Text style={styles.detailText}>{selectedItem.description}</Text>
              <TouchableOpacity onPress={() => this.setState({ selectedItem: null })}>
                <Text style={styles.closeButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.key}
            numColumns={2}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  box: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'gray',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingVertical: 8,
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  largeImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 15, 
  },
  detailText: {
    fontSize: 14,
    textAlign: 'justify',
    color: '#fff',
  },
  closeButton: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
