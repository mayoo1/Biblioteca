import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const resources = [
  {
    section: 'Dirección',
    items: [
      { Nombre: 'DR. JUAN MANUEL DURÁN JUÁREZ', Puesto: 'Director', Direccion: 'Periferico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364530', Correo: 'bpej@redudg.udg.mx' }
    ],
  },
  {
    section: 'Coordinacion de la Biblioteca Histórica',
    items: [
      { Nombre: 'MA.GUADALUPE MARTÍNEZ CORONA', Puesto: 'Coordinador', Direccion: 'Periferico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364530', Correo: 'lupitamar61@redudg.udg.mx' }
    ],
  },
  {
    section: 'Coordinacion de la Biblioteca Contemporánea',
    items: [
      { Nombre: 'MTRA. MARIA DE LOURDES ARIAS LOPEZ', Puesto: 'Coordinador', Direccion: 'Periferico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100',
        Telefono: '38364536', Correo: 'ariasl@redudg.udg.mx' },
    ],
  },
  {
    section: 'Coordinacion del Centro de Competencias en Digitalizacion',
    items: [
      { Nombre: 'MTRO. JUAN CARLOS CASTELLANOS ROSALES', Puesto: 'Coordinador', Direccion: 'Periferico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364550', Correo: 'juancarlos@redudg.udg.mx' },
      { Nombre: 'LIC. YADIRA DEL CARMEN CEA PACHECO', Puesto: 'Encargada de Digitalización', Direccion: 'Periferico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364550', Correo: 'Yadira.cea@redudg.udg.mx' },
      { Nombre: 'MTRO. VICTOR HUGO RAMIREZ SALAZAR', Puesto: 'Encargado', Direccion: 'Periferico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364550', Correo: 'Victorh.ramirez@redudg.udg.mx' },
    ],
  },
  {
    section: 'Equipo de desarrollo',
    items: [
      { Nombre: 'Esau Mendoza', Puesto: 'El mero mero, CEO de GOOGLE/ INTEL/ IBM'},
      { Nombre: 'Andrea Cortes', Puesto: 'La mas Basada, CEO de CANDYCRUSH/ FACEBOOK/ TIKTOK.' },  
    ],
  }
];

export default class ServRecur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources,
    };
  }

  handlePress = (type, value) => {
    let url = '';
    if (type === 'phone') {
      url = `tel:${value}`;
    } else if (type === 'email') {
      url = `mailto:${value}`;
    }
    Linking.openURL(url).catch(err => console.error('Error al abrir URL:', err));
  };

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.Nombre && <Text style={styles.nombre}>{item.Nombre}</Text>}
      {item.Puesto && <Text style={styles.puesto}>{item.Puesto}</Text>}
      {item.Direccion && <Text style={styles.direccion}>{item.Direccion}</Text>}

      {item.Telefono ? (
        <TouchableOpacity onPress={() => this.handlePress('phone', item.Telefono)}>
          <Text style={styles.phone}>Teléfono: {item.Telefono}</Text>
        </TouchableOpacity>
      ) : null}

      {item.Correo ? (
        <TouchableOpacity onPress={() => this.handlePress('email', item.Correo)}>
          <Text style={styles.email}>Correo: {item.Correo}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.resources}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.sectionContainer}>
              <Text style={styles.header}>{item.section}</Text>
              <FlatList
                data={item.items}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.innerList}
              />
            </View>
          )}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderColor:'gainsboro',
    borderWidth:2
  },
  innerList: {
    paddingLeft: 10,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'darkred',
    marginBottom: 10,
    marginLeft: 10
  },
  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  puesto: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  direccion: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  phone: {
    fontSize: 15,
    color: 'darkred',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ce2307',
    marginBottom: 5,
  },
});
