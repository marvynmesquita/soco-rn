import{createNativeStackNavigator} from "@react-navigation/native-stack"
import { View,StatusBar } from "react-native"

import Login from "./pages/login/index"
import Welcome from "./pages/welcome"
import Register from "./pages/register"
import { ForgotPasswordScreen } from "./pages/senha"
import Turistar from "./pages/turistar"
import Linhas from "./pages/linhas"
import Principal from "./pages/principal"
import Igreja from "./pages/pontoTuristico/igreja"
import Mirante from "./pages/pontoTuristico/mirante"
import Horarios from "./pages/horarios"



const stack = createNativeStackNavigator()

export default function App(){
    return(
        
        <View style={{ flex:1}}>
        
    <stack.Navigator>
        
        <stack.Screen
            name="welcome"
            component={Welcome}
            options={{headerShown: false}} 
            />

        <stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}} 
            />

        <stack.Screen
            name="register"
            component={Register}
            options={{headerShown: false}} 
            />

        <stack.Screen
            name="linhas"
            component={Linhas}
            options={{headerShown: false}} 
            />

<stack.Screen
            name="principal"
            component={Principal}
            options={{headerShown: false}} 
            />

        <stack.Screen
            name="horarios"
            component={Horarios}
            options={{headerShown: false}} 
            /> 

        <stack.Screen
            name="senha"
            component={ForgotPasswordScreen }
            options={{headerShown: false}} 
            /> 

        <stack.Screen
            name="turistar"
            component={Turistar}
            options={{headerShown: false}} 
            /> 
            <stack.Screen
            name="igreja"
            component={Igreja}
            options={{headerShown: false}} 
            /> 

        <stack.Screen
            name="mirante"
            component={Mirante}
            options={{headerShown: false}} 
            /> 
       

    </stack.Navigator>
    </View>

    
     
  
    )
}