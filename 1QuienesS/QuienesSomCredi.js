import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';

const resources = [
  {
    section: 'Dirección',
    items: [
      { Nombre: 'DR. JUAN MANUEL DURÁN JUÁREZ', Puesto: 'Director', Direccion: 'Periférico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364530', Correo: 'bpej@redudg.udg.mx' }
    ],
  },
  {
    section: 'Coordinación de la Biblioteca Histórica',
    items: [
      { Nombre: 'MA.GUADALUPE MARTÍNEZ CORONA', Puesto: 'Coordinador', Direccion: 'Periférico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364530', Correo: 'lupitamar61@redudg.udg.mx' }
    ],
  },
  {
    section: 'Coordinación de la Biblioteca Contemporánea',
    items: [
      { Nombre: 'MTRA. MARIA DE LOURDES ARIAS LOPEZ', Puesto: 'Coordinador', Direccion: 'Periférico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100',
        Telefono: '38364536', Correo: 'ariasl@redudg.udg.mx' },
    ],
  },
  {
    section: 'Coordinación del Centro de Competencias en Digitalización',
    items: [
      { Nombre: 'MTRO. JUAN CARLOS CASTELLANOS ROSALES', Puesto: 'Coordinador', Direccion: 'Periférico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364550', Correo: 'juancarlos@redudg.udg.mx' },
      { Nombre: 'LIC. YADIRA DEL CARMEN CEA PACHECO', Puesto: 'Encargada de Digitalización', Direccion: 'Periférico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364550', Correo: 'Yadira.cea@redudg.udg.mx' },
      { Nombre: 'MTRO. VICTOR HUGO RAMIREZ SALAZAR', Puesto: 'Encargado', Direccion: 'Periférico Norte, Manuel Gómez Morin no. 1695, Colonia Belenes C.P. 45100', 
        Telefono: '38364550', Correo: 'Victorh.ramirez@redudg.udg.mx' },
    ],
  },
  {
    section: 'Equipo de desarrollo',
    items: [
      { Nombre: 'Joaquin Esau Mendoza Fajardo'},
      { Nombre: 'Andrea Elizabeth Cortes Garcia\n'},  
      { Nombre: 'Juan Carlos Bernal López'},
      { Nombre: 'Oscar Santiago Gonzales Flores'},
      { Nombre: 'Alan Francisco Guevara Ramirez'},
      { Nombre: 'Jhordan Ricardo Luna Rodriguez'},
      { Nombre: 'Francisco Alejandro Moreno Famoso'},
      { Nombre: 'Luis David Reyes Torres'},
      { Nombre: 'Jose Luis Rivera Puga'},
      { Nombre: 'Angel Salvador Sanchez Gallegos'},
      { Nombre: 'Ramón Velázquez López'},
    ],
  }
];

export default class ServRecur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources,
      clickCounts: {
        'Joaquin Esau Mendoza Fajardo': 0,
        'Andrea Elizabeth Cortes Garcia\n': 0,
      },
    };
  }

  componentWillUnmount() {
    // Reiniciar los contadores de clics cuando el componente se desmonte
    this.setState({
      clickCounts: {}
    });
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

  handleButtonPress = (name) => {
    // Solo mostrar alertas para Esau y Andrea
    if (name === 'Joaquin Esau Mendoza Fajardo' || name === 'Andrea Elizabeth Cortes Garcia\n') {
      this.setState((prevState) => {
        const updatedClickCounts = { ...prevState.clickCounts };
        updatedClickCounts[name] = (updatedClickCounts[name] || 0) + 1;

        // Si se presionó 5 veces, mostrar un enlace
        if (updatedClickCounts[name] === 5) {
          Alert.alert(`¡Has presionado 5 veces el nombre de ${name}!`);
        }

        return { clickCounts: updatedClickCounts };
      });
    }
  };

  openLinkEsau = () => {
    // Abrir el enlace para Esau
    Linking.openURL('https://www.instagram.com/reel/DCCTIehN9g4/?igsh=OWZlam85NTQ2ZWoz').finally(() => {
      this.resetClickCount('Joaquin Esau Mendoza Fajardo');
    });
  };

  openLinkAndrea = () => {
    // Abrir el enlace para Andrea
    Linking.openURL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sXdhNqV8WU4oK2inq1VMTT7cHOx5-PQ8RQ&s').finally(() => {
      this.resetClickCount('Andrea Elizabeth Cortes Garcia\n');
    });
  };

  resetClickCount = (name) => {
    this.setState((prevState) => {
      const updatedClickCounts = { ...prevState.clickCounts };
      updatedClickCounts[name] = 0; // Resetear contador de clics a 0
      return { clickCounts: updatedClickCounts };
    });
  };

  renderItem = ({ item }) => {
    const { clickCounts } = this.state;
    const { Nombre } = item;

    // Verificar si el contador de clics para este nombre ha alcanzado 5
    const shouldDisplayLinkEsau = Nombre === 'Joaquin Esau Mendoza Fajardo' && clickCounts[Nombre] >= 5;
    const shouldDisplayLinkAndrea = Nombre === 'Andrea Elizabeth Cortes Garcia\n' && clickCounts[Nombre] >= 5;

    return (
      <View style={styles.itemContainer}>
        {shouldDisplayLinkEsau ? (
          <TouchableOpacity onPress={this.openLinkEsau}>
            <Text style={styles.enlace}>{`Haz clic aquí para más información sobre Esau`}</Text>
          </TouchableOpacity>
        ) : shouldDisplayLinkAndrea ? (
          <TouchableOpacity onPress={this.openLinkAndrea}>
            <Text style={styles.enlace}>{`Haz clic aquí para más información sobre Andrea`}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {
            this.handleButtonPress(Nombre);
          }}>
            <Text style={styles.nombreBoton}>{Nombre}</Text>
          </TouchableOpacity>
        )}

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
  };

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
    borderColor: 'gainsboro',
    borderWidth: 2
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
  nombreBoton: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  enlace: {
    fontSize: 15,
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
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
