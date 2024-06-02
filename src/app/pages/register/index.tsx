import { View, Text,} from "react-native"
import {TouchableOpacity, TextInput } from "react-native"
import { useNavigation } from "expo-router"
import React, { useState } from 'react'
import * as Animatable from "react-native-animatable"
import {FontAwesome, Zocial,Entypo  } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import Styles from "./styles"


export default function Register() {
    const navigation= useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [input, setInput] = useState('')
    const [inputConfirm, setInputConfirm] = useState('')
    const [hidPass, setHidPass]= useState(true)
    const cadastro= ()=> {
        alert("Tudo ok")
        //alert(name)
        //alert(email)
        //alert(input)
        //alert(inputConfirm)

    }
    

    return(

        
    <View style={Styles.container}>
    <View  style={Styles.logoContainer}>
                
        <Animatable.Image 
        animation= "flipInY"
        duration={1200}
        source={require( "@/src/assets/logo-white.png")}/> 
   
        <Animatable.Image 
        animation= "bounceInRight"
        duration={1100}
        source={require( "@/src/assets/logo-text-white.png")}/>
    </View>
   
            

    <View style={Styles.inputContainer}>

    <TouchableOpacity  style={Styles.iconContainer}>  
        <FontAwesome name="user" size={24} color="white" />
        </TouchableOpacity>

        <TextInput style={Styles.input}
        placeholder="Nome" 
        placeholderTextColor="#A3E635"
        autoCorrect={false}
         onChangeText={(text) => setName(text)}
        />
                
    </View>
                
    <View style={Styles.inputContainer}>
                
    <TouchableOpacity style={Styles.iconContainer}>  
        <Zocial name="email" size={24} color="white" />
    </TouchableOpacity>
    
        <TextInput 
            style={Styles.input}
            placeholder='Email'
            placeholderTextColor='#A3E635' 
            autoCorrect={false}
            onChangeText={Text=>setEmail(Text)}
            />
    </View>

     <View style={Styles.inputContainer}>

    <TouchableOpacity style={Styles.iconContainer}>  
        <Entypo name="lock" size={24} color="white" />
    </TouchableOpacity>

        <TextInput 
            style={Styles.input}
            placeholder="Senha" 
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
            
    <View style={Styles.inputContainer}>

    <TouchableOpacity style={Styles.iconContainer}>  
        <Entypo name="lock" size={24} color="white" />
    </TouchableOpacity>

        <TextInput  
            style={Styles.input}
            placeholder="Confirmar senha" 
            secureTextEntry={hidPass}
            placeholderTextColor="#A3E635"
            onChangeText={(text) => setInputConfirm(text)}
            value={inputConfirm}
            />
    <TouchableOpacity onPress={() => setHidPass(!hidPass) } >
        {hidPass?
         <Ionicons name= "eye" color= "white" size= {25}/>
            :
        <Ionicons name="eye-off" color= "white" size= {25} />
         }
                                
    </TouchableOpacity>
    </View>
            
    <TouchableOpacity
        style={Styles.button}  
        onPress={() =>cadastro ()}
        //onPress={() => navigation.navigate("login")}   
        >
        <Text style={Styles.buttonText}>Cadastrar</Text>
                    
    </TouchableOpacity>     
    </View>

        
    )
}