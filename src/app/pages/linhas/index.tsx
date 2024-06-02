import React from 'react';

import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import{useNavigation} from "@react-navigation/native"

import styles from './styles'
const API_URL = 'https://soco-backend.onrender.com/linhas';

let listLinhas: any[] = [];

const buscaLinhas = () => {
  return fetch(API_URL)
   .then((response) => response.json())
    .then((data) => {
      listLinhas = data.map((linha: any) => {
        return (
          <TouchableOpacity key={linha._id} style={styles.button}>
            <Text>{linha.origem} - {linha.destino}</Text>
          </TouchableOpacity>
        );
      });;
    })
   .catch((error) => {
      console.error(error);
    });
}

buscaLinhas();

export default function Linhas() {
    const navigation= useNavigation()
    const handlePress = (buttonText: any) => {
    alert(`Você clicou no botão "${buttonText}"`);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {listLinhas}
    </View>
    </ScrollView>
  );
}