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
        title="4.1 Publicaciones Seriadas de Jalisco (Del S.XIX hasta 1982)" 
        onPress={() => navigation.navigate('Ahp41')} 
        imageSource={require('./fotos/Libreria10.jpg')}
      />
      <MenuButton 
        title="Colección Francisco Navarro" 
        onPress={() => navigation.navigate('Ahcfn')} 
        imageSource={require('./fotos/cpi.png')}
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
    height: '10%',
    backgroundColor: 'white',
    marginVertical: '3%',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: '2%',
  },
  buttonImage: {
    height: '78%',
    width: '15%',
    borderRadius: 7,
  },
  buttonText: {
    flex: 1,
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: '3%',
    textAlign: 'left',
    borderRight: '3%'
  },
  iconImage: {
    width: '5%',
    height: '50%',
  },
});

export default App;
