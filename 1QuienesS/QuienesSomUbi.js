import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';

export default class QuienesSomUbi extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'red', borderWidth: 0, backgroundColor:'#eeeeee'}}>
        <View style={{ height: '35%', width:'95%', borderColor: 'blue', borderWidth: 0, backgroundColor:'#7b0000', marginLeft:10, marginTop:10, borderRadius:10}}></View>
        <Image source={require('../fotos/Mapa2.png')} style={{borderColor: 'white', borderWidth: 0, height: '25%', width:'75%', marginTop:'-60%', borderRadius:7, marginLeft:50,}}></Image>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://www.google.com.mx/maps/place/Biblioteca+P%C3%BAblica+del+Estado+de+Jalisco+%22Juan+Jos%C3%A9+Arreola%22/@20.7381944,-103.3840591,17z/data=!3m1!4b1!4m6!3m5!1s0x8428b0318d88e869:0x86765638ac1b7988!8m2!3d20.7381944!4d-103.3814842!16s%2Fg%2F1tdxflvj?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D')}}>
        <Text  style={{color: 'white', fontWeight: 'bold', fontSize:15, marginLeft:75, borderColor: 'white', borderWidth: 0, width:250, height: 25, marginTop:10}}>Localizar domicilio en Google Maps</Text>
        <Image source={require('../fotos/ico2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width:25, marginLeft:45, marginTop:-27}}></Image>
        </TouchableOpacity>

        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:370, marginLeft:20, marginTop: 30}}></View>
        
        <Image source={require('../fotos/ico7.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width:25, marginLeft:20, marginTop:10}}></Image>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:50, borderColor: 'red', borderWidth: 0, width:200, height: 25, marginTop:-25}}>UBICACIÓN</Text>
        <View style={{ height: '24%', width: '90%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft:'5%'}}>
          <ScrollView>
            <Text style={{fontWeight: 'bold', color: 'gray', fontSize:15, lineHeight: 25, textAlign: 'justify',  height: '100%', width: '100%'}}>
              Periférico Norte, Manuel Gómez Morín no. 1695, 
              {"\n"}Colonia Belenes 
              {"\n"}C.P. 45100, Zapopan, Jalisco. México 
              <Text style={{color: 'darkred'}}>{"\n"}Teléfonos{"\n"}</Text>
              <TouchableOpacity style={{ borderColor: 'red', borderWidth:0, width:150, height: 25, marginLeft:10}}><Text onPress={()=>{Linking.openURL('tel:(01 33) 3836 4530');}} style={{fontSize:16, color: '#FF5800'}}>(01 33) 3836 4530</Text></TouchableOpacity>
              <TouchableOpacity style={{ borderColor: 'red', borderWidth:0, width:150, height: 25, marginLeft:10, marginTop:10}}><Text onPress={()=>{Linking.openURL('tel:(33)3619 0480')}} style={{fontSize:16, color: '#FF5800'}}>33 3619 0480</Text></TouchableOpacity>
              <Text style={{color: 'darkred'}}>{"\n"}Correos electrónicos{"\n"}</Text>
              <TouchableOpacity style={{ borderColor: 'red', borderWidth:0, width:150, height: 25, marginLeft:10, marginTop:10}}><Text onPress={()=>{Linking.openURL('mailto: bpej@udg.mx')}} style={{fontSize:16, color: '#FF5800'}}>bpej@udg.mx</Text></TouchableOpacity>
              <TouchableOpacity style={{ borderColor: 'red', borderWidth:0, width:200, height: 25, marginLeft:10, marginTop:10}}><Text onPress={()=>{Linking.openURL('mailto: bibliojalisco@gmail.com')}} style={{fontSize:16, color: '#FF5800'}}>bibliojalisco@gmail.com</Text></TouchableOpacity>
            </Text>
          </ScrollView>
        </View>

        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:370, marginLeft:20, marginTop: 10}}></View>
        <Image source={require('../fotos/ico8.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width:25, marginLeft:20, marginTop:10}}></Image>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:50, borderColor: 'red', borderWidth: 0, width:200, height: 25, marginTop:-25}}>RUTAS DE CAMION</Text>
        <View style={{ height: '22%', width: '90%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft:'5%'}}>
          <ScrollView>
            <Text style={{color: 'black', fontSize:16, lineHeight: 25, textAlign: 'justify',  height: '100%', width: '100%'}}>
              <Text style={{color: '#7b0000'}}>RUTA 636</Text>{"\n"}Sale del Santuario de Guadalupe, Juan Álvarez y Pedro Loza, pasa por Alcalde, Atemajac, Colonia Constitución, núcleo Belenes-CUCEA. 
              <Text style={{color: '#7b0000'}}>{"\n"}RUTA 641</Text>{"\n"}Pasa por Plaza Patria, Avila Camacho, Mercado del Mar, CUCEA, Tabachines.
              <Text style={{color: '#7b0000'}}>{"\n"}MI MACRO{"\n"}</Text>Circula por el periférico en las dos direcciones Norte y Sur
              <Text style={{color: '#7b0000'}}>{"\n"}RUTA C-06{"\n"}</Text>Av. Servidor Público X Santa Margarita hasta Ruperto García De Alba, 113.
              <Text style={{color: '#7b0000'}}>{"\n"}RUTA C-02{"\n"}</Text>Jardines del Valle Hasta Petroleros Mexicanos, 4998 Tlaquepaque
            </Text>
          </ScrollView>
        </View>

        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:370, marginLeft:20, marginTop: 10}}></View>

      </View>
    )
  }
}
