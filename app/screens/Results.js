import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions,
    ImageBackground
} from 'react-native';
import {
    Text,
    Divider,

} from 'react-native-elements';


import TopBar from '../components/TopBar';
import ScoreComponent from '../components/score/scoreComponent';

import image from '../images/Tlogo.png';
import background from '../components/score/background.png';
import ResultsComponent from '../components/score/resultsComponent';



class Results extends Component{
    constructor(props){
        super(props)
    }

    render(){
       // console.log('focus',this.props.tournament.results)
        return(
            <ImageBackground
                source={background}
                style={{height:Dimensions.get('window').height,
                        width:Dimensions.get('window').width }}
            >
                <View>
                     <TopBar title={'RESULTS'} navigation={()=> this.props.navigation.goBack()}/>
                </View>
            <ScrollView style={{flex: 1}}>
            <View>
                
                <ResultsComponent
                    teamA={'Manchester United'} 
                    teamAimage={image}
                    scoreA={'4'}
                    scoreB={'1'}
                    teamBimage={image}
                    teamB={'Manchester City'} 
                    date={'2018-05-29'} 
                    time={'14:00'}
                />
                       
                </View>
            </ScrollView>
            </ImageBackground>
            
        )
    }
}



export default Results;