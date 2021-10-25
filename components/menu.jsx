import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebase from "./firebase";
import Users from './users'
import About from "./about";
import Landing from "./landing";
import SignIn from "./signIn";
import SignUp from "./register";

const Menu = () =>{
    const Stack = createNativeStackNavigator()
    const uid = localStorage.getItem('userid')
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'landing'} screenOptions={{headerShown:true}} >
                { uid ? (
                    <Stack.Screen name={'about'} component={About}/>
                ):(
                    <>
                    <Stack.Screen name={'signIn'} component={SignIn} />
                    <Stack.Screen name={'register'} component={SignUp} />
                    <Stack.Screen name = {'landing'} component={Landing}/>
                    <Stack.Screen name={'about'} component={About}/>
                    </>                    
                )}
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
export default Menu