import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default class ServList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />

        <Image 
          source={require('./fotos/Auditorio.png')} 
          style={styles.image} 
        />

        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>1.- Catálogo en línea.</Text>
              {'\n'}<Text style={styles.boldText}>2.- Referencia.</Text>
              {'\n'}<Text style={styles.boldText}>3.- Servicios de Cómputo.</Text>
              {'\n'}<Text style={styles.boldText}>4.- Actividades culturales y académicas:</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} a. Ciclos de Cine</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} b. Talleres</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} c. Charlas</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} d. Círculos de lectura</Text>
              {'\n'}<Text style={styles.grayText}>{'\t'} e. Conferencias</Text>
              {'\n'}<Text style={styles.boldText}>5.- Visitas guiadas.</Text>
              {'\n'}<Text style={styles.boldText}>6.- Guarda objetos.</Text>
              {'\n'}<Text style={styles.boldText}>7.- Conexión inalámbrica.</Text>
              {'\n'}<Text style={styles.boldText}>8.- Reprografía, (digitalización, fotocopiado, digitalización sonora).</Text>
              {'\n'}<Text style={styles.boldText}>9.- Salas de exposiciones y conferencias.</Text>
              {'\n'}<Text style={styles.boldText}>10.- Salas de lectura.</Text>
              {'\n'}<Text style={styles.boldText}>11.- Salas de lectura al aire libre.</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  header: {
    height: '30%',
    width: '95%',
    backgroundColor: '#7b0000',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10
  },
  image: {
    borderRadius: 7,
    height: '25%',
    width: '80%',
    marginTop: -190,
    alignSelf: 'center',
  },
  scrollView: {
    marginTop: 40,
  },
  content: {
    height: '100%',
    width: '86.5%',
    marginLeft: '8%',
  },
  text: {
    color: 'black',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'justify',
  },
  boldText: {
    fontWeight: 'bold',
  },
  grayText: {
    color: 'gray',
  },
});
