import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, StyleSheet } from 'react-native';

export default class QuienesSom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLinkPress = () => {
    Linking.openURL('http://virtual.bpej.udg.mx');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../fotos/Antiguo17.jpg')} style={styles.headerImage} />
          <TouchableOpacity style={styles.intranetButton} activeOpacity={0.7} onPress={this.handleLinkPress}>
            <Text style={styles.buttonText}>Intranet</Text>
            <Image source={require('../fotos/ico2.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.presentationContainer}>
          <Image source={require('../fotos/ico3.png')} style={styles.icon} />
          <Text style={styles.presentationText}>Presentación</Text>
          
        </View>
        <View style={styles.separator} />

        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={styles.descriptionText}>
            Dentro de nuestras instalaciones puede usted consultar a texto completo y de alta calidad muchas de las colecciones con su respectiva base de datos con el fin de ayudarle con su tarea de investigación.
          </Text>
          <Image source={require('../fotos/Logo.png')} style={styles.logoImage} />
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
    height: '35%',
    width: '95%',
    backgroundColor: '#7b0000',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerImage: {
    borderRadius: 10,
    height: '65%',
    width: '80%',
    marginTop: '10%',
  },
  intranetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
  buttonIcon: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  presentationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 20,
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
    width: '100%',
  },
  logoImage: {
    height: 50,
    width: 250,
    marginTop: 10,
    marginRight: '30%'
  },
});
