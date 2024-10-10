import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.button}>
    <Image source={imageSource} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{title}</Text>
    <Image source={require('./fotos/ico1.png')} style={styles.iconImage} />
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MenuButton 
        title="1.1 Archivo de la Real Audiencia de la Nueva Galicia" 
        onPress={() => navigation.navigate('Piso1')} 
        imageSource={require('./fotos/GaleriaHis3.png')}
      />
      <MenuButton 
        title="1.2 Supremo Tribunal de Justicia del Estado de Jalisco" 
        onPress={() => navigation.navigate('Ahp1A2')} 
        imageSource={require('./fotos/Antiguo3.jpg')}
      />
      <MenuButton 
        title="1.3 Direccion General de Instruccion Publica" 
        onPress={() => navigation.navigate('Ahp1A3')} 
        imageSource={require('./fotos/Antiguo4.jpg')}
      />
      <MenuButton 
        title="1.4 Hospital" 
        onPress={() => navigation.navigate('Ahp1A4')} 
        imageSource={require('./fotos/Antiguo6.jpg')}
      />
      <MenuButton 
        title="1.5 Archivos Particulares" 
        onPress={() => navigation.navigate('Ahp1A5')} 
        imageSource={require('./fotos/Antiguo5.jpg')}
      />
      <MenuButton 
        title="1.6 Microfilmes" 
        onPress={() => navigation.navigate('Ahp1A6')} 
        imageSource={require('./fotos/micro.jpg')}
      />
      <MenuButton 
        title="1.7 Mapoteca" 
        onPress={() => navigation.navigate('Ahp1A7')} 
        imageSource={require('./fotos/GaleriaHis5.png')}
      />
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    height: 70,
    backgroundColor: 'white',
    marginVertical: 10,
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
