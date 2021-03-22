import { Text, View, StyleSheet,Image, Dimensions } from "react-native";
import React from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";

export function Modal({route}: any) {
    console.log(route);
    
    
    const {pictureTitle, pictureUrl} = route.params;
   return (
    <View style={styles.modal}>
        <Text style={styles.imageName}>
            {pictureTitle}
        </Text>
        <TouchableOpacity  
                  style={styles.wrapImg}
                  activeOpacity = { .5 } 
                  >
            <Image
                style={styles.image}
                source={{
                    uri: pictureUrl
                }}
            />
        </TouchableOpacity>
    </View>
   ) 
    
}

const styles = StyleSheet.create({
    wrapImg: {
        // height: Dimensions.get('window').height,
        height: 350,
        width: 350,
        // margin: 1,
        // padding: 1
        alignSelf: 'center'
    },
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    imageName: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 20
    },
    image: {
        alignSelf: 'stretch',
        flex: 1
    }
})