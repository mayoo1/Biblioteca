import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class AcervoComtPiso2D2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'red', borderWidth: 0, backgroundColor: '#eeeeee' }}>
        <View style={{ height: '35%', width: '95%', borderColor: '#9b0000', borderWidth: 2, backgroundColor: '#7b0000', marginLeft: 10, marginTop: 10, borderRadius: 10}}></View>
        <Image source={require('./fotos/novedades.png')} style={{ borderColor: 'gray', borderWidth: 0, height: '25%', width: '70%', marginTop: '-60%', borderRadius: 10, marginLeft: '15%' }}></Image>
      
        <Image source={require('./fotos/ico3.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width: 25, marginLeft: 40, marginTop: 50 }}></Image>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 80, borderColor: 'red', borderWidth: 0, width: 120, height: 20, marginTop: -20 }}>Presentación</Text>

        <View style={{ borderWidth: 1, borderColor: 'gray', flexDirection: 'row', alignItems: 'center', flex: 0.0001, width: 340, marginLeft: 20, marginTop: 20 }}></View>
        
        <ScrollView>
          <View style={{ height: '100%', width: '86.5%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', height: '100%', width: '100%' }}>
                Incluye las mas recientes adquisiciones de libros, periódicos y revistas de circulación nacional e internacional, además de las donaciones realizadas por parte de cámaras editoriales y consulados participantes en la Feria Internacional del Libro en Guadalajara (FIL).
                EN este espacio encontrarás un laboratorio de cómputo y acceso a internet inalámbrico, juegos de mesa y un aula de trabajo. Se ubica en la Planta baja.
            </Text>
          </View>
        </ScrollView>
        <Image source={require('./fotos/Logo.png')} style={{height: 50, width: 250, marginLeft: 20, marginTop: 20}} />
      </View>
    );
  }
}
