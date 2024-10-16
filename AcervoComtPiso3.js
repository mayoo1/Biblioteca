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
      <MenuButton title="3.1 Hemeroteca Contemporánea" onPress={() => navigation.navigate('Acp3d1')} imageSource={require('./fotos/hc.jpg')}/>
      <MenuButton title="3.2 Area de Tiflotecnia" onPress={() => navigation.navigate('Acp3d2')} imageSource={require('./fotos/at.png')}/>
      <MenuButton title="3.3 Colección de Pueblos Indígenas" onPress={() => navigation.navigate('Acp3d3')} imageSource={require('./fotos/cpi.png')}/>
      <MenuButton title="3.4 Modulo INEGI" onPress={() => navigation.navigate('Acp3d4')} imageSource={require('./fotos/inegi.png')}/>
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
