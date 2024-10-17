import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

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
      <ScrollView style={{height:'100%', width:'100%', marginLeft:20}}>
      <MenuButton title="6.2.1 Colección de Biblias" onPress={() => navigation.navigate('Ahp6Acd1')} imageSource={require('./fotos/Libro4.jpg')}/>
      <MenuButton title="6.2.2 Colección de Thesaurus" onPress={() => navigation.navigate('Ahp6Acd2')} imageSource={require('./fotos/Libro3.jpg')}/>
      <MenuButton title="6.2.3 Colección de leyes de Indias" onPress={() => navigation.navigate('Ahp6Acd3')} imageSource={require('./fotos/Libro5.jpg')}/>
      <MenuButton title="6.2.4 Colección de Medicina" onPress={() => navigation.navigate('Ahp6Acd4')} imageSource={require('./fotos/craneo.jpg')}/>
      <MenuButton title="6.2.5 Colección de Música" onPress={() => navigation.navigate('Ahp6Acd5')} imageSource={require('./fotos/musica.jpg')}/>
      <MenuButton title="6.2.6 Colección de Testigos" onPress={() => navigation.navigate('Ahp6Acd6')} imageSource={require('./fotos/Antiguo21.png')}/>
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
    paddingTop:20
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
