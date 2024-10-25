import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';

export default class ServBiblio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'red', borderWidth: 0, backgroundColor:'#eeeeee'}}>
        <View style={{ height: '40%', width:370, borderColor: 'blue', borderWidth: 0, backgroundColor:'#7b0000', marginLeft:10, marginTop:10}}></View>
        <Image source={require('../fotos/Historia.jpg')} style={{borderColor: 'white', borderWidth: 0, height: '20%', width:'60%', marginTop:-260, borderRadius:7, marginLeft:70,}}></Image>
        
        <TouchableOpacity style={{marginLeft:80}} activeOpacity={0}>
        <Text  style={{color: 'white',fontWeight: 'bold', fontSize:15, marginLeft:20, borderColor: 'white', borderWidth: 0, width:120, height: 25, marginTop:10}}>Primera Sede</Text>
        <Image source={require('../fotos/ico3,2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width:25, marginLeft:-10, marginTop:-25}}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={{marginLeft:80}} activeOpacity={0}>
        <Text  style={{color: 'white',fontWeight: 'bold', fontSize:15, marginLeft:20, borderColor: 'white', borderWidth: 0, width:250, height: 25, marginTop:10}}>Nombramiento Juan Jose Arreola</Text>
        <Image source={require('../fotos/ico3,2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width:25, marginLeft:-10, marginTop:-25}}></Image>
        </TouchableOpacity>

        <Image source={require('../fotos/ico3.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width:25, marginLeft:40, marginTop:60}}></Image>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:80, borderColor: 'red', borderWidth: 0, width:120, height: 20, marginTop:-20}}>Fundación</Text>
        
        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:340, marginLeft:20, marginTop: 20}}></View>
        <ScrollView>
        <View style={{ height: '100%', width: '86.5%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft:'5%'}}>
          <Text style={{color: 'black', fontSize:18, lineHeight: 25, textAlign: 'justify',  height: '100%', width: '100%'}}>La Biblioteca Pública del Estado de Jalisco se fundó el 24 de julio de 1861 bajo el título quinto del Plan General de Enseñanza por decreto del Gobernador del Estado Pedro Ogazón. Se formó con los acervos que pertenecieron al Instituto de Estudios Profesionales del Estado, al Colegio Seminario Tridentino del Señor San José, al Colegio de niñas de San Diego y a los conventos extintos: San Francisco, San Agustín, San Felipe, Santo Domingo, Nuestra Señora del Carmen, Nuestra Señora de la Merced, Belén y del Colegio Apostólico de Nuestra Señora de Zapopan.
El primer director fue el señor Ignacio Acal de 1861 hasta 1863, quien inició con los trabajos de clasificación y organización de los materiales, le sucedió José María Vigil en 1872. Debido a los arduos trabajos en la Biblioteca Pública, aunado a lo convulsionado del siglo XIX, ésta se inauguró hasta el 18 de diciembre de 1874 durante el gobierno del licenciado Ignacio L. Vallarta, siendo su director Diego Baz, la Biblioteca puso a disposición de sus usuarios veinte mil volúmenes.
En 1925 pasó a formar parte de la Universidad de Guadalajara, el gobernador José Guadalupe Zuno Hernández decretó el 15 de septiembre en lo relativo a la Ley Orgánica de la Universidad de Guadalajara que la Biblioteca Pública sería, de esa fecha en adelante, una de las instituciones que formarían parte de la Universidad tomando una función de apoyo y fomento a la cultura. Primero formó parte del Instituto de Bibliotecas, posteriormente de la Coordinación de Bibliotecas y a partir de 2009 del Centro Universitario de Ciencias Sociales y Humanidades (CUCSH).</Text>
        </View>
        </ScrollView>
      
      </View>
    )
  }
}