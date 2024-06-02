import React from 'react';
import { View, TouchableOpacity, Image,Text } from 'react-native'
import{useNavigation} from "@react-navigation/native"
import styles from './styles'

export default function Turistar(){
  const navigation= useNavigation()
  return (
    
    <View style={styles.container}>

   <Text style={styles.Text1}> Conheça nossos Pontos turisticos</Text>
    <View  style={styles.content}>
    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate("igreja")}>
      <Image
        source={require('@/src/assets/igreja.png')} 
        style={styles.image}
      />
    </TouchableOpacity>
    <Text style={styles.Text}>Igreja Nossa Senhora De Nazareth</Text>
    </View>
    
    <View  style={styles.content}>
    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate("mirante")} >
      <Image
        source={require('@/src/assets/mirarante.jpg')}
        style={styles.image}
      />
    </TouchableOpacity>
    <Text style={styles.Text}>Mirante do Morro da Cruz</Text>
    </View>

  </View>
);
};
