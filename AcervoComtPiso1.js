import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';

export default class AcervoComt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee', alignItems: 'center' }}>
        <View style={{ height: height * 0.35, width: '95%', backgroundColor: '#7b0000', marginTop: 10, borderRadius: 10 }} />
        
        <Image
          source={require('./fotos/p1i.jpg')}
          style={{ height: height * 0.25, width: '70%', marginTop: '-68%', borderRadius: 10 }}
          resizeMode="contain"/>

        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15, marginHorizontal: 20, marginTop: 20, textAlign: 'center' }}>
          Piso 1. Biblioteca Infantil y Juvenil Jose Rosas Moreno.
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Image
            source={require('./fotos/ico3.png')}
            style={{ height: 25, width: 25, marginRight: 10 }}
            resizeMode="contain"
          />
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15}}>
            Presentación
          </Text>
        </View>

        <View style={{ borderWidth: 1, borderColor: 'gray', width: '90%', marginTop: 10 }} />

        <ScrollView contentContainerStyle={{ paddingVertical: 10, alignItems: 'center' }}>
          <View style={{ width: '90%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify' }}>
              Biblioteca Infantil u Juvenil "José Rosas Moreno" cuenta con más de 30,000 volúmenes distribuidos en diferentes colecciones.
              {'\n'}Además, se ofrecen distintos cursos, talleres y visitas guiadas, enfocados al fomento de la lectura y el desarrollo de la creatividad.
            </Text>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, marginTop: 10 }}>
              • Acervo general Infantil{'\n'}
              • Acervo general Juvenil{'\n'}
              • Biblioteca Infantil Benjamin Franklin{'\n'}
              • Colección de lectura recreativa{'\n'}
              • Colección CONALITEG{'\n'}
              • Biblioteca Infantil Josep Maria Muria Romani{'\n'}
              • Acervos Internacionales{'\n'}
              • Taller de cómputo Infantil{'\n'}
              • Taller de cómputo Juvenil{'\n'}
              • Sala de Proyecciones{'\n'}
              • Salón de Talleres{'\n'}
              • Teatro{'\n'}
              • Cuentacuentos{'\n'}
              • Bebeteca{'\n'}
              • Área de exposiciones{'\n'}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
