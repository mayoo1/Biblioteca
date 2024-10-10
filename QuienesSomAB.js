import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class QuienesSom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'red', borderWidth: 0, backgroundColor: '#eeeeee' }}>
        <View style={{ height: '35%', width: '95%', borderColor: '#9b0000', borderWidth: 2, backgroundColor: '#7b0000', marginLeft: 10, marginTop: 10, borderRadius: 10}}></View>
        <Image source={require('./fotos/Libreria8.jpg')} style={{ borderColor: 'gray', borderWidth: 0, height: '20%', width: '70%', marginTop: '-60%', borderRadius: 10, marginLeft: '15%' }}></Image>
        
        <TouchableOpacity style={{marginLeft: 50}} activeOpacity={0.7} onPress={() => navigation.navigate('Qsabho')}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 100, borderColor: 'white', borderWidth: 0, width: 100, height: 25, marginTop: 10 }}>Hoy en dia</Text>
          <Image source={require('./fotos/ico3,2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width: 25, marginLeft: 60, marginTop: -30 }}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={{marginLeft: 50}} activeOpacity={0.7} onPress={() => navigation.navigate('Qsabh')}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 100, borderColor: 'white', borderWidth: 0, width: 70, height: 25, marginTop: 10 }}>Historia</Text>
          <Image source={require('./fotos/ico3,2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width: 25, marginLeft: 60, marginTop: -30 }}></Image>
        </TouchableOpacity>

        <Image source={require('./fotos/ico3.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width: 25, marginLeft: 40, marginTop: 30 }}></Image>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 80, borderColor: 'red', borderWidth: 0, width: 120, height: 20, marginTop: -20 }}>Presentacion</Text>

        <View style={{ borderWidth: 1, borderColor: 'gray', flexDirection: 'row', alignItems: 'center', flex: 0.0001, width: 340, marginLeft: 20, marginTop: 20 }}></View>
        
        <ScrollView>
          <View style={{ height: '100%', width: '86.5%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', height: '100%', width: '100%' }}>
              Definir a la Biblioteca Pública del Estado de Jalisco envuelve la consideración y explicación de dos aspectos fundamentales. Primero, el contexto nacional e histórico que dio vida a nuestra biblioteca y la dotó de capacidades propias de una época por demás convulsa y que dejó huellas imborrables en la institución. Segundo, el papel de la globalización y las tecnologías que caracterizan a la época actual que ha conllevado a una transición de la biblioteca cuyo objetivo es cubrir las necesidades de una comunidad en general, adecuándose a dichas tendencias.
              En América, México juega un papel destacado en lo que se refiere a las tradiciones culturales y antiguas en el continente. Desde la época prehispánica, en el país ya existían las casas de los libros, conocidas como amoxcalli, cuya función era conservar los manuscritos. Además existen referencias de que fue el primer país que fundó oficialmente una biblioteca en 1534, es así como durante la época de la Colonia México se fue posicionando como poseedor de las bibliotecas más ricas y grandes de la América española.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
