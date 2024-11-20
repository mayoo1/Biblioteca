import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: [],
      pagina: 0,
    };
  }

  componentDidMount() {
    this.fetchNoticias();
  }

  fetchNoticias = async () => {
    const { pagina } = this.state;
    try {
      const response = await fetch(`https://cuceimobile.space/Escuela/NoticiasBiblio.php?page=${pagina}`);
      const textData = await response.text();
      const noticias = this.parseNoticias(textData);
      this.setState({ noticias });
    } catch (error) {
      console.error('Error fetching noticias:', error);
    }
  };

  parseNoticias = (text) => {
    const regex = /Título:\s*(.*?)<br>Texto:\s*(.*?)<br>enlace:\s*(.*?)<br>Fecha:\s*(.*?)<br>Imagen:\s*(.*?)<br>/g;
    const noticias = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      noticias.push({
        Título: match[1],
        Texto: match[2],
        enlace: match[3],
        Fecha: match[4],
        Imagen: match[5] || 'Sin imagen',
      });
    }

    return noticias;
  };

  handleEnlacePress = (enlace) => {
    Linking.openURL(enlace).catch((err) => console.error('Error al abrir enlace:', err));
  };

  handleSiguiente = () => {
    this.setState(prevState => ({ pagina: prevState.pagina + 1 }), this.fetchNoticias);
  };

  handleAnterior = () => {
    this.setState(prevState => ({ pagina: Math.max(prevState.pagina - 1, 0) }), this.fetchNoticias);
  };

  renderNoticia = ({ item }) => (
    <View style={styles.noticiaContainer}>
      <Text style={styles.title}>{item.Título}</Text>
      <Text style={styles.tex}>{item.Texto}</Text>
      <Text style={styles.fech}>{item.Fecha}</Text>
      {item.Imagen !== 'Sin imagen' ? (
        <Image
          source={{ uri: item.Imagen }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : null}
      <TouchableOpacity onPress={() => this.handleEnlacePress(item.enlace)} style={styles.button}>
        <Text style={styles.buttonText}>Ver más</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { noticias, pagina } = this.state;
    return (
      <View style={styles.container}>
        {noticias.length > 0 ? (
          <FlatList
            data={noticias}
            renderItem={this.renderNoticia}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={{color:'black'}}>CARGANDO NOTICIAS...</Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handleAnterior} style={styles.navButton} disabled={pagina === 0}>
            <Text style={styles.buttonText}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleSiguiente} style={styles.navButton}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noticiaContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: 'gray'
  },
  title: {
    color: 'darkred',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'justify',
    marginBottom: 5,
    borderWidth: 0,
    borderColor: 'gray',
  },
  tex: {
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'justify',
    marginBottom: 5,
    borderWidth: 0,
    borderColor: 'gray',
    color:'black'
  },
  fech: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 15,
    textAlign: 'justify',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  button: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
});
