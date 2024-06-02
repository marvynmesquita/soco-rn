import React from 'react';
import { View, Image, Text } from 'react-native'
import styles from './styles'

export default function Igreja(){
  return (
    <View style={styles.container}>
      <Image
        source={require('@/src/assets/igreja1.jpg')} 
        style={styles.image}
        resizeMode="cover" 
      />
      <Text style={styles.text}>
        A Igreja Nossa Senhora de Nazareth, é um ponto turístico emblemático da região.
        Situada no alto de uma colina, esta bela igreja católica se destaca não apenas
        por sua arquitetura imponente, mas também por sua importância
        histórica e religiosa para a comunidade local.

        Construída em homenagem à padroeira da cidade, Nossa Senhora de Nazareth,
        a igreja oferece aos visitantes uma vista deslumbrante da paisagem ao redor,
        proporcionando momentos de contemplação e tranquilidade. Sua atmosfera serena 
        e sua presença marcante na paisagem de Saquarema atraem tanto fiéis quanto
        turistas em busca de beleza e espiritualidade.
      </Text>

      <Text style={styles.text1}>
        Linhas que passam no local:
      </Text>
      <Text style={styles.text1}>Bacaxa x Saquarema</Text>
      <Text style={styles.text1}>bacaxa x Jacone</Text>

    </View>
  );
};
