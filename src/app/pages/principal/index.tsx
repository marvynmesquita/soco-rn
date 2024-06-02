import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import{useNavigation} from "@react-navigation/native"
import styles from './styles'

export default function Principal() {
  const navigation= useNavigation()
  return (
    <View 
    style={styles.container}>

        <Image 
            source={require( "@/src/assets/logo-white.png")}
            style={styles.gif}
            />

    
        <Image
        source={require('@/src/assets/onibus.gif')} 
        style={styles.gif}
      />

      <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate("linhas")}
       >
        <Text style={styles.buttonText}>Linhas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate("horarios")}
       >
        <Text style={styles.buttonText}>Horários</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate("turistar")}>
        <Text style={styles.buttonText}>Quer turistar?</Text>
      </TouchableOpacity>

    </View>
  );
};