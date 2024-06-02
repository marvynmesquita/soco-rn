import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      alignItems: 'center',
      backgroundColor: '#003b73',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'white'
    },
    button: {
      backgroundColor: '#a5fff8',
      padding: 10,
      borderRadius: 10,
      marginTop: 20,
      width: 380,
      alignItems: 'center',
      
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },

    button1: {
      height:50,
      justifyContent:'center',
      borderRadius:10,
      backgroundColor:'#a5fff8',
      marginTop:20
  },
  
  buttonText1: {
    color:'black',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  },
  });

  export default styles;