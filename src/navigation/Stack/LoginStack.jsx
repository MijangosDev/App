import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/Auth/Screens/Login";
import CreateAccount from "../../modules/Auth/Screens/CreateAccount";





const Stack = createStackNavigator();

export default function LoginsStack() {
    
    return (
        <Stack.Navigator initialRouteName = "LoginStack">
            <Stack.Screen 
            name="LoginStack"
            component={Login}
            options={{title: "Sign In"}}
            />
            <Stack.Screen
            name="CreateAccountStack"
            component={CreateAccount}
            options={{title: "Create Account"}}
            />
            </Stack.Navigator>
    )
}