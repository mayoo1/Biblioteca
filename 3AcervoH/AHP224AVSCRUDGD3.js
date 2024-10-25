import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Linking} from 'react-native';

export default class QuienesSom extends Component {
  constructor(props) {
    super(props);
  }

  handleAudioPress = () => {
    const url = "https://bpej.udg.mx/sites/default/files/2021-09/lo-que-le-paso-a-joe-y-a-su-chica-editada.mp3";
    Linking.openURL(url);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ width: '90%', marginTop: 25, marginLeft: 20, height: '2%' }} onPress={this.handleAudioPress}>
            <Text style={styles.viewButtonText}>Escuchar: "Lo que le pasó a joe y a su chica"</Text>
          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold', color: '#515151', fontSize: 20, marginLeft: 20, marginTop: 10, width: '90%' }}>
            Archivo Sonoro. Radio Universidad de Guadalajara. Piso 4
          </Text>
          <Text style={{ fontWeight: 'bold', color: '#515151', fontSize: 17, marginLeft: 20, marginTop: 10 }}>
            Joe y a su chica
          </Text>

          <ScrollView style={{ marginTop: 10 }}>
            <View style={{ borderWidth: 1, borderColor: 'gray', width: 320, marginLeft: 20, marginTop: 10 }} />
            <Text style={{ fontSize: 15, marginLeft: 20, lineHeight: 25, borderWidth: 0, width: '86%' }}>
              <Image source={require('../fotos/ico3.png')} style={{ height: 20, width: 20, marginTop: 10 }} />
              <Text style={{ fontWeight: 'bold', color: 'black', marginTop: -20 }}>Titulo de la obra: </Text>
              <Text style={{ color: 'black', marginTop: -20 }}>Lo que le pasó a Joe y a su chica</Text>
            </Text>

            <View style={{ width: '86.5%', marginLeft: '5%' }}>
              <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
                {'\n'}Género: Radio cuento
                {'\n'}Datación a radio: David Guerrero Lemus
                {'\n'}Intérpretes: David Guerrero, Álvaro José Gómez, Mario Franco, Javier Vizcaíno.
                {'\n'}Productor: Radio Universidad de Guadalajara
                {'\n'}Año: 1996
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    marginTop: -10,
  },
});
