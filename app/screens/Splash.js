import React, { Component } from 'react';
import {
    Dimensions,
    ImageBackground
} from 'react-native';

import splashScreen from '../images/screen.png';

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