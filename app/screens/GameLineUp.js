import React,{Component} from 'react';
import {View,Text,ImageBackground,StyleSheet,Dimensions} from 'react-native';

import TopBar from '../components/TopBar'; 
import background from '../components/score/background.png';


class GameLineUp extends Component {

    render() {
        return(
            <ImageBackground source={background} style={styles.backImg}>
            <View>
                <TopBar title={'GAME STATS'} navigation={() => this.props.navigation.goBack()}/>
            </View>
            <Text>this must happen</Text>
            </ImageBackground>
        )
    }
}

const styles =StyleSheet.create({
    backImg:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
    },


})

export default GameLineUp;