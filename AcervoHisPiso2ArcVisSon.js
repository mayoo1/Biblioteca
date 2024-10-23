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
        title="Colección Radio Universidad De Guadalajara" 
        onPress={() => navigation.navigate('Ahp2avscrudg')} 
        imageSource={require('./fotos/Libros2.png')}
      />
      <MenuButton 
        title="Colección Arturo Xavier González Santana" 
        onPress={() => navigation.navigate('Ahcaxg')} 
        imageSource={require('./fotos/persona4.jpg')}
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
    marginVertical: '2%',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: '3%',
  },
  buttonImage: {
    height: '80%',
    width: '17%',
    borderRadius: 7,
  },
  buttonText: {
    flex: 1,
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: '4%',
    textAlign: 'left',
  },
  iconImage: {
    width: '5%',
    height: '50%',
  },
});

export default App;
