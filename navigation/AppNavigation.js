import React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import Meals from '../screens/Meals';
import MealDetails from '../screens/MealDetails';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="Home" component={DrawerNavigation} />
                <Stack.Screen name="Meals" component={Meals} />
                <Stack.Screen name="MealDetials" component={MealDetails} />
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default AppNavigation;