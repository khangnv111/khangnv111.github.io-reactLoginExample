import React from "react";
import { Easing, Animated, TouchableOpacity, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Block } from "galio-framework";

// screens
import Home from "../screens/HomeScreen";  
//import Profile from "../screens/Profile";
// import Register from "../screens/Register";
import Elements from "../screens/Elements";
// import Articles from "../screens/Articles";
import LogoutScreen from '../screens/LogoutScreen';
// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
    transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const scale = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [4, 1, 1]
        });
        const opacity = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [0, 1, 1]
        });
        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0]
        });

        const scaleWithOpacity = { opacity };
        const screenName = "Search";

        if (
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps &&
                screenName === prevTransitionProps.scene.route.routeName)
        ) {
            return scaleWithOpacity;
        }
        return { transform: [{ translateX }] };
    }
});

const ElementsStack = createStackNavigator({
    Elements: {
        screen: Elements,
        navigationOptions: ({ navigation }) => ({
            header: () => (
                <Header title="Elements" navigation={navigation} />
            ),
        })
    }
}, {
    defaultNavigationOptions: {
        cardStyle: {
            backgroundColor: "#F8F9FE"
        },
        transitionConfig
    }

});

// const ArticlesStack = createStackNavigator({
//     Articles: {
//         screen: Articles,
//         navigationOptions: ({ navigation }) => ({
//             header: <Header title="Articles" navigation={navigation} />
//         })
//     }
// }, {
//     cardStyle: {
//         backgroundColor: "#F8F9FE"
//     },
//     transitionConfig
// });

// const ProfileStack = createStackNavigator(
//     {
//         Profile: {
//             screen: Profile,
//             navigationOptions: ({ navigation }) => ({
//                 header: () => (
//                     <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
//                 ),
//                 headerTransparent: true
//             })
//         }
//     },
//     {
//         defaultNavigationOptions: {
//             cardStyle: { backgroundColor: "#FFFFFF" },
//             transitionConfig
//         }

//     }
// );

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                header: () => (
                    <Header search options title="Home" navigation={navigation} />
                )
            })
        },
        // Pro: {
        //     screen: Pro,
        //     navigationOptions: ({ navigation }) => ({
        //         header: (
        //             <Header left={<Block />} white transparent title="" navigation={navigation} />
        //         ),
        //         headerTransparent: true
        //     })
        // }
    },
    {
        defaultNavigationOptions: {
            cardStyle: {
                backgroundColor: "#F8F9FE"
            },
            transitionConfig
        }

    }
);
// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh
const AppStack = createDrawerNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: navOpt => ({
                drawerLabel: ({ focused }) => (
                    <DrawerItem focused={focused} title="Home" />
                )
            })
        },
        Elements: {
            screen: ElementsStack,
            navigationOptions: navOpt => ({
                drawerLabel: ({ focused }) => (
                    <DrawerItem focused={focused} screen="Elements" title="Elements" />
                )
            })
        },
        // Logout: {
        //     screen: LogoutScreen,
        //     navigationOptions: navOpt => ({
        //         drawerLabel: ({ focused }) => (
        //             <DrawerItem focused={focused} screen="Articles" title="Logout"/> 
        //         )
        //     })
        // },
    },
    Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
