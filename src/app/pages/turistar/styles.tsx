import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#003b73',
   
  },
  button: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    
  },

  content: {
    flexDirection: 'row', 
    alignItems: 'center',
    top:20,
    
    
  },

  Text:{
    fontWeight:'bold',
    color:'white',
    fontSize: 16, 

  },
  Text1:{
    top:30,
    fontWeight:'bold',
    color:'white',
    fontSize: 20, 
    textAlign:'center'

  },

  image: {
    top:10,
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

  export default styles;