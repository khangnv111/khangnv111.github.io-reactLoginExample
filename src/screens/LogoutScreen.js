import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function LogoutScreen(){
    return(
        <TouchableOpacity onPress={() => {console.log("Logout")}}>
            <Text>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

});