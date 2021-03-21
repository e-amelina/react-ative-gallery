import { Text, View, StyleSheet,Image } from "react-native";
import React from 'react';

export function Modal({route}: any) {
    console.log(route);
    
    
    const {title, url} = route.params;
   return (
    <View style={styles.modal}>
        <Text style={styles.imageName}>
            {title}
        </Text>
        <Image
            style={styles.image}
            source={{
                uri: url
            }}
        />
    </View>
   ) 
    
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    imageName: {
        color: '#fff'
    },
    image: {
        alignSelf: 'stretch',
        flex: 1
    }
})