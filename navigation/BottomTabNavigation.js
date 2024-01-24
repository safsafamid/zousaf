import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../themes/Colors';
import HomeScreen from '../screens/Home';
import MyCart from '../screens/MyCart';
import Meals from '../screens/Meals';
import CategorieScreen from '../screens/Categorie';


const Tab = createBottomTabNavigator();

export class BottomTabNavigation extends Component {
    render() {
        return (
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: colors.ORANGE,
                tabBarInactiveTintColor: colors.DARKGRAY,
            }}>
                <Tab.Screen name="Main" component={HomeScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }} />
                <Tab.Screen name="CategorieScreen" component={CategorieScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="clipboard-list" size={size} color={color} />
                    ),
                }} />
                <Tab.Screen name="Meals" component={Meals} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="food" size={size} color={color} />
                    ),
                }} />
                <Tab.Screen name="Cart" component={MyCart} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping" size={size} color={color} />
                    ),
                }} />
                {/* <Tab.Screen name="About" component={About} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="storefront" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Cart" component={Cart} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="basket" color={color} size={size} />
                    ),
                }} /> */}
                {/* <Tab.Screen name="Profile" component={ProductScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="account-circle" color={color} size={size} />
                    ),
                }} /> */}
            </Tab.Navigator>
        )
    }
}

export default BottomTabNavigation
