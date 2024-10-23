import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
    <Image source={imageSource} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{title}</Text>
    <Image source={require('./fotos/ico1.png')} style={styles.iconImage} />
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <MenuButton title="4.1 Fondo de Jalisco" onPress={() => navigation.navigate('Acp4d1')} imageSource={require('./fotos/fj.png')} />
        <MenuButton title="4.2 Colección Universidad de Guadalajara" onPress={() => navigation.navigate('Acp4d2')} imageSource={require('./fotos/udg.png')} />
        <MenuButton title="4.3 Biblioteca Ignacio L. Vallarta" onPress={() => navigation.navigate('Acp4d3')} imageSource={require('./fotos/biblioilv.png')} />
        <MenuButton title="4.4 Fondo Enrique Estrada Faudón" onPress={() => navigation.navigate('Acp4d4')} imageSource={require('./fotos/persona5.jpg')} />
        <MenuButton title="4.5 Fondo Biodiversidad Dr. Enrique Beltrán" onPress={() => navigation.navigate('Acp4d5')} imageSource={require('./fotos/persona6.jpg')} />
        <MenuButton title="4.6 Hemeroteca Especializada sobre la Universidad de Guadalajara" onPress={() => navigation.navigate('Acp4d6')} imageSource={require('./fotos/Logo17.png')} />
        <MenuButton title="4.7 Mediateca, Documentos Sonoros y Cine" onPress={() => navigation.navigate('Acp4d7')} imageSource={require('./fotos/persona7.jpg')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.95, // 95% of the screen width
    height: height * 0.1, // Adjust height based on screen height
    backgroundColor: 'white',
    marginVertical: 7,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonImage: {
    height: 50,
    width: 50,
    borderRadius: 7,
  },
  buttonText: {
    flex: 1,
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: 20,
    textAlign: 'left',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
});

export default App;

