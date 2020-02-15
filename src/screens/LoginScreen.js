import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

export default function LoginScreen({navigation}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Block flex middle>
                <StatusBar hidden />
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width, height, zIndex: 1 }}
                >
                    <Block flex middle>
                        <Block style={styles.registerContainer}>

                            <Block flex>
                                <Block flex={0.17} middle>
                                    <Text color="#8898AA" size={12}>
                                        Sign In You Account
                            </Text>
                                </Block>
                                <Block flex center>
                                    <KeyboardAvoidingView
                                        style={{ flex: 1 }}
                                        behavior="padding"
                                        enabled
                                    >

                                        <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                                            <Input
                                                borderless
                                                placeholder="Email"
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                                iconContent={
                                                    <Icon
                                                        size={16}
                                                        color={argonTheme.COLORS.ICON}
                                                        name="ic_mail_24px"
                                                        family="ArgonExtra"
                                                        style={styles.inputIcons}
                                                    />
                                                }
                                            />
                                        </Block>
                                        <Block width={width * 0.8}>
                                            <Input
                                                password
                                                borderless
                                                placeholder="Password"
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                                iconContent={
                                                    <Icon
                                                        size={16}
                                                        color={argonTheme.COLORS.ICON}
                                                        name="padlock-unlocked"
                                                        family="ArgonExtra"
                                                        style={styles.inputIcons}
                                                    />
                                                }
                                            />
                                        </Block>
                                        <Block row width={width * 0.75}>
                                            <Text>I dont have account</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                                <Text style={{ color: 'blue', paddingLeft: 15 }}>create new account</Text>
                                            </TouchableOpacity>

                                        </Block>
                                        <Block middle>
                                            <Button color="primary" style={styles.createButton}>
                                                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                    SIGN IN
                                                </Text>
                                            </Button>
                                        </Block>
                                    </KeyboardAvoidingView>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </ImageBackground>
            </Block>
        </TouchableWithoutFeedback>

    );
};

LoginScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
}

const styles = StyleSheet.create({
    registerContainer: {
        width: width * 0.9,
        height: height * 0.78,
        backgroundColor: "#F4F5F7",
        borderRadius: 4,
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden",
        //flex: 1
    },
    socialConnect: {
        backgroundColor: argonTheme.COLORS.WHITE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#8898AA"
    },
    socialButtons: {
        width: 120,
        height: 40,
        backgroundColor: "#fff",
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1
    },
    socialTextButtons: {
        color: argonTheme.COLORS.PRIMARY,
        fontWeight: "800",
        fontSize: 14
    },
    inputIcons: {
        marginRight: 12
    },
    passwordCheck: {
        paddingLeft: 15,
        paddingTop: 13,
        paddingBottom: 30
    },
    createButton: {
        width: width * 0.5,
        marginTop: 25
    }
}); 
