import React from "react"
import { View, Text,Image,} from "react-native"
import {TouchableOpacity} from "react-native"
import * as Animatable from "react-native-animatable"
import{useNavigation} from "@react-navigation/native"
import Styles from "./styles"


export default function Welcome (){
    const navigation= useNavigation()

    return(

    <View  style={Styles.contanier}>

    <View style={Styles.cotanierImage} >
                
        <Animatable.Image 
            animation= "flipInY"
            duration={1200}
            source={require( "@/src/assets/logo-white.png")}/> 

        <Animatable.Image 
            animation= "bounceInRight"
            duration={1100}
            source={require( "@/src/assets/logo-text-white.png")}/>
        </View>

        <View style={Styles.contanierPosicion} >

            <Text style={Styles.contenierText1}>Seu guia de transporte </Text>

            <Text style={Styles.contenierText2}>Faça o login para começar </Text>

        </View>
        <View  style={Styles.contanierButton} >
                
        <TouchableOpacity 
            onPress={() => navigation.navigate("login")}
            style={Styles.contanierButton1}>
                
                <Text style={Styles.textButton}>Acessar</Text>

        </TouchableOpacity>

         </View>
        </View>
        

    )

}

