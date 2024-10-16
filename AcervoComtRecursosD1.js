import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

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
        <Image source={require('./fotos/Antiguo17.jpg')} style={{ borderColor: 'gray', borderWidth: 0, height: '20%', width: '60%', marginTop: '-60%', borderRadius: 10, marginLeft: '20%' }}></Image>
        
        <TouchableOpacity style={{marginLeft: 50}} activeOpacity={0.7} onPress={()=>{Linking.openURL('http://virtual.bpej.udg.mx')}}> 
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 100, borderColor: 'white', borderWidth: 0, width: 100, height: 25, marginTop: 30}}>Intranet</Text>
          <Image source={require('./fotos/ico2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width: 25, marginLeft: 60, marginTop: -30 }}></Image>
        </TouchableOpacity>

        <Image source={require('./fotos/ico3.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width: 25, marginLeft: 20, marginTop: 40 }}></Image>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 50, borderColor: 'red', borderWidth: 0, width: 120, height: 20, marginTop: -20 }}>Presentación</Text>

        <View style={{ borderWidth: 1, borderColor: 'gray', flexDirection: 'row', alignItems: 'center', flex: 0.0001, width: 340, marginLeft: 20, marginTop: 20 }}></View>
        
        <ScrollView>
          <View style={{ height: '100%', width: '90%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft: '5%' }}>
            <Text style={{ color: 'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', height: '100%', width: '100%' }}>
            Dentro de nuestras instalaciones puede usted consultar a texto completo y de alta calidad muchas de las colecciones con su respectiva base de datos con el fin de ayudarle con su tarea de investigación.  
            </Text>
            <Image source={require('./fotos/Logo.png')} style={{height: 50, width: 250, marginLeft: 0, marginTop: -20}} />
          </View>
        </ScrollView>
       
      </View>
    );
  }
}
