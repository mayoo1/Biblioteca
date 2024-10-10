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
        title="1.1.1 Ramo Civil. Real Audiencia" 
        onPress={() => navigation.navigate('Doc1')} 
        imageSource={require('./fotos/Antiguo2.jpg')}
      />
      <MenuButton 
        title="1.1.2 Ramo Criminal. Real Audiencia" 
        onPress={() => navigation.navigate('Doc2')} 
        imageSource={require('./fotos/Antiguo3.jpg')}
      />
      <MenuButton 
        title="1.1.3 Ramo Fiscal. Real Audiencia" 
        onPress={() => navigation.navigate('Doc3')} 
        imageSource={require('./fotos/Antiguo4.jpg')}
      />
      <MenuButton 
        title="1.1.4 Bienes de difuntos. Real Audiencia" 
        onPress={() => navigation.navigate('Doc4')} 
        imageSource={require('./fotos/Antiguo6.jpg')}
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
