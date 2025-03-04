import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "../../../modules/Products/Products";


const Stack = createStackNavigator();

export default function ProductsStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="ProductsStack" 
                component={Products} 
                options={{ title: "Products" }}
            />
        </Stack.Navigator>
    );
}