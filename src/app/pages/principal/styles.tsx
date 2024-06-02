import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#003b73',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width:380,
      height:50,
      justifyContent:'center',
      borderRadius:10,
      backgroundColor:'#a5fff8',
      marginTop:20
  },
  buttonText: {
    color:'black',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
},

    gif: {
      width: 200,
      height: 200,
      marginVertical: 10,
    },

  });

  export default styles;