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
        title="2.1 Libros 000 al 900" 
        onPress={() => navigation.navigate('Acp2d1')} 
        imageSource={require('./fotos/l09.jpg')}
      />
      <MenuButton 
        title="2.2 Novedades" 
        onPress={() => navigation.navigate('Acp2d2')} 
        imageSource={require('./fotos/novedades.png')}
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
    paddingTop: '3%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    height: '11%',
    backgroundColor: 'white',
    marginVertical: '3%',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: '3%',
  },
  buttonImage: {
    height: '70%',
    width: '16%',
    borderRadius: 7,
  },
  buttonText: {
    flex: 1,
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: '5%',
    textAlign: 'left',
  },
  iconImage: {
    width: '10%',
    height: '50%',
  },
});

export default App;
