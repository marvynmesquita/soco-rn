import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({

     container: {
        flex: 1,
        backgroundColor:'#003b73',   
        padding: 20
    },
     logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    button: {
       height:50,
       borderRadius:10,
       justifyContent:'center',
       alignContent:'center',
       backgroundColor:'#a5fff8',
       marginTop:15
    },
    
     buttonText: {
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
     
});
export default Styles;