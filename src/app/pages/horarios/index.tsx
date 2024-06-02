import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // Certifique-se de que o arquivo styles.js esteja definido corretamente

const API_URL = 'http://192.168.1.73:3001/horarios'; // Verifique se o endereço IP e a porta estão corretos e acessíveis

export default function Horarios() {
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Função para buscar os horários na API
  const fetchHorarios = async () => {
    try {
      const response = await axios.get(API_URL);
      setHorarios(response.data);
      setLoading(false);
    } catch (error) {
      setError('Erro ao buscar os dados. Tente novamente mais tarde.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHorarios();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }
  
  return (
    <ScrollView>
      <View style={styles.container}>
        {horarios.map((horario) => (
          <Text key={horario.id_horario} style={styles.horarioText}>
             {horario.horario_partida}          x          {horario.horario_chegada}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}