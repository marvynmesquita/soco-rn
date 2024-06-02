import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({

     container: {
        flex: 1,
        backgroundColor:'#003b73',
        padding: 20,
    },
     logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
     welcomeText: {
         color: 'white',
         fontWeight: 'bold',
         fontSize: 24,
    },
     
     inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        marginBottom: 20,
        marginTop:15
    },
     iconContainer: {
        justifyContent: 'center',
    },
     input: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
       
    },
     forgotPasswordText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
       
    },
        button: {
        height:50,
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#a5fff8',
        marginTop:20
    },
    button1:{
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:20

    },
    
     buttonText: {
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
     buttonText1:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'

    },
});
export default Styles