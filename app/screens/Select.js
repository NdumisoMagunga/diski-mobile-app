import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground

} from 'react-native';
import {
    Button,
    Text
} from 'react-native-elements';

import background from '../images/background.png';
import logo from '../images/logo.png';

class Select extends Component{

    render(){
        return(
            <ScrollView style={styles.container}>
                <ImageBackground
                    source={background}
                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                >
                <View style={styles.logo_container}>
                <Image source={logo} style={{resizeMode: 'contain', marginTop:100, width: Dimensions.get("window").width/1.35,height:170,alignSelf:'center'}}/>
                </View>
                <Text style={styles.text}h4>WHO ARE YOU?</Text>
                <View>
                <Button
                    title="COACH"
                    titleStyle={{ fontWeight: "200" }}
                    buttonStyle={{
                    backgroundColor: "rgba(205, 0,0, 1)",
                    width: 300,
                    height: 40,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    width: 260
                }}
                onPress ={ () => {this.props.navigation.navigate('Login')}}
                containerStyle={{ marginTop: 20, alignSelf: 'center'}}
                />

                <Button
                    title="FAN"
                    titleStyle={{ fontWeight: "200" }}
                    buttonStyle={{
                    backgroundColor: "rgba(0, 0,0, 1)",
                    width: 300,
                    height: 40,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    width: 260
                }}
                onPress={ () => {this.props.navigation.navigate('Tournaments')}}

                containerStyle={{ marginTop: 20, alignSelf: 'center'}}
                />

                <Button
                    title="ADMIN"
                    titleStyle={{ fontWeight: "200" }}
                    buttonStyle={{
                    backgroundColor: "rgba(0, 0,0, 1)",
                    width: 300,
                    height: 40,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    width: 260
                }}
                onPress ={ () => {this.props.navigation.navigate('Login')}}
                containerStyle={{ marginTop: 20, alignSelf: 'center'}}
                />
                </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    logo:{
        resizeMode: 'contain',
        width: Dimensions.get("window").width/1.05,
    },
    logo_container:{
        alignSelf: 'center',
        marginTop: 20,
        width: Dimensions.get("window").width,

    },
    text:{
        textAlign: 'center',
        marginTop: 10,
        fontWeight:"200"
    }
});

export default Select;