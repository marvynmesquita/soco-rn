import React from 'react';
import { View, Image, Text } from 'react-native'
import styles from './styles'

export default function Mirante(){
  return (
    <View style={styles.container}>
      <Image
        source={require('@/src/assets/mirante1.jpg')} 
        style={styles.image}
        resizeMode="cover" 
      />
      <Text style={styles.text}>
      O Mirante do Morro da Cruz, em Saquarema, é um ponto turístico deslumbrante 
      que oferece uma vista panorâmica incrível da cidade e de suas paisagens naturais
      envolventes. Localizado no alto de uma colina, o mirante proporciona aos 
      visitantes uma experiência única de contemplação e conexão com a natureza.

      Do Mirante do Morro da Cruz, é possível apreciar uma vista deslumbrante da
      extensa faixa litorânea de Saquarema, incluindo suas praias de areias douradas
      e o vasto oceano Atlântico. Além disso, a paisagem verdejante e exuberante 
      da região, composta por vegetação nativa e montanhas ondulantes, completa 
      o cenário magnífico que se estende diante dos olhos dos visitantes.
      </Text>

      <Text style={styles.text1}>
        Linhas que passam no local:
      </Text>
      <Text style={styles.text1}>Bacaxa x Saquarema</Text>
      <Text style={styles.text1}>bacaxa x Jacone</Text>

    </View>
  );
};
