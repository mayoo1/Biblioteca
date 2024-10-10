import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const services = [
  { title: 'Atención a Usuarios', image: require('./fotos/Atencion.jpeg'), navigateTo: 'Sa' },
  { title: 'Biblioteca Virtual', image: require('./fotos/BibliotecaVirtual.jpg'), link: 'http://virtual.bpej.udg.mx/' },
  { title: 'Listado de Servicios', image: require('./fotos/Auditorio.png'), navigateTo: 'Sl' },
  { title: 'Catálogo en Línea', image: require('./fotos/Libreria4.jpg'), navigateTo: 'Sc' },
  { title: 'Recursos Libres en Internet', image: require('./fotos/Libros2.png'), navigateTo: 'Sr' },
  { title: 'Formato de Registro Biblioteca Histórica Para Investigadores', image: null, link: 'http://virtual.bpej.udg.mx/'}
];

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.button}>
    <View style={styles.buttonContent}>
      {imageSource && (
        <Image source={imageSource} style={styles.buttonImage} />
      )}
      <Text style={styles.buttonText}>{title}</Text>
      <Image source={require('./fotos/ico1.png')} style={styles.iconImage} />
    </View>
  </TouchableOpacity>
);

const ServicesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <MenuButton
            title={item.title}
            onPress={() => {
              if (item.link) {
                Linking.openURL(item.link);
              } else if (item.navigateTo) {
                navigation.navigate(item.navigateTo);
              }
            }}
            imageSource={item.image}
          />
        )}
        contentContainerStyle={{ paddingVertical: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'gainsboro'
  },
  button: {
    borderColor: 'blue',
    width: '95%',
    height: 70,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    position: 'relative'
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  buttonImage: {
    height: 50,
    width: 50,
    borderRadius: 7,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
});

export default ServicesScreen;
