import React, { Component } from 'react';
import {
    View,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';

import splashScreen from '../images/screen.png';
import background from '../images/background.png';

class Splash extends Component{

    changeScreen(handler){
        handler.navigate('Select');
    }

    componentDidMount(){
        setTimeout( () => {this.changeScreen(this.props.navigation)}, 2500)
    }

    render(){
        return(
            
                <ImageBackground
                    source={splashScreen}
                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                >
                </ImageBackground>
            
        )
    }
}

export default Splash;