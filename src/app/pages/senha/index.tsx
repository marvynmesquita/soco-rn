import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import styles from './styles';


    export const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
  
    const handleForgotPassword = () => {
      // Aqui você pode adicionar a lógica para enviar um e-mail de redefinição de senha para o usuário
      // Neste exemplo, apenas exibimos um alerta com o e-mail fornecido
      Alert.alert('Esqueceu sua senha', `Um e-mail de redefinição de senha foi enviado para ${email}`);
      setEmail(''); // Limpa o campo de e-mail após enviar
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Esqueceu sua senha?</Text>
        <Text style={styles.description}>Digite seu e-mail abaixo para redefinir sua senha.</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor='#A3E635' 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    )
  }
