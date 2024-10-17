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
        title="6.1 Tesoros Bibliográficos" 
        onPress={() => navigation.navigate('Ahp6Te')} 
        imageSource={require('./fotos/GaleriaHis4.png')}
      />
      <MenuButton 
        title="6.2 Acervo Especial" 
        onPress={() => navigation.navigate('Ahp6Ac')} 
        imageSource={require('./fotos/craneo.jpg')}
      />
      <MenuButton 
        title="6.3 Obras Bibliográficas editadas entre los Siglos XVII y XX" 
        onPress={() => navigation.navigate('Ahp6Obr')} 
        imageSource={require('./fotos/Libros1.jpg')}
      />
      <MenuButton 
        title="6.4 Sala Jalisciense" 
        onPress={() => navigation.navigate('Ahp6Sal')} 
        imageSource={require('./fotos/Libreria.jpg')}
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
