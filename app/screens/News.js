import React, { Component } from 'react';
import{
    ScrollView,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Image,
    Text,
    View,

} from 'react-native';
import {
    Card,
    Button,
    Icon,
    ListItem
} from 'react-native-elements';

import TopBar from '../components/TopBar';

import background from '../images/background.png';

class News extends Component{
    render(){
        return(
            <ScrollView>
                <TopBar title={'NEWS'} navigation={()=> this.props.navigation.goBack()}/>
                <ImageBackground
                    source={background}
                    style={styles.backgroundContainer}
                >
                <TouchableOpacity>
                <Card
                    image={require('../images/sample.jpg')}
                >
                    <Text style={{marginBottom: 10,}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>

                </Card>
                </TouchableOpacity>

                </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    backgroundContainer:{
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height,
    }
});

export default News;