import React, { Component } from 'react'
import BottomTabNavigation from './BottomTabNavigation';
import { colors } from '../themes/Colors';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image } from "react-native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        // <Drawer.Navigator screenOptions={{headerShown : false}}>
        <Drawer.Navigator

      drawerContent={
        (props)=>{
            return (
                <SafeAreaView>
                    <View style={{
                        height: 200,
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.WHITE
                    }}>
                        {/* <Image
                          source={images.avatar}
                          style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            marginBottom: 12
                          }}
                        /> */}
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: colors.BLACK,
                            marginBottom: 6
                        }}>Isabella Joanna</Text>
                        <Text style={{
                            fontSize: 16,
                            color: colors.BLACK

                        }}>Product Designer</Text>
                    </View>
                    <DrawerItemList {...props} />
                </SafeAreaView>
            )
        }
      }
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.WHITE,
          width: 250,
        },
        headerStyle: {
          backgroundColor: colors.WHITE,
        },
        headerShown: false,
        headerTintColor: colors.BLACK,
        drawerLabelStyle: {
          color: colors.BLACK,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
            <Drawer.Screen name="Feed" sceenOptions={{drawerLabel : "Home",title :"HOme",headerShadowVisible:false}} title="Feed" component={BottomTabNavigation} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
