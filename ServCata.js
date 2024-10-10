import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default class ServCata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [
        {
          section: 'Catálogo Biblioteca',
          items: [
            { title: 'Consultar el Catálogo General (Aleph)', description: '', link: 'https://example.com/catalogo-general' },
            { title: 'Colecciones Biblioteca Histórica', description: '', link: 'https://example.com/colecciones' },
            { title: 'Consultar el catálogo Archivos Visuales y Sonoros', description: '', link: 'https://example.com/archivos' },
            { title: 'Recursos electrónicos de acceso libre', description: '', link: '' },
          ],
        },
      ],
    };
  }

  handleLinkPress = (link) => {
    Linking.openURL(link);
  };

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => this.handleLinkPress(item.link)}>
        <Text style={styles.link}>{item.title}</Text>
      </TouchableOpacity>
      {item.description ? (
        <Text style={styles.description}>{`: ${item.description}`}</Text>
      ) : null}
    </View>
  );

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require('./fotos/Libreria4.jpg')} style={styles.headerImage} />
          <TouchableOpacity onPress={() => navigation.navigate('Sr')}>
            <Text style={styles.headerText}>Catálogo General de la Biblioteca</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.resources}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionHeader}>{item.section}</Text>
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
    backgroundColor: '#eeeeee',
  },
  headerContainer: {
    height: '30%',
    width: '95%',
    backgroundColor: '#7b0000',
    marginLeft: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  headerImage: {
    borderColor: 'white',
    borderWidth: 0,
    height: '60%',
    width: '75%',
    borderRadius: 7,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
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
    marginTop:10
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkred',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  link: {
    fontSize: 16,
    color: '#e7522e',
    marginRight: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  innerList: {
    paddingLeft: 10,
  },
});
