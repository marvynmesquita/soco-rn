import React from "react"
import { useState } from "react"
import { View, Text, TextInput,TouchableOpacity} from "react-native"

import * as Animatable from "react-native-animatable"
import{useNavigation} from "@react-navigation/native"

import { Ionicons, Entypo,Zocial } from '@expo/vector-icons'

import Styles from "./styles"

export default function Login(){
    const navigation= useNavigation()
    const [email, setEmail]= useState("")
    const [input, setInput]= useState("")
    const [hidPass, setHidPass]= useState(true)

    return(
       
    <View style={Styles.container}>

<View  
        style={Styles.logoContainer}>
        <Animatable.Image 
        animation= "bounceInRight"
        duration={1100}
        source={require( "@/src/assets/logo-text-white.png")}/>

    <Text style={Styles.welcomeText}>Seja bem vindo(a) </Text>

    </View >

    <View style={Styles.inputContainer}>
    
    <TouchableOpacity style={Styles.iconContainer}>  
         <Zocial name="email" size={24} color="white" />
    </TouchableOpacity>

    <TextInput 
        style={Styles.input}
        placeholder='E-mail'
        placeholderTextColor='#A3E635' 
        autoCorrect={false}
        onChangeText={Text=>setEmail(Text)}
         />
    </View>

    <View style={Styles.inputContainer}>

<TouchableOpacity style={Styles.iconContainer}>  
    <Entypo name="lock" size={24} color="white" />
</TouchableOpacity>

<TextInput style={Styles.input}
    placeholder="Sua senha" 
    secureTextEntry={hidPass}
    placeholderTextColor="#A3E635"
    onChangeText={(text) => setInput(text)}
    value={input}
    />
<TouchableOpacity onPress={() => setHidPass(!hidPass) } >
    {hidPass?
    
    <Ionicons name= "eye" color= "white" size= {25}/>
    :
    <Ionicons name="eye-off" color= "white" size= {25} />
    }
     
</TouchableOpacity>
</View>  

<TouchableOpacity onPress={() => navigation.navigate("senha")}>
        <Text style={Styles.forgotPasswordText}>Esqueceu sua senha?</Text>
    </TouchableOpacity>
                
                                  
    <TouchableOpacity 

        style={Styles.button}
        onPress={() => navigation.navigate("principal")}>
        <Text style={Styles.buttonText}>Entrar</Text>
                              
    </TouchableOpacity>

    <TouchableOpacity 
        onPress={() => navigation.navigate("register")}
        style={Styles.button1}>
                
        <Text style={Styles.buttonText1}>Cadastre-se</Text>

    </TouchableOpacity> 

       
        </View>
    )
}