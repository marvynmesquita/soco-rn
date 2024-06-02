import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#003b73',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
  horarioText: {
    fontSize: 18,
    padding: 15,
    backgroundColor:'#a5fff8',
    marginVertical: 5,
    borderRadius: 5,
  },
});

  export default styles;