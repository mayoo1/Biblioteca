import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default class AcervoComt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: '100%', width: '100%', backgroundColor: '#eeeeee' }}>
        <View style={{ height: '35%', width: '95%', backgroundColor: '#7b0000', marginLeft: 10, marginTop: 10, borderRadius: 10 }} />
        <Image
          source={require('./fotos/p1i.jpg')}
          style={{ height: '25%', width: '70%', marginTop: '-60%', borderRadius: 10, marginLeft: '15%' }}
        />
        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15, marginLeft: 30, width: 300, height: 40, marginTop: 50 }}>
          Piso 1. Biblioteca Infantil y Juvenil Jose Rosas Moreno.
        </Text>
        <Image
          source={require('./fotos/ico3.png')}
          style={{ height: 25, width: 25, marginLeft: 30, marginTop: 10 }}
        />
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 60, height: 20, marginTop: -20 }}>
          Presentación
        </Text>

        <View style={{ borderWidth: 1, borderColor: 'gray', flexDirection: 'row', alignItems: 'center', flex: 0.0001, width: 340, marginLeft: 20, marginTop: 20 }} />

        <ScrollView>
          <View style={{ height: '100%', width: '86.5%', marginTop: 10, marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', width: '100%' }}>
              Biblioteca Infantil u Juvenil "José Rosas Moreno" cuenta con más de 30,000 volúmenes distribuidos en diferentes colecciones.
              {'\n'}Además, se ofrecen distintos cursos, talleres y visitas guiadas, enfocados al fomento de la lectura y el desarrollo de la creatividad.
            </Text>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, marginLeft: 25, marginTop: 10 }}>
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
            • Área de exposiciones{'\n'}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
